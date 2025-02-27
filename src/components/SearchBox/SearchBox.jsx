import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "/src/redux/filters/slice.js";

const SearchBox = () => {
    const searchId = useId();
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input type="text" id={searchId} name="searchValue" onChange={(e) => dispatch(changeFilter(e.target.value))}/>
            <div className={s.ellipse2}></div>
        </div>
    )
}

export default SearchBox