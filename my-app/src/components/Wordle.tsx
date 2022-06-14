import { useEffect, useState } from "react";
import { Headerbar } from "./Headerbar";
import styles from "./wordle.module.css";

export default function Wordle() {
  const [solution, setSolution] = useState("");
  const [guess, setGuesses] = useState(Array(6).fill(null));

  useEffect(() => {
    const fetchWord = async () => {
      const result = await fetch("http://localhost:3001/wordle/loadWord");
      const response = await result.json();
      console.log(response);
      setSolution(response.word);
    };

    fetchWord();
  }, []);

  return (
    <div className={styles.container}>
      <Headerbar />
      <div className={styles.boardContainer}>{solution}</div>
    </div>
  );
}
