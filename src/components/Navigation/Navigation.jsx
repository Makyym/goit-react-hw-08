import clsx from "clsx"
import s from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <nav className={s.nav}>
                <NavLink className={buildLinkClass} to='/'>
                    Home
                </NavLink>
                {isLoggedIn && <NavLink className={buildLinkClass} to='contacts'>
                    Contacts
            </NavLink>}
        </nav>
    );
};

export default Navigation