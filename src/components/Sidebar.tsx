import React from 'react'
import { LayoutDashboard, FileText, Activity, Settings } from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#000000] text-white p-6">
      <div className="text-2xl font-bold mb-10 flex items-center">
        LOGO
      </div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 bg-[#333333] p-2 rounded">
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2">
          <FileText className="w-5 h-5" />
          <span>Management</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2">
          <FileText className="w-5 h-5" />
          <span>Reports</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2">
          <Activity className="w-5 h-5" />
          <span>Activity Log</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </nav>
      <div className="absolute bottom-0 left-0 w-64 p-6">
        <div className="flex items-center space-x-2">
          <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-10 h-10 rounded-full" />
          <span>Hamza</span>
        </div>
      </div>
    </aside>
  )
}

