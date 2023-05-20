import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <span className={classes.logo}>PUSULA</span>
      </NavLink>
      <nav>
        <NavLink
          to="/aday-ekle"
          className={({ isActive }) =>
            `${classes.navLink} ${isActive && classes.active}`
          }
        >
          Aday Ekle
        </NavLink>
        <NavLink
          to="/iletisim"
          className={({ isActive }) =>
            `${classes.navLink} ${isActive && classes.active}`
          }
        >
          İletişim
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
