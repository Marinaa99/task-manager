import React, {useContext, useEffect} from "react";
import {useParams, useSearchParams, useNavigate} from "react-router-dom";
import classes from "./TaskManagement.module.scss"
import TaskTable from "./taskTable/TaskTable.jsx";
import TaskForm from "./taskForm/TaskForm.jsx";
import AddButton from "../../components/buttons/addButton/AddButton.jsx";
import Button from "../../components/buttons/button/Button.jsx";
import {TaskContext} from "../../hooksState/TaskContext.jsx";

const TaskManagement = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { tasks, selectedTab, selectedTask, showAddForm } = state;
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const params = useParams();

    const addTask = (task) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };

    const removeTask = (taskId) => {
        dispatch({ type: "REMOVE_TASK", payload: taskId });
    };

    const updateTask = (updatedTask) => {
        dispatch({ type: "UPDATE_TASK", payload: updatedTask });
        dispatch({ type: "SET_SELECTED_TASK", payload: null });
    };

    const editTask = (task) => {
        navigate(`/edit/task/${task.id}`);
        dispatch({ type: "SET_SELECTED_TASK", payload: task });
    };

    useEffect(() => {
        const selectedTabFromParams = searchParams.get("filter");
        if (!selectedTabFromParams) {
            handleTabChange("all");
        }
    }, []);

    const handleTabChange = (tab) => {
        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set("filter", tab);
        setSearchParams(updatedSearchParams.toString());
        dispatch({ type: "SET_SELECTED_TAB", payload: tab });

    };

    const handleAddClick = () => {
        navigate('/add/task');
        dispatch({ type: "SET_SHOW_ADD_FORM", payload: false });
        dispatch({ type: "SET_SELECTED_TASK", payload: null });

    };

    const filteredTasks = tasks.filter((task) => {
        const selectedTabFromParams = searchParams.get("filter");
        if (selectedTabFromParams === 'deleted') {
            return task.deleted;
        } else if (selectedTabFromParams === 'all') {
            return true;
        } else {
            return task.status === selectedTabFromParams;
        }

    });

    return <div className={classes["container"]}>

        <div className={classes["button-container"]}>
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
                params={params}
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