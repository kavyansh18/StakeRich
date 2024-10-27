import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from "../models/Contexts/CharcaterAnimation";
import { useFrame } from '@react-three/fiber';

const Robot = ({ position, rotation, scale, headRotation, animation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/twelve_the_robot_low_poly.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      const head = group.current.getObjectByName('Head'); // Replace with the actual name of the head part in your model
      if (head) {
        head.rotation.x = headRotation.x;
        head.rotation.y = headRotation.y;
      }
    }
  });

  useEffect(() => {
    if (animation && actions[animation]) {
      actions[animation].reset().fadeIn(0.5).play();
      return () => {
        if (actions[animation]) {
          actions[animation].fadeOut(0.5);
        }
      };
    }
  }, [animation, actions]);

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.571, -0.017, -3.139]} scale={0.306}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_93">
                <group name="Twelve_92" position={[0, 3.375, 0]}>
                  <group name="Body_91">
                    <group name="Torso_76" position={[0, -0.135, 0]}>
                      <group name="LeftDrawstring_7" position={[0.188, 1.01, -0.375]}>
                        <group name="LD2_5" position={[0, -0.25, 0]}>
                          <group name="LD3_3" position={[0, -0.25, 0]}>
                            <group name="LD4_1" position={[0, -0.25, 0]}>
                              <group
                                name="plane_selection_selection_selection_0"
                                position={[-0.188, -0.688, -0.875]}
                                rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh
                                  name="Object_12"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_12.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                            </group>
                            <group
                              name="plane_selection_selection_2"
                              position={[-0.188, -0.938, -0.875]}
                              rotation={[-Math.PI / 2, 0, 0]}>
                              <mesh
                                name="Object_14"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_14.geometry}
                                material={materials.material_0}
                              />
                            </group>
                          </group>
                          <group
                            name="plane_selection_4"
                            position={[-0.188, -1.188, -0.875]}
                            rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                              name="Object_16"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_16.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group name="plane_6" position={[0, -0.063, 0]}>
                          <mesh
                            name="Object_18"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.material_0}
                          />
                        </group>
                      </group>
                      <group name="RightDrawstring_15" position={[-0.188, 1.01, -0.375]}>
                        <group name="RD2_13" position={[0, -0.25, 0]}>
                          <group name="RD3_11" position={[0, -0.25, 0]}>
                            <group name="RD4_9" position={[0, -0.25, 0]}>
                              <group
                                name="plane_selection_selection_selection_8"
                                position={[-0.188, -0.688, -0.875]}
                                rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh
                                  name="Object_24"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_24.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                            </group>
                            <group
                              name="plane_selection_selection_10"
                              position={[-0.188, -0.938, -0.875]}
                              rotation={[-Math.PI / 2, 0, 0]}>
                              <mesh
                                name="Object_26"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_26.geometry}
                                material={materials.material_0}
                              />
                            </group>
                          </group>
                          <group
                            name="plane_selection_12"
                            position={[-0.188, -1.188, -0.875]}
                            rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                              name="Object_28"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_28.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group name="plane_14" position={[-0.188, -1.438, -0.875]}>
                          <mesh
                            name="Object_30"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials.material_0}
                          />
                        </group>
                      </group>
                      <group name="LeftArm_37" position={[-0.438, 0.823, 0]}>
                        <group name="LeftForearm_35" position={[-0.803, -0.125, 0]}>
                          <group name="LeftHand_33" position={[-0.865, 0, 0.01]}>
                            <group name="LThumb_19" position={[-0.125, 0, -0.188]}>
                              <group name="LThumb2_17" position={[0, 0, -0.219]}>
                                <group name="cylinder_16" position={[0, 0, 0.406]}>
                                  <mesh
                                    name="Object_37"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_37.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_18" position={[0, 0, 0.188]}>
                                <mesh
                                  name="Object_39"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_39.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="LIndex_23" position={[-0.312, 0, -0.188]}>
                              <group name="LIndex2_21" position={[-0.219, 0, 0]}>
                                <group name="cylinder_20" position={[0.406, 0, 0.188]}>
                                  <mesh
                                    name="Object_43"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_43.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_22" position={[0.188, 0, 0.188]}>
                                <mesh
                                  name="Object_45"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_45.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="LMiddle_27" position={[-0.375, 0, 0]}>
                              <group name="LMiddle2_25" position={[-0.219, 0, 0]}>
                                <group name="cylinder_24" position={[0.469, 0, 0]}>
                                  <mesh
                                    name="Object_49"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_49.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_26" position={[0.25, 0, 0]}>
                                <mesh
                                  name="Object_51"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_51.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="LPinky_31" position={[-0.312, 0, 0.187]}>
                              <group name="LPinky2_29" position={[-0.219, 0, 0]}>
                                <group name="cylinder_28" position={[0.406, 0, -0.188]}>
                                  <mesh
                                    name="Object_55"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_55.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_30" position={[0.188, 0, -0.188]}>
                                <mesh
                                  name="Object_57"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_57.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="LHand_32" position={[-0.125, 0, 0]}>
                              <mesh
                                name="Object_59"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_59.geometry}
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="cylinder_34"
                            position={[-0.01, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}>
                            <mesh
                              name="Object_61"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_61.geometry}
                              material={materials.material_3}
                            />
                          </group>
                        </group>
                        <group
                          name="cylinder_36"
                          position={[-0.186, -0.058, 0]}
                          rotation={[0, 0, -Math.PI / 2]}>
                          <mesh
                            name="Object_63"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_63.geometry}
                            material={materials.material_3}
                          />
                        </group>
                      </group>
                      <group name="RightArm_59" position={[0.438, 0.823, 0]}>
                        <group name="RightForearm_57" position={[0.803, -0.125, 0]}>
                          <group name="RightHand_55" position={[0.865, 0, 0.01]}>
                            <group name="RThumb_41" position={[0.125, 0, -0.188]}>
                              <group name="RThumb2_39" position={[0, 0, -0.219]}>
                                <group name="cylinder_38" position={[0, 0, 0.406]}>
                                  <mesh
                                    name="Object_70"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_70.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_40" position={[0, 0, 0.188]}>
                                <mesh
                                  name="Object_72"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_72.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="RIndex_45" position={[0.312, 0, -0.188]}>
                              <group name="RIndex2_43" position={[0.219, 0, 0]}>
                                <group name="cylinder_42" position={[-0.406, 0, 0.188]}>
                                  <mesh
                                    name="Object_76"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_76.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_44" position={[-0.188, 0, 0.188]}>
                                <mesh
                                  name="Object_78"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_78.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="RMiddle_49" position={[0.375, 0, 0]}>
                              <group name="RMiddle2_47" position={[0.219, 0, 0]}>
                                <group name="cylinder_46" position={[-0.469, 0, 0]}>
                                  <mesh
                                    name="Object_82"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_82.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_48" position={[-0.25, 0, 0]}>
                                <mesh
                                  name="Object_84"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_84.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="RPinky_53" position={[0.312, 0, 0.187]}>
                              <group name="RPinky2_51" position={[0.219, 0, 0]}>
                                <group name="cylinder_50" position={[-0.406, 0, -0.188]}>
                                  <mesh
                                    name="Object_88"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_88.geometry}
                                    material={materials.material_1}
                                  />
                                </group>
                              </group>
                              <group name="cylinder_52" position={[-0.188, 0, -0.188]}>
                                <mesh
                                  name="Object_90"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_90.geometry}
                                  material={materials.material_1}
                                />
                              </group>
                            </group>
                            <group name="RHand_54" position={[0.125, 0, 0]}>
                              <mesh
                                name="Object_92"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_92.geometry}
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="cylinder_56"
                            position={[0.436, 0.014, -0.124]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                              name="Object_94"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_94.geometry}
                              material={materials.material_3}
                            />
                          </group>
                        </group>
                        <group
                          name="cylinder_58"
                          position={[1.238, -0.111, -0.124]}
                          rotation={[0, 0, Math.PI / 2]}>
                          <mesh
                            name="Object_96"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_96.geometry}
                            material={materials.material_3}
                          />
                        </group>
                      </group>
                      <group name="Neck_73" position={[0, 1.01, -0.007]}>
                        <group name="Head_71" position={[0, 0.308, 0.008]}>
                          <group name="LeftAntenna_61" position={[-0.75, 0.683, -0.001]}>
                            <group name="cylinder_60">
                              <mesh
                                name="Object_101"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_101.geometry}
                                material={materials.material_4}
                              />
                            </group>
                          </group>
                          <group name="RightAntenna_63" position={[0.75, 0.683, -0.001]}>
                            <group name="cylinder_62">
                              <mesh
                                name="Object_104"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_104.geometry}
                                material={materials.material_4}
                              />
                            </group>
                          </group>
                          <group name="Face_65" position={[0, 0.692, 0.323]}>
                            <group name="Face_64">
                              <mesh
                                name="Object_107"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_107.geometry}
                                material={materials.material_5}
                              />
                            </group>
                          </group>
                          <group name="Blush_67" position={[0, 0.692, 0.323]}>
                            <group name="sphere_66" position={[0, 0, 0.006]}>
                              <mesh
                                name="Object_110"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_110.geometry}
                                material={materials.material_6}
                              />
                            </group>
                          </group>
                          <group
                            name="cylinder_68"
                            position={[0, 0.692, -0.001]}
                            rotation={[0, 0, Math.PI / 2]}>
                            <mesh
                              name="Object_112"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_112.geometry}
                              material={materials.material_7}
                            />
                          </group>
                          <group name="sphere_69" position={[0, -4.495, -0.001]}>
                            <mesh
                              name="Object_114"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_114.geometry}
                              material={materials.material_8}
                            />
                          </group>
                          <group
                            name="plane_70"
                            position={[-0.416, 1.481, -0.009]}
                            rotation={[0, 0, 0.175]}>
                            <mesh
                              name="Object_116"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_116.geometry}
                              material={materials.material_9}
                            />
                          </group>
                        </group>
                        <group name="cylinder_72" position={[0, -4.25, 0.007]}>
                          <mesh
                            name="Object_118"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_118.geometry}
                            material={materials.material_10}
                          />
                        </group>
                      </group>
                      <group name="cylinder_74">
                        <mesh
                          name="Object_120"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_120.geometry}
                          material={materials.material_3}
                        />
                      </group>
                      <group name="Hoodie_75" position={[0, -3.24, 0]}>
                        <mesh
                          name="Object_122"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_122.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="LowerBody_89" position={[0, -0.171, 0]}>
                      <group name="LeftLeg_82" position={[-0.25, -0.642, 0]}>
                        <group name="LeftLowerLeg_80" position={[0.031, -1.002, -0.014]}>
                          <group name="cylinder_77" position={[0.219, -1.373, 0.014]}>
                            <mesh
                              name="Object_127"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_127.geometry}
                              material={materials.material_11}
                            />
                          </group>
                          <group name="sphere_78" position={[0.219, -1.498, 0.014]}>
                            <mesh
                              name="Object_129"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_129.geometry}
                              material={materials.material_12}
                            />
                          </group>
                          <group
                            name="cylinder_79"
                            position={[0, -1.498, -0.111]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                            <mesh
                              name="Object_131"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_131.geometry}
                              material={materials.material_13}
                            />
                          </group>
                        </group>
                        <group name="cylinder_81" position={[0.25, -2.375, 0]}>
                          <mesh
                            name="Object_133"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_133.geometry}
                            material={materials.material_14}
                          />
                        </group>
                      </group>
                      <group name="RightLeg_88" position={[0.25, -0.642, 0]}>
                        <group name="RightLowerLeg_86" position={[-0.031, -1.002, -0.014]}>
                          <group name="sphere_83" position={[-0.656, -1.498, 0.014]}>
                            <mesh
                              name="Object_137"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_137.geometry}
                              material={materials.material_12}
                            />
                          </group>
                          <group name="cylinder_84" position={[-0.219, -1.373, 0.014]}>
                            <mesh
                              name="Object_139"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_139.geometry}
                              material={materials.material_11}
                            />
                          </group>
                          <group
                            name="cylinder_85"
                            position={[0, -1.498, -0.111]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                            <mesh
                              name="Object_141"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_141.geometry}
                              material={materials.material_13}
                            />
                          </group>
                        </group>
                        <group name="cylinder_87" position={[-0.688, -2.375, 0]}>
                          <mesh
                            name="Object_143"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_143.geometry}
                            material={materials.material_14}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="cylinder_90" position={[0, -0.3, 0]}>
                      <mesh
                        name="Object_145"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_145.geometry}
                        material={materials.material_3}
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
  );
};

useGLTF.preload('/twelve_the_robot_low_poly.glb');

export default Robot;
