import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectGuess } from "../api";
import { RootState } from "../redux/store";
import WordleModal from "../WordleModal";
import { Headerbar } from "./Headerbar";
import Line from "./Line";
import styles from "./wordle.module.css";

export default function Wordle() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [foundWord, setFoundWord] = useState<boolean | null>(null);
  const token = useSelector((state: RootState) => state.info.token.token);
  const dispatch = useDispatch();

  function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    if (token) {
      setUserName(parseJwt(token).name);
    }
  }, []);

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

        // if (guesses.findIndex((val) => val === null) === -1) {
        //   setfou
        // }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          console.log("correct guess");
          dispatch(setCorrectGuess(currentGuess));
          setFoundWord(true);
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

      const keyLetter = event.key.match(/^[A-Za-z]{1}$/) != null;
      if (keyLetter) {
        setCurrentGuess((oldGuess) => oldGuess + event.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, solution, isGameOver, guesses, dispatch]);

  return (
    <div className={styles.container}>
      {userName !== "" ? (
        <Headerbar userName={userName} wordle={"Wordle"} />
      ) : (
        <Headerbar wordle={"Wordle"} />
      )}

      {foundWord && isGameOver ? (
        <WordleModal congrats />
      ) : (
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
      )}
    </div>
  );
}
