const express = require("express");
const database = require("../database");
const router = express.Router();

router.post("/new-user", (req, res) => {
  console.log(req.body);
  const { userName, password, firstName, lastName, id } = req.body;

  let sql = `INSERT INTO User(ID, Username, FirstName, LastName, LoginPassword) VALUES ('${id}', '${userName}', '${firstName}', '${lastName}', '${password}')`;

  database.query(sql, function (error, result) {
    if (error) throw error;

    res.send("success");
  });
});

module.exports = router;
