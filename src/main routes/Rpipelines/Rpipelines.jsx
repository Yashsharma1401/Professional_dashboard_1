import Header from "../../Components/Layout/UI/Header/Header";
import PipelineTable from "../../Components/Layout/UI/Pipelines/pipeline";
import Sidebar from "../../Components/Layout/UI/Sidebar/Sidebar";

export const Rcontact = () => {
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
                <PipelineTable />
            </div>
        </div>
        </div >
      );
}   // End of Dashboard Functional Component
export default Rcontact;