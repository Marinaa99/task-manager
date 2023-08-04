import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import TaskManagement from "./pages/taskManagement/TaskManagement.jsx";
import Task from "./pages/task/Task.jsx";
import "./App.scss";
import PageWrapper from "./pages/pageWrapper/PageWrapper.jsx";
import {TaskProvider} from "./hooksState/TaskContext.jsx";
import TaskForm from "./pages/taskManagement/taskForm/TaskForm.jsx";
import UserProvider from "./hooksState/UserContext.jsx";
import Login from "./pages/login/Login.jsx";
import AuthWrapper from "./pages/authWrapper/AuthWrapper.jsx";


const router = createBrowserRouter([
    {
         path: "/",
         element: <AuthWrapper><PageWrapper><Home/></PageWrapper></AuthWrapper>,
     },
    {
        path: "/login",
        element: <Login/>,
    },
     {
         path: "/task-management",
         element: <AuthWrapper><PageWrapper><TaskManagement/></PageWrapper></AuthWrapper>,
     },

    {
        path: "/add/task",
        element: <AuthWrapper><PageWrapper><TaskForm/></PageWrapper></AuthWrapper>,
    },

    {
        path: "/edit/task/:taskId",
        element: <AuthWrapper><PageWrapper><TaskForm/></PageWrapper></AuthWrapper>,
    },
 ]);

function App() {


  return (
      <UserProvider>
      <TaskProvider>
          <RouterProvider router={router}/>
      </TaskProvider>
      </UserProvider>
  )
}

export default App
