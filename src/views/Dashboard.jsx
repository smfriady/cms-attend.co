import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../components/Chart";
import Cards from "../components/Cards";
import profileIcon from "../assets/janu.png";
import { fetchEmployees } from "../store/actions/actionEmployees";
const Homepage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeesReducer.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Dashboard</h2>
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
        <div className="py-2" style={{ marginLeft: 24 }}>
          <Cards employees={employees} />
        </div>
        <div className="py-2">
          <h3>Information of Attendance</h3>
          <Chart />
        </div>
      </div>
    </>
  );
};
export default Homepage;
