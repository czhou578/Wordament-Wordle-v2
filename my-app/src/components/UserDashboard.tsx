import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../api";
import { RootState } from "../redux/store"; //import to get rid of ts error in useselector
import { Headerbar } from "./Headerbar";

export const UserDashboard: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [highestScore, setHighestScore] = useState<number | null>(null);
  const [lowestScore, setLowestScore] = useState<number | null>(null);
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.info.token.token);
  const foundWordleWord = useSelector(
    (state: RootState) => state.info.wordle.correctGuess
  );

  useEffect(() => {
    const userEntry = localStorage.getItem("user")!;
    const loggedInLocalStorageObj = JSON.parse(userEntry);
    const loginRequestObj = {
      userName: loggedInLocalStorageObj.Username,
      password: loggedInLocalStorageObj.Password,
    };

    if (loginRequestObj.password && loginRequestObj.userName) {
      axios({
        method: "post",
        url: "http://localhost:3001/users/loggedin",
        data: {
          loginRequestObj,
        },
      }).then(function (data) {
        dispatch(setToken(data.data.accessToken));
      });
    }
  }, []);

  useEffect(() => {
    if (token) {
      setUserName(parseJwt(token).name);

      const highScoreRequest = axios({
        method: "post",
        url: "http://localhost:3001/scores/highest-score",
        data: { userName: parseJwt(token).name },
      });

      const lowestScoreRequest = axios({
        method: "post",
        url: "http://localhost:3001/scores/lowest-score",
        data: { userName: parseJwt(token).name },
      });

      const avgScoreRequest = axios({
        method: "post",
        url: "http://localhost:3001/scores/average-score",
        data: { userName: parseJwt(token).name },
      });

      Promise.all([highScoreRequest, lowestScoreRequest, avgScoreRequest]).then(
        (data) => {
          let highScore = JSON.parse(JSON.stringify(data[0].data))[
            "MAX(Score)"
          ];
          let lowScore = JSON.parse(JSON.stringify(data[1].data))["MIN(Score)"];
          let avgScore = JSON.parse(JSON.stringify(data[2].data))["AVG(Score)"];

          setHighestScore(highScore);
          setLowestScore(lowScore);
          setAverageScore(avgScore);
        }
      );
    }
  }, [token]);

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

  return (
    <div>
      <Headerbar userName={userName} />
      <div style={{ height: "92vh", backgroundColor: "black" }}>
        <div
          className="card text-center"
          style={{ width: "50%", marginTop: "200px", marginLeft: "25%" }}
        >
          <div className="card-header">
            Dashboard For <b>{userName}</b>
          </div>
          <div className="card-body">
            <h5 className="card-title">Game Performance Trends</h5>
            <p className="card-text">
              Here are the highlights of your playing history.
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <div
              className="card"
              style={{
                width: "18rem",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Highest Score</h5>
                <p className="card-text">
                  Your highest score was <b>{highestScore}</b>
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Lowest Score</h5>
                <p className="card-text">
                  Your lowest score was <b>{lowestScore}</b>
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Average Score</h5>
                <p className="card-text" style={{ marginLeft: "-20px" }}>
                  Your average score was <b>{averageScore}</b>
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Here are your Wordle Highlights.</p>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              marginLeft: "300px",
              marginBottom: "10px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Recent Correct Guess</h5>
              <p className="card-text">
                <b>{foundWordleWord}</b>
              </p>
            </div>
          </div>
          <div className="card-footer text-muted">Last played: 2 days ago</div>
        </div>
      </div>
    </div>
  );
};
