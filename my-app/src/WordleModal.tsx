import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "./api";
import { RootState } from "./redux/store";

interface Props {
  congrats?: boolean;
  sorry?: boolean;
  userDashboard?: boolean;
}

export default function WordleModal(props: Props) {
  const foundWordleWord = useSelector(
    (state: RootState) => state.info.wordle.correctGuess
  );
  const token = useSelector((state: RootState) => state.info.token.token);
  const [signedInModal, setSignedInModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userEntry = localStorage.getItem("user");
    if (userEntry) {
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
    }
  }, []);

  useEffect(() => {
    if (token) {
      setSignedInModal(true);
    }
  }, [token]);

  return (
    <div style={{ height: "92vh", backgroundColor: "black" }}>
      <div
        className="card text-center"
        style={{ width: "50%", marginTop: "200px", marginLeft: "25%" }}
      >
        <div className="card-header"></div>
        {props.congrats ? (
          <div className="card-body">
            <h5 className="card-title">You Win!</h5>
            <p className="card-text" style={{ marginTop: "20px" }}>
              The correct word was {foundWordleWord}{" "}
            </p>
          </div>
        ) : null}

        {signedInModal ? (
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link to="/wordle" style={{ marginLeft: "80px", width: "30%" }}>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={{ width: "100%" }}
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </Link>
            <Link
              to={"/dashboard"}
              style={{ marginLeft: "100px", width: "30%" }}
            >
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{
                  width: "100%",
                  marginRight: "60px",
                }}
              >
                User Dashboard
              </button>
            </Link>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ width: "20%", marginLeft: "40%", marginBottom: "10px" }}
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}
