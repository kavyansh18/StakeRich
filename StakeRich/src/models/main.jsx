import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from "../models/Contexts/CharcaterAnimation";

const Main = ({ animation, hoverAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/smeeb-bot_01.glb');
  const { actions, names } = useAnimations(animations, group);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentAnimation = isHovered && hoverAnimation ? hoverAnimation : animation;
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
      return () => {
        if (actions[currentAnimation]) {
          actions[currentAnimation].fadeOut(0.5);
        }
      };
    }
  }, [animation, hoverAnimation, isHovered, actions]);


  return (
    <group ref={group} {...props} dispose={null}  onPointerOver={() => setIsHovered(true)}
    onPointerOut={() => setIsHovered(false)}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_77">
                <group name="HOMAR_76">
                  <group name="body_48" position={[0.069, 7.511, 0]}>
                    <group name="upper_body_46" position={[-0.069, 0.364, 0]}>
                      <group name="upper_torso_arms_44" position={[0, 2.438, 0.063]}>
                        <group name="Head_15" position={[-0.219, 3.334, 0.137]}>
                          <group name="Head_bone_13" position={[0.125, 0.719, 0]}>
                            <group name="thingsonthehead_7" position={[-0.094, 2.125, 0]}>
                              <group
                                name="antennae_4"
                                position={[-0.094, 1.125, -2.313]}
                                rotation={[0, 0, -0.044]}>
                                <group name="R_1" position={[0.313, -0.063, 4.663]}>
                                  <group
                                    name="thing_0"
                                    position={[0, -0.063, -2.101]}
                                    rotation={[0.085, -0.019, -0.217]}>
                                    <mesh
                                      name="Object_14"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_14.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                </group>
                                <group name="L_3" position={[0.313, -0.063, -0.024]}>
                                  <group
                                    name="thing_2"
                                    position={[0, -0.063, 2.587]}
                                    rotation={[-0.085, 0.019, -0.217]}>
                                    <mesh
                                      name="Object_17"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_17.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                </group>
                              </group>
                              <group name="left_thing_5">
                                <mesh
                                  name="Object_19"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_19.geometry}
                                  material={materials.material_1}
                                />
                                <mesh
                                  name="Object_20"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_20.geometry}
                                  material={materials.material_2}
                                />
                              </group>
                              <group name="right_thing_6">
                                <mesh
                                  name="Object_22"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_22.geometry}
                                  material={materials.material_2}
                                />
                                <mesh
                                  name="Object_23"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_23.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="led_9" position={[1.5, -18.156, -1.688]}>
                              <group name="Head_8">
                                <mesh
                                  name="Object_26"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_26.geometry}
                                  material={materials.material_3}
                                />
                              </group>
                            </group>
                            <group name="Head_10" position={[1.5, -18.156, -1.688]}>
                              <mesh
                                name="Object_28"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_28.geometry}
                                material={materials.material_2}
                              />
                            </group>
                            <group name="Head_11" position={[0.094, 2.063, 0]}>
                              <mesh
                                name="Object_30"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_30.geometry}
                                material={materials.material_4}
                              />
                              <mesh
                                name="Object_31"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_31.geometry}
                                material={materials.material_5}
                              />
                            </group>
                            <group name="Head_12" position={[1.5, -18.156, -1.688]}>
                              <mesh
                                name="Object_33"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_33.geometry}
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group name="neck_14" position={[0, 0.656, 0]} rotation={[0, 0, 0.044]}>
                            <mesh
                              name="Object_35"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_35.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group name="Arms_42" position={[0.375, 2.313, 0]}>
                          <group
                            name="ArmR_28"
                            position={[-0.11, 0.287, 1.856]}
                            rotation={[-1.658, 0, 0]}>
                            <group
                              name="armR2_27"
                              position={[-0.018, -0.911, -0.482]}
                              rotation={[-0.035, 0, 0]}>
                              <group name="lower_armR_22" position={[-0.047, -0.774, -3.273]}>
                                <group name="hand_wristR_19" position={[-0.013, 0.575, -1.379]}>
                                  <group name="handR_17" position={[-0.05, 0.031, -1.125]}>
                                    <group name="hand_16" position={[1.519, -16.555, 7.145]}>
                                      <mesh
                                        name="Object_43"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_43.geometry}
                                        material={materials.material_6}
                                      />
                                    </group>
                                  </group>
                                  <group name="wrist_18" position={[1.469, -16.524, 0.083]}>
                                    <mesh
                                      name="Object_45"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_45.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                </group>
                                <group name="lower-arm-part_20" position={[1.456, -15.949, -1.296]}>
                                  <mesh
                                    name="Object_47"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_47.geometry}
                                    material={materials.material_7}
                                  />
                                  <mesh
                                    name="Object_48"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_48.geometry}
                                    material={materials.material_6}
                                  />
                                </group>
                                <group
                                  name="arm-joint_21"
                                  position={[0.019, 0.832, -6.608]}
                                  rotation={[0, -Math.PI / 4, 0]}>
                                  <mesh
                                    name="Object_50"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_50.geometry}
                                    material={materials.material_6}
                                  />
                                </group>
                              </group>
                              <group name="upper-arm-part_23" position={[1.409, -16.723, -5.068]}>
                                <mesh
                                  name="Object_52"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_52.geometry}
                                  material={materials.material_7}
                                />
                                <mesh
                                  name="Object_53"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_53.geometry}
                                  material={materials.material_6}
                                />
                              </group>
                              <group name="upper-arm-part_24" position={[1.409, -16.723, -4.568]}>
                                <mesh
                                  name="Object_55"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_55.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="shoulderL_25"
                                position={[-0.029, 0.508, 0.193]}
                                rotation={[-1.582, -0.115, 0.614]}>
                                <mesh
                                  name="Object_57"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_57.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="arm-joint_26"
                                position={[-0.029, 0.058, -9.881]}
                                rotation={[0, -Math.PI / 4, 0]}>
                                <mesh
                                  name="Object_59"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_59.geometry}
                                  material={materials.material_6}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="ArmL_41"
                            position={[-0.172, 0.225, -1.457]}
                            rotation={[-1.44, 0, 0]}>
                            <group name="armL2_39" position={[-0.026, 0.901, -0.268]}>
                              <group name="lower_armL_35" position={[0.453, 0.442, -3.357]}>
                                <group name="hand_wristL_32" position={[-0.442, 0, -1.239]}>
                                  <group name="handL_30" position={[-0.05, -0.031, -0.875]}>
                                    <group name="hand_29" position={[1.519, -17.07, 6.648]}>
                                      <mesh
                                        name="Object_66"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_66.geometry}
                                        material={materials.material_6}
                                      />
                                    </group>
                                  </group>
                                  <group name="wrist_31" position={[1.469, -17.101, -0.165]}>
                                    <mesh
                                      name="Object_68"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_68.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                </group>
                                <group name="lower-arm-part_33" position={[1.027, -17.101, -1.403]}>
                                  <mesh
                                    name="Object_70"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_70.geometry}
                                    material={materials.material_7}
                                  />
                                  <mesh
                                    name="Object_71"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_71.geometry}
                                    material={materials.material_6}
                                  />
                                </group>
                                <group
                                  name="arm-joint_34"
                                  position={[-0.411, -0.32, -6.716]}
                                  rotation={[0, -Math.PI / 4, 0]}>
                                  <mesh
                                    name="Object_73"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_73.geometry}
                                    material={materials.material_6}
                                  />
                                </group>
                              </group>
                              <group name="upper-arm-part_36" position={[1.48, -16.659, -4.76]}>
                                <mesh
                                  name="Object_75"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_75.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group name="upper-arm-part_37" position={[1.48, -16.659, -5.26]}>
                                <mesh
                                  name="Object_77"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_77.geometry}
                                  material={materials.material_7}
                                />
                                <mesh
                                  name="Object_78"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_78.geometry}
                                  material={materials.material_6}
                                />
                              </group>
                              <group
                                name="arm-joint_38"
                                position={[0.042, 0.122, -10.073]}
                                rotation={[0, -Math.PI / 4, 0]}>
                                <mesh
                                  name="Object_80"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_80.geometry}
                                  material={materials.material_6}
                                />
                              </group>
                            </group>
                            <group
                              name="shoulderL_40"
                              position={[-0.028, -1.661, 0.053]}
                              rotation={[1.638, -0.092, -0.558]}>
                              <mesh
                                name="Object_82"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_82.geometry}
                                material={materials.material_0}
                              />
                            </group>
                          </group>
                        </group>
                        <group name="torso_43" position={[-0.188, 1.553, 0.137]}>
                          <mesh
                            name="Object_84"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_84.geometry}
                            material={materials.material_8}
                          />
                        </group>
                      </group>
                      <group name="abdomen_45" position={[0, 1.5, 0]} rotation={[0, 0, -0.044]}>
                        <mesh
                          name="Object_86"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_86.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group
                      name="pelvis_47"
                      position={[-0.131, 0.146, -0.031]}
                      rotation={[0, 0, 0.087]}>
                      <mesh
                        name="Object_88"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_88.geometry}
                        material={materials.material_8}
                      />
                    </group>
                  </group>
                  <group name="Legs_75" position={[0, 7.938, 0]}>
                    <group name="LegL_61" position={[0.125, -0.781, 0.094]}>
                      <group name="lower_legL_57" position={[0.143, -3.326, -1.531]}>
                        <group name="footL_53" position={[-0.062, -2.163, -0.875]}>
                          <group name="footboneL_50" position={[0.235, -0.738, -0.003]}>
                            <group name="foot_49" position={[-0.379, 6.353, 2.403]}>
                              <mesh
                                name="Object_95"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_95.geometry}
                                material={materials.material_6}
                              />
                            </group>
                          </group>
                          <group
                            name="leg-joint_51"
                            position={[-0.072, -0.111, 1.119]}
                            rotation={[0, 0, 0.724]}>
                            <mesh
                              name="Object_97"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_97.geometry}
                              material={materials.material_6}
                            />
                          </group>
                          <group name="foot-part_52" position={[-0.082, 5.052, 2.4]}>
                            <mesh
                              name="Object_99"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_99.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group name="lower-leg-part_54" position={[-0.143, 3.701, 1.525]}>
                          <mesh
                            name="Object_101"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_101.geometry}
                            material={materials.material_6}
                          />
                        </group>
                        <group name="lower-leg-part_55" position={[-0.125, -1.799, 0.244]}>
                          <mesh
                            name="Object_103"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_103.geometry}
                            material={materials.material_7}
                          />
                          <mesh
                            name="Object_104"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_104.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="leg-joint_56"
                          position={[-0.115, 0.077, 1.625]}
                          rotation={[0, 0, 0.829]}>
                          <mesh
                            name="Object_106"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_106.geometry}
                            material={materials.material_6}
                          />
                        </group>
                      </group>
                      <group name="upper-leg-part_58" position={[0, 0.125, 0]}>
                        <mesh
                          name="Object_108"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_108.geometry}
                          material={materials.material_7}
                        />
                        <mesh
                          name="Object_109"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_109.geometry}
                          material={materials.material_6}
                        />
                      </group>
                      <group name="upper-leg-part_59" position={[0, 0.313, 0]}>
                        <mesh
                          name="Object_111"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_111.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="leg-joint_60"
                        position={[0, 0.125, 0]}
                        rotation={[0, 0, Math.PI / 4]}>
                        <mesh
                          name="Object_113"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_113.geometry}
                          material={materials.material_6}
                        />
                      </group>
                    </group>
                    <group name="LegR_74" position={[0.125, -0.781, 0.781]}>
                      <group name="lower_legR_70" position={[0.144, -3.344, 0.781]}>
                        <group name="footR_66" position={[-0.094, -2.047, 0]}>
                          <group name="footboneR_63" position={[0.281, -0.828, 0]}>
                            <group name="foot_62" position={[0, -0.063, 0]}>
                              <mesh
                                name="Object_119"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_119.geometry}
                                material={materials.material_6}
                              />
                            </group>
                          </group>
                          <group
                            name="leg-joint_64"
                            position={[-0.029, -0.191, 0]}
                            rotation={[0, 0, -0.89]}>
                            <mesh
                              name="Object_121"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_121.geometry}
                              material={materials.material_6}
                            />
                          </group>
                          <group name="foot-part_65" position={[-0.013, -8.672, -1.281]}>
                            <mesh
                              name="Object_123"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_123.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="leg-joint_67"
                          position={[-0.116, 0.095, -1.375]}
                          rotation={[0, 0, -0.742]}>
                          <mesh
                            name="Object_125"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_125.geometry}
                            material={materials.material_6}
                          />
                        </group>
                        <group name="lower-leg-part_68" position={[-0.106, 3.781, -1.281]}>
                          <mesh
                            name="Object_127"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_127.geometry}
                            material={materials.material_6}
                          />
                        </group>
                        <group name="lower-leg-part_69" position={[-0.106, 3.781, -1.281]}>
                          <mesh
                            name="Object_129"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_129.geometry}
                            material={materials.material_7}
                          />
                          <mesh
                            name="Object_130"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_130.geometry}
                            material={materials.material_0}
                          />
                        </group>
                      </group>
                      <group name="upper-leg-part_71" position={[0.038, 0.125, -0.5]}>
                        <mesh
                          name="Object_132"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_132.geometry}
                          material={materials.material_7}
                        />
                        <mesh
                          name="Object_133"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_133.geometry}
                          material={materials.material_6}
                        />
                      </group>
                      <group name="upper-leg-part_72" position={[0.038, 0.313, -0.5]}>
                        <mesh
                          name="Object_135"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_135.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="leg-joint_73"
                        position={[0.038, 0.125, -0.5]}
                        rotation={[0, 0, -Math.PI / 4]}>
                        <mesh
                          name="Object_137"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_137.geometry}
                          material={materials.material_6}
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
    </group>
  )
}

useGLTF.preload('/smeeb-bot_01.glb')

export default Main;
