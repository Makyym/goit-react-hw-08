import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css"

const ContactsPage = () => {
    return (
        <div className={s.div}>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};

export default ContactsPage;