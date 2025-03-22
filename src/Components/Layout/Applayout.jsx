
import Sidebar from "./UI/Sidebar/Sidebar";
import Header from "./UI/Header/Header";
import "./Applayout.css";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (

    <>
      <Sidebar />
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>

  );
}

export default AppLayout;
