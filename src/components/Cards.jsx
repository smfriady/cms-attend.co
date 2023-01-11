import { Card } from "react-bootstrap";
import { PeopleFill } from "react-bootstrap-icons";

const Cards = ({ totalEmployee }) => {
  const data = [
    {
      title: "Total Employees",
      icon: <PeopleFill />,
      value: totalEmployee,
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
