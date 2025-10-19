import React from "react";
import { createBrowserRouter } from "react-router";
import HLayout from "../layouts/HLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HLayout></HLayout>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <p></p>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category-news/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <p></p>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <p></p>,
  },
  {
    path: "/*",
    element: <div>Error-404 </div>,
  },
]);

export default router;
