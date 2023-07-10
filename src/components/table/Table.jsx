import React from "react";
import classes from "./Table.module.scss";

const Table = ({headers, data, editRow, deleteRow}) => {
    return (
        <table>
            <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    {Object.values(row).map((value, index) => (
                        <td key={index}>{value}</td>
                    ))}

                    <td>
                        <button className={classes["edit-button"]} onClick={() => editRow(row)}>
                            Edit
                        </button>
                        <button className={classes["delete-button"]} onClick={() => deleteRow(row.id)}>
                            Delete
                        </button>
                    </td>
                    
                </tr>
            ))}
            </tbody>
        </table>
    )
}


export default Table;
