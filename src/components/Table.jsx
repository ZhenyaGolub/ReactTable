import React from 'react'

export const Table = ({ dataUrl, name }) => {
    
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
            <thead>
                <tr>
                    {
                        renderColumns(columnsCount, columnsText, 'th')
                    }
                </tr>
            </thead>
            <tbody>
                {
                    renderRows(rowsCount, cellsText)
                }
            </tbody>
        </table>
    )
}