const express = require("express");
const database = require("../database");
const bodyParser = require("body-parser");
const router = express.Router();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/new-user", (req, res) => {
  console.log(req.body);
  const { userName, password, firstName, lastName, ID } = req.body;

  let sql = `INSERT INTO User(ID, Username, FirstName, LastName, LoginPassword) VALUES (${ID}, ${userName}, ${firstName}, ${lastName}, ${password})`;

  database.query(sql, function (error, result) {
    if (error) throw error;

    res.send("success");
  });
});

module.exports = router;
