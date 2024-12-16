import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from "./NotFoundPage.module.css"

const gif = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHI5OHM1dDdlbWhoemlzdGVjbzVyMWI3Z2V4dXJpejkzNGk0YTYzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlMkUTNkfC7aAbIoZE/giphy.gif";

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
            <img className={s.img} src={gif} alt="bye" />
        </div>);
};

export default NotFoundPage