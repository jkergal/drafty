
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Drafty_configurationsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  scheduled_message: 'scheduled_message',
  checkin_message: 'checkin_message',
  cron_date: 'cron_date',
  current_mtg_format: 'current_mtg_format'
};

exports.Prisma.Enrollment_messagesScalarFieldEnum = {
  id: 'id',
  sent_at: 'sent_at',
  discord_id: 'discord_id'
};

exports.Prisma.Game_tablesScalarFieldEnum = {
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

exports.Prisma.PodsScalarFieldEnum = {
  id: 'id',
  enrollment_messages_id: 'enrollment_messages_id',
  starts_at: 'starts_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  drafty_configurations: 'drafty_configurations',
  enrollment_messages: 'enrollment_messages',
  game_tables: 'game_tables',
  pods: 'pods'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/jkergal/dev/drafty/database/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgZHJhZnR5X2NvbmZpZ3VyYXRpb25zIHsKICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZAogIGNyZWF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBzY2hlZHVsZWRfbWVzc2FnZSAgU3RyaW5nICAgIEBkYi5WYXJDaGFyCiAgY2hlY2tpbl9tZXNzYWdlICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcgogIGNyb25fZGF0ZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIKICBjdXJyZW50X210Z19mb3JtYXQgU3RyaW5nICAgIEBkYi5WYXJDaGFyCn0KCm1vZGVsIGVucm9sbG1lbnRfbWVzc2FnZXMgewogIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZAogIHNlbnRfYXQgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgZGlzY29yZF9pZCBTdHJpbmcgICAgQGRiLlZhckNoYXIKICBwb2RzICAgICAgIHBvZHNbXQp9Cgptb2RlbCBnYW1lX3RhYmxlcyB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkCiAgcG9kX2lkICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlV1aWQKICBjb21wbGV0ZWRfYXQgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHBsYXllcl8xX2Rpc2NvcmRfaWQgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgcGxheWVyXzJfZGlzY29yZF9pZCBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBwbGF5ZXJfM19kaXNjb3JkX2lkIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIHBsYXllcl80X2Rpc2NvcmRfaWQgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgcGxheWVyXzVfZGlzY29yZF9pZCBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBwbGF5ZXJfNl9kaXNjb3JkX2lkIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIHBsYXllcl83X2Rpc2NvcmRfaWQgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgcGxheWVyXzhfZGlzY29yZF9pZCBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBwb2RzICAgICAgICAgICAgICAgIHBvZHMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcG9kX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIHBvZHMgewogIGlkICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAaWQgQGRiLlV1aWQKICBlbnJvbGxtZW50X21lc3NhZ2VzX2lkIFN0cmluZyAgICAgICAgICAgICAgQGRiLlV1aWQKICBzdGFydHNfYXQgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRiLkRhdGUKICBnYW1lX3RhYmxlcyAgICAgICAgICAgIGdhbWVfdGFibGVzW10KICBlbnJvbGxtZW50X21lc3NhZ2VzICAgIGVucm9sbG1lbnRfbWVzc2FnZXMgQHJlbGF0aW9uKGZpZWxkczogW2Vucm9sbG1lbnRfbWVzc2FnZXNfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKfQo=",
  "inlineSchemaHash": "4fa0e8dbc95d56f54882150748750028eca3baa5d0f3507f75ed3dc037582ef4"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"drafty_configurations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduled_message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkin_message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cron_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_mtg_format\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"enrollment_messages\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pods\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pods\",\"relationName\":\"enrollment_messagesTopods\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"game_tables\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pod_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_1_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_2_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_3_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_4_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_5_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_6_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_7_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"player_8_discord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pods\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pods\",\"relationName\":\"game_tablesTopods\",\"relationFromFields\":[\"pod_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pods\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollment_messages_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"starts_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game_tables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"game_tables\",\"relationName\":\"game_tablesTopods\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollment_messages\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enrollment_messages\",\"relationName\":\"enrollment_messagesTopods\",\"relationFromFields\":[\"enrollment_messages_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/schema.prisma")
