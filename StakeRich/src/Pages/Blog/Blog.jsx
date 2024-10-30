import React, { Suspense, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Robot from '../../models/Robot';
import Rhea from '../../models/Rhea';
import Milo from '../../models/Milo';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import './Blog.css';
import connectContent from './howto.jsx';
import Tradeinfo from './trade-info.jsx'; 
import Buy from './buy.jsx';
import Lelia from '../../models/Lelia.jsx';

const Blog = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add('blog-page-body');
    return () => {
      document.body.classList.remove('blog-page-body');
    };
  }, []);

  const animations = [
    "Idle Animation", 
    "Sit (Static)", 
    "Pose (Static)", 
    "Stretch (Static)", 
    "animation.lael.idlemain",
    "animation.lael.idle",
    "animation.lael.idle_jump_main"
  ]; 

  const texts = [
    { text: "Connect Wallet?", animation: 1 },
    { text: "Swap?", animation: 2 },
    { text: "Buy Crypto?", animation: 3 },
    { text: "Experience 3D...", animation: 4 }
  ];

  const handleMouseEnter = (index) => {
    setAnimationIndex(texts[index].animation);
  };

  const handleMouseLeave = () => {
    setAnimationIndex(0); 
  };

  const handleClick = (index) => {
    document.getElementById(`viewport-${index + 1}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <clipPath id="clip-path-ellipse">
            <ellipse cx="50%" cy="50%" rx="80%" ry="70%" />
          </clipPath>
          <clipPath id="clip-path-polygon">
            <polygon points="0,10 10,0 90,0 100,10 100,90 90,100 10,100 0,90" />
          </clipPath>
        </defs>
      </svg>

      <div className="blog-container" id="viewport-1">
        <Navbar />
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
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
            <Robot 
              position={[0, -4, 0]} 
              rotation={[0.2, 0, 0]} 
              scale={[4, 4, 4]} 
              castShadow 
              receiveShadow
              animation={animations[animationIndex]} 
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
        <div className='steps'>
        <div 
          className="left-text-1 writing-effect" 
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          {texts[0].text}
        </div>
        <div 
          className="left-text-2 writing-effect" 
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(2)}
        >
          {texts[1].text}
        </div>
        <div 
          className="right-text-1 writing-effect" 
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          {texts[2].text}
        </div>
        <div 
          className="right-text-2 writing-effect" 
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          {texts[3].text}
        </div>
        </div>
      </div>

      <div className="blog-container" id="viewport-2">
        <Navbar />
        <div className="pixelated-title">
          How to Connect Wallet?
        </div>
        {connectContent}  
        <Canvas className='model1' shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
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
            <Rhea 
              position={[9, -5, 1]} 
              rotation={[0, -0.8, 0]} 
              scale={[5, 5, 5]} 
              castShadow 
              receiveShadow
              animation={animations[4]} 
            />
            <mesh 
              position={[0, -3.5, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>

      <div className="blog-container" id="viewport-3">
        <Navbar />
        <div className="pixelated-title">
          Swap
        </div>
        {Tradeinfo}
        <Canvas className='model2' shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
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
            <Milo 
              position={[-8, -5, 1]} 
              rotation={[0, 0.8, 0]} 
              scale={[5, 5, 5]} 
              castShadow 
              receiveShadow
              animation={animations[6]} 
            />
            <mesh 
              position={[0, -3.5, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>

      <div className="blog-container" id="viewport-4">
        <Navbar />
        <div className="pixelated-title">
          Buy Crypto
        </div>
        {Buy}
        <Canvas className='model1' shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
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
            <Lelia 
              position={[9, -5, 1]} 
              rotation={[0, -0.8, 0]} 
              scale={[5, 5, 5]} 
              castShadow 
              receiveShadow
              animation={animations[4]} 
            />
            <mesh 
              position={[0, -3.5, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Blog;
