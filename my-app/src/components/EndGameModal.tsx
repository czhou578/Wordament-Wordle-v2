import styles from './endmodal.module.css'

export default function EndGameModal() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>End of Round!</h2>
      </div>
      <div className={styles.preTextContainer}>
        <pre className={styles.preText}>
          Your final score is: . 
          Want to play again? Please click the Play Again button below.
        </pre>
      </div>
      <div className={styles.image}>
        <img src="https://img.freepik.com/free-vector/golden-ribbon-design_1102-2552.jpg?size=626&ext=jpg" alt="not available" className={styles.imag}/>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.button}>Play Again</button>
      </div>
    </div>
  )
}