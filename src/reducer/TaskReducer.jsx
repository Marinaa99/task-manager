const reducer = (state, action) => {
    switch (action.type) {
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
