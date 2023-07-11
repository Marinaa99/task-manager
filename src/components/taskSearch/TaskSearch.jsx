import React from "react";
import classes from "./TaskSearch.module.scss"
import Input from "../formFields/input/Input.jsx";

const TaskSearch = ({
                        placeholder = "",
                        onChange = () => {} }) => {

    return <div className={classes["container"]}>
        <Input
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e?.target?.value);
            }}
        />
    </div>
}

export default TaskSearch;