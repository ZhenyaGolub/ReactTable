import React, { useEffect, useRef } from 'react'

import { Visible } from '../utils';

export const Table = ({ dataUrl, changeHeader }) => {
    
    const { columns, rows } = dataUrl;

    const [columnsCount, columnsText] = Object.values(columns);
    const [rowsCount, cellsText] = Object.values(rows);

    const renderColumns = (count, text, type) => {
        const columns = new Array(count).fill(text).map((el, index) => {
            return (
                type === 'th' ? <th key={index}>{el}</th> : <td key={index}>{el}</td>
            )
        });
        return columns;
    }

    const renderRows = (count, text) => {
        const rows = new Array(count).fill(text).map((row, index) => {
            return (
                <tr key={index}>
                    {
                        renderColumns(columnsCount, row, 'td')
                    }        
                </tr>
            )
        })
        return rows;
    }

    return (
            <table className="table">
                <tbody>
                    {
                        renderRows(rowsCount, cellsText)
                    }
                </tbody>
            </table>
    )
}