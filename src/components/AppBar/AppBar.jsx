import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import Navigation from "../Navigation/Navigation"
import AuthNav from '../AuthNav/AuthNav';
import s from "./AppBar.module.css"

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={s.wrapper}>
            <h2 className={s.title}><div className={s.image}></div>Phone<span className={s.colorText}>book</span></h2>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav/>}
        </header>
    )
}

export default AppBar