import { Card } from "react-bootstrap";
import {
  PeopleFill,
  CalendarCheckFill,
  PinAngleFill,
  CreditCardFill,
} from "react-bootstrap-icons";
import { currencyFormatter } from "../tools/formatCurrency";

const Cards = () => {
  const data = [
    {
      title: "Total Employees",
      icon: <PeopleFill />,
      value: 35,
    },
    {
      title: "Total Attendance",
      icon: <CalendarCheckFill />,
      value: 32,
    },
    {
      title: "Total Permission",
      icon: <PinAngleFill />,
      value: 10,
    },
    {
      title: "Total Salary Payment",
      icon: <CreditCardFill />,
      value: currencyFormatter.format(123872000).replace(/\.00$/, ""),
    },
  ];
  return (
    <>
      <div className="d-flex gap-4 py-2">
        {data.map((item, index) => {
          return (
            <Card style={{ width: 180 }} key={index}>
              <Card.Body>
                <Card.Text className="text-muted" style={{ fontSize: 12 }}>
                  <span style={{ marginRight: 4 }}>{item.icon}</span>
                  {item.title}
                </Card.Text>
                <Card.Text style={{ color: "#3e5ba6" }}>{item.value}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
