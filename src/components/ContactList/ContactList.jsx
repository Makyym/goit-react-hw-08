import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul className={s.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id}>
                        <Contact data={contact}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList