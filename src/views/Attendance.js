import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profileIcon from "../assets/janu.png";
import TableAttendance from "../components/TableAttendance";
import { getAttendances } from "../stores/actions/attendances";

const Attendance = () => {
  const dispatch = useDispatch();
  const { attendances } = useSelector((s) => s.attendance);

  const [params, setParams] = useState({ page: 0, filter: "all", limit: 10 });

  const nextPage = (e) => {
    e.preventDefault();
    return setParams({ ...params, page: params.page + 1 });
  };

  const prevPage = (e) => {
    e.preventDefault();
    return setParams({ ...params, page: params.page - 1 });
  };

  let condition = Math.ceil(attendances?.total / params.limit);

  useEffect(() => {
    dispatch(getAttendances({ ...params, page: params.page + 1 }));
  }, [dispatch, params]);

  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Attendance</h2>
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
        <TableAttendance
          data={attendances?.attendances}
          setParams={(obj) => {
            setParams({
              filter: obj.filter,
              page: obj.page,
            });
          }}
        />
        <div className="d-flex justify-content-end pt-2">
          <Pagination size="md">
            <Pagination.Prev onClick={prevPage} disabled={params.page === 0} />
            <Pagination.Item active={true}>{attendances?.page}</Pagination.Item>
            <Pagination.Next onClick={nextPage} disabled={condition - 1 === params.page} />
          </Pagination>
        </div>
      </div>
    </>
  );
};
export default Attendance;
