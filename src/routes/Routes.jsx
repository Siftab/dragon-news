
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailsNews from "../Pages/DetailsNews";
import PrivateRouter from "./PrivateRouter";



const myRoutes= createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
            ,loader: ()=> fetch('/news.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/news/:news_id',
            element:<PrivateRouter><DetailsNews></DetailsNews></PrivateRouter>
        }
    ]

}])
export default myRoutes;