import React from 'react';
import { createBrowserRouter } from "react-router";
import HLayout from '../layouts/HLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HLayout></HLayout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:'/category-news/:id',
        element:<CategoryNews></CategoryNews>,
        loader:()=>fetch('/news.json'),
        hydrateFallbackElement:<p>Loading</p>
      }
    ]
  },
  {
    path: "/auth",
    element: <div>Authentication Layout </div>
  },
  {
    path: "/news",
    element: <div>News Layout </div>
  },
  {
    path: "/*",
    element: <div>Error-404 </div>
  },
])

export default router;