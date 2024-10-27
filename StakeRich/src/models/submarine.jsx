import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Submarine = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/submarine.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach(action => action.play());
  }, [actions]);

  // Update material_2 properties for a shiny effect
  useEffect(() => {
    if (materials.material_2) {
      materials.material_2.metalness = 1.5; // Higher metalness for more reflection
      materials.material_2.roughness = 0.1; // Lower roughness for shinier surface
      materials.material_2.envMapIntensity = 1.5; // Increase the intensity of the environment map reflection
    }
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_18">
                <group name="Floor_0">
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group name="Body_17">
                  <group name="cube_1">
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="Glass_2">
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_2}
                    />
                  </group>
                  <group name="cube_3">
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_4">
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_5">
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_6" rotation={[0.218, 0, 0]}>
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_7">
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.material_2}
                    />
                  </group>
                  <group name="cube_8">
                    <mesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.material_2}
                    />
                  </group>
                  <group name="cube_9">
                    <mesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials.material_2}
                    />
                  </group>
                  <group name="cube_10">
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.material_2}
                    />
                  </group>
                  <group name="cube_11">
                    <mesh
                      name="Object_28"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_12">
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="Anim1_14" position={[0, 0.75, 1.188]}>
                    <group name="Flap_13" position={[0, -0.75, -1.188]}>
                      <mesh
                        name="Object_33"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_33.geometry}
                        material={materials.material_1}
                      />
                    </group>
                  </group>
                  <group name="Anim2_16" position={[0, 1.375, 0]}>
                    <group name="Lid_15" position={[0, 0.063, 0]}>
                      <mesh
                        name="Object_36"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.material_1}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/submarine.glb')

export default Submarine;
