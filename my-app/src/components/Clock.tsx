import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./clock.css";

interface Props {
  setTimesUp: (param: boolean) => void;
}

export default function Clock(props: Props) {
  const timerElement = useRef() as MutableRefObject<HTMLInputElement>;

  const starting = 2;
  let time = starting * 60; //seconds

  useEffect(() => {
    if (time >= 0) {
      setInterval(() => {
        update();
      }, 1000);
    } else {
      return clearInterval();
    }
  }, [time]);

  function update() {
    //update the clock
    const minutes = Math.floor(time / 60);
    let seconds: string | number = time % 60;

    if (seconds == 0) {
      timerElement.current.innerHTML = `${minutes}:${0}${0}`;
    } else if (seconds < 10 && seconds > 0) {
      timerElement.current.innerHTML = `${minutes}:${0}${seconds}`;
    } else if (seconds >= 10 && seconds > 0) {
      timerElement.current.innerHTML = `${minutes}:${seconds}`;
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
