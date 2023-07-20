import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import TaskManagement from "./pages/taskManagement/TaskManagement.jsx";
import "./App.scss";
import PageWrapper from "./pages/pageWrapper/PageWrapper.jsx";
import {TaskProvider} from "./hooksState/TaskContext.jsx";

const router = createBrowserRouter([
    {
         path: "/",
         element: <PageWrapper><TaskManagement/></PageWrapper>,
     },
     {
         path: "task-management",
         element: <PageWrapper><Home/></PageWrapper>,
     },
 ]);

function App() {


  return (
      <TaskProvider>
          <RouterProvider router={router}/>
      </TaskProvider>
  )
}

export default App
