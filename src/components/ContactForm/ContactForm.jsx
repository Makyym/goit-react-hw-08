import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
    const initialValues = {
        name: "",
        number: "",
    };
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const handleSubmit = (values, options) => {
        dispatch(addContact(values));
        options.resetForm();
    };
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
        >
            <Form className={s.form}>
                <label htmlFor={nameFieldId} className={s.label}>Name</label>
                <Field className={s.input} type="text" name="name" id={nameFieldId} placeholder="enter a contact name"/>
                <ErrorMessage name="name" component="span"/>
                <label htmlFor="phoneFieldId" className={s.label}>Number</label>
                <Field className={s.input} type="text" name="number" id={phoneFieldId} placeholder="enter a contact number"/>
                <ErrorMessage name="number" component="span"/>
                <button type="submit">Add contact</button>
                <div className={s.ellipse}></div>
            </Form>
        </Formik>
    )
}

export default ContactForm