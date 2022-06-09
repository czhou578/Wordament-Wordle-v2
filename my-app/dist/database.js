"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.database = mysql_1.default.createConnection({
    host: "localhost",
    user: "colizu",
    password: "issaquah",
    database: "wordament",
    multipleStatements: true,
});
