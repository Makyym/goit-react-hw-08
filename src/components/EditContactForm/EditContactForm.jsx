import { Formik, Form, Field } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import s from "./EditContactFrom.module.css"
import { editContact } from "../../redux/contacts/operations";

const EditContactForm = ({ data, close }) => {
    const { name, phoneNumber, _id, contactType } = data;
    const [newContactType, setNewContactType] = useState(contactType);
    const initialValues = {
        name,
        phoneNumber,
        contactType
        };
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const contactTypeId = useId();
    const handleSubmit = (values, options) => {
        values._id = _id;
        values.contactType = newContactType;
        dispatch(editContact(values));
        options.resetForm();
        close();
        };
    const handleChange = (event) => {
        setNewContactType(event.target.value);
    };
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        phoneNumber: Yup.string().min(3, "Too short!").max(15, "Too long!").required("Required"),
        contactType: Yup.string().oneOf(['work', 'home', 'personal']).required("Required"),
        });
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={contactSchema}
            >
                <Form className={s.form}>
                    <Field className={s.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span"/>
                    <Field className={s.input} type="text" name="phoneNumber" id={phoneFieldId} />
                    <ErrorMessage name="phoneNumber" component="span"/>
                    <label htmlFor={contactTypeId} className={s.label}>Contact type:</label>
                    <Field
                        as="select"
                        name="contactType"
                        id={contactTypeId}
                        value={newContactType}
                        onChange={handleChange}
                        className={s.select}
                        required>
                        <option value="work" className={s.select}>Work</option>
                        <option value="home" className={s.select}>Home</option>
                        <option value="personal" className={s.select}>Personal</option>
                    </Field>
                    <button type="submit">Save</button>
                </Form>
        </Formik>
        )
}

export default EditContactForm