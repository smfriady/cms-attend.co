import { Table, Card, Form, Pagination } from "react-bootstrap";
import { Search, Funnel } from "react-bootstrap-icons";
const TableAttendance = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between py-2 pb-3">
            <div className="d-flex">
              <Search className="d-flex mt-2 mx-2" style={{ fontSize: 20 }} />
              <div style={{ width: 160 }}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search by name"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex">
              <Funnel className="d-flex mt-2 mx-2" style={{ fontSize: 24 }} />
              <div style={{ width: 160 }}>
                <Form.Select aria-label="Default select example">
                  <option selected>Type</option>
                  <option value="marketing">Attend</option>
                  <option value="engineer">Abcent</option>
                  <option value="auditor">Paid Leave</option>
                  <option value="auditor">Permit</option>
                  <option value="auditor">Sick</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Check in</th>
                <th>Check out</th>
                <th>Type</th>
                <th>Attachment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Muhammad Januar</td>
                <td>Engineer</td>
                <td>Jr. Engineer</td>
                <td>08:43</td>
                <td>17:12</td>
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
                    Attend
                  </span>
                </td>
                <td>image.png</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Muhammad Januar</td>
                <td>Engineer</td>
                <td>Sr. Engineer</td>
                <td>-:-</td>
                <td>-:-</td>
                <td>
                  <span
                    style={{
                      backgroundColor: "#F96666",
                      textAlign: "center",
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    className="py-1 px-2"
                  >
                    Abcent
                  </span>
                </td>
                <td>No Attachment</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Muhammad Januar</td>
                <td>Marketing</td>
                <td>Marketing Suvervisor</td>
                <td>08:52</td>
                <td>18:32</td>
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
                    Attend
                  </span>
                </td>
                <td>image.png</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Muhammad Januar</td>
                <td>Management</td>
                <td>Branch Manager</td>
                <td>-:-</td>
                <td>-:-</td>
                <td>
                  <span
                    style={{
                      backgroundColor: "#FDFF00",
                      textAlign: "center",
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    className="py-1 px-2"
                  >
                    Paid Leave
                  </span>
                </td>
                <td>No Attachment</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Muhammad Januar</td>
                <td>Marketing</td>
                <td>Account Executive</td>
                <td>-:-</td>
                <td>-:-</td>
                <td>
                  <span
                    style={{
                      backgroundColor: "#4D96FF",
                      textAlign: "center",
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    className="py-1 px-2"
                  >
                    Sick
                  </span>
                </td>
                <td>Medical Certificate</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Muhammad Januar</td>
                <td>Marketing</td>
                <td>Account Executive</td>
                <td>07:42</td>
                <td>15:12</td>
                <td>
                  <span
                    style={{
                      backgroundColor: "#839AA8",
                      textAlign: "center",
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    className="py-1 px-2"
                  >
                    Permit
                  </span>
                </td>
                <td>No Attachment</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-end pt-2">
            <Pagination size="sm">
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
            </Pagination>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default TableAttendance;
