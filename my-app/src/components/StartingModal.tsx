import styles from "./startingModal.module.css";

interface Props {
  showBoard: boolean;
  showBoardHandler: (active: boolean) => void;
}

export const StartingModal = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Welcome to Wordament!</h2>
        </div>
        <div className={styles.descrip_contain}>
          <ul className={styles.ul}>
            <li>Click and drag across the board to select words</li>
            <li>
              Each word selected will count for points, shown in the scoreboard.
            </li>
            <li>Find as many words as you can before the time expires!</li>
          </ul>
        </div>
        <div className={styles.button_contain}>
          <button
            className={styles.button}
            onClick={() => props.showBoardHandler(true)}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};
