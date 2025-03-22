import React, { useState, useEffect } from "react";
import Header from "../../Components/Layout/UI/Header/Header";
import Gleaddashboard from "../../Components/Layout/UI/Project Dashboard/Gleaddashboard";
import Leaddashboard from "../../Components/Layout/UI/Project Dashboard/Leaddashboard";
import Llnewdev from "../../Components/Layout/UI/Project Dashboard/LLnewdev";
import Sidebar from "../../Components/Layout/UI/Sidebar/Sidebar";
import { FormatAlignJustify } from "@mui/icons-material";

export const Rcontact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update `isMobile` on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    height: "100vh",
    overflow: "hidden",
  };

  const contentStyle = {
    flex: 1,
    overflowY: "auto",
    padding: isMobile ? "12px" : "16px",
    marginLeft: isMobile ? "0px" : "80px",
    marginTop: isMobile ? "56px" : "0px", // To account for header on mobile
  };

  const dashboardWrapperStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "16px",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div style={contentStyle}>
          {/* Wrapper for Gleaddashboard and Llnewdev */}
          <div style={dashboardWrapperStyle}>
          <Leaddashboard /><Llnewdev />
          </div>
            <Gleaddashboard />
          {/* Leaddashboard below */}
          
        </div>
      </div>
    </div>
  );
};

export default Rcontact;
