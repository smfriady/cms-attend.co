import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormEmployee = () => {
  return (
    <>
      <div className="content">
        <h2>Form Add Employee</h2>
        <hr />
        <div className="pt-4">
          <Form>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>NIK</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter NIK number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Education</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Education"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <div>
                <Form.Group className="mb-3" style={{ width: 520 }}>
                  <Form.Label>Department</Form.Label>
                  <Form.Select>
                    <option selected>Select Department</option>
                    <option value="1">Marketing</option>
                    <option value="2">Engineering</option>
                    <option value="3">Management</option>
                    <option value="4">Finance</option>
                    <option value="5">HR</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div>
                <Form.Group className="mb-3" style={{ width: 520 }}>
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: 520 }}
                  >
                    <option selected>Select Role</option>
                    <option value="1">Branch Manager</option>
                    <option value="2">Marketing Supervisor</option>
                    <option value="3">Account Executive</option>
                    <option value="4">Chief Engineering</option>
                    <option value="5">Sr. Engineer</option>
                    <option value="6">Jr. Engineer</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 332 }}>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control type="number" placeholder="In Rupiah" required />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 332 }}>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Education"
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="formFile"
                className="mb-3"
                style={{ width: 332 }}
              >
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="d-flex gap-2 justify-content-end px-5 py-2">
              <Button variant="primary" type="submit">
                Add Employee
              </Button>
              <Link to="/employees">
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default FormEmployee;
