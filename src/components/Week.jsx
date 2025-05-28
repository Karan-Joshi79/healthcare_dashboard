import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './Week.css';

const data = [
  { day: 'Mon', gray: 30, cyan: 50, purple: 40 },
  { day: 'Tues', gray: 20, cyan: 60, purple: 35 },
  { day: 'Wed', gray: 25, cyan: 45, purple: 50 },
  { day: 'Thurs', gray: 30, cyan: 55, purple: 42 },
  { day: 'Fri', gray: 28, cyan: 60, purple: 47 },
  { day: 'Sat', gray: 22, cyan: 48, purple: 36 },
  { day: 'Sun', gray: 26, cyan: 53, purple: 38 },
];

const WeeklyChart = () => {
  return (
    <div className="activity-chart">
      <div className="week">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-sub">3 appointments this week</p>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
          barCategoryGap={10}
          barGap={2}
        >
          <CartesianGrid stroke="#e0e6ed" strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10, fill: '#4c4c4c' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ fontSize: '10px', borderRadius: '6px' }}
            labelStyle={{ color: '#333', fontWeight: 500 }}
          />
          <Bar dataKey="gray" fill="#bfc7d1" barSize={4} radius={[4, 4, 0, 0]} />
          <Bar dataKey="cyan" fill="#0ee6f0" barSize={4} radius={[4, 4, 0, 0]} />
          <Bar dataKey="purple" fill="#4c49d6" barSize={4} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
