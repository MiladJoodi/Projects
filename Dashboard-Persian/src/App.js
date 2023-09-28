import "./App.css";
import Home from "./pages/Home/Home";
import UserList from "./pages/Users/UserList";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Exercise from "./pages/exercise/Exercise";
import { useEffect, useState } from "react";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
