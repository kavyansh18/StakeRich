import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

const Ethereum = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ethereum_coin.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => action.play())
    }
  }, [actions])

  // Update the material properties to shiny dark
  const shinyDarkMaterial = new MeshStandardMaterial({
    color: '#515151',  // dark color
    metalness: 0.8,  // high metalness for a shiny appearance
    roughness: 0.01,  // low roughness for smoothness
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.01, 0, -0.01]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group
            name="35c758118ce74fb2911114a2add11458fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="CINEMA_4D_Editor"
                  position={[208.796, 86.059, 339.141]}
                  rotation={[Math.PI, 0.987, 3.039]}>
                  <group name="Object_5" />
                </group>
                <group name="eth">
                  <group
                    name="Pyramid_3"
                    position={[0.217, 72.604, 0.929]}
                    rotation={[0, Math.PI / 4, 0]}>
                    <mesh
                      name="Pyramid_3_C_Silver_Base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Pyramid_3_C_Silver_Base_0.geometry}
                      material={shinyDarkMaterial}  // Apply shiny dark material
                    />
                  </group>
                  <group
                    name="Pyramid_1"
                    position={[-0.108, -36.302, 32.916]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Pyramid_1_C_Silver_Base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Pyramid_1_C_Silver_Base_0.geometry}
                      material={shinyDarkMaterial}  // Apply shiny dark material
                    />
                  </group>
                  <group
                    name="Pyramid"
                    position={[-0.108, -36.302, -33.845]}
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Pyramid_C_Silver_Base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Pyramid_C_Silver_Base_0.geometry}
                      material={shinyDarkMaterial}  // Apply shiny dark material
                    />
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

useGLTF.preload('/ethereum_coin.glb')

export default Ethereum
