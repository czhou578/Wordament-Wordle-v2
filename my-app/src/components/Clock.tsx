import { MutableRefObject, useEffect, useRef } from "react";
import './clock.css'

interface Props {
  setTimesUp: (param: boolean) => void
  timesUp: boolean
}

export default function Clock(props:Props) {
  const timerElement = useRef() as MutableRefObject<HTMLInputElement>
  const starting = 2;
  let time = starting * 60; //seconds

  useEffect(() => {
    setInterval(() => {
      update()
    }, 1000)
  }, [])
  
  function update() { //update the clock
    const minutes = Math.floor(time / 60);
    let seconds: string|number = time % 60;

    if (seconds == 0) {
      timerElement.current.innerHTML = `${minutes}:${0}${0}`;
      
    } else if (seconds < 10 && seconds > 0) {
      timerElement.current.innerHTML = `${minutes}:${0}${seconds}`;

    } else {
      timerElement.current.innerHTML = `${minutes}:${seconds}`;
      seconds = seconds < 10 ? "10" + seconds : seconds;
    }

    if (minutes < 0) {
      timerElement.current.innerHTML = "Time's Up!";
      props.setTimesUp(true)
    }

    time--;
  }

  return (
    <div>
      <div className="time-clock">
        <h1 className="clock-header">Game Time Remaining</h1>
        <h2 id="timer" ref={timerElement}>2:00</h2>
      </div>
    </div>
  )
}