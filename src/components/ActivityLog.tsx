import React from 'react'
import { activityLog } from '../data/mockData'

export const ActivityLog = () => {
  return (
    <div className="bg-white p-4 rounded-md border-2 border-black">
      <h2 className="text-lg font-bold text-black mb-4">Activity Log</h2>
      <ul className="space-y-2">
        {activityLog.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <img src="/placeholder.svg?height=32&width=32" alt={item.user} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-bold text-black">{item.user} {item.action}</p>
              <p className="text-xs text-black">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

