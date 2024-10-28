import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './Gambling.css';
import Navbar from '../../components/Navbar/Navbar';

const BitcoinTracker = () => {
    const [livePriceData, setLivePriceData] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [quantity, setQuantity] = useState(1);

    // Fetch live Bitcoin price
    const fetchPrice = async () => {
        try {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
            const price = response.data.bpi.USD.rate_float;
            const timestamp = new Date();

            setCurrentPrice(price);
            setLivePriceData((prevData) => {
                const updatedData = [...prevData, { x: timestamp, y: price }];
                // Keep only the last hour of data
                return updatedData.filter((data) => new Date(data.x) >= new Date(timestamp - 60 * 60 * 1000));
            });
        } catch (error) {
            console.error('Error fetching Bitcoin price:', error);
        }
    };

    useEffect(() => {
        fetchPrice(); // Fetch initial price
        const interval = setInterval(fetchPrice, 5000); // Fetch price every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const handleBuy = () => {
        const transaction = {
            type: 'Buy',
            price: parseFloat(currentPrice.toFixed(2)),
            quantity,
            profitLoss: null,
            date: new Date().toLocaleString(),
        };
        setTransactions([...transactions, transaction]);
    };

    const handleSell = () => {
        const lastTransaction = transactions[transactions.length - 1];
        if (lastTransaction) {
            const profitLoss = (currentPrice - lastTransaction.price) * quantity;
            const transaction = {
                type: 'Sell',
                price: parseFloat(currentPrice.toFixed(2)),
                quantity,
                profitLoss: parseFloat(profitLoss.toFixed(2)),
                date: new Date().toLocaleString(),
            };
            setTransactions([...transactions, transaction]);
        } else {
            alert('No previous buy transaction to sell against.');
        }
    };

    const data = {
        datasets: [
            {
                label: 'Live Bitcoin Price (USD)',
                data: livePriceData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    return (
        <>
            <Navbar className="mb-10" />
            <div className="tracker-container">
                <div className="graph-container">
                    <h2>Live Bitcoin Tracker</h2>
                    <Line data={data} />
                    <h3>Current Price: ${currentPrice.toFixed(2)}</h3>
                </div>
                <div className="transactions-container">
                    <div className="buttons">
                        <button onClick={handleBuy}>💰 Buy</button>
                        <button onClick={handleSell}>📉 Sell</button>
                    </div>

                    <h3>Transaction History</h3>
                    <div className="scrollable-table">
                        <table className="transaction-table">
                            <thead>
                                <tr className=''>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Profit/Loss</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.length > 0 ? (
                                    transactions.map((transaction, index) => (
                                        <tr key={index} className={transaction.type === 'Buy' ? 'buy-row' : 'sell-row'}>
                                            <td>{transaction.type}</td>
                                            <td>${transaction.price.toFixed(2)}</td>
                                            <td>{transaction.quantity}</td>
                                            <td>${transaction.profitLoss !== null ? transaction.profitLoss.toFixed(2) : 'N/A'}</td>
                                            <td>{transaction.date}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No transactions yet</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BitcoinTracker;
