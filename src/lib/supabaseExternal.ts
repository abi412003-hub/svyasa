import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyrssxaggwlkmavyxphv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cnNzeGFnZ3dsa21hdnl4cGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMDUwMTksImV4cCI6MjA4NTg4MTAxOX0.AGxURtSJTL0ib7bHqKWG8UnTqPwQFkKEh7zpwyIeCiM';

export const supabaseExternal = createClient(supabaseUrl, supabaseAnonKey);
