import React from 'react';
import { activityLog } from '../data/mockData';
import '../styles/ActivityLog.css'; // Import the CSS file

export const ActivityLog = () => {
  return (
    <div className="activity-log">
      <h2 className="activity-log-title">Activity Log</h2>
      <ul className="activity-log-list">
        {activityLog.map((item, index) => (
          <li key={index} className="activity-log-item">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt={item.user}
              className="activity-log-avatar"
            />
            <div className="activity-log-details">
              <p className="activity-log-user">
                {item.user} {item.action}
              </p>
              <p className="activity-log-time">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
