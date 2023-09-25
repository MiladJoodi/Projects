import React from "react";
import "./Chart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Bar
} from 'recharts';

export default function Chart({ title, data, dataKey, grid, type }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data} style={{direction: 'rtl'}}>
          <XAxis dataKey="name" stroke="#5550bd" reversed={true} />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>

      {/* <ResponsiveContainer width="100%" aspect={4}>
        <ComposedChart data={data} style={{direction: 'rtl'}}>
          <XAxis dataKey="name" stroke="#5550bd" reversed={true} />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Bar dataKey={dataKey} barSize={20} fill="#413ea0" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </ComposedChart>
      </ResponsiveContainer> */}
    </div>
  );
}
