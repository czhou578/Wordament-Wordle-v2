import { MutableRefObject, useEffect, useRef } from "react";
import "./clock.css";

interface Props {
  setTimesUp: (param: boolean) => void;
  timesUp: boolean;
}

export default function Clock(props: Props) {
  const timerElement = useRef() as MutableRefObject<HTMLInputElement>;

  const starting: number = 2;
  // let time: number = starting * 60; //seconds
  let time: number = starting * 3; //seconds

  useEffect(() => {
    if (!props.timesUp) {
      console.log("time: " + time);
      console.log("timesup: " + props.timesUp);
      setInterval(() => {
        console.log("continue");
        update();
      }, 1000);
    } else {
      return clearInterval();
    }
  }, [props.timesUp]);

  function update() {
    //update the clock
    console.log("clock");
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

    if (time < 0) {
      props.setTimesUp(true);
      return;
    }

    time--;
  }

  return (
    <div className="clockContainer">
      <div className="time-clock">
        <h1 className="clock-header">Game Time Remaining</h1>
        <h2 id="timer" ref={timerElement}>
          2:00{" "}
        </h2>
      </div>
    </div>
  );
}
