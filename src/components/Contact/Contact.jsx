import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations"
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import EditContactForm from "../EditContactForm/EditContactForm";
import { IoMdContact } from "react-icons/io";

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
    const { name, phoneNumber, _id, contactType} = data;
    return (
        <div className={s.item}>
            <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <EditContactForm data={data} close={closeModal}/>
            </ImageModal>
            <ImageModal isOpen={secondModalIsOpen} onRequestClose={closeSecondModal}>
                <div className={s.modal}>
                    <p className={s.p}>Confirm deletion of a contact by clicking here</p>
                    <button onClick={() => dispatch(deleteContact(_id))}>Click</button>
                </div>
            </ImageModal>
            <IoMdContact />
            <div className={s.text}>
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <p>Type: {contactType}</p>
            </div>
            <div className={s.div}>
                <button onClick={() => openModal()}>Edit</button>
                <button onClick={() => openSecondModal()}>Delete</button>
            </div>
        </div>
    )
}

export default Contact