import { Outlet } from "react-router-dom";
import SidebarNav from "../components/SidebarNav";
import { ModalProvider } from "../context/modalContext";

const SidebarLayout = () => {
  return (
    <ModalProvider>
      <SidebarNav />
      <Outlet />
    </ModalProvider>
  );
};
export default SidebarLayout;
