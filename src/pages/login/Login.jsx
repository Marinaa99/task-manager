import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import  classes from "./Login.module.scss"
import Input from "../../components/formFields/input/Input.jsx";
import SubmitButton from "../../components/buttons/submitButton/SubmitButton.jsx";
import {useUserData} from "../../hooksState/UserContext.jsx";
import { message } from 'antd';



const Login = () => {
    const { login } = useUserData();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const navigate = useNavigate();
    const onLogin = () => {
        const success = login(formData?.email, formData?.password);

        if (success) {
          navigate("/");
        } else {
            message.error('Login unsuccessful. Please check the entered information.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return <div className={classes["container"]}>


            <Input
                   type="email"
                   placeholder="Insert your email"
                   value={formData.email}
                   name="email"
                   onChange={handleInputChange}

            />

            <Input
                type="password"
                   placeholder="Insert password"
                   value={formData?.password}
                   name="password"
                   onChange={handleInputChange}

            />
        <div className={classes["button"]}>
            <SubmitButton label={"Login"} onClick={() => onLogin()}/>
        </div>
    </div>
}

export default Login;