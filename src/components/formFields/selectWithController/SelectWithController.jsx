import React from "react";
import { Controller } from 'react-hook-form';
import { Select as AntdSelect } from "antd";

const { Option } = AntdSelect;

const SelectWithController = ({   label = "",
                                  name,
                                  control,
                                  error,
                                  options }) => {
    return (
        <div>
            {label && label.length > 0 && <label>{label}</label>}
            {control && (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <AntdSelect
                            {...field}
                            onChange={(value) => {
                                field.onChange(value);
                            }}
                        >
                            {options.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </AntdSelect>
                    )}
                />
            )}
            {error && error.length > 0 && <span>{error}</span>}
        </div>
    );
};

export default SelectWithController;
