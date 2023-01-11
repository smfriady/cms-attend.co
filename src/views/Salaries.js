import { useEffect, useState } from "react";
import { Card, Form, Pagination } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import profileIcon from "../assets/janu.png";
import TableSalary from "../components/TableSalary";
import { getSalaries } from "../stores/actions/salaries";

const SalariesView = () => {
  const [params, setParams] = useState({ page: 0, firstName: "", limit: 10 });

  const dispatch = useDispatch();
  const { salaries } = useSelector((s) => s.salary);

  const nextPage = (e) => {
    e.preventDefault();
    return setParams({ ...params, page: params.page + 1 });
  };

  const prevPage = (e) => {
    e.preventDefault();
    return setParams({ ...params, page: params.page - 1 });
  };

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setParams({ ...params, [name]: value, page: 0 });
  };

  let condition = Math.ceil(salaries?.total / params.limit);

  useEffect(() => {
    dispatch(getSalaries({ ...params, page: params.page + 1 }));
  }, [dispatch, params]);

  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Salaries</h2>
          <div className="d-flex gap-2">
            <img
              src={profileIcon}
              alt="profile"
              width="44"
              height="44"
              className="profile-icon"
            />
            <div className="mt-1">
              <p style={{ fontSize: 12 }}>
                Hello, Muhammad Januar <br /> User{" "}
                <span style={{ color: "#3e5ba6" }}>Admin</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="py-2">Table Information</h3>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between py-2 pb-3">
              <div className="d-flex">
                <Search className="d-flex mt-2 mx-2" style={{ fontSize: 20 }} />
                <div style={{ width: 200 }}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Search by first name"
                      name="firstName"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <TableSalary data={salaries?.salaries} />
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-end pt-2">
          <Pagination size="md">
            <Pagination.Prev onClick={prevPage} disabled={params.page === 0} />
            <Pagination.Item active={true}>{salaries?.page}</Pagination.Item>
            <Pagination.Next onClick={nextPage} disabled={condition - 1 === params.page} />
          </Pagination>
        </div>
      </div>
    </>
  );
};
export default SalariesView;
