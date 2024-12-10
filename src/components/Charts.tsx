import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { projectStatus, revenueOverTime, userGrowth } from '../data/mockData'

export const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <h2 className="text-lg font-bold text-black mb-4">Project Status</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={projectStatus}>
            <XAxis dataKey="name" tick={{fill: '#000000'}} />
            <YAxis tick={{fill: '#000000'}} />
            <Tooltip />
            <Bar dataKey="value" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <h2 className="text-lg font-bold text-black mb-4">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={revenueOverTime}>
            <XAxis dataKey="name" tick={{fill: '#000000'}} />
            <YAxis tick={{fill: '#000000'}} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#000000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <h2 className="text-lg font-bold text-black mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={userGrowth}>
            <XAxis dataKey="name" tick={{fill: '#000000'}} />
            <YAxis tick={{fill: '#000000'}} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#000000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

