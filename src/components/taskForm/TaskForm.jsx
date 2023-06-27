import React, { useState, useEffect } from 'react';
import classes from "./TaskForm.module.scss";

const TaskForm = ({ addTask, updateTask, selectedTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('wishlist');


    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
            setStatus(selectedTask.status);
        }
    }, [selectedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: selectedTask ? selectedTask.id : Math.random().toString(),
            title,
            description,
            status,
        };
        if (selectedTask) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }
        setTitle('');
        setDescription('');
        setStatus('wishlist');
    };

    return (
        <div  className={classes["container"]}>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Naziv"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Opis"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="wishlist">Wishlist</option>
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button type="submit">{selectedTask ? 'Update' : 'Add'}</button>
        </form>
        </div>
    );
};

export default TaskForm;
