import React from "react";
import classes from "./TaskCard.module.scss";
import { Card } from 'antd';



const TaskCard = ({task}) => {

    return (
        <Card
            title={task.title}
            bordered={false}
        >
            <div className={classes["container"]}>
                <p>{task.description}</p>
                <p>{task.status}</p>
            </div>
        </Card>
    );
};

export default TaskCard;


