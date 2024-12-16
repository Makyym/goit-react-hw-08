import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.div}>
            <p className={s.text}>Welcome, {user.name}!</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default UserMenu;