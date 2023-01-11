import { Table } from "react-bootstrap";
import FormEditEmployee from "./FormEditEmployee";

const TableEmployees = ({ data }) => {
  const { employees } = data;
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
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
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.Department.name}</td>
              <td>{item.Role.name}</td>
              <td>
                <FormEditEmployee employee={item} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default TableEmployees;
