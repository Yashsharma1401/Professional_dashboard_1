import ActivityTable from "../../Components/Layout/UI/Activities/Activitiespage";
import Companies from "../../Components/Layout/UI/Companies/Companies";
import { Contact } from "../../Components/Layout/UI/Contacts/Contact";
import Header from "../../Components/Layout/UI/Header/Header";
import Lproject from "../../Components/Layout/UI/Project Dashboard/Lproject";
import Pproject from "../../Components/Layout/UI/Project Dashboard/Pproject";
import Sidebar from "../../Components/Layout/UI/Sidebar/Sidebar";

export const Dashboard = () => {    
     return (
        <div>
          <Sidebar />
          <div>
            <Header />
            <div className="outlet-container">
              <ActivityTable />
              <div className="d-flex">
              <Lproject className="w-75" /><Pproject className="w-25" />
              </div>
              <Contact />
              <Companies />
            </div>
          </div>
        </div>
      );
}   // End of Dashboard Functional Component
export default Dashboard;