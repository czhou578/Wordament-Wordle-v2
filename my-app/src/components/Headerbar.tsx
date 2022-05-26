import "./headerbar.css";
import { Link } from "react-router-dom";

export const Headerbar: React.FC = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <a href="#default" className="logo">
          Wordament
        </a>
      </Link>
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
    </div>
  );
};
