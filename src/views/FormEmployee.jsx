import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { fetchDepartments } from "../store/actions/actionDepartments";
import { fetchRoles } from "../store/actions/actionRoles";
import { createEmployees } from "../store/actions/actionEmployees";

const FormEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    nik: "",
    education: "",
    department_id: 0,
    role_id: 0,
    base_salary: 0,
    birth_date: "",
    img_profile: "",
  });

  const departments = useSelector(
    (state) => state.departmentReducer.departments
  );
  const roles = useSelector((state) => state.roleReducer.roles);

  const handleChange = (e) => {
    let newInput = { ...inputValue, [e.target.name]: e.target.value };
    setInputValue(newInput);
  };

  const handleFiles = (e) => {
    let newInput = { ...inputValue, img_profile: e.target.files[0] };
    setInputValue(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployees(inputValue))
      .then(() => navigate("/employees"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(fetchDepartments());
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <h2>Form Add Employee</h2>
        <hr />
        <div className="pt-4">
          <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  name="first_name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  name="last_name"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  name="password"
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
                  onChange={handleChange}
                  name="nik"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Education</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Education"
                  onChange={handleChange}
                  name="education"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <div>
                <Form.Group className="mb-3" style={{ width: 520 }}>
                  <Form.Label>Department</Form.Label>
                  <Form.Select onChange={handleChange} name="department_id">
                    <option selected disabled>
                      Select Department
                    </option>
                    {departments.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </div>
              <div>
                <Form.Group className="mb-3" style={{ width: 520 }}>
                  <Form.Label>Role</Form.Label>
                  <Form.Select onChange={handleChange} name="role_id">
                    <option selected disabled>
                      Select Role
                    </option>
                    {roles.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 332 }}>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="In Rupiah"
                  onChange={handleChange}
                  name="base_salary"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 332 }}>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Birthdate"
                  onChange={handleChange}
                  name="birth_date"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 332 }}>
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFiles}
                  name="img_profile"
                />
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
