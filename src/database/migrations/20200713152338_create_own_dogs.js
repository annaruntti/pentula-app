/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    CREATE TABLE own_dogs (
      dog_id serial PRIMARY KEY,
      user_id serial,
      name text NOT NULL,
      bdate timestamp NOT NULL,
      rnumber text,
      breed text,
      sex text NOT NULL
    )
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    DROP TABLE own_dogs;
  `);
