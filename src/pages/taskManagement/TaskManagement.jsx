import React, {useContext} from "react";
import classes from "./TaskManagement.module.scss"
import TaskTable from "./taskTable/TaskTable.jsx";
import TaskForm from "./taskForm/TaskForm.jsx";
import AddButton from "../../components/buttons/addButton/AddButton.jsx";
import Button from "../../components/buttons/button/Button.jsx";
import {TaskContext} from "../../context/TaskContext.jsx";

const TaskManagement = ({tasks, setTasks}) => {
    const { state, dispatch } = useContext(TaskContext);
    const { selectedTab, selectedTask, showAddForm } = state;

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, deleted: true } : task
            )
        );
    };
    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
        dispatch({ type: "SET_SELECTED_TASK", payload: null });
    };

    const editTask = (task) => {
        dispatch({ type: "SET_SELECTED_TASK", payload: task });
    };

    const handleTabChange = (tab) => {
        dispatch({ type: "SET_SELECTED_TAB", payload: tab });
    };

    const handleAddClick = () => {
        dispatch({ type: "SET_SHOW_ADD_FORM", payload: true });
        dispatch({ type: "SET_SELECTED_TASK", payload: null });
    };

    const filteredTasks = tasks.filter((task) => {
        if (selectedTab === 'deleted') {
            return task.deleted;
        } else if (selectedTab === 'all') {
            return true;
        } else {
            return task.status === selectedTab;
        }
    });



    return <div className={classes["container"]}>

        <div>
            <Button label="All tasks" onClick={() => handleTabChange('all')} />
            <Button label="Wishlist" onClick={() => handleTabChange('wishlist')} />
            <Button label="To Do" onClick={() => handleTabChange('to-do')} />
            <Button label="In Progress" onClick={() => handleTabChange('in-progress')} />
            <Button label="Done" onClick={() => handleTabChange('done')} />
            <Button label="Deleted" onClick={() => handleTabChange('deleted')} />
            <AddButton
                className={classes["add-button"]}
                onClick={handleAddClick}
            />
        </div>


        {showAddForm && (
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                selectedTask={selectedTask}
            />
        )}

        <TaskTable
            tasks={filteredTasks}
            selectedTab={selectedTab}
            editTask={editTask}
            removeTask={removeTask} />


    </div>
}


export default TaskManagement;