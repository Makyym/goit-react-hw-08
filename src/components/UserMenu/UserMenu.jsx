import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { FaUserAstronaut } from "react-icons/fa";
import s from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.div}>
            <div className={s.wrapper}>
                <FaUserAstronaut />
                <p className={s.text}>{user.name}</p>
            </div>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default UserMenu;