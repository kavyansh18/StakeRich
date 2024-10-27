import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Malamal = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/bitcoin_factory.glb');
  const { actions } = useAnimations(animations, group);

  // Custom material for subtle shine
  const subtleShinyMaterial = new MeshStandardMaterial({
    color: "#FFD700",  // Gold color
    metalness: 0.5,
    roughness: 0.5,
    emissive: "#FFD700",
    emissiveIntensity: 0.2,
  });

  const subtleBoxMaterial = new MeshStandardMaterial({
    color: "#FFFFFF",  // Adjust color as needed
    metalness: 0.3,
    roughness: 0.7,
    emissive: "#FFFFFF",
    emissiveIntensity: 0.1,
  });

  // Start all animations
  useEffect(() => {
    Object.values(actions).forEach(action => action.play());
  }, [actions]);

  const applyMaterial = (node, material) => {
    if (node) {
      return (
        <mesh
          castShadow
          receiveShadow
          geometry={node.geometry}
          material={material}
        />
      );
    }
    return null;
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.024}>
          <group name="04c4dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="charecter_1" position={[-66.25, 81.076, 72.5]} scale={[1, 0.981, 1]}>
                  {applyMaterial(nodes.charecter_1_Rez01palette_0, materials.Rez01palette)}
                </group>
                <group name="Correction" />
                <group name="Interior_new">
                  {applyMaterial(nodes.Interior_new_Rez01palette_0, materials.Rez01palette)}
                </group>
                <group name="polySurface30">
                  {applyMaterial(nodes.polySurface30_Rez01palette_0, materials.Rez01palette)}
                </group>
                <group name="BTC01_4" position={[23.75, 50.025, -100.227]}>
                  {applyMaterial(nodes.BTC01_4_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="BTC01_3" position={[23.75, 50.025, -100.227]}>
                  {applyMaterial(nodes.BTC01_3_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="BTC01_2" position={[23.75, 50.025, -100.227]}>
                  {applyMaterial(nodes.BTC01_2_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="BTC01" position={[23.75, 50.025, -100.227]}>
                  {applyMaterial(nodes.BTC01_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="BTC00" position={[25.429, 50.025, 6.403]}>
                  {applyMaterial(nodes.BTC00_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="Null_4" position={[0, 0, -7.4]}>
                  <group name="money_drop02" position={[-126.81, 67.506, -92.5]} rotation={[0, 0, Math.PI / 2]}>
                    {applyMaterial(nodes.money_drop02_Rez01palette_0, subtleShinyMaterial)}
                  </group>
                </group>
                <group name="Null_2" position={[0, 0, -7.4]}>
                  <group name="money_drop02_2" position={[-90.982, 65.089, -92.5]} rotation={[0, 0, Math.PI / 2]}>
                    {applyMaterial(nodes.money_drop02_2_Rez01palette_0, subtleShinyMaterial)}
                  </group>
                </group>
                <group name="Null_3" position={[0, 0, -7.4]}>
                  <group name="money_drop02_3" position={[-53.173, 62.498, -92.5]} rotation={[0, 0, Math.PI / 2]}>
                    {applyMaterial(nodes.money_drop02_3_Rez01palette_0, subtleShinyMaterial)}
                  </group>
                </group>
                <group name="Null_1" position={[0, 0, -7.4]}>
                  <group name="money_drop02_4" position={[-15.797, 62.498, -92.5]} rotation={[0, 0, Math.PI / 2]}>
                    {applyMaterial(nodes.money_drop02_4_Rez01palette_0, subtleShinyMaterial)}
                  </group>
                </group>
                <group name="Null">
                  <group name="money_drop01" position={[-165.836, 129.574, -92.5]} rotation={[0, 0, -2.531]}>
                    {applyMaterial(nodes.money_drop01_Rez01palette_0, subtleShinyMaterial)}
                  </group>
                </group>
                <group name="BTC0" position={[26.25, 35, 46.25]}>
                  {applyMaterial(nodes.BTC0_Rez01palette_0, subtleShinyMaterial)}
                </group>
                <group name="roll01" position={[-108.75, 53.75, -96.25]}>
                  {applyMaterial(nodes.roll01_Rez01palette_0, subtleBoxMaterial)}
                </group>
                <group name="roll02" position={[-88.75, 53.75, -96.25]}>
                  {applyMaterial(nodes.roll02_Rez01palette_0, subtleBoxMaterial)}
                </group>
                <group name="Box01" position={[-120, 50, -50]}>
                  {applyMaterial(nodes.Box01_Rez01palette_0, subtleBoxMaterial)}
                </group>
                <group name="Box02" position={[-100, 50, -50]}>
                  {applyMaterial(nodes.Box02_Rez01palette_0, subtleBoxMaterial)}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/bitcoin_factory_-_voxel_art.glb');

export default Malamal;
