import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ushenoszxuzqjsluxckj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaGVub3N6eHV6cWpzbHV4Y2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUwMzkwODQsImV4cCI6MTk2MDYxNTA4NH0.otHWPzeBQm8csM5UaOaHYRA_5trtnlfoToDILMg4xqk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)