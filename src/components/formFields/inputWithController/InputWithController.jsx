import React from "react";
import {Controller} from 'react-hook-form';
import  "./InputWithController.module.scss";
import { Input as AntdInput} from "antd";


const InputWithController = ({
                                 label = "",
                                 placeholder = "",
                                 name,
                                 control,
                                 error
                             }) => {
    return <div>
        {label && label?.length > 0 && <label>{label}</label>}
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <AntdInput type="text"
                               className={"custom-input"}
                               placeholder={placeholder}
                           {...field}
                    />
                )}
            />
        }
        {error && error?.length > 0 && <span>{error}</span>}
    </div>
}

export default InputWithController;