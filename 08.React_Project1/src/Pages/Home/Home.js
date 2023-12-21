import React from "react";
import "./Home.css";
import SecondDashboard from "../../Components/SecondDashboard";
import QuickMenu from "../../Components/QuickMenu";
import MonthlyReport from "../../Components/MonthlyReport";
import Reports from "../../Components/Reports";
import Chat from "../../Components/Chat";
import Userlist from "../../Components/Userlist";
import LastestOrder from "../../Components/LastestOrder";

function Home() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <SecondDashboard />
          <QuickMenu />
          <MonthlyReport />
          <div className="row">
            <div class="col-md-8">
              <Reports />
              <div className="row">
                <Chat />
                <Userlist />
              </div>
            <LastestOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
