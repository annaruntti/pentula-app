const express = require("express");
const app = express();
const pg = require("pg");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 8000;

let pool = new pg.Pool({
  user: "anna.runtti",
  database: "pentudata",
  password: "pentuappi",
  host: "localhost",
  port: 5432,
  max: 10
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/omat-koirat", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("SELECT * FROM omat_koirat", function(err, table) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows);
        }
      });
    }
  });
});

app.post("/api/uusi-koira", function(request, response) {
  var virallinen_nimi = request.body.virallinen_nimi;
  var kutsumanimi = request.body.kutsumanimi;
  var syntymaaika = request.body.syntymaaika;
  var sukupuoli = request.body.sukupuoli;
  //   var id = Math.random().toFixed(2);
  var user_id = request.body.user_id;
  // var name = new Date().getUTCMilliseconds();
  let values = [virallinen_nimi, kutsumanimi, syntymaaika, sukupuoli, user_id];

  pool.connect((err, db, done) => {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "INSERT INTO omat_koirat (virallinen_nimi, kutsumanimi, syntymaaika, sukupuoli, user_id) VALUES($1, $2, $3, $4, $5)",
        [...values],
        (err, table) => {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            console.log("DATA INSERTED");
            db.end();
            response.status(201).send({ message: "Data inserted!" });
          }
        }
      );
    }
  });
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(PORT, () => console.log("Listening on port " + PORT));
