import { NavLink } from "react-router-dom";

export const NavBar = () => {
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
