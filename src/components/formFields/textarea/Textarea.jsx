import React from 'react';
import  "./Textarea.module.scss";
const Textarea = ({ type, placeholder, name, value, onChange }) => {
    return (
        <textarea
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Textarea;
