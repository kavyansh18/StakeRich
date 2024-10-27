import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Arcade = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/arcade_machine_-_pixel-art_low-poly.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.203}>
          <group name="c548597b05464e0ea206891e92ffc3aefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="pCylinder10" scale={100}>
                  <mesh
                    name="pCylinder10_Cabnet_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder10_Cabnet_0.geometry}
                    material={materials.Cabnet}
                  />
                </group>
                <group
                  name="screen_glare"
                  position={[-156.326, 780.103, 71.914]}
                  rotation={[-0.334, 1.294, -Math.PI / 2]}
                  scale={[98.187, 100, 98.187]}>
                  <mesh
                    name="screen_glare_standardSurface2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.screen_glare_standardSurface2_0.geometry}
                    material={materials.standardSurface2}
                  />
                </group>
                <group
                  name="pPlane2"
                  position={[0.011, 681.275, 10.404]}
                  rotation={[1.236, 0, 0]}
                  scale={[266.436, 543.558, 224.712]}>
                  <mesh
                    name="pPlane2_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane2_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane3"
                  position={[128.174, 697.8, 2.947]}
                  rotation={[1.239, 0, 0]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane3_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane3_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane4"
                  position={[195.865, 658.694, 16.202]}
                  rotation={[-1.92, 0, Math.PI]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane4_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane4_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane5"
                  position={[45.983, 688.357, 6.522]}
                  rotation={[-1.92, 0, -3.142]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane5_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane5_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane6"
                  position={[-24.869, 727.455, -6.727]}
                  rotation={[1.239, 0, 0]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane6_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane7"
                  position={[0, 621.688, 30.994]}
                  rotation={[1.216, 0, 0]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane7_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane7_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane8"
                  position={[205.847, 681.856, 7.668]}
                  rotation={[-1.92, 0, Math.PI]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane8_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane8_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="pPlane9"
                  position={[133.017, 726.765, -7.585]}
                  rotation={[1.239, 0, 0]}
                  scale={[255.034, 520.298, 215.096]}>
                  <mesh
                    name="pPlane9_blinn2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane9_blinn2_0.geometry}
                    material={materials.blinn2}
                  />
                </group>
                <group
                  name="Plane"
                  position={[128.145, 0, 296.378]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={504.188}>
                  <mesh
                    name="Plane_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group name="Plane001" position={[0, 502.392, -207.634]} scale={503.123}>
                  <mesh
                    name="Plane001_Material002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_Material002_0.geometry}
                    material={materials['Material.002']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/arcade_machine_-_pixel-art_low-poly.glb');

export default Arcade;
