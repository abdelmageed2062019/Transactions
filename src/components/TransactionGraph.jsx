import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

import PropTypes from "prop-types";

const TransactionGraph = ({ transactions }) => {
  const data = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) acc[date] = 0;
    acc[date] += transaction.amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Total Amount",
        data: Object.values(data),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

TransactionGraph.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer_id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionGraph;
