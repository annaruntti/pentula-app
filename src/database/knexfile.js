module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: process.env.MIGRATE === "true" ? "localhost" : "db",
      user: "mypuppies",
      password: "mypuppies",
      database: "mypuppies",
      port: process.env.MIGRATE === "true" ? 5431 : 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations",
      stub: "./migrationStub.js",
    },
  },
};
