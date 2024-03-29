import cors from "cors";
import express from "express";
import { database } from "./database";
import { scoreRouter } from "./routes/scores";
import { userRouter } from "./routes/users";
import { wordleRouter } from "./routes/wordle";
const app = express();

app.use(cors({
  methods: ['GET', 'POST']
}));
app.use(express.json());

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.use("/users", userRouter);
app.use("/scores", scoreRouter);
app.use("/wordle", wordleRouter);

app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
