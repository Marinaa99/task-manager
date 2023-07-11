import React, {useState} from "react";
import classes from "./Home.module.scss";
import TaskColumn from "../../components/taskColumn/TaskColumn.jsx";
import TaskSearch from "../../components/taskSearch/TaskSearch.jsx";
import TaskWrapper from "../../components/taskWrapper/TaskWrapper.jsx";
import useDebounce from "../../hooks/UseDebounce.js";

const Home = ({tasks}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);


    const filteredTasks = (status) => {
         return tasks.filter(
             (task) =>
                 task.status === status &&
                 task.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
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

       <TaskWrapper>
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
       </TaskWrapper>


    </>
}


export default Home;