import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetView from "./views/PlanetView.jsx";
import HomeView from "./views/HomeView.jsx";
import PlanetInfo from "./components/PlanetInfo/PlanetInfo.jsx";
import planetLoader from "./components/loaders/planetLoader.js";
import "./main.css";

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  {
    path: "/planets",
    element: <PlanetView />,
    children: [
      {
        path: "planet/:planetName",
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
