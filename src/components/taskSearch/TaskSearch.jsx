import React from "react";
import classes from "./TaskSearch.module.scss"


const TaskSearch = ({ searchTerm, onSearchChange }) => {
    return <div className={classes["container"]}>
        <input
            type="text"
            placeholder="Search task..."
            value={searchTerm}
            onChange={onSearchChange}
        />
    </div>
}

export default TaskSearch;