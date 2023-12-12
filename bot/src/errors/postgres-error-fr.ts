export class PostgresErrorFr extends Error {
  code: number;
  context: object | undefined;

  constructor(message: string, code: string, context?: object) {
    super(getErrorMessage(code, message));
    this.name = 'PostgresErrorFr';
    this.code = getHttpStatusCode(code);
    this.context = context;
  }
}

const generateDuplicateKeysError = (keys: string[]) => {
  return keys.reduce<Record<string, string>>((previous, key) => {
    return {
      ...previous,
      ...getDuplicateKeyValuesError(key),
    };
  }, {});
};
const getDuplicateKeyValuesError = (key: string) => {
  return {
    [`duplicate key value violates unique constraint "${key}"`]: `duplicate-${key.replace(/_/g, '-')}`,
  };
};

const getSupabaseErrorValues = (): Record<string, string> => {
  return Object.fromEntries(Object.entries(SUPABASE_ERROR_KEYS).map(([key, value]) => [value, key]));
};

export const SUPABASE_ERROR_KEYS: Record<string, string> = {
  ...generateDuplicateKeysError(['profiles_phone_key', 'email_provider_id']),
};
export const SUPABASE_ERROR_VALUES = getSupabaseErrorValues();

const getErrorMessage = (code: string, message: string) => {
  console.error('PostgresError', { code, message: formatConsoleErrorMessage(message) });
  return formatErrorMessage(message);
};

const formatConsoleErrorMessage = (message: string) => {
  const isNewError = Object.keys(SUPABASE_ERROR_KEYS).findIndex((errorKey) => message === errorKey) === -1;
  return isNewError ? `NEW ERROR : ${message}` : message;
};

const formatErrorMessage = (message: string) => {
  const supabaseErrorKeys = Object.keys(SUPABASE_ERROR_KEYS);
  const index = supabaseErrorKeys.findIndex((errorKey) => message === errorKey);
  const supabaseErrorKey = supabaseErrorKeys[index];
  const supabaseError = SUPABASE_ERROR_KEYS[supabaseErrorKey];
  return supabaseError;
};

/**
 * @see https://postgrest.org/en/stable/errors.html#http-status-codes
 */
const getHttpStatusCode = (code: string) => {
  if (code === '42501') return 403;
  if (code === '23505') return 409;
  return 400;
};
