import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing API keys for Supabase')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
