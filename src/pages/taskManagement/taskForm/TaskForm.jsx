import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {TaskContext} from "../../../hooksState/TaskContext.jsx";
import classes from "./TaskForm.module.scss";
import Input from "../../../components/formFields/input/Input.jsx";
import Textarea from "../../../components/formFields/textarea/Textarea.jsx";
import Select from "../../../components/formFields/select/Select.jsx";
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton.jsx";

const TaskForm = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { selectedTask } = state;

    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: 'wishlist'
    });

    useEffect(() => {
        if (selectedTask) {
            setTaskData({
                title: selectedTask.name,
                description: selectedTask.description,
                status: selectedTask.status
            });
        } else {
            setTaskData({
                title: '',
                description: '',
                status: 'wishlist'
            });

        }
    }, [selectedTask]);

    const addTask = (task) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };

    const updateTask = (updatedTask) => {
        dispatch({ type: "UPDATE_TASK", payload: updatedTask });
        dispatch({ type: "SET_SELECTED_TASK", payload: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: selectedTask ? selectedTask.id : Math.random().toString(),
            ...taskData
        };

        if (selectedTask) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }

        setTaskData({
            title: '',
            description: '',
            status: 'wishlist'
        });
        navigate("/task-management")
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [name]: value
        }));
    };

    const handleStatusChange = (status) => {
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            status,
        }));
    };

    const statusOptions = [
        { value: 'wishlist', label: 'Wishlist' },
        { value: 'to-do', label: 'To Do' },
        { value: 'in-progress', label: 'In Progress' },
        { value: 'done', label: 'Done' }
    ];


    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Naziv"
                    name="title"
                    value={taskData.title}
                    onChange={handleInputChange}
                />
                <Textarea
                    type="textarea"
                    placeholder="Opis"
                    name="description"
                    value={taskData.description}
                    onChange={handleInputChange}
                />
                <Select
                    type="select"
                    name="status"
                    value={taskData.status}
                    onChange={handleStatusChange}
                    options={statusOptions}
                />
                <SubmitButton
                label={selectedTask ? 'Update' : 'Add'}
                onClick={handleSubmit}
                />
            </form>
        </div>
    );
};
export default TaskForm;
