import React from "react";
import "./Chart.css";
import xAxisData from "./../../datas";
import  {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
  return <div className="chart">
    <h3 className="chartTitle">{title}</h3>
    <ResponsiveContainer width="100%">
    <LineChart data={data}>
    <XAxis dataKey={dataKey} stroke="5550bd"/>
    </LineChart>
    </ResponsiveContainer>
  </div>
}
