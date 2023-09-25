import React from "react";
import "./Home.css";
import Feature from "./../../components/Features/Feature";
import Chart from "./../../components/Chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart></Chart>
    </div>
  );
}
