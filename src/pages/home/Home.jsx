import React, {useState} from "react";
import classes from "./Home.module.scss";
import TaskColumn from "../../components/taskColumn/TaskColumn.jsx";
import TaskSearch from "../../components/taskSearch/TaskSearch.jsx";


const Home = ({tasks}) => {
    const [searchTerm, setSearchTerm] = useState('');


     const filteredTasks = (status) => {
         return tasks.filter(
             (task) =>
                 task.status === status &&
                 task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                 !task.deleted
         );
     }

    const handleSearchChange = (value) => {
     setSearchTerm(value);
    }

    return <>

        <TaskSearch
            placeholder="Search task"
            onChange={handleSearchChange}
        />
        <div className={classes["container"]}>

                <TaskColumn
                    title="Wishlist"
                    tasks={filteredTasks('wishlist')}
                />
                <TaskColumn
                    title="To Do"
                    tasks={filteredTasks('to-do')}
                />
                <TaskColumn
                    title="In Progress"
                    tasks={filteredTasks('in-progress')}
                />
                <TaskColumn
                    title="Done"
                    tasks={filteredTasks('done')}
                />
            </div>


    </>
}


export default Home;