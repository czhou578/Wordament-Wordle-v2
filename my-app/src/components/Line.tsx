import styles from "./line.module.css";

const WORD_LENGTH = 5;
interface Props {
  guess: string;
  isFinal: boolean;
  solution: string;
}

export default function Line(props: Props) {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const element = props.guess[i];
    let classNames = "tile";
    if (props.isFinal) {
      if (element === props.solution[i]) {
        classNames += " correct";
      } else if (props.solution.includes(element)) {
        classNames += " close";
      } else {
        classNames += " incorrect";
      }
    }
    tiles.push(
      <div className={classNames} key={i}>
        {element}
      </div>
    );
  }

  return <div className={styles.lines}>{tiles}</div>;
}
