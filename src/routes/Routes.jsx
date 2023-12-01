
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";



const myRoutes= createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
    ]

}])
export default myRoutes;