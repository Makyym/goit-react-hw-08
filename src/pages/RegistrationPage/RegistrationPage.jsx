import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css"

const RegistrationPage = () => {
    return (
        <div className={s.div}>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage