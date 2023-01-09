import { useSelector, useDispatch } from "react-redux";
import { Table, Card, Form, Button, Pagination } from "react-bootstrap";
import { Funnel, Search, Eye, Pencil, Trash3 } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { fetchEmployees } from "../store/actions/actionEmployees";
import { ModalDetail, ModalDelete, ModalEdit } from "./Modal";

const TableEmployees = () => {
  const dispatch = useDispatch();
  const employees =
    useSelector((state) => state.employeesReducer.employees) || {};
  const pages = useSelector((state) => state.employeesReducer.pages);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [item, setItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [page, setPage] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setItem(item);
    setShow(true);
  };

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (id) => {
    setEditId(id);
    setShowEdit(true);
  };

  useEffect(() => {
    // setTimeout(() => {
    dispatch(fetchEmployees());
    // }, 3000);
  }, [dispatch]);

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
                    placeholder="Search by first name"
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
              {employees?.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.Department.name}</td>
                    <td>{item.Role.name}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => handleShow(item)}
                        >
                          <Eye style={{ color: "black" }} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-warning"
                          onClick={() => handleShowEdit(item.id)}
                        >
                          <Pencil style={{ color: "black" }} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => handleShowDelete(item.id)}
                        >
                          <Trash3 style={{ color: "black" }} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end pt-2">
            <Pagination size="sm">
              {}
              {pages.map((page, index) => {
                return <Pagination.Item key={index}>{page}</Pagination.Item>;
              })}
            </Pagination>
          </div>
        </Card.Body>
      </Card>
      {/* modal detail */}
      <ModalDetail show={show} handleClose={handleClose} item={item} />
      {/* end modal detail */}
      {/* modal delete */}
      <ModalDelete
        show={showDelete}
        handleClose={handleCloseDelete}
        id={deleteId}
      />
      {/* end modal delete */}
      {/* modal edit */}
      <ModalEdit show={showEdit} handleClose={handleCloseEdit} id={editId} />
      {/* end modal edit */}
    </>
  );
};
export default TableEmployees;
