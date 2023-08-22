import React from "react";
import classes from "./TaskTable.module.scss";
import Table from "../../../components/table/Table.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
const TaskTable = ({ tasks, selectedTab, removeTask, editTask }) => {
    const header = [
        { title: "Name", index: "name" },
        { title: "Description", index: "description" },
        ...(selectedTab === "all" ? [{ title: "Status", index: "status" }] : []),
    ];

    const handleEdit = (task) => {
        editTask(task);
    };

    const handleDelete = (taskId) => {
        removeTask(taskId);
    };

    const tasksToDisplay = selectedTab === "deleted" ? tasks.filter((task) => task.deleted) : tasks.filter((task) => !task.deleted);

    const formattedData = tasksToDisplay.map((task) => ({
        name: task.title,
        description: task.description,
        ...(selectedTab === "all" && { status: task.status }),
        id:task.id,
        key: task.id
    }));


    const actionsHeader = [
        {
            title: "Actions",
            index: null,
            render: (data) => {
                if (selectedTab !== "deleted") {
                    return <div>
                        <Button label="Edit" onClick={() => handleEdit(data)}/>
                        <Button className={classes["delete-button"]} label="Delete" onClick={() => handleDelete(data.id)}/>
                    </div>
                }
            }
        }
    ]

    return (
        <div className={classes["container"]}>
            <Table header={[...header, ...actionsHeader]}
                   data={formattedData}
                   />
        </div>
    );
};

export default TaskTable;
