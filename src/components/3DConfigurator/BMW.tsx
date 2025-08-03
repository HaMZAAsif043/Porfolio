import React ,{useRef,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import  { forwardRef, useImperativeHandle } from 'react';
import * as THREE from "three"

export const BMW = forwardRef( (props,ref)=> {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('https://res.cloudinary.com/duzgdiwwb/image/upload/v1754049427/car-draco_lidzlg.glb')
  const { actions } = useAnimations(animations, group)
  const animationStates = useRef({});
  const leatherseatfr =useRef()// Keeps track of open/closed for each part
  const leatherseatrr =useRef()// Keeps track of open/closed for each part
  const deshLeatherRef =useRef()// Keeps track of open/closed for each part
  // const leatherseatfr =useRef()// Keeps track of open/closed for each part
  const bodyRef = useRef()
  const interiorLeather = useRef()
  const CarbonInteriorRef = useRef()
  const tailgateRef = useRef()
  const chassisCarpetRef = useRef()
  const wheelRef = useRef()
  const steeringRef = useRef()
  const doorRef = useRef()
  const doorflref = useRef()
  const doorrlRef = useRef()
  const doorrrRef = useRef()
  const doorfrRef = useRef()
  const seatflRef = useRef()
  useEffect(() => {
    const meshRefs = {
      Body: bodyRef,
      interiorLeather: interiorLeather,
      leatherseatfr: leatherseatfr,
      leatherseatrr: leatherseatrr,
      carbonInterior: CarbonInteriorRef,
      chassisCarpet: chassisCarpetRef,
      deshLeatherRef: deshLeatherRef,
      wheel: wheelRef,
      tailgate: tailgateRef,
      doorflref: doorflref,
      steeringRef: steeringRef,
      door: doorRef,
      doorrlRef: doorrlRef,
      doorrrRef: doorrrRef,
      doorfrRef: doorfrRef,
      seatflRef: seatflRef,
    };

    Object.values(meshRefs).forEach(ref => {
      const mesh = ref?.current;
      if (mesh && mesh.material) {
        const material = mesh.material;
        material.map = null;
        material.needsUpdate = true;
      }
    });
    props.onRefsReady(meshRefs, "car");
    if (meshRefs?.current?.steeringRef?.current?.material) {
      meshRefs?.current?.steeringRef?.current?.material?.color?.set("#1a1a1a")
    }
  }, [bodyRef, interiorLeather, CarbonInteriorRef, chassisCarpetRef, wheelRef, doorRef, props]);

  useImperativeHandle(ref, () => ({
    handleClick,
  }));

  const handleClick = (name) => {
    const animationMap = {
      doorfl: 'inmx7m60i_doorfl_inmx7m60i_body_0Action',
      doorrl: 'inmx7m60i_doorrl_inmx7m60i_body_0Action',
      doorfr: 'inmx7m60i_doorfr_inmx7m60i_body_0Action',
      doorrr: 'inmx7m60i_doorrr_inmx7m60i_body_0Action',
      hood: 'inmx7m60i_hood_inmx7m60i_body_0Action',
      trunk: 'inmx7m60i_tailgate_inmx7m60i_body_0Action'
    };

    let namesToAnimate = [];

    if (name === 'Doors') {
      namesToAnimate = ['doorfl', 'doorrl', 'doorfr', 'doorrr'];
    } else if (name === 'Hood') {
      namesToAnimate = ['hood'];
    } else if (name === 'Trunk') {
      namesToAnimate = ['trunk'];
    } else if (animationMap[name]) {
      namesToAnimate = [name];
    } else {
      namesToAnimate = [name];
    }

    namesToAnimate.forEach((n) => {
      const resolvedName = animationMap[n] || n;
      const action = actions[resolvedName];

      if (!action) {
        console.warn(`Animation ${resolvedName} not found`);
        return;
      }

      // Initialize state for that part if not already
      if (animationStates.current[n] === undefined) {
        animationStates.current[n] = false; // false = closed, true = open
      }

      const isOpen = animationStates.current[n];

      action.setLoop(THREE.LoopOnce, 0);
      action.clampWhenFinished = true;

      action.stop(); // Always stop current play before toggling

      if (isOpen) {
        // Play reverse
        action.timeScale = -1;
        action.time = action.getClip().duration;
      } else {
        // Play forward
        action.timeScale = 1;
        action.reset();
      }

      action.play();
      animationStates.current[n] = !isOpen; // Toggle the state
    });
  };
  // useEffect(() => {
  //   const mesh = nodes?.inmx7m60i_seatfr_inmx7m60i_leather1_0;
  //   if (mesh && mesh.material) {
  //     const material = mesh.material;
  //     material.map = null; // Remove the texture
  //     material.color.set('#ffffff'); // Set to white or any color
  //     material.needsUpdate = true; // Make sure changes are applied
  //   }
  // }, [nodes]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="_gltfNode_13" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_22" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_27" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_35" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_40" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_48" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_55" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <group name="_gltfNode_61" position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
        <mesh name="inmx7m60i_dash_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_black_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_black_0001" geometry={nodes.inmx7m60i_dash_inmx7m60i_black_0001.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} rotation={[-Math.PI / 2, 0, 0]} ref={deshLeatherRef} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_int_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_int_0.geometry} material={materials.inmx7m60i_int} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_amb_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_amb_0.geometry} material={materials.inmx7m60i_amb} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_carbon_interior_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_carbon_interior_0.geometry} material={materials.inmx7m60i_carbon_interior} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_dzktl007_0" geometry={nodes.inmx7m60i_dash_dzktl007_0.geometry} material={materials['dzktl.007']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_navscreen_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_navscreen_0.geometry} material={materials.inmx7m60i_navscreen} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_dash_inmx7m60i_dashscreen_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_dashscreen_0.geometry} material={materials.inmx7m60i_dashscreen} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_tubs_inmx7m60i_black_0" geometry={nodes.inmx7m60i_tubs_inmx7m60i_black_0.geometry} material={materials['inmx7m60i_black.001']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_body2001_bmwx72_0" geometry={nodes.inmx7m60i_body2001_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_exhaust_R_b_bmwx72_0" geometry={nodes.inmx7m60i_exhaust_R_b_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_exhaust_R_bmwx72_0" geometry={nodes.inmx7m60i_exhaust_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_bumperbar_F_bmwx72_0" geometry={nodes.inmx7m60i_bumperbar_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_heatshield_bmwx72_0" geometry={nodes.inmx7m60i_heatshield_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_fueltank_bmwx72_0" geometry={nodes.inmx7m60i_fueltank_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_radsupport_bmwx72_0" geometry={nodes.inmx7m60i_radsupport_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_radiator_bmwx72_0" geometry={nodes.inmx7m60i_radiator_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_shock_R_bmwx72_0" geometry={nodes.inmx7m60i_shock_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_lowerarm_F_b_bmwx72_0" geometry={nodes.inmx7m60i_lowerarm_F_b_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_subframe_F_bmwx72_0" geometry={nodes.inmx7m60i_subframe_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_halfshaft_R_bmwx72_0" geometry={nodes.inmx7m60i_halfshaft_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_halfshaft_F_bmwx72_0" geometry={nodes.inmx7m60i_halfshaft_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_strut_F_bmwx72_0" geometry={nodes.inmx7m60i_strut_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />castShadow receiveShadow
        <mesh name="inmx7m60i_subframe_R_bmwx72_0" geometry={nodes.inmx7m60i_subframe_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_lowerarm_R_bmwx72_0" geometry={nodes.inmx7m60i_lowerarm_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_upperarm_R_bmwx72_0" geometry={nodes.inmx7m60i_upperarm_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_tierod_R_bmwx72_0" geometry={nodes.inmx7m60i_tierod_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_spring_R_bmwx72_0" geometry={nodes.inmx7m60i_spring_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringbox_bmwx72_0" geometry={nodes.inmx7m60i_steeringbox_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_tierod_F_bmwx72_0" geometry={nodes.inmx7m60i_tierod_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_driveshaft_bmwx72_0" geometry={nodes.inmx7m60i_driveshaft_bmwx72_0.geometry} material={materials.bmwx72} position={[0, 0.357, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_diff_bmwx72_0" geometry={nodes.inmx7m60i_diff_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_swaybar_R_bmwx72_0" geometry={nodes.inmx7m60i_swaybar_R_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_lowerarm_F_a_bmwx72_0" geometry={nodes.inmx7m60i_lowerarm_F_a_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_diff_F_bmwx72_0" geometry={nodes.inmx7m60i_diff_F_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_transfercase_bmwx72_0" geometry={nodes.inmx7m60i_transfercase_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_swaybar_F001_bmwx72_0" geometry={nodes.inmx7m60i_swaybar_F001_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_driveshaft_F_bmwx72_0" geometry={nodes.inmx7m60i_driveshaft_F_bmwx72_0.geometry} material={materials.bmwx72} position={[0, 0.357, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_transmission_bmwx72_0" geometry={nodes.inmx7m60i_transmission_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_intercooler_bmwx72_0" geometry={nodes.inmx7m60i_intercooler_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_engine_undertray_inmx7m60i_black_0" geometry={nodes.inmx7m60i_engine_undertray_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_tubs001_inmx7m60i_black_0" geometry={nodes.inmx7m60i_tubs001_inmx7m60i_black_0.geometry} material={materials['inmx7m60i_black.001']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_exhaust_L_bmwx72_0" geometry={nodes.inmx7m60i_exhaust_L_bmwx72_0.geometry} material={materials.bmwx72} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_inmx7m60i_black_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_inmx7m60i_body_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} ref={bodyRef} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} rotation={[-Math.PI / 2, 0, 0]} ref={interiorLeather} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_inmx7m60i_carpet_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_carpet_0.geometry} material={materials.inmx7m60i_carpet} rotation={[-Math.PI / 2, 0, 0]} ref={chassisCarpetRef} castShadow receiveShadow />
        <mesh name="inmx7m60i_chassis_mirror_F_0" geometry={nodes.inmx7m60i_chassis_mirror_F_0.geometry} material={materials.mirror_F} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_tailgate_inmx7m60i_body_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[0, 1.547, -1.735]} rotation={[-1.571, 0, 0]} castShadow receiveShadow>
          <mesh name="inmx7m60i_gateglass_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_gateglass_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_lettering_inmx7m60i_blue_0" geometry={nodes.inmx7m60i_lettering_inmx7m60i_blue_0.geometry} material={materials.inmx7m60i_blue} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_lettering_inmx7m60i_cyan_0" geometry={nodes.inmx7m60i_lettering_inmx7m60i_cyan_0.geometry} material={materials.inmx7m60i_cyan} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_lettering_inmx7m60i_red_0" geometry={nodes.inmx7m60i_lettering_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_lettering_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_lettering_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_black_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_chmsl_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_chmsl_0.geometry} material={materials.inmx7m60i_chmsl} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} position={[0, -1.735, -1.547]} ref={tailgateRef} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0, 0.523, -0.481]} scale={1.028} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_black_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_licenselight_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_licenselight_0.geometry} material={materials.inmx7m60i_licenselight} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_rearlights_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_rearlights_0.geometry} material={materials.inmx7m60i_rearlights} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_signalL_0.geometry} material={materials.inmx7m60i_signalL} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_signalR_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_signalR_0.geometry} material={materials.inmx7m60i_signalR} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_taillight3_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_taillight3_0.geometry} material={materials.inmx7m60i_taillight3} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_taillight_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_taillight_0.geometry} material={materials.inmx7m60i_taillight} position={[0, -1.735, -1.547]} castShadow receiveShadow />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} position={[0, -1.735, -1.547]} castShadow receiveShadow />
        </mesh>
        <mesh name="inmx7m60i_f_bump1_inmx7m60i_black_0" geometry={nodes.inmx7m60i_f_bump1_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_f_bump1_inmx7m60i_body_0" geometry={nodes.inmx7m60i_f_bump1_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_f_bump1_f_bump15_0" geometry={nodes.inmx7m60i_f_bump1_f_bump15_0.geometry} material={materials['f_bump1.5']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_f_bump1_inmx7m60i_headlight2_0" geometry={nodes.inmx7m60i_f_bump1_inmx7m60i_headlight2_0.geometry} material={materials.inmx7m60i_headlight2} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_f_grille_inmx7m60i_black_0" geometry={nodes.inmx7m60i_f_grille_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_headlights1_inmx7m60i_running_r_0" geometry={nodes.inmx7m60i_headlights1_inmx7m60i_running_r_0.geometry} material={materials.inmx7m60i_running_r} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_r_bump1_inmx7m60i_red_0" geometry={nodes.inmx7m60i_r_bump1_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_r_bump1_inmx7m60i_black_0" geometry={nodes.inmx7m60i_r_bump1_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_r_bump1_inmx7m60i_body_0" geometry={nodes.inmx7m60i_r_bump1_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_windscreen_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_windscreen_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_window_lm_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_window_lm_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_window_rm_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_window_rm_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_engineblock_inmx7m60i_black_0" geometry={nodes.inmx7m60i_engineblock_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_misc_a_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_misc_a_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_black_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} ref={steeringRef} castShadow receiveShadow />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_int_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_int_0.geometry} material={materials.inmx7m60i_int} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} castShadow receiveShadow />
        <mesh name="inmx7m60i_headlightglass_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_headlightglass_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_doorfl_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[0.851, 0.598, 0.811]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_doorfl_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} position={[-0.142, 0.515, 0.393]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[-0.052, 0.46, 0.569]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_int_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_int_0.geometry} material={materials.inmx7m60i_int} position={[-0.192, 0.468, 0.295]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_leather1_0.geometry} material={materials['inmx7m60i_leather1.002']} position={[-0.184, 0.53, 0.231]} ref={doorflref} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_signalL_0.geometry} material={materials.inmx7m60i_signalL} position={[0.061, 0.273, 0.507]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_signalR_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_signalR_0.geometry} material={materials.inmx7m60i_signalR} position={[-0.146, 0.256, 0.015]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} position={[-0.184, 0.49, 0.348]} />
          <mesh name="inmx7m60i_doorfl_mirror_CE_0" geometry={nodes.inmx7m60i_doorfl_mirror_CE_0.geometry} material={materials.mirror_CE} position={[0.031, 0.342, 0.521]} />
        </mesh>
        <mesh name="inmx7m60i_doorrl_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[0.804, 0.677, -0.176]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_doorrl_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} />
          <mesh name="inmx7m60i_doorrl_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} />
          <mesh name="inmx7m60i_doorrl_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_leather1_0.geometry} material={materials['inmx7m60i_leather1.003']} ref={doorrlRef} />
          <mesh name="inmx7m60i_doorrl_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} />
        </mesh>
        <mesh name="inmx7m60i_doorfr_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[-0.85, 0.596, 0.814]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_doorfr_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_int_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_int_0.geometry} material={materials.inmx7m60i_int} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_leather1_0.geometry} material={materials['inmx7m60i_leather1.001']} position={[0.044, -0.003, 0.054]} ref={doorfrRef} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_signalL_0.geometry} material={materials.inmx7m60i_signalL} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_mirror_CX_0" geometry={nodes.inmx7m60i_doorfr_mirror_CX_0.geometry} material={materials.mirror_CX} position={[0.044, -0.003, 0.054]} />
        </mesh>
        <mesh name="inmx7m60i_doorrr_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[-0.804, 0.69, -0.165]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_doorfr_inmx7m60i_signalR_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_signalR_0.geometry} material={materials.inmx7m60i_signalR} position={[-0.002, -0.982, -0.04]} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_leather1_0.geometry} material={materials['inmx7m60i_leather1.004']} ref={doorrrRef} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} />
        </mesh>
        <mesh name="inmx7m60i_hood_inmx7m60i_black_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_hood_inmx7m60i_body_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} position={[0.072, 1.086, 0.841]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_hood_inmx7m60i_carpet_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_carpet_0.geometry} material={materials.inmx7m60i_carpet} position={[-0.072, 0.841, -1.086]} />
          <mesh name="inmx7m60i_hood_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[-0.072, 0.841, -1.086]} />
        </mesh>
        <mesh name="inmx7m60i_headlightglass001_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_headlightglass001_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlightglass002_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_headlightglass002_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlightglass003_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_headlightglass003_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1001_inmx7m60i_running_r_0" geometry={nodes.inmx7m60i_headlights1001_inmx7m60i_running_r_0.geometry} material={materials.inmx7m60i_running_r} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1002_inmx7m60i_highbeam_0" geometry={nodes.inmx7m60i_headlights1002_inmx7m60i_highbeam_0.geometry} material={materials.inmx7m60i_highbeam} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1003_inmx7m60i_headlight_0" geometry={nodes.inmx7m60i_headlights1003_inmx7m60i_headlight_0.geometry} material={materials.inmx7m60i_headlight} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1004_inmx7m60i_fog_0" geometry={nodes.inmx7m60i_headlights1004_inmx7m60i_fog_0.geometry} material={materials.inmx7m60i_fog} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1005_inmx7m60i_running_l_0" geometry={nodes.inmx7m60i_headlights1005_inmx7m60i_running_l_0.geometry} material={materials.inmx7m60i_running_l} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1006_inmx7m60i_running_l_0" geometry={nodes.inmx7m60i_headlights1006_inmx7m60i_running_l_0.geometry} material={materials.inmx7m60i_running_l} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1007_inmx7m60i_fog_0" geometry={nodes.inmx7m60i_headlights1007_inmx7m60i_fog_0.geometry} material={materials.inmx7m60i_fog} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1008_inmx7m60i_highbeam_0" geometry={nodes.inmx7m60i_headlights1008_inmx7m60i_highbeam_0.geometry} material={materials.inmx7m60i_highbeam} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_headlights1009_inmx7m60i_headlight_0" geometry={nodes.inmx7m60i_headlights1009_inmx7m60i_headlight_0.geometry} material={materials.inmx7m60i_headlight} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rearseats_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_rearseats_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rearseats_inmx7m60i_red_0" geometry={nodes.inmx7m60i_rearseats_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rearseats_inmx7m60i_black_0" geometry={nodes.inmx7m60i_rearseats_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rearseats_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_rearseats_inmx7m60i_leather1_0.geometry} material={materials['Leather.003']} rotation={[-Math.PI / 2, 0, 0]} ref={leatherseatrr} />
        <mesh name="inmx7m60i_rearseats_inmx7m60i_carpet_0" geometry={nodes.inmx7m60i_rearseats_inmx7m60i_carpet_0.geometry} material={materials.inmx7m60i_carpet} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfl_inmx7m60i_red_0" geometry={nodes.inmx7m60i_seatfl_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfr_inmx7m60i_red_0" geometry={nodes.inmx7m60i_seatfr_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfr_inmx7m60i_black_0" geometry={nodes.inmx7m60i_seatfr_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfr_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_seatfr_inmx7m60i_leather1_0.geometry} material={materials['Leather.002']} rotation={[-Math.PI / 2, 0, 0]} ref={leatherseatfr} />
        <mesh name="inmx7m60i_ltailglass_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_ltailglass_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[0.003, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtailglass_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_rtailglass_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} position={[0.003, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_taillight2_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_taillight2_0.geometry} material={materials.inmx7m60i_taillight2} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_red_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_taillight_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_taillight_0.geometry} material={materials.inmx7m60i_taillight} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_signalR_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_signalR_0.geometry} material={materials.inmx7m60i_signalR} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_bodyshell_inmx7m60i_black_0" geometry={nodes.inmx7m60i_bodyshell_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_bodyshell_inmx7m60i_body_0" geometry={nodes.inmx7m60i_bodyshell_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_bodyshell_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_bodyshell_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_bodyshell_bodyshell6_0" geometry={nodes.inmx7m60i_bodyshell_bodyshell6_0.geometry} material={materials['bodyshell.6']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_fender_l_inmx7m60i_body_0" geometry={nodes.inmx7m60i_fender_l_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_fender_r_inmx7m60i_body_0" geometry={nodes.inmx7m60i_fender_r_inmx7m60i_body_0.geometry} material={materials['inmx7m60i_body.001']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_engineblock001_inmx7m60i_black_0" geometry={nodes.inmx7m60i_engineblock001_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_taillight2_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_taillight2_0.geometry} material={materials.inmx7m60i_taillight2} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_red_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_red_0.geometry} material={materials.inmx7m60i_red} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_glass_0.geometry} material={materials.inmx7m60i_glass} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_signalL_0.geometry} material={materials.inmx7m60i_signalL} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_ltaillight_inmx7m60i_taillight_0" geometry={nodes.inmx7m60i_ltaillight_inmx7m60i_taillight_0.geometry} material={materials.inmx7m60i_taillight} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_wheel001_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_wheel001_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0.767, 0.353, -1.33]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_wheel002_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_wheel002_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[-0.768, 0.353, -1.33]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
        <mesh name="inmx7m60i_wheel003_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_wheel003_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[-0.767, 0.353, 1.376]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
        <mesh name="inmx7m60i_r_bump1_inmx7m60i_body_0001" geometry={nodes.inmx7m60i_r_bump1_inmx7m60i_body_0001.geometry} material={materials['inmx7m60i_body.001']} position={[0, 0.575, -2.236]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="inmx7m60i_chassis_inmx7m60i_leather1_0001" geometry={nodes.inmx7m60i_chassis_inmx7m60i_leather1_0001.geometry} material={materials.inmx7m60i_leather1} position={[0, -2.236, -0.575]} />
        </mesh>
        {props.rim && <group name="inmx7m60i_wheel003_inmx7m60i_black_0" position={[-0.001, 0.353, 0.023]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <mesh name="inmx7m60i_wheel003_inmx7m60i_black_0_1" geometry={nodes.inmx7m60i_wheel003_inmx7m60i_black_0_1.geometry} material={materials['Rim 2 black.001']} ref={wheelRef} />
          <mesh name="inmx7m60i_wheel003_inmx7m60i_black_0_2" geometry={nodes.inmx7m60i_wheel003_inmx7m60i_black_0_2.geometry} material={materials['Rim 2 black.002']} />
          <mesh name="inmx7m60i_wheel003_inmx7m60i_black_0_3" geometry={nodes.inmx7m60i_wheel003_inmx7m60i_black_0_3.geometry} material={materials['Rim 2 black.003']} />
          <mesh name="inmx7m60i_wheel003_inmx7m60i_black_0_4" geometry={nodes.inmx7m60i_wheel003_inmx7m60i_black_0_4.geometry} material={materials['Rim 2 black.004']} />
        </group>}
        <mesh name="_gltfNode_13001" geometry={nodes._gltfNode_13001.geometry} material={materials.black} position={[0.727, 0.353, 1.374]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_8001" geometry={nodes._gltfNode_8001.geometry} material={materials.chrome} position={[0.796, 0.353, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_9001" geometry={nodes._gltfNode_9001.geometry} material={materials.black_refl} position={[0.78, 0.353, 1.238]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_22001" geometry={nodes._gltfNode_22001.geometry} material={materials.black} position={[0.794, 0.353, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_26001" geometry={nodes._gltfNode_26001.geometry} material={materials.black} position={[0.783, 0.354, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_27001" geometry={nodes._gltfNode_27001.geometry} material={materials.black} position={[0.73, 0.353, 1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        {!props.rim && <group name="_gltfNode_35001" position={[0, 0.354, 0.023]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh name="Mesh_35001" geometry={nodes.Mesh_35001.geometry} material={materials['Rim black.002']} />
          <mesh name="Mesh_35001_1" geometry={nodes.Mesh_35001_1.geometry} material={materials['Rim black.001']} />
          <mesh name="Mesh_35001_2" geometry={nodes.Mesh_35001_2.geometry} material={materials['Rim black.004']} />
          <mesh name="Mesh_35001_3" geometry={nodes.Mesh_35001_3.geometry} material={materials['Rim black.003']} />
        </group>}
        <mesh name="_gltfNode_40001" geometry={nodes._gltfNode_40001.geometry} material={materials['Rim black']} position={[-0.002, 0.354, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_48001" geometry={nodes._gltfNode_48001.geometry} material={materials.blue} position={[0.78, 0.353, 1.231]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_60001" geometry={nodes._gltfNode_60001.geometry} material={materials.black} position={[0.871, 0.354, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_61001" geometry={nodes._gltfNode_61001.geometry} material={materials['07___Default8989']} position={[0.78, 0.353, 1.235]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="inmx7m60i_wheel_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_wheel_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0.868, 0.353, 1.376]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="_gltfNode_8" geometry={nodes._gltfNode_8.geometry} material={materials.chrome} position={[-0.289, 0.353, -0.34]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_9" geometry={nodes._gltfNode_9.geometry} material={materials.black_refl} position={[-0.049, 0.353, -0.008]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_15" geometry={nodes._gltfNode_15.geometry} material={materials.black} position={[0.727, 0.353, -1.332]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_16" geometry={nodes._gltfNode_16.geometry} material={materials.black} position={[-0.727, 0.353, 1.379]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_17" geometry={nodes._gltfNode_17.geometry} material={materials.black} position={[-0.727, 0.353, -1.328]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_23" geometry={nodes._gltfNode_23.geometry} material={materials.black} position={[-0.731, 0.351, -1.329]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_24" geometry={nodes._gltfNode_24.geometry} material={materials.black} position={[-0.791, 0.353, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_26" geometry={nodes._gltfNode_26.geometry} material={materials.black} position={[0.793, 0.354, -1.33]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_28" geometry={nodes._gltfNode_28.geometry} material={materials.black} position={[0.73, 0.353, -1.331]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_29" geometry={nodes._gltfNode_29.geometry} material={materials.black} position={[-0.791, 0.354, -1.33]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_30" geometry={nodes._gltfNode_30.geometry} material={materials.black} position={[-0.731, 0.353, 0.341]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_32" geometry={nodes._gltfNode_32.geometry} material={materials.black} position={[-0.78, 0.354, 1.376]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_43" geometry={nodes._gltfNode_43.geometry} material={materials['Rim black.005']} position={[0, 0.354, -1.33]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_44" geometry={nodes._gltfNode_44.geometry} material={materials.blue} position={[0.79, 0.353, -1.468]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_45" geometry={nodes._gltfNode_45.geometry} material={materials.blue} position={[0.79, 0.353, -1.44]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_46" geometry={nodes._gltfNode_46.geometry} material={materials.blue} position={[-0.788, 0.353, -1.468]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_47" geometry={nodes._gltfNode_47.geometry} material={materials.blue} position={[-0.788, 0.353, -1.44]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_49" geometry={nodes._gltfNode_49.geometry} material={materials.blue} position={[-0.777, 0.353, 1.231]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_54" geometry={nodes._gltfNode_54.geometry} material={materials.chrome} position={[0.001, 0.353, -1.489]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        {!props.rim && <group name="_gltfNode_56" position={[0, 0.36, 0.023]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh name="Mesh_56" geometry={nodes.Mesh_56.geometry} material={materials['Rim chrom.003']} />
          <mesh name="Mesh_56_1" geometry={nodes.Mesh_56_1.geometry} material={materials['Rim chrom.002']} />
          <mesh name="Mesh_56_2" geometry={nodes.Mesh_56_2.geometry} material={materials['Rim chrom.004']} />
          <mesh name="Mesh_56_3" geometry={nodes.Mesh_56_3.geometry} material={materials['Rim chrom.001']} ref={wheelRef} />
        </group>}
        <mesh name="_gltfNode_60" geometry={nodes._gltfNode_60.geometry} material={materials.black} position={[-0.291, 0.354, -0.428]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="_gltfNode_62" geometry={nodes._gltfNode_62.geometry} material={materials['07___Default8989']} position={[-0.777, 0.353, 1.235]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="inmx7m60i_seatfl_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_seatfl_inmx7m60i_wheel_03a_0.geometry} material={materials.inmx7m60i_wheel_03a} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfl_inmx7m60i_black_0" geometry={nodes.inmx7m60i_seatfl_inmx7m60i_black_0.geometry} material={materials.inmx7m60i_black} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_seatfl_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_seatfl_inmx7m60i_leather1_0.geometry} material={materials['Leather.001']} rotation={[-Math.PI / 2, 0, 0]} ref={seatflRef} />
      </group>
    </group>
  )
})
useGLTF.preload('https://res.cloudinary.com/duzgdiwwb/image/upload/v1754049427/car-draco_lidzlg.glb')
