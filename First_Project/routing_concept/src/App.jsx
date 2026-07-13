import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./router/MainLayout";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Service = lazy(() => import("./components/Service"));
const Product = lazy(() => import("./components/Product"));
import Error from "./components/Error";
import Loading from "./components/Loading";

import { Suspense } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
