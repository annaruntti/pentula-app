/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    ALTER TABLE own_dogs
    ADD active boolean
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    DROP TABLE own_dogs;
  `);
