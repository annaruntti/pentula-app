/**
 * Knex migrations.
 *
 * @see http://knexjs.org/#Migrations-API
 */

exports.up = async (knex) =>
  knex.schema.raw(`
    CREATE TABLE puppies (
      puppy_id serial NOT NULL,
      litter_id serial,
      btime timestamp NOT NULL,
      name text NOT NULL,
      bweight integer,
      sex text NOT NULL,
      description text,
      PRIMARY KEY (puppy_id),
      FOREIGN KEY (litter_id) REFERENCES own_litters(litter_id)
    )
    `);

exports.down = async (knex) =>
  knex.schema.raw(`
    DROP TABLE puppies;
  `);
