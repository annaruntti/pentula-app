const config = {
  client: "postgres",
  connection: async () => {
    return {
      host: "localhost",
      user: "mypuppies",
      password: "mypuppies",
      database: "mypuppies",
    };
  },
  migrations: {
    directory: "./migrations",
    tableName: "migrations",
  },
};

export default config;
