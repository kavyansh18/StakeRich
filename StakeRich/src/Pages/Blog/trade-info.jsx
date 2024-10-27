// howto.jsx
import React from 'react';
import './Blog.css'

const Tradeinfo = (
  <div className="Tradeinfo">
<h2>Swap Feature</h2>
<p>The Swap feature allows users to exchange one cryptocurrency for another directly within the AppKit modal. This feature is designed to provide a seamless and efficient swapping experience, leveraging our collaboration with 1inch as the swap provider.</p>

<h2>Availability</h2>
<ul>
    <li><strong>Requirement:</strong> The Swap feature is available only to users who log in via email or social login. This is consistent with other wallet features such as sending tokens.</li>
    <li><strong>Transaction Fee:</strong> WalletConnect charges a 0.85% transaction fee on all swaps.</li>
    <li><strong>Supported Tokens:</strong> The tokens available for swapping are limited to those supported by 1Inch. Note that the availability of tokens may vary depending on the network.</li>
    <li><strong>Network Availability:</strong> The Swap feature is not available on Sepolia or other testnets at this time.</li>
</ul>

<h2>How to Use</h2>
<ol>
    <li><strong>Connect:</strong> Ensure you are logged in via email or social login.</li>
    <li><strong>Access Swap:</strong> Navigate to the Swap feature within the account view.</li>
    <li><strong>Select Tokens:</strong> Choose the tokens you wish to swap from the available options.</li>
    <li><strong>Type Amount:</strong> Enter your desired swap values. You can use the Max button to swap all your tokens or enter any specific number.</li>
    <li><strong>See Swap Details:</strong> Once you enter the amount, you'll see the available quote details, such as received amount, network fee, maximum slippage, or price impact.</li>
    <li><strong>Confirm Swap:</strong> Review the swap details, including the transaction fee, and confirm the swap.</li>
</ol>

  </div>
);

export default Tradeinfo;
