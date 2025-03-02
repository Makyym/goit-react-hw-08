import { Formik, Form, Field } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
    const [margin, setMargin] = useState(false);
    const [contactType, setContactType] = useState("personal");
    const initialValues = {
        name: "",
        phoneNumber: "",
        contactType,
    };
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const selectId = useId();
    const handleSubmit = (values, options) => {
        values.contactType = contactType;
        dispatch(addContact(values));
        setMargin(false);
        options.resetForm();
    };
    const handleMargin = () => {setMargin(!margin);}
    const handleChange = (event) => {
        setContactType(event.target.value);
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
            <div className={s.wrapper}>
                <Form className={s.form}>
                    <label htmlFor={nameFieldId} className={s.label}>Name</label>
                    <Field className={s.input} type="text" name="name" id={nameFieldId} placeholder="enter a contact name"/>
                    <ErrorMessage name="name" component="span"/>
                    <label htmlFor="phoneFieldId" className={s.label}>Number</label>
                    <Field className={s.input} type="text" name="phoneNumber" id={phoneFieldId} placeholder="enter a contact number"/>
                    <ErrorMessage name="phoneNumber" component="span"/>
                    <div className={s.div}>
                        <label htmlFor={selectId} className={s.label}>Contact type:</label>
                        <Field 
                            as="select" 
                            name="contactType" 
                            id={selectId} 
                            value={contactType} 
                            onChange={handleChange}
                            onClick={handleMargin}
                            className={s.select}
                            required
                        >
                            <option value="work" className={s.select}>Work</option>
                            <option value="home" className={s.select}>Home</option>
                            <option value="personal" className={s.select}>Personal</option>
                        </Field>
                    </div>
                    <button type="submit" className={margin ? s.margin : s.marginWithout}>Add contact</button>
                    <div className={s.ellipse}></div>
                </Form>
            </div>
        </Formik>
    )
}

export default ContactForm;