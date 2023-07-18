import React from 'react';
import {
    Link,
} from "react-router-dom";

const PageWrapper = ({children}) => {
    return  <div className="__root-element">
        <div className={"__toggle-view-button-container"}>
            <Link to="/task-management">Home</Link>
            <Link to="/">Task Management</Link>
        </div>
        {children}
    </div>
}

export default PageWrapper;