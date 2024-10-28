import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from '../components/Navbar/Navbar';
import './Test.css';
import { Suspense } from 'react';
import Main from '../models/main.jsx';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import test from "../assets/6581883.gif";

const Test = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const stakeRef = useRef(null); // Create ref for stake section

  useEffect(() => {
    const handleDarkModeToggle = () => {
      setDarkMode(document.body.classList.contains('dark-mode'));
    };

    window.addEventListener('dark-mode-toggle', handleDarkModeToggle);

    return () => {
      window.removeEventListener('dark-mode-toggle', handleDarkModeToggle);
    };
  }, []);

  const handleTradeNowClick = () => {
    navigate('/buy');
  };

  const scrollToStakeSection = () => {
    if (stakeRef.current) {
      stakeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const animations = ["Hey!", "pose"];

  return (
    <>
      <Navbar />
      <div className={`hero-sectionb ${darkMode ? 'dark-mode' : ''}`}>
        <div className="news mr-40 ml-20">
          <h1 className='flex flex-col'>
            <span className="trustedb" onClick={scrollToStakeSection}>Stake</span> 
            <span className="trustedb">Send</span> 
          </h1>
        </div>
        <div className='model'>
          <Canvas shadows camera={{ position: [0, 0, 10] }}>
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
                scale={[0.5, 0.5, 0.5]} 
                castShadow 
                receiveShadow
                animation={animations[0]} 
                hoverAnimation={animations[1]} 
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
          </Canvas>
        </div>
      </div>

      {/* Stake Section with ref */}
      <div ref={stakeRef}>
        <div className='flex justify-center items-center text-7xl pt-20'>Stake</div>
        <div className='flex justify-center items-center'><img src={test} alt="Stake Image" /></div>
      </div>
    </>
  );
};

export default Test;
