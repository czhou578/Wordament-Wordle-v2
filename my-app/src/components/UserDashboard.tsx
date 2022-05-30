import React, { useEffect, useState } from "react";
import { Headerbar } from "./Headerbar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; //import to get rid of ts error in useselector

export const UserDashboard: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const token = useSelector((state: RootState) => state.token.token);

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
      console.log(parseJwt(token));
      setUserName(parseJwt(token).name);
    }
  }, []);

  return (
    <div>
      <Headerbar userName={userName} />
      <div style={{ height: "92vh", backgroundColor: "black" }}>
        <div
          className="card text-center"
          style={{ width: "50%", marginTop: "200px", marginLeft: "25%" }}
        >
          <div className="card-header">Dashboard</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">Last played: 2 days ago</div>
        </div>
      </div>
    </div>
  );
};
