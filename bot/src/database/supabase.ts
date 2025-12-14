import { Database } from '@database/types/generic.types';
import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = async () => {
  const supabase = await createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.ANON_KEY,
  );

  return supabase;
};
