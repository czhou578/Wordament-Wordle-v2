import styles from "./board.module.css";

export default function Board() {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>B</div>
        <div className={styles.wordsquare}>V</div>
        <div className={styles.wordsquare}>D</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>K</div>
        <div className={styles.wordsquare}>L</div>
        <div className={styles.wordsquare}>P</div>
        <div className={styles.wordsquare}>O</div>
        <div className={styles.wordsquare}>W</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>R</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>N</div>
      </div>
    </div>
  );
}
