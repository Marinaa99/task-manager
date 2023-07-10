import React from "react";
import classes from "./TaskSearch.module.scss"


const TaskSearch = ({
                        placeholder = "",
                        onChange = () => {} }) => {

    return <div className={classes["container"]}>
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e?.target?.value);
            }}
        />
    </div>
}

export default TaskSearch;