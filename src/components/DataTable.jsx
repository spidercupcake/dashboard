import React from 'react';
import '../styles/DataTable.css'; // Import the CSS file

export const DataTable = ({ columns, data }) => {
  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="data-table-header">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="data-table-row">
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.key}`} className="data-table-cell">
                  {column.key === 'name' ? (
                    <div className="data-table-name">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt={row.name}
                        className="data-table-avatar"
                      />
                      <span>{row[column.key]}</span>
                    </div>
                  ) : column.key === 'status' ? (
                    <span
                      className={`data-table-status ${
                        row[column.key] === 'Added'
                          ? 'data-table-status-added'
                          : 'data-table-status-removed'
                      }`}
                    >
                      {row[column.key]}
                    </span>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
