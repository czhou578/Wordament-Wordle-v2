const express = require("express");
const db = require("./database");
const userRouter = require("./routes/users");
const scoreRouter = require("./routes/scores");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.use("/users", userRouter);
app.use("/scores", scoreRouter);

app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
