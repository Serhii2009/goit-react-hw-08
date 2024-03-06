// import css from "./NavBar.module.css";
// import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>

        <div>
          {" "}
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      </nav>
    </>
  );
};
