import React from 'react';
import  "./Select.module.scss";
import { Select as AntdSelect } from "antd";

const { Option } = AntdSelect;

const Select = ({ name, value, onChange, options }) => {
    return (
        <AntdSelect name={name} value={value} onChange={onChange}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </AntdSelect>
    );
};

export default Select;
