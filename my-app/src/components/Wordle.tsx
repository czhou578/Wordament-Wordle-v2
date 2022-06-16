import { useEffect, useState } from "react";
import { Headerbar } from "./Headerbar";
import Line from "./Line";
import styles from "./wordle.module.css";

export default function Wordle() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const fetchWord = async () => {
      const result = await fetch("http://localhost:3001/wordle/loadWord");
      const response = await result.json();
      console.log(response);
      setSolution(response.word);
    };

    fetchWord();
  }, []);

  useEffect(() => {
    const handleType = (event: any) => {
      if (event.key === "Enter") {
        if (currentGuess.length !== 5) return;

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
      }

      if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5) {
        return;
      }

      const keyLetter = event.key.match(/^[A-Za-z]+$/) != null;
      if (keyLetter) {
        setCurrentGuess((oldGuess) => oldGuess + event.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, solution, isGameOver]);

  return (
    <div className={styles.container}>
      <Headerbar wordle={"Wordle"} />
      <div className={styles.wrapper}>
        <div className={styles.boardContainer}>
          {guesses.map((guess, i) => {
            const isCurrentGuess =
              i === guesses.findIndex((val: any) => val == null);
            return (
              <Line
                guess={isCurrentGuess ? currentGuess : guess ?? ""}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
