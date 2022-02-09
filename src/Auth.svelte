<script>
    import {supabase} from "./supabaseClient"
    import Radio from './Radio.svelte'
  
    let loading = false
    let signUp = false
    let email, password, confirmPassword;

    const radioOptions = [{
        value: false,
        label: "Log In"
    },{
        value: true,
        label: "Sign Up"
    }]
  
    const handleLogin = async () => {
      try {
        loading = true
        const { user, error } = await supabase.auth.signIn({
            email: email,
            password: password,
        })
        if (error) throw error
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        loading = false
      }
    }

    const handleSignUp = async () => {
        if (confirmPassword !== password) {
            alert("The passwords don't match!")
            return
        }
        try {
            loading = true
            const { user, session, error } = await supabase.auth.signUp({
                email: email,
                password: password
            },{redirectTo: window.location.href})
            if (error) throw error
            alert("Please verify your email address now, before trying to log in...")
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }
    }

  </script>
  
  <form class="row flex flex-center" on:submit|preventDefault={signUp ? handleSignUp : handleLogin}>
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Svelte</h1>
      <Radio options={radioOptions} fontSize={16} bind:userSelected={signUp}/>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <div>
            <input
          class="inputField"
          type="email"
          placeholder="Your email"
          bind:value={email}
        />
        </div>
        <div>
            <input
          class="inputField"
          type="password"
          placeholder="Your password"
          bind:value={password}
        />
        </div>
        {#if signUp}
            <div>
                <input
            class="inputField"
            type="password"
            placeholder="Confirm your password"
            bind:value={confirmPassword}
            />
            </div>
        {/if}
      </div>
      <div>
        <input type="submit" class='button block' value={loading ? "Loading" : signUp ? "Sign Up" : "Log In"} disabled={loading} />
      </div>
    </div>
  </form>