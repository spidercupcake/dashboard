import React from 'react'

export const Metrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <div className="text-sm text-black">Total Users</div>
        <div className="text-2xl font-bold text-black">1,234</div>
      </div>
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <div className="text-sm text-black">Active Projects</div>
        <div className="text-2xl font-bold text-black">56</div>
      </div>
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <div className="text-sm text-black">Monthly Revenue</div>
        <div className="text-2xl font-bold text-black">$45,678</div>
      </div>
      <div className="bg-white p-4 rounded-md border-2 border-black">
        <div className="text-sm text-black">Task Completion Rate</div>
        <div className="text-2xl font-bold text-black">87%</div>
      </div>
    </div>
  )
}

