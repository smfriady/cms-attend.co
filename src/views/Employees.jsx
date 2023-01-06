import TableEmployees from "../components/TableEmployees";
import profileIcon from "../assets/janu.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Employees</h2>
          <div className="d-flex gap-2">
            <img
              src={profileIcon}
              alt="profile"
              width="44"
              height="44"
              className="profile-icon"
            />
            <div className="mt-1">
              <p style={{ fontSize: 12 }}>
                Hello, Muhammad Januar <br /> User{" "}
                <span style={{ color: "#3e5ba6" }}>Admin</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between py-3">
          <h3>Table Information</h3>
          <Link to="/add-employee">
            <Button type="button" variant="outline-primary">
              + New Employee
            </Button>
          </Link>
        </div>
        <TableEmployees />
      </div>
    </>
  );
};
export default Employees;
