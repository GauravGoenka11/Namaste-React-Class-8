import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/ProfileClass.js";

//CreateBrowserRouter is Routeruse for routing
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ],
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>)