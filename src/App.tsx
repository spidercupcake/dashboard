import { Sidebar } from './components/Sidebar'
import { Metrics } from './components/Metrics'
import { Charts } from './components/Charts'
import { ActivityLog } from './components/ActivityLog'
import { Notifications } from './components/Notifications'
import { DataTable } from './components/DataTable'

export default function App() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-black">Welcome back, Hamza!</h1>
        </div>
        <Metrics />
        <Charts />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ActivityLog />
          <Notifications />
        </div>
        <DataTable />
      </main>
    </main>
  )
}

