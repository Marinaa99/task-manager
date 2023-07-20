import React from "react";
//import classes from "./Table.module.scss";
import { Table as AntdTable } from "antd";

const Table = ({header, data}) => {
    return <AntdTable columns={header.map(item => ({...item, dataIndex: item.index}))} dataSource={data} />
}


export default Table;
