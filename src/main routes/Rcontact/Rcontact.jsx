import { Contact } from "../../Components/Layout/UI/Contacts/Contact";
import Header from "../../Components/Layout/UI/Header/Header";
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
                <Contact />
            </div>
        </div>
        </div >
      );
}   // End of Dashboard Functional Component
export default Rcontact;