import { useDispatch } from "react-redux";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operationAuth";
import { useAuth } from "../hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
