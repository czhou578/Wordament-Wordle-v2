import express, { Request, Response } from "express";
import { words } from '../src/components/wordleWords.json';

const router = express.Router()

router.get("/loadWord", (req: Request, res: Response) => {
  const randomWord = words[Math.floor(Math.random() * words.length)]
  res.send({word: randomWord})
})


export const wordleRouter = router