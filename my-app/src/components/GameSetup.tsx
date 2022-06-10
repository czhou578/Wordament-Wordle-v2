import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameScore } from "../api";
import Board from "../components/Board";
import Clock from "../components/Clock";
import EndGameModal from "../components/EndGameModal";
import { Headerbar } from "../components/Headerbar";
import ScoreBoard from "../components/ScoreBoard";
import { StartingModal } from "../components/StartingModal";
import { RootState } from "../redux/store";
import styles from "./setup.module.css";

export const GameSetup: React.FC = () => {
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [timesUp, setTimesUp] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userName, setUserName] = useState<string>("");
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.info.token.token);

  function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    if (token) {
      setUserName(parseJwt(token).name);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      let userName;

      if (token) {
        userName = parseJwt(token);
      } else {
        return;
      }
      console.log(userName);
      let payload = {
        score: score,
        userName: userName.name,
      };

      dispatch(setGameScore(score));
      axios({
        method: "post",
        url: "http://localhost:3001/scores/new-score",
        data: {
          payload,
        },
      }).then(() => {
        console.log("success");
      });
    } else {
      isMounted.current = true;
    }
  }, [timesUp]);

  return (
    <div className={styles.appContainer}>
      {userName !== "" ? <Headerbar userName={userName} /> : <Headerbar />}
      <div>
        {!showBoard ? (
          <>
            <StartingModal
              showBoard={showBoard}
              showBoardHandler={setShowBoard}
            />
          </>
        ) : timesUp ? (
          <>
            <EndGameModal score={score} setTimesUp={setTimesUp} />
          </>
        ) : (
          <div style={{ marginTop: "20px" }}>
            <Clock setTimesUp={setTimesUp} timesUp={timesUp} />
            <Board
              setScore={setScore}
              timesUp={timesUp}
              setTimesUp={setTimesUp}
            />
            <ScoreBoard score={score} />
          </div>
        )}
      </div>
    </div>
  );
};
