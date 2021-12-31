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
          <pre className={styles.text}>
            This is Wordament. Click to insert a local text file of your choice.
            Wait for the timer to start. Click and drag across the board to select
            words. Each letter that you select in either direction will accumulate
            for points, which will be shown up in the scoreboard. There is a timer
            that counts down the time, so make sure you look quickly and try to
            find as many words as possible! When the timer runs out, refresh the
            page for a new game! You will find a list of 10k words. Download into
            a text file, then upload.
          </pre>
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
