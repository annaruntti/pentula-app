module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: "localhost",
      user: "mypuppies",
      password: "mypuppies",
      database: "mypuppies",
      port: process.env.MIGRATE === "true" ? 5431 : 5431,
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
