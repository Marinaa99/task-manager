import React, {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {TaskContext} from "../../../hooksState/TaskContext.jsx";
import classes from "./TaskForm.module.scss";
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton.jsx";
import InputWithController from "../../../components/formFields/inputWithController/InputWithController.jsx";
import SelectWithController from "../../../components/formFields/selectWithController/SelectWithController.jsx";
import TextareaWithController from "../../../components/formFields/textAreaWithController/TextareaWithController.jsx";

const TaskForm = () => {
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
    const { handleSubmit, control, reset,setValue,formState: {errors}
    } = useForm({resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            description: '',
            status: 'wishlist',
        },
    });


    const { state, dispatch } = useContext(TaskContext);
    const { selectedTask } = state;

    const navigate = useNavigate();


    useEffect(() => {
        if (selectedTask) {
            setValue("title", selectedTask.name);
            setValue("description", selectedTask.description);
            setValue("status", selectedTask.status);
        } else {
            reset();
        }
    }, [selectedTask, reset, setValue]);

    const addTask = (task) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };

    const updateTask = (updatedTask) => {
        dispatch({ type: "UPDATE_TASK", payload: updatedTask });
        dispatch({ type: "SET_SELECTED_TASK", payload: null });
    };

    const onSubmit = (formData) => {
        const newTask = {
            id: selectedTask ? selectedTask.id : Math.random().toString(),
            ...formData,
        };

        if (selectedTask) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }

        reset();
        navigate('/task-management');
    };


    const options = [
        { value: 'wishlist', label: 'Wishlist' },
        { value: 'to-do', label: 'To Do' },
        { value: 'in-progress', label: 'In Progress' },
        { value: 'done', label: 'Done' }
    ];


    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputWithController
                    placeholder="Naziv"
                    name="title"
                    control={control}
                    error={errors?.title?.message}
                />
                <TextareaWithController
                    placeholder="Opis"
                    name="description"
                    control={control}
                    error={errors?.description?.message}
                />
                <SelectWithController
                    name="status"
                    control={control}
                    options={options}
                    error={errors?.select?.message}
                />
                <SubmitButton
                label={selectedTask ? 'Update' : 'Add'}
                />
            </form>
        </div>
    );
};
export default TaskForm;
