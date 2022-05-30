require("dotenv").config();
const express = require("express");
const database = require("../database");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/new-user", (req, res) => {
  console.log(req.body);
  const { userName, password, firstName, lastName, id } = req.body;

  let sql = `INSERT INTO User(ID, Username, FirstName, LastName, LoginPassword) VALUES ('${id}', '${userName}', '${firstName}', '${lastName}', '${password}')`;
  database.query(sql, function (error, result) {
    if (error) throw error;
    const user = { name: userName };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.send({ accessToken: accessToken });
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.send(403);
    req.user = user;
    next();
  });
}

module.exports = router;
