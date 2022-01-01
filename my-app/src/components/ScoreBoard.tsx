import styles from './scoreboard.module.css'


interface Props {
  score: number
}

export default function ScoreBoard(props: Props) {
  return (
    <div>
      <div>
        <h3 className={styles.headers}>Score</h3>
        <h3 className={styles.headers}>{props.score}</h3>
      </div>
    </div>
  )
}