import React, { useState, useEffect } from 'react';
import classes from "./TaskForm.module.scss";
import FormField from "./formField/FormField.jsx";
const TaskForm = ({ addTask, updateTask, selectedTask }) => {
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
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [name]: value
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
                <FormField
                    type="text"
                    placeholder="Naziv"
                    name="title"
                    value={taskData.title}
                    onChange={handleInputChange}
                />
                <FormField
                    type="textarea"
                    placeholder="Opis"
                    name="description"
                    value={taskData.description}
                    onChange={handleInputChange}
                />
                <FormField
                    type="select"
                    name="status"
                    value={taskData.status}
                    onChange={handleInputChange}
                    options={statusOptions}
                />
                <button type="submit">{selectedTask ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};
export default TaskForm;
