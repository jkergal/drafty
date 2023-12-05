
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model drafty_configurations
 * 
 */
export type drafty_configurations = $Result.DefaultSelection<Prisma.$drafty_configurationsPayload>
/**
 * Model enrollment_messages
 * 
 */
export type enrollment_messages = $Result.DefaultSelection<Prisma.$enrollment_messagesPayload>
/**
 * Model game_tables
 * 
 */
export type game_tables = $Result.DefaultSelection<Prisma.$game_tablesPayload>
/**
 * Model pods
 * 
 */
export type pods = $Result.DefaultSelection<Prisma.$podsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drafty_configurations
 * const drafty_configurations = await prisma.drafty_configurations.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Drafty_configurations
   * const drafty_configurations = await prisma.drafty_configurations.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.drafty_configurations`: Exposes CRUD operations for the **drafty_configurations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drafty_configurations
    * const drafty_configurations = await prisma.drafty_configurations.findMany()
    * ```
    */
  get drafty_configurations(): Prisma.drafty_configurationsDelegate<ExtArgs>;

  /**
   * `prisma.enrollment_messages`: Exposes CRUD operations for the **enrollment_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollment_messages
    * const enrollment_messages = await prisma.enrollment_messages.findMany()
    * ```
    */
  get enrollment_messages(): Prisma.enrollment_messagesDelegate<ExtArgs>;

  /**
   * `prisma.game_tables`: Exposes CRUD operations for the **game_tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Game_tables
    * const game_tables = await prisma.game_tables.findMany()
    * ```
    */
  get game_tables(): Prisma.game_tablesDelegate<ExtArgs>;

  /**
   * `prisma.pods`: Exposes CRUD operations for the **pods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pods
    * const pods = await prisma.pods.findMany()
    * ```
    */
  get pods(): Prisma.podsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    drafty_configurations: 'drafty_configurations',
    enrollment_messages: 'enrollment_messages',
    game_tables: 'game_tables',
    pods: 'pods'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'drafty_configurations' | 'enrollment_messages' | 'game_tables' | 'pods'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      drafty_configurations: {
        payload: Prisma.$drafty_configurationsPayload<ExtArgs>
        fields: Prisma.drafty_configurationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.drafty_configurationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.drafty_configurationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          findFirst: {
            args: Prisma.drafty_configurationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.drafty_configurationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          findMany: {
            args: Prisma.drafty_configurationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>[]
          }
          create: {
            args: Prisma.drafty_configurationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          createMany: {
            args: Prisma.drafty_configurationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.drafty_configurationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          update: {
            args: Prisma.drafty_configurationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          deleteMany: {
            args: Prisma.drafty_configurationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.drafty_configurationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.drafty_configurationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drafty_configurationsPayload>
          }
          aggregate: {
            args: Prisma.Drafty_configurationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDrafty_configurations>
          }
          groupBy: {
            args: Prisma.drafty_configurationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Drafty_configurationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.drafty_configurationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Drafty_configurationsCountAggregateOutputType> | number
          }
        }
      }
      enrollment_messages: {
        payload: Prisma.$enrollment_messagesPayload<ExtArgs>
        fields: Prisma.enrollment_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollment_messagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollment_messagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          findFirst: {
            args: Prisma.enrollment_messagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollment_messagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          findMany: {
            args: Prisma.enrollment_messagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>[]
          }
          create: {
            args: Prisma.enrollment_messagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          createMany: {
            args: Prisma.enrollment_messagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.enrollment_messagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          update: {
            args: Prisma.enrollment_messagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          deleteMany: {
            args: Prisma.enrollment_messagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.enrollment_messagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.enrollment_messagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enrollment_messagesPayload>
          }
          aggregate: {
            args: Prisma.Enrollment_messagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrollment_messages>
          }
          groupBy: {
            args: Prisma.enrollment_messagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Enrollment_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollment_messagesCountArgs<ExtArgs>,
            result: $Utils.Optional<Enrollment_messagesCountAggregateOutputType> | number
          }
        }
      }
      game_tables: {
        payload: Prisma.$game_tablesPayload<ExtArgs>
        fields: Prisma.game_tablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.game_tablesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.game_tablesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          findFirst: {
            args: Prisma.game_tablesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.game_tablesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          findMany: {
            args: Prisma.game_tablesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>[]
          }
          create: {
            args: Prisma.game_tablesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          createMany: {
            args: Prisma.game_tablesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.game_tablesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          update: {
            args: Prisma.game_tablesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          deleteMany: {
            args: Prisma.game_tablesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.game_tablesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.game_tablesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$game_tablesPayload>
          }
          aggregate: {
            args: Prisma.Game_tablesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGame_tables>
          }
          groupBy: {
            args: Prisma.game_tablesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Game_tablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.game_tablesCountArgs<ExtArgs>,
            result: $Utils.Optional<Game_tablesCountAggregateOutputType> | number
          }
        }
      }
      pods: {
        payload: Prisma.$podsPayload<ExtArgs>
        fields: Prisma.podsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.podsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.podsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          findFirst: {
            args: Prisma.podsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.podsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          findMany: {
            args: Prisma.podsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>[]
          }
          create: {
            args: Prisma.podsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          createMany: {
            args: Prisma.podsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.podsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          update: {
            args: Prisma.podsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          deleteMany: {
            args: Prisma.podsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.podsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.podsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$podsPayload>
          }
          aggregate: {
            args: Prisma.PodsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePods>
          }
          groupBy: {
            args: Prisma.podsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.podsCountArgs<ExtArgs>,
            result: $Utils.Optional<PodsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Enrollment_messagesCountOutputType
   */

  export type Enrollment_messagesCountOutputType = {
    pods: number
  }

  export type Enrollment_messagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pods?: boolean | Enrollment_messagesCountOutputTypeCountPodsArgs
  }

  // Custom InputTypes

  /**
   * Enrollment_messagesCountOutputType without action
   */
  export type Enrollment_messagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment_messagesCountOutputType
     */
    select?: Enrollment_messagesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Enrollment_messagesCountOutputType without action
   */
  export type Enrollment_messagesCountOutputTypeCountPodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: podsWhereInput
  }



  /**
   * Count Type PodsCountOutputType
   */

  export type PodsCountOutputType = {
    game_tables: number
  }

  export type PodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_tables?: boolean | PodsCountOutputTypeCountGame_tablesArgs
  }

  // Custom InputTypes

  /**
   * PodsCountOutputType without action
   */
  export type PodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodsCountOutputType
     */
    select?: PodsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PodsCountOutputType without action
   */
  export type PodsCountOutputTypeCountGame_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_tablesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model drafty_configurations
   */

  export type AggregateDrafty_configurations = {
    _count: Drafty_configurationsCountAggregateOutputType | null
    _min: Drafty_configurationsMinAggregateOutputType | null
    _max: Drafty_configurationsMaxAggregateOutputType | null
  }

  export type Drafty_configurationsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    scheduled_message: string | null
    checkin_message: string | null
    cron_date: string | null
    current_mtg_format: string | null
  }

  export type Drafty_configurationsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    scheduled_message: string | null
    checkin_message: string | null
    cron_date: string | null
    current_mtg_format: string | null
  }

  export type Drafty_configurationsCountAggregateOutputType = {
    id: number
    created_at: number
    scheduled_message: number
    checkin_message: number
    cron_date: number
    current_mtg_format: number
    _all: number
  }


  export type Drafty_configurationsMinAggregateInputType = {
    id?: true
    created_at?: true
    scheduled_message?: true
    checkin_message?: true
    cron_date?: true
    current_mtg_format?: true
  }

  export type Drafty_configurationsMaxAggregateInputType = {
    id?: true
    created_at?: true
    scheduled_message?: true
    checkin_message?: true
    cron_date?: true
    current_mtg_format?: true
  }

  export type Drafty_configurationsCountAggregateInputType = {
    id?: true
    created_at?: true
    scheduled_message?: true
    checkin_message?: true
    cron_date?: true
    current_mtg_format?: true
    _all?: true
  }

  export type Drafty_configurationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drafty_configurations to aggregate.
     */
    where?: drafty_configurationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drafty_configurations to fetch.
     */
    orderBy?: drafty_configurationsOrderByWithRelationInput | drafty_configurationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: drafty_configurationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drafty_configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drafty_configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drafty_configurations
    **/
    _count?: true | Drafty_configurationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Drafty_configurationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Drafty_configurationsMaxAggregateInputType
  }

  export type GetDrafty_configurationsAggregateType<T extends Drafty_configurationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDrafty_configurations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrafty_configurations[P]>
      : GetScalarType<T[P], AggregateDrafty_configurations[P]>
  }




  export type drafty_configurationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: drafty_configurationsWhereInput
    orderBy?: drafty_configurationsOrderByWithAggregationInput | drafty_configurationsOrderByWithAggregationInput[]
    by: Drafty_configurationsScalarFieldEnum[] | Drafty_configurationsScalarFieldEnum
    having?: drafty_configurationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Drafty_configurationsCountAggregateInputType | true
    _min?: Drafty_configurationsMinAggregateInputType
    _max?: Drafty_configurationsMaxAggregateInputType
  }

  export type Drafty_configurationsGroupByOutputType = {
    id: string
    created_at: Date | null
    scheduled_message: string
    checkin_message: string
    cron_date: string
    current_mtg_format: string
    _count: Drafty_configurationsCountAggregateOutputType | null
    _min: Drafty_configurationsMinAggregateOutputType | null
    _max: Drafty_configurationsMaxAggregateOutputType | null
  }

  type GetDrafty_configurationsGroupByPayload<T extends drafty_configurationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Drafty_configurationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Drafty_configurationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Drafty_configurationsGroupByOutputType[P]>
            : GetScalarType<T[P], Drafty_configurationsGroupByOutputType[P]>
        }
      >
    >


  export type drafty_configurationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    scheduled_message?: boolean
    checkin_message?: boolean
    cron_date?: boolean
    current_mtg_format?: boolean
  }, ExtArgs["result"]["drafty_configurations"]>

  export type drafty_configurationsSelectScalar = {
    id?: boolean
    created_at?: boolean
    scheduled_message?: boolean
    checkin_message?: boolean
    cron_date?: boolean
    current_mtg_format?: boolean
  }


  export type $drafty_configurationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drafty_configurations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      scheduled_message: string
      checkin_message: string
      cron_date: string
      current_mtg_format: string
    }, ExtArgs["result"]["drafty_configurations"]>
    composites: {}
  }


  type drafty_configurationsGetPayload<S extends boolean | null | undefined | drafty_configurationsDefaultArgs> = $Result.GetResult<Prisma.$drafty_configurationsPayload, S>

  type drafty_configurationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<drafty_configurationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Drafty_configurationsCountAggregateInputType | true
    }

  export interface drafty_configurationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drafty_configurations'], meta: { name: 'drafty_configurations' } }
    /**
     * Find zero or one Drafty_configurations that matches the filter.
     * @param {drafty_configurationsFindUniqueArgs} args - Arguments to find a Drafty_configurations
     * @example
     * // Get one Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends drafty_configurationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsFindUniqueArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Drafty_configurations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {drafty_configurationsFindUniqueOrThrowArgs} args - Arguments to find a Drafty_configurations
     * @example
     * // Get one Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends drafty_configurationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Drafty_configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsFindFirstArgs} args - Arguments to find a Drafty_configurations
     * @example
     * // Get one Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends drafty_configurationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsFindFirstArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Drafty_configurations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsFindFirstOrThrowArgs} args - Arguments to find a Drafty_configurations
     * @example
     * // Get one Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends drafty_configurationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Drafty_configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findMany()
     * 
     * // Get first 10 Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drafty_configurationsWithIdOnly = await prisma.drafty_configurations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends drafty_configurationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Drafty_configurations.
     * @param {drafty_configurationsCreateArgs} args - Arguments to create a Drafty_configurations.
     * @example
     * // Create one Drafty_configurations
     * const Drafty_configurations = await prisma.drafty_configurations.create({
     *   data: {
     *     // ... data to create a Drafty_configurations
     *   }
     * })
     * 
    **/
    create<T extends drafty_configurationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsCreateArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Drafty_configurations.
     *     @param {drafty_configurationsCreateManyArgs} args - Arguments to create many Drafty_configurations.
     *     @example
     *     // Create many Drafty_configurations
     *     const drafty_configurations = await prisma.drafty_configurations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends drafty_configurationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Drafty_configurations.
     * @param {drafty_configurationsDeleteArgs} args - Arguments to delete one Drafty_configurations.
     * @example
     * // Delete one Drafty_configurations
     * const Drafty_configurations = await prisma.drafty_configurations.delete({
     *   where: {
     *     // ... filter to delete one Drafty_configurations
     *   }
     * })
     * 
    **/
    delete<T extends drafty_configurationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsDeleteArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Drafty_configurations.
     * @param {drafty_configurationsUpdateArgs} args - Arguments to update one Drafty_configurations.
     * @example
     * // Update one Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends drafty_configurationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsUpdateArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Drafty_configurations.
     * @param {drafty_configurationsDeleteManyArgs} args - Arguments to filter Drafty_configurations to delete.
     * @example
     * // Delete a few Drafty_configurations
     * const { count } = await prisma.drafty_configurations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends drafty_configurationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drafty_configurationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafty_configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends drafty_configurationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Drafty_configurations.
     * @param {drafty_configurationsUpsertArgs} args - Arguments to update or create a Drafty_configurations.
     * @example
     * // Update or create a Drafty_configurations
     * const drafty_configurations = await prisma.drafty_configurations.upsert({
     *   create: {
     *     // ... data to create a Drafty_configurations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drafty_configurations we want to update
     *   }
     * })
    **/
    upsert<T extends drafty_configurationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, drafty_configurationsUpsertArgs<ExtArgs>>
    ): Prisma__drafty_configurationsClient<$Result.GetResult<Prisma.$drafty_configurationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Drafty_configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsCountArgs} args - Arguments to filter Drafty_configurations to count.
     * @example
     * // Count the number of Drafty_configurations
     * const count = await prisma.drafty_configurations.count({
     *   where: {
     *     // ... the filter for the Drafty_configurations we want to count
     *   }
     * })
    **/
    count<T extends drafty_configurationsCountArgs>(
      args?: Subset<T, drafty_configurationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Drafty_configurationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drafty_configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drafty_configurationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Drafty_configurationsAggregateArgs>(args: Subset<T, Drafty_configurationsAggregateArgs>): Prisma.PrismaPromise<GetDrafty_configurationsAggregateType<T>>

    /**
     * Group by Drafty_configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drafty_configurationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends drafty_configurationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: drafty_configurationsGroupByArgs['orderBy'] }
        : { orderBy?: drafty_configurationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, drafty_configurationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrafty_configurationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drafty_configurations model
   */
  readonly fields: drafty_configurationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drafty_configurations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__drafty_configurationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the drafty_configurations model
   */ 
  interface drafty_configurationsFieldRefs {
    readonly id: FieldRef<"drafty_configurations", 'String'>
    readonly created_at: FieldRef<"drafty_configurations", 'DateTime'>
    readonly scheduled_message: FieldRef<"drafty_configurations", 'String'>
    readonly checkin_message: FieldRef<"drafty_configurations", 'String'>
    readonly cron_date: FieldRef<"drafty_configurations", 'String'>
    readonly current_mtg_format: FieldRef<"drafty_configurations", 'String'>
  }
    

  // Custom InputTypes

  /**
   * drafty_configurations findUnique
   */
  export type drafty_configurationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter, which drafty_configurations to fetch.
     */
    where: drafty_configurationsWhereUniqueInput
  }


  /**
   * drafty_configurations findUniqueOrThrow
   */
  export type drafty_configurationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter, which drafty_configurations to fetch.
     */
    where: drafty_configurationsWhereUniqueInput
  }


  /**
   * drafty_configurations findFirst
   */
  export type drafty_configurationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter, which drafty_configurations to fetch.
     */
    where?: drafty_configurationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drafty_configurations to fetch.
     */
    orderBy?: drafty_configurationsOrderByWithRelationInput | drafty_configurationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drafty_configurations.
     */
    cursor?: drafty_configurationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drafty_configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drafty_configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drafty_configurations.
     */
    distinct?: Drafty_configurationsScalarFieldEnum | Drafty_configurationsScalarFieldEnum[]
  }


  /**
   * drafty_configurations findFirstOrThrow
   */
  export type drafty_configurationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter, which drafty_configurations to fetch.
     */
    where?: drafty_configurationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drafty_configurations to fetch.
     */
    orderBy?: drafty_configurationsOrderByWithRelationInput | drafty_configurationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drafty_configurations.
     */
    cursor?: drafty_configurationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drafty_configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drafty_configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drafty_configurations.
     */
    distinct?: Drafty_configurationsScalarFieldEnum | Drafty_configurationsScalarFieldEnum[]
  }


  /**
   * drafty_configurations findMany
   */
  export type drafty_configurationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter, which drafty_configurations to fetch.
     */
    where?: drafty_configurationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drafty_configurations to fetch.
     */
    orderBy?: drafty_configurationsOrderByWithRelationInput | drafty_configurationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drafty_configurations.
     */
    cursor?: drafty_configurationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drafty_configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drafty_configurations.
     */
    skip?: number
    distinct?: Drafty_configurationsScalarFieldEnum | Drafty_configurationsScalarFieldEnum[]
  }


  /**
   * drafty_configurations create
   */
  export type drafty_configurationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * The data needed to create a drafty_configurations.
     */
    data: XOR<drafty_configurationsCreateInput, drafty_configurationsUncheckedCreateInput>
  }


  /**
   * drafty_configurations createMany
   */
  export type drafty_configurationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drafty_configurations.
     */
    data: drafty_configurationsCreateManyInput | drafty_configurationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * drafty_configurations update
   */
  export type drafty_configurationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * The data needed to update a drafty_configurations.
     */
    data: XOR<drafty_configurationsUpdateInput, drafty_configurationsUncheckedUpdateInput>
    /**
     * Choose, which drafty_configurations to update.
     */
    where: drafty_configurationsWhereUniqueInput
  }


  /**
   * drafty_configurations updateMany
   */
  export type drafty_configurationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drafty_configurations.
     */
    data: XOR<drafty_configurationsUpdateManyMutationInput, drafty_configurationsUncheckedUpdateManyInput>
    /**
     * Filter which drafty_configurations to update
     */
    where?: drafty_configurationsWhereInput
  }


  /**
   * drafty_configurations upsert
   */
  export type drafty_configurationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * The filter to search for the drafty_configurations to update in case it exists.
     */
    where: drafty_configurationsWhereUniqueInput
    /**
     * In case the drafty_configurations found by the `where` argument doesn't exist, create a new drafty_configurations with this data.
     */
    create: XOR<drafty_configurationsCreateInput, drafty_configurationsUncheckedCreateInput>
    /**
     * In case the drafty_configurations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<drafty_configurationsUpdateInput, drafty_configurationsUncheckedUpdateInput>
  }


  /**
   * drafty_configurations delete
   */
  export type drafty_configurationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
    /**
     * Filter which drafty_configurations to delete.
     */
    where: drafty_configurationsWhereUniqueInput
  }


  /**
   * drafty_configurations deleteMany
   */
  export type drafty_configurationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drafty_configurations to delete
     */
    where?: drafty_configurationsWhereInput
  }


  /**
   * drafty_configurations without action
   */
  export type drafty_configurationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drafty_configurations
     */
    select?: drafty_configurationsSelect<ExtArgs> | null
  }



  /**
   * Model enrollment_messages
   */

  export type AggregateEnrollment_messages = {
    _count: Enrollment_messagesCountAggregateOutputType | null
    _min: Enrollment_messagesMinAggregateOutputType | null
    _max: Enrollment_messagesMaxAggregateOutputType | null
  }

  export type Enrollment_messagesMinAggregateOutputType = {
    id: string | null
    sent_at: Date | null
    discord_id: string | null
  }

  export type Enrollment_messagesMaxAggregateOutputType = {
    id: string | null
    sent_at: Date | null
    discord_id: string | null
  }

  export type Enrollment_messagesCountAggregateOutputType = {
    id: number
    sent_at: number
    discord_id: number
    _all: number
  }


  export type Enrollment_messagesMinAggregateInputType = {
    id?: true
    sent_at?: true
    discord_id?: true
  }

  export type Enrollment_messagesMaxAggregateInputType = {
    id?: true
    sent_at?: true
    discord_id?: true
  }

  export type Enrollment_messagesCountAggregateInputType = {
    id?: true
    sent_at?: true
    discord_id?: true
    _all?: true
  }

  export type Enrollment_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment_messages to aggregate.
     */
    where?: enrollment_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollment_messages to fetch.
     */
    orderBy?: enrollment_messagesOrderByWithRelationInput | enrollment_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollment_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollment_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollment_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollment_messages
    **/
    _count?: true | Enrollment_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Enrollment_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Enrollment_messagesMaxAggregateInputType
  }

  export type GetEnrollment_messagesAggregateType<T extends Enrollment_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment_messages[P]>
      : GetScalarType<T[P], AggregateEnrollment_messages[P]>
  }




  export type enrollment_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollment_messagesWhereInput
    orderBy?: enrollment_messagesOrderByWithAggregationInput | enrollment_messagesOrderByWithAggregationInput[]
    by: Enrollment_messagesScalarFieldEnum[] | Enrollment_messagesScalarFieldEnum
    having?: enrollment_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Enrollment_messagesCountAggregateInputType | true
    _min?: Enrollment_messagesMinAggregateInputType
    _max?: Enrollment_messagesMaxAggregateInputType
  }

  export type Enrollment_messagesGroupByOutputType = {
    id: string
    sent_at: Date | null
    discord_id: string
    _count: Enrollment_messagesCountAggregateOutputType | null
    _min: Enrollment_messagesMinAggregateOutputType | null
    _max: Enrollment_messagesMaxAggregateOutputType | null
  }

  type GetEnrollment_messagesGroupByPayload<T extends enrollment_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Enrollment_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Enrollment_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Enrollment_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Enrollment_messagesGroupByOutputType[P]>
        }
      >
    >


  export type enrollment_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sent_at?: boolean
    discord_id?: boolean
    pods?: boolean | enrollment_messages$podsArgs<ExtArgs>
    _count?: boolean | Enrollment_messagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment_messages"]>

  export type enrollment_messagesSelectScalar = {
    id?: boolean
    sent_at?: boolean
    discord_id?: boolean
  }

  export type enrollment_messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pods?: boolean | enrollment_messages$podsArgs<ExtArgs>
    _count?: boolean | Enrollment_messagesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $enrollment_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollment_messages"
    objects: {
      pods: Prisma.$podsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sent_at: Date | null
      discord_id: string
    }, ExtArgs["result"]["enrollment_messages"]>
    composites: {}
  }


  type enrollment_messagesGetPayload<S extends boolean | null | undefined | enrollment_messagesDefaultArgs> = $Result.GetResult<Prisma.$enrollment_messagesPayload, S>

  type enrollment_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<enrollment_messagesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Enrollment_messagesCountAggregateInputType | true
    }

  export interface enrollment_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollment_messages'], meta: { name: 'enrollment_messages' } }
    /**
     * Find zero or one Enrollment_messages that matches the filter.
     * @param {enrollment_messagesFindUniqueArgs} args - Arguments to find a Enrollment_messages
     * @example
     * // Get one Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends enrollment_messagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesFindUniqueArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Enrollment_messages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {enrollment_messagesFindUniqueOrThrowArgs} args - Arguments to find a Enrollment_messages
     * @example
     * // Get one Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends enrollment_messagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Enrollment_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesFindFirstArgs} args - Arguments to find a Enrollment_messages
     * @example
     * // Get one Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends enrollment_messagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesFindFirstArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Enrollment_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesFindFirstOrThrowArgs} args - Arguments to find a Enrollment_messages
     * @example
     * // Get one Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends enrollment_messagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Enrollment_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findMany()
     * 
     * // Get first 10 Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollment_messagesWithIdOnly = await prisma.enrollment_messages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends enrollment_messagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Enrollment_messages.
     * @param {enrollment_messagesCreateArgs} args - Arguments to create a Enrollment_messages.
     * @example
     * // Create one Enrollment_messages
     * const Enrollment_messages = await prisma.enrollment_messages.create({
     *   data: {
     *     // ... data to create a Enrollment_messages
     *   }
     * })
     * 
    **/
    create<T extends enrollment_messagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesCreateArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Enrollment_messages.
     *     @param {enrollment_messagesCreateManyArgs} args - Arguments to create many Enrollment_messages.
     *     @example
     *     // Create many Enrollment_messages
     *     const enrollment_messages = await prisma.enrollment_messages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends enrollment_messagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment_messages.
     * @param {enrollment_messagesDeleteArgs} args - Arguments to delete one Enrollment_messages.
     * @example
     * // Delete one Enrollment_messages
     * const Enrollment_messages = await prisma.enrollment_messages.delete({
     *   where: {
     *     // ... filter to delete one Enrollment_messages
     *   }
     * })
     * 
    **/
    delete<T extends enrollment_messagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesDeleteArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Enrollment_messages.
     * @param {enrollment_messagesUpdateArgs} args - Arguments to update one Enrollment_messages.
     * @example
     * // Update one Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends enrollment_messagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesUpdateArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Enrollment_messages.
     * @param {enrollment_messagesDeleteManyArgs} args - Arguments to filter Enrollment_messages to delete.
     * @example
     * // Delete a few Enrollment_messages
     * const { count } = await prisma.enrollment_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends enrollment_messagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollment_messagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollment_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends enrollment_messagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment_messages.
     * @param {enrollment_messagesUpsertArgs} args - Arguments to update or create a Enrollment_messages.
     * @example
     * // Update or create a Enrollment_messages
     * const enrollment_messages = await prisma.enrollment_messages.upsert({
     *   create: {
     *     // ... data to create a Enrollment_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment_messages we want to update
     *   }
     * })
    **/
    upsert<T extends enrollment_messagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, enrollment_messagesUpsertArgs<ExtArgs>>
    ): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Enrollment_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesCountArgs} args - Arguments to filter Enrollment_messages to count.
     * @example
     * // Count the number of Enrollment_messages
     * const count = await prisma.enrollment_messages.count({
     *   where: {
     *     // ... the filter for the Enrollment_messages we want to count
     *   }
     * })
    **/
    count<T extends enrollment_messagesCountArgs>(
      args?: Subset<T, enrollment_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Enrollment_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Enrollment_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Enrollment_messagesAggregateArgs>(args: Subset<T, Enrollment_messagesAggregateArgs>): Prisma.PrismaPromise<GetEnrollment_messagesAggregateType<T>>

    /**
     * Group by Enrollment_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollment_messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrollment_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollment_messagesGroupByArgs['orderBy'] }
        : { orderBy?: enrollment_messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrollment_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollment_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollment_messages model
   */
  readonly fields: enrollment_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollment_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollment_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pods<T extends enrollment_messages$podsArgs<ExtArgs> = {}>(args?: Subset<T, enrollment_messages$podsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the enrollment_messages model
   */ 
  interface enrollment_messagesFieldRefs {
    readonly id: FieldRef<"enrollment_messages", 'String'>
    readonly sent_at: FieldRef<"enrollment_messages", 'DateTime'>
    readonly discord_id: FieldRef<"enrollment_messages", 'String'>
  }
    

  // Custom InputTypes

  /**
   * enrollment_messages findUnique
   */
  export type enrollment_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter, which enrollment_messages to fetch.
     */
    where: enrollment_messagesWhereUniqueInput
  }


  /**
   * enrollment_messages findUniqueOrThrow
   */
  export type enrollment_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter, which enrollment_messages to fetch.
     */
    where: enrollment_messagesWhereUniqueInput
  }


  /**
   * enrollment_messages findFirst
   */
  export type enrollment_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter, which enrollment_messages to fetch.
     */
    where?: enrollment_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollment_messages to fetch.
     */
    orderBy?: enrollment_messagesOrderByWithRelationInput | enrollment_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollment_messages.
     */
    cursor?: enrollment_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollment_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollment_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollment_messages.
     */
    distinct?: Enrollment_messagesScalarFieldEnum | Enrollment_messagesScalarFieldEnum[]
  }


  /**
   * enrollment_messages findFirstOrThrow
   */
  export type enrollment_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter, which enrollment_messages to fetch.
     */
    where?: enrollment_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollment_messages to fetch.
     */
    orderBy?: enrollment_messagesOrderByWithRelationInput | enrollment_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollment_messages.
     */
    cursor?: enrollment_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollment_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollment_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollment_messages.
     */
    distinct?: Enrollment_messagesScalarFieldEnum | Enrollment_messagesScalarFieldEnum[]
  }


  /**
   * enrollment_messages findMany
   */
  export type enrollment_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter, which enrollment_messages to fetch.
     */
    where?: enrollment_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollment_messages to fetch.
     */
    orderBy?: enrollment_messagesOrderByWithRelationInput | enrollment_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollment_messages.
     */
    cursor?: enrollment_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollment_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollment_messages.
     */
    skip?: number
    distinct?: Enrollment_messagesScalarFieldEnum | Enrollment_messagesScalarFieldEnum[]
  }


  /**
   * enrollment_messages create
   */
  export type enrollment_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollment_messages.
     */
    data: XOR<enrollment_messagesCreateInput, enrollment_messagesUncheckedCreateInput>
  }


  /**
   * enrollment_messages createMany
   */
  export type enrollment_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollment_messages.
     */
    data: enrollment_messagesCreateManyInput | enrollment_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * enrollment_messages update
   */
  export type enrollment_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollment_messages.
     */
    data: XOR<enrollment_messagesUpdateInput, enrollment_messagesUncheckedUpdateInput>
    /**
     * Choose, which enrollment_messages to update.
     */
    where: enrollment_messagesWhereUniqueInput
  }


  /**
   * enrollment_messages updateMany
   */
  export type enrollment_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollment_messages.
     */
    data: XOR<enrollment_messagesUpdateManyMutationInput, enrollment_messagesUncheckedUpdateManyInput>
    /**
     * Filter which enrollment_messages to update
     */
    where?: enrollment_messagesWhereInput
  }


  /**
   * enrollment_messages upsert
   */
  export type enrollment_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollment_messages to update in case it exists.
     */
    where: enrollment_messagesWhereUniqueInput
    /**
     * In case the enrollment_messages found by the `where` argument doesn't exist, create a new enrollment_messages with this data.
     */
    create: XOR<enrollment_messagesCreateInput, enrollment_messagesUncheckedCreateInput>
    /**
     * In case the enrollment_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollment_messagesUpdateInput, enrollment_messagesUncheckedUpdateInput>
  }


  /**
   * enrollment_messages delete
   */
  export type enrollment_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
    /**
     * Filter which enrollment_messages to delete.
     */
    where: enrollment_messagesWhereUniqueInput
  }


  /**
   * enrollment_messages deleteMany
   */
  export type enrollment_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment_messages to delete
     */
    where?: enrollment_messagesWhereInput
  }


  /**
   * enrollment_messages.pods
   */
  export type enrollment_messages$podsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    where?: podsWhereInput
    orderBy?: podsOrderByWithRelationInput | podsOrderByWithRelationInput[]
    cursor?: podsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PodsScalarFieldEnum | PodsScalarFieldEnum[]
  }


  /**
   * enrollment_messages without action
   */
  export type enrollment_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment_messages
     */
    select?: enrollment_messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollment_messagesInclude<ExtArgs> | null
  }



  /**
   * Model game_tables
   */

  export type AggregateGame_tables = {
    _count: Game_tablesCountAggregateOutputType | null
    _min: Game_tablesMinAggregateOutputType | null
    _max: Game_tablesMaxAggregateOutputType | null
  }

  export type Game_tablesMinAggregateOutputType = {
    id: string | null
    pod_id: string | null
    completed_at: Date | null
    player_1_discord_id: string | null
    player_2_discord_id: string | null
    player_3_discord_id: string | null
    player_4_discord_id: string | null
    player_5_discord_id: string | null
    player_6_discord_id: string | null
    player_7_discord_id: string | null
    player_8_discord_id: string | null
  }

  export type Game_tablesMaxAggregateOutputType = {
    id: string | null
    pod_id: string | null
    completed_at: Date | null
    player_1_discord_id: string | null
    player_2_discord_id: string | null
    player_3_discord_id: string | null
    player_4_discord_id: string | null
    player_5_discord_id: string | null
    player_6_discord_id: string | null
    player_7_discord_id: string | null
    player_8_discord_id: string | null
  }

  export type Game_tablesCountAggregateOutputType = {
    id: number
    pod_id: number
    completed_at: number
    player_1_discord_id: number
    player_2_discord_id: number
    player_3_discord_id: number
    player_4_discord_id: number
    player_5_discord_id: number
    player_6_discord_id: number
    player_7_discord_id: number
    player_8_discord_id: number
    _all: number
  }


  export type Game_tablesMinAggregateInputType = {
    id?: true
    pod_id?: true
    completed_at?: true
    player_1_discord_id?: true
    player_2_discord_id?: true
    player_3_discord_id?: true
    player_4_discord_id?: true
    player_5_discord_id?: true
    player_6_discord_id?: true
    player_7_discord_id?: true
    player_8_discord_id?: true
  }

  export type Game_tablesMaxAggregateInputType = {
    id?: true
    pod_id?: true
    completed_at?: true
    player_1_discord_id?: true
    player_2_discord_id?: true
    player_3_discord_id?: true
    player_4_discord_id?: true
    player_5_discord_id?: true
    player_6_discord_id?: true
    player_7_discord_id?: true
    player_8_discord_id?: true
  }

  export type Game_tablesCountAggregateInputType = {
    id?: true
    pod_id?: true
    completed_at?: true
    player_1_discord_id?: true
    player_2_discord_id?: true
    player_3_discord_id?: true
    player_4_discord_id?: true
    player_5_discord_id?: true
    player_6_discord_id?: true
    player_7_discord_id?: true
    player_8_discord_id?: true
    _all?: true
  }

  export type Game_tablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_tables to aggregate.
     */
    where?: game_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tables to fetch.
     */
    orderBy?: game_tablesOrderByWithRelationInput | game_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: game_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned game_tables
    **/
    _count?: true | Game_tablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Game_tablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Game_tablesMaxAggregateInputType
  }

  export type GetGame_tablesAggregateType<T extends Game_tablesAggregateArgs> = {
        [P in keyof T & keyof AggregateGame_tables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_tables[P]>
      : GetScalarType<T[P], AggregateGame_tables[P]>
  }




  export type game_tablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_tablesWhereInput
    orderBy?: game_tablesOrderByWithAggregationInput | game_tablesOrderByWithAggregationInput[]
    by: Game_tablesScalarFieldEnum[] | Game_tablesScalarFieldEnum
    having?: game_tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Game_tablesCountAggregateInputType | true
    _min?: Game_tablesMinAggregateInputType
    _max?: Game_tablesMaxAggregateInputType
  }

  export type Game_tablesGroupByOutputType = {
    id: string
    pod_id: string
    completed_at: Date | null
    player_1_discord_id: string | null
    player_2_discord_id: string | null
    player_3_discord_id: string | null
    player_4_discord_id: string | null
    player_5_discord_id: string | null
    player_6_discord_id: string | null
    player_7_discord_id: string | null
    player_8_discord_id: string | null
    _count: Game_tablesCountAggregateOutputType | null
    _min: Game_tablesMinAggregateOutputType | null
    _max: Game_tablesMaxAggregateOutputType | null
  }

  type GetGame_tablesGroupByPayload<T extends game_tablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_tablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Game_tablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_tablesGroupByOutputType[P]>
            : GetScalarType<T[P], Game_tablesGroupByOutputType[P]>
        }
      >
    >


  export type game_tablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pod_id?: boolean
    completed_at?: boolean
    player_1_discord_id?: boolean
    player_2_discord_id?: boolean
    player_3_discord_id?: boolean
    player_4_discord_id?: boolean
    player_5_discord_id?: boolean
    player_6_discord_id?: boolean
    player_7_discord_id?: boolean
    player_8_discord_id?: boolean
    pods?: boolean | podsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_tables"]>

  export type game_tablesSelectScalar = {
    id?: boolean
    pod_id?: boolean
    completed_at?: boolean
    player_1_discord_id?: boolean
    player_2_discord_id?: boolean
    player_3_discord_id?: boolean
    player_4_discord_id?: boolean
    player_5_discord_id?: boolean
    player_6_discord_id?: boolean
    player_7_discord_id?: boolean
    player_8_discord_id?: boolean
  }

  export type game_tablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pods?: boolean | podsDefaultArgs<ExtArgs>
  }


  export type $game_tablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game_tables"
    objects: {
      pods: Prisma.$podsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pod_id: string
      completed_at: Date | null
      player_1_discord_id: string | null
      player_2_discord_id: string | null
      player_3_discord_id: string | null
      player_4_discord_id: string | null
      player_5_discord_id: string | null
      player_6_discord_id: string | null
      player_7_discord_id: string | null
      player_8_discord_id: string | null
    }, ExtArgs["result"]["game_tables"]>
    composites: {}
  }


  type game_tablesGetPayload<S extends boolean | null | undefined | game_tablesDefaultArgs> = $Result.GetResult<Prisma.$game_tablesPayload, S>

  type game_tablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<game_tablesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Game_tablesCountAggregateInputType | true
    }

  export interface game_tablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game_tables'], meta: { name: 'game_tables' } }
    /**
     * Find zero or one Game_tables that matches the filter.
     * @param {game_tablesFindUniqueArgs} args - Arguments to find a Game_tables
     * @example
     * // Get one Game_tables
     * const game_tables = await prisma.game_tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends game_tablesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesFindUniqueArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Game_tables that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {game_tablesFindUniqueOrThrowArgs} args - Arguments to find a Game_tables
     * @example
     * // Get one Game_tables
     * const game_tables = await prisma.game_tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends game_tablesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Game_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesFindFirstArgs} args - Arguments to find a Game_tables
     * @example
     * // Get one Game_tables
     * const game_tables = await prisma.game_tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends game_tablesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesFindFirstArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Game_tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesFindFirstOrThrowArgs} args - Arguments to find a Game_tables
     * @example
     * // Get one Game_tables
     * const game_tables = await prisma.game_tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends game_tablesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Game_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_tables
     * const game_tables = await prisma.game_tables.findMany()
     * 
     * // Get first 10 Game_tables
     * const game_tables = await prisma.game_tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const game_tablesWithIdOnly = await prisma.game_tables.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends game_tablesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Game_tables.
     * @param {game_tablesCreateArgs} args - Arguments to create a Game_tables.
     * @example
     * // Create one Game_tables
     * const Game_tables = await prisma.game_tables.create({
     *   data: {
     *     // ... data to create a Game_tables
     *   }
     * })
     * 
    **/
    create<T extends game_tablesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesCreateArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Game_tables.
     *     @param {game_tablesCreateManyArgs} args - Arguments to create many Game_tables.
     *     @example
     *     // Create many Game_tables
     *     const game_tables = await prisma.game_tables.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends game_tablesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game_tables.
     * @param {game_tablesDeleteArgs} args - Arguments to delete one Game_tables.
     * @example
     * // Delete one Game_tables
     * const Game_tables = await prisma.game_tables.delete({
     *   where: {
     *     // ... filter to delete one Game_tables
     *   }
     * })
     * 
    **/
    delete<T extends game_tablesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesDeleteArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Game_tables.
     * @param {game_tablesUpdateArgs} args - Arguments to update one Game_tables.
     * @example
     * // Update one Game_tables
     * const game_tables = await prisma.game_tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends game_tablesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesUpdateArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Game_tables.
     * @param {game_tablesDeleteManyArgs} args - Arguments to filter Game_tables to delete.
     * @example
     * // Delete a few Game_tables
     * const { count } = await prisma.game_tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends game_tablesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_tablesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_tables
     * const game_tables = await prisma.game_tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends game_tablesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game_tables.
     * @param {game_tablesUpsertArgs} args - Arguments to update or create a Game_tables.
     * @example
     * // Update or create a Game_tables
     * const game_tables = await prisma.game_tables.upsert({
     *   create: {
     *     // ... data to create a Game_tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_tables we want to update
     *   }
     * })
    **/
    upsert<T extends game_tablesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, game_tablesUpsertArgs<ExtArgs>>
    ): Prisma__game_tablesClient<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Game_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesCountArgs} args - Arguments to filter Game_tables to count.
     * @example
     * // Count the number of Game_tables
     * const count = await prisma.game_tables.count({
     *   where: {
     *     // ... the filter for the Game_tables we want to count
     *   }
     * })
    **/
    count<T extends game_tablesCountArgs>(
      args?: Subset<T, game_tablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_tablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_tablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Game_tablesAggregateArgs>(args: Subset<T, Game_tablesAggregateArgs>): Prisma.PrismaPromise<GetGame_tablesAggregateType<T>>

    /**
     * Group by Game_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends game_tablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_tablesGroupByArgs['orderBy'] }
        : { orderBy?: game_tablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, game_tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGame_tablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game_tables model
   */
  readonly fields: game_tablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_tablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pods<T extends podsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, podsDefaultArgs<ExtArgs>>): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the game_tables model
   */ 
  interface game_tablesFieldRefs {
    readonly id: FieldRef<"game_tables", 'String'>
    readonly pod_id: FieldRef<"game_tables", 'String'>
    readonly completed_at: FieldRef<"game_tables", 'DateTime'>
    readonly player_1_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_2_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_3_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_4_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_5_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_6_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_7_discord_id: FieldRef<"game_tables", 'String'>
    readonly player_8_discord_id: FieldRef<"game_tables", 'String'>
  }
    

  // Custom InputTypes

  /**
   * game_tables findUnique
   */
  export type game_tablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter, which game_tables to fetch.
     */
    where: game_tablesWhereUniqueInput
  }


  /**
   * game_tables findUniqueOrThrow
   */
  export type game_tablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter, which game_tables to fetch.
     */
    where: game_tablesWhereUniqueInput
  }


  /**
   * game_tables findFirst
   */
  export type game_tablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter, which game_tables to fetch.
     */
    where?: game_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tables to fetch.
     */
    orderBy?: game_tablesOrderByWithRelationInput | game_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_tables.
     */
    cursor?: game_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_tables.
     */
    distinct?: Game_tablesScalarFieldEnum | Game_tablesScalarFieldEnum[]
  }


  /**
   * game_tables findFirstOrThrow
   */
  export type game_tablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter, which game_tables to fetch.
     */
    where?: game_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tables to fetch.
     */
    orderBy?: game_tablesOrderByWithRelationInput | game_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_tables.
     */
    cursor?: game_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_tables.
     */
    distinct?: Game_tablesScalarFieldEnum | Game_tablesScalarFieldEnum[]
  }


  /**
   * game_tables findMany
   */
  export type game_tablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter, which game_tables to fetch.
     */
    where?: game_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tables to fetch.
     */
    orderBy?: game_tablesOrderByWithRelationInput | game_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing game_tables.
     */
    cursor?: game_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tables.
     */
    skip?: number
    distinct?: Game_tablesScalarFieldEnum | Game_tablesScalarFieldEnum[]
  }


  /**
   * game_tables create
   */
  export type game_tablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * The data needed to create a game_tables.
     */
    data: XOR<game_tablesCreateInput, game_tablesUncheckedCreateInput>
  }


  /**
   * game_tables createMany
   */
  export type game_tablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_tables.
     */
    data: game_tablesCreateManyInput | game_tablesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * game_tables update
   */
  export type game_tablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * The data needed to update a game_tables.
     */
    data: XOR<game_tablesUpdateInput, game_tablesUncheckedUpdateInput>
    /**
     * Choose, which game_tables to update.
     */
    where: game_tablesWhereUniqueInput
  }


  /**
   * game_tables updateMany
   */
  export type game_tablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_tables.
     */
    data: XOR<game_tablesUpdateManyMutationInput, game_tablesUncheckedUpdateManyInput>
    /**
     * Filter which game_tables to update
     */
    where?: game_tablesWhereInput
  }


  /**
   * game_tables upsert
   */
  export type game_tablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * The filter to search for the game_tables to update in case it exists.
     */
    where: game_tablesWhereUniqueInput
    /**
     * In case the game_tables found by the `where` argument doesn't exist, create a new game_tables with this data.
     */
    create: XOR<game_tablesCreateInput, game_tablesUncheckedCreateInput>
    /**
     * In case the game_tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_tablesUpdateInput, game_tablesUncheckedUpdateInput>
  }


  /**
   * game_tables delete
   */
  export type game_tablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    /**
     * Filter which game_tables to delete.
     */
    where: game_tablesWhereUniqueInput
  }


  /**
   * game_tables deleteMany
   */
  export type game_tablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_tables to delete
     */
    where?: game_tablesWhereInput
  }


  /**
   * game_tables without action
   */
  export type game_tablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
  }



  /**
   * Model pods
   */

  export type AggregatePods = {
    _count: PodsCountAggregateOutputType | null
    _min: PodsMinAggregateOutputType | null
    _max: PodsMaxAggregateOutputType | null
  }

  export type PodsMinAggregateOutputType = {
    id: string | null
    enrollment_messages_id: string | null
    starts_at: Date | null
  }

  export type PodsMaxAggregateOutputType = {
    id: string | null
    enrollment_messages_id: string | null
    starts_at: Date | null
  }

  export type PodsCountAggregateOutputType = {
    id: number
    enrollment_messages_id: number
    starts_at: number
    _all: number
  }


  export type PodsMinAggregateInputType = {
    id?: true
    enrollment_messages_id?: true
    starts_at?: true
  }

  export type PodsMaxAggregateInputType = {
    id?: true
    enrollment_messages_id?: true
    starts_at?: true
  }

  export type PodsCountAggregateInputType = {
    id?: true
    enrollment_messages_id?: true
    starts_at?: true
    _all?: true
  }

  export type PodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pods to aggregate.
     */
    where?: podsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pods to fetch.
     */
    orderBy?: podsOrderByWithRelationInput | podsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: podsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pods
    **/
    _count?: true | PodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodsMaxAggregateInputType
  }

  export type GetPodsAggregateType<T extends PodsAggregateArgs> = {
        [P in keyof T & keyof AggregatePods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePods[P]>
      : GetScalarType<T[P], AggregatePods[P]>
  }




  export type podsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: podsWhereInput
    orderBy?: podsOrderByWithAggregationInput | podsOrderByWithAggregationInput[]
    by: PodsScalarFieldEnum[] | PodsScalarFieldEnum
    having?: podsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodsCountAggregateInputType | true
    _min?: PodsMinAggregateInputType
    _max?: PodsMaxAggregateInputType
  }

  export type PodsGroupByOutputType = {
    id: string
    enrollment_messages_id: string
    starts_at: Date
    _count: PodsCountAggregateOutputType | null
    _min: PodsMinAggregateOutputType | null
    _max: PodsMaxAggregateOutputType | null
  }

  type GetPodsGroupByPayload<T extends podsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodsGroupByOutputType[P]>
            : GetScalarType<T[P], PodsGroupByOutputType[P]>
        }
      >
    >


  export type podsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollment_messages_id?: boolean
    starts_at?: boolean
    game_tables?: boolean | pods$game_tablesArgs<ExtArgs>
    enrollment_messages?: boolean | enrollment_messagesDefaultArgs<ExtArgs>
    _count?: boolean | PodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pods"]>

  export type podsSelectScalar = {
    id?: boolean
    enrollment_messages_id?: boolean
    starts_at?: boolean
  }

  export type podsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_tables?: boolean | pods$game_tablesArgs<ExtArgs>
    enrollment_messages?: boolean | enrollment_messagesDefaultArgs<ExtArgs>
    _count?: boolean | PodsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $podsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pods"
    objects: {
      game_tables: Prisma.$game_tablesPayload<ExtArgs>[]
      enrollment_messages: Prisma.$enrollment_messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enrollment_messages_id: string
      starts_at: Date
    }, ExtArgs["result"]["pods"]>
    composites: {}
  }


  type podsGetPayload<S extends boolean | null | undefined | podsDefaultArgs> = $Result.GetResult<Prisma.$podsPayload, S>

  type podsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<podsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PodsCountAggregateInputType | true
    }

  export interface podsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pods'], meta: { name: 'pods' } }
    /**
     * Find zero or one Pods that matches the filter.
     * @param {podsFindUniqueArgs} args - Arguments to find a Pods
     * @example
     * // Get one Pods
     * const pods = await prisma.pods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends podsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, podsFindUniqueArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pods that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {podsFindUniqueOrThrowArgs} args - Arguments to find a Pods
     * @example
     * // Get one Pods
     * const pods = await prisma.pods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends podsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, podsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsFindFirstArgs} args - Arguments to find a Pods
     * @example
     * // Get one Pods
     * const pods = await prisma.pods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends podsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, podsFindFirstArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsFindFirstOrThrowArgs} args - Arguments to find a Pods
     * @example
     * // Get one Pods
     * const pods = await prisma.pods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends podsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, podsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pods
     * const pods = await prisma.pods.findMany()
     * 
     * // Get first 10 Pods
     * const pods = await prisma.pods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podsWithIdOnly = await prisma.pods.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends podsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, podsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pods.
     * @param {podsCreateArgs} args - Arguments to create a Pods.
     * @example
     * // Create one Pods
     * const Pods = await prisma.pods.create({
     *   data: {
     *     // ... data to create a Pods
     *   }
     * })
     * 
    **/
    create<T extends podsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, podsCreateArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pods.
     *     @param {podsCreateManyArgs} args - Arguments to create many Pods.
     *     @example
     *     // Create many Pods
     *     const pods = await prisma.pods.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends podsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, podsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pods.
     * @param {podsDeleteArgs} args - Arguments to delete one Pods.
     * @example
     * // Delete one Pods
     * const Pods = await prisma.pods.delete({
     *   where: {
     *     // ... filter to delete one Pods
     *   }
     * })
     * 
    **/
    delete<T extends podsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, podsDeleteArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pods.
     * @param {podsUpdateArgs} args - Arguments to update one Pods.
     * @example
     * // Update one Pods
     * const pods = await prisma.pods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends podsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, podsUpdateArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pods.
     * @param {podsDeleteManyArgs} args - Arguments to filter Pods to delete.
     * @example
     * // Delete a few Pods
     * const { count } = await prisma.pods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends podsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, podsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pods
     * const pods = await prisma.pods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends podsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, podsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pods.
     * @param {podsUpsertArgs} args - Arguments to update or create a Pods.
     * @example
     * // Update or create a Pods
     * const pods = await prisma.pods.upsert({
     *   create: {
     *     // ... data to create a Pods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pods we want to update
     *   }
     * })
    **/
    upsert<T extends podsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, podsUpsertArgs<ExtArgs>>
    ): Prisma__podsClient<$Result.GetResult<Prisma.$podsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsCountArgs} args - Arguments to filter Pods to count.
     * @example
     * // Count the number of Pods
     * const count = await prisma.pods.count({
     *   where: {
     *     // ... the filter for the Pods we want to count
     *   }
     * })
    **/
    count<T extends podsCountArgs>(
      args?: Subset<T, podsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PodsAggregateArgs>(args: Subset<T, PodsAggregateArgs>): Prisma.PrismaPromise<GetPodsAggregateType<T>>

    /**
     * Group by Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends podsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: podsGroupByArgs['orderBy'] }
        : { orderBy?: podsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, podsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pods model
   */
  readonly fields: podsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__podsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game_tables<T extends pods$game_tablesArgs<ExtArgs> = {}>(args?: Subset<T, pods$game_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tablesPayload<ExtArgs>, T, 'findMany'> | Null>;

    enrollment_messages<T extends enrollment_messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enrollment_messagesDefaultArgs<ExtArgs>>): Prisma__enrollment_messagesClient<$Result.GetResult<Prisma.$enrollment_messagesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pods model
   */ 
  interface podsFieldRefs {
    readonly id: FieldRef<"pods", 'String'>
    readonly enrollment_messages_id: FieldRef<"pods", 'String'>
    readonly starts_at: FieldRef<"pods", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * pods findUnique
   */
  export type podsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter, which pods to fetch.
     */
    where: podsWhereUniqueInput
  }


  /**
   * pods findUniqueOrThrow
   */
  export type podsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter, which pods to fetch.
     */
    where: podsWhereUniqueInput
  }


  /**
   * pods findFirst
   */
  export type podsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter, which pods to fetch.
     */
    where?: podsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pods to fetch.
     */
    orderBy?: podsOrderByWithRelationInput | podsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pods.
     */
    cursor?: podsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pods.
     */
    distinct?: PodsScalarFieldEnum | PodsScalarFieldEnum[]
  }


  /**
   * pods findFirstOrThrow
   */
  export type podsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter, which pods to fetch.
     */
    where?: podsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pods to fetch.
     */
    orderBy?: podsOrderByWithRelationInput | podsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pods.
     */
    cursor?: podsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pods.
     */
    distinct?: PodsScalarFieldEnum | PodsScalarFieldEnum[]
  }


  /**
   * pods findMany
   */
  export type podsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter, which pods to fetch.
     */
    where?: podsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pods to fetch.
     */
    orderBy?: podsOrderByWithRelationInput | podsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pods.
     */
    cursor?: podsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pods.
     */
    skip?: number
    distinct?: PodsScalarFieldEnum | PodsScalarFieldEnum[]
  }


  /**
   * pods create
   */
  export type podsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * The data needed to create a pods.
     */
    data: XOR<podsCreateInput, podsUncheckedCreateInput>
  }


  /**
   * pods createMany
   */
  export type podsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pods.
     */
    data: podsCreateManyInput | podsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pods update
   */
  export type podsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * The data needed to update a pods.
     */
    data: XOR<podsUpdateInput, podsUncheckedUpdateInput>
    /**
     * Choose, which pods to update.
     */
    where: podsWhereUniqueInput
  }


  /**
   * pods updateMany
   */
  export type podsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pods.
     */
    data: XOR<podsUpdateManyMutationInput, podsUncheckedUpdateManyInput>
    /**
     * Filter which pods to update
     */
    where?: podsWhereInput
  }


  /**
   * pods upsert
   */
  export type podsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * The filter to search for the pods to update in case it exists.
     */
    where: podsWhereUniqueInput
    /**
     * In case the pods found by the `where` argument doesn't exist, create a new pods with this data.
     */
    create: XOR<podsCreateInput, podsUncheckedCreateInput>
    /**
     * In case the pods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<podsUpdateInput, podsUncheckedUpdateInput>
  }


  /**
   * pods delete
   */
  export type podsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
    /**
     * Filter which pods to delete.
     */
    where: podsWhereUniqueInput
  }


  /**
   * pods deleteMany
   */
  export type podsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pods to delete
     */
    where?: podsWhereInput
  }


  /**
   * pods.game_tables
   */
  export type pods$game_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tables
     */
    select?: game_tablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_tablesInclude<ExtArgs> | null
    where?: game_tablesWhereInput
    orderBy?: game_tablesOrderByWithRelationInput | game_tablesOrderByWithRelationInput[]
    cursor?: game_tablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_tablesScalarFieldEnum | Game_tablesScalarFieldEnum[]
  }


  /**
   * pods without action
   */
  export type podsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pods
     */
    select?: podsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: podsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Drafty_configurationsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    scheduled_message: 'scheduled_message',
    checkin_message: 'checkin_message',
    cron_date: 'cron_date',
    current_mtg_format: 'current_mtg_format'
  };

  export type Drafty_configurationsScalarFieldEnum = (typeof Drafty_configurationsScalarFieldEnum)[keyof typeof Drafty_configurationsScalarFieldEnum]


  export const Enrollment_messagesScalarFieldEnum: {
    id: 'id',
    sent_at: 'sent_at',
    discord_id: 'discord_id'
  };

  export type Enrollment_messagesScalarFieldEnum = (typeof Enrollment_messagesScalarFieldEnum)[keyof typeof Enrollment_messagesScalarFieldEnum]


  export const Game_tablesScalarFieldEnum: {
    id: 'id',
    pod_id: 'pod_id',
    completed_at: 'completed_at',
    player_1_discord_id: 'player_1_discord_id',
    player_2_discord_id: 'player_2_discord_id',
    player_3_discord_id: 'player_3_discord_id',
    player_4_discord_id: 'player_4_discord_id',
    player_5_discord_id: 'player_5_discord_id',
    player_6_discord_id: 'player_6_discord_id',
    player_7_discord_id: 'player_7_discord_id',
    player_8_discord_id: 'player_8_discord_id'
  };

  export type Game_tablesScalarFieldEnum = (typeof Game_tablesScalarFieldEnum)[keyof typeof Game_tablesScalarFieldEnum]


  export const PodsScalarFieldEnum: {
    id: 'id',
    enrollment_messages_id: 'enrollment_messages_id',
    starts_at: 'starts_at'
  };

  export type PodsScalarFieldEnum = (typeof PodsScalarFieldEnum)[keyof typeof PodsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type drafty_configurationsWhereInput = {
    AND?: drafty_configurationsWhereInput | drafty_configurationsWhereInput[]
    OR?: drafty_configurationsWhereInput[]
    NOT?: drafty_configurationsWhereInput | drafty_configurationsWhereInput[]
    id?: UuidFilter<"drafty_configurations"> | string
    created_at?: DateTimeNullableFilter<"drafty_configurations"> | Date | string | null
    scheduled_message?: StringFilter<"drafty_configurations"> | string
    checkin_message?: StringFilter<"drafty_configurations"> | string
    cron_date?: StringFilter<"drafty_configurations"> | string
    current_mtg_format?: StringFilter<"drafty_configurations"> | string
  }

  export type drafty_configurationsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    scheduled_message?: SortOrder
    checkin_message?: SortOrder
    cron_date?: SortOrder
    current_mtg_format?: SortOrder
  }

  export type drafty_configurationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: drafty_configurationsWhereInput | drafty_configurationsWhereInput[]
    OR?: drafty_configurationsWhereInput[]
    NOT?: drafty_configurationsWhereInput | drafty_configurationsWhereInput[]
    created_at?: DateTimeNullableFilter<"drafty_configurations"> | Date | string | null
    scheduled_message?: StringFilter<"drafty_configurations"> | string
    checkin_message?: StringFilter<"drafty_configurations"> | string
    cron_date?: StringFilter<"drafty_configurations"> | string
    current_mtg_format?: StringFilter<"drafty_configurations"> | string
  }, "id">

  export type drafty_configurationsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    scheduled_message?: SortOrder
    checkin_message?: SortOrder
    cron_date?: SortOrder
    current_mtg_format?: SortOrder
    _count?: drafty_configurationsCountOrderByAggregateInput
    _max?: drafty_configurationsMaxOrderByAggregateInput
    _min?: drafty_configurationsMinOrderByAggregateInput
  }

  export type drafty_configurationsScalarWhereWithAggregatesInput = {
    AND?: drafty_configurationsScalarWhereWithAggregatesInput | drafty_configurationsScalarWhereWithAggregatesInput[]
    OR?: drafty_configurationsScalarWhereWithAggregatesInput[]
    NOT?: drafty_configurationsScalarWhereWithAggregatesInput | drafty_configurationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"drafty_configurations"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"drafty_configurations"> | Date | string | null
    scheduled_message?: StringWithAggregatesFilter<"drafty_configurations"> | string
    checkin_message?: StringWithAggregatesFilter<"drafty_configurations"> | string
    cron_date?: StringWithAggregatesFilter<"drafty_configurations"> | string
    current_mtg_format?: StringWithAggregatesFilter<"drafty_configurations"> | string
  }

  export type enrollment_messagesWhereInput = {
    AND?: enrollment_messagesWhereInput | enrollment_messagesWhereInput[]
    OR?: enrollment_messagesWhereInput[]
    NOT?: enrollment_messagesWhereInput | enrollment_messagesWhereInput[]
    id?: UuidFilter<"enrollment_messages"> | string
    sent_at?: DateTimeNullableFilter<"enrollment_messages"> | Date | string | null
    discord_id?: StringFilter<"enrollment_messages"> | string
    pods?: PodsListRelationFilter
  }

  export type enrollment_messagesOrderByWithRelationInput = {
    id?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    discord_id?: SortOrder
    pods?: podsOrderByRelationAggregateInput
  }

  export type enrollment_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: enrollment_messagesWhereInput | enrollment_messagesWhereInput[]
    OR?: enrollment_messagesWhereInput[]
    NOT?: enrollment_messagesWhereInput | enrollment_messagesWhereInput[]
    sent_at?: DateTimeNullableFilter<"enrollment_messages"> | Date | string | null
    discord_id?: StringFilter<"enrollment_messages"> | string
    pods?: PodsListRelationFilter
  }, "id">

  export type enrollment_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    discord_id?: SortOrder
    _count?: enrollment_messagesCountOrderByAggregateInput
    _max?: enrollment_messagesMaxOrderByAggregateInput
    _min?: enrollment_messagesMinOrderByAggregateInput
  }

  export type enrollment_messagesScalarWhereWithAggregatesInput = {
    AND?: enrollment_messagesScalarWhereWithAggregatesInput | enrollment_messagesScalarWhereWithAggregatesInput[]
    OR?: enrollment_messagesScalarWhereWithAggregatesInput[]
    NOT?: enrollment_messagesScalarWhereWithAggregatesInput | enrollment_messagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"enrollment_messages"> | string
    sent_at?: DateTimeNullableWithAggregatesFilter<"enrollment_messages"> | Date | string | null
    discord_id?: StringWithAggregatesFilter<"enrollment_messages"> | string
  }

  export type game_tablesWhereInput = {
    AND?: game_tablesWhereInput | game_tablesWhereInput[]
    OR?: game_tablesWhereInput[]
    NOT?: game_tablesWhereInput | game_tablesWhereInput[]
    id?: UuidFilter<"game_tables"> | string
    pod_id?: UuidFilter<"game_tables"> | string
    completed_at?: DateTimeNullableFilter<"game_tables"> | Date | string | null
    player_1_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_2_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_3_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_4_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_5_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_6_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_7_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_8_discord_id?: StringNullableFilter<"game_tables"> | string | null
    pods?: XOR<PodsRelationFilter, podsWhereInput>
  }

  export type game_tablesOrderByWithRelationInput = {
    id?: SortOrder
    pod_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    player_1_discord_id?: SortOrderInput | SortOrder
    player_2_discord_id?: SortOrderInput | SortOrder
    player_3_discord_id?: SortOrderInput | SortOrder
    player_4_discord_id?: SortOrderInput | SortOrder
    player_5_discord_id?: SortOrderInput | SortOrder
    player_6_discord_id?: SortOrderInput | SortOrder
    player_7_discord_id?: SortOrderInput | SortOrder
    player_8_discord_id?: SortOrderInput | SortOrder
    pods?: podsOrderByWithRelationInput
  }

  export type game_tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: game_tablesWhereInput | game_tablesWhereInput[]
    OR?: game_tablesWhereInput[]
    NOT?: game_tablesWhereInput | game_tablesWhereInput[]
    pod_id?: UuidFilter<"game_tables"> | string
    completed_at?: DateTimeNullableFilter<"game_tables"> | Date | string | null
    player_1_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_2_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_3_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_4_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_5_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_6_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_7_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_8_discord_id?: StringNullableFilter<"game_tables"> | string | null
    pods?: XOR<PodsRelationFilter, podsWhereInput>
  }, "id">

  export type game_tablesOrderByWithAggregationInput = {
    id?: SortOrder
    pod_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    player_1_discord_id?: SortOrderInput | SortOrder
    player_2_discord_id?: SortOrderInput | SortOrder
    player_3_discord_id?: SortOrderInput | SortOrder
    player_4_discord_id?: SortOrderInput | SortOrder
    player_5_discord_id?: SortOrderInput | SortOrder
    player_6_discord_id?: SortOrderInput | SortOrder
    player_7_discord_id?: SortOrderInput | SortOrder
    player_8_discord_id?: SortOrderInput | SortOrder
    _count?: game_tablesCountOrderByAggregateInput
    _max?: game_tablesMaxOrderByAggregateInput
    _min?: game_tablesMinOrderByAggregateInput
  }

  export type game_tablesScalarWhereWithAggregatesInput = {
    AND?: game_tablesScalarWhereWithAggregatesInput | game_tablesScalarWhereWithAggregatesInput[]
    OR?: game_tablesScalarWhereWithAggregatesInput[]
    NOT?: game_tablesScalarWhereWithAggregatesInput | game_tablesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"game_tables"> | string
    pod_id?: UuidWithAggregatesFilter<"game_tables"> | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"game_tables"> | Date | string | null
    player_1_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_2_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_3_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_4_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_5_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_6_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_7_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
    player_8_discord_id?: StringNullableWithAggregatesFilter<"game_tables"> | string | null
  }

  export type podsWhereInput = {
    AND?: podsWhereInput | podsWhereInput[]
    OR?: podsWhereInput[]
    NOT?: podsWhereInput | podsWhereInput[]
    id?: UuidFilter<"pods"> | string
    enrollment_messages_id?: UuidFilter<"pods"> | string
    starts_at?: DateTimeFilter<"pods"> | Date | string
    game_tables?: Game_tablesListRelationFilter
    enrollment_messages?: XOR<Enrollment_messagesRelationFilter, enrollment_messagesWhereInput>
  }

  export type podsOrderByWithRelationInput = {
    id?: SortOrder
    enrollment_messages_id?: SortOrder
    starts_at?: SortOrder
    game_tables?: game_tablesOrderByRelationAggregateInput
    enrollment_messages?: enrollment_messagesOrderByWithRelationInput
  }

  export type podsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: podsWhereInput | podsWhereInput[]
    OR?: podsWhereInput[]
    NOT?: podsWhereInput | podsWhereInput[]
    enrollment_messages_id?: UuidFilter<"pods"> | string
    starts_at?: DateTimeFilter<"pods"> | Date | string
    game_tables?: Game_tablesListRelationFilter
    enrollment_messages?: XOR<Enrollment_messagesRelationFilter, enrollment_messagesWhereInput>
  }, "id">

  export type podsOrderByWithAggregationInput = {
    id?: SortOrder
    enrollment_messages_id?: SortOrder
    starts_at?: SortOrder
    _count?: podsCountOrderByAggregateInput
    _max?: podsMaxOrderByAggregateInput
    _min?: podsMinOrderByAggregateInput
  }

  export type podsScalarWhereWithAggregatesInput = {
    AND?: podsScalarWhereWithAggregatesInput | podsScalarWhereWithAggregatesInput[]
    OR?: podsScalarWhereWithAggregatesInput[]
    NOT?: podsScalarWhereWithAggregatesInput | podsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pods"> | string
    enrollment_messages_id?: UuidWithAggregatesFilter<"pods"> | string
    starts_at?: DateTimeWithAggregatesFilter<"pods"> | Date | string
  }

  export type drafty_configurationsCreateInput = {
    id: string
    created_at?: Date | string | null
    scheduled_message: string
    checkin_message: string
    cron_date: string
    current_mtg_format: string
  }

  export type drafty_configurationsUncheckedCreateInput = {
    id: string
    created_at?: Date | string | null
    scheduled_message: string
    checkin_message: string
    cron_date: string
    current_mtg_format: string
  }

  export type drafty_configurationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_message?: StringFieldUpdateOperationsInput | string
    checkin_message?: StringFieldUpdateOperationsInput | string
    cron_date?: StringFieldUpdateOperationsInput | string
    current_mtg_format?: StringFieldUpdateOperationsInput | string
  }

  export type drafty_configurationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_message?: StringFieldUpdateOperationsInput | string
    checkin_message?: StringFieldUpdateOperationsInput | string
    cron_date?: StringFieldUpdateOperationsInput | string
    current_mtg_format?: StringFieldUpdateOperationsInput | string
  }

  export type drafty_configurationsCreateManyInput = {
    id: string
    created_at?: Date | string | null
    scheduled_message: string
    checkin_message: string
    cron_date: string
    current_mtg_format: string
  }

  export type drafty_configurationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_message?: StringFieldUpdateOperationsInput | string
    checkin_message?: StringFieldUpdateOperationsInput | string
    cron_date?: StringFieldUpdateOperationsInput | string
    current_mtg_format?: StringFieldUpdateOperationsInput | string
  }

  export type drafty_configurationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_message?: StringFieldUpdateOperationsInput | string
    checkin_message?: StringFieldUpdateOperationsInput | string
    cron_date?: StringFieldUpdateOperationsInput | string
    current_mtg_format?: StringFieldUpdateOperationsInput | string
  }

  export type enrollment_messagesCreateInput = {
    id: string
    sent_at?: Date | string | null
    discord_id: string
    pods?: podsCreateNestedManyWithoutEnrollment_messagesInput
  }

  export type enrollment_messagesUncheckedCreateInput = {
    id: string
    sent_at?: Date | string | null
    discord_id: string
    pods?: podsUncheckedCreateNestedManyWithoutEnrollment_messagesInput
  }

  export type enrollment_messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
    pods?: podsUpdateManyWithoutEnrollment_messagesNestedInput
  }

  export type enrollment_messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
    pods?: podsUncheckedUpdateManyWithoutEnrollment_messagesNestedInput
  }

  export type enrollment_messagesCreateManyInput = {
    id: string
    sent_at?: Date | string | null
    discord_id: string
  }

  export type enrollment_messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollment_messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type game_tablesCreateInput = {
    id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
    pods: podsCreateNestedOneWithoutGame_tablesInput
  }

  export type game_tablesUncheckedCreateInput = {
    id: string
    pod_id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
  }

  export type game_tablesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    pods?: podsUpdateOneRequiredWithoutGame_tablesNestedInput
  }

  export type game_tablesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pod_id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type game_tablesCreateManyInput = {
    id: string
    pod_id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
  }

  export type game_tablesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type game_tablesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pod_id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type podsCreateInput = {
    id: string
    starts_at: Date | string
    game_tables?: game_tablesCreateNestedManyWithoutPodsInput
    enrollment_messages: enrollment_messagesCreateNestedOneWithoutPodsInput
  }

  export type podsUncheckedCreateInput = {
    id: string
    enrollment_messages_id: string
    starts_at: Date | string
    game_tables?: game_tablesUncheckedCreateNestedManyWithoutPodsInput
  }

  export type podsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
    game_tables?: game_tablesUpdateManyWithoutPodsNestedInput
    enrollment_messages?: enrollment_messagesUpdateOneRequiredWithoutPodsNestedInput
  }

  export type podsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollment_messages_id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
    game_tables?: game_tablesUncheckedUpdateManyWithoutPodsNestedInput
  }

  export type podsCreateManyInput = {
    id: string
    enrollment_messages_id: string
    starts_at: Date | string
  }

  export type podsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type podsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollment_messages_id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type drafty_configurationsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    scheduled_message?: SortOrder
    checkin_message?: SortOrder
    cron_date?: SortOrder
    current_mtg_format?: SortOrder
  }

  export type drafty_configurationsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    scheduled_message?: SortOrder
    checkin_message?: SortOrder
    cron_date?: SortOrder
    current_mtg_format?: SortOrder
  }

  export type drafty_configurationsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    scheduled_message?: SortOrder
    checkin_message?: SortOrder
    cron_date?: SortOrder
    current_mtg_format?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PodsListRelationFilter = {
    every?: podsWhereInput
    some?: podsWhereInput
    none?: podsWhereInput
  }

  export type podsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enrollment_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    sent_at?: SortOrder
    discord_id?: SortOrder
  }

  export type enrollment_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    sent_at?: SortOrder
    discord_id?: SortOrder
  }

  export type enrollment_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    sent_at?: SortOrder
    discord_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PodsRelationFilter = {
    is?: podsWhereInput
    isNot?: podsWhereInput
  }

  export type game_tablesCountOrderByAggregateInput = {
    id?: SortOrder
    pod_id?: SortOrder
    completed_at?: SortOrder
    player_1_discord_id?: SortOrder
    player_2_discord_id?: SortOrder
    player_3_discord_id?: SortOrder
    player_4_discord_id?: SortOrder
    player_5_discord_id?: SortOrder
    player_6_discord_id?: SortOrder
    player_7_discord_id?: SortOrder
    player_8_discord_id?: SortOrder
  }

  export type game_tablesMaxOrderByAggregateInput = {
    id?: SortOrder
    pod_id?: SortOrder
    completed_at?: SortOrder
    player_1_discord_id?: SortOrder
    player_2_discord_id?: SortOrder
    player_3_discord_id?: SortOrder
    player_4_discord_id?: SortOrder
    player_5_discord_id?: SortOrder
    player_6_discord_id?: SortOrder
    player_7_discord_id?: SortOrder
    player_8_discord_id?: SortOrder
  }

  export type game_tablesMinOrderByAggregateInput = {
    id?: SortOrder
    pod_id?: SortOrder
    completed_at?: SortOrder
    player_1_discord_id?: SortOrder
    player_2_discord_id?: SortOrder
    player_3_discord_id?: SortOrder
    player_4_discord_id?: SortOrder
    player_5_discord_id?: SortOrder
    player_6_discord_id?: SortOrder
    player_7_discord_id?: SortOrder
    player_8_discord_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Game_tablesListRelationFilter = {
    every?: game_tablesWhereInput
    some?: game_tablesWhereInput
    none?: game_tablesWhereInput
  }

  export type Enrollment_messagesRelationFilter = {
    is?: enrollment_messagesWhereInput
    isNot?: enrollment_messagesWhereInput
  }

  export type game_tablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type podsCountOrderByAggregateInput = {
    id?: SortOrder
    enrollment_messages_id?: SortOrder
    starts_at?: SortOrder
  }

  export type podsMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollment_messages_id?: SortOrder
    starts_at?: SortOrder
  }

  export type podsMinOrderByAggregateInput = {
    id?: SortOrder
    enrollment_messages_id?: SortOrder
    starts_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type podsCreateNestedManyWithoutEnrollment_messagesInput = {
    create?: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput> | podsCreateWithoutEnrollment_messagesInput[] | podsUncheckedCreateWithoutEnrollment_messagesInput[]
    connectOrCreate?: podsCreateOrConnectWithoutEnrollment_messagesInput | podsCreateOrConnectWithoutEnrollment_messagesInput[]
    createMany?: podsCreateManyEnrollment_messagesInputEnvelope
    connect?: podsWhereUniqueInput | podsWhereUniqueInput[]
  }

  export type podsUncheckedCreateNestedManyWithoutEnrollment_messagesInput = {
    create?: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput> | podsCreateWithoutEnrollment_messagesInput[] | podsUncheckedCreateWithoutEnrollment_messagesInput[]
    connectOrCreate?: podsCreateOrConnectWithoutEnrollment_messagesInput | podsCreateOrConnectWithoutEnrollment_messagesInput[]
    createMany?: podsCreateManyEnrollment_messagesInputEnvelope
    connect?: podsWhereUniqueInput | podsWhereUniqueInput[]
  }

  export type podsUpdateManyWithoutEnrollment_messagesNestedInput = {
    create?: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput> | podsCreateWithoutEnrollment_messagesInput[] | podsUncheckedCreateWithoutEnrollment_messagesInput[]
    connectOrCreate?: podsCreateOrConnectWithoutEnrollment_messagesInput | podsCreateOrConnectWithoutEnrollment_messagesInput[]
    upsert?: podsUpsertWithWhereUniqueWithoutEnrollment_messagesInput | podsUpsertWithWhereUniqueWithoutEnrollment_messagesInput[]
    createMany?: podsCreateManyEnrollment_messagesInputEnvelope
    set?: podsWhereUniqueInput | podsWhereUniqueInput[]
    disconnect?: podsWhereUniqueInput | podsWhereUniqueInput[]
    delete?: podsWhereUniqueInput | podsWhereUniqueInput[]
    connect?: podsWhereUniqueInput | podsWhereUniqueInput[]
    update?: podsUpdateWithWhereUniqueWithoutEnrollment_messagesInput | podsUpdateWithWhereUniqueWithoutEnrollment_messagesInput[]
    updateMany?: podsUpdateManyWithWhereWithoutEnrollment_messagesInput | podsUpdateManyWithWhereWithoutEnrollment_messagesInput[]
    deleteMany?: podsScalarWhereInput | podsScalarWhereInput[]
  }

  export type podsUncheckedUpdateManyWithoutEnrollment_messagesNestedInput = {
    create?: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput> | podsCreateWithoutEnrollment_messagesInput[] | podsUncheckedCreateWithoutEnrollment_messagesInput[]
    connectOrCreate?: podsCreateOrConnectWithoutEnrollment_messagesInput | podsCreateOrConnectWithoutEnrollment_messagesInput[]
    upsert?: podsUpsertWithWhereUniqueWithoutEnrollment_messagesInput | podsUpsertWithWhereUniqueWithoutEnrollment_messagesInput[]
    createMany?: podsCreateManyEnrollment_messagesInputEnvelope
    set?: podsWhereUniqueInput | podsWhereUniqueInput[]
    disconnect?: podsWhereUniqueInput | podsWhereUniqueInput[]
    delete?: podsWhereUniqueInput | podsWhereUniqueInput[]
    connect?: podsWhereUniqueInput | podsWhereUniqueInput[]
    update?: podsUpdateWithWhereUniqueWithoutEnrollment_messagesInput | podsUpdateWithWhereUniqueWithoutEnrollment_messagesInput[]
    updateMany?: podsUpdateManyWithWhereWithoutEnrollment_messagesInput | podsUpdateManyWithWhereWithoutEnrollment_messagesInput[]
    deleteMany?: podsScalarWhereInput | podsScalarWhereInput[]
  }

  export type podsCreateNestedOneWithoutGame_tablesInput = {
    create?: XOR<podsCreateWithoutGame_tablesInput, podsUncheckedCreateWithoutGame_tablesInput>
    connectOrCreate?: podsCreateOrConnectWithoutGame_tablesInput
    connect?: podsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type podsUpdateOneRequiredWithoutGame_tablesNestedInput = {
    create?: XOR<podsCreateWithoutGame_tablesInput, podsUncheckedCreateWithoutGame_tablesInput>
    connectOrCreate?: podsCreateOrConnectWithoutGame_tablesInput
    upsert?: podsUpsertWithoutGame_tablesInput
    connect?: podsWhereUniqueInput
    update?: XOR<XOR<podsUpdateToOneWithWhereWithoutGame_tablesInput, podsUpdateWithoutGame_tablesInput>, podsUncheckedUpdateWithoutGame_tablesInput>
  }

  export type game_tablesCreateNestedManyWithoutPodsInput = {
    create?: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput> | game_tablesCreateWithoutPodsInput[] | game_tablesUncheckedCreateWithoutPodsInput[]
    connectOrCreate?: game_tablesCreateOrConnectWithoutPodsInput | game_tablesCreateOrConnectWithoutPodsInput[]
    createMany?: game_tablesCreateManyPodsInputEnvelope
    connect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
  }

  export type enrollment_messagesCreateNestedOneWithoutPodsInput = {
    create?: XOR<enrollment_messagesCreateWithoutPodsInput, enrollment_messagesUncheckedCreateWithoutPodsInput>
    connectOrCreate?: enrollment_messagesCreateOrConnectWithoutPodsInput
    connect?: enrollment_messagesWhereUniqueInput
  }

  export type game_tablesUncheckedCreateNestedManyWithoutPodsInput = {
    create?: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput> | game_tablesCreateWithoutPodsInput[] | game_tablesUncheckedCreateWithoutPodsInput[]
    connectOrCreate?: game_tablesCreateOrConnectWithoutPodsInput | game_tablesCreateOrConnectWithoutPodsInput[]
    createMany?: game_tablesCreateManyPodsInputEnvelope
    connect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type game_tablesUpdateManyWithoutPodsNestedInput = {
    create?: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput> | game_tablesCreateWithoutPodsInput[] | game_tablesUncheckedCreateWithoutPodsInput[]
    connectOrCreate?: game_tablesCreateOrConnectWithoutPodsInput | game_tablesCreateOrConnectWithoutPodsInput[]
    upsert?: game_tablesUpsertWithWhereUniqueWithoutPodsInput | game_tablesUpsertWithWhereUniqueWithoutPodsInput[]
    createMany?: game_tablesCreateManyPodsInputEnvelope
    set?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    disconnect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    delete?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    connect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    update?: game_tablesUpdateWithWhereUniqueWithoutPodsInput | game_tablesUpdateWithWhereUniqueWithoutPodsInput[]
    updateMany?: game_tablesUpdateManyWithWhereWithoutPodsInput | game_tablesUpdateManyWithWhereWithoutPodsInput[]
    deleteMany?: game_tablesScalarWhereInput | game_tablesScalarWhereInput[]
  }

  export type enrollment_messagesUpdateOneRequiredWithoutPodsNestedInput = {
    create?: XOR<enrollment_messagesCreateWithoutPodsInput, enrollment_messagesUncheckedCreateWithoutPodsInput>
    connectOrCreate?: enrollment_messagesCreateOrConnectWithoutPodsInput
    upsert?: enrollment_messagesUpsertWithoutPodsInput
    connect?: enrollment_messagesWhereUniqueInput
    update?: XOR<XOR<enrollment_messagesUpdateToOneWithWhereWithoutPodsInput, enrollment_messagesUpdateWithoutPodsInput>, enrollment_messagesUncheckedUpdateWithoutPodsInput>
  }

  export type game_tablesUncheckedUpdateManyWithoutPodsNestedInput = {
    create?: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput> | game_tablesCreateWithoutPodsInput[] | game_tablesUncheckedCreateWithoutPodsInput[]
    connectOrCreate?: game_tablesCreateOrConnectWithoutPodsInput | game_tablesCreateOrConnectWithoutPodsInput[]
    upsert?: game_tablesUpsertWithWhereUniqueWithoutPodsInput | game_tablesUpsertWithWhereUniqueWithoutPodsInput[]
    createMany?: game_tablesCreateManyPodsInputEnvelope
    set?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    disconnect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    delete?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    connect?: game_tablesWhereUniqueInput | game_tablesWhereUniqueInput[]
    update?: game_tablesUpdateWithWhereUniqueWithoutPodsInput | game_tablesUpdateWithWhereUniqueWithoutPodsInput[]
    updateMany?: game_tablesUpdateManyWithWhereWithoutPodsInput | game_tablesUpdateManyWithWhereWithoutPodsInput[]
    deleteMany?: game_tablesScalarWhereInput | game_tablesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type podsCreateWithoutEnrollment_messagesInput = {
    id: string
    starts_at: Date | string
    game_tables?: game_tablesCreateNestedManyWithoutPodsInput
  }

  export type podsUncheckedCreateWithoutEnrollment_messagesInput = {
    id: string
    starts_at: Date | string
    game_tables?: game_tablesUncheckedCreateNestedManyWithoutPodsInput
  }

  export type podsCreateOrConnectWithoutEnrollment_messagesInput = {
    where: podsWhereUniqueInput
    create: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput>
  }

  export type podsCreateManyEnrollment_messagesInputEnvelope = {
    data: podsCreateManyEnrollment_messagesInput | podsCreateManyEnrollment_messagesInput[]
    skipDuplicates?: boolean
  }

  export type podsUpsertWithWhereUniqueWithoutEnrollment_messagesInput = {
    where: podsWhereUniqueInput
    update: XOR<podsUpdateWithoutEnrollment_messagesInput, podsUncheckedUpdateWithoutEnrollment_messagesInput>
    create: XOR<podsCreateWithoutEnrollment_messagesInput, podsUncheckedCreateWithoutEnrollment_messagesInput>
  }

  export type podsUpdateWithWhereUniqueWithoutEnrollment_messagesInput = {
    where: podsWhereUniqueInput
    data: XOR<podsUpdateWithoutEnrollment_messagesInput, podsUncheckedUpdateWithoutEnrollment_messagesInput>
  }

  export type podsUpdateManyWithWhereWithoutEnrollment_messagesInput = {
    where: podsScalarWhereInput
    data: XOR<podsUpdateManyMutationInput, podsUncheckedUpdateManyWithoutEnrollment_messagesInput>
  }

  export type podsScalarWhereInput = {
    AND?: podsScalarWhereInput | podsScalarWhereInput[]
    OR?: podsScalarWhereInput[]
    NOT?: podsScalarWhereInput | podsScalarWhereInput[]
    id?: UuidFilter<"pods"> | string
    enrollment_messages_id?: UuidFilter<"pods"> | string
    starts_at?: DateTimeFilter<"pods"> | Date | string
  }

  export type podsCreateWithoutGame_tablesInput = {
    id: string
    starts_at: Date | string
    enrollment_messages: enrollment_messagesCreateNestedOneWithoutPodsInput
  }

  export type podsUncheckedCreateWithoutGame_tablesInput = {
    id: string
    enrollment_messages_id: string
    starts_at: Date | string
  }

  export type podsCreateOrConnectWithoutGame_tablesInput = {
    where: podsWhereUniqueInput
    create: XOR<podsCreateWithoutGame_tablesInput, podsUncheckedCreateWithoutGame_tablesInput>
  }

  export type podsUpsertWithoutGame_tablesInput = {
    update: XOR<podsUpdateWithoutGame_tablesInput, podsUncheckedUpdateWithoutGame_tablesInput>
    create: XOR<podsCreateWithoutGame_tablesInput, podsUncheckedCreateWithoutGame_tablesInput>
    where?: podsWhereInput
  }

  export type podsUpdateToOneWithWhereWithoutGame_tablesInput = {
    where?: podsWhereInput
    data: XOR<podsUpdateWithoutGame_tablesInput, podsUncheckedUpdateWithoutGame_tablesInput>
  }

  export type podsUpdateWithoutGame_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment_messages?: enrollment_messagesUpdateOneRequiredWithoutPodsNestedInput
  }

  export type podsUncheckedUpdateWithoutGame_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollment_messages_id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_tablesCreateWithoutPodsInput = {
    id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
  }

  export type game_tablesUncheckedCreateWithoutPodsInput = {
    id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
  }

  export type game_tablesCreateOrConnectWithoutPodsInput = {
    where: game_tablesWhereUniqueInput
    create: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput>
  }

  export type game_tablesCreateManyPodsInputEnvelope = {
    data: game_tablesCreateManyPodsInput | game_tablesCreateManyPodsInput[]
    skipDuplicates?: boolean
  }

  export type enrollment_messagesCreateWithoutPodsInput = {
    id: string
    sent_at?: Date | string | null
    discord_id: string
  }

  export type enrollment_messagesUncheckedCreateWithoutPodsInput = {
    id: string
    sent_at?: Date | string | null
    discord_id: string
  }

  export type enrollment_messagesCreateOrConnectWithoutPodsInput = {
    where: enrollment_messagesWhereUniqueInput
    create: XOR<enrollment_messagesCreateWithoutPodsInput, enrollment_messagesUncheckedCreateWithoutPodsInput>
  }

  export type game_tablesUpsertWithWhereUniqueWithoutPodsInput = {
    where: game_tablesWhereUniqueInput
    update: XOR<game_tablesUpdateWithoutPodsInput, game_tablesUncheckedUpdateWithoutPodsInput>
    create: XOR<game_tablesCreateWithoutPodsInput, game_tablesUncheckedCreateWithoutPodsInput>
  }

  export type game_tablesUpdateWithWhereUniqueWithoutPodsInput = {
    where: game_tablesWhereUniqueInput
    data: XOR<game_tablesUpdateWithoutPodsInput, game_tablesUncheckedUpdateWithoutPodsInput>
  }

  export type game_tablesUpdateManyWithWhereWithoutPodsInput = {
    where: game_tablesScalarWhereInput
    data: XOR<game_tablesUpdateManyMutationInput, game_tablesUncheckedUpdateManyWithoutPodsInput>
  }

  export type game_tablesScalarWhereInput = {
    AND?: game_tablesScalarWhereInput | game_tablesScalarWhereInput[]
    OR?: game_tablesScalarWhereInput[]
    NOT?: game_tablesScalarWhereInput | game_tablesScalarWhereInput[]
    id?: UuidFilter<"game_tables"> | string
    pod_id?: UuidFilter<"game_tables"> | string
    completed_at?: DateTimeNullableFilter<"game_tables"> | Date | string | null
    player_1_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_2_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_3_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_4_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_5_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_6_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_7_discord_id?: StringNullableFilter<"game_tables"> | string | null
    player_8_discord_id?: StringNullableFilter<"game_tables"> | string | null
  }

  export type enrollment_messagesUpsertWithoutPodsInput = {
    update: XOR<enrollment_messagesUpdateWithoutPodsInput, enrollment_messagesUncheckedUpdateWithoutPodsInput>
    create: XOR<enrollment_messagesCreateWithoutPodsInput, enrollment_messagesUncheckedCreateWithoutPodsInput>
    where?: enrollment_messagesWhereInput
  }

  export type enrollment_messagesUpdateToOneWithWhereWithoutPodsInput = {
    where?: enrollment_messagesWhereInput
    data: XOR<enrollment_messagesUpdateWithoutPodsInput, enrollment_messagesUncheckedUpdateWithoutPodsInput>
  }

  export type enrollment_messagesUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollment_messagesUncheckedUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type podsCreateManyEnrollment_messagesInput = {
    id: string
    starts_at: Date | string
  }

  export type podsUpdateWithoutEnrollment_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
    game_tables?: game_tablesUpdateManyWithoutPodsNestedInput
  }

  export type podsUncheckedUpdateWithoutEnrollment_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
    game_tables?: game_tablesUncheckedUpdateManyWithoutPodsNestedInput
  }

  export type podsUncheckedUpdateManyWithoutEnrollment_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    starts_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_tablesCreateManyPodsInput = {
    id: string
    completed_at?: Date | string | null
    player_1_discord_id?: string | null
    player_2_discord_id?: string | null
    player_3_discord_id?: string | null
    player_4_discord_id?: string | null
    player_5_discord_id?: string | null
    player_6_discord_id?: string | null
    player_7_discord_id?: string | null
    player_8_discord_id?: string | null
  }

  export type game_tablesUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type game_tablesUncheckedUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type game_tablesUncheckedUpdateManyWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_1_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_2_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_3_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_4_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_5_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_6_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_7_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    player_8_discord_id?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Enrollment_messagesCountOutputTypeDefaultArgs instead
     */
    export type Enrollment_messagesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Enrollment_messagesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PodsCountOutputTypeDefaultArgs instead
     */
    export type PodsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PodsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use drafty_configurationsDefaultArgs instead
     */
    export type drafty_configurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = drafty_configurationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use enrollment_messagesDefaultArgs instead
     */
    export type enrollment_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = enrollment_messagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use game_tablesDefaultArgs instead
     */
    export type game_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = game_tablesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use podsDefaultArgs instead
     */
    export type podsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = podsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}