
import Header from "../../Components/Layout/UI/Header/Header";
import Sidebar from "../../Components/Layout/UI/Sidebar/Sidebar";
import Companies from "../../Components/Layout/UI/Companies/Companies";

export const Ractivities = () => {
    const style = {
        color: "red",
        overflowY: "auto",
        padding: "16px",
        marginLeft: "80px"
    };
    return (
        <div>
            <Sidebar />
            <div>
                <Header />
                <div style={style}>
                <Companies />
            </div>
        </div>
        </div >
      );
}   // End of Dashboard Functional Component
export default Ractivities;