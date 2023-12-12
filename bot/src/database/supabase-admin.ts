import { Database } from '@database/database.types';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.API_URL;
const supabaseServiceRoleKey = process.env.SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);
