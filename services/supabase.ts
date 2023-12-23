import { createClient } from '@supabase/supabase-js';
const URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(URL as string, SERVICE_KEY as string, {
    auth: {
        autoRefreshToken: true,
    },
});
export default supabase;
