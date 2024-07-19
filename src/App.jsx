import { useState } from "react";
import CustomerTable from "./components/CustomerTable";
import TransactionGraph from "./components/TransactionGraph";
import data from "../db.json";

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const allTransactions = data.transactions;

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    if (customer) {
      const customerTransactions = allTransactions.filter(
        (transaction) => transaction.customer_id === customer.id
      );
      setTransactions(customerTransactions);
    } else {
      setTransactions([]);
    }
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
