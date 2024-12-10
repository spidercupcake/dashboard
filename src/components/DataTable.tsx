import React from 'react'

interface TableColumn {
  key: string
  header: string
}

interface TableRow {
  [key: string]: string | number | React.ReactNode
}

interface DataTableProps {
  columns: TableColumn[]
  data: TableRow[]
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="bg-white p-4 rounded-md border-2 border-black overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b-2 border-black">
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2 text-left font-bold text-black">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t-2 border-black">
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.key}`} className="px-4 py-2 text-black">
                  {column.key === 'name' ? (
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=24&width=24" alt={row.name as string} className="w-6 h-6 rounded-full mr-2" />
                      <span>{row[column.key]}</span>
                    </div>
                  ) : column.key === 'status' ? (
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      row[column.key] === 'Added' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
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
  )
}

