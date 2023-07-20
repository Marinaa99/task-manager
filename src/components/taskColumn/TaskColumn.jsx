
import React from "react";
import classes from "./TaskColumn.module.scss";
import TaskCard from "../taskCard/TaskCard.jsx";
import dots from "../../assets/images/dots.svg"
import { Card, Empty } from "antd";


const TaskColumn = ({ title, tasks }) => {
    return (
        <Card
            className={classes["column"]}
            title={
                <div className={classes["title"]}>
                    <h3>{title}</h3>
                    <img src={dots} alt="Dots" className={classes["dots-icon"]} />
                </div>
            }
        >
            {tasks.length > 0 ? (
                tasks.map((task) => <TaskCard key={task.id} task={task} />)
            ) : (
                <Empty description="No data available" />
            )}
        </Card>
    );
};

export default TaskColumn;