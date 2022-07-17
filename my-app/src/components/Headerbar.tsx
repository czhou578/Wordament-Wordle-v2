/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToken, getCredentialsEntry } from "../api";
import styles from "./headerbar.module.css";

export const Headerbar: React.FC<{ userName?: string; wordle?: string }> = ({
  wordle,
}) => {
  const dispatch = useDispatch();
  const storeEntry = getCredentialsEntry();

  return (
    <div className={styles.header}>
      <Link to={"/"}>
        {wordle ? (
          <a href="#default" className={styles.logo}>
            Wordle
          </a>
        ) : (
          <a href="#default" className={styles.logo}>
            Wordament
          </a>
        )}
      </Link>
      {storeEntry ? (
        <div className="header-right">
          <Link to={"/wordle"}>
            <a className={styles.wordle}>Wordle</a>
          </Link>
          <Link to={"/signup"}>
            <a className={styles.signup}>Signup</a>
          </Link>
          <Link to={"/dashboard"}>
            <a className={styles.active}>Hi {storeEntry.Username}!</a>
          </Link>
          <Link to={"/"}>
            <a
              className={styles.logout}
              onClick={() => {
                dispatch(deleteToken(""));
                localStorage.removeItem("user");
              }}
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
