import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smujntqlaxarcyriwzxd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtdWpudHFsYXhhcmN5cml3enhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MTU5NTQsImV4cCI6MTk1OTk5MTk1NH0.ixSeGY-wRpwx8FEqzIQdevYqPlxR4qO6F85f4kEncxk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)