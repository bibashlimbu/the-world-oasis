import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qbiynsacfnkrlncdwjrw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiaXluc2FjZm5rcmxuY2R3anJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNDEwMTAsImV4cCI6MjAzMjgxNzAxMH0.lgdrFpMt_2XzftoJdQ0-Jt6VxMSvLcU7tlj5DOxYrvk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
