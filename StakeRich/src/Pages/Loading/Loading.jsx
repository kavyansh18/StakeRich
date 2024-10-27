import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Stars } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import './Loading.css'; // Ensure this path is correct

const Arcade = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF('/arcade_machine_-_pixel-art_low-poly.glb'); // Ensure the path to GLB file is correct
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    for (let action in actions) {
      actions[action].reset().play();
    }
    return () => mixer.stopAllAction();
  }, [actions, mixer]);

  return (
    <group ref={group} {...props}>
      <primitive object={nodes.Sketchfab_model} />
    </group>
  );
};

useGLTF.preload('/arcade_machine_-_pixel-art_low-poly.glb');

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
};

const ShootingStars = () => {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const tempPositions = [];
    for (let i = 0; i < 5; i++) {
      const startX = Math.random() * 400 - 200;
      const startY = 50;
      const startZ = -200 + Math.random() * 100;
      for (let j = 0; j < 10; j++) {
        tempPositions.push(startX, startY - j, startZ + j * 0.5);
      }
    }
    return new Float32Array(tempPositions);
  }, []);

  useFrame(() => {
    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positionsArray.length; i += 30) {
      positionsArray[i] += 0.5;
      positionsArray[i + 1] -= 0.5;
      positionsArray[i + 2] += 1;
      for (let j = 3; j < 30; j += 3) {
        positionsArray[i + j] = positionsArray[i + j - 3];
        positionsArray[i + j + 1] = positionsArray[i + j - 2] + 0.05;
        positionsArray[i + j + 2] = positionsArray[i + j - 1] - 0.1;
      }
      if (positionsArray[i + 1] < -50 || positionsArray[i + 2] > 100) {
        positionsArray[i] = Math.random() * 400 - 200;
        positionsArray[i + 1] = 50;
        positionsArray[i + 2] = -200 + Math.random() * 100;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="white"
        size={1.5}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000); // Adjusted to 3 seconds for testing
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-text">Loading . . .</div>
      <Canvas gl={{ alpha: false }} style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <AnimatedStars />
        <ShootingStars />
        <Arcade position={[0, -2.5, 0]} rotation={[0.2, 0, 0]} scale={[2, 2, 2]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Loading;
