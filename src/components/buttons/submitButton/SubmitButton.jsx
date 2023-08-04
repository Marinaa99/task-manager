import React from "react";
import classes from "./SubmitButton.module.scss";
import { Button } from "antd";
//import { PlusOutlined } from "@ant-design/icons";



const SubmitButton = ({label, onClick = () => {}, className = ""}) => {
    return <button type="submit"
                   className={`${classes["button"]} ${className}`}
                   onClick={() => {
                       onClick()
                   }
                   }
    >
        {label}
    </button>
}

export default SubmitButton