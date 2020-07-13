# pentula-api

REST API for Pentula

Clone project for front-end from https://github.com/annaruntti/pentula.git, UI start with command: "npm start". Opens in port http://localhost:3000. Documentation for front-end from: https://github.com/annaruntti/pentula

API starts with command: "docker-compose up" it's listening port 8000. You need PostgreSQL database. From /api/omat-koirat you can found dog's from database with get method and add new dogs with post method.

There is three tables in database with names "own_dogs" and "own_litters" and "puppies".

To create a migration, run
`npm run migrate:make MIGRATION_NAME`

esim.

npm run migrate:make create_test or npm run migrate:make add_joku_column

docker exec -d my-puppies-api_api_1 npm run migrate

To run migrations, run
`npm run migrate`

For rollback, run
`npm run migrate:rollback`
