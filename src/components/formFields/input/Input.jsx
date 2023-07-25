import React from 'react';
//import  "./Input.module.scss";
import { Input as AntdInput} from "antd";

const Input = ({ type, placeholder, name, value, onChange = () => {}  }) => {



    return (
        <AntdInput
            className={"custom-input"}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
