import React, { createContext, useReducer } from "react";
import reducer from "../reducer/TaskReducer.jsx";

export const TaskContext = createContext();

const initialState = {
    tasks: [],
    selectedTab: "all",
    selectedTask: null,
    showAddForm: false,
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
