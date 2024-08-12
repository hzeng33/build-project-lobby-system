import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Events/Game.jsx";
import Lobby from "./Lobby/index.jsx";

const router = createBrowserRouter([
  { path: "/tic-tac-toe", element: <Game /> },
  { path: "/", element: <Lobby /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
