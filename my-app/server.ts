import express from "express";
import { database } from "./database";
import cors from "cors"
import { scoreRouter } from "./routes/scores";
import { userRouter } from "./routes/users";
const app = express();

app.use(cors());
app.use(express.json());

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.use("/users", userRouter);
app.use("/scores", scoreRouter);

app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
