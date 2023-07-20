import React from "react";
import classes from "./AddButton.module.scss";
import { Button } from "antd";

const AddButton = ({onClick, className = ""}) => {
    return <Button type="button"
                   className={`${classes["add-button"]} ${className}`}
                   onClick={(e) => {
                       e.preventDefault();
                       onClick()
                   }}

                    >
        Add task
    </Button>
}

export default AddButton;