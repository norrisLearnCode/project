export = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: "5432",
      database: "pern_todo_dev",
      user: "pern_todo_admin",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: "knex_migrations",
      extension: "ts",
    },
  },
} as { [key: string]: object };
