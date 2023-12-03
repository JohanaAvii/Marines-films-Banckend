
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Pelicula
 * 
 */
export type Pelicula = $Result.DefaultSelection<Prisma.$PeliculaPayload>
/**
 * Model Solicitud
 * 
 */
export type Solicitud = $Result.DefaultSelection<Prisma.$SolicitudPayload>
/**
 * Model Actores
 * 
 */
export type Actores = $Result.DefaultSelection<Prisma.$ActoresPayload>
/**
 * Model ActoresOnPeliculas
 * 
 */
export type ActoresOnPeliculas = $Result.DefaultSelection<Prisma.$ActoresOnPeliculasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  USUARIO: 'USUARIO',
  ADMIN: 'ADMIN',
  PRODUCTOR: 'PRODUCTOR'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Estados: {
  PENDIENTE: 'PENDIENTE',
  RECHAZADA: 'RECHAZADA',
  APROBADA: 'APROBADA'
};

export type Estados = (typeof Estados)[keyof typeof Estados]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Estados = $Enums.Estados

export const Estados: typeof $Enums.Estados

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.pelicula`: Exposes CRUD operations for the **Pelicula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peliculas
    * const peliculas = await prisma.pelicula.findMany()
    * ```
    */
  get pelicula(): Prisma.PeliculaDelegate<ExtArgs>;

  /**
   * `prisma.solicitud`: Exposes CRUD operations for the **Solicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicituds
    * const solicituds = await prisma.solicitud.findMany()
    * ```
    */
  get solicitud(): Prisma.SolicitudDelegate<ExtArgs>;

  /**
   * `prisma.actores`: Exposes CRUD operations for the **Actores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actores
    * const actores = await prisma.actores.findMany()
    * ```
    */
  get actores(): Prisma.ActoresDelegate<ExtArgs>;

  /**
   * `prisma.actoresOnPeliculas`: Exposes CRUD operations for the **ActoresOnPeliculas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActoresOnPeliculas
    * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findMany()
    * ```
    */
  get actoresOnPeliculas(): Prisma.ActoresOnPeliculasDelegate<ExtArgs>;
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
    Usuario: 'Usuario',
    Pelicula: 'Pelicula',
    Solicitud: 'Solicitud',
    Actores: 'Actores',
    ActoresOnPeliculas: 'ActoresOnPeliculas'
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
      modelProps: 'usuario' | 'pelicula' | 'solicitud' | 'actores' | 'actoresOnPeliculas'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Pelicula: {
        payload: Prisma.$PeliculaPayload<ExtArgs>
        fields: Prisma.PeliculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeliculaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeliculaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findFirst: {
            args: Prisma.PeliculaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeliculaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findMany: {
            args: Prisma.PeliculaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          create: {
            args: Prisma.PeliculaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          createMany: {
            args: Prisma.PeliculaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PeliculaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          update: {
            args: Prisma.PeliculaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          deleteMany: {
            args: Prisma.PeliculaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PeliculaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PeliculaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          aggregate: {
            args: Prisma.PeliculaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePelicula>
          }
          groupBy: {
            args: Prisma.PeliculaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PeliculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeliculaCountArgs<ExtArgs>,
            result: $Utils.Optional<PeliculaCountAggregateOutputType> | number
          }
        }
      }
      Solicitud: {
        payload: Prisma.$SolicitudPayload<ExtArgs>
        fields: Prisma.SolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findFirst: {
            args: Prisma.SolicitudFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findMany: {
            args: Prisma.SolicitudFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          create: {
            args: Prisma.SolicitudCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          createMany: {
            args: Prisma.SolicitudCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SolicitudDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          update: {
            args: Prisma.SolicitudUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SolicitudUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          aggregate: {
            args: Prisma.SolicitudAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSolicitud>
          }
          groupBy: {
            args: Prisma.SolicitudGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCountArgs<ExtArgs>,
            result: $Utils.Optional<SolicitudCountAggregateOutputType> | number
          }
        }
      }
      Actores: {
        payload: Prisma.$ActoresPayload<ExtArgs>
        fields: Prisma.ActoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          findFirst: {
            args: Prisma.ActoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          findMany: {
            args: Prisma.ActoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>[]
          }
          create: {
            args: Prisma.ActoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          createMany: {
            args: Prisma.ActoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          update: {
            args: Prisma.ActoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          deleteMany: {
            args: Prisma.ActoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresPayload>
          }
          aggregate: {
            args: Prisma.ActoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActores>
          }
          groupBy: {
            args: Prisma.ActoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActoresCountArgs<ExtArgs>,
            result: $Utils.Optional<ActoresCountAggregateOutputType> | number
          }
        }
      }
      ActoresOnPeliculas: {
        payload: Prisma.$ActoresOnPeliculasPayload<ExtArgs>
        fields: Prisma.ActoresOnPeliculasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActoresOnPeliculasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActoresOnPeliculasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          findFirst: {
            args: Prisma.ActoresOnPeliculasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActoresOnPeliculasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          findMany: {
            args: Prisma.ActoresOnPeliculasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>[]
          }
          create: {
            args: Prisma.ActoresOnPeliculasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          createMany: {
            args: Prisma.ActoresOnPeliculasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActoresOnPeliculasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          update: {
            args: Prisma.ActoresOnPeliculasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          deleteMany: {
            args: Prisma.ActoresOnPeliculasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActoresOnPeliculasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActoresOnPeliculasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActoresOnPeliculasPayload>
          }
          aggregate: {
            args: Prisma.ActoresOnPeliculasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActoresOnPeliculas>
          }
          groupBy: {
            args: Prisma.ActoresOnPeliculasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActoresOnPeliculasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActoresOnPeliculasCountArgs<ExtArgs>,
            result: $Utils.Optional<ActoresOnPeliculasCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    solicitudes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudes?: boolean | UsuarioCountOutputTypeCountSolicitudesArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }



  /**
   * Count Type PeliculaCountOutputType
   */

  export type PeliculaCountOutputType = {
    ActoresOnPeliculas: number
  }

  export type PeliculaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActoresOnPeliculas?: boolean | PeliculaCountOutputTypeCountActoresOnPeliculasArgs
  }

  // Custom InputTypes

  /**
   * PeliculaCountOutputType without action
   */
  export type PeliculaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeliculaCountOutputType
     */
    select?: PeliculaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PeliculaCountOutputType without action
   */
  export type PeliculaCountOutputTypeCountActoresOnPeliculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActoresOnPeliculasWhereInput
  }



  /**
   * Count Type ActoresCountOutputType
   */

  export type ActoresCountOutputType = {
    ActoresOnPeliculas: number
  }

  export type ActoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActoresOnPeliculas?: boolean | ActoresCountOutputTypeCountActoresOnPeliculasArgs
  }

  // Custom InputTypes

  /**
   * ActoresCountOutputType without action
   */
  export type ActoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresCountOutputType
     */
    select?: ActoresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ActoresCountOutputType without action
   */
  export type ActoresCountOutputTypeCountActoresOnPeliculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActoresOnPeliculasWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    correo: string | null
    genero: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    password: string | null
    primer_apellido: string | null
    primer_nombre: string | null
    segundo_apellido: string | null
    segundo_nombre: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    correo: string | null
    genero: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    password: string | null
    primer_apellido: string | null
    primer_nombre: string | null
    segundo_apellido: string | null
    segundo_nombre: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    correo: number
    genero: number
    telefono: number
    rol: number
    password: number
    primer_apellido: number
    primer_nombre: number
    segundo_apellido: number
    segundo_nombre: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    correo?: true
    genero?: true
    telefono?: true
    rol?: true
    password?: true
    primer_apellido?: true
    primer_nombre?: true
    segundo_apellido?: true
    segundo_nombre?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    correo?: true
    genero?: true
    telefono?: true
    rol?: true
    password?: true
    primer_apellido?: true
    primer_nombre?: true
    segundo_apellido?: true
    segundo_nombre?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    correo?: true
    genero?: true
    telefono?: true
    rol?: true
    password?: true
    primer_apellido?: true
    primer_nombre?: true
    segundo_apellido?: true
    segundo_nombre?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido: string | null
    segundo_nombre: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    genero?: boolean
    telefono?: boolean
    rol?: boolean
    password?: boolean
    primer_apellido?: boolean
    primer_nombre?: boolean
    segundo_apellido?: boolean
    segundo_nombre?: boolean
    solicitudes?: boolean | Usuario$solicitudesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    correo?: boolean
    genero?: boolean
    telefono?: boolean
    rol?: boolean
    password?: boolean
    primer_apellido?: boolean
    primer_nombre?: boolean
    segundo_apellido?: boolean
    segundo_nombre?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudes?: boolean | Usuario$solicitudesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      solicitudes: Prisma.$SolicitudPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correo: string
      genero: string
      telefono: string
      rol: $Enums.Rol
      password: string
      primer_apellido: string
      primer_nombre: string
      segundo_apellido: string | null
      segundo_nombre: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    solicitudes<T extends Usuario$solicitudesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$solicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly genero: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly primer_apellido: FieldRef<"Usuario", 'String'>
    readonly primer_nombre: FieldRef<"Usuario", 'String'>
    readonly segundo_apellido: FieldRef<"Usuario", 'String'>
    readonly segundo_nombre: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario.solicitudes
   */
  export type Usuario$solicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Pelicula
   */

  export type AggregatePelicula = {
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  export type PeliculaAvgAggregateOutputType = {
    id: number | null
    duracion: number | null
    solicitud_id: number | null
  }

  export type PeliculaSumAggregateOutputType = {
    id: number | null
    duracion: number | null
    solicitud_id: number | null
  }

  export type PeliculaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    sipnosis: string | null
    fecha_distribucion: string | null
    promocionar: boolean | null
    duracion: number | null
    distribuidor: string | null
    isan: string | null
    url_poster: string | null
    aws_url: string | null
    aws_trailer: string | null
    solicitud_id: number | null
  }

  export type PeliculaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    sipnosis: string | null
    fecha_distribucion: string | null
    promocionar: boolean | null
    duracion: number | null
    distribuidor: string | null
    isan: string | null
    url_poster: string | null
    aws_url: string | null
    aws_trailer: string | null
    solicitud_id: number | null
  }

  export type PeliculaCountAggregateOutputType = {
    id: number
    nombre: number
    sipnosis: number
    fecha_distribucion: number
    promocionar: number
    duracion: number
    distribuidor: number
    isan: number
    url_poster: number
    aws_url: number
    aws_trailer: number
    solicitud_id: number
    _all: number
  }


  export type PeliculaAvgAggregateInputType = {
    id?: true
    duracion?: true
    solicitud_id?: true
  }

  export type PeliculaSumAggregateInputType = {
    id?: true
    duracion?: true
    solicitud_id?: true
  }

  export type PeliculaMinAggregateInputType = {
    id?: true
    nombre?: true
    sipnosis?: true
    fecha_distribucion?: true
    promocionar?: true
    duracion?: true
    distribuidor?: true
    isan?: true
    url_poster?: true
    aws_url?: true
    aws_trailer?: true
    solicitud_id?: true
  }

  export type PeliculaMaxAggregateInputType = {
    id?: true
    nombre?: true
    sipnosis?: true
    fecha_distribucion?: true
    promocionar?: true
    duracion?: true
    distribuidor?: true
    isan?: true
    url_poster?: true
    aws_url?: true
    aws_trailer?: true
    solicitud_id?: true
  }

  export type PeliculaCountAggregateInputType = {
    id?: true
    nombre?: true
    sipnosis?: true
    fecha_distribucion?: true
    promocionar?: true
    duracion?: true
    distribuidor?: true
    isan?: true
    url_poster?: true
    aws_url?: true
    aws_trailer?: true
    solicitud_id?: true
    _all?: true
  }

  export type PeliculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pelicula to aggregate.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peliculas
    **/
    _count?: true | PeliculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeliculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeliculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeliculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeliculaMaxAggregateInputType
  }

  export type GetPeliculaAggregateType<T extends PeliculaAggregateArgs> = {
        [P in keyof T & keyof AggregatePelicula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelicula[P]>
      : GetScalarType<T[P], AggregatePelicula[P]>
  }




  export type PeliculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeliculaWhereInput
    orderBy?: PeliculaOrderByWithAggregationInput | PeliculaOrderByWithAggregationInput[]
    by: PeliculaScalarFieldEnum[] | PeliculaScalarFieldEnum
    having?: PeliculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeliculaCountAggregateInputType | true
    _avg?: PeliculaAvgAggregateInputType
    _sum?: PeliculaSumAggregateInputType
    _min?: PeliculaMinAggregateInputType
    _max?: PeliculaMaxAggregateInputType
  }

  export type PeliculaGroupByOutputType = {
    id: number
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar: boolean | null
    duracion: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url: string | null
    aws_trailer: string | null
    solicitud_id: number
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  type GetPeliculaGroupByPayload<T extends PeliculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeliculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeliculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
            : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
        }
      >
    >


  export type PeliculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    sipnosis?: boolean
    fecha_distribucion?: boolean
    promocionar?: boolean
    duracion?: boolean
    distribuidor?: boolean
    isan?: boolean
    url_poster?: boolean
    aws_url?: boolean
    aws_trailer?: boolean
    solicitud_id?: boolean
    ActoresOnPeliculas?: boolean | Pelicula$ActoresOnPeliculasArgs<ExtArgs>
    Solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    _count?: boolean | PeliculaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectScalar = {
    id?: boolean
    nombre?: boolean
    sipnosis?: boolean
    fecha_distribucion?: boolean
    promocionar?: boolean
    duracion?: boolean
    distribuidor?: boolean
    isan?: boolean
    url_poster?: boolean
    aws_url?: boolean
    aws_trailer?: boolean
    solicitud_id?: boolean
  }

  export type PeliculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActoresOnPeliculas?: boolean | Pelicula$ActoresOnPeliculasArgs<ExtArgs>
    Solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    _count?: boolean | PeliculaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PeliculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pelicula"
    objects: {
      ActoresOnPeliculas: Prisma.$ActoresOnPeliculasPayload<ExtArgs>[]
      Solicitud: Prisma.$SolicitudPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      sipnosis: string
      fecha_distribucion: string
      promocionar: boolean | null
      duracion: number | null
      distribuidor: string
      isan: string
      url_poster: string
      aws_url: string | null
      aws_trailer: string | null
      solicitud_id: number
    }, ExtArgs["result"]["pelicula"]>
    composites: {}
  }


  type PeliculaGetPayload<S extends boolean | null | undefined | PeliculaDefaultArgs> = $Result.GetResult<Prisma.$PeliculaPayload, S>

  type PeliculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeliculaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PeliculaCountAggregateInputType | true
    }

  export interface PeliculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pelicula'], meta: { name: 'Pelicula' } }
    /**
     * Find zero or one Pelicula that matches the filter.
     * @param {PeliculaFindUniqueArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PeliculaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaFindUniqueArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pelicula that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PeliculaFindUniqueOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PeliculaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pelicula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PeliculaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaFindFirstArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pelicula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PeliculaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Peliculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peliculas
     * const peliculas = await prisma.pelicula.findMany()
     * 
     * // Get first 10 Peliculas
     * const peliculas = await prisma.pelicula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PeliculaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pelicula.
     * @param {PeliculaCreateArgs} args - Arguments to create a Pelicula.
     * @example
     * // Create one Pelicula
     * const Pelicula = await prisma.pelicula.create({
     *   data: {
     *     // ... data to create a Pelicula
     *   }
     * })
     * 
    **/
    create<T extends PeliculaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaCreateArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Peliculas.
     *     @param {PeliculaCreateManyArgs} args - Arguments to create many Peliculas.
     *     @example
     *     // Create many Peliculas
     *     const pelicula = await prisma.pelicula.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PeliculaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pelicula.
     * @param {PeliculaDeleteArgs} args - Arguments to delete one Pelicula.
     * @example
     * // Delete one Pelicula
     * const Pelicula = await prisma.pelicula.delete({
     *   where: {
     *     // ... filter to delete one Pelicula
     *   }
     * })
     * 
    **/
    delete<T extends PeliculaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaDeleteArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pelicula.
     * @param {PeliculaUpdateArgs} args - Arguments to update one Pelicula.
     * @example
     * // Update one Pelicula
     * const pelicula = await prisma.pelicula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PeliculaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaUpdateArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Peliculas.
     * @param {PeliculaDeleteManyArgs} args - Arguments to filter Peliculas to delete.
     * @example
     * // Delete a few Peliculas
     * const { count } = await prisma.pelicula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PeliculaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeliculaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peliculas
     * const pelicula = await prisma.pelicula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PeliculaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pelicula.
     * @param {PeliculaUpsertArgs} args - Arguments to update or create a Pelicula.
     * @example
     * // Update or create a Pelicula
     * const pelicula = await prisma.pelicula.upsert({
     *   create: {
     *     // ... data to create a Pelicula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelicula we want to update
     *   }
     * })
    **/
    upsert<T extends PeliculaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PeliculaUpsertArgs<ExtArgs>>
    ): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaCountArgs} args - Arguments to filter Peliculas to count.
     * @example
     * // Count the number of Peliculas
     * const count = await prisma.pelicula.count({
     *   where: {
     *     // ... the filter for the Peliculas we want to count
     *   }
     * })
    **/
    count<T extends PeliculaCountArgs>(
      args?: Subset<T, PeliculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeliculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeliculaAggregateArgs>(args: Subset<T, PeliculaAggregateArgs>): Prisma.PrismaPromise<GetPeliculaAggregateType<T>>

    /**
     * Group by Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaGroupByArgs} args - Group by arguments.
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
      T extends PeliculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeliculaGroupByArgs['orderBy'] }
        : { orderBy?: PeliculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeliculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeliculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pelicula model
   */
  readonly fields: PeliculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pelicula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeliculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ActoresOnPeliculas<T extends Pelicula$ActoresOnPeliculasArgs<ExtArgs> = {}>(args?: Subset<T, Pelicula$ActoresOnPeliculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findMany'> | Null>;

    Solicitud<T extends SolicitudDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudDefaultArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Pelicula model
   */ 
  interface PeliculaFieldRefs {
    readonly id: FieldRef<"Pelicula", 'Int'>
    readonly nombre: FieldRef<"Pelicula", 'String'>
    readonly sipnosis: FieldRef<"Pelicula", 'String'>
    readonly fecha_distribucion: FieldRef<"Pelicula", 'String'>
    readonly promocionar: FieldRef<"Pelicula", 'Boolean'>
    readonly duracion: FieldRef<"Pelicula", 'Float'>
    readonly distribuidor: FieldRef<"Pelicula", 'String'>
    readonly isan: FieldRef<"Pelicula", 'String'>
    readonly url_poster: FieldRef<"Pelicula", 'String'>
    readonly aws_url: FieldRef<"Pelicula", 'String'>
    readonly aws_trailer: FieldRef<"Pelicula", 'String'>
    readonly solicitud_id: FieldRef<"Pelicula", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Pelicula findUnique
   */
  export type PeliculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }


  /**
   * Pelicula findUniqueOrThrow
   */
  export type PeliculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }


  /**
   * Pelicula findFirst
   */
  export type PeliculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }


  /**
   * Pelicula findFirstOrThrow
   */
  export type PeliculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }


  /**
   * Pelicula findMany
   */
  export type PeliculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Peliculas to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }


  /**
   * Pelicula create
   */
  export type PeliculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pelicula.
     */
    data: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
  }


  /**
   * Pelicula createMany
   */
  export type PeliculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peliculas.
     */
    data: PeliculaCreateManyInput | PeliculaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pelicula update
   */
  export type PeliculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pelicula.
     */
    data: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
    /**
     * Choose, which Pelicula to update.
     */
    where: PeliculaWhereUniqueInput
  }


  /**
   * Pelicula updateMany
   */
  export type PeliculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peliculas.
     */
    data: XOR<PeliculaUpdateManyMutationInput, PeliculaUncheckedUpdateManyInput>
    /**
     * Filter which Peliculas to update
     */
    where?: PeliculaWhereInput
  }


  /**
   * Pelicula upsert
   */
  export type PeliculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pelicula to update in case it exists.
     */
    where: PeliculaWhereUniqueInput
    /**
     * In case the Pelicula found by the `where` argument doesn't exist, create a new Pelicula with this data.
     */
    create: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
    /**
     * In case the Pelicula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
  }


  /**
   * Pelicula delete
   */
  export type PeliculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter which Pelicula to delete.
     */
    where: PeliculaWhereUniqueInput
  }


  /**
   * Pelicula deleteMany
   */
  export type PeliculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peliculas to delete
     */
    where?: PeliculaWhereInput
  }


  /**
   * Pelicula.ActoresOnPeliculas
   */
  export type Pelicula$ActoresOnPeliculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    where?: ActoresOnPeliculasWhereInput
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    cursor?: ActoresOnPeliculasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActoresOnPeliculasScalarFieldEnum | ActoresOnPeliculasScalarFieldEnum[]
  }


  /**
   * Pelicula without action
   */
  export type PeliculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
  }



  /**
   * Model Solicitud
   */

  export type AggregateSolicitud = {
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  export type SolicitudAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type SolicitudSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type SolicitudMinAggregateOutputType = {
    id: number | null
    estado: $Enums.Estados | null
    fecha_envio: Date | null
    fecha_respuesta: Date | null
    observaciones: string | null
    usuario_id: number | null
  }

  export type SolicitudMaxAggregateOutputType = {
    id: number | null
    estado: $Enums.Estados | null
    fecha_envio: Date | null
    fecha_respuesta: Date | null
    observaciones: string | null
    usuario_id: number | null
  }

  export type SolicitudCountAggregateOutputType = {
    id: number
    estado: number
    fecha_envio: number
    fecha_respuesta: number
    observaciones: number
    usuario_id: number
    _all: number
  }


  export type SolicitudAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type SolicitudSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type SolicitudMinAggregateInputType = {
    id?: true
    estado?: true
    fecha_envio?: true
    fecha_respuesta?: true
    observaciones?: true
    usuario_id?: true
  }

  export type SolicitudMaxAggregateInputType = {
    id?: true
    estado?: true
    fecha_envio?: true
    fecha_respuesta?: true
    observaciones?: true
    usuario_id?: true
  }

  export type SolicitudCountAggregateInputType = {
    id?: true
    estado?: true
    fecha_envio?: true
    fecha_respuesta?: true
    observaciones?: true
    usuario_id?: true
    _all?: true
  }

  export type SolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitud to aggregate.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicituds
    **/
    _count?: true | SolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudMaxAggregateInputType
  }

  export type GetSolicitudAggregateType<T extends SolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud[P]>
      : GetScalarType<T[P], AggregateSolicitud[P]>
  }




  export type SolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithAggregationInput | SolicitudOrderByWithAggregationInput[]
    by: SolicitudScalarFieldEnum[] | SolicitudScalarFieldEnum
    having?: SolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCountAggregateInputType | true
    _avg?: SolicitudAvgAggregateInputType
    _sum?: SolicitudSumAggregateInputType
    _min?: SolicitudMinAggregateInputType
    _max?: SolicitudMaxAggregateInputType
  }

  export type SolicitudGroupByOutputType = {
    id: number
    estado: $Enums.Estados | null
    fecha_envio: Date | null
    fecha_respuesta: Date | null
    observaciones: string | null
    usuario_id: number
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  type GetSolicitudGroupByPayload<T extends SolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    fecha_envio?: boolean
    fecha_respuesta?: boolean
    observaciones?: boolean
    usuario_id?: boolean
    Pelicula?: boolean | Solicitud$PeliculaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectScalar = {
    id?: boolean
    estado?: boolean
    fecha_envio?: boolean
    fecha_respuesta?: boolean
    observaciones?: boolean
    usuario_id?: boolean
  }

  export type SolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pelicula?: boolean | Solicitud$PeliculaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }


  export type $SolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitud"
    objects: {
      Pelicula: Prisma.$PeliculaPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estado: $Enums.Estados | null
      fecha_envio: Date | null
      fecha_respuesta: Date | null
      observaciones: string | null
      usuario_id: number
    }, ExtArgs["result"]["solicitud"]>
    composites: {}
  }


  type SolicitudGetPayload<S extends boolean | null | undefined | SolicitudDefaultArgs> = $Result.GetResult<Prisma.$SolicitudPayload, S>

  type SolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SolicitudFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SolicitudCountAggregateInputType | true
    }

  export interface SolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitud'], meta: { name: 'Solicitud' } }
    /**
     * Find zero or one Solicitud that matches the filter.
     * @param {SolicitudFindUniqueArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SolicitudFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudFindUniqueArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Solicitud that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SolicitudFindUniqueOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SolicitudFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Solicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SolicitudFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudFindFirstArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Solicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SolicitudFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Solicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicituds
     * const solicituds = await prisma.solicitud.findMany()
     * 
     * // Get first 10 Solicituds
     * const solicituds = await prisma.solicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SolicitudFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Solicitud.
     * @param {SolicitudCreateArgs} args - Arguments to create a Solicitud.
     * @example
     * // Create one Solicitud
     * const Solicitud = await prisma.solicitud.create({
     *   data: {
     *     // ... data to create a Solicitud
     *   }
     * })
     * 
    **/
    create<T extends SolicitudCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudCreateArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Solicituds.
     *     @param {SolicitudCreateManyArgs} args - Arguments to create many Solicituds.
     *     @example
     *     // Create many Solicituds
     *     const solicitud = await prisma.solicitud.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SolicitudCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Solicitud.
     * @param {SolicitudDeleteArgs} args - Arguments to delete one Solicitud.
     * @example
     * // Delete one Solicitud
     * const Solicitud = await prisma.solicitud.delete({
     *   where: {
     *     // ... filter to delete one Solicitud
     *   }
     * })
     * 
    **/
    delete<T extends SolicitudDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudDeleteArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Solicitud.
     * @param {SolicitudUpdateArgs} args - Arguments to update one Solicitud.
     * @example
     * // Update one Solicitud
     * const solicitud = await prisma.solicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SolicitudUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudUpdateArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Solicituds.
     * @param {SolicitudDeleteManyArgs} args - Arguments to filter Solicituds to delete.
     * @example
     * // Delete a few Solicituds
     * const { count } = await prisma.solicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SolicitudDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SolicitudDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SolicitudUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Solicitud.
     * @param {SolicitudUpsertArgs} args - Arguments to update or create a Solicitud.
     * @example
     * // Update or create a Solicitud
     * const solicitud = await prisma.solicitud.upsert({
     *   create: {
     *     // ... data to create a Solicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud we want to update
     *   }
     * })
    **/
    upsert<T extends SolicitudUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SolicitudUpsertArgs<ExtArgs>>
    ): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCountArgs} args - Arguments to filter Solicituds to count.
     * @example
     * // Count the number of Solicituds
     * const count = await prisma.solicitud.count({
     *   where: {
     *     // ... the filter for the Solicituds we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCountArgs>(
      args?: Subset<T, SolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitudAggregateArgs>(args: Subset<T, SolicitudAggregateArgs>): Prisma.PrismaPromise<GetSolicitudAggregateType<T>>

    /**
     * Group by Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudGroupByArgs} args - Group by arguments.
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
      T extends SolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitud model
   */
  readonly fields: SolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pelicula<T extends Solicitud$PeliculaArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$PeliculaArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Solicitud model
   */ 
  interface SolicitudFieldRefs {
    readonly id: FieldRef<"Solicitud", 'Int'>
    readonly estado: FieldRef<"Solicitud", 'Estados'>
    readonly fecha_envio: FieldRef<"Solicitud", 'DateTime'>
    readonly fecha_respuesta: FieldRef<"Solicitud", 'DateTime'>
    readonly observaciones: FieldRef<"Solicitud", 'String'>
    readonly usuario_id: FieldRef<"Solicitud", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Solicitud findUnique
   */
  export type SolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }


  /**
   * Solicitud findUniqueOrThrow
   */
  export type SolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }


  /**
   * Solicitud findFirst
   */
  export type SolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }


  /**
   * Solicitud findFirstOrThrow
   */
  export type SolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }


  /**
   * Solicitud findMany
   */
  export type SolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicituds to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }


  /**
   * Solicitud create
   */
  export type SolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitud.
     */
    data: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
  }


  /**
   * Solicitud createMany
   */
  export type SolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Solicitud update
   */
  export type SolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitud.
     */
    data: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
    /**
     * Choose, which Solicitud to update.
     */
    where: SolicitudWhereUniqueInput
  }


  /**
   * Solicitud updateMany
   */
  export type SolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
  }


  /**
   * Solicitud upsert
   */
  export type SolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitud to update in case it exists.
     */
    where: SolicitudWhereUniqueInput
    /**
     * In case the Solicitud found by the `where` argument doesn't exist, create a new Solicitud with this data.
     */
    create: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
    /**
     * In case the Solicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
  }


  /**
   * Solicitud delete
   */
  export type SolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter which Solicitud to delete.
     */
    where: SolicitudWhereUniqueInput
  }


  /**
   * Solicitud deleteMany
   */
  export type SolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicituds to delete
     */
    where?: SolicitudWhereInput
  }


  /**
   * Solicitud.Pelicula
   */
  export type Solicitud$PeliculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeliculaInclude<ExtArgs> | null
    where?: PeliculaWhereInput
  }


  /**
   * Solicitud without action
   */
  export type SolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SolicitudInclude<ExtArgs> | null
  }



  /**
   * Model Actores
   */

  export type AggregateActores = {
    _count: ActoresCountAggregateOutputType | null
    _avg: ActoresAvgAggregateOutputType | null
    _sum: ActoresSumAggregateOutputType | null
    _min: ActoresMinAggregateOutputType | null
    _max: ActoresMaxAggregateOutputType | null
  }

  export type ActoresAvgAggregateOutputType = {
    id: number | null
    pelicula_id: number | null
  }

  export type ActoresSumAggregateOutputType = {
    id: number | null
    pelicula_id: number | null
  }

  export type ActoresMinAggregateOutputType = {
    id: number | null
    url_imagen: string | null
    url_biografia: string | null
    pelicula_id: number | null
  }

  export type ActoresMaxAggregateOutputType = {
    id: number | null
    url_imagen: string | null
    url_biografia: string | null
    pelicula_id: number | null
  }

  export type ActoresCountAggregateOutputType = {
    id: number
    url_imagen: number
    url_biografia: number
    pelicula_id: number
    _all: number
  }


  export type ActoresAvgAggregateInputType = {
    id?: true
    pelicula_id?: true
  }

  export type ActoresSumAggregateInputType = {
    id?: true
    pelicula_id?: true
  }

  export type ActoresMinAggregateInputType = {
    id?: true
    url_imagen?: true
    url_biografia?: true
    pelicula_id?: true
  }

  export type ActoresMaxAggregateInputType = {
    id?: true
    url_imagen?: true
    url_biografia?: true
    pelicula_id?: true
  }

  export type ActoresCountAggregateInputType = {
    id?: true
    url_imagen?: true
    url_biografia?: true
    pelicula_id?: true
    _all?: true
  }

  export type ActoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actores to aggregate.
     */
    where?: ActoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actores to fetch.
     */
    orderBy?: ActoresOrderByWithRelationInput | ActoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actores
    **/
    _count?: true | ActoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActoresMaxAggregateInputType
  }

  export type GetActoresAggregateType<T extends ActoresAggregateArgs> = {
        [P in keyof T & keyof AggregateActores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActores[P]>
      : GetScalarType<T[P], AggregateActores[P]>
  }




  export type ActoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActoresWhereInput
    orderBy?: ActoresOrderByWithAggregationInput | ActoresOrderByWithAggregationInput[]
    by: ActoresScalarFieldEnum[] | ActoresScalarFieldEnum
    having?: ActoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActoresCountAggregateInputType | true
    _avg?: ActoresAvgAggregateInputType
    _sum?: ActoresSumAggregateInputType
    _min?: ActoresMinAggregateInputType
    _max?: ActoresMaxAggregateInputType
  }

  export type ActoresGroupByOutputType = {
    id: number
    url_imagen: string
    url_biografia: string
    pelicula_id: number
    _count: ActoresCountAggregateOutputType | null
    _avg: ActoresAvgAggregateOutputType | null
    _sum: ActoresSumAggregateOutputType | null
    _min: ActoresMinAggregateOutputType | null
    _max: ActoresMaxAggregateOutputType | null
  }

  type GetActoresGroupByPayload<T extends ActoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActoresGroupByOutputType[P]>
            : GetScalarType<T[P], ActoresGroupByOutputType[P]>
        }
      >
    >


  export type ActoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_imagen?: boolean
    url_biografia?: boolean
    pelicula_id?: boolean
    ActoresOnPeliculas?: boolean | Actores$ActoresOnPeliculasArgs<ExtArgs>
    _count?: boolean | ActoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actores"]>

  export type ActoresSelectScalar = {
    id?: boolean
    url_imagen?: boolean
    url_biografia?: boolean
    pelicula_id?: boolean
  }

  export type ActoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActoresOnPeliculas?: boolean | Actores$ActoresOnPeliculasArgs<ExtArgs>
    _count?: boolean | ActoresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ActoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actores"
    objects: {
      ActoresOnPeliculas: Prisma.$ActoresOnPeliculasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_imagen: string
      url_biografia: string
      pelicula_id: number
    }, ExtArgs["result"]["actores"]>
    composites: {}
  }


  type ActoresGetPayload<S extends boolean | null | undefined | ActoresDefaultArgs> = $Result.GetResult<Prisma.$ActoresPayload, S>

  type ActoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActoresFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActoresCountAggregateInputType | true
    }

  export interface ActoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actores'], meta: { name: 'Actores' } }
    /**
     * Find zero or one Actores that matches the filter.
     * @param {ActoresFindUniqueArgs} args - Arguments to find a Actores
     * @example
     * // Get one Actores
     * const actores = await prisma.actores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActoresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresFindUniqueArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Actores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActoresFindUniqueOrThrowArgs} args - Arguments to find a Actores
     * @example
     * // Get one Actores
     * const actores = await prisma.actores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Actores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresFindFirstArgs} args - Arguments to find a Actores
     * @example
     * // Get one Actores
     * const actores = await prisma.actores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActoresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresFindFirstArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Actores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresFindFirstOrThrowArgs} args - Arguments to find a Actores
     * @example
     * // Get one Actores
     * const actores = await prisma.actores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Actores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actores
     * const actores = await prisma.actores.findMany()
     * 
     * // Get first 10 Actores
     * const actores = await prisma.actores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actoresWithIdOnly = await prisma.actores.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Actores.
     * @param {ActoresCreateArgs} args - Arguments to create a Actores.
     * @example
     * // Create one Actores
     * const Actores = await prisma.actores.create({
     *   data: {
     *     // ... data to create a Actores
     *   }
     * })
     * 
    **/
    create<T extends ActoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresCreateArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Actores.
     *     @param {ActoresCreateManyArgs} args - Arguments to create many Actores.
     *     @example
     *     // Create many Actores
     *     const actores = await prisma.actores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actores.
     * @param {ActoresDeleteArgs} args - Arguments to delete one Actores.
     * @example
     * // Delete one Actores
     * const Actores = await prisma.actores.delete({
     *   where: {
     *     // ... filter to delete one Actores
     *   }
     * })
     * 
    **/
    delete<T extends ActoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresDeleteArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Actores.
     * @param {ActoresUpdateArgs} args - Arguments to update one Actores.
     * @example
     * // Update one Actores
     * const actores = await prisma.actores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresUpdateArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Actores.
     * @param {ActoresDeleteManyArgs} args - Arguments to filter Actores to delete.
     * @example
     * // Delete a few Actores
     * const { count } = await prisma.actores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actores
     * const actores = await prisma.actores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actores.
     * @param {ActoresUpsertArgs} args - Arguments to update or create a Actores.
     * @example
     * // Update or create a Actores
     * const actores = await prisma.actores.upsert({
     *   create: {
     *     // ... data to create a Actores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actores we want to update
     *   }
     * })
    **/
    upsert<T extends ActoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresUpsertArgs<ExtArgs>>
    ): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Actores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresCountArgs} args - Arguments to filter Actores to count.
     * @example
     * // Count the number of Actores
     * const count = await prisma.actores.count({
     *   where: {
     *     // ... the filter for the Actores we want to count
     *   }
     * })
    **/
    count<T extends ActoresCountArgs>(
      args?: Subset<T, ActoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActoresAggregateArgs>(args: Subset<T, ActoresAggregateArgs>): Prisma.PrismaPromise<GetActoresAggregateType<T>>

    /**
     * Group by Actores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresGroupByArgs} args - Group by arguments.
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
      T extends ActoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActoresGroupByArgs['orderBy'] }
        : { orderBy?: ActoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actores model
   */
  readonly fields: ActoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ActoresOnPeliculas<T extends Actores$ActoresOnPeliculasArgs<ExtArgs> = {}>(args?: Subset<T, Actores$ActoresOnPeliculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Actores model
   */ 
  interface ActoresFieldRefs {
    readonly id: FieldRef<"Actores", 'Int'>
    readonly url_imagen: FieldRef<"Actores", 'String'>
    readonly url_biografia: FieldRef<"Actores", 'String'>
    readonly pelicula_id: FieldRef<"Actores", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Actores findUnique
   */
  export type ActoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter, which Actores to fetch.
     */
    where: ActoresWhereUniqueInput
  }


  /**
   * Actores findUniqueOrThrow
   */
  export type ActoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter, which Actores to fetch.
     */
    where: ActoresWhereUniqueInput
  }


  /**
   * Actores findFirst
   */
  export type ActoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter, which Actores to fetch.
     */
    where?: ActoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actores to fetch.
     */
    orderBy?: ActoresOrderByWithRelationInput | ActoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actores.
     */
    cursor?: ActoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actores.
     */
    distinct?: ActoresScalarFieldEnum | ActoresScalarFieldEnum[]
  }


  /**
   * Actores findFirstOrThrow
   */
  export type ActoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter, which Actores to fetch.
     */
    where?: ActoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actores to fetch.
     */
    orderBy?: ActoresOrderByWithRelationInput | ActoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actores.
     */
    cursor?: ActoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actores.
     */
    distinct?: ActoresScalarFieldEnum | ActoresScalarFieldEnum[]
  }


  /**
   * Actores findMany
   */
  export type ActoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter, which Actores to fetch.
     */
    where?: ActoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actores to fetch.
     */
    orderBy?: ActoresOrderByWithRelationInput | ActoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actores.
     */
    cursor?: ActoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actores.
     */
    skip?: number
    distinct?: ActoresScalarFieldEnum | ActoresScalarFieldEnum[]
  }


  /**
   * Actores create
   */
  export type ActoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Actores.
     */
    data: XOR<ActoresCreateInput, ActoresUncheckedCreateInput>
  }


  /**
   * Actores createMany
   */
  export type ActoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actores.
     */
    data: ActoresCreateManyInput | ActoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Actores update
   */
  export type ActoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Actores.
     */
    data: XOR<ActoresUpdateInput, ActoresUncheckedUpdateInput>
    /**
     * Choose, which Actores to update.
     */
    where: ActoresWhereUniqueInput
  }


  /**
   * Actores updateMany
   */
  export type ActoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actores.
     */
    data: XOR<ActoresUpdateManyMutationInput, ActoresUncheckedUpdateManyInput>
    /**
     * Filter which Actores to update
     */
    where?: ActoresWhereInput
  }


  /**
   * Actores upsert
   */
  export type ActoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Actores to update in case it exists.
     */
    where: ActoresWhereUniqueInput
    /**
     * In case the Actores found by the `where` argument doesn't exist, create a new Actores with this data.
     */
    create: XOR<ActoresCreateInput, ActoresUncheckedCreateInput>
    /**
     * In case the Actores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActoresUpdateInput, ActoresUncheckedUpdateInput>
  }


  /**
   * Actores delete
   */
  export type ActoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
    /**
     * Filter which Actores to delete.
     */
    where: ActoresWhereUniqueInput
  }


  /**
   * Actores deleteMany
   */
  export type ActoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actores to delete
     */
    where?: ActoresWhereInput
  }


  /**
   * Actores.ActoresOnPeliculas
   */
  export type Actores$ActoresOnPeliculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    where?: ActoresOnPeliculasWhereInput
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    cursor?: ActoresOnPeliculasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActoresOnPeliculasScalarFieldEnum | ActoresOnPeliculasScalarFieldEnum[]
  }


  /**
   * Actores without action
   */
  export type ActoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actores
     */
    select?: ActoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresInclude<ExtArgs> | null
  }



  /**
   * Model ActoresOnPeliculas
   */

  export type AggregateActoresOnPeliculas = {
    _count: ActoresOnPeliculasCountAggregateOutputType | null
    _avg: ActoresOnPeliculasAvgAggregateOutputType | null
    _sum: ActoresOnPeliculasSumAggregateOutputType | null
    _min: ActoresOnPeliculasMinAggregateOutputType | null
    _max: ActoresOnPeliculasMaxAggregateOutputType | null
  }

  export type ActoresOnPeliculasAvgAggregateOutputType = {
    actor_id: number | null
    pelicula_id: number | null
  }

  export type ActoresOnPeliculasSumAggregateOutputType = {
    actor_id: number | null
    pelicula_id: number | null
  }

  export type ActoresOnPeliculasMinAggregateOutputType = {
    actor_id: number | null
    pelicula_id: number | null
  }

  export type ActoresOnPeliculasMaxAggregateOutputType = {
    actor_id: number | null
    pelicula_id: number | null
  }

  export type ActoresOnPeliculasCountAggregateOutputType = {
    actor_id: number
    pelicula_id: number
    _all: number
  }


  export type ActoresOnPeliculasAvgAggregateInputType = {
    actor_id?: true
    pelicula_id?: true
  }

  export type ActoresOnPeliculasSumAggregateInputType = {
    actor_id?: true
    pelicula_id?: true
  }

  export type ActoresOnPeliculasMinAggregateInputType = {
    actor_id?: true
    pelicula_id?: true
  }

  export type ActoresOnPeliculasMaxAggregateInputType = {
    actor_id?: true
    pelicula_id?: true
  }

  export type ActoresOnPeliculasCountAggregateInputType = {
    actor_id?: true
    pelicula_id?: true
    _all?: true
  }

  export type ActoresOnPeliculasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActoresOnPeliculas to aggregate.
     */
    where?: ActoresOnPeliculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActoresOnPeliculas to fetch.
     */
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActoresOnPeliculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActoresOnPeliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActoresOnPeliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActoresOnPeliculas
    **/
    _count?: true | ActoresOnPeliculasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActoresOnPeliculasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActoresOnPeliculasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActoresOnPeliculasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActoresOnPeliculasMaxAggregateInputType
  }

  export type GetActoresOnPeliculasAggregateType<T extends ActoresOnPeliculasAggregateArgs> = {
        [P in keyof T & keyof AggregateActoresOnPeliculas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActoresOnPeliculas[P]>
      : GetScalarType<T[P], AggregateActoresOnPeliculas[P]>
  }




  export type ActoresOnPeliculasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActoresOnPeliculasWhereInput
    orderBy?: ActoresOnPeliculasOrderByWithAggregationInput | ActoresOnPeliculasOrderByWithAggregationInput[]
    by: ActoresOnPeliculasScalarFieldEnum[] | ActoresOnPeliculasScalarFieldEnum
    having?: ActoresOnPeliculasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActoresOnPeliculasCountAggregateInputType | true
    _avg?: ActoresOnPeliculasAvgAggregateInputType
    _sum?: ActoresOnPeliculasSumAggregateInputType
    _min?: ActoresOnPeliculasMinAggregateInputType
    _max?: ActoresOnPeliculasMaxAggregateInputType
  }

  export type ActoresOnPeliculasGroupByOutputType = {
    actor_id: number
    pelicula_id: number
    _count: ActoresOnPeliculasCountAggregateOutputType | null
    _avg: ActoresOnPeliculasAvgAggregateOutputType | null
    _sum: ActoresOnPeliculasSumAggregateOutputType | null
    _min: ActoresOnPeliculasMinAggregateOutputType | null
    _max: ActoresOnPeliculasMaxAggregateOutputType | null
  }

  type GetActoresOnPeliculasGroupByPayload<T extends ActoresOnPeliculasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActoresOnPeliculasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActoresOnPeliculasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActoresOnPeliculasGroupByOutputType[P]>
            : GetScalarType<T[P], ActoresOnPeliculasGroupByOutputType[P]>
        }
      >
    >


  export type ActoresOnPeliculasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actor_id?: boolean
    pelicula_id?: boolean
    Actores?: boolean | ActoresDefaultArgs<ExtArgs>
    Pelicula?: boolean | PeliculaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actoresOnPeliculas"]>

  export type ActoresOnPeliculasSelectScalar = {
    actor_id?: boolean
    pelicula_id?: boolean
  }

  export type ActoresOnPeliculasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Actores?: boolean | ActoresDefaultArgs<ExtArgs>
    Pelicula?: boolean | PeliculaDefaultArgs<ExtArgs>
  }


  export type $ActoresOnPeliculasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActoresOnPeliculas"
    objects: {
      Actores: Prisma.$ActoresPayload<ExtArgs>
      Pelicula: Prisma.$PeliculaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      actor_id: number
      pelicula_id: number
    }, ExtArgs["result"]["actoresOnPeliculas"]>
    composites: {}
  }


  type ActoresOnPeliculasGetPayload<S extends boolean | null | undefined | ActoresOnPeliculasDefaultArgs> = $Result.GetResult<Prisma.$ActoresOnPeliculasPayload, S>

  type ActoresOnPeliculasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActoresOnPeliculasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActoresOnPeliculasCountAggregateInputType | true
    }

  export interface ActoresOnPeliculasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActoresOnPeliculas'], meta: { name: 'ActoresOnPeliculas' } }
    /**
     * Find zero or one ActoresOnPeliculas that matches the filter.
     * @param {ActoresOnPeliculasFindUniqueArgs} args - Arguments to find a ActoresOnPeliculas
     * @example
     * // Get one ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActoresOnPeliculasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasFindUniqueArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ActoresOnPeliculas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActoresOnPeliculasFindUniqueOrThrowArgs} args - Arguments to find a ActoresOnPeliculas
     * @example
     * // Get one ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActoresOnPeliculasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ActoresOnPeliculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasFindFirstArgs} args - Arguments to find a ActoresOnPeliculas
     * @example
     * // Get one ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActoresOnPeliculasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasFindFirstArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ActoresOnPeliculas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasFindFirstOrThrowArgs} args - Arguments to find a ActoresOnPeliculas
     * @example
     * // Get one ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActoresOnPeliculasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ActoresOnPeliculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findMany()
     * 
     * // Get first 10 ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.findMany({ take: 10 })
     * 
     * // Only select the `actor_id`
     * const actoresOnPeliculasWithActor_idOnly = await prisma.actoresOnPeliculas.findMany({ select: { actor_id: true } })
     * 
    **/
    findMany<T extends ActoresOnPeliculasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ActoresOnPeliculas.
     * @param {ActoresOnPeliculasCreateArgs} args - Arguments to create a ActoresOnPeliculas.
     * @example
     * // Create one ActoresOnPeliculas
     * const ActoresOnPeliculas = await prisma.actoresOnPeliculas.create({
     *   data: {
     *     // ... data to create a ActoresOnPeliculas
     *   }
     * })
     * 
    **/
    create<T extends ActoresOnPeliculasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasCreateArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ActoresOnPeliculas.
     *     @param {ActoresOnPeliculasCreateManyArgs} args - Arguments to create many ActoresOnPeliculas.
     *     @example
     *     // Create many ActoresOnPeliculas
     *     const actoresOnPeliculas = await prisma.actoresOnPeliculas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActoresOnPeliculasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActoresOnPeliculas.
     * @param {ActoresOnPeliculasDeleteArgs} args - Arguments to delete one ActoresOnPeliculas.
     * @example
     * // Delete one ActoresOnPeliculas
     * const ActoresOnPeliculas = await prisma.actoresOnPeliculas.delete({
     *   where: {
     *     // ... filter to delete one ActoresOnPeliculas
     *   }
     * })
     * 
    **/
    delete<T extends ActoresOnPeliculasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasDeleteArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ActoresOnPeliculas.
     * @param {ActoresOnPeliculasUpdateArgs} args - Arguments to update one ActoresOnPeliculas.
     * @example
     * // Update one ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActoresOnPeliculasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasUpdateArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ActoresOnPeliculas.
     * @param {ActoresOnPeliculasDeleteManyArgs} args - Arguments to filter ActoresOnPeliculas to delete.
     * @example
     * // Delete a few ActoresOnPeliculas
     * const { count } = await prisma.actoresOnPeliculas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActoresOnPeliculasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActoresOnPeliculasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActoresOnPeliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActoresOnPeliculasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActoresOnPeliculas.
     * @param {ActoresOnPeliculasUpsertArgs} args - Arguments to update or create a ActoresOnPeliculas.
     * @example
     * // Update or create a ActoresOnPeliculas
     * const actoresOnPeliculas = await prisma.actoresOnPeliculas.upsert({
     *   create: {
     *     // ... data to create a ActoresOnPeliculas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActoresOnPeliculas we want to update
     *   }
     * })
    **/
    upsert<T extends ActoresOnPeliculasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActoresOnPeliculasUpsertArgs<ExtArgs>>
    ): Prisma__ActoresOnPeliculasClient<$Result.GetResult<Prisma.$ActoresOnPeliculasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ActoresOnPeliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasCountArgs} args - Arguments to filter ActoresOnPeliculas to count.
     * @example
     * // Count the number of ActoresOnPeliculas
     * const count = await prisma.actoresOnPeliculas.count({
     *   where: {
     *     // ... the filter for the ActoresOnPeliculas we want to count
     *   }
     * })
    **/
    count<T extends ActoresOnPeliculasCountArgs>(
      args?: Subset<T, ActoresOnPeliculasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActoresOnPeliculasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActoresOnPeliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActoresOnPeliculasAggregateArgs>(args: Subset<T, ActoresOnPeliculasAggregateArgs>): Prisma.PrismaPromise<GetActoresOnPeliculasAggregateType<T>>

    /**
     * Group by ActoresOnPeliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActoresOnPeliculasGroupByArgs} args - Group by arguments.
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
      T extends ActoresOnPeliculasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActoresOnPeliculasGroupByArgs['orderBy'] }
        : { orderBy?: ActoresOnPeliculasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActoresOnPeliculasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActoresOnPeliculasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActoresOnPeliculas model
   */
  readonly fields: ActoresOnPeliculasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActoresOnPeliculas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActoresOnPeliculasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Actores<T extends ActoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActoresDefaultArgs<ExtArgs>>): Prisma__ActoresClient<$Result.GetResult<Prisma.$ActoresPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Pelicula<T extends PeliculaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeliculaDefaultArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ActoresOnPeliculas model
   */ 
  interface ActoresOnPeliculasFieldRefs {
    readonly actor_id: FieldRef<"ActoresOnPeliculas", 'Int'>
    readonly pelicula_id: FieldRef<"ActoresOnPeliculas", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ActoresOnPeliculas findUnique
   */
  export type ActoresOnPeliculasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter, which ActoresOnPeliculas to fetch.
     */
    where: ActoresOnPeliculasWhereUniqueInput
  }


  /**
   * ActoresOnPeliculas findUniqueOrThrow
   */
  export type ActoresOnPeliculasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter, which ActoresOnPeliculas to fetch.
     */
    where: ActoresOnPeliculasWhereUniqueInput
  }


  /**
   * ActoresOnPeliculas findFirst
   */
  export type ActoresOnPeliculasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter, which ActoresOnPeliculas to fetch.
     */
    where?: ActoresOnPeliculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActoresOnPeliculas to fetch.
     */
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActoresOnPeliculas.
     */
    cursor?: ActoresOnPeliculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActoresOnPeliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActoresOnPeliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActoresOnPeliculas.
     */
    distinct?: ActoresOnPeliculasScalarFieldEnum | ActoresOnPeliculasScalarFieldEnum[]
  }


  /**
   * ActoresOnPeliculas findFirstOrThrow
   */
  export type ActoresOnPeliculasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter, which ActoresOnPeliculas to fetch.
     */
    where?: ActoresOnPeliculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActoresOnPeliculas to fetch.
     */
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActoresOnPeliculas.
     */
    cursor?: ActoresOnPeliculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActoresOnPeliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActoresOnPeliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActoresOnPeliculas.
     */
    distinct?: ActoresOnPeliculasScalarFieldEnum | ActoresOnPeliculasScalarFieldEnum[]
  }


  /**
   * ActoresOnPeliculas findMany
   */
  export type ActoresOnPeliculasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter, which ActoresOnPeliculas to fetch.
     */
    where?: ActoresOnPeliculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActoresOnPeliculas to fetch.
     */
    orderBy?: ActoresOnPeliculasOrderByWithRelationInput | ActoresOnPeliculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActoresOnPeliculas.
     */
    cursor?: ActoresOnPeliculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActoresOnPeliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActoresOnPeliculas.
     */
    skip?: number
    distinct?: ActoresOnPeliculasScalarFieldEnum | ActoresOnPeliculasScalarFieldEnum[]
  }


  /**
   * ActoresOnPeliculas create
   */
  export type ActoresOnPeliculasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * The data needed to create a ActoresOnPeliculas.
     */
    data: XOR<ActoresOnPeliculasCreateInput, ActoresOnPeliculasUncheckedCreateInput>
  }


  /**
   * ActoresOnPeliculas createMany
   */
  export type ActoresOnPeliculasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActoresOnPeliculas.
     */
    data: ActoresOnPeliculasCreateManyInput | ActoresOnPeliculasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ActoresOnPeliculas update
   */
  export type ActoresOnPeliculasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * The data needed to update a ActoresOnPeliculas.
     */
    data: XOR<ActoresOnPeliculasUpdateInput, ActoresOnPeliculasUncheckedUpdateInput>
    /**
     * Choose, which ActoresOnPeliculas to update.
     */
    where: ActoresOnPeliculasWhereUniqueInput
  }


  /**
   * ActoresOnPeliculas updateMany
   */
  export type ActoresOnPeliculasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActoresOnPeliculas.
     */
    data: XOR<ActoresOnPeliculasUpdateManyMutationInput, ActoresOnPeliculasUncheckedUpdateManyInput>
    /**
     * Filter which ActoresOnPeliculas to update
     */
    where?: ActoresOnPeliculasWhereInput
  }


  /**
   * ActoresOnPeliculas upsert
   */
  export type ActoresOnPeliculasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * The filter to search for the ActoresOnPeliculas to update in case it exists.
     */
    where: ActoresOnPeliculasWhereUniqueInput
    /**
     * In case the ActoresOnPeliculas found by the `where` argument doesn't exist, create a new ActoresOnPeliculas with this data.
     */
    create: XOR<ActoresOnPeliculasCreateInput, ActoresOnPeliculasUncheckedCreateInput>
    /**
     * In case the ActoresOnPeliculas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActoresOnPeliculasUpdateInput, ActoresOnPeliculasUncheckedUpdateInput>
  }


  /**
   * ActoresOnPeliculas delete
   */
  export type ActoresOnPeliculasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
    /**
     * Filter which ActoresOnPeliculas to delete.
     */
    where: ActoresOnPeliculasWhereUniqueInput
  }


  /**
   * ActoresOnPeliculas deleteMany
   */
  export type ActoresOnPeliculasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActoresOnPeliculas to delete
     */
    where?: ActoresOnPeliculasWhereInput
  }


  /**
   * ActoresOnPeliculas without action
   */
  export type ActoresOnPeliculasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActoresOnPeliculas
     */
    select?: ActoresOnPeliculasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActoresOnPeliculasInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    correo: 'correo',
    genero: 'genero',
    telefono: 'telefono',
    rol: 'rol',
    password: 'password',
    primer_apellido: 'primer_apellido',
    primer_nombre: 'primer_nombre',
    segundo_apellido: 'segundo_apellido',
    segundo_nombre: 'segundo_nombre'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PeliculaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    sipnosis: 'sipnosis',
    fecha_distribucion: 'fecha_distribucion',
    promocionar: 'promocionar',
    duracion: 'duracion',
    distribuidor: 'distribuidor',
    isan: 'isan',
    url_poster: 'url_poster',
    aws_url: 'aws_url',
    aws_trailer: 'aws_trailer',
    solicitud_id: 'solicitud_id'
  };

  export type PeliculaScalarFieldEnum = (typeof PeliculaScalarFieldEnum)[keyof typeof PeliculaScalarFieldEnum]


  export const SolicitudScalarFieldEnum: {
    id: 'id',
    estado: 'estado',
    fecha_envio: 'fecha_envio',
    fecha_respuesta: 'fecha_respuesta',
    observaciones: 'observaciones',
    usuario_id: 'usuario_id'
  };

  export type SolicitudScalarFieldEnum = (typeof SolicitudScalarFieldEnum)[keyof typeof SolicitudScalarFieldEnum]


  export const ActoresScalarFieldEnum: {
    id: 'id',
    url_imagen: 'url_imagen',
    url_biografia: 'url_biografia',
    pelicula_id: 'pelicula_id'
  };

  export type ActoresScalarFieldEnum = (typeof ActoresScalarFieldEnum)[keyof typeof ActoresScalarFieldEnum]


  export const ActoresOnPeliculasScalarFieldEnum: {
    actor_id: 'actor_id',
    pelicula_id: 'pelicula_id'
  };

  export type ActoresOnPeliculasScalarFieldEnum = (typeof ActoresOnPeliculasScalarFieldEnum)[keyof typeof ActoresOnPeliculasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Estados'
   */
  export type EnumEstadosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estados'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    correo?: StringFilter<"Usuario"> | string
    genero?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    password?: StringFilter<"Usuario"> | string
    primer_apellido?: StringFilter<"Usuario"> | string
    primer_nombre?: StringFilter<"Usuario"> | string
    segundo_apellido?: StringNullableFilter<"Usuario"> | string | null
    segundo_nombre?: StringNullableFilter<"Usuario"> | string | null
    solicitudes?: SolicitudListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    primer_apellido?: SortOrder
    primer_nombre?: SortOrder
    segundo_apellido?: SortOrderInput | SortOrder
    segundo_nombre?: SortOrderInput | SortOrder
    solicitudes?: SolicitudOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    genero?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    password?: StringFilter<"Usuario"> | string
    primer_apellido?: StringFilter<"Usuario"> | string
    primer_nombre?: StringFilter<"Usuario"> | string
    segundo_apellido?: StringNullableFilter<"Usuario"> | string | null
    segundo_nombre?: StringNullableFilter<"Usuario"> | string | null
    solicitudes?: SolicitudListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    primer_apellido?: SortOrder
    primer_nombre?: SortOrder
    segundo_apellido?: SortOrderInput | SortOrder
    segundo_nombre?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    genero?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    password?: StringWithAggregatesFilter<"Usuario"> | string
    primer_apellido?: StringWithAggregatesFilter<"Usuario"> | string
    primer_nombre?: StringWithAggregatesFilter<"Usuario"> | string
    segundo_apellido?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    segundo_nombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type PeliculaWhereInput = {
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    id?: IntFilter<"Pelicula"> | number
    nombre?: StringFilter<"Pelicula"> | string
    sipnosis?: StringFilter<"Pelicula"> | string
    fecha_distribucion?: StringFilter<"Pelicula"> | string
    promocionar?: BoolNullableFilter<"Pelicula"> | boolean | null
    duracion?: FloatNullableFilter<"Pelicula"> | number | null
    distribuidor?: StringFilter<"Pelicula"> | string
    isan?: StringFilter<"Pelicula"> | string
    url_poster?: StringFilter<"Pelicula"> | string
    aws_url?: StringNullableFilter<"Pelicula"> | string | null
    aws_trailer?: StringNullableFilter<"Pelicula"> | string | null
    solicitud_id?: IntFilter<"Pelicula"> | number
    ActoresOnPeliculas?: ActoresOnPeliculasListRelationFilter
    Solicitud?: XOR<SolicitudRelationFilter, SolicitudWhereInput>
  }

  export type PeliculaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    sipnosis?: SortOrder
    fecha_distribucion?: SortOrder
    promocionar?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    distribuidor?: SortOrder
    isan?: SortOrder
    url_poster?: SortOrder
    aws_url?: SortOrderInput | SortOrder
    aws_trailer?: SortOrderInput | SortOrder
    solicitud_id?: SortOrder
    ActoresOnPeliculas?: ActoresOnPeliculasOrderByRelationAggregateInput
    Solicitud?: SolicitudOrderByWithRelationInput
  }

  export type PeliculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    solicitud_id?: number
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    nombre?: StringFilter<"Pelicula"> | string
    sipnosis?: StringFilter<"Pelicula"> | string
    fecha_distribucion?: StringFilter<"Pelicula"> | string
    promocionar?: BoolNullableFilter<"Pelicula"> | boolean | null
    duracion?: FloatNullableFilter<"Pelicula"> | number | null
    distribuidor?: StringFilter<"Pelicula"> | string
    isan?: StringFilter<"Pelicula"> | string
    url_poster?: StringFilter<"Pelicula"> | string
    aws_url?: StringNullableFilter<"Pelicula"> | string | null
    aws_trailer?: StringNullableFilter<"Pelicula"> | string | null
    ActoresOnPeliculas?: ActoresOnPeliculasListRelationFilter
    Solicitud?: XOR<SolicitudRelationFilter, SolicitudWhereInput>
  }, "id" | "solicitud_id">

  export type PeliculaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    sipnosis?: SortOrder
    fecha_distribucion?: SortOrder
    promocionar?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    distribuidor?: SortOrder
    isan?: SortOrder
    url_poster?: SortOrder
    aws_url?: SortOrderInput | SortOrder
    aws_trailer?: SortOrderInput | SortOrder
    solicitud_id?: SortOrder
    _count?: PeliculaCountOrderByAggregateInput
    _avg?: PeliculaAvgOrderByAggregateInput
    _max?: PeliculaMaxOrderByAggregateInput
    _min?: PeliculaMinOrderByAggregateInput
    _sum?: PeliculaSumOrderByAggregateInput
  }

  export type PeliculaScalarWhereWithAggregatesInput = {
    AND?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    OR?: PeliculaScalarWhereWithAggregatesInput[]
    NOT?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pelicula"> | number
    nombre?: StringWithAggregatesFilter<"Pelicula"> | string
    sipnosis?: StringWithAggregatesFilter<"Pelicula"> | string
    fecha_distribucion?: StringWithAggregatesFilter<"Pelicula"> | string
    promocionar?: BoolNullableWithAggregatesFilter<"Pelicula"> | boolean | null
    duracion?: FloatNullableWithAggregatesFilter<"Pelicula"> | number | null
    distribuidor?: StringWithAggregatesFilter<"Pelicula"> | string
    isan?: StringWithAggregatesFilter<"Pelicula"> | string
    url_poster?: StringWithAggregatesFilter<"Pelicula"> | string
    aws_url?: StringNullableWithAggregatesFilter<"Pelicula"> | string | null
    aws_trailer?: StringNullableWithAggregatesFilter<"Pelicula"> | string | null
    solicitud_id?: IntWithAggregatesFilter<"Pelicula"> | number
  }

  export type SolicitudWhereInput = {
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    estado?: EnumEstadosNullableFilter<"Solicitud"> | $Enums.Estados | null
    fecha_envio?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    fecha_respuesta?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    observaciones?: StringNullableFilter<"Solicitud"> | string | null
    usuario_id?: IntFilter<"Solicitud"> | number
    Pelicula?: XOR<PeliculaNullableRelationFilter, PeliculaWhereInput> | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type SolicitudOrderByWithRelationInput = {
    id?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_envio?: SortOrderInput | SortOrder
    fecha_respuesta?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    Pelicula?: PeliculaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    estado?: EnumEstadosNullableFilter<"Solicitud"> | $Enums.Estados | null
    fecha_envio?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    fecha_respuesta?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    observaciones?: StringNullableFilter<"Solicitud"> | string | null
    usuario_id?: IntFilter<"Solicitud"> | number
    Pelicula?: XOR<PeliculaNullableRelationFilter, PeliculaWhereInput> | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type SolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_envio?: SortOrderInput | SortOrder
    fecha_respuesta?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    _count?: SolicitudCountOrderByAggregateInput
    _avg?: SolicitudAvgOrderByAggregateInput
    _max?: SolicitudMaxOrderByAggregateInput
    _min?: SolicitudMinOrderByAggregateInput
    _sum?: SolicitudSumOrderByAggregateInput
  }

  export type SolicitudScalarWhereWithAggregatesInput = {
    AND?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    OR?: SolicitudScalarWhereWithAggregatesInput[]
    NOT?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitud"> | number
    estado?: EnumEstadosNullableWithAggregatesFilter<"Solicitud"> | $Enums.Estados | null
    fecha_envio?: DateTimeNullableWithAggregatesFilter<"Solicitud"> | Date | string | null
    fecha_respuesta?: DateTimeNullableWithAggregatesFilter<"Solicitud"> | Date | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Solicitud"> | string | null
    usuario_id?: IntWithAggregatesFilter<"Solicitud"> | number
  }

  export type ActoresWhereInput = {
    AND?: ActoresWhereInput | ActoresWhereInput[]
    OR?: ActoresWhereInput[]
    NOT?: ActoresWhereInput | ActoresWhereInput[]
    id?: IntFilter<"Actores"> | number
    url_imagen?: StringFilter<"Actores"> | string
    url_biografia?: StringFilter<"Actores"> | string
    pelicula_id?: IntFilter<"Actores"> | number
    ActoresOnPeliculas?: ActoresOnPeliculasListRelationFilter
  }

  export type ActoresOrderByWithRelationInput = {
    id?: SortOrder
    url_imagen?: SortOrder
    url_biografia?: SortOrder
    pelicula_id?: SortOrder
    ActoresOnPeliculas?: ActoresOnPeliculasOrderByRelationAggregateInput
  }

  export type ActoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActoresWhereInput | ActoresWhereInput[]
    OR?: ActoresWhereInput[]
    NOT?: ActoresWhereInput | ActoresWhereInput[]
    url_imagen?: StringFilter<"Actores"> | string
    url_biografia?: StringFilter<"Actores"> | string
    pelicula_id?: IntFilter<"Actores"> | number
    ActoresOnPeliculas?: ActoresOnPeliculasListRelationFilter
  }, "id">

  export type ActoresOrderByWithAggregationInput = {
    id?: SortOrder
    url_imagen?: SortOrder
    url_biografia?: SortOrder
    pelicula_id?: SortOrder
    _count?: ActoresCountOrderByAggregateInput
    _avg?: ActoresAvgOrderByAggregateInput
    _max?: ActoresMaxOrderByAggregateInput
    _min?: ActoresMinOrderByAggregateInput
    _sum?: ActoresSumOrderByAggregateInput
  }

  export type ActoresScalarWhereWithAggregatesInput = {
    AND?: ActoresScalarWhereWithAggregatesInput | ActoresScalarWhereWithAggregatesInput[]
    OR?: ActoresScalarWhereWithAggregatesInput[]
    NOT?: ActoresScalarWhereWithAggregatesInput | ActoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actores"> | number
    url_imagen?: StringWithAggregatesFilter<"Actores"> | string
    url_biografia?: StringWithAggregatesFilter<"Actores"> | string
    pelicula_id?: IntWithAggregatesFilter<"Actores"> | number
  }

  export type ActoresOnPeliculasWhereInput = {
    AND?: ActoresOnPeliculasWhereInput | ActoresOnPeliculasWhereInput[]
    OR?: ActoresOnPeliculasWhereInput[]
    NOT?: ActoresOnPeliculasWhereInput | ActoresOnPeliculasWhereInput[]
    actor_id?: IntFilter<"ActoresOnPeliculas"> | number
    pelicula_id?: IntFilter<"ActoresOnPeliculas"> | number
    Actores?: XOR<ActoresRelationFilter, ActoresWhereInput>
    Pelicula?: XOR<PeliculaRelationFilter, PeliculaWhereInput>
  }

  export type ActoresOnPeliculasOrderByWithRelationInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
    Actores?: ActoresOrderByWithRelationInput
    Pelicula?: PeliculaOrderByWithRelationInput
  }

  export type ActoresOnPeliculasWhereUniqueInput = Prisma.AtLeast<{
    actor_id_pelicula_id?: ActoresOnPeliculasActor_idPelicula_idCompoundUniqueInput
    AND?: ActoresOnPeliculasWhereInput | ActoresOnPeliculasWhereInput[]
    OR?: ActoresOnPeliculasWhereInput[]
    NOT?: ActoresOnPeliculasWhereInput | ActoresOnPeliculasWhereInput[]
    actor_id?: IntFilter<"ActoresOnPeliculas"> | number
    pelicula_id?: IntFilter<"ActoresOnPeliculas"> | number
    Actores?: XOR<ActoresRelationFilter, ActoresWhereInput>
    Pelicula?: XOR<PeliculaRelationFilter, PeliculaWhereInput>
  }, "actor_id_pelicula_id">

  export type ActoresOnPeliculasOrderByWithAggregationInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
    _count?: ActoresOnPeliculasCountOrderByAggregateInput
    _avg?: ActoresOnPeliculasAvgOrderByAggregateInput
    _max?: ActoresOnPeliculasMaxOrderByAggregateInput
    _min?: ActoresOnPeliculasMinOrderByAggregateInput
    _sum?: ActoresOnPeliculasSumOrderByAggregateInput
  }

  export type ActoresOnPeliculasScalarWhereWithAggregatesInput = {
    AND?: ActoresOnPeliculasScalarWhereWithAggregatesInput | ActoresOnPeliculasScalarWhereWithAggregatesInput[]
    OR?: ActoresOnPeliculasScalarWhereWithAggregatesInput[]
    NOT?: ActoresOnPeliculasScalarWhereWithAggregatesInput | ActoresOnPeliculasScalarWhereWithAggregatesInput[]
    actor_id?: IntWithAggregatesFilter<"ActoresOnPeliculas"> | number
    pelicula_id?: IntWithAggregatesFilter<"ActoresOnPeliculas"> | number
  }

  export type UsuarioCreateInput = {
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido?: string | null
    segundo_nombre?: string | null
    solicitudes?: SolicitudCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido?: string | null
    segundo_nombre?: string | null
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    solicitudes?: SolicitudUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    solicitudes?: SolicitudUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido?: string | null
    segundo_nombre?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeliculaCreateInput = {
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    ActoresOnPeliculas?: ActoresOnPeliculasCreateNestedManyWithoutPeliculaInput
    Solicitud: SolicitudCreateNestedOneWithoutPeliculaInput
  }

  export type PeliculaUncheckedCreateInput = {
    id?: number
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    solicitud_id: number
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedCreateNestedManyWithoutPeliculaInput
  }

  export type PeliculaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    ActoresOnPeliculas?: ActoresOnPeliculasUpdateManyWithoutPeliculaNestedInput
    Solicitud?: SolicitudUpdateOneRequiredWithoutPeliculaNestedInput
  }

  export type PeliculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    solicitud_id?: IntFieldUpdateOperationsInput | number
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedUpdateManyWithoutPeliculaNestedInput
  }

  export type PeliculaCreateManyInput = {
    id?: number
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    solicitud_id: number
  }

  export type PeliculaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeliculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    solicitud_id?: IntFieldUpdateOperationsInput | number
  }

  export type SolicitudCreateInput = {
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    Pelicula?: PeliculaCreateNestedOneWithoutSolicitudInput
    usuario: UsuarioCreateNestedOneWithoutSolicitudesInput
  }

  export type SolicitudUncheckedCreateInput = {
    id?: number
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    usuario_id: number
    Pelicula?: PeliculaUncheckedCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudUpdateInput = {
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    Pelicula?: PeliculaUpdateOneWithoutSolicitudNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSolicitudesNestedInput
  }

  export type SolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
    Pelicula?: PeliculaUncheckedUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudCreateManyInput = {
    id?: number
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    usuario_id: number
  }

  export type SolicitudUpdateManyMutationInput = {
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresCreateInput = {
    url_imagen: string
    url_biografia: string
    pelicula_id: number
    ActoresOnPeliculas?: ActoresOnPeliculasCreateNestedManyWithoutActoresInput
  }

  export type ActoresUncheckedCreateInput = {
    id?: number
    url_imagen: string
    url_biografia: string
    pelicula_id: number
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedCreateNestedManyWithoutActoresInput
  }

  export type ActoresUpdateInput = {
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
    ActoresOnPeliculas?: ActoresOnPeliculasUpdateManyWithoutActoresNestedInput
  }

  export type ActoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedUpdateManyWithoutActoresNestedInput
  }

  export type ActoresCreateManyInput = {
    id?: number
    url_imagen: string
    url_biografia: string
    pelicula_id: number
  }

  export type ActoresUpdateManyMutationInput = {
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresOnPeliculasCreateInput = {
    Actores: ActoresCreateNestedOneWithoutActoresOnPeliculasInput
    Pelicula: PeliculaCreateNestedOneWithoutActoresOnPeliculasInput
  }

  export type ActoresOnPeliculasUncheckedCreateInput = {
    actor_id: number
    pelicula_id: number
  }

  export type ActoresOnPeliculasUpdateInput = {
    Actores?: ActoresUpdateOneRequiredWithoutActoresOnPeliculasNestedInput
    Pelicula?: PeliculaUpdateOneRequiredWithoutActoresOnPeliculasNestedInput
  }

  export type ActoresOnPeliculasUncheckedUpdateInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresOnPeliculasCreateManyInput = {
    actor_id: number
    pelicula_id: number
  }

  export type ActoresOnPeliculasUpdateManyMutationInput = {

  }

  export type ActoresOnPeliculasUncheckedUpdateManyInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SolicitudListRelationFilter = {
    every?: SolicitudWhereInput
    some?: SolicitudWhereInput
    none?: SolicitudWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SolicitudOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    primer_apellido?: SortOrder
    primer_nombre?: SortOrder
    segundo_apellido?: SortOrder
    segundo_nombre?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    primer_apellido?: SortOrder
    primer_nombre?: SortOrder
    segundo_apellido?: SortOrder
    segundo_nombre?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    primer_apellido?: SortOrder
    primer_nombre?: SortOrder
    segundo_apellido?: SortOrder
    segundo_nombre?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ActoresOnPeliculasListRelationFilter = {
    every?: ActoresOnPeliculasWhereInput
    some?: ActoresOnPeliculasWhereInput
    none?: ActoresOnPeliculasWhereInput
  }

  export type SolicitudRelationFilter = {
    is?: SolicitudWhereInput
    isNot?: SolicitudWhereInput
  }

  export type ActoresOnPeliculasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeliculaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sipnosis?: SortOrder
    fecha_distribucion?: SortOrder
    promocionar?: SortOrder
    duracion?: SortOrder
    distribuidor?: SortOrder
    isan?: SortOrder
    url_poster?: SortOrder
    aws_url?: SortOrder
    aws_trailer?: SortOrder
    solicitud_id?: SortOrder
  }

  export type PeliculaAvgOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
    solicitud_id?: SortOrder
  }

  export type PeliculaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sipnosis?: SortOrder
    fecha_distribucion?: SortOrder
    promocionar?: SortOrder
    duracion?: SortOrder
    distribuidor?: SortOrder
    isan?: SortOrder
    url_poster?: SortOrder
    aws_url?: SortOrder
    aws_trailer?: SortOrder
    solicitud_id?: SortOrder
  }

  export type PeliculaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sipnosis?: SortOrder
    fecha_distribucion?: SortOrder
    promocionar?: SortOrder
    duracion?: SortOrder
    distribuidor?: SortOrder
    isan?: SortOrder
    url_poster?: SortOrder
    aws_url?: SortOrder
    aws_trailer?: SortOrder
    solicitud_id?: SortOrder
  }

  export type PeliculaSumOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
    solicitud_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEstadosNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estados[] | null
    notIn?: $Enums.Estados[] | null
    not?: NestedEnumEstadosNullableFilter<$PrismaModel> | $Enums.Estados | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PeliculaNullableRelationFilter = {
    is?: PeliculaWhereInput | null
    isNot?: PeliculaWhereInput | null
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    fecha_envio?: SortOrder
    fecha_respuesta?: SortOrder
    observaciones?: SortOrder
    usuario_id?: SortOrder
  }

  export type SolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type SolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    fecha_envio?: SortOrder
    fecha_respuesta?: SortOrder
    observaciones?: SortOrder
    usuario_id?: SortOrder
  }

  export type SolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    fecha_envio?: SortOrder
    fecha_respuesta?: SortOrder
    observaciones?: SortOrder
    usuario_id?: SortOrder
  }

  export type SolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnumEstadosNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estados[] | null
    notIn?: $Enums.Estados[] | null
    not?: NestedEnumEstadosNullableWithAggregatesFilter<$PrismaModel> | $Enums.Estados | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEstadosNullableFilter<$PrismaModel>
    _max?: NestedEnumEstadosNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ActoresCountOrderByAggregateInput = {
    id?: SortOrder
    url_imagen?: SortOrder
    url_biografia?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresAvgOrderByAggregateInput = {
    id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresMaxOrderByAggregateInput = {
    id?: SortOrder
    url_imagen?: SortOrder
    url_biografia?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresMinOrderByAggregateInput = {
    id?: SortOrder
    url_imagen?: SortOrder
    url_biografia?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresSumOrderByAggregateInput = {
    id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresRelationFilter = {
    is?: ActoresWhereInput
    isNot?: ActoresWhereInput
  }

  export type PeliculaRelationFilter = {
    is?: PeliculaWhereInput
    isNot?: PeliculaWhereInput
  }

  export type ActoresOnPeliculasActor_idPelicula_idCompoundUniqueInput = {
    actor_id: number
    pelicula_id: number
  }

  export type ActoresOnPeliculasCountOrderByAggregateInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresOnPeliculasAvgOrderByAggregateInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresOnPeliculasMaxOrderByAggregateInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresOnPeliculasMinOrderByAggregateInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type ActoresOnPeliculasSumOrderByAggregateInput = {
    actor_id?: SortOrder
    pelicula_id?: SortOrder
  }

  export type SolicitudCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput> | SolicitudCreateWithoutUsuarioInput[] | SolicitudUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioInput | SolicitudCreateOrConnectWithoutUsuarioInput[]
    createMany?: SolicitudCreateManyUsuarioInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput> | SolicitudCreateWithoutUsuarioInput[] | SolicitudUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioInput | SolicitudCreateOrConnectWithoutUsuarioInput[]
    createMany?: SolicitudCreateManyUsuarioInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SolicitudUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput> | SolicitudCreateWithoutUsuarioInput[] | SolicitudUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioInput | SolicitudCreateOrConnectWithoutUsuarioInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutUsuarioInput | SolicitudUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SolicitudCreateManyUsuarioInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutUsuarioInput | SolicitudUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutUsuarioInput | SolicitudUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SolicitudUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput> | SolicitudCreateWithoutUsuarioInput[] | SolicitudUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioInput | SolicitudCreateOrConnectWithoutUsuarioInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutUsuarioInput | SolicitudUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SolicitudCreateManyUsuarioInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutUsuarioInput | SolicitudUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutUsuarioInput | SolicitudUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type ActoresOnPeliculasCreateNestedManyWithoutPeliculaInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput> | ActoresOnPeliculasCreateWithoutPeliculaInput[] | ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput | ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput[]
    createMany?: ActoresOnPeliculasCreateManyPeliculaInputEnvelope
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
  }

  export type SolicitudCreateNestedOneWithoutPeliculaInput = {
    create?: XOR<SolicitudCreateWithoutPeliculaInput, SolicitudUncheckedCreateWithoutPeliculaInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutPeliculaInput
    connect?: SolicitudWhereUniqueInput
  }

  export type ActoresOnPeliculasUncheckedCreateNestedManyWithoutPeliculaInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput> | ActoresOnPeliculasCreateWithoutPeliculaInput[] | ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput | ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput[]
    createMany?: ActoresOnPeliculasCreateManyPeliculaInputEnvelope
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActoresOnPeliculasUpdateManyWithoutPeliculaNestedInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput> | ActoresOnPeliculasCreateWithoutPeliculaInput[] | ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput | ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput[]
    upsert?: ActoresOnPeliculasUpsertWithWhereUniqueWithoutPeliculaInput | ActoresOnPeliculasUpsertWithWhereUniqueWithoutPeliculaInput[]
    createMany?: ActoresOnPeliculasCreateManyPeliculaInputEnvelope
    set?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    disconnect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    delete?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    update?: ActoresOnPeliculasUpdateWithWhereUniqueWithoutPeliculaInput | ActoresOnPeliculasUpdateWithWhereUniqueWithoutPeliculaInput[]
    updateMany?: ActoresOnPeliculasUpdateManyWithWhereWithoutPeliculaInput | ActoresOnPeliculasUpdateManyWithWhereWithoutPeliculaInput[]
    deleteMany?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
  }

  export type SolicitudUpdateOneRequiredWithoutPeliculaNestedInput = {
    create?: XOR<SolicitudCreateWithoutPeliculaInput, SolicitudUncheckedCreateWithoutPeliculaInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutPeliculaInput
    upsert?: SolicitudUpsertWithoutPeliculaInput
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutPeliculaInput, SolicitudUpdateWithoutPeliculaInput>, SolicitudUncheckedUpdateWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasUncheckedUpdateManyWithoutPeliculaNestedInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput> | ActoresOnPeliculasCreateWithoutPeliculaInput[] | ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput | ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput[]
    upsert?: ActoresOnPeliculasUpsertWithWhereUniqueWithoutPeliculaInput | ActoresOnPeliculasUpsertWithWhereUniqueWithoutPeliculaInput[]
    createMany?: ActoresOnPeliculasCreateManyPeliculaInputEnvelope
    set?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    disconnect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    delete?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    update?: ActoresOnPeliculasUpdateWithWhereUniqueWithoutPeliculaInput | ActoresOnPeliculasUpdateWithWhereUniqueWithoutPeliculaInput[]
    updateMany?: ActoresOnPeliculasUpdateManyWithWhereWithoutPeliculaInput | ActoresOnPeliculasUpdateManyWithWhereWithoutPeliculaInput[]
    deleteMany?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
  }

  export type PeliculaCreateNestedOneWithoutSolicitudInput = {
    create?: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutSolicitudInput
    connect?: PeliculaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesInput, UsuarioUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PeliculaUncheckedCreateNestedOneWithoutSolicitudInput = {
    create?: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutSolicitudInput
    connect?: PeliculaWhereUniqueInput
  }

  export type NullableEnumEstadosFieldUpdateOperationsInput = {
    set?: $Enums.Estados | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PeliculaUpdateOneWithoutSolicitudNestedInput = {
    create?: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutSolicitudInput
    upsert?: PeliculaUpsertWithoutSolicitudInput
    disconnect?: PeliculaWhereInput | boolean
    delete?: PeliculaWhereInput | boolean
    connect?: PeliculaWhereUniqueInput
    update?: XOR<XOR<PeliculaUpdateToOneWithWhereWithoutSolicitudInput, PeliculaUpdateWithoutSolicitudInput>, PeliculaUncheckedUpdateWithoutSolicitudInput>
  }

  export type UsuarioUpdateOneRequiredWithoutSolicitudesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesInput, UsuarioUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesInput
    upsert?: UsuarioUpsertWithoutSolicitudesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSolicitudesInput, UsuarioUpdateWithoutSolicitudesInput>, UsuarioUncheckedUpdateWithoutSolicitudesInput>
  }

  export type PeliculaUncheckedUpdateOneWithoutSolicitudNestedInput = {
    create?: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutSolicitudInput
    upsert?: PeliculaUpsertWithoutSolicitudInput
    disconnect?: PeliculaWhereInput | boolean
    delete?: PeliculaWhereInput | boolean
    connect?: PeliculaWhereUniqueInput
    update?: XOR<XOR<PeliculaUpdateToOneWithWhereWithoutSolicitudInput, PeliculaUpdateWithoutSolicitudInput>, PeliculaUncheckedUpdateWithoutSolicitudInput>
  }

  export type ActoresOnPeliculasCreateNestedManyWithoutActoresInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput> | ActoresOnPeliculasCreateWithoutActoresInput[] | ActoresOnPeliculasUncheckedCreateWithoutActoresInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutActoresInput | ActoresOnPeliculasCreateOrConnectWithoutActoresInput[]
    createMany?: ActoresOnPeliculasCreateManyActoresInputEnvelope
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
  }

  export type ActoresOnPeliculasUncheckedCreateNestedManyWithoutActoresInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput> | ActoresOnPeliculasCreateWithoutActoresInput[] | ActoresOnPeliculasUncheckedCreateWithoutActoresInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutActoresInput | ActoresOnPeliculasCreateOrConnectWithoutActoresInput[]
    createMany?: ActoresOnPeliculasCreateManyActoresInputEnvelope
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
  }

  export type ActoresOnPeliculasUpdateManyWithoutActoresNestedInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput> | ActoresOnPeliculasCreateWithoutActoresInput[] | ActoresOnPeliculasUncheckedCreateWithoutActoresInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutActoresInput | ActoresOnPeliculasCreateOrConnectWithoutActoresInput[]
    upsert?: ActoresOnPeliculasUpsertWithWhereUniqueWithoutActoresInput | ActoresOnPeliculasUpsertWithWhereUniqueWithoutActoresInput[]
    createMany?: ActoresOnPeliculasCreateManyActoresInputEnvelope
    set?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    disconnect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    delete?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    update?: ActoresOnPeliculasUpdateWithWhereUniqueWithoutActoresInput | ActoresOnPeliculasUpdateWithWhereUniqueWithoutActoresInput[]
    updateMany?: ActoresOnPeliculasUpdateManyWithWhereWithoutActoresInput | ActoresOnPeliculasUpdateManyWithWhereWithoutActoresInput[]
    deleteMany?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
  }

  export type ActoresOnPeliculasUncheckedUpdateManyWithoutActoresNestedInput = {
    create?: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput> | ActoresOnPeliculasCreateWithoutActoresInput[] | ActoresOnPeliculasUncheckedCreateWithoutActoresInput[]
    connectOrCreate?: ActoresOnPeliculasCreateOrConnectWithoutActoresInput | ActoresOnPeliculasCreateOrConnectWithoutActoresInput[]
    upsert?: ActoresOnPeliculasUpsertWithWhereUniqueWithoutActoresInput | ActoresOnPeliculasUpsertWithWhereUniqueWithoutActoresInput[]
    createMany?: ActoresOnPeliculasCreateManyActoresInputEnvelope
    set?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    disconnect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    delete?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    connect?: ActoresOnPeliculasWhereUniqueInput | ActoresOnPeliculasWhereUniqueInput[]
    update?: ActoresOnPeliculasUpdateWithWhereUniqueWithoutActoresInput | ActoresOnPeliculasUpdateWithWhereUniqueWithoutActoresInput[]
    updateMany?: ActoresOnPeliculasUpdateManyWithWhereWithoutActoresInput | ActoresOnPeliculasUpdateManyWithWhereWithoutActoresInput[]
    deleteMany?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
  }

  export type ActoresCreateNestedOneWithoutActoresOnPeliculasInput = {
    create?: XOR<ActoresCreateWithoutActoresOnPeliculasInput, ActoresUncheckedCreateWithoutActoresOnPeliculasInput>
    connectOrCreate?: ActoresCreateOrConnectWithoutActoresOnPeliculasInput
    connect?: ActoresWhereUniqueInput
  }

  export type PeliculaCreateNestedOneWithoutActoresOnPeliculasInput = {
    create?: XOR<PeliculaCreateWithoutActoresOnPeliculasInput, PeliculaUncheckedCreateWithoutActoresOnPeliculasInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutActoresOnPeliculasInput
    connect?: PeliculaWhereUniqueInput
  }

  export type ActoresUpdateOneRequiredWithoutActoresOnPeliculasNestedInput = {
    create?: XOR<ActoresCreateWithoutActoresOnPeliculasInput, ActoresUncheckedCreateWithoutActoresOnPeliculasInput>
    connectOrCreate?: ActoresCreateOrConnectWithoutActoresOnPeliculasInput
    upsert?: ActoresUpsertWithoutActoresOnPeliculasInput
    connect?: ActoresWhereUniqueInput
    update?: XOR<XOR<ActoresUpdateToOneWithWhereWithoutActoresOnPeliculasInput, ActoresUpdateWithoutActoresOnPeliculasInput>, ActoresUncheckedUpdateWithoutActoresOnPeliculasInput>
  }

  export type PeliculaUpdateOneRequiredWithoutActoresOnPeliculasNestedInput = {
    create?: XOR<PeliculaCreateWithoutActoresOnPeliculasInput, PeliculaUncheckedCreateWithoutActoresOnPeliculasInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutActoresOnPeliculasInput
    upsert?: PeliculaUpsertWithoutActoresOnPeliculasInput
    connect?: PeliculaWhereUniqueInput
    update?: XOR<XOR<PeliculaUpdateToOneWithWhereWithoutActoresOnPeliculasInput, PeliculaUpdateWithoutActoresOnPeliculasInput>, PeliculaUncheckedUpdateWithoutActoresOnPeliculasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadosNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estados[] | null
    notIn?: $Enums.Estados[] | null
    not?: NestedEnumEstadosNullableFilter<$PrismaModel> | $Enums.Estados | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEstadosNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estados[] | null
    notIn?: $Enums.Estados[] | null
    not?: NestedEnumEstadosNullableWithAggregatesFilter<$PrismaModel> | $Enums.Estados | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEstadosNullableFilter<$PrismaModel>
    _max?: NestedEnumEstadosNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SolicitudCreateWithoutUsuarioInput = {
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    Pelicula?: PeliculaCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutUsuarioInput = {
    id?: number
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    Pelicula?: PeliculaUncheckedCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutUsuarioInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput>
  }

  export type SolicitudCreateManyUsuarioInputEnvelope = {
    data: SolicitudCreateManyUsuarioInput | SolicitudCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutUsuarioInput, SolicitudUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SolicitudCreateWithoutUsuarioInput, SolicitudUncheckedCreateWithoutUsuarioInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutUsuarioInput, SolicitudUncheckedUpdateWithoutUsuarioInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutUsuarioInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SolicitudScalarWhereInput = {
    AND?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    OR?: SolicitudScalarWhereInput[]
    NOT?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    estado?: EnumEstadosNullableFilter<"Solicitud"> | $Enums.Estados | null
    fecha_envio?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    fecha_respuesta?: DateTimeNullableFilter<"Solicitud"> | Date | string | null
    observaciones?: StringNullableFilter<"Solicitud"> | string | null
    usuario_id?: IntFilter<"Solicitud"> | number
  }

  export type ActoresOnPeliculasCreateWithoutPeliculaInput = {
    Actores: ActoresCreateNestedOneWithoutActoresOnPeliculasInput
  }

  export type ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput = {
    actor_id: number
  }

  export type ActoresOnPeliculasCreateOrConnectWithoutPeliculaInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    create: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasCreateManyPeliculaInputEnvelope = {
    data: ActoresOnPeliculasCreateManyPeliculaInput | ActoresOnPeliculasCreateManyPeliculaInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudCreateWithoutPeliculaInput = {
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    usuario: UsuarioCreateNestedOneWithoutSolicitudesInput
  }

  export type SolicitudUncheckedCreateWithoutPeliculaInput = {
    id?: number
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
    usuario_id: number
  }

  export type SolicitudCreateOrConnectWithoutPeliculaInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutPeliculaInput, SolicitudUncheckedCreateWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasUpsertWithWhereUniqueWithoutPeliculaInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    update: XOR<ActoresOnPeliculasUpdateWithoutPeliculaInput, ActoresOnPeliculasUncheckedUpdateWithoutPeliculaInput>
    create: XOR<ActoresOnPeliculasCreateWithoutPeliculaInput, ActoresOnPeliculasUncheckedCreateWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasUpdateWithWhereUniqueWithoutPeliculaInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    data: XOR<ActoresOnPeliculasUpdateWithoutPeliculaInput, ActoresOnPeliculasUncheckedUpdateWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasUpdateManyWithWhereWithoutPeliculaInput = {
    where: ActoresOnPeliculasScalarWhereInput
    data: XOR<ActoresOnPeliculasUpdateManyMutationInput, ActoresOnPeliculasUncheckedUpdateManyWithoutPeliculaInput>
  }

  export type ActoresOnPeliculasScalarWhereInput = {
    AND?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
    OR?: ActoresOnPeliculasScalarWhereInput[]
    NOT?: ActoresOnPeliculasScalarWhereInput | ActoresOnPeliculasScalarWhereInput[]
    actor_id?: IntFilter<"ActoresOnPeliculas"> | number
    pelicula_id?: IntFilter<"ActoresOnPeliculas"> | number
  }

  export type SolicitudUpsertWithoutPeliculaInput = {
    update: XOR<SolicitudUpdateWithoutPeliculaInput, SolicitudUncheckedUpdateWithoutPeliculaInput>
    create: XOR<SolicitudCreateWithoutPeliculaInput, SolicitudUncheckedCreateWithoutPeliculaInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutPeliculaInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutPeliculaInput, SolicitudUncheckedUpdateWithoutPeliculaInput>
  }

  export type SolicitudUpdateWithoutPeliculaInput = {
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSolicitudesNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutPeliculaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type PeliculaCreateWithoutSolicitudInput = {
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    ActoresOnPeliculas?: ActoresOnPeliculasCreateNestedManyWithoutPeliculaInput
  }

  export type PeliculaUncheckedCreateWithoutSolicitudInput = {
    id?: number
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedCreateNestedManyWithoutPeliculaInput
  }

  export type PeliculaCreateOrConnectWithoutSolicitudInput = {
    where: PeliculaWhereUniqueInput
    create: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
  }

  export type UsuarioCreateWithoutSolicitudesInput = {
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido?: string | null
    segundo_nombre?: string | null
  }

  export type UsuarioUncheckedCreateWithoutSolicitudesInput = {
    id?: number
    correo: string
    genero: string
    telefono: string
    rol: $Enums.Rol
    password: string
    primer_apellido: string
    primer_nombre: string
    segundo_apellido?: string | null
    segundo_nombre?: string | null
  }

  export type UsuarioCreateOrConnectWithoutSolicitudesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSolicitudesInput, UsuarioUncheckedCreateWithoutSolicitudesInput>
  }

  export type PeliculaUpsertWithoutSolicitudInput = {
    update: XOR<PeliculaUpdateWithoutSolicitudInput, PeliculaUncheckedUpdateWithoutSolicitudInput>
    create: XOR<PeliculaCreateWithoutSolicitudInput, PeliculaUncheckedCreateWithoutSolicitudInput>
    where?: PeliculaWhereInput
  }

  export type PeliculaUpdateToOneWithWhereWithoutSolicitudInput = {
    where?: PeliculaWhereInput
    data: XOR<PeliculaUpdateWithoutSolicitudInput, PeliculaUncheckedUpdateWithoutSolicitudInput>
  }

  export type PeliculaUpdateWithoutSolicitudInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    ActoresOnPeliculas?: ActoresOnPeliculasUpdateManyWithoutPeliculaNestedInput
  }

  export type PeliculaUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    ActoresOnPeliculas?: ActoresOnPeliculasUncheckedUpdateManyWithoutPeliculaNestedInput
  }

  export type UsuarioUpsertWithoutSolicitudesInput = {
    update: XOR<UsuarioUpdateWithoutSolicitudesInput, UsuarioUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<UsuarioCreateWithoutSolicitudesInput, UsuarioUncheckedCreateWithoutSolicitudesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSolicitudesInput, UsuarioUncheckedUpdateWithoutSolicitudesInput>
  }

  export type UsuarioUpdateWithoutSolicitudesInput = {
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateWithoutSolicitudesInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: NullableStringFieldUpdateOperationsInput | string | null
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActoresOnPeliculasCreateWithoutActoresInput = {
    Pelicula: PeliculaCreateNestedOneWithoutActoresOnPeliculasInput
  }

  export type ActoresOnPeliculasUncheckedCreateWithoutActoresInput = {
    pelicula_id: number
  }

  export type ActoresOnPeliculasCreateOrConnectWithoutActoresInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    create: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput>
  }

  export type ActoresOnPeliculasCreateManyActoresInputEnvelope = {
    data: ActoresOnPeliculasCreateManyActoresInput | ActoresOnPeliculasCreateManyActoresInput[]
    skipDuplicates?: boolean
  }

  export type ActoresOnPeliculasUpsertWithWhereUniqueWithoutActoresInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    update: XOR<ActoresOnPeliculasUpdateWithoutActoresInput, ActoresOnPeliculasUncheckedUpdateWithoutActoresInput>
    create: XOR<ActoresOnPeliculasCreateWithoutActoresInput, ActoresOnPeliculasUncheckedCreateWithoutActoresInput>
  }

  export type ActoresOnPeliculasUpdateWithWhereUniqueWithoutActoresInput = {
    where: ActoresOnPeliculasWhereUniqueInput
    data: XOR<ActoresOnPeliculasUpdateWithoutActoresInput, ActoresOnPeliculasUncheckedUpdateWithoutActoresInput>
  }

  export type ActoresOnPeliculasUpdateManyWithWhereWithoutActoresInput = {
    where: ActoresOnPeliculasScalarWhereInput
    data: XOR<ActoresOnPeliculasUpdateManyMutationInput, ActoresOnPeliculasUncheckedUpdateManyWithoutActoresInput>
  }

  export type ActoresCreateWithoutActoresOnPeliculasInput = {
    url_imagen: string
    url_biografia: string
    pelicula_id: number
  }

  export type ActoresUncheckedCreateWithoutActoresOnPeliculasInput = {
    id?: number
    url_imagen: string
    url_biografia: string
    pelicula_id: number
  }

  export type ActoresCreateOrConnectWithoutActoresOnPeliculasInput = {
    where: ActoresWhereUniqueInput
    create: XOR<ActoresCreateWithoutActoresOnPeliculasInput, ActoresUncheckedCreateWithoutActoresOnPeliculasInput>
  }

  export type PeliculaCreateWithoutActoresOnPeliculasInput = {
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    Solicitud: SolicitudCreateNestedOneWithoutPeliculaInput
  }

  export type PeliculaUncheckedCreateWithoutActoresOnPeliculasInput = {
    id?: number
    nombre: string
    sipnosis: string
    fecha_distribucion: string
    promocionar?: boolean | null
    duracion?: number | null
    distribuidor: string
    isan: string
    url_poster: string
    aws_url?: string | null
    aws_trailer?: string | null
    solicitud_id: number
  }

  export type PeliculaCreateOrConnectWithoutActoresOnPeliculasInput = {
    where: PeliculaWhereUniqueInput
    create: XOR<PeliculaCreateWithoutActoresOnPeliculasInput, PeliculaUncheckedCreateWithoutActoresOnPeliculasInput>
  }

  export type ActoresUpsertWithoutActoresOnPeliculasInput = {
    update: XOR<ActoresUpdateWithoutActoresOnPeliculasInput, ActoresUncheckedUpdateWithoutActoresOnPeliculasInput>
    create: XOR<ActoresCreateWithoutActoresOnPeliculasInput, ActoresUncheckedCreateWithoutActoresOnPeliculasInput>
    where?: ActoresWhereInput
  }

  export type ActoresUpdateToOneWithWhereWithoutActoresOnPeliculasInput = {
    where?: ActoresWhereInput
    data: XOR<ActoresUpdateWithoutActoresOnPeliculasInput, ActoresUncheckedUpdateWithoutActoresOnPeliculasInput>
  }

  export type ActoresUpdateWithoutActoresOnPeliculasInput = {
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresUncheckedUpdateWithoutActoresOnPeliculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_imagen?: StringFieldUpdateOperationsInput | string
    url_biografia?: StringFieldUpdateOperationsInput | string
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type PeliculaUpsertWithoutActoresOnPeliculasInput = {
    update: XOR<PeliculaUpdateWithoutActoresOnPeliculasInput, PeliculaUncheckedUpdateWithoutActoresOnPeliculasInput>
    create: XOR<PeliculaCreateWithoutActoresOnPeliculasInput, PeliculaUncheckedCreateWithoutActoresOnPeliculasInput>
    where?: PeliculaWhereInput
  }

  export type PeliculaUpdateToOneWithWhereWithoutActoresOnPeliculasInput = {
    where?: PeliculaWhereInput
    data: XOR<PeliculaUpdateWithoutActoresOnPeliculasInput, PeliculaUncheckedUpdateWithoutActoresOnPeliculasInput>
  }

  export type PeliculaUpdateWithoutActoresOnPeliculasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    Solicitud?: SolicitudUpdateOneRequiredWithoutPeliculaNestedInput
  }

  export type PeliculaUncheckedUpdateWithoutActoresOnPeliculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sipnosis?: StringFieldUpdateOperationsInput | string
    fecha_distribucion?: StringFieldUpdateOperationsInput | string
    promocionar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duracion?: NullableFloatFieldUpdateOperationsInput | number | null
    distribuidor?: StringFieldUpdateOperationsInput | string
    isan?: StringFieldUpdateOperationsInput | string
    url_poster?: StringFieldUpdateOperationsInput | string
    aws_url?: NullableStringFieldUpdateOperationsInput | string | null
    aws_trailer?: NullableStringFieldUpdateOperationsInput | string | null
    solicitud_id?: IntFieldUpdateOperationsInput | number
  }

  export type SolicitudCreateManyUsuarioInput = {
    id?: number
    estado?: $Enums.Estados | null
    fecha_envio?: Date | string | null
    fecha_respuesta?: Date | string | null
    observaciones?: string | null
  }

  export type SolicitudUpdateWithoutUsuarioInput = {
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    Pelicula?: PeliculaUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    Pelicula?: PeliculaUncheckedUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: NullableEnumEstadosFieldUpdateOperationsInput | $Enums.Estados | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActoresOnPeliculasCreateManyPeliculaInput = {
    actor_id: number
  }

  export type ActoresOnPeliculasUpdateWithoutPeliculaInput = {
    Actores?: ActoresUpdateOneRequiredWithoutActoresOnPeliculasNestedInput
  }

  export type ActoresOnPeliculasUncheckedUpdateWithoutPeliculaInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresOnPeliculasUncheckedUpdateManyWithoutPeliculaInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresOnPeliculasCreateManyActoresInput = {
    pelicula_id: number
  }

  export type ActoresOnPeliculasUpdateWithoutActoresInput = {
    Pelicula?: PeliculaUpdateOneRequiredWithoutActoresOnPeliculasNestedInput
  }

  export type ActoresOnPeliculasUncheckedUpdateWithoutActoresInput = {
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActoresOnPeliculasUncheckedUpdateManyWithoutActoresInput = {
    pelicula_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeliculaCountOutputTypeDefaultArgs instead
     */
    export type PeliculaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeliculaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActoresCountOutputTypeDefaultArgs instead
     */
    export type ActoresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActoresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeliculaDefaultArgs instead
     */
    export type PeliculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeliculaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SolicitudDefaultArgs instead
     */
    export type SolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SolicitudDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActoresDefaultArgs instead
     */
    export type ActoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActoresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActoresOnPeliculasDefaultArgs instead
     */
    export type ActoresOnPeliculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActoresOnPeliculasDefaultArgs<ExtArgs>

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