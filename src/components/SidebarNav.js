import {
  BoxArrowLeft,
  CalendarCheckFill,
  CreditCardFill,
  PeopleFill,
  Speedometer,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logoIcon from "../assets/logo.svg";

const SidebarNav = () => {
  const sidebarRoute = [
    {
      title: "Dashboard",
      icon: <Speedometer />,
      link: "/",
    },
    {
      title: "Employees",
      icon: <PeopleFill />,
      link: "/employees",
    },
    {
      title: "Attendance",
      icon: <CalendarCheckFill />,
      link: "/attendance",
    },
    {
      title: "Salaries",
      icon: <CreditCardFill />,
      link: "/salaries",
    },
  ];
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <>
      <div className="sidebar">
        <div className="d-flex justify-content-center align-items-center pt-3">
          <Link to="/">
            <img src={logoIcon} alt="logo" width="104" />
          </Link>
        </div>
        <hr style={{ color: "#fff" }} />
        <div>
          <ul className="sidebar-nav">
            {sidebarRoute.map((item, index) => {
              return (
                <Link className="link" key={index} to={item.link}>
                  <li className="d-flex gap-2 pb-4">
                    <div className="nav-link">{item.icon}</div>
                    <div className="nav-link">{item.title}</div>
                  </li>
                </Link>
              );
            })}
            <Link className="link" onClick={handleLogout}>
              <li className="d-flex gap-2 pb-4">
                <div className="nav-link">
                  <BoxArrowLeft />
                </div>
                <div className="nav-link">Logout</div>
              </li>
            </Link>
          </ul>
        </div>
        <div style={{ paddingTop: 308 }}>
          <hr style={{ color: "#fff" }} />
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
