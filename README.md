# Transactions App

This project is a React application built with Vite. It displays a list of customers and their transaction data in a table format, with filtering and sorting capabilities. The application also includes a graph to visualize the total transaction amount per day for selected customers. The app is deployed on GitHub Pages.

## Features

- **Customer and Transaction Data**: Displays a list of customers along with their transaction data.
- **Filtering**: Allows filtering the table by customer name or transaction amount.
- **Sorting**: Provides a dropdown to sort by customer name (A-Z or Z-A) and transaction amount.
- **Graph Visualization**: Shows the total transaction amount per day for the selected customer.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Chart.js**: A JavaScript charting library to create the graph.
- **React Chart.js 2**: A React wrapper for Chart.js.
- **Axios**: A promise-based HTTP client for the browser.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abdelmageed2062019/Transactions.git
    cd Transactions
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployment

The app is deployed on GitHub Pages. To deploy the app, follow these steps:

1. Build the project:
    ```bash
    npm run build
    ```

2. Deploy to GitHub Pages:
    ```bash
    npm run deploy
    ```

Make sure the `homepage` field in `package.json` is set to `http://abdelmageed2062019.github.io/Transactions`.

## Project Structure

```plaintext
├── public
│   └── ...
├── src
│   ├── components
│   │   ├── CustomerTable.jsx
│   │   ├── TransactionGraph.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
