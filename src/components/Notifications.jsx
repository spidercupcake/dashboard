import React from 'react';
import { Bell } from 'lucide-react';
import { notifications } from '../data/mockData';
import '../styles/Notifications.css'; // Import the CSS file

export const Notifications = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((item, index) => (
          <li key={index} className="notification-item">
            <Bell className="notification-icon" />
            <div className="notification-content">
              <p className="notification-message">{item.message}</p>
              <p className="notification-time">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
