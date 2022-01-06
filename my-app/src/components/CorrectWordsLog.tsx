import { useEffect, useState } from "react";
import styles from "./correctwordslog.module.css";

interface Props {
  correctWordsList: string[];
}

export default function CorrectWordsLog(props: Props) {
  const [wordsList, setWordsList] = useState<string[]>([]);

  useEffect(() => {
    sortAscendingWords(props.correctWordsList);
  }, []);

  function sortAscendingWords(array: string[]) {
    console.log("wordsList: " + wordsList);
    setWordsList((wordsList) => [
      ...wordsList,
      props.correctWordsList[props.correctWordsList.length - 1],
    ]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.scrollableDiv}>
        <h2>Found Words</h2>
        {wordsList}
      </div>
    </div>
  );
}
