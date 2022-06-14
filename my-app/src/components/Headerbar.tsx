/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToken } from "../api";
import styles from "./headerbar.module.css";

export const Headerbar: React.FC<{ userName?: string }> = ({ userName }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <a href="#default" className={styles.logo}>
          Wordament
        </a>
      </Link>
      {userName ? (
        <div className="header-right">
          <Link to={"/wordle"}>
            <a className={styles.wordle}>Wordle</a>
          </Link>
          <Link to={"/signup"}>
            <a className={styles.signup}>Signup</a>
          </Link>
          <Link to={"/dashboard"}>
            <a className={styles.active}>Hi {userName}!</a>
          </Link>
          <Link to={"/"}>
            <a
              className={styles.logout}
              onClick={() => dispatch(deleteToken(""))}
            >
              Logout
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles["header-right"]}>
          <Link to="/wordle">
            <a className={styles.wordle}>Wordle</a>
          </Link>
          <Link to={"/signup"}>
            <a className={styles.active} href="#signup">
              Signup
            </a>
          </Link>
          <Link to={"/login"}>
            <a href="#login" className={styles.signup}>
              Login
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
