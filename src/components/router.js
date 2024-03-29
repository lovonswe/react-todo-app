import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/Root";
import Error from "../pages/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);