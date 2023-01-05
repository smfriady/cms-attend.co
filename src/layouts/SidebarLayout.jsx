import { Outlet } from "react-router-dom";
import SidebarNav from "../components/SidebarNav";

const SidebarLayout = () => {
  return (
    <>
      <SidebarNav />
      <Outlet />
    </>
  );
};
export default SidebarLayout;
