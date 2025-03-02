import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import s from "./EditContactFrom.module.css"
import { editContact } from "../../redux/contacts/operations";

const EditContactForm = ({ data, close }) => {
    const { name, number, id } = data;
    const initialValues = {
        name,
        number
        };
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const handleSubmit = (values, options) => {
        values.id = id;
        dispatch(editContact(values));
        options.resetForm();
        close();
        };
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(15, "Too long!").required("Required"),
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
                    <Field className={s.input} type="text" name="number" id={phoneFieldId} />
                    <ErrorMessage name="number" component="span"/>
                    <button type="submit">Save</button>
                </Form>
        </Formik>
        )
}

export default EditContactForm