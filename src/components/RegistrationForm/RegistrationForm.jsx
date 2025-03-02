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
                toast.success(`Account "${res.data.name}" successfully created, please use it to log in.`, {
                    duration: 8000,
                    style: {
                        border: '1px solid #646cff',
                        padding: '16px',
                        color: 'white',
                        backgroundColor: '#1a1a1a',
                        fontSize: '20px',
                        fontWeight: '700',
                    },
                    icon: null});
                navigate('/login');
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
            <div className={s.relative}>
                <Form className={s.form}>
                    <div>
                        <h2>Create an account to start using the application.</h2>
                        <h3>{`If you already have an account, click the 'Log In' link.`}</h3>
                        <Field className={s.input} name='name' placeholder='Enter name' />
                        <Field className={s.input} name='email' placeholder='Enter email' />
                        <Field className={s.input} name='password' type='password' placeholder='Enter pass' />
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