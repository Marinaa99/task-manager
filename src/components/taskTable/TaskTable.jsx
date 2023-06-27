import React from "react";
import classes from "./TaskTable.module.scss"

const TaskTable = ({tasks, selectedTab, removeTask, editTask}) => {
    const tasksToDisplay = selectedTab === "deleted" ? tasks.filter(task => task.deleted) : tasks.filter(task => !task.deleted);

    return <div className={classes["container"]}>
        <table>
            <thead>
            <tr>
                <th>Naziv</th>
                {selectedTab === 'all' && <th>Status</th>}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {tasksToDisplay.map((task) => (
                <tr key={task.id}>
                    <td>{task.title}</td>
                    {selectedTab === 'all' && <td>{task.status}</td>}
                    <td>
                        {selectedTab !== "deleted" && (
                            <>
                                <button className={classes["edit-button"]} onClick={() => editTask(task.id)}>Edit</button>
                                <button className={classes["delete-button"]} onClick={() => removeTask(task.id)}>Delete</button>
                            </>

                            )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
}


export default TaskTable;