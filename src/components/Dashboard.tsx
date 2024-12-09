import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { LayoutDashboard, FileText, Activity, Settings, Bell, Plus } from 'lucide-react'

const projectStatus = [
  { name: 'Jan', value: 125 },
  { name: 'Feb', value: 90 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 120 },
  { name: 'May', value: 140 },
  { name: 'Jun', value: 40 },
]

const revenueOverTime = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 1000 },
  { name: 'Apr', value: 1500 },
  { name: 'May', value: 3000 },
  { name: 'Jun', value: 0 },
]

const userGrowth = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 10 },
  { name: 'Mar', value: 100 },
  { name: 'Apr', value: 110 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 150 },
]

const activityLog = [
  { user: 'John Doe', action: 'created a new project "Website Redesign"', time: '10 mins ago' },
  { user: 'Jane Smith', action: 'updated task "Create Wireframes"', time: '30 mins ago' },
  { user: 'Alice Brown', action: 'added a new user "Bob Black"', time: '1 hour ago' },
  { user: 'Charlie Green', action: 'completed task "Design Homepage"', time: '2 hours ago' },
  { user: 'Dave White', action: 'generated a sales report', time: '3 hours ago' },
]

const notifications = [
  { message: 'You have 5 new messages.', time: '10 mins ago' },
  { message: 'Project "Mobile App Development" is nearing its deadline.', time: '30 mins ago' },
  { message: 'User "Eve Yellow" has updated their profile.', time: '1 hour ago' },
  { message: 'New comment on project "Marketing Campaign".', time: '2 hours ago' },
  { message: 'Your subscription is due for renewal in 7 days.', time: '3 hours ago' },
]

const tableData = [
  { id: 583, name: 'Francene Vandyne', sharedOn: 'Jan 11, 2023 at 01:49 pm', reshared: '1 items', status: 'Added', comments: 'Elegant and versatile, these Light Sage Pants are a must-h...' },
  { id: 357, name: 'Marielle Wigington', sharedOn: 'Jan 11, 2023 at 01:49 pm', reshared: '2 items', status: 'Added', comments: 'Crafted with a soft, breathable fabric, they offer comfort wi...' },
  { id: 647, name: 'Chantal Shelburne', sharedOn: 'Oct 13, 2023 at 08:05 am', reshared: '10 items', status: 'Rejected', comments: 'The high-waisted cut and gentle flare at the bottom' },
  { id: 274, name: 'Chieko Chute', sharedOn: 'Feb 21, 2023 at 03:05 pm', reshared: '7 items', status: 'Added', comments: 'Give a flattering silhouette, making them perfect for both ca...' },
  { id: 994, name: 'Darcel Ballentine', sharedOn: 'Aug 3, 2023 at 12:10 am', reshared: '3 items', status: 'Added', comments: 'Pair with a fitted blouse for a day at the office or a relaxed...' },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-black">Welcome back, Hamza!</h1>
          <div className="flex space-x-4">
          </div>
        </div>

        {/* Metrics */}
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

        {/* Charts */}
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

        {/* Activity Log and Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
        </div>

        {/* Data Table */}
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
      </main>
    </div>
  )
}