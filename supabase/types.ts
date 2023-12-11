import { MergeDeep } from 'type-fest';
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

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Functions: {
        get_proposed_offers_for_email: {
          Args: {
            _affiliate: string | null;
            _email: string | undefined;
          };
        };
      };
      Tables: {
        group_buys: {
          Row: {
            meta_status: DatabaseGenerated['public']['Enums']['group_buy_meta_status'];
            status: DatabaseGenerated['public']['Enums']['group_buy_status'];
            participants_count_excluding_organizer: number;
            coords: string;
          };
          Insert: {
            coords: string;
          };
          Update: {
            coords?: string;
          };
        };
        addresses: {
          Row: {
            coords: string;
          };
          Insert: {
            coords: string;
          };
          Update: {
            coords?: string;
          };
        };
        invoice_lines: {
          Row: {
            total_vat_excluded: number;
            total_vat_included: number;
            vat_amount: number;
          };
        };
        invoices: {
          Row: {
            type: DatabaseGenerated['public']['Enums']['invoice_type'];
          };
        };
        providers: {
          Row: {
            coords: string;
          };
          Insert: {
            coords: string;
          };
          Update: {
            coords?: string;
          };
        };
        categories: {
          Row: {
            category_type: DatabaseGenerated['public']['Enums']['category_type'];
          };
        };
      };
    };
  }
>;

export type SupabackEnumTypes = Database['public']['Enums'];
