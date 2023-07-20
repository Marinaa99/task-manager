import React from "react";
import classes from "./Button.module.scss";
import { Button as AntdButton} from "antd";


const Button = ({label, onClick, className = ""}) => {
    return <AntdButton type="button"
                   className={`${classes["button"]} ${className}`}
                   onClick={(e) => {
                       e.preventDefault();
                       onClick()
                   }
                   }>
        {label}
    </AntdButton>
}

export default Button;