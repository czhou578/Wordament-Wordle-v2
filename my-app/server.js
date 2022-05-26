const express = require("express");
const db = require("./src/backend/database");

const app = express();
app.use(express.json());

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.listen(3001);
