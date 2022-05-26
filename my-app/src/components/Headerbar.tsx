import "./headerbar.css";
import { Link } from "react-router-dom";

export const Headerbar: React.FC = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Wordament
      </a>
      <div className="header-right">
        <Link to={"/signup"}>
          <a className="active" href="#signup">
            Signup
          </a>
        </Link>
        <a href="#login">Login</a>
      </div>
    </div>
  );
};
