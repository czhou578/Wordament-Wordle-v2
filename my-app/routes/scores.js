const express = require("express");
const database = require("../database");
const router = express.Router();

router.post("/new-score", (req, res) => {
  const { payload } = req.body;
  console.log(payload);

  let sql = `INSERT INTO SCORES (Username, score) VALUES ('${payload.userName}', ${payload.score})`;

  database.query(sql, function (error, result) {
    if (error) throw error;

    res.send("success");
  });
});

// router.get("/highest-score", (req, res) => {
//   const { id } = req.body;

//   let sql = `GET FROM SCORES (Username, score) WHERE `
// })

module.exports = router;
