import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDepartments } from "../store/actions/actionDepartments";
import { fetchRoles } from "../store/actions/actionRoles";
import {
  detailEmployee,
  updateEmployee,
} from "../store/actions/actionEmployees";
import { Form, Button } from "react-bootstrap";

const EditEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const departments = useSelector(
    (state) => state.departmentReducer.departments
  );
  const roles = useSelector((state) => state.roleReducer.roles);
  const employee = useSelector((state) => state.employeesReducer.employee);

  const [inputValue, setInputValue] = useState({
    email: employee.email,
    img_profile: employee.img_profile,
  });
  console.log("inputValue", inputValue);

  const handleChange = (e) => {
    let newInput = { ...inputValue, [e.target.name]: e.target.value };
    setInputValue(newInput);
  };

  const handleFiles = (e) => {
    const file = e.target.files[0];
    if (file) {
      let newInput = { ...inputValue, img_profile: file };
      setInputValue(newInput);
    } else {
      let newInput = { ...inputValue, img_profile: employee.img_profile };
      setInputValue(newInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(inputValue, id))
      .then(() => navigate("/employees"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(fetchDepartments());
    dispatch(fetchRoles());
    dispatch(detailEmployee(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="content">
        <h2>Form Update Employee</h2>
        <hr />
        <div className="pt-4">
          <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between px-5">
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="first_name"
                  onChange={handleChange}
                  defaultValue={employee.first_name}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="last_name"
                  onChange={handleChange}
                  defaultValue={employee.last_name}
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
                  name="email"
                  onChange={handleChange}
                  defaultValue={employee.email}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Birthdate"
                  name="birth_date"
                  onChange={handleChange}
                  defaultValue={employee?.birth_date?.slice(0, 10)}
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
                  name="nik"
                  onChange={handleChange}
                  defaultValue={employee.nik}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Education</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Education"
                  name="education"
                  onChange={handleChange}
                  defaultValue={employee.education}
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between px-5">
              <div>
                <Form.Group className="mb-3" style={{ width: 520 }}>
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    onChange={handleChange}
                    name="department_id"
                    defaultValue={employee?.Department?.id}
                  >
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
                  <Form.Select
                    onChange={handleChange}
                    name="role_id"
                    defaultValue={employee?.Role?.id}
                  >
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
              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="In Rupiah"
                  name="base_salary"
                  onChange={handleChange}
                  defaultValue={employee.base_salary}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" style={{ width: 520 }}>
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFiles}
                  name="img_profile"
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-2 justify-content-end px-5 py-2">
              <Button variant="primary" type="submit">
                Update
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

export default EditEmployee;
