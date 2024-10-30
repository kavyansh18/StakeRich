import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gambling.css';
import Navbar from '../../components/Navbar/Navbar';
import BitcoinChart from './BitcoinChart';
import Popup from './Popup';

const BitcoinTracker = () => {
    const [livePriceData, setLivePriceData] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [bitcoinBalance, setBitcoinBalance] = useState(0);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [actionType, setActionType] = useState('');
    const [transactionInProgress, setTransactionInProgress] = useState(false);

    const fetchPrice = async () => {
        try {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
            const price = response.data.bpi.USD.rate_float;
            const timestamp = new Date();

            setCurrentPrice(price);
            setLivePriceData((prevData) => {
                const updatedData = [...prevData, { x: timestamp, y: price }];
                return updatedData.filter((data) => new Date(data.x) >= new Date(timestamp - 60 * 60 * 1000));
            });
        } catch (error) {
            console.error('Error fetching Bitcoin price:', error);
        }
    };

    useEffect(() => {
        fetchPrice();
        const interval = setInterval(fetchPrice, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleBuy = () => {
        setActionType('Buy');
        setPopupMessage(`Are you sure you want to buy ${quantity} Bitcoin(s) at $${currentPrice.toFixed(2)} each?`);
        setShowPopup(true);
    };

    const handleSell = () => {
        if (bitcoinBalance < quantity) {
            alert('You cannot sell more Bitcoin than you own.');
            return;
        }
        setActionType('Sell');
        setPopupMessage(`Are you sure you want to sell ${quantity} Bitcoin(s) at $${currentPrice.toFixed(2)} each?`);
        setShowPopup(true);
    };

    const confirmAction = () => {
        setTransactionInProgress(true); 

        setTimeout(() => {
            if (actionType === 'Buy') {
                const transaction = {
                    type: 'Buy',
                    price: parseFloat(currentPrice.toFixed(2)),
                    quantity,
                    profitLoss: null,
                    date: new Date().toLocaleString(),
                };
                setTransactions([...transactions, transaction]);
                setBitcoinBalance((prev) => prev + quantity);
                setPopupMessage('Transaction complete!');
            } else if (actionType === 'Sell') {
                const lastTransaction = transactions[transactions.length - 1];
                const profitLoss = (currentPrice - lastTransaction.price) * quantity;
                const transaction = {
                    type: 'Sell',
                    price: parseFloat(currentPrice.toFixed(2)),
                    quantity,
                    profitLoss: parseFloat(profitLoss.toFixed(2)),
                    date: new Date().toLocaleString(),
                };
                setTransactions([...transactions, transaction]);
                setBitcoinBalance((prev) => prev - quantity);
                setPopupMessage('Transaction complete!'); 
            }
            setTransactionInProgress(false); 
            setShowPopup(false); 
        }, 2500); 
    };

    const cancelAction = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Navbar className="mb-10" />
            <div className="tracker-container">
                <BitcoinChart livePriceData={livePriceData} currentPrice={currentPrice} />
                <div className="transactions-container">
                    <div className="quantity-input">
                        <label className="text-slate-950">Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseFloat(e.target.value)))}
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={handleBuy}className="btn">💰 Buy</button>
                        <button onClick={handleSell}className="btn">📉 Sell</button>
                    </div>
                    <h3>Transaction History</h3>
                    <div className="scrollable-table">
                        <table className="transaction-table">
                            <thead>
                                <tr>
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
                                        <tr key={index} className={transaction.type === 'Buy' ? 'buy-row' : 'sell-row' + (transaction.profitLoss !== null ? (transaction.profitLoss > 0 ? ' profit' : ' loss') : '')}>
                                            <td>{transaction.type}</td>
                                            <td>${transaction.price.toFixed(2)}</td>
                                            <td>{transaction.quantity}</td>
                                            <td>
                                                {transaction.profitLoss !== null ? `$${transaction.profitLoss.toFixed(2)}` : 'N/A'}
                                            </td>
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
            {showPopup && (
                <Popup
                    message={transactionInProgress ? 'Transaction in progress...' : popupMessage}
                    onConfirm={confirmAction}
                    onCancel={cancelAction}
                />
            )}
        </>
    );
};

export default BitcoinTracker;
