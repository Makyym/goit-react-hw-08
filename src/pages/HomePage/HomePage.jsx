import s from "./Home.module.css"

const HomePage = () => {
    return (
        <div>
            <div className={s.div}>
                <h2 className={s.title}><div className={s.ellipse}></div>Welcome to ContactBook! Easily manage your contacts in a simple and convenient way. Register or log in to your account to get started.</h2>
                <ul className={s.list}>
                    <li>
                        <h3>Easy registration</h3>
                        <p>Create an account in seconds.</p>
                    </li>
                    <li>
                        <h3>Quick login</h3>
                        <p>Sign in and access your contact book.</p>
                    </li>
                    <li>
                        <h3>Manage your contacts</h3>
                        <p>Add, edit and delete contacts easily.</p>
                    </li>
                </ul>
                <h2 className={s.title}><div className={s.ellipse2}></div>Start managing your contacts today!</h2>
            </div>
        </div>
    );
};

export default HomePage