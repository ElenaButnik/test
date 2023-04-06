import { ReactComponent as HeaderIcon } from "../../images/header.svg";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.Container}>
        <HeaderIcon className={s.Icon} style={{ width: 38, height: 26 }} />
        <h2 className={s.Title}>testtask</h2>
        <ul className={s.List}>
          <li className={s.Link}>
            <a href="#users" className={s.About}>
              Users
            </a>
          </li>
          <li className={s.Link}>
            <a href="#signUp" className={s.About}>
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
