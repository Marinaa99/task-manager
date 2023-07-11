import React from "react";
import classes from "./SubmitButton.module.scss";

const SubmitButton = ({label, onClick, className = ""}) => {
    return <button type="submit"
                   className={`${classes["button"]} ${className}`}
                   onClick={(e) => {
                       e.preventDefault();
                       onClick()
                   }
                   }>
        {label}
    </button>
}

export default SubmitButton