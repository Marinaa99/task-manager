import React from "react";
import classes from "./SubmitButton.module.scss";
import { Button } from "antd";
//import { PlusOutlined } from "@ant-design/icons";



const SubmitButton = ({label, onClick, className = ""}) => {
    return <Button type="submit"
                   className={`${classes["button"]} ${className}`}
                   onClick={(e) => {
                       e.preventDefault();
                       onClick(e);
                   }
                   }
    >
        {label}
    </Button>
}

export default SubmitButton