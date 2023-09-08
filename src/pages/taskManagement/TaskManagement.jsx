import React, {useContext, useEffect} from "react";
import {useParams, useSearchParams, useNavigate} from "react-router-dom";
import classes from "./TaskManagement.module.scss"
import {TaskContext} from "../../hooksState/TaskContext.jsx";
import {useModal} from "../../hooksState/ModalContext.jsx";
import TaskTable from "./taskTable/TaskTable.jsx";
import TaskForm from "./taskForm/TaskForm.jsx";
import AddButton from "../../components/buttons/addButton/AddButton.jsx";
import Button from "../../components/buttons/button/Button.jsx";

const TaskManagement = () => {


    return <div className={classes["container"]}>

        <div className={classes["button-container"]}>
            <Button label="All tasks" onClick={() => handleTabChange('all')} />
            <Button label="Wishlist" onClick={() => handleTabChange('wishlist')} />
            <Button label="To Do" onClick={() => handleTabChange('to-do')} />
            <Button label="In Progress" onClick={() => handleTabChange('in-progress')} />
            <Button label="Done" onClick={() => handleTabChange('done')} />
            <Button label="Deleted" onClick={() => handleTabChange('deleted')} />

        </div>



        <TaskTable

        />


    </div>
}


export default TaskManagement;