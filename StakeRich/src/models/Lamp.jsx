import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Lamp = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/a_street_lamp.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      // Play the first animation
      actions[names[0]].play();
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_7">
                <group name="bone_6">
                  <group name="cube_0">
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_1">
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_2">
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_3">
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_4">
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_5">
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/a_street_lamp.glb');

export default Lamp;
