import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import  classes from "./Login.module.scss"
import Input from "../../components/formFields/input/Input.jsx";
import SubmitButton from "../../components/buttons/submitButton/SubmitButton.jsx";
import {useUserData} from "../../hooksState/UserContext.jsx";
import { message } from 'antd';
import {authService} from "../../services/AuthService.js";
import {storageService} from "../../services/StorageService.js";
import {storageKeys} from "../../config/config.js";



const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const navigate = useNavigate();
    const {refreshUserData} = useUserData();
    const onLogin = () => {
        authService.login(formData?.email, formData?.password)
            .then(async r => {
                storageService.set(storageKeys.USER, r.getToken())
                await refreshUserData();
                setTimeout(() => {
                    navigate('/')
                }, 300)
            })
            .catch(err => {
                console.log(err?.data)
            })
    }

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
                   value={formData?.email}
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
            <Link to="/register">Register</Link>
        </div>
    </div>
}

export default Login;