import React from "react";
import "./Home.css";
import Feature from "./../../components/Features/Feature";
import Chart from "./../../components/Chart/Chart";
import WidgetSm from "./../../components/WidgetSm/WidgetSm";
import WidgetLg from "./../../components/WidgetLg/WidgetLg";
import { xAxisData } from "../../datas"

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="نمودار فروش ماهیانه" data={xAxisData} dataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
