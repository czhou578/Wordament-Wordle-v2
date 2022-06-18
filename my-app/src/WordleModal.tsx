import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
          <div style={{ display: "flex", width: "200px" }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{ width: "100%", marginLeft: "40%" }}
            >
              Play Again
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              style={{ width: "100%", marginLeft: "50%" }}
            >
              User Dashboard
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ width: "20%", marginLeft: "40%", marginBottom: "10px" }}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}
