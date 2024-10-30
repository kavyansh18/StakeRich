import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Trade.css';
import Malamal from '../../models/Malamal'; 
import Lamp from '../../models/Lamp';
import Truck from '../../models/Truck';
import { Plane } from '@react-three/drei';
import { useSpring } from '@react-spring/web';
import { Canvas } from '@react-three/fiber';
import { ConnectButton } from '../../config/Web3ModalProvider';
import Submarine from '../../models/submarine';
import WalletDashboard from './WalletDashboard';
import BikeLoader from '../../components/Loader/BikeLoader';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';

const tokenList = [
  { name: 'Tezos (XTZ)', address: null },
  { name: 'tzBTC', address: 'KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn' },
  { name: 'wXTZ', address: 'KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH' },
  { name: 'USDtz', address: 'KT1AEfeckNbdEYwaMKkytBwPJPycz7jdSGea' },

];

const dexContracts = {
  'XTZ-tzBTC': 'KT1XVy2fiVVu8jz7ojA4jhxVtMqGX6e6VLzV',
  'tzBTC-XTZ': 'KT1XVy2fiVVu8jz7ojA4jhxVtMqGX6e6VLzV',
  'XTZ-USDtz': 'KT1Q8LdP5sZ9xS2hkHjGJMmKxjeF5gTdQ5uT', 
  'USDtz-XTZ': 'KT1Q8LdP5sZ9xS2hkHjGJMmKxjeF5gTdQ5uT',
};

const Background = () => {
  return (
    <Plane args={[100, 100]} position={[0, -23, -5]} rotation={[-Math.PI / 2, 0, 0.5]}>
      <meshStandardMaterial attach="material" color="#9e6634" />
    </Plane>
  );
};

