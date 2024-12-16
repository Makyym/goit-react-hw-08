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
        "email": "",
        "password": ""
    };

    if (isLoggedIn) {
        return <Navigate to='/contacts'/>
    }
    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={s.form}>
                <Field className={s.input} name='email' placeholder='Enter email' />
                <Field className={s.input} name='password' type='password' placeholder='Enter pass' />
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    )
};

export default LoginForm