import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import axios from 'axios';
import ComputerModel from '../../models/Computer';
import Earth from '../../models/Earth';
import Ethereum from '../../models/Ethereum';
import Bitcoin from '../../models/Bitcoin';
import Navbar from '../../components/Navbar/Navbar';
import BikeLoader from '../../components/Loader/BikeLoader';
import './Buy.css';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { ConnectButton } from '../../config/Web3ModalProvider';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import Tree from '../../models/Tree';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Buy = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [priceHistory, setPriceHistory] = useState(null);
  const [selectedChart, setSelectedChart] = useState('line');

  useEffect(() => {
    document.body.classList.add('buy-page-body');
    return () => {
      document.body.classList.remove('buy-page-body');
    };
  }, []);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptoData(response.data);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    const showLoaderForMinTime = async () => {
      const start = Date.now();
      await fetchCryptoData();
      const timeElapsed = Date.now() - start;
      const remainingTime = Math.max(4000 - timeElapsed, 0);
      setTimeout(() => setLoading(false), remainingTime);
    };

    showLoaderForMinTime();
    const intervalId = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedCrypto) {
      const fetchPriceHistory = async () => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto.id}/market_chart`, {
            params: {
              vs_currency: 'usd',
              days: '7',
              interval: 'daily',
            },
          });

          const labels = response.data.prices.map(price => {
            const date = new Date(price[0]);
            return `${date.getMonth() + 1}/${date.getDate()}`;
          });

          const data = response.data.prices.map(price => price[1]);

          setPriceHistory({
            labels,
            datasets: [
              {
                label: 'Price (USD)',
                data,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
              },
            ],
          });
        } catch (error) {
          console.error('Error fetching price history:', error);
        }
      };

      fetchPriceHistory();
    }
  }, [selectedCrypto]);

  useEffect(() => {
    const scrollToCharts = () => {
      const element = document.getElementById('detailsContainer');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (priceHistory) {
      scrollToCharts();
    }
  }, [priceHistory, selectedChart]);

  const handleCryptoClick = (coin) => {
    setSelectedCrypto(coin);
  };

  return (
    <>
      
      {loading ? (
      
        <div className="loading-container">
          <BikeLoader />
        </div>

      ) : (
        
        <>
        <Navbar />
          <div className="canvasContainer">
            <div className="buyContainer">
              <h2>Buy Crypto</h2>
              <form>
                <div className='tree-container'>
                  <Canvas shadows>
                    <ambientLight intensity={2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                      <Tree position={[0, -0.2, 0]} rotation={[0.1, -1.3, 0]} scale={[0.7, 0.4, 0.5]} castShadow receiveShadow />
                    </Suspense>
                  </Canvas>
                </div>
                <div className="tooltip-container">
                  <ConnectButton />
                  <span className="tooltip-text">Click to buy crypto</span>
                </div>
              </form>
            </div>
            <div className="model-container">
              <Canvas shadows>
                <ambientLight intensity={2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <ComputerModel position={[-0.2, -1.3, 0]} rotation={[0.2, -0.7, 0]} scale={[1.5, 1.5, 1.5]} castShadow receiveShadow />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="canvasContainerdown">
            <div className="cryptoContainer">
              <h2>Crypto Market Info {lastUpdated && `(Updated: ${lastUpdated})`}</h2>
              <ul className="listname">
                {cryptoData.map((coin) => (
                  <li key={coin.id} className="coin-item" onClick={() => handleCryptoClick(coin)}>
                    <span className="coin-arrow">&#9654;</span>
                    {coin.name}: ${coin.current_price}
                  </li>
                ))}
              </ul>
            </div>
            <Canvas shadows>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <Earth position={[0, -1.3, 0]} rotation={[0, 0, 0]} scale={[0.07, 0.07, 0.07]} castShadow receiveShadow />
              </Suspense>
            </Canvas>
          </div>
          {selectedCrypto && (
            <div className="detailsContainer" id="detailsContainer">
              <div className="coin-details">
                {selectedCrypto.id === 'ethereum' && (
                  <div className="coin-model">
                    <Canvas shadows>
                      <ambientLight intensity={6} />
                      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                      <pointLight position={[-10, -10, -10]} />
                      <Suspense fallback={null}>
                        <Ethereum position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[2, 2, 2]} castShadow receiveShadow />
                      </Suspense>
                    </Canvas>
                  </div>
                )}
                {selectedCrypto.id === 'bitcoin' && (
                  <div className="coin-model">
                    <Canvas shadows>
                      <ambientLight intensity={6} />
                      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                      <pointLight position={[-10, -10, -10]} />
                      <Suspense fallback={null}>
                        <Bitcoin position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} castShadow receiveShadow />
                      </Suspense>
                    </Canvas>
                  </div>
                )}
                <h2>{selectedCrypto.name}</h2>
                <p>Current Price: ${selectedCrypto.current_price}</p>
                <p>Market Cap: ${selectedCrypto.market_cap}</p>
                <p>24h Change: {selectedCrypto.price_change_percentage_24h}%</p>
              </div>
              <div className="chartsContainer">
                <div className="chartSelector">
                  <label htmlFor="chartSelect" className='chart-text'>Choose a chart:</label>
                  <select
                    id="chartSelect"
                    value={selectedChart}
                    onChange={(e) => setSelectedChart(e.target.value)}
                    className="chartDropdown"
                  >
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                    <option value="radar">Radar Chart</option>
                  </select>
                  {priceHistory && selectedChart === 'line' && (
                    <Line data={priceHistory} />
                  )}
                  {priceHistory && selectedChart === 'bar' && (
                    <Bar data={priceHistory} />
                  )}
                  {priceHistory && selectedChart === 'pie' && (
                    <Pie data={priceHistory} />
                  )}
                  {priceHistory && selectedChart === 'radar' && (
                    <Radar data={priceHistory} />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Buy;
