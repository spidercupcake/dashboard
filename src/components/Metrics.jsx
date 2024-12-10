import React from 'react';
import '../styles/Metrics.css'; // Import the CSS file

export const Metrics = () => {
  return (
    <div className="metrics-container">
      <div className="metric-card">
        <div className="metric-label">Total Users</div>
        <div className="metric-value">1,234</div>
      </div>
      <div className="metric-card">
        <div className="metric-label">Active Projects</div>
        <div className="metric-value">56</div>
      </div>
      <div className="metric-card">
        <div className="metric-label">Monthly Revenue</div>
        <div className="metric-value">$45,678</div>
      </div>
      <div className="metric-card">
        <div className="metric-label">Task Completion Rate</div>
        <div className="metric-value">87%</div>
      </div>
    </div>
  );
};
