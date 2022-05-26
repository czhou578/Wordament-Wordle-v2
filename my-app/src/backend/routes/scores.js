const express = require("express");
const database = require("../database");
const router = express.Router();

router.post("/new-score", (req, res) => {
  const { score } = req.body;

  let sql = `INSERT INTO SCORES (score) VALUES (${score})`;

  database.query(sql, function (error, result) {
    if (error) throw error;

    res.send("success");
  });
});
