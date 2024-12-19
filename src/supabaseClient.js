import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://kbstqugvqigwohpplsay.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtic3RxdWd2cWlnd29ocHBsc2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MTE3MjQsImV4cCI6MjA1MDA4NzcyNH0.WYWvePnG2A6HVv1PkGMOjGDJiG52eF1gzhb6GWIS-QI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
