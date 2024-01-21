import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hlgpuhedqbejhkvzijhl.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZ3B1aGVkcWJlamhrdnppamhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4MTA3NTAsImV4cCI6MjAyMTM4Njc1MH0.7CslTadWXZjsgdn5I4tSiH3GeZoPp56qi-7BjEwHCt0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
