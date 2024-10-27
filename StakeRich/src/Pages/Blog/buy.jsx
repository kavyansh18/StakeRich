// howto.jsx
import React from 'react';
import './Blog.css'

const Buy = (
  <div className="Buy">
         <h2>How to Buy Crypto with WalletConnect</h2>
        <p>Buying cryptocurrency with WalletConnect is a streamlined process that enhances your security and ease of use. Follow these steps to complete your purchase:</p>
        
        <h2>1. Connect Your Wallet</h2>
        <ol>
            <li><strong>Step 1:</strong> Open your preferred crypto wallet that supports WalletConnect (e.g., MetaMask, Trust Wallet, or any other compatible wallet).</li>
            <li><strong>Step 2:</strong> Ensure that your wallet is set up and funded with the necessary cryptocurrency or fiat currency.</li>
            <li><strong>Step 3:</strong> Navigate to the "Connect Wallet" section on our platform and select WalletConnect from the list of available options.</li>
            <li><strong>Step 4:</strong> A QR code will appear on the screen. Open your wallet app and use the WalletConnect feature to scan the QR code. This will establish a secure connection between your wallet and our platform.</li>
        </ol>
        
        <h2>2. Select Your Cryptocurrency</h2>
        <ol>
            <li><strong>Step 1:</strong> Choose the cryptocurrency you wish to buy from our available list.</li>
            <li><strong>Step 2:</strong> Enter the amount you want to purchase in your preferred currency (e.g., USD, EUR) or in cryptocurrency terms. Our platform will automatically calculate the equivalent amount based on the current exchange rates.</li>
        </ol>
        
        <h2>3. Confirm Transaction Details</h2>
        <ol>
            <li><strong>Step 1:</strong> Review the transaction details, including the amount of cryptocurrency you will receive, the current exchange rate, and any applicable fees.</li>
            <li><strong>Step 2:</strong> Make sure all details are accurate. Double-check the amount and the destination address to avoid any errors.</li>
        </ol>
        
        <h2>4. Approve the Transaction</h2>
        <ol>
            <li><strong>Step 1:</strong> Once you confirm the details, proceed to approve the transaction in your wallet app.</li>
            <li><strong>Step 2:</strong> Your wallet will prompt you to authorize the transaction. Verify the details and confirm the transaction.</li>
            <li><strong>Step 3:</strong> After authorization, the transaction will be processed. You will receive a confirmation once the purchase is complete.</li>
        </ol>
        
        <h2>5. Track Your Purchase</h2>
        <ol>
            <li><strong>Step 1:</strong> You can track the status of your transaction on our platform.</li>
            <li><strong>Step 2:</strong> You will also receive a transaction ID or receipt in your wallet app, which you can use for future reference or to track the status on the blockchain.</li>
        </ol>
        
        <div class="tips">
            <h2>Tips for a Smooth Experience</h2>
            <ul>
                <li><strong>Ensure Wallet Compatibility:</strong> Make sure your wallet is compatible with WalletConnect and is updated to the latest version.</li>
                <li><strong>Check Network Fees:</strong> Be aware of network fees and transaction times, which can vary based on the cryptocurrency and network congestion.</li>
                <li><strong>Secure Your Wallet:</strong> Always keep your wallet secure and backup your recovery phrases to avoid losing access to your funds.</li>
            </ul>
        </div>
  </div>
);

export default Buy;
