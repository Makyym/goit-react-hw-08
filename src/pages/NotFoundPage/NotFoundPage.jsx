import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCount => prevCount - 1);
        }, 1000);
        if (counter === 0) {
            navigate('/');
        }
        // const timer = setTimeout(() => {
        //     navigate('/');
        // }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, [navigate, counter]);
    return (
        <div>
            <p className={s.text}>
                {`Sorry, but it looks like this page doesn't exist!`}<br />
                {`You will be redirected to the homepage in ${counter} seconds...`}
            </p>
            <div className={s.div}><img className={s.img} src="/src/img/astronaut.png" alt="flying cosmonaut" /></div>
        </div>);
};

export default NotFoundPage