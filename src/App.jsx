import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Metrics } from './components/Metrics';
import { Charts } from './components/Charts';
import { ActivityLog } from './components/ActivityLog';
import { Notifications } from './components/Notifications';
import { DataTable } from './components/DataTable';
import { tableColumns, tableData } from './data/mockData';


export default function App() {
  return (
    <main className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <h1>Welcome back, Hamza!</h1>
        </div>
        <Metrics />
        <Charts />
        <div className="grid-layout">
          <ActivityLog />
          <Notifications />
        </div>
        <DataTable columns={tableColumns} data={tableData} />
      </div>
    </main>
  );
}
