import React, {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {TaskContext} from "../../../hooksState/TaskContext.jsx";
import classes from "./TaskForm.module.scss";
import {message} from 'antd';
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton.jsx";
import InputWithController from "../../../components/formFields/inputWithController/InputWithController.jsx";
import SelectWithController from "../../../components/formFields/selectWithController/SelectWithController.jsx";
import TextareaWithController from "../../../components/formFields/textAreaWithController/TextareaWithController.jsx";
import {useQueryClient, useQuery, useMutation} from "react-query";
import {taskService} from "../../../services/TaskService.js";

const TaskForm = ({id, close}) => {
    const queryClient = useQueryClient();

    const add = useMutation((data) => taskService.add(data)
        .then(r => {
            message.success("Succesfully added!");
            queryClient.invalidateQueries("tasks")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const edit = useMutation((data) => taskService.edit(data)
        .then(r => {
            message.success("Sucessfully edited!");
            queryClient.invalidateQueries("tasks")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const get = (id) => {
        return taskService.get(id)
            .then(res => {
                reset(res)
            })
            .catch(err => message.error("There has been an error!"))
    }


    const schema = yup.object().shape({
        title: yup.string().trim()
            .required("Field required!")
            .min(3, "Minimum length is 3!")
            .max(50, "Maximum length is 50!"),
        description: yup.string().trim()
            .required("Field required!")
            .min(3, "Minimum length is 3!")
            .max(255, "Maximum length is 255!"),
        status:
            yup.string().required('Field required!').oneOf(['wishlist', 'to-do', 'in-progress', 'done'], 'Invalid status value!'),

})
    const { handleSubmit, control, reset, formState: {errors}
    } = useForm({resolver: yupResolver(schema),

    });

    const onSave = (formData) => {
        console.log('Form Data:', formData); // Make sure form data is being logged

        if(id){
            edit.mutate(formData)
        }else{
            add.mutate(formData)
        }
    }




    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSave)}>
                <InputWithController
                    placeholder="Naziv"
                    name="name"
                    control={control}
                    error={errors?.name?.message}
                />
                <TextareaWithController
                    placeholder="Opis"
                    name="description"
                    control={control}
                    error={errors?.description?.message}
                />

                <SubmitButton
                label={'Add'}
                onClick={onSave}
                />
            </form>
        </div>
    );
};
export default TaskForm;
