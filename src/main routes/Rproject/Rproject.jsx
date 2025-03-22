// Ractivities.jsx
import Header from "../../Components/Layout/UI/Header/Header";
import Cproject from "../../Components/Layout/UI/Project Dashboard/Cproject";
import Lproject from "../../Components/Layout/UI/Project Dashboard/Lproject";
import Pproject from "../../Components/Layout/UI/Project Dashboard/Pproject";
import Sidebar from "../../Components/Layout/UI/Sidebar/Sidebar";

export const Ractivities = () => {
  // Responsive Styles
  const style = {
    color: "red",
    overflowY: "auto",
    padding: "16px",
    marginLeft: "80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    transition: "all 0.3s ease-in-out",
  };
  const linestyle = {
    color: "red",
    overflowY: "auto",
    width: "94%",
    padding: "16px",
    marginLeft: "80px",
    transition: "all 0.3s ease-in-out",
  };

  // Wrapper Style for responsive sidebar and content
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };

  // Content Style with padding for mobile
  const contentStyle = {
    flexGrow: 1,
    padding: "10px",
    transition: "margin-left 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <Header />
        <div style={style}>
          <Cproject />
          <Pproject />
        </div>
        <div style={linestyle}>
            <Lproject />
        </div>
      </div>
    </div>
  );
};

export default Ractivities; // End of Dashboard Functional Component
