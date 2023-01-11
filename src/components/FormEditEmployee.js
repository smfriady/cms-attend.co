import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

import { ModalContext } from "../context/modalContext";
import formatDate from "../helpers/formatDate";
import { getDepartments } from "../services/department";
import { getRoles } from "../services/role";
import { editEmployee } from "../stores/actions/employees";

const FormEditEmployee = ({ employee }) => {
  let { handleModal } = useContext(ModalContext);

  return (
    <Button
      size="sm"
      variant="outline-primary"
      onClick={() => handleModal(<FormEdit employee={employee} />)}
    >
      <Pencil />
    </Button>
  );
};

export default FormEditEmployee;

function FormEdit({ employee }) {
  let { handleModal } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    id: employee.id,
    firstName: employee.firstName ?? "",
    lastName: employee.lastName ?? "",
    nik: employee.nik ?? "",
    education: employee.education ?? "",
    imgProfile: employee.imgProfile ?? "",
    birthDate: employee.birthDate ?? "2000-01-01",
    email: employee.email ?? "",
    baseSalary: employee.baseSalary ?? "",
    roleId: employee.Role.id ?? "select",
    departmentId: employee.Department.id ?? "select",
  });
  const [departmens, setDepartments] = useState({ data: [], isLoading: false });
  const [roles, setRoles] = useState({ data: [], isLoading: false });

  const dispatch = useDispatch();

  const [newImg, setNewImg] = useState({ newImage: "" });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (evt) => {
    const { files, name } = evt.target;
    if (files[0]) {
      setNewImg({ ...newImg, [name]: files });
    } else {
      setNewImg({ ...newImg, newImage: "" });
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
    let payload;

    if (newImg.newImage) {
      payload = { ...form, imgProfile: newImg.newImage };
    } else {
      payload = { ...form };
    }
    setLoading(true);
    console.log(payload);
    dispatch(editEmployee(payload))
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
        <Col className="mx-auto text-center">
          <img src={form.imgProfile} alt="profile" style={{ width: 200, height: 200 }} />
        </Col>
      </Row>
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
              value={formatDate(form.birthDate)}
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
              <Form.Label>Select Role</Form.Label>
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
          <Form.Group className="mb-3">
            <Form.Label>Edit Photo</Form.Label>
            <Form.Control
              type="file"
              name="newImage"
              placeholder="Image Profile"
              defaultValue={newImg.newImage}
              onChange={handleFile}
            />
          </Form.Group>
        </Col>

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
