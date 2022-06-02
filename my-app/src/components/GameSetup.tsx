import { useEffect, useRef, useState } from "react";
import { StartingModal } from "../components/StartingModal";
import Board from "../components/Board";
import Clock from "../components/Clock";
import styles from "../app.module.css";
import ScoreBoard from "../components/ScoreBoard";
import EndGameModal from "../components/EndGameModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Headerbar } from "../components/Headerbar";
import { useDispatch, useSelector } from "react-redux";
import { setGameScore } from "../api";
import axios from "axios";
import { RootState } from "../redux/store";

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
      setUserName(parseJwt(token));
    }
  }, []);

  useEffect(() => {
    console.log("asdfasdfafd");
    if (isMounted.current) {
      let userName;

      if (token) {
        userName = parseJwt(token);
      }
      console.log(userName);
      let payload = {
        score: score,
        userName: userName,
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
      {showBoard && userName !== "" ? (
        <Headerbar userName={userName} />
      ) : (
        <Headerbar />
      )}
      <div>
        {!showBoard ? (
          <>
            <StartingModal
              showBoard={showBoard}
              showBoardHandler={setShowBoard}
            />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        ) : timesUp ? (
          <>
            <EndGameModal score={score} setTimesUp={setTimesUp} />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        ) : (
          <div style={{ marginTop: "20px" }}>
            <Clock setTimesUp={setTimesUp} timesUp={timesUp} />
            <Board setScore={setScore} />
            <ScoreBoard score={score} />
          </div>
        )}
      </div>
    </div>
  );
};
