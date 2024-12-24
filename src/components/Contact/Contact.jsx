import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations"
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import EditContactForm from "../EditContactForm/EditContactForm";

const Contact = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
    const openSecondModal = () => {
        setSecondModalIsOpen(true);
    };
    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    };
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const dispatch = useDispatch();
    const { name, number, contactId} = data;
    return (
        <div className={s.item}>
            <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <EditContactForm data={data} close={closeModal}/>
            </ImageModal>
            <ImageModal isOpen={secondModalIsOpen} onRequestClose={closeSecondModal}>
                <div className={s.modal}>
                    <p className={s.p}>Confirm deletion of a contact by clicking here</p>
                    <button onClick={() => dispatch(deleteContact(contactId))}>Click</button>
                </div>
                </ImageModal>
            <div className={s.text}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <div className={s.div}>
                <button onClick={() => openModal()}>Edit</button>
                <button onClick={() => openSecondModal()}>Delete</button>
            </div>
        </div>
    )
}

export default Contact