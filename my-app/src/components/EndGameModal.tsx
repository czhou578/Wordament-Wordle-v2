import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import styles from "./endmodal.module.css";

interface Props {
  setTimesUp: (param: boolean) => void;
  score: number;
}

export default function EndGameModal(props: Props) {
  const token = useSelector((state: RootState) => state.info.token.token);
  const wordsList = useSelector(
    (state: RootState) => state.info.words.foundWords
  );
  console.log(wordsList);
  const [signedInModal, setSignedInModal] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setSignedInModal(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>End of Round!</h2>
      </div>
      <div className={styles.preTextContainer}>
        {!signedInModal ? (
          <pre className={styles.preText}>
            Your final score is: {props.score}. If you want your scores to be
            saved, register for an account!
          </pre>
        ) : (
          <pre className={styles.preText}>
            Your final score is: {props.score}. Want to play again?
          </pre>
        )}
      </div>
      <div className={styles.imgandWords}>
        <div className={styles.image}>
          <img
            src="https://img.freepik.com/free-vector/golden-ribbon-design_1102-2552.jpg?size=626&ext=jpg"
            alt="not available"
            className={styles.imag}
          />
        </div>
        <div className={styles.wordsList}>
          <h3 style={{ marginLeft: "75px" }}>Words You Found</h3>
          <div className={styles.wordContainer}>
            {wordsList?.map((element) => {
              return <p className={styles.words}>{element}</p>;
            })}
          </div>
        </div>
      </div>
      {!signedInModal ? (
        <div className={styles.btnContainer}>
          <button
            className={styles.button}
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className={styles.btnContainer}>
          <Link to={"/dashboard"}>
            <button className={styles.button}>Vendor Dashboard</button>
          </Link>
          <button
            className={styles.button}
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
