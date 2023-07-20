const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, deleted: true } : task
                ),
            };
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case "SET_SELECTED_TAB":
            return { ...state, selectedTab: action.payload };
        case "SET_SELECTED_TASK":
            return { ...state, selectedTask: action.payload };
        case "SET_SHOW_ADD_FORM":
            return { ...state, showAddForm: action.payload };
        default:
            throw new Error("Unsupported action type");
    }
};

export default reducer;
