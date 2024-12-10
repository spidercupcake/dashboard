import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { projectStatus, revenueOverTime, userGrowth } from '../data/mockData';
import '../styles/Charts.css'; // Import the CSS file

export const Charts = () => {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h2 className="chart-title">Project Status</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={projectStatus}>
            <XAxis dataKey="name" tick={{ fill: '#000000' }} />
            <YAxis tick={{ fill: '#000000' }} />
            <Tooltip />
            <Bar dataKey="value" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-card">
        <h2 className="chart-title">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={revenueOverTime}>
            <XAxis dataKey="name" tick={{ fill: '#000000' }} />
            <YAxis tick={{ fill: '#000000' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#000000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-card">
        <h2 className="chart-title">User Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={userGrowth}>
            <XAxis dataKey="name" tick={{ fill: '#000000' }} />
            <YAxis tick={{ fill: '#000000' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#000000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
