

import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Tree=(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3_seconds_of_vacations.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.values(actions).forEach(action => action.play());
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Plane006" position={[-0.185, 0.057, -0.669]} scale={0.264}>
              <mesh
                name="Plane006_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane006_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Circle" position={[0.426, -0.981, -1.021]} scale={9.125}>
              <mesh
                name="Circle_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Circle_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Circle_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Cylinder014"
              position={[1.771, -2.275, -0.616]}
              rotation={[-0.191, 0.615, 0.061]}
              scale={1.117}>
              <mesh
                name="Cylinder014_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder014_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Sphere002" position={[0.392, -2.317, -1.021]} scale={0.43}>
              <mesh
                name="Sphere002_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere002_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane001"
              position={[-0.422, 0.173, 0.048]}
              rotation={[0.103, 0.012, -0.023]}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane008"
              position={[1.442, -0.959, -0.883]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane008_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane008_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="tree" position={[0.21, -1.157, 1.109]} scale={0.539}>
              <mesh
                name="tree_0"
                castShadow
                receiveShadow
                geometry={nodes.tree_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.tree_0.morphTargetDictionary}
                morphTargetInfluences={nodes.tree_0.morphTargetInfluences}
              />
            </group>
            <group name="Plane029" position={[-1.138, 1.227, -0.836]}>
              <mesh
                name="Plane029_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane029_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Plane029_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane029_0.morphTargetInfluences}
              />
            </group>
            <group name="Plane" position={[-1.138, 1.227, -0.836]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.Material}
              />
              <group
                name="Vert001"
                position={[0.735, 0.058, 0.211]}
                rotation={[0.498, 0.42, 0.716]}>
                <mesh
                  name="Vert001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Vert001_0.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cylinder016" position={[0.074, -0.378, 0.062]}>
                <mesh
                  name="Cylinder016_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder016_0.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Plane011"
                position={[-0.638, -0.038, 0.132]}
                rotation={[0, 0, -3.081]}
                scale={0.826}>
                <mesh
                  name="Plane011_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane011_0.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
            <group name="Plane010" position={[0.247, -1.112, 0.087]}>
              <mesh
                name="Plane010_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane010_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane004" position={[0.246, -1.116, 0.08]}>
              <mesh
                name="Plane004_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane004_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane018"
              position={[0.923, -1.662, 0.043]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane018_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane018_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Circle001" position={[0.21, -1.157, 1.231]}>
              <mesh
                name="Circle001_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane005"
              position={[0.274, -1.135, 0.627]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane005_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane005_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane007" position={[0.21, -1.157, 1.109]}>
              <mesh
                name="Plane007_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane007_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder" position={[0.508, -1.782, 0.392]}>
              <mesh
                name="Cylinder_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Circle002" position={[0.506, -1.618, 0.376]} scale={0.052}>
              <mesh
                name="Circle002_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle002_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Sphere001" position={[-0.591, -3.432, -1.058]}>
              <mesh
                name="Sphere001_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Sphere004" position={[-0.173, -2.929, -1.059]}>
              <mesh
                name="Sphere004_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere004_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane003"
              position={[0.826, -0.846, 0.211]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane003_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane003_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane012"
              position={[-0.279, -1.429, 0.182]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane012_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane012_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Mball003" position={[0.728, -2.118, 2.063]} scale={0.021}>
              <mesh
                name="Mball003_0"
                castShadow
                receiveShadow
                geometry={nodes.Mball003_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Mball003_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Mball003_0.morphTargetInfluences}
              />
            </group>
            <group name="Circle004" position={[-0.362, -0.496, 0.142]}>
              <mesh
                name="Circle004_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle004_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder005"
              position={[1.033, -2.128, -0.502]}
              rotation={[-0.037, -0.086, 1.154]}
              scale={0.059}>
              <mesh
                name="Cylinder005_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Cylinder005_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder005_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Cylinder013"
              position={[1.434, -1.076, -0.17]}
              rotation={[-0.064, 0.191, 0.008]}
              scale={0.69}>
              <mesh
                name="Cylinder013_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder013_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder015"
              position={[0.337, -2.522, -0.658]}
              rotation={[0.473, -0.238, -0.064]}
              scale={0.875}>
              <mesh
                name="Cylinder015_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder015_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder017"
              position={[-0.059, -1.979, -0.115]}
              rotation={[0.611, -0.143, 0.043]}
              scale={1.117}>
              <mesh
                name="Cylinder017_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder017_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder018"
              position={[-1.017, -2.127, -0.632]}
              rotation={[0.185, -0.47, -0.122]}
              scale={1.117}>
              <mesh
                name="Cylinder018_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder018_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder019"
              position={[-0.784, -0.838, -0.18]}
              rotation={[-0.138, -0.286, -0.283]}
              scale={1.271}>
              <mesh
                name="Cylinder019_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder019_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder020"
              position={[0.577, -0.156, -0.161]}
              rotation={[-0.567, 0.241, -0.501]}
              scale={1.351}>
              <mesh
                name="Cylinder020_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder020_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder021" position={[0.973, 0.602, -0.405]}>
              <mesh
                name="Cylinder021_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder021_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane002" position={[0.968, 0.604, 0.258]}>
              <mesh
                name="Plane002_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane002_0.geometry}
                material={materials.Material}
              />
              <group name="Plane034">
                <mesh
                  name="Plane034_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane034_0.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
            <group
              name="Cube001"
              position={[0.959, -0.559, 1.078]}
              rotation={[0, 0, 0.678]}
              scale={[0.069, 0.069, 0.057]}>
              <mesh
                name="Cube001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Cylinder022"
              position={[0.926, -0.545, 1.068]}
              rotation={[-1.611, 0.918, 0.684]}
              scale={0.016}>
              <mesh
                name="Cylinder022_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder022_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder023" position={[0.973, 0.602, -0.299]}>
              <mesh
                name="Cylinder023_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder023_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane009" position={[0.005, 0.527, 0.051]}>
              <mesh
                name="Plane009_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane009_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Circle003" position={[0.21, -1.157, -1.033]} scale={4.337}>
              <mesh
                name="Circle003_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle003_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane013" position={[-0.104, -0.312, 0.379]} rotation={[0, 0, -0.576]}>
              <mesh
                name="Plane013_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane013_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane014" position={[0.274, -1.135, 0.627]}>
              <mesh
                name="Plane014_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane014_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane016"
              position={[1.118, -0.952, 0.291]}
              rotation={[0, 0, 1.755]}
              scale={[0.225, 0.241, 0.264]}>
              <mesh
                name="Plane016_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane016_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane017" position={[0.274, -1.135, 0.627]}>
              <mesh
                name="Plane017_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane017_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane019" position={[0.274, -1.135, 0.627]} rotation={[0, 0, -2.054]}>
              <mesh
                name="Plane019_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane019_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane020" position={[-0.673, -1.391, 0.497]} rotation={[0, 0, 3.029]}>
              <mesh
                name="Plane020_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane020_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Sphere"
              position={[0.953, -0.387, 3.265]}
              rotation={[0, 0, 0.644]}
              scale={0.076}>
              <mesh
                name="Sphere_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Sphere_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Sphere_0.morphTargetInfluences}
              />
            </group>
            <group name="Plane021" position={[0.004, 0.677, 0.049]}>
              <mesh
                name="Plane021_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane021_0.geometry}
                material={materials.Material}
                morphTargetDictionary={nodes.Plane021_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane021_0.morphTargetInfluences}
              />
            </group>
            <group name="Cylinder024" position={[0.172, 0.272, 0.076]} scale={[1, 1, 0.383]}>
              <mesh
                name="Cylinder024_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder024_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Sphere003"
              position={[0.06, 0.308, 0.762]}
              rotation={[0.099, -0.212, 0.017]}
              scale={1.089}>
              <mesh
                name="Sphere003_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere003_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Circle005" position={[0.205, 0.525, 0.127]} scale={0.075}>
              <mesh
                name="Circle005_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle005_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder025" position={[0.906, -1.966, 1.201]}>
              <mesh
                name="Cylinder025_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder025_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane022"
              position={[0.821, -2.146, -0.255]}
              rotation={[0, 0, 0.581]}
              scale={[0.263, 0.263, 0.264]}>
              <mesh
                name="Plane022_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane022_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder026" position={[0.906, -1.966, 1.201]}>
              <mesh
                name="Cylinder026_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder026_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane023" position={[0.248, -1.109, 1.019]}>
              <mesh
                name="Plane023_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane023_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane015"
              position={[-0.598, -1.378, 0.355]}
              rotation={[0, 0, -1.331]}
              scale={[0.225, 0.241, 0.264]}>
              <mesh
                name="Plane015_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane015_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane024"
              position={[-0.004, -1.973, 0.342]}
              rotation={[0, 0, -0.342]}
              scale={[0.225, 0.241, 0.264]}>
              <mesh
                name="Plane024_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane024_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane025" position={[-0.914, -0.925, 0.983]}>
              <mesh
                name="Plane025_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane025_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane026" position={[-0.863, -1.453, 0.98]} rotation={[0, 0, 0.191]}>
              <mesh
                name="Plane026_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane026_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane027" position={[-0.75, -0.46, 0.968]} rotation={[0, 0, -0.677]}>
              <mesh
                name="Plane027_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane027_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Torus"
              position={[-1.249, -0.704, -0.574]}
              rotation={[-0.016, 0.153, 0.26]}
              scale={[1.267, 1, 1]}>
              <mesh
                name="Torus_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Cylinder027" position={[-1.285, -0.711, -0.718]}>
              <mesh
                name="Cylinder027_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder027_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Torus001"
              position={[-1.249, -0.704, -0.574]}
              rotation={[-0.016, 0.153, 0.26]}
              scale={[1.267, 1, 1]}>
              <mesh
                name="Torus001_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Vert" position={[-1.263, -0.693, -0.529]}>
              <mesh
                name="Vert_0"
                castShadow
                receiveShadow
                geometry={nodes.Vert_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Sphere005" position={[1.311, -1.136, -0.81]} scale={0.826}>
              <mesh
                name="Sphere005_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere005_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Sphere006"
              position={[1.192, -0.893, -0.726]}
              rotation={[0, -0.468, 0]}
              scale={0.709}>
              <mesh
                name="Sphere006_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere006_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Sphere007"
              position={[1.059, -1.13, -0.544]}
              rotation={[-0.254, -0.116, 1.392]}
              scale={0.709}>
              <mesh
                name="Sphere007_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere007_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane028" position={[-0.975, -3.498, -1.365]}>
              <mesh
                name="Plane028_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane028_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane032"
              position={[0.411, -1.664, 0.382]}
              rotation={[-1.906, 0.245, 1.642]}
              scale={0.356}>
              <mesh
                name="Plane032_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane032_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane033"
              position={[0.274, -1.135, 0.627]}
              rotation={[0, 0, 1.755]}
              scale={0.264}>
              <mesh
                name="Plane033_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane033_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Circle006"
              position={[0.412, -1.661, 0.376]}
              rotation={[0, 0, 1.238]}
              scale={0.052}>
              <mesh
                name="Circle006_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle006_0.geometry}
                material={materials.Material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3_seconds_of_vacations.glb')

export default Tree;