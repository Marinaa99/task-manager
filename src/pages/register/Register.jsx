import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import  classes from "./Register.module.scss"
import Input from "../../components/formFields/input/Input.jsx";
import SubmitButton from "../../components/buttons/submitButton/SubmitButton.jsx";
//import Avatar from "../../components/formFields/avatar/Avatar.jsx";
import { useMutation } from 'react-query';
import {registerService} from "../../services/RegisterService.js";




const Register = () => {
    const [formData, setFormData] = useState({ name:'', surname: '', email: '', password: '' });
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const registerMutation = useMutation((formData) => {
        return registerService.register(formData);
    }, {
        onSuccess: async () => {
            navigate('/login');
        },
        onError: (error) => {
            console.error('Registration error:', error);

        },
    });


    const handleSubmit = () => {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData?.name);
        formDataToSend.append('surname', formData?.surname);
        formDataToSend.append('email', formData?.email);
        formDataToSend.append('password', formData?.password);
        formDataToSend.append('image', image);

        registerMutation.mutate(formDataToSend);

        console.log(formDataToSend);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };


    return <div className={classes["container"]}>


        <Input
            type="file"
            placeholder="Insert your image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}

        />

        <Input
            placeholder="Insert your name"
            value={formData?.name}
            name="name"
            onChange={handleInputChange}

        />
        <Input
            placeholder="Insert your surname"
            value={formData?.surname}
            name="surname"
            onChange={handleInputChange}

        />
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
            <SubmitButton label={"Register"} onClick={handleSubmit} />
        </div>
    </div>
}

export default Register;