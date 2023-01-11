import { Table } from "react-bootstrap";
import formatCurrency from "../helpers/formatCurrency";
import formatDay from "../helpers/formateDay";
import formatMonth from "../helpers/formatMonth";

const TableSalary = ({ data }) => {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Employee Name</th>
          <th>Payment Date</th>
          <th>Periode Salary</th>
          <th>Amount Salary</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.Employee.firstName}</td>
            <td>{formatDay(item.paymentDate)}</td>
            <td>{formatMonth(item.periodeSalary)}</td>
            <td>{formatCurrency(item.amount)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableSalary;
