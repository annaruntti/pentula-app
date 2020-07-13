/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    CREATE TABLE own_litters (
      litter_id serial PRIMARY KEY,
      user_id serial,
      litter_name text NOT NULL,
      bdate timestamp NOT NULL,
      breed text,
      mon_name text NOT NULL,
      dad_name text NOT NULL,
      additional_info text
    )
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    DROP TABLE own_litters;
  `);
