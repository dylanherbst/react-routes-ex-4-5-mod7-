// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
import { Route, Routes } from "react-router-dom";
import Homepage from "../PAGES/HomePage";
import AboutPage from "../PAGES/About Page";
import DashboardPage from "../PAGES/DashBoardPage";
import { DashboardMessages, DashboardTasks } from "../PAGES/DashBoardPage";
import PageNotFound from "../PAGES/Page Not Found";
import LoginForm from "../PAGES/login form";


function AppRoutes(props) {

    return (
    <Routes>
        
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    <Route path='login' element={<LoginForm />} />
    
    {/* nested routes, matches on /dash/tasks etc */}

    <Route path="dash" element={<DashboardPage {...props} />}>
    <Route path="messages" element={<DashboardMessages />} />
    <Route path="tasks" element={<DashboardTasks />} />
    </Route>
    


     <Route path='/about' element={<AboutPage {...props} />} />
    
   
    <Route path="*" element={<PageNotFound />} /> 
     {/* special route to handle if none of the above match */}
    </Routes>
    )
    }
    
    export default AppRoutes;
    // Name this file AppRoutes.jsx and store in new folder 'routes'