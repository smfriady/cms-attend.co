import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import SidebarLayout from "../layouts/SidebarLayout";
import Dashboard from "../views/Dashboard";

const router = createBrowserRouter([
  {
    element: <SidebarLayout />,
    loader: async () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;