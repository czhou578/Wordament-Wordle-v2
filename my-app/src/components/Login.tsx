import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentialsAndName, setToken } from "../api";
import { Headerbar } from "./Headerbar";

export const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    let loginRequestObj = {
      userName: userName,
      password: password,
    };

    axios({
      // method: "put",
      method: "post",
      url: "http://localhost:3001/users/loggedin",
      data: {
        loginRequestObj,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (data) {
      dispatch(setToken(data.data.accessToken));
      setCredentialsAndName({ Username: userName, Password: password });
      navigate("/dashboard");
      console.log("success");
    });
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
            Enter Username
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div
          className="mb-3"
          style={{ marginTop: "20px", width: "30%", marginLeft: "35%" }}
        >
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Enter Password
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary d-grid gap-2 col-4 mx-auto"
          onClick={() => loginHandler()}
        >
          Login
        </button>
      </div>
    </div>
  );
};
