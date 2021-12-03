const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Knex = require("knex");
const dbConfig = require("./database/knexfile.js");

const app = express();
const PORT = 8000;
const db = Knex(dbConfig[process.env.NODE_ENV]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/omat-koirat", async (request, response) => {
  let error = undefined;

  const res = await db("own_dogs").catch(err => (error = err));

  if (error) {
    return response.status(500).send(error);
  }

  response.send(res);
});

app.post("/api/uusi-koira", async (request, response) => {
  let error = undefined;

  await db("own_dogs").insert({
    dog_id: request.body.dog_id,
    user_id: request.body.user_id,
    official_name: request.body.official_name,
    name: request.body.name,
    bdate: request.body.bdate,
    rnumber: request.body.rnumber,
    breed: request.body.breed,
    sex: request.body.sex,
    active: request.body.active,
  });
  // .catch(err => (error = err));

  if (error) {
    return response.status(500).send(error);
  } else {
    console.log("DATA INSERTED");
    db.end();
    response.status(201).send({ message: "Koira lisätty!" });
  }
});

app.get("/api/omat-pentueet", async (request, response) => {
  let error = undefined;

  const res = await db("own_litters").catch(err => (error = err));

  if (error) {
    return response.status(500).send(error);
  }

  response.send(res);
});

/* fiksaa tää */

app.post("/api/uusi-pentue", function (request, response) {
  var bdate = request.body.bdate;
  var litter_name = request.body.litter_name;
  var breed = request.body.breed;
  var mon_name = request.body.mon_name;
  var dad_name = request.body.dad_name;
  var additional_info = request.body.additional_info;
  var litter_id = request.body.litter_id;
  var user_id = request.body.user_id;
  let values = [
    litter_id,
    bdate,
    litter_name,
    breed,
    mon_name,
    dad_name,
    additional_info,
    user_id,
  ];

  pool.connect((err, db, done) => {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "INSERT INTO own_litters (bdate, litter_name, breed, mom_name, dad_name, additional_info, litter_id, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
        [...values],
        (err, table) => {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            console.log("DATA INSERTED");
            db.end();
            response.status(201).send({ message: "Pentue lisätty!" });
          }
        }
      );
    }
  });
});

app.post("/api/uusi-pentue/pennun-tiedot", function (request, response) {
  var litter_id = request.body.litter_id;
  var puppy_id = request.body.puppy_id;
  var btime = request.body.btime;
  var name = request.body.name;
  var bweight = request.body.bweight;
  var sex = request.body.sex;
  var description = request.body.description;

  let values = [litter_id, puppy_id, btime, name, bweight, sex, description];

  pool.connect((err, db, done) => {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "INSERT INTO puppies (litter_id, puppy_id, btime, name, bweight, sex, description) VALUES($1, $2, $3, $4, $5, $6, $7)",
        [...values],
        (err, table) => {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            console.log("DATA INSERTED");
            db.end();
            response.status(201).send({ message: "Pentu lisätty!" });
          }
        }
      );
    }
  });
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(PORT, () => console.log("Listening on port " + PORT));
