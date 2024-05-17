import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "ditobayu25",
      port: 5432,
      host: "localhost",
      database: "CH_5_ORM",
    },
  },
};

module.exports = config;
