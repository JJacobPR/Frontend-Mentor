import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import PlanetInfo, { planetLoader } from "./components/PlanetInfo/PlanetInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    children: [
      {
        path: "planets/:planetName",
        element: <PlanetInfo />,
        loader: planetLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
