import express, { Express, Request, Response } from 'express';

// const express = require("express");
const database = require("../database");
const router = express.Router();

router.post("/new-score", (req: Request, res: Response) => {
  const { payload } = req.body;
  console.log(payload);

  let sql = `INSERT INTO SCORES (Username, score) VALUES ('${payload.userName}', ${payload.score})`;

  database.query(sql, function (error: Error) {
    if (error) throw error;

    res.send("success");
  });
});

router.post("/highest-score", (req: Request, res: Response) => {
  const { userName } = req.body;
  console.log(req.body);

  let sql = `SELECT MAX(Score) FROM SCORES WHERE Username = '${userName}' `;

  database.query(sql, function (error: Error, result: number[]) {
    if (error) throw error;
    console.log(result);
    res.send(result[0]);
  });
});

router.post("/lowest-score", (req: Request, res: Response) => {
  const { userName } = req.body;
  console.log(req.body);

  let sql = `SELECT MIN(Score) FROM SCORES WHERE Username = '${userName}' `;

  database.query(sql, function (error: Error, result: number[]) {
    if (error) throw error;
    console.log(result);
    res.send(result[0]);
  });
});

router.post("/average-score", (req: Request, res: Response) => {
  const { userName } = req.body;
  console.log(req.body);

  let sql = `SELECT AVG(Score) FROM SCORES WHERE Username = '${userName}' `;

  database.query(sql, function (error: Error, result: number[]) {
    if (error) throw error;
    console.log(result);
    res.send(result[0]);
  });
});

module.exports = router;
