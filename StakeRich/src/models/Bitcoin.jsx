import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Bitcoin = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF('/remitano_la_gi_nhung_thong_tin_can_luu_y.glb');
  
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); // Center the model
  }, [scene]);

  // Animation for rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02; // Adjust the rotation speed as needed
    }
  });

  console.log('Bitcoin model loaded', scene);
  return (
    <group ref={groupRef} {...props} dispose={null} scale={[0.1, 0.1, 0.1]} position={[-0.5,0,0]}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload('/remitano_la_gi_nhung_thong_tin_can_luu_y.glb');

export default Bitcoin;
