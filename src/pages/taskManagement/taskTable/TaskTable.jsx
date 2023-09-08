import React, {useState}from "react";
import classes from "./TaskTable.module.scss";
import {message} from 'antd';
import Table from "../../../components/table/Table.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
import {useModal} from "../../../hooksState/ModalContext.jsx";
import AddButton from "../../../components/buttons/addButton/AddButton.jsx";
import TaskForm from "../taskForm/TaskForm.jsx";
import {taskService} from "../../../services/TaskService.js";
import {useQueryClient, useQuery, useMutation} from "react-query";

const TaskTable = () => {
    const queryClient = useQueryClient();
    const {open, close} = useModal();
    const [query, setQuery] = useState("")


    const { data} = useQuery(['tasks'], () => taskService.getAll(), {
        enabled: true,
        initialData: [],
    });

    console.log('Table Data:', data);

    const deleteTask = useMutation((data) => taskService.delete(data)
        .then(r => {
            message.success("Succesfully deleted!");
            queryClient.invalidateQueries("categories")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const onDelete = (id) => {
        deleteTask.mutate(id)
    }


    const header = [
        { title: "Naziv", index: "name"},
        { title: "Opis", index: "description"},
        { title: "Status", index: "status_id" },
        { title: "Kategorije", index: "category_id" },

        {
            title: "Akcije",
            index: null,
            render: (data) => {
                return <div className={classes["action-buttons"]}>
                    <Button label={"Edit"}
                            onClick={() => openForm(data?.id)}/>
                    <Button label={"Delete"}
                            onClick={() => onDelete(data?.id)}/>
                </div>
            }
        }
    ];

    const closeForm = () => {
        close();
    }

    const openForm = (id) => {
        open("Task",
            <TaskForm key={`task-${id}`}
                              id={id}
                              close={closeForm}/>

        )
    }



    return (
        <div className={classes["container"]}>
            <AddButton onClick={() => openForm(null)}/>
            <Table header={header}
                 data={data}  />
        </div>
    );
};

export default TaskTable;
