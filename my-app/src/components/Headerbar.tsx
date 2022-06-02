import "./headerbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { deleteToken } from "../api";

export const Headerbar: React.FC<{ userName?: string }> = ({ userName }) => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to={"/"}>
        <a href="#default" className="logo">
          Wordament
        </a>
      </Link>
      {userName ? (
        <div className="header-right">
          <Link to={"/signup"}>
            <a href="#signup">Signup</a>
          </Link>
          <Link to={"/dashboard"}>
            <a className="active">Hi {userName}!</a>
          </Link>
          <Link to={"/"}>
            <a className="logout" onClick={() => dispatch(deleteToken(""))}>
              Logout
            </a>
          </Link>
        </div>
      ) : (
        <div className="header-right">
          <Link to={"/signup"}>
            <a className="active" href="#signup">
              Signup
            </a>
          </Link>
          <Link to={"/login"}>
            <a href="#login">Login</a>
          </Link>
        </div>
      )}
    </div>
  );
};
