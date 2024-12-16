import { Formik, Form, Field } from "formik";
import s from "./RegistrationForm.module.css"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values, options) => {
        dispatch(register(values))
            .unwrap()
            .then(res => {
                toast.success(`Welcome, ${res.user.name}!`, {
                    style: {
                        border: '1px solid #1c3023',
                        padding: '16px',
                        color: '#7ea18a',
                        backgroundColor: 'rgba(28, 48, 35, 1)'
                    }});
                navigate('/contacts');
            }).catch(() => {
                toast.error('Something went wrong... Please try again!')
            });
        options.resetForm();
    };
    const initialValues = {
        "name": "",
        "email": "",
        "password": ""
    };
    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={s.form}>
                <Field className={s.input} name='name' placeholder='Enter name' />
                <Field className={s.input} name='email' placeholder='Enter email' />
                <Field className={s.input} name='password' type='password' placeholder='Enter pass' />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
};

export default RegistrationForm