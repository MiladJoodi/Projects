import React from "react";
import "./Home.css";
import Feature from "./../../components/features/Feature";
import Chart from "./../../components/chart/Chart";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import { xAxisData } from "../../datas";

export default function Home() {
  return (
    <div className="Home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
