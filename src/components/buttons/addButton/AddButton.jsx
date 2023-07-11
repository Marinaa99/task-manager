import React from "react";
import classes from "./AddButton.module.scss"

const AddButton = ({onClick, className = ""}) => {
    return <button type="button"
                   className={`${classes["add-button"]} ${className}`}
                   onClick={(e) => {
                       e.preventDefault();
                       onClick()
                   }
                   }>
        Add task
    </button>
}

export default AddButton;