import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";
// import clsx from "clsx";

export const AuthNav = () => {
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
