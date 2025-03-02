import { Formik, Form, Field } from "formik";
import s from "./RegistrationForm.module.css"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const emailFieldId = useId();
    const handleSubmit = (values, options) => {
        dispatch(register(values))
            .unwrap()
            .then(res => {
                toast.success(`Welcome, ${res.user.name}!`, {
                    duration: 3000,
                    style: {
                        border: '1px solid #646cff',
                        padding: '16px',
                        color: 'white',
                        backgroundColor: '#1a1a1a',
                        fontSize: '16px',
                        fontWeight: '700',
                    },
                    icon: null});
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
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(7, "Too short!").max(50, "Too long!").required("Required"),
        });
    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={contactSchema}>
            <div className={s.relative}>
                <Form className={s.form}>
                    <div className={s.div}>
                        <h2>Create an account to start using the application.</h2>
                        <h3>{`If you already have an account, click the 'Log In' link.`}</h3>
                        <div className={s.wrapper}>
                            <Field className={s.input} name='name' placeholder='Enter name' id={nameFieldId}/>
                            <ErrorMessage name="name" component="span"/>
                        </div>
                        <div className={s.wrapper}>
                            <Field className={s.input} name='email' placeholder='Enter email' id={phoneFieldId}/>
                            <ErrorMessage name="email" component="span"/>
                        </div>
                        <div className={s.wrapper}>
                            <Field className={s.input} name='password' type='password' placeholder='Enter pass' id={emailFieldId}/>
                            <ErrorMessage name="password" component="span"/>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
                <div className={s.ellipse}></div>
                <div className={s.ellipse2}></div>
            </div>
        </Formik>
    )
};

export default RegistrationForm