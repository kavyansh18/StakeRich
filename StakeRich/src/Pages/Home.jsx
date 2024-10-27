import React,{useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Assuming the CSS file is in the same directory
import Hometruck from '../models/Hometruck';
import Dragon from '../models/Dragon'; // Import the Dragon model
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls
import Bitcoin from '../models/Bitcoin.jsx';
import  { Suspense, useState } from 'react';
import Main from '../models/main.jsx';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook



  useEffect(() => {
    const handleDarkModeToggle = () => {
      setDarkMode(document.body.classList.contains('dark-mode'));
    };

    // Add an event listener to detect changes in the dark mode state
    window.addEventListener('dark-mode-toggle', handleDarkModeToggle);

    // Clean up the event listener
    return () => {
      window.removeEventListener('dark-mode-toggle', handleDarkModeToggle);
    };
  }, []);

  const handleTradeNowClick = () => {
    navigate('/buy');
  };

  const [animationIndex, setAnimationIndex] = useState(0);

  const animations = [
   "Hey!",
    "pose", 
     
    
  ]; 
  return (
    <>
      
      <Navbar />
      <div className={`hero-section ${darkMode ? 'dark-mode' : ''}`}>
      
        <div className="news">
          <h1>
            World’s Most
            <br />
            <span className="trusted">TRUSTED</span> DEX
          </h1>
          <p><span className='earn'>Earn,</span> <span className='trade'>Trade,</span> <span className='swap'>Swap</span> and <span className='buy'>Buy</span> <span className='all'>all-in-one</span></p>
          
        </div>
        <div className='model'><Canvas  shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
      
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
            shadow-camera-near={0.5} 
            shadow-camera-far={50} 
            shadow-camera-left={-10} 
            shadow-camera-right={10} 
            shadow-camera-top={10} 
            shadow-camera-bottom={-10} 
          />
          <pointLight position={[0, 10, 10]} intensity={1} />
          <pointLight position={[0, -10, -10]} intensity={0.5} />
          <Suspense fallback={null}>
            <Main 
              position={[-1, -4.5, 0]} 
              rotation={[0.2, 1.5, 0]} 
              scale={[0.5,0.5,0.5]} 
              castShadow 
              receiveShadow
              animation={animations[0]} // Default animation
              hoverAnimation={animations[1]} // Animation on hover
              
            />
           
            <mesh 
              position={[0, -3, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
        </Canvas></div>
      </div>
      <div className={`ecosystem-section ${darkMode ? 'dark-mode' : ''}`}>
        <h2>DISCOVER OUR ECOSYSTEM</h2>

        <div className="features">
          <div className="feature1">
            <div className="f1img">
              <img src="/swap.png" alt="Swap Feature" />
            </div>
            <div className="f1info">
              <Link to="/trade"><h3>SWAP</h3>
              <p>Trade crypto instantly across multiple chains.</p>
              </Link>
              
            </div>
          </div>

          <div className="feature1">
            <div className="f2info">
              <Link to="/buy">
              <h3>BUY CRYPTO</h3>
              <p>Buy crypto with your choice of</p>
              <p>currency and payment method.</p>
              </Link>
            </div>
            <div className="f3img">
            <img src="/buy.png" alt="Buy Crypto Feature" />
            </div>
          </div>

          <div className="feature1">
            <div className="f2img">
            <img src="/blog.png" alt="Liquidity Feature" />
            </div>
            <div className="f3info">
              <Link to="/blog">
              <h3>BLOG</h3>
              <p>Your quick guide to clearing basic doubts and staying informed.</p>
              </Link>
            </div>
          </div>

       
        </div>
      </div>

      {/* <div className="table-container">

        <div className="dragon-canvas-container">
          <Canvas shadows>
            <ambientLight intensity={1} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

           
            <Dragon
              scale={[4, 4, 4]}
              position={[0, -4, 0]}
              rotation={[0, 0, 0]}
              castShadow
              receiveShadow
            />

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="model-monitor-wrapper">
          <div className="monitor-wrapper">
            <div className="monitor">
              <p>🪙🟡Crypto trading, where strategy meets the thrill of the digital frontier!🪙🟡</p>
            </div>
          </div>
          <div className="hometruck-canvas-container">
            <Canvas shadows>
              <ambientLight intensity={1} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />

              <spotLight
                position={[15, 20, 10]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />

            
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial transparent opacity={0.5} />
              </mesh>

             
              <Hometruck
                scale={[0.0115, 0.0115, 0.0115]}
                position={[0, 0, 0]}
                rotation={[0.2, 4.1, 0]}
                castShadow
              />

              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div> */}
      {/* </div> */}

      <div className={`join-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1>JOIN EVERYONE'S <span className="favourite">FAVOURITE</span> NOW!</h1>
        <p>Experience the power of community ownership, global governance, and explore infinite use cases within the StakeRich ecosystem</p>
        <button className="trade-button" onClick={handleTradeNowClick}>
          <h2>TRADE NOW</h2>
        </button>
      </div>
    </>
  );
};

export default Home;
