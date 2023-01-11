import { createBrowserRouter, redirect } from "react-router-dom";

import SidebarLayout from "../layouts/SidebarLayout";
import Dashboard from "../views/Dashboard";
import Employees from "../views/Employees";
import Login from "../views/Login";
import Attendance from "../views/Attendance";
import SalariesView from "../views/Salaries";

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
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/salaries",
        element: <SalariesView />,
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
