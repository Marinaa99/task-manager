
import React from "react";
import classes from "./TaskColumn.module.scss";
import TaskCard from "../taskCard/TaskCard.jsx";
import dots from "../../assets/images/dots.svg"

const TaskColumn = ({ title, tasks }) => {
    return (
        <div className={classes["column"]}>
            <div className={classes["title"]}>
                <h3>{title}</h3>
                <img src={dots} alt="Dots" />
            </div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};


export default TaskColumn;