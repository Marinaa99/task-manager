import React from 'react';
import  "./Input.module.scss";

const Input = ({ type, placeholder, name, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
