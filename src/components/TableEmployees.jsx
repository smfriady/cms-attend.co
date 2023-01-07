import { Table, Card, Form, Button, Pagination } from "react-bootstrap";
import { Funnel, Search, Eye, Pencil, Trash3 } from "react-bootstrap-icons";

const TableEmployees = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between py-2 pb-3">
            <div className="d-flex">
              <Search className="d-flex mt-2 mx-2" style={{ fontSize: 20 }} />
              <div style={{ width: 240 }}>
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
              <div style={{ width: 240 }}>
                <Form.Select aria-label="Default select example">
                  <option selected>Department</option>
                  <option value="marketing">Marketing</option>
                  <option value="engineer">Engineer</option>
                  <option value="auditor">Auditor</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Muhammad Januar</td>
                <td>januaricks@gmail.com</td>
                <td>Engineer</td>
                <td>Jr. Engineer</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-primary">
                      <Eye style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-warning">
                      <Pencil style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <Trash3 style={{ color: "black" }} />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Muhammad Januar</td>
                <td>januaricks@gmail.com</td>
                <td>Engineer</td>
                <td>Sr. Engineer</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-primary">
                      <Eye style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-warning">
                      <Pencil style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <Trash3 style={{ color: "black" }} />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Muhammad Januar</td>
                <td>januaricks@gmail.com</td>
                <td>Marketing</td>
                <td>Marketing Suvervisor</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-primary">
                      <Eye style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-warning">
                      <Pencil style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <Trash3 style={{ color: "black" }} />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Muhammad Januar</td>
                <td>januaricks@gmail.com</td>
                <td>Management</td>
                <td>Branch Manager</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-primary">
                      <Eye style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-warning">
                      <Pencil style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <Trash3 style={{ color: "black" }} />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Muhammad Januar</td>
                <td>januaricks@gmail.com</td>
                <td>Marketing</td>
                <td>Account Executive</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-primary">
                      <Eye style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-warning">
                      <Pencil style={{ color: "black" }} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <Trash3 style={{ color: "black" }} />
                    </Button>
                  </div>
                </td>
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
export default TableEmployees;
