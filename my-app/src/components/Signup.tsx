import { Headerbar } from "./Headerbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupHandler = async () => {
    let newUser = {
      ID: uuid(),
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };

    const response = await fetch("http://localhost:3001/users/new-user", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify(newUser),
    });

    if (response.status !== 200) {
      console.log("error, please try again.");
    }
  };

  return (
    <div>
      <Headerbar />
      <div style={{ backgroundColor: "tan", height: "92vh" }}>
        <div
          className="mb-3"
          style={{ marginTop: "100px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div
          className="mb-3"
          style={{ marginTop: "20px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div
          className="mb-3"
          style={{ marginTop: "20px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput" className="form-label">
            Create Username
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="New Username"
            onChange={(e) => setUserName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary d-grid gap-2 col-4 mx-auto"
          onClick={() => signupHandler()}
        >
          Signup
        </button>
      </div>
    </div>
  );
};
