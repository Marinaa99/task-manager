import { useState } from 'react';
import "./App.scss";
import Home from "./pages/home/Home.jsx";
import TaskManagement from "./pages/taskManagement/TaskManagement.jsx";


function App() {

    const [activePage, setActivePage]=useState('Home');
    const [tasks, setTasks] = useState([]);

    const handlePageSwitch = () => {
        setActivePage((prevPage) =>
        prevPage === "Home" ? "Task Management" : "Home" );
    };

  return (
        <div className="__root-element">
            <button className="__toggle-button" onClick={handlePageSwitch}>
                {activePage === "Home" ? "Task Management" : "Home"}
            </button>
            {activePage === "Home" ? <Home tasks={tasks}/> : <TaskManagement tasks={tasks} setTasks={setTasks} />}
        </div>
  )
}

export default App
