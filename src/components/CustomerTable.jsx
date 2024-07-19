import { useState } from "react";
import PropTypes from "prop-types";
import { customers, transactions } from "../../db.json";

const CustomerTable = ({ onSelectCustomer }) => {
  const [filter, setFilter] = useState({ name: "", amount: "" });
  const [sortBy, setSortBy] = useState("");

  const sortTransactions = (transactions) => {
    if (sortBy === "name-asc") {
      return transactions.sort((a, b) => {
        const customerA = customers.find((c) => c.id === a.customer_id);
        const customerB = customers.find((c) => c.id === b.customer_id);
        return customerA.name.localeCompare(customerB.name);
      });
    }
    if (sortBy === "name-desc") {
      return transactions.sort((a, b) => {
        const customerA = customers.find((c) => c.id === a.customer_id);
        const customerB = customers.find((c) => c.id === b.customer_id);
        return customerB.name.localeCompare(customerA.name);
      });
    }
    if (sortBy === "amount-asc") {
      return transactions.sort((a, b) => a.amount - b.amount);
    }
    if (sortBy === "amount-desc") {
      return transactions.sort((a, b) => b.amount - a.amount);
    }
    return transactions;
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const customer = customers.find((c) => c.id === transaction.customer_id);
    const matchesName =
      customer &&
      customer.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesAmount = transaction.amount.toString().includes(filter.amount);
    return matchesName && matchesAmount;
  });

  const sortedTransactions = sortTransactions(filteredTransactions);

  return (
    <div className="customer-table-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by customer name"
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Filter by transaction amount"
          value={filter.amount}
          onChange={(e) => setFilter({ ...filter, amount: e.target.value })}
          className="filter-input"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name A to Z</option>
          <option value="name-desc">Name Z to A</option>
          <option value="amount-asc">Amount Ascending</option>
          <option value="amount-desc">Amount Descending</option>
        </select>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => {
            const customer = customers.find(
              (c) => c.id === transaction.customer_id
            );
            return (
              <tr
                key={transaction.id}
                onClick={() => onSelectCustomer(customer)}
              >
                <td>{customer ? customer.name : "Unknown"}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

CustomerTable.propTypes = {
  onSelectCustomer: PropTypes.func.isRequired,
};

export default CustomerTable;
