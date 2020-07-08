/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    CREATE TABLE test (
      id serial PRIMARY KEY,
      column1 text,
      column2 integer NOT NULL
    )
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    DROP TABLE test;
  `);
