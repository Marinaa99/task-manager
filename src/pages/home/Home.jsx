import React, {useState} from "react";
import classes from "./Home.module.scss";
import TaskCard from "../../components/taskCard/TaskCard.jsx";
import TaskSearch from "../../components/taskSearch/TaskSearch.jsx";
import dots from "../../assets/images/dots.svg"


const Home = ({tasks}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const renderTaskCards = (status) => {

        const filteredTasks = tasks.filter(
            (task) =>
            task.status === status &&
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !task.deleted);
        return filteredTasks.map((task) => <TaskCard key={task.id} task={task} />);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return <>

        <TaskSearch
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
        />
        <div className={classes["container"]}>
            <div className={classes["column"]}>
                <div className={classes["title"]}>
                <h3>Wishlist</h3>
                <img src={dots} alt="Dots"></img>
                </div>
                {renderTaskCards('wishlist')}
            </div>
            <div className={classes["column"]}>
                <div className={classes["title"]}>
                <h3>To Do</h3>
                <img src={dots} alt="Dots"></img>
                </div>
                {renderTaskCards('to-do')}
            </div>
            <div className={classes["column"]}>
                <div className={classes["title"]}>
                <h3>In Progress</h3>
                <img src={dots} alt="Dots"></img>
                </div>
                {renderTaskCards('in-progress')}
            </div>
            <div className={classes["column"]}>
                <div className={classes["title"]}>
                <h3>Done</h3>
                <img src={dots} alt="Dots"></img>
                </div>
                {renderTaskCards('done')}
            </div>
        </div>

    </>
}


export default Home;