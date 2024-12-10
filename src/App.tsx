import { DataTable } from './components/DataTable'
import { tableColumns, tableData } from './data/mockData'

export default function Home() {
  return (
    <main className="flex h-screen bg-white p-8 items-start justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Data Tables</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <DataTable columns={tableColumns} data={tableData} />
          <DataTable columns={tableColumns} data={tableData} />
        </div>
      </div>
    </main>
  )
}

