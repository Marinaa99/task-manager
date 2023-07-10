import React from 'react';
import  "./FormField.module.scss";

const FormField = ({ type, placeholder, name, value, onChange, options }) => {
    if (type === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            ></textarea>
        );
    } else if (type === 'select') {
        return (
            <select name={name} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else {
        return (
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        );
    }
};

export default FormField;
