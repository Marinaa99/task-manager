import React from 'react';
import  "./PageWrapper.module.scss"
import {
    Link,
} from "react-router-dom";
import {useUserData} from "../../hooksState/UserContext.jsx";
import { Menu, Dropdown, Avatar } from 'antd';
import { HomeOutlined, AppstoreOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import classes from "./PageWrapper.module.scss";


const PageWrapper = ({ children }) => {
    const {userData, logout} = useUserData();

    const menu = (
        <Menu>
            <Menu.Item key="user-name" disabled>
                {userData?.name}
            </Menu.Item>
            <Menu.Item key="logout" onClick={() => logout()}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="__root-element">
            <Menu className={classes["menu"]} mode="horizontal" theme="dark">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item key="task" icon={<AppstoreOutlined />}>
                    <Link to="/task-management">Task Management</Link>
                </Menu.Item>

                <Menu.Item key="user" className={classes["user-menu"]}>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            <Avatar icon={<UserOutlined />} /> {/* Dodajte ikonu avatara */}
                            {userData?.name} <DownOutlined />
                        </a>
                    </Dropdown>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};


export default PageWrapper;