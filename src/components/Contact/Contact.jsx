import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations"

const Contact = ({ data, contactId }) => {
    const dispatch = useDispatch();
    const { name, number } = data;
    return (
        <div className={s.item}>
            <div className={s.text}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => dispatch(deleteContact(contactId))}>Delete</button>
        </div>
    )
}

export default Contact