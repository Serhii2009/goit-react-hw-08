import { NavLink } from "react-router-dom";
// import css from "./Navigation.module.css";
import { useAuth } from "../../hooks/useAuth";
// import clsx from "clsx";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
