"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const scores_1 = require("./routes/scores");
const users_1 = require("./routes/users");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
database_1.database.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected");
});
app.use("/users", users_1.userRouter);
app.use("/scores", scores_1.scoreRouter);
app.listen(3001, () => {
    console.log("Server listening on Port 3001");
});
