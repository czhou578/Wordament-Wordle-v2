import "bootstrap/dist/css/bootstrap.css";

interface Props {
  congrats?: boolean;
  sorry?: boolean;
  userDashboard?: boolean;
}

export default function WordleModal(props: Props) {
  return (
    <div style={{ height: "92vh", backgroundColor: "black" }}>
      <div
        className="card text-center"
        style={{ width: "50%", marginTop: "200px", marginLeft: "25%" }}
      >
        <div className="card-header">
          {/* Dashboard For <b>{userName}</b> */}
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
                {/* Your highest score was <b>{highestScore}</b> */}
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
                {/* Your lowest score was <b>{lowestScore}</b> */}
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
              <p className="card-text" style={{ marginLeft: "-20px" }}></p>
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
            <p className="card-text">{/* <b>{foundWordleWord}</b> */}</p>
          </div>
        </div>
        <div className="card-footer text-muted">Last played: 2 days ago</div>
      </div>
    </div>
  );
}
