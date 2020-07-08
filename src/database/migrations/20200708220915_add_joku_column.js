/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    ALTER TABLE test ADD COLUMN foobar integer NOT NULL
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    ALTER TABLE test DROP COLUMN foobar;
  `);
