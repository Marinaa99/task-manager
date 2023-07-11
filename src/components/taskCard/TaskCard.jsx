import React from "react";
import classes from "./TaskCard.module.scss";


const TaskCard = ({task}) => {

    return <div className={classes["container"]}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.status}</p>
    </div>
}


export default TaskCard;


