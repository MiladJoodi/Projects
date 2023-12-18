import React from "react";
import "./Home.css";
import SecondDashboard from "../../Components/SecondDashboard";
import QuickMenu from "../../Components/QuickMenu";
import MonthlyReport from "../../Components/MonthlyReport";

function Home() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <SecondDashboard />
          <QuickMenu />
          <MonthlyReport />
        </div>
      </div>
      </div>
  );
}

export default Home;

