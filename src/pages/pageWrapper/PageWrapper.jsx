import React from 'react';
import  "./PageWrapper.module.scss"
import {
    Link,
} from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import classes from "./PageWrapper.module.scss";


const PageWrapper = ({ children }) => {
    return (
        <div className="__root-element">
            <Menu className={classes["menu"]} mode="horizontal" theme="dark">

                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/task-management">Home</Link>
                </Menu.Item>

                <Menu.Item key="task" icon={<AppstoreOutlined />}>
                    <Link to="/">Task Management</Link>
                </Menu.Item>

            </Menu>
            {children}
        </div>
    );
};


export default PageWrapper;