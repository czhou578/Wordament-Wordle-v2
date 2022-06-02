import styles from "./endmodal.module.css";

interface Props {
  setTimesUp: (param: boolean) => void;
  score: number;
}

export default function EndGameModal(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>End of Round!</h2>
      </div>
      <div className={styles.preTextContainer}>
        <pre className={styles.preText}>
          Your final score is: {props.score}. If you want your scores to be
          saved, register for an account!
        </pre>
      </div>
      <div className={styles.image}>
        <img
          src="https://img.freepik.com/free-vector/golden-ribbon-design_1102-2552.jpg?size=626&ext=jpg"
          alt="not available"
          className={styles.imag}
        />
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
