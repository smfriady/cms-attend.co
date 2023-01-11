import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { ModalContext } from "../context/modalContext";
import { getDepartments } from "../services/department";
import { createEmployee } from "../stores/actions/employees";
import { getRoles } from "../services/role";

const FormAddEmployee = () => {
  let { handleModal } = useContext(ModalContext);

  return (
    <Button
      type="button"
      variant="outline-primary"
      onClick={() => handleModal(<FormCreateEmployee />)}
    >
      + New Employee
    </Button>
  );
};

export default FormAddEmployee;

function FormCreateEmployee() {
  let { handleModal } = useContext(ModalContext);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nik: "",
    education: "",
    imgProfile: "",
    birthDate: "",
    email: "",
    password: "",
    baseSalary: "",
    roleId: "select",
    departmentId: "select",
  });

  const [departmens, setDepartments] = useState({ data: [], isLoading: false });
  const [roles, setRoles] = useState({ data: [], isLoading: false });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (evt) => {
    const { files, name } = evt.target;
    if (files[0]) {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, imgProfile: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.roleId === "select") {
      toast.error("role is required");
    }
    if (form.departmentId === "select") {
      toast.error("department is required");
    }
    setLoading(true);
    dispatch(createEmployee(form))
      .then(({ message }) => {
        setLoading(false);
        toast.success(message);
        handleModal();
      })
      .catch(({ message }) => {
        setLoading(false);
        toast.error(message);
      });
  };

  useEffect(() => {
    const fetchDepartment = async () => {
      setDepartments({ isLoading: true });
      const data = await getDepartments();
      setDepartments({
        data,
        isLoading: false,
      });
    };

    const fetchRoles = async () => {
      setRoles({ isLoading: true });
      const data = await getRoles();
      setRoles({
        data,
        isLoading: false,
      });
    };

    fetchDepartment();
    fetchRoles();
  }, []);

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Row>
        <Col xl={6}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="off"
              value={form.firstName}
              className="form-control"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              autoComplete="off"
              value={form.lastName}
              className="form-control"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nik</Form.Label>
            <input
              type="number"
              name="nik"
              placeholder="Nik Employee"
              autoComplete="off"
              value={form.nik}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Education</Form.Label>
            <input
              type="text"
              name="education"
              placeholder="Education Employee"
              autoComplete="off"
              value={form.education}
              className="form-control"
              onChange={handleOnChange}
            />
          </Form.Group>
          {!departmens.isLoading ? (
            <Form.Group className="mb-3">
              <Form.Label>Select Department</Form.Label>

              <select
                name="departmentId"
                value={form.departmentId}
                onChange={handleOnChange}
                className="form-control"
              >
                <option value="select">Select Department</option>
                {departmens.data.map((el, i) => (
                  <option value={el.id} key={i}>
                    {el.name}
                  </option>
                ))}
              </select>
            </Form.Group>
          ) : null}
        </Col>

        <Col xl={6}>
          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <input
              type="date"
              name="birthDate"
              autoComplete="off"
              value={form.birthDate}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={form.email}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={form.password}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Base Salary</Form.Label>
            <input
              type="number"
              name="baseSalary"
              placeholder="Base Salary per Hourss"
              autoComplete="off"
              value={form.baseSalary}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>
          {!roles.isLoading ? (
            <Form.Group className="mb-3">
              <Form.Label>Select Department</Form.Label>
              <select
                name="roleId"
                value={form.roleId}
                onChange={handleOnChange}
                className="form-control"
              >
                <option value="select">Select Role</option>
                {roles.data.map((el, i) => (
                  <option value={el.id} key={i}>
                    {el.name}
                  </option>
                ))}
              </select>
            </Form.Group>
          ) : null}
        </Col>
        <Form.Group className="mb-3">
          <Form.Label>Image Profile</Form.Label>
          <input
            className="form-control"
            type="file"
            name="imgProfile"
            placeholder="Image Profile"
            defaultValue={form.imgProfile}
            onChange={handleFile}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          className="text-center mx-auto"
          style={{ width: 150 }}
        >
          Submit
        </Button>
      </Row>
    </Form>
  );
}
