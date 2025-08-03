import React from 'react'
import { useGLTF } from '@react-three/drei'
// import glb from "./Sofa.glb"
import { useEffect,useRef } from 'react'
export function Sofa(props) {
  const { nodes, materials } = useGLTF("https://res.cloudinary.com/duzgdiwwb/image/upload/v1754049446/sofa-draco_saoadx.glb")
      const Stands = useRef(null);
      const Cussion002 = useRef(null);
      const Cussion001 = useRef(null);
      const Taylor_Sofa001 = useRef(null);
      useEffect(() => {
        const ref = {
          Stands: Stands,
          Cussion002: Cussion002,
          Cussion001: Cussion001,
          Taylor_Sofa001: Taylor_Sofa001,
        }
        props.onRefsReady(ref, "sofa");
      })
  useEffect(() => {
    if (props.standType === "Sliver" && Stands.current) {
      // Clone material if shared
      Stands.current.material = Stands.current.material.clone();
      Stands.current.material.color.set("#A6A6A6"); // Sliver tone
      Stands.current.material.needsUpdate = true;
    }

    if (props.standType === "Gold" && Stands.current) {
      Stands.current.material = Stands.current.material.clone();
      Stands.current.material.color.set("#FFDC90"); // Gold tone
      Stands.current.material.needsUpdate = true;
    }
  }, [props.standType]);

  return (
    <group {...props} dispose={null}>
      <group>castShadow receiveShadow
        <mesh geometry={nodes.Geometry.geometry} material={materials.Sofa} position={[0, 0.032, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.Geometry001.geometry} material={materials.cusion} position={[0, 0.032, 0]} rotation={[Math.PI / 2, 0, 0]} ref={Cussion002} castShadow receiveShadow />
        <mesh geometry={nodes.Geometry002.geometry} material={materials.cusion} position={[0, 0.032, 0]} rotation={[Math.PI / 2, 0, 0]} ref={Cussion001} castShadow receiveShadow />
        <mesh geometry={nodes.Geometry003.geometry} material={materials.Sofa} position={[0, 0.032, 0]} rotation={[Math.PI / 2, 0, 0]} ref={Taylor_Sofa001} castShadow receiveShadow />
        {props.standType === "Wood" && (
          <mesh
            geometry={nodes.Geometry004.geometry}
            material={materials.Wood}
            position={[0, 0.001, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow receiveShadow />
        )}
        {(props.standType === "Gold" || props.standType === "Sliver") && (
          <mesh
            geometry={nodes.Geometry005.geometry}
            material={materials["Stainless Steel"]}
            position={[0, 0.001, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            ref={Stands}
            castShadow receiveShadow />
        )}
  {/* {props.metalStands && <mesh geometry={nodes.Geometry005.geometry} material={materials['Stainless Steel']} position={[0, 0.001, 0]} rotation={[Math.PI / 2, 0, 0]} ref={Stands} />} */}
      </group>
    </group>
  )
}

useGLTF.preload('https://res.cloudinary.com/duzgdiwwb/image/upload/v1754049446/sofa-draco_saoadx.glb')
