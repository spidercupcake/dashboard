import React from 'react'
import { tableData } from '../data/mockData'

export const DataTable = () => {
  return (
    <div className="bg-white p-4 rounded-md border-2 border-black overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b-2 border-black">
            <th className="px-4 py-2 text-left font-bold text-black">ID</th>
            <th className="px-4 py-2 text-left font-bold text-black">Name</th>
            <th className="px-4 py-2 text-left font-bold text-black">Shared On</th>
            <th className="px-4 py-2 text-left font-bold text-black">Reshared</th>
            <th className="px-4 py-2 text-left font-bold text-black">Status</th>
            <th className="px-4 py-2 text-left font-bold text-black">Comments</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="border-t-2 border-black">
              <td className="px-4 py-2 text-black">{row.id}</td>
              <td className="px-4 py-2 flex items-center">
                <img src="/placeholder.svg?height=24&width=24" alt={row.name} className="w-6 h-6 rounded-full mr-2" />
                <span className="text-black">{row.name}</span>
              </td>
              <td className="px-4 py-2 text-black">{row.sharedOn}</td>
              <td className="px-4 py-2 text-black">{row.reshared}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded-full text-xs ${row.status === 'Added' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-2 text-black">{row.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

