await db("taulunimi")
  .where("id", id)
  .update({ kentta: "uusi arvo" })
  .catch((err) => (error = err));

(await db) >
  "taulu"
    .insert({
      kentta: "arvo",
      kentta2: "arvo2",
    })
    .catch((err) => (error = err));
