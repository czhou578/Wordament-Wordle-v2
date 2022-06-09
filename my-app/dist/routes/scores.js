"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreRouter = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const router = express_1.default.Router();
router.post("/new-score", (req, res) => {
    const { payload } = req.body;
    console.log(payload);
    let sql = `INSERT INTO SCORES (Username, score) VALUES ('${payload.userName}', ${payload.score})`;
    database_1.database.query(sql, function (error) {
        if (error)
            throw error;
        res.send("success");
    });
});
router.post("/highest-score", (req, res) => {
    const { userName } = req.body;
    console.log(req.body);
    let sql = `SELECT MAX(Score) FROM SCORES WHERE Username = '${userName}' `;
    database_1.database.query(sql, function (error, result) {
        if (error)
            throw error;
        console.log(result);
        res.send(result[0]);
    });
});
router.post("/lowest-score", (req, res) => {
    const { userName } = req.body;
    console.log(req.body);
    let sql = `SELECT MIN(Score) FROM SCORES WHERE Username = '${userName}' `;
    database_1.database.query(sql, function (error, result) {
        if (error)
            throw error;
        console.log(result);
        res.send(result[0]);
    });
});
router.post("/average-score", (req, res) => {
    const { userName } = req.body;
    console.log(req.body);
    let sql = `SELECT AVG(Score) FROM SCORES WHERE Username = '${userName}' `;
    database_1.database.query(sql, function (error, result) {
        if (error)
            throw error;
        console.log(result);
        res.send(result[0]);
    });
});
exports.scoreRouter = router;