const Trade = () => {
  const [props, api] = useSpring(() => ({
    transform: 'translate3d(0px, 0px, 0px)',
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const [loading, setLoading] = useState(true);
  const [tezos, setTezos] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const [amount, setAmount] = useState('');

  const [fromToken, setFromToken] = useState(tokenList[0]);
  const [toToken, setToToken] = useState(tokenList[1]);
  const [dexContractAddress, setDexContractAddress] = useState('');

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    api.start({ transform: `translate3d(${x}px, ${y}px, 0px)` });
  };

  useEffect(() => {
    document.body.classList.add('buy-page-body');
    return () => {
      document.body.classList.remove('buy-page-body');
    };
  }, []);

  useEffect(() => {
    const showLoaderForMinTime = async () => {
      const start = Date.now();
      const timeElapsed = Date.now() - start;
      const remainingTime = Math.max(4000 - timeElapsed, 0);
      setTimeout(() => setLoading(false), remainingTime);
    };

    showLoaderForMinTime();
  }, []);

  useEffect(() => {
    const setupTezos = async () => {
      const tezosTK = new TezosToolkit('https://mainnet.api.tez.ie');
      const beaconWallet = new BeaconWallet({ name: 'My Tezos DApp' });
      tezosTK.setWalletProvider(beaconWallet);
      setTezos(tezosTK);
      setWallet(beaconWallet);
    };

    setupTezos();
  }, []);

  useEffect(() => {
    const fromTokenName = fromToken.name === 'Tezos (XTZ)' ? 'XTZ' : fromToken.name;
    const toTokenName = toToken.name === 'Tezos (XTZ)' ? 'XTZ' : toToken.name;
    const dexKey = `${fromTokenName}-${toTokenName}`;

    const address = dexContracts[dexKey];

    if (address) {
      setDexContractAddress(address);
    } else {
      setDexContractAddress('');
      console.warn(`No DEX contract found for ${dexKey}`);
    }
  }, [fromToken, toToken]);

  const connectWallet = async () => {
    if (wallet) {
      try {
        await wallet.requestPermissions({ network: { type: 'mainnet' } });
        const address = await wallet.getPKH();
        setUserAddress(address);
      } catch (error) {
        console.error('Wallet connection failed:', error);
        alert('Failed to connect wallet.');
      }
    }
  };

  const swapTokens = async () => {
    if (tezos && wallet && userAddress) {
      try {
        if (!dexContractAddress) {
          alert('No DEX contract available for the selected token pair.');
          return;
        }

        const amountToSwap = parseFloat(amount);
        if (isNaN(amountToSwap) || amountToSwap <= 0) {
          alert('Please enter a valid amount.');
          return;
        }

        const contract = await tezos.wallet.at(dexContractAddress);

        if (fromToken.name === 'Tezos (XTZ)') {
          const operation = await contract.methods
            .tezToTokenPayment(
              userAddress, 
              0            
            )
            .send({ amount: amountToSwap });

          await operation.confirmation();
          alert('Swap completed successfully!');
        } else if (toToken.name === 'Tezos (XTZ)') {

          const tokenContract = await tezos.wallet.at(fromToken.address);
          const approvalOp = await tokenContract.methods
            .approve(dexContractAddress, amountToSwap)
            .send();

          await approvalOp.confirmation();

          const operation = await contract.methods
            .tokenToTezPayment(
              amountToSwap, 
              0,            
              userAddress   
            )
            .send();

          await operation.confirmation();
          alert('Swap completed successfully!');
        } else {
          const tokenContract = await tezos.wallet.at(fromToken.address);
          const approvalOp = await tokenContract.methods
            .approve(dexContractAddress, amountToSwap)
            .send();

          await approvalOp.confirmation();

          const operation = await contract.methods
            .tokenToTokenPayment(
              amountToSwap,     
              0,                
              userAddress,      
              toToken.address  
            )
            .send();

          await operation.confirmation();
          alert('Swap completed successfully!');
        }
      } catch (error) {
        console.error('Swap failed:', error);
        alert(`Swap failed: ${error.message}`);
      }
    } else {
      alert('Please connect your wallet first.');
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <BikeLoader />
        </div>
      ) : (
        <div className="trade-page">
          <Navbar />
          <section className="trade-container" onMouseMove={handleMouseMove}>
            <div className="text">
              <h1>
                Seamless <span className="swap">SWAP</span>
              </h1>
              <br />
              <h1>
                Effortless <span className="swap">TRADE</span>
              </h1>
              <p>Hassle-Free!</p>
            </div>

            <Link className="learn-button" to={'/blog'}>
              <b>Learn How to Swap</b>
            </Link>

            <div className="canvas-container">
              <Canvas
                shadows
                camera={{ position: [0, 5, 10], fov: 45 }}
                className="canvas-element"
                onCreated={({ gl }) => {
                  setLoading(false); 
                  gl.setSize(window.innerWidth, window.innerHeight); 
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight
                  position={[0, 10, 5]}
                  intensity={6}
                  castShadow
                  shadow-mapSize-width={4096}
                  shadow-mapSize-height={4096}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />
                <directionalLight position={[-5, 5, -5]} intensity={3} castShadow />
                <spotLight
                  position={[5, 10, 0]}
                  angle={0.3}
                  intensity={10}
                  penumbra={1}
                  castShadow
                  target-position={[2, 2, -5]}
                />
                <spotLight position={[2, 5, 2]} angle={0.2} intensity={10} penumbra={1} castShadow />
                <group position={[0, -0.5, 0]}>
                  <Background />
                  <Malamal position={[2, 1, 0]} rotation={[-0.1, 5.2, 0]} scale={[0.6, 0.6, 0.6]} />
                  <Lamp position={[5.5, 0.4, 0]} rotation={[-0.1, 0.4, 0]} scale={[0.6, 0.6, 0.6]} />
                  <Truck position={[5.8, 0.8, 0]} rotation={[-0.1, 0.4, 0]} scale={[0.6, 0.6, 0.6]} />
                </group>
              </Canvas>
            </div>
          </section>

          <section className="bitcoin-swap-section">
            <div className="flex-column-container">
              <div className="wallet-dashboard-container">
                <WalletDashboard />
              </div>
              <div className="swap-container pixelated-3d">
                <div className="tooltip-text">Select Tokens and Swap!</div>

                {/* Connect Wallet Button */}
                {!userAddress ? (
                  <button className="connect-wallet-button" onClick={connectWallet}>
                    Connect Wallet
                  </button>
                ) : (
                  <p>Connected as: {userAddress}</p>
                )}

                {/* Token Selection */}
                <div className="token-selection">
                  <label>From Token:</label>
                  <select
                    value={fromToken.name}
                    onChange={(e) => {
                      const selectedToken = tokenList.find((token) => token.name === e.target.value);
                      setFromToken(selectedToken);
                    }}
                  >
                    {tokenList.map((token) => (
                      <option key={token.name} value={token.name}>
                        {token.name}
                      </option>
                    ))}
                  </select>

                  <label>To Token:</label>
                  <select
                    value={toToken.name}
                    onChange={(e) => {
                      const selectedToken = tokenList.find((token) => token.name === e.target.value);
                      setToToken(selectedToken);
                    }}
                  >
                    {tokenList.map((token) => (
                      <option key={token.name} value={token.name}>
                        {token.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount Input */}
                <input
                  type="number"
                  placeholder="Amount to Swap"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                {/* Swap Button */}
                <button className="swap-button" onClick={swapTokens}>
                  Swap Tokens
                </button>

                <ConnectButton />
                <Canvas
                  shadows
                  camera={{ position: [0, 5, 10], fov: 45 }}
                  className="canvas-element"
                  onCreated={({ gl }) => {
                    setLoading(false);
                    gl.setSize(window.innerWidth, window.innerHeight);
                  }}
                >
                  <ambientLight intensity={1} />
                  <directionalLight
                    position={[0, 10, 5]}
                    intensity={6}
                    castShadow
                    shadow-mapSize-width={4096}
                    shadow-mapSize-height={4096}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                  />
                  <directionalLight position={[-5, 5, -5]} intensity={3} castShadow />
                  <spotLight
                    position={[5, 10, 0]}
                    angle={0.3}
                    intensity={10}
                    penumbra={1}
                    castShadow
                    target-position={[2, 2, -5]}
                  />
                  <spotLight position={[2, 5, 2]} angle={0.2} intensity={10} penumbra={1} castShadow />
                  <group position={[0, -0.5, 0]}>
                    <Submarine position={[-3.5, 2, 0]} rotation={[-0.15, 3, 0]} scale={[0.6, 0.9, 0.6]} />
                  </group>
                </Canvas>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Trade;
