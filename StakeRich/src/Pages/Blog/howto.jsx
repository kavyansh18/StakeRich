// howto.jsx
import React from 'react';
import './Blog.css'

const connectContent = (
  <div className="scrollable-container">
    <h2>How to Connect Your Wallet Using WalletConnect</h2>
    <p>
      WalletConnect is a powerful tool that allows you to securely connect your mobile wallet 
      to decentralized applications (dApps) with ease. Whether you’re looking to explore DeFi platforms, 
      trade NFTs, or interact with Web3 dApps, WalletConnect provides a seamless connection between your 
      mobile device and the dApp without compromising your security.
    </p>
    <p>In this guide, we'll walk you through the simple steps to connect your wallet using WalletConnect.</p>
    
    <h3>Step 1: Ensure You Have a Supported Wallet</h3>
    <p>
      Before you begin, make sure you have a WalletConnect-compatible wallet installed on your mobile device. 
      Some popular options include:
    </p>
    <ul>
      <li><strong>MetaMask</strong></li>
      <li><strong>Trust Wallet</strong></li>
      <li><strong>Rainbow</strong></li>
      <li><strong>Argent</strong></li>
      <li><strong>Coinbase Wallet</strong></li>
    </ul>
    <p>If you don’t have one yet, download your preferred wallet from the App Store or Google Play, and set it up with your seed phrase and security settings.</p>
    
    <h3>Step 2: Open the dApp You Want to Connect With</h3>
    <p>
      Navigate to the dApp you want to use on your desktop or mobile browser. Look for the "Connect Wallet" 
      button, usually located in the top-right corner of the website.
    </p>

    <h3>Step 3: Choose WalletConnect as Your Connection Method</h3>
    <p>
      Upon clicking "Connect Wallet," you’ll be presented with different wallet options. Select <strong>WalletConnect</strong> 
      from the list. This will open a QR code on your desktop or a deep link on your mobile browser.
    </p>

    <h3>Step 4: Scan the QR Code or Use the Deep Link</h3>
    <p>
      <strong>Desktop Users:</strong> Open your mobile wallet app, find the "Scan QR Code" option (usually in the settings or menu), 
      and scan the QR code displayed on your desktop.
    </p>
    <p>
      <strong>Mobile Users:</strong> If you’re accessing the dApp directly from your mobile device, selecting WalletConnect 
      will trigger a deep link that automatically opens your wallet app.
    </p>

    <h3>Step 5: Confirm the Connection in Your Wallet</h3>
    <p>
      Once the QR code is scanned or the deep link is activated, your mobile wallet will prompt you to approve the connection. 
      Review the connection request details, and tap <strong>Approve</strong> or <strong>Connect</strong>.
    </p>

    <h3>Step 6: You're Connected!</h3>
    <p>
      After approval, your wallet will be connected to the dApp, and you can start interacting with the application. 
      Whether it's trading, staking, or exploring new decentralized services, you can now do so directly through your wallet.
    </p>

    <h3>Step 7: Manage and Disconnect</h3>
    <p>
      When you're finished using the dApp, you can easily disconnect your wallet by navigating to the settings in your mobile wallet app 
      and selecting "Disconnect" from the WalletConnect section. This ensures your wallet remains secure when not in use.
    </p>

    <p>
      Connecting your wallet with WalletConnect is that simple! It’s designed to provide a smooth and secure experience for users, 
      enabling you to engage with decentralized technologies effortlessly. Keep your wallet secure and enjoy the world of 
      decentralized applications with WalletConnect.
    </p>
  </div>
);

export default connectContent;
