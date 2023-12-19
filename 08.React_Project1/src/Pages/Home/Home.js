import React from "react";
import "./Home.css";
import SecondDashboard from "../../Components/SecondDashboard";
import QuickMenu from "../../Components/QuickMenu";
import MonthlyReport from "../../Components/MonthlyReport";
import Reports from "../../Components/Reports";

function Home() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <SecondDashboard />
          <QuickMenu />
          <MonthlyReport />
          <Reports />
        </div>
      </div>
      </div>
  );
}

export default Home;

