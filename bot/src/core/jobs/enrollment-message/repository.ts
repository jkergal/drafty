import { PostgresErrorFr } from '@/errors/postgres-error-fr';
import { TablesInsert } from '@database/types/__generated__/database.types';
import { Database } from '@database/types/generic.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { objectToCamel } from 'ts-case-convert';

export const createPod = async (
  supabase: SupabaseClient<Database>,
  params: TablesInsert<'pods'>,
) => {
  const { data, error } = await supabase.from('pods').insert(params).select().single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};

export const createEnrollmentMessage = async (
  supabase: SupabaseClient<Database>,
  params: TablesInsert<'enrollment_messages'>,
) => {
  const { data, error } = await supabase
    .from('enrollment_messages')
    .insert(params)
    .select();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};
