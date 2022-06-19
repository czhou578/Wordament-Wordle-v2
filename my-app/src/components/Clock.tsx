import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./clock.module.css";

interface Props {
  setTimesUp: (param: boolean) => void;
  timesUp: boolean;
}

export default function Clock(props: Props) {
  const timerElement = useRef() as MutableRefObject<HTMLInputElement>;

  const starting: number = 2;
  let time: number = starting * 60; //seconds
  // let time: number = starting * 3; //seconds

  useEffect(() => {
    setInterval(() => {
      if (time === -1) {
        props.setTimesUp(true);
        return () => clearInterval();
      }
      update();
    }, 1000);
  }, [time]);

  function update() {
    //update the clock
    const minutes: number = Math.floor(time / 60);
    let seconds: string | number = time % 60;

    if (seconds === 0) {
      timerElement!.current.innerHTML = `${minutes}:${0}${0}`;
    } else if (seconds < 10 && seconds > 0) {
      timerElement!.current.innerHTML = `${minutes}:${0}${seconds}`;
    } else if (seconds >= 10 && seconds > 0) {
      timerElement!.current.innerHTML = `${minutes}:${seconds}`;
      seconds = seconds < 10 ? "10" + seconds : seconds;
    }

    time--;
  }

  return (
    <div className={styles.clockContainer}>
      <div className={styles["time-clock"]}>
        <h1 className={styles["clock-header"]}>Game Time Remaining</h1>
        <h2 className={styles.timer} ref={timerElement}>
          2:00{" "}
        </h2>
      </div>
    </div>
  );
}
