import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values, options) => {
        dispatch(login(values))
            .unwrap()
            .then(res => {
                toast.success(`Welcome, ${res.name}!`, {
                    style: {
                        border: '1px solid #646cff',
                        padding: '16px',
                        color: 'white',
                        backgroundColor: '#1a1a1a',
                        opacity: '0.8',
                    },
                    iconTheme: {
                        primary: '#646cff',
                        secondary: 'white'
                    }});
                navigate('/contacts');
            }).catch(() => {
                toast.error('Something went wrong... Please try again!')
            });
        options.resetForm();
    };
    const initialValues = {
        "email": "",
        "password": ""
    };
    if (isLoggedIn) {
        return <Navigate to='/contacts'/>
    }
    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <div className={s.relative}>
                <Form className={s.form}>
                    <div>
                        <h2>Log in to your account to start using the application.</h2>
                        <h3>{`If you don't have an account yet, click the 'Register' link.`}</h3>
                        <Field className={s.input} name='email' placeholder='Enter email' />
                        <Field className={s.input} name='password' type='password' placeholder='Enter pass' />
                        <button type="submit">Log in</button>
                    </div>
                </Form>
                <div className={s.ellipse}></div>
                <div className={s.ellipse2}></div>
            </div>
        </Formik>
    )
};

export default LoginForm