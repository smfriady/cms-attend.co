import profileIcon from "../assets/janu.png";
import TableAttendance from "../components/TableAttendance";
const Attendance = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Attendance</h2>
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
        <h3 className="py-2">Table Information</h3>
        <TableAttendance />
      </div>
    </>
  );
};
export default Attendance;
