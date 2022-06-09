"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../database");
dotenv_1.default.config();
const router = express_1.default.Router();
router.post("/loggedin", (req, res) => {
    const { loginRequestObj } = req.body;
    console.log(loginRequestObj);
    let sql = `SELECT * FROM User WHERE Username = '${loginRequestObj.userName}' AND LoginPassword = '${loginRequestObj.password}'`;
    database_1.database.query(sql, function (error, result) {
        if (error)
            throw error;
        const user = { name: loginRequestObj.userName };
        const accessToken = jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.send({ accessToken: accessToken });
    });
});
router.post("/new-user", (req, res) => {
    console.log(req.body);
    const { userName, password, firstName, lastName, id } = req.body;
    let sql = `INSERT INTO User(ID, Username, FirstName, LastName, LoginPassword) VALUES ('${id}', '${userName}', '${firstName}', '${lastName}', '${password}')`;
    database_1.database.query(sql, function (error, result) {
        if (error)
            throw error;
        const user = { name: userName };
        const accessToken = jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.send({ accessToken: accessToken });
    });
});
// function authenticateToken(req: Request, res: Response, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.send(403);
//     req.user = user;
//     next();
//   });
// }
exports.userRouter = router;
