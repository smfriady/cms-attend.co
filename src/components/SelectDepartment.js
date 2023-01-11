import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";
import { getDepartments } from "../services/department";

const SelectDepartment = ({ setParams }) => {
  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setParams({ [name]: value });
  };

  const [departmens, setDepartments] = useState({
    data: [],
    isLoading: false,
  });

  useEffect(() => {
    const fetchDepartment = async () => {
      setDepartments({ isLoading: true });
      const data = await getDepartments();
      setDepartments({
        data,
        isLoading: false,
      });
    };

    fetchDepartment();
  }, []);

  if (departmens.isLoading) return <div>loading...</div>;

  return (
    <div className="d-flex">
      <Funnel className="d-flex mt-2 mx-2" style={{ fontSize: 24 }} />
      <div style={{ width: 240 }}>
        <Form.Select name="filter" onChange={handleOnChange}>
          <option value="all">All</option>
          {departmens.data.map((el, i) => (
            <option value={el.id} key={i}>
              {el.name}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default SelectDepartment;
