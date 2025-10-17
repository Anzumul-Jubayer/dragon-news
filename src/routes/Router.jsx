import React from 'react';
import { createBrowserRouter } from "react-router";
import HLayout from '../layouts/HLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HLayout></HLayout>
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