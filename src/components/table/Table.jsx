import React from "react";
import classes from "./Table.module.scss";

const Table = ({header, data}) => {
    return (
        <table>
            <thead>
            <tr>
                {header?.map((item) => (
                    <th key={`table-header-${item.index}`}>{item?.title}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                data.map((row, index) => (
                    <tr key={`table-row-${index}`}>
                        {header?.map((header, headerIndex) => {
                            if (header.render) {
                                return (
                                    <td key={`table-row-${index}-item-${headerIndex}`}>
                                        {header.render(row)}
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={`table-row-${index}-item-${header?.index}`}>
                                        {row[header?.index] ? row[header?.index] : null}
                                    </td>
                                );
                            }
                        })}
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={header.length}>No data</td>
                </tr>
            )}
            </tbody>
        </table>

    )
}


export default Table;
