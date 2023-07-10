import React from "react";
import classes from "./TaskTable.module.scss";
import Table from "../../../components/table/Table.jsx";
const TaskTable = ({ tasks, selectedTab, removeTask, editTask }) => {
    const headers = ["Name", ...(selectedTab === "all" ? ["Status"] : [])];

    const handleEdit = (task) => {
        editTask(task);
    };

    const handleDelete = (taskId) => {
        removeTask(taskId);
    };

    const tasksToDisplay = selectedTab === "deleted" ? tasks.filter((task) => task.deleted) : tasks.filter((task) => !task.deleted);
    const formattedData = tasksToDisplay.map((task) => ({
        name: task.title,
        ...(selectedTab === "all" && { status: task.status }),
        id:task.id,

    }));

    return (
        <div className={classes["container"]}>
            <Table headers={headers}
                   data={formattedData}
                   editRow={handleEdit}
                   deleteRow={handleDelete} />
        </div>
    );
};

export default TaskTable;
