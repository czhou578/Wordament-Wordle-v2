import { Headerbar } from "./Headerbar"

export const Signup: React.FC = () => {
  return (
    <div>
      <Headerbar />
      <div className="mb-3">
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
      <div className="mb-3">
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
    </div>
  );
};
