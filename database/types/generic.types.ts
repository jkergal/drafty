import { Database as DatabaseGenerated } from './database.types';
type Tables = Database['public']['Tables'];

export type SupabackTypes<
  TableName extends string & keyof Tables,
  GenericTableKeys extends string & ('Row' | 'Insert' | 'Update') = 'Row',
> = Tables[TableName][GenericTableKeys];

export type SupabackFonctionReturn<T extends keyof SupabackFunction> = SupabackFunction[T]['Returns'];
export type ArrayElement<T> = T extends readonly unknown[] ? T[0] : never;
export type NotNullable<T> = Exclude<T, null>;
export type Modify<T, R> = Omit<T, keyof R> & R;

export type ElementWithNullableValue<T, R extends keyof T> = Omit<T, R> & Record<R, T[R] | null>;

export type SupabackFunction = Database['public']['Functions'];

export type Database = DatabaseGenerated;

export type SupabackEnumTypes = Database['public']['Enums'];
