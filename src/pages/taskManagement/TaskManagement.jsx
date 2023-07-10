import React, {useState} from "react";
import classes from "./TaskManagement.module.scss"
import TaskTable from "./taskTable/TaskTable.jsx";
import TaskForm from "../../components/taskForm/TaskForm.jsx";


const TaskManagement = ({tasks, setTasks}) => {

    const [selectedTab, setSelectedTab] = useState('all');
    const [selectedTask, setSelectedTask] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

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
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        setSelectedTask(null);
    };

    const editTask = (task) => {
        setSelectedTask(task);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleAddClick = () => {
        setShowAddForm(true);
        setSelectedTask(null);
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
        <button className={classes["add-button"]} onClick={handleAddClick}>Add</button>
        <div>
            <button onClick={() => handleTabChange('all')}>All tasks</button>
            <button onClick={() => handleTabChange('wishlist')}>Wishlist</button>
            <button onClick={() => handleTabChange('to-do')}>To Do</button>
            <button onClick={() => handleTabChange('in-progress')}>In Progress</button>
            <button onClick={() => handleTabChange('done')}>Done</button>
            <button onClick={() => handleTabChange('deleted')}>Deleted</button>
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