import { Headerbar } from "./Headerbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const Signup: React.FC = () => {
  return (
    <div>
      <Headerbar />
      <div style={{ backgroundColor: "tan", height: "92vh" }}>
        <div
          className="mb-3"
          style={{ marginTop: "100px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput" className="form-label">
            Create Username
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="New Username"
          />
        </div>
        <div
          className="mb-3"
          style={{ marginTop: "20px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Create Password
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="New Password"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary d-grid gap-2 col-4 mx-auto"
        >
          Signup
        </button>
      </div>
    </div>
  );
};
