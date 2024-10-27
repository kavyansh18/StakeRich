

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from "../models/Contexts/CharcaterAnimation";

 const Rhea=(props) =>{
    const { animation, ...rest } = props;
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/rhea_wilson.glb')
  const { actions,names } = useAnimations(animations, group)
  const { setAnimations, animationIndex } = useCharacterAnimations();
    console.log(names)


    useEffect(() => {
        if (animation && actions[animation]) {
          actions[animation].reset().fadeIn(0.5).play();
          return () => actions[animation].fadeOut(0.5);
        }
      }, [animation, actions]);
    
 

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_132">
                <group name="BodyRoot_131" position={[0, 0.875, 0]}>
                  <group name="cylinder_0" position={[0, -0.25, 0]}>
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="sphere_1">
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cylinder_2" position={[0, -0.25, 0]}>
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="HeadBase_72" position={[0, 0.188, 0]}>
                    <group name="sphere_3" position={[0, 0.188, 0]}>
                      <mesh
                        name="Object_13"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_13.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="sphere_4" position={[0, 0.188, 0]}>
                      <mesh
                        name="Object_15"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_15.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="TopLip_6" position={[0, 0.1, -0.209]}>
                      <group name="sphere_selection_selection_5" position={[0, 0.087, 0.209]}>
                        <mesh
                          name="Object_18"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_18.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="TopLip2_8" position={[0, 0.1, -0.209]}>
                      <group name="sphere_selection_selection_7" position={[0, 0.087, 0.209]}>
                        <mesh
                          name="Object_21"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_21.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="TopTeeth_10" position={[0, 0.1, -0.194]}>
                      <group name="sphere_selection_selection_9" position={[0, 0.087, 0.209]}>
                        <mesh
                          name="Object_24"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_24.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="BottomLip_12" position={[0, 0.002, -0.155]}>
                      <group name="sphere_selection_11" position={[0, 0.186, 0.155]}>
                        <mesh
                          name="Object_27"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_27.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="BottomLip2_14" position={[0, 0.002, -0.155]}>
                      <group name="sphere_selection_13" position={[0, 0.186, 0.155]}>
                        <mesh
                          name="Object_30"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_30.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="BottomTeeth_16" position={[0, 0.002, -0.139]}>
                      <group name="sphere_selection_15" position={[0, 0.186, 0.155]}>
                        <mesh
                          name="Object_33"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_33.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="LeftCheek_18" position={[-0.075, 0.047, -0.175]}>
                      <group name="sphere_selection_selection_17" position={[0.075, 0.141, 0.237]}>
                        <mesh
                          name="Object_36"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_36.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="RightCheek_20" position={[0.075, 0.047, -0.175]}>
                      <group name="sphere_selection_selection_19" position={[-0.075, 0.141, 0.237]}>
                        <mesh
                          name="Object_39"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_39.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="MouthExterior_27" position={[0, 0.047, -0.191]}>
                      <group name="TopMouth_26">
                        <group name="cube_21">
                          <mesh
                            name="Object_43"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_43.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="TopMouthRight_23"
                          position={[0.027, 0, 0]}
                          rotation={[0, -0.262, 0]}>
                          <group name="cube_22" position={[0.027, 0, 0]}>
                            <mesh
                              name="Object_46"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_46.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="TopMouthLeft_25"
                          position={[-0.027, 0, 0]}
                          rotation={[0, 0.262, 0]}>
                          <group name="cube_24" position={[-0.027, 0, 0]}>
                            <mesh
                              name="Object_49"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_49.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="EyeLeft_31" position={[-0.084, 0.188, -0.203]}>
                      <group name="sphere_28">
                        <mesh
                          name="Object_52"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_52.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="sphere_29" position={[0, 0.016, 0]} rotation={[0, 0, -0.262]}>
                        <mesh
                          name="Object_54"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_54.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="sphere_30" position={[0, 0.016, 0]} rotation={[0, 0, 0.175]}>
                        <mesh
                          name="Object_56"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_56.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="EyeLeft2_33" position={[-0.084, 0.094, -0.188]}>
                      <group name="sphere_32">
                        <mesh
                          name="Object_59"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_59.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="EyeLeft3_35" position={[-0.084, 0.281, -0.188]}>
                      <group name="sphere_34">
                        <mesh
                          name="Object_62"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_62.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="EyeRight_39" position={[0.084, 0.188, -0.203]}>
                      <group name="sphere_36">
                        <mesh
                          name="Object_65"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_65.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="sphere_37" position={[0, 0.016, 0]} rotation={[0, 0, 0.262]}>
                        <mesh
                          name="Object_67"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_67.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="sphere_38" position={[0, 0.016, 0]} rotation={[0, 0, -0.175]}>
                        <mesh
                          name="Object_69"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_69.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="EyeRight3_41" position={[0.084, 0.281, -0.188]}>
                      <group name="sphere_40">
                        <mesh
                          name="Object_72"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_72.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="EyeRight2_43" position={[0.084, 0.094, -0.188]}>
                      <group name="sphere_42">
                        <mesh
                          name="Object_75"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_75.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="Eyebrowleft_45" position={[-0.078, 0.305, -0.172]}>
                      <group
                        name="pyramid_44"
                        position={[-0.031, 0.008, 0]}
                        rotation={[0.031, 0.014, -1.494]}>
                        <mesh
                          name="Object_78"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_78.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="Eyebrowright_47" position={[0.078, 0.305, -0.172]}>
                      <group
                        name="pyramid_46"
                        position={[0.031, 0.008, 0]}
                        rotation={[0.031, -0.014, 1.494]}>
                        <mesh
                          name="Object_81"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_81.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                    <group name="HairBones_71" position={[0, 0.156, 0]}>
                      <group name="sphere_48">
                        <mesh
                          name="Object_84"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_84.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="pyramid_49" position={[0, 0.063, 0.156]}>
                        <mesh
                          name="Object_86"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_86.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="pyramid_50" position={[0, 0.063, 0.156]}>
                        <mesh
                          name="Object_88"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_88.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="pyramid_51" position={[0, 0.063, 0.156]}>
                        <mesh
                          name="Object_90"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_90.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cube_52">
                        <mesh
                          name="Object_92"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_92.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cube_53">
                        <mesh
                          name="Object_94"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_94.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="pyramid_54" position={[0, 0.063, 0.156]}>
                        <mesh
                          name="Object_96"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_96.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="BackHairBase_70" position={[0, 0.109, 0.188]}>
                        <group name="sphere_55" position={[0, 0, 0.063]}>
                          <mesh
                            name="Object_99"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_99.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="sphere_56" position={[0, 0, 0.063]}>
                          <mesh
                            name="Object_101"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_101.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="sphere_57" position={[0, 0, 0.063]}>
                          <mesh
                            name="Object_103"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_103.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cube_58" rotation={[Math.PI / 8, 0, 1.178]}>
                          <mesh
                            name="Object_105"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_105.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cube_59" rotation={[Math.PI / 8, 0, -1.178]}>
                          <mesh
                            name="Object_107"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_107.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="BackHairMiddle1_69" position={[0, 0, 0.078]}>
                          <group name="pyramid_60" position={[0, -0.938, 0]}>
                            <mesh
                              name="Object_110"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_110.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group name="BackHairMiddle2_68" position={[0, -0.188, 0]}>
                            <group name="pyramid_61" position={[0, -0.938, 0]}>
                              <mesh
                                name="Object_113"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_113.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="BackHairMiddle3_67" position={[0, -0.188, 0]}>
                              <group name="pyramid_62" position={[0, -0.938, 0]}>
                                <mesh
                                  name="Object_116"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_116.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group name="BackHairMiddle4_66" position={[0, -0.188, 0]}>
                                <group name="pyramid_63" position={[0, -0.938, 0]}>
                                  <mesh
                                    name="Object_119"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_119.geometry}
                                    material={materials.material_0}
                                  />
                                </group>
                                <group name="BackHairMiddle5_65" position={[0, -0.188, 0]}>
                                  <group name="pyramid_64" position={[0, -0.938, 0]}>
                                    <mesh
                                      name="Object_122"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_122.geometry}
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
                  </group>
                  <group name="Torso_96" position={[0, -0.188, 0]}>
                    <group name="cylinder_73">
                      <mesh
                        name="Object_125"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_125.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="LeftLeg_84" position={[-0.031, -0.031, 0]}>
                      <group name="cylinder_74" rotation={[0, 0, -0.044]}>
                        <mesh
                          name="Object_128"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_128.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_75" rotation={[0, 0, 0.044]}>
                        <mesh
                          name="Object_130"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_130.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_76" rotation={[-0.044, -Math.PI / 2, 0]}>
                        <mesh
                          name="Object_132"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_132.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_77" rotation={[0.044, -Math.PI / 2, 0]}>
                        <mesh
                          name="Object_134"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_134.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="LeftThigh_83" position={[0, -0.281, 0]}>
                        <group name="cylinder_78" position={[0, -0.031, 0]}>
                          <mesh
                            name="Object_137"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_137.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cylinder_79" position={[0, -0.031, 0]}>
                          <mesh
                            name="Object_139"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_139.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cylinder_80" position={[0, 0.031, 0]}>
                          <mesh
                            name="Object_141"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_141.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="LeftFoot_82" position={[0, -0.375, 0]}>
                          <group name="cylinder_81">
                            <mesh
                              name="Object_144"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_144.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="RightLeg_95" position={[0.031, -0.031, 0]}>
                      <group name="cylinder_85" rotation={[0, 0, -0.044]}>
                        <mesh
                          name="Object_147"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_147.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_86" rotation={[0, 0, 0.044]}>
                        <mesh
                          name="Object_149"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_149.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_87" rotation={[0.044, -Math.PI / 2, 0]}>
                        <mesh
                          name="Object_151"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_151.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="cylinder_88" rotation={[-0.044, -Math.PI / 2, 0]}>
                        <mesh
                          name="Object_153"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_153.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="RightThigh_94" position={[0, -0.281, 0]}>
                        <group name="cylinder_89" position={[0, -0.031, 0]}>
                          <mesh
                            name="Object_156"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_156.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cylinder_90" position={[0, -0.031, 0]}>
                          <mesh
                            name="Object_158"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_158.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="cylinder_91" position={[0, 0.031, 0]}>
                          <mesh
                            name="Object_160"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_160.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="RightFoot_93" position={[0, -0.375, 0]}>
                          <group name="cylinder_92">
                            <mesh
                              name="Object_163"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_163.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="LeftShoulder_113" position={[-0.063, 0.125, 0]}>
                    <group name="sphere_97">
                      <mesh
                        name="Object_166"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_166.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cylinder_98" rotation={[0, 0, Math.PI / 2]}>
                      <mesh
                        name="Object_168"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_168.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="LeftArm_112" position={[-0.031, 0, 0]}>
                      <group name="cylinder_99" rotation={[0, 0, Math.PI / 2]}>
                        <mesh
                          name="Object_171"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_171.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="LeftForeArm_111" position={[-0.234, 0, 0]}>
                        <group name="cylinder_100" rotation={[0, 0, Math.PI / 2]}>
                          <mesh
                            name="Object_174"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_174.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="Lefthand_110" position={[-0.25, 0, 0]}>
                          <group name="sphere_101">
                            <mesh
                              name="Object_177"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_177.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group name="LeftFingersBase_105" position={[0, 0.023, 0]}>
                            <group name="cylinder_102" rotation={[0, 0, Math.PI / 2]}>
                              <mesh
                                name="Object_180"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_180.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="LeftFingersTip_104" position={[-0.078, 0, 0]}>
                              <group name="cylinder_103" rotation={[0, 0, Math.PI / 2]}>
                                <mesh
                                  name="Object_183"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_183.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                            </group>
                          </group>
                          <group name="LeftThumbBase_109" position={[0, 0, -0.039]}>
                            <group name="sphere_106">
                              <mesh
                                name="Object_186"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_186.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="LeftThumbTip_108" position={[0, 0, -0.031]}>
                              <group name="sphere_107" position={[0, 0, -0.016]}>
                                <mesh
                                  name="Object_189"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_189.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="RightShoulder_130" position={[0.063, 0.125, 0]}>
                    <group name="sphere_114">
                      <mesh
                        name="Object_192"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_192.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cylinder_115" rotation={[0, 0, -Math.PI / 2]}>
                      <mesh
                        name="Object_194"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_194.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="RightArm_129" position={[0.031, 0, 0]}>
                      <group name="cylinder_116" rotation={[0, 0, -Math.PI / 2]}>
                        <mesh
                          name="Object_197"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_197.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="RightForeArm_128" position={[0.234, 0, 0]}>
                        <group name="cylinder_117" rotation={[0, 0, -Math.PI / 2]}>
                          <mesh
                            name="Object_200"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_200.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="Righthand_127" position={[0.25, 0, 0]}>
                          <group name="sphere_118">
                            <mesh
                              name="Object_203"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_203.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group name="RightFingersBase_122" position={[0, 0.023, 0]}>
                            <group name="cylinder_119" rotation={[0, 0, -Math.PI / 2]}>
                              <mesh
                                name="Object_206"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_206.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="RightFingersTip_121" position={[0.078, 0, 0]}>
                              <group name="cylinder_120" rotation={[0, 0, -Math.PI / 2]}>
                                <mesh
                                  name="Object_209"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_209.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                            </group>
                          </group>
                          <group name="RightThumbBase_126" position={[0, 0, -0.039]}>
                            <group name="sphere_123">
                              <mesh
                                name="Object_212"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_212.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="RightThumbTip_125" position={[0, 0, -0.031]}>
                              <group name="sphere_124" position={[0, 0, -0.016]}>
                                <mesh
                                  name="Object_215"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_215.geometry}
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
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/rhea_wilson.glb')

export default Rhea;
