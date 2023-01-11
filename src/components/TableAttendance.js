import { Card, Form, Table } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";
import formatDay from "../helpers/formateDay";
import formatTime from "../helpers/formatTime";

const TableAttendance = ({ data, setParams }) => {
  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setParams({ [name]: value, page: 0 });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between py-2 pb-3">
            <div className="d-flex">
              {/* <Search className="d-flex mt-2 mx-2" style={{ fontSize: 20 }} />
              <div style={{ width: 160 }}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Search by name" required />
                </Form.Group>
              </div> */}
            </div>
            <div className="d-flex">
              <Funnel className="d-flex mt-2 mx-2" style={{ fontSize: 24 }} />
              <div style={{ width: 160 }}>
                <Form.Select onChange={handleOnChange} name="filter">
                  <option value="all">All</option>
                  <option value="absent">Absent</option>
                  <option value="attendance">Attendance</option>
                  <option value="permit">Permit</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Tanggal</th>
                <th>Check in</th>
                <th>Check out</th>
                <th>Type</th>
                <th>Attachment</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.Employee.firstName}</td>
                  <td>{formatDay(item.checkInTime)}</td>
                  <td>{formatTime(item.checkInTime)}</td>
                  <td>{formatTime(item.checkOutTime)}</td>

                  <td>
                    <span
                      style={{
                        backgroundColor: "#9CFF2E",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                      className="py-1 px-2"
                    >
                      {item.attendanceType}
                    </span>
                  </td>
                  <td>image.png</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};
export default TableAttendance;
