import React from 'react';
import { Input } from "antd";


const Textarea = ({ type, placeholder, name, value, onChange }) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Textarea;
