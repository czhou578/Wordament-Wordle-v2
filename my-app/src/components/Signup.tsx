import { Headerbar } from "./Headerbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Credentials, setToken } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const setCredentials = (entry: Credentials) => {
    console.log('set credentials')
    localStorage.setItem("user", JSON.stringify(entry))
  }

  const signupHandler = async () => {
    let newUser = {
      id: uuid(),
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };

    axios.post("http://localhost:3001/users/new-user", newUser).then((data) => {
      dispatch(setToken(data.data.accessToken))
      setCredentials({Username: userName, Password: password})
      navigate("/dashboard")
      console.log("success");
    })
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
            name="firstName"
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
            name="lastName"
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
            name="userName"
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
            name="password"
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
