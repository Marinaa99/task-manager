import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {reactQueryConfig} from "./config/config.js";
import Home from "./pages/home/Home.jsx";
import TaskManagement from "./pages/taskManagement/TaskManagement.jsx";
import "./App.scss";
import PageWrapper from "./pages/pageWrapper/PageWrapper.jsx";
import {TaskProvider} from "./hooksState/TaskContext.jsx";
import ModalProvider from "./hooksState/ModalContext.jsx";
import TaskForm from "./pages/taskManagement/taskForm/TaskForm.jsx";
import UserProvider from "./hooksState/UserContext.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import AuthWrapper from "./pages/authWrapper/AuthWrapper.jsx";



const queryClient = new QueryClient(reactQueryConfig);


const router = createBrowserRouter([
    {
         path: "/",
         element: <AuthWrapper><PageWrapper><Home/></PageWrapper></AuthWrapper>,
     },

    {
        path: "/register",
        element: <Register/>,
    },

    {
        path: "/login",
        element: <Login/>,
    },
     {
         path: "/task-management",
         element: <AuthWrapper><PageWrapper><TaskManagement/></PageWrapper></AuthWrapper>,
     },


 ]);

function App() {


  return (
      <QueryClientProvider client={queryClient}>
      <UserProvider>
      <TaskProvider>
          <ModalProvider>
          <RouterProvider router={router}/>
          </ModalProvider>
      </TaskProvider>
      </UserProvider>
      </QueryClientProvider>
  )
}

export default App
