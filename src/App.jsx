import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import "./App.css" ;
import { Children } from 'react';
import { Errorpage } from './Pages/Errorpage';
import  Applayout  from './Components/Layout/Applayout';
import { Dashboard } from './main routes/Dashboard/Dashboard';
import Rcontact from './main routes/Rcontact/Rcontact';
import Ractivities from './main routes/Ractivities/Ractivities';
import Rcompanies from './main routes/Rcompanies/Rcompanies';
import Rpipelines from './main routes/Rpipelines/Rpipelines'; 
import Rproject from './main routes/Rproject/Rproject';
import Rleaddashboard from './main routes/Rleaddashboard/Rleaddashboard'

export const router = createBrowserRouter([
  {
    Path : "/",
    Element : <Applayout />,
    errorElement : <Errorpage />,
    children:[
      {
        path : "/",
        element : <Dashboard />
      },
      {
        path : "/contacts",
        element : <Rcontact />
      },
      {
        path : "/Activities",
        element : <Ractivities />
      },
      {
        path : "/companies",
        element : <Rcompanies />
      },
      {
        path : "/pipelines",
        element : <Rpipelines />
      },
      {
        path : "/projectdashboard",
        element : <Rproject />
      },
      {
        path : "/leaddash",
        element :<Rleaddashboard />
      },
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App ;