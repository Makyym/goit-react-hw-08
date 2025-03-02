import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css"

const ContactsPage = () => {
    return (
        <div className={s.div}>
            <ContactForm />
            <div className={s.wrapper}>
                <SearchBox />
                <ContactList />
            </div>
        </div>
    );
};

export default ContactsPage;