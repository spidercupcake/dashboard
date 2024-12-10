import React from 'react';
import { LayoutDashboard, FileText, Activity, Settings } from 'lucide-react';
import '../styles/Sidebar.css'; // Import the CSS file

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">LOGO</div>
      <nav className="nav-links">
        <a href="#" className="nav-item active">
          <LayoutDashboard className="nav-icon" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <FileText className="nav-icon" />
          <span>Management</span>
        </a>
        <a href="#" className="nav-item">
          <FileText className="nav-icon" />
          <span>Reports</span>
        </a>
        <a href="#" className="nav-item">
          <Activity className="nav-icon" />
          <span>Activity Log</span>
        </a>
        <a href="#" className="nav-item">
          <Settings className="nav-icon" />
          <span>Settings</span>
        </a>
      </nav>
      <div className="profile-section">
        <div className="profile">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="User"
            className="profile-img"
          />
          <span className="profile-name">Hamza</span>
        </div>
      </div>
    </aside>
  );
};
