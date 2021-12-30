import { useRef } from "react";

export default function Clock() {
  const timerElement = useRef(null)
  let timerElementString;
  const starting = 2;
  let time = starting * 60; //seconds

  function update() { //update the clock
    const minutes = Math.floor(time / 60);
    let seconds: string|number = time % 60;
    if (seconds == 0) {
      timerElementString = `${minutes}:${0}${0}`;
    } else if (seconds < 10 && seconds > 0) {
      timerElementString = `${minutes}:${0}${seconds}`;
    } 
    else {
      timerElementString = `${minutes}:${seconds}`;
      seconds = seconds < 10 ? "10" + seconds : seconds;
    }

    if (minutes < 0) {
      timerElementString = "Time's Up!";
      // timerElement.style.position = "relative"
    }
    time--;
  }

  update()


  return (
    <div>
      <div className="time-clock">
        <h1 className="header">Game Time Remaining</h1>
        <h2 id="timer" dangerouslySetInnerHTML={{__html: timerElement}} ref={timerElement}>2:00</h2>
      </div>
    </div>
  )
}