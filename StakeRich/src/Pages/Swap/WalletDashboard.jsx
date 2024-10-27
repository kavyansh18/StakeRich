import React, { useEffect, useState } from 'react';
import { useAccount, useDisconnect, useEnsName, useBalance, useTransactionCount } from 'wagmi';
import { ethers } from 'ethers';

const WalletDashboard = () => {
  const { address, isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: balanceData, isLoading: isBalanceLoading, isError: balanceError } = useBalance({ address });
  const { data: txCount, isLoading: isTxCountLoading, isError: txCountError } = useTransactionCount({ address });

  const [networkName, setNetworkName] = useState('Unknown Network');
  const [gasPrice, setGasPrice] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    const fetchNetworkDetails = async () => {
      if (isConnected) {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
          try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            setNetworkName(network.name || `Chain ID: ${network.chainId}`);

            const gasPrice = await provider.getGasPrice();
            setGasPrice(ethers.utils.formatUnits(gasPrice, 'gwei'));

            const blockNum = await provider.getBlockNumber();
            setBlockNumber(blockNum);

            const recentTx = await provider.getHistory(address, -10); // Last 10 transactions
            setRecentTransactions(recentTx);
          } catch (error) {
            console.error('Error fetching network details:', error);
          }
        } else {
          console.error('window.ethereum is undefined. Please ensure that a Web3 provider like MetaMask is installed.');
        }
      }
    };

    fetchNetworkDetails();
  }, [isConnected, address]);

  if (!isConnected) {
    return <div className="wallet-dashboard">Please connect your wallet.</div>;
  }

  if (typeof window.ethereum === 'undefined') {
    return (
      <div className="wallet-dashboard">
        <p>MetaMask is not installed. Please install MetaMask or another Web3 wallet.</p>
        <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
          Install MetaMask
        </a>
      </div>
    );
  }

  return (
    <div className="wallet-dashboard">
      <h3>Wallet Dashboard</h3>

      {ensName && (
        <p><strong>ENS Name:</strong> {ensName}</p>
      )}

      <p><strong>Address:</strong> {address}</p>

      <p><strong>Balance:</strong> 
        {isBalanceLoading ? 'Fetching balance...' : (balanceData ? `${balanceData.formatted} ${balanceData.symbol}` : 'Balance not available')}
      </p>

      <p><strong>Network:</strong> {networkName}</p>

      <p><strong>Wallet Type:</strong> {connector?.name || 'Unknown'}</p>

      <p><strong>Transaction Count:</strong> 
        {isTxCountLoading ? 'Loading...' : (txCount !== null ? txCount : 'N/A')}
      </p>

      
      {balanceError && <p style={{ color: 'red' }}>Error fetching balance. Please try again.</p>}
      {txCountError && <p style={{ color: 'red' }}>Error fetching transaction count. Please try again.</p>}

      
    </div>
  );
};

export default WalletDashboard;
