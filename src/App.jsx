import { useState } from "react";
import CustomerTable from "./components/CustomerTable";
import TransactionGraph from "./components/TransactionGraph";

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    if (customer) {
      fetchTransactions(customer.id);
    } else {
      setTransactions([]);
    }
  };

  const fetchTransactions = (customerId) => {
    fetch(`http://localhost:3000/transactions?customer_id=${customerId}`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  };

  return (
    <div className="app">
      <h1>Customer Transactions</h1>
      <div className="wrapper">
        <CustomerTable onSelectCustomer={handleSelectCustomer} />
        {selectedCustomer && (
          <div className="char-container">
            <h2>Transactions for {selectedCustomer.name}</h2>
            <TransactionGraph transactions={transactions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
