import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const labels1 = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const value1 = [10, 32, 31, 27, 29, 32, 8];
  const value2 = [2, 5, 4, 5, 3, 3, 1, 35];
  const value3 = [4, 2, 6, 3, 1, 3, 4, 35];
  const value4 = [1, 2, 3, 3, 5, 5, 3, 35];

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Attendance From All Employees",
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Permission From All Employees",
      },
    },
  };

  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: "Attendance",
        data: value1,
        backgroundColor: "rgba(62, 91, 166, 0.7)",
      },
    ],
  };
  const data2 = {
    labels: labels1,
    datasets: [
      {
        label: "Paid Leave",
        data: value2,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "Permit",
        data: value3,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Sick",
        data: value4,
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
    ],
  };

  return (
    <>
      <div className="d-flex gap-5 m-4">
        <Card style={{ width: 560 }}>
          <Card.Body>
            <Bar data={data1} options={options1} />
          </Card.Body>
        </Card>
        <Card style={{ width: 560 }}>
          <Card.Body>
            <Bar data={data2} options={options2} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Chart;
