import React from 'react'
import { Bell } from 'lucide-react'
import { notifications } from '../data/mockData'

export const Notifications = () => {
  return (
    <div className="bg-white p-4 rounded-md border-2 border-black">
      <h2 className="text-lg font-bold text-black mb-4">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Bell className="w-5 h-5 mt-1 text-black" />
            <div>
              <p className="text-sm font-bold text-black">{item.message}</p>
              <p className="text-xs text-black">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

