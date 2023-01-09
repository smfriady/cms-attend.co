import { useDispatch } from "react-redux";
import {
  deleteEmployees,
  detailEmployee,
} from "../store/actions/actionEmployees";
import { Modal, Button } from "react-bootstrap";
import { ExclamationDiamond } from "react-bootstrap-icons";
import { currencyFormatter } from "../tools/formatCurrency";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ModalDetail = ({ show, handleClose, item }) => {
  const {
    img_profile,
    first_name,
    last_name,
    nik,
    education,
    birth_date,
    email,
    base_salary,
    Role,
    Department,
  } = item || "";

  const data = [
    {
      title: "Employee ID:",
      value: nik,
    },
    {
      title: "Birthdate:",
      value: birth_date?.slice(0, 10),
    },
    {
      title: "Education:",
      value: education,
    },
    {
      title: "Email:",
      value: email,
    },
    {
      title: "Role:",
      value: Role?.name,
    },
    {
      title: "Base Salary:",
      value: currencyFormatter.format(base_salary).replace(/\.00$/, ""),
    },
  ];
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex gap-2 mx-2 my-2">
            <img
              src={img_profile}
              alt="profile"
              width="44"
              height="44"
              className="profile-icon"
            />
            <div>
              <p>
                {first_name} {last_name} <br />
                <p style={{ fontSize: 12 }} className="text-muted">
                  {Department?.name}
                </p>
              </p>
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <div
                className="d-flex justify-content-between mx-5 px-3"
                key={index}
              >
                <p>{item.title}</p>
                <p>{item.value}</p>
              </div>
            );
          })}
          <div className="d-flex justify-content-end mt-3 mx-2">
            <Button variant="secondary" onClick={handleClose} size="sm">
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ModalDelete = ({ show, handleClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEmployees(id))
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div style={{ color: "red" }}>
            <h4>Delete Employee</h4>
          </div>
          <div>
            <ExclamationDiamond style={{ color: "red", fontSize: 20 }} /> Are
            you sure want to delete this?
          </div>
          <div className="d-flex justify-content-end gap-2 pt-3">
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete(id);
                handleClose();
              }}
            >
              Delete
            </Button>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ModalEdit = ({ show, handleClose, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailEmployee(id));
  }, [dispatch, id]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <h4 className="text-warning">Update Employee</h4>
          </div>
          <div>
            <ExclamationDiamond style={{ color: "red", fontSize: 20 }} /> Are
            you sure want to update this employee?
          </div>
          <div className="d-flex justify-content-end gap-2 pt-3">
            <Link to={`/edit-employee/${id}`}>
              <Button variant="warning" size="sm">
                Update
              </Button>
            </Link>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
