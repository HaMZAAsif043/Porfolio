import React, { Suspense, useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { ConfiguratorBar } from "./ConfiguratorBar";
import ConfigSidebar from "./ConfigSidebar";
import { handleExportUSDZ } from "../exporter.jsx";
import hdri from "../../assets/brown_photostudio_01_2k.hdr";
import * as THREE from "three";
import AutoCamera from "./autoCamera.jsx"
import { useFrame } from '@react-three/fiber';
import { Options } from "./config";
import { Sofa } from "./Sofa.jsx";
import SofaLighting from "../../assets/small_empty_room_3_4k.hdr";
import CarLighting from "../../assets/paul_lobe_haus_4k.exr";
import { BMW } from "./BMW.jsx";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// Replace with more specific icons
import { FaLightbulb } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { BiReset } from "react-icons/bi";
import { LuRefrigerator } from "react-icons/lu";
import { MdOutlineDoorFront, MdDoorSliding } from "react-icons/md"; // Added door icons for refrigerator
import { Fridge } from "./Fridge.jsx";

// Custom SVG icons for trunk and hood
const TrunkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M3 9l4-4h10l4 4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    <path d="M9 16h6" />
    <path d="M15 8v8" />
    <path d="M9 8v8" />
  </svg>
);

const HoodIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M7 5l10 0v6l-4 4l-2 0l-4-4z" />
    <path d="M3 8a10 6 0 0 0 18 0" />
    <path d="M7 11l10 0" />
  </svg>
);

const InteractiveModelViewer = () => {
  const [selectedOption, setSelectedOption] = useState(Options[0]);
  const [Lighting, setLighting] = useState(hdri);
  const animationRef = useRef();
  const fridgeAnimation = useRef();
  const [barActive, setBarActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [bg, setBg] = useState("white"); // State for metal stands
  const ModelRef = useRef();
  const [standType, setStandType] = useState("Wood");
  const SofeRef = useRef({});
  const CarRefs = useRef({});
  const FridgeRefs = useRef(null);
  // const RefrigeratorRefs = useRef({});
  const [zooming, setZooming] = useState(false);
  const [cameraPos, setCameraPos] = useState([0, 0, 0]); // default position
  const [loading, setLoading] = useState(false);
  const [animLoading, setAnimLoading] = useState(false); // New state for animation loading
  const [activeControl, setActiveControl] = useState(null); // Track which control is active
  const [rim, setRim] = useState(false);
  const [progress, setProgress] = useState(0); // New state for progress
  const [resources, setResources] = useState({ loaded: 0, total: 1 });

  const handleRefsReady = (refs, name) => {
    if (name === "car") {
      CarRefs.current = refs;
    }
    if (name === "sofa") {
      SofeRef.current = refs;
    }
    if (name === "fridge") {
      // console.log("Fridge Refs", refs.current)
      FridgeRefs.current = refs;
    }
  };
  const handleOptionSelect = (option) => {
    setLoading(true); // Always set loading to true when changing models
    setSelectedOption(option);
  };
  function CameraRig({ position: [x, y, z], active, onDone }) {
    useFrame((state) => {
      if (!active) return;

      const cam = state.camera;
      const current = cam.position;
      const target = new THREE.Vector3(x, y, z);

      // Smooth transition
      current.lerp(target, 0.1);
      cam.lookAt(0, 0, 0);

      // Check if close enough to stop animating
      if (current.distanceTo(target) < 0.01) {
        cam.position.copy(target);
        if (onDone) onDone(); // notify parent
      }
    });

    return null;
  }

  const colorHandlers = {
    Fridge: (color) => {
      resetView();
      // console.log("Fridge Color", FridgeRefs.current.current)
      if (FridgeRefs?.current?.current)
        FridgeRefs?.current?.current?.material?.color?.set(color);
      setBg(color);
    },
    Frame: (color) => {
      resetView();
      SofeRef.current.Taylor_Sofa001.current.material.color.set(color);
      SofeRef.current.Cussion002.current.material.color.set(color);
      SofeRef.current.Cussion001.current.material.color.set(color);
      setBg(color);
    },
    Cushions: (color) => {
      resetView();
      SofeRef.current.Cussion002.current.material.color.set(color);
    },
    Body: (color) => {
      resetView();
      if (CarRefs.current.Body)
        CarRefs?.current?.Body?.current.material?.color?.set(color);
      setBg(color);
    },
    Seats: (color) => {
      // if (CarRefs.current.interiorLeather) CarRefs?.current?.interiorLeather?.current.material?.color?.set(color);
      if (CarRefs.current.leatherseatfr)
        CarRefs?.current?.leatherseatfr?.current.material?.color?.set(color);
      if (CarRefs.current.leatherseatrr)
        CarRefs?.current?.leatherseatrr?.current.material?.color?.set(color);
      // if (CarRefs.current.deshLeatherRef) CarRefs?.current?.deshLeatherRef?.current.material?.color?.set(color);
      // if (CarRefs.current.tailgate) CarRefs?.current?.tailgate?.current.material?.color?.set(color);
      if (CarRefs.current.steeringRef)
        CarRefs?.current?.steeringRef?.current.material?.color?.set("#1a1a1a");
      if (CarRefs.current.doorflref)
        CarRefs?.current?.doorflref?.current.material?.color?.set(color);
      if (CarRefs.current.doorrlRef)
        CarRefs?.current?.doorrlRef?.current.material?.color?.set(color);
      if (CarRefs.current.doorrrRef)
        CarRefs?.current?.doorrrRef?.current.material?.color?.set(color);
      if (CarRefs.current.doorfrRef)
        CarRefs?.current?.doorfrRef?.current.material?.color?.set(color);
      if (CarRefs.current.seatflRef)
        CarRefs?.current?.seatflRef?.current.material?.color?.set(color);
      // if (CarRefs.current.chassisCarpet) CarRefs?.current?.chassisCarpet?.current.material?.color?.set(color);
      handleZoom(CarRefs?.current?.chassisCarpet?.current?.position, "Seats");
    },
  };
  const handleColorChange = (meshName, color, bg) => {
    const handler = colorHandlers[meshName];
    if (handler) handler(color);
  };

  const handleExport = async () => {
    setLoading(true);
    await handleExportUSDZ(ModelRef);
    setLoading(false);
  };
  const triggerAnimation = (name, product) => {
    if (product === "Fridge" && fridgeAnimation.current) {
      setAnimLoading(true);
      setActiveControl(name);
      // console.log("Fridge Animation Ref", name)
      fridgeAnimation.current.handleAnimation(name);
      setTimeout(() => {
        setAnimLoading(false);
        setActiveControl(null);
      }, 1200);
    }
    if (animationRef.current) {
      setAnimLoading(true);
      setActiveControl(name);
      if (name === "Hood") {
        resetView();
      }
      if (name === "Trunk") {
        resetView();
      }
      // Call the animation function
      animationRef.current.handleClick(name);

      // Hide loader after a delay or when animation is complete
      setTimeout(() => {
        setAnimLoading(false);
        setActiveControl(null);
      }, 1200); // Adjust timing based on your animation duration
    }
  };

  const handleZoom = (pos, name) => {
    // console.log("Position", pos)
    setCameraPos([pos.x, pos.y, 1]);

    // Rotate the model 180 degrees around Y axis
    if (ModelRef?.current && name === "Seats") {
      ModelRef.current.rotation.y = Math.PI; // 180 degrees in radians
    }

    setZooming(true);
  };
  const handleRimChange = (name) => {
    setRim(name);
    // console.log(CarRefs?.current?.wheel)
    handleZoom({ x: -3, y: -3, z: 1 }, "Rim");
  };
  const handleStandChange = (name) => {
    setStandType(name);
    handleZoom({ x: 0, y: -7, z: 1 }, "Stand");
  };
  useEffect(() => {
    setLoading(true);
    setBg("white");
    if (selectedOption.label === "Sofa") {
      setLighting(SofaLighting);
    }
    if (selectedOption.label === "Car") {
      setLighting(CarLighting);
    }
    const timeout = setTimeout(() => setLoading(false), 2000); // Increased from 1500 to ensure models fully load
    return () => clearTimeout(timeout);
  }, [selectedOption]);

  // Add initial camera positions for each model type

  const initialCameraPositions = useMemo(
    () => ({
      Car: [0, 0, 5],
      Sofa: [0, 0, 4],
      Fridge: [0, 0, 3],
    }),
    []
  );

  const getDefaultCameraPosition = useCallback(() => {
    return initialCameraPositions[selectedOption.label] || [0, 0, 5];
  }, [selectedOption.label, initialCameraPositions]);

  // Set initial camera position on model change
  useEffect(() => {
    // Set default camera position for the selected model
    const defaultPosition = getDefaultCameraPosition();
    setCameraPos(defaultPosition);
    setZooming(true);

    // Reset model rotation when model changes
    if (ModelRef?.current) {
      ModelRef.current.rotation.y = 0;
    }
  }, [selectedOption, getDefaultCameraPosition]); // Run when selected model changes

  // Enhanced reset view function that uses the appropriate initial position
  const resetView = () => {
    // Reset to the default camera position for current model
    const defaultPosition = getDefaultCameraPosition();
    setCameraPos(defaultPosition);

    // Reset model rotation
    if (ModelRef?.current) {
      ModelRef.current.rotation.y = 0;
    }

    setZooming(true);
  };

  // Helper function to render the appropriate icon based on control action
  const renderControlIcon = (action) => {
    switch (action) {
      case "Doors":
        return <GiCarDoor className="text-gray-700 text-lg" />;
      case "lights":
        return <FaLightbulb className="text-gray-700 text-lg" />;
      case "Trunk":
        return <TrunkIcon />; // Custom trunk icon
      case "bonnet":
      case "Hood":
        return <HoodIcon />; // Custom hood/bonnet icon
      case "Left_DoorAction":
        return <MdOutlineDoorFront className="text-gray-700 text-lg" />; // Left refrigerator door
      case "Right_DoorAction":
        return <MdDoorSliding className="text-gray-700 text-lg" />; // Right refrigerator door
      case "RefrigeratorAction":
        return <LuRefrigerator className="text-gray-700 text-lg" />; // Generic refrigerator action
      case "car":
      default:
        return <FaCarSide className="text-gray-700 text-lg" />;
    }
  };

  const LoadingIndicator = () => {
    useEffect(() => {
      // When this component mounts, set loading state to true
      setLoading(true);
      // Return cleanup function that doesn't change loading state
      // (we'll handle that elsewhere)
      return () => {};
    }, []);

    return null; // This component doesn't render anything
  };

  // Update the progress calculation to use our custom tracking
  useEffect(() => {
    if (resources.total > 0) {
      const calculatedProgress = Math.min(
        100,
        Math.floor((resources.loaded / resources.total) * 100)
      );
      setProgress(calculatedProgress);
    }
  }, [resources]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar appears on all screen sizes */}
      <Navbar />

      <div className="flex flex-col md:flex-row flex-grow relative overflow-hidden">
        <div className="relative flex-1 w-full h-[100vh] md:h-[calc(100vh-5rem)]">
          {/* Enhanced loader with simple design matching the provided image */}
          {loading && (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300 ease-in-out">
              <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg w-64">
                <p className="font-medium text-lg mb-2">loading {progress}%</p>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <Canvas
            shadows
            className="w-full h-full"
            dpr={[1, 2]}
            style={{
              transition: "background 1s ease",
              height: "100vh",
              background: bg,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(bg);
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.outputEncoding = THREE.sRGBEncoding;
            }}
            onProgress={(e) => {
              // Update our resources state with the progress data
              setResources({ loaded: e.loaded, total: Math.max(1, e.total) });
            }}
          >
            <AutoCamera modelRef={ModelRef} />
            <CameraRig
              position={cameraPos}
              active={zooming}
              onDone={() => setZooming(false)}
            />

            {/* Improved lighting setup to prevent dark models */}
            <directionalLight
              position={[0, 10, 2]}
              intensity={1.2}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-bias={-0.0001}
            />

            {/* Add fill lights to prevent dark areas */}
            <directionalLight
              position={[-5, 5, -5]}
              intensity={0.001}
              castShadow={false}
            />

            {/* Keep your environment for reflections */}
            <Environment files={Lighting} />

            {/* Shadow receiving floor plane with very subtle shadow */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1.1, 0]}
              receiveShadow
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.15} transparent />
              shadow-color={"#4a4a4a"}
            </mesh>

            {/* Keep your cylinder with proper material */}
            <mesh receiveShadow position={[0, -1.1, 0]}>
              <cylinderGeometry args={[3, 3, 0.2, 64]} />
              <meshStandardMaterial color={bg} />
            </mesh>

            <Suspense fallback={<LoadingIndicator />}>
              {/* Make sure model casts shadows */}
              <group
                ref={ModelRef}
                position={[0, -1, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              >
                {{
                  Fridge: (
                    <Fridge
                      onRefsReady={handleRefsReady}
                      ref={fridgeAnimation}
                      castShadow
                    />
                  ),
                  Car: (
                    <BMW
                      onRefsReady={handleRefsReady}
                      ref={animationRef}
                      rim={rim}
                      castShadow
                    />
                  ),
                  Sofa: (
                    <Sofa
                      onRefsReady={handleRefsReady}
                      standType={standType}
                      castShadow
                    />
                  ),
                }[selectedOption.label] || null}
              </group>
            </Suspense>
            <OrbitControls
              target={[0, 0, 0]}
              enableZoom={true}
              enableRotate={true}
              enablePan={true}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>

          {/* Export button - Responsive positioning (top on mobile, middle on desktop) */}
          <div className="fixed top-10 lg:top-auto lg:bottom-6 left-1/2 transform -translate-x-1/2 z-40">
            <button
              onClick={handleExport}
              className="bg-primary hover:bg-primary/80 px-4 py-2 rounded-full shadow-lg transition-colors flex items-center justify-center gap-2"
              title="View in Space"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="text-sm font-medium text-primary-foreground sm:inline">
                View in Space
              </span>
            </button>
          </div>

          <div className="fixed right-4 lg:right-[26%]  top-[10%] lg:top-2/3 transform translate-y-24 z-40">
            <button
              onClick={resetView}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200"
              title="Reset View"
            >
              <BiReset className="text-gray-700 text-lg" />
            </button>
          </div>

          {/* Car Controls with loading indicators */}
          {selectedOption.label === "Car" && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40">
              {selectedOption.currentModel.controls?.map((control) => (
                <button
                  key={control.action}
                  onClick={() => triggerAnimation(control.action)}
                  className={`relative bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 
                                    ${
                                      activeControl === control.action
                                        ? "bg-gray-100"
                                        : ""
                                    }
                                  `}
                  title={control.label}
                  disabled={animLoading} // Prevent clicking during animation
                >
                  {/* Loading indicator for this specific button */}
                  {animLoading && activeControl === control.action && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full animate-progress"></div>
                      </div>
                    </div>
                  )}

                  {/* Icon with opacity controlled by loading state */}
                  <div
                    className={
                      animLoading && activeControl === control.action
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  >
                    {renderControlIcon(control.action)}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Refrigerator Controls with loading indicators */}
          {selectedOption.label === "Fridge" && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40">
              <button
                onClick={() => triggerAnimation("Left_DoorAction", "Fridge")}
                className={`relative bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 
                                ${
                                  activeControl === "Left_DoorAction"
                                    ? "bg-gray-100"
                                    : ""
                                }
                              `}
                title="Open Left Door"
                disabled={animLoading}
              >
                {animLoading && activeControl === "Left_DoorAction" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-progress"></div>
                    </div>
                  </div>
                )}
                <div
                  className={
                    animLoading && activeControl === "Left_DoorAction"
                      ? "opacity-0"
                      : "opacity-100"
                  }
                >
                  {renderControlIcon("Left_DoorAction")}
                </div>
              </button>

              <button
                onClick={() => triggerAnimation("Right_DoorAction", "Fridge")}
                className={`relative bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 
                                ${
                                  activeControl === "Right_DoorAction"
                                    ? "bg-gray-100"
                                    : ""
                                }
                              `}
                title="Open Right Door"
                disabled={animLoading}
              >
                {animLoading && activeControl === "Right_DoorAction" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-progress"></div>
                    </div>
                  </div>
                )}
                <div
                  className={
                    animLoading && activeControl === "Right_DoorAction"
                      ? "opacity-0"
                      : "opacity-100"
                  }
                >
                  {renderControlIcon("Right_DoorAction")}
                </div>
              </button>

              <button
                onClick={() => triggerAnimation("RefregeratorAction", "Fridge")}
                className={`relative bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 
                                ${
                                  activeControl === "RefrigeratorAction"
                                    ? "bg-gray-100"
                                    : ""
                                }
                              `}
                title="Refrigerator Action"
                disabled={animLoading}
              >
                {animLoading && activeControl === "RefrigeratorAction" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-progress"></div>
                    </div>
                  </div>
                )}
                <div
                  className={
                    animLoading && activeControl === "RefrigeratorAction"
                      ? "opacity-0"
                      : "opacity-100"
                  }
                >
                  {renderControlIcon("RefrigeratorAction")}
                </div>
              </button>
            </div>
          )}

          {/* Configurator Bar */}
          <ConfiguratorBar
            selectedOption={selectedOption}
            handleStandChange={handleStandChange}
            handleColorChange={handleColorChange}
            handleZoom={handleZoom}
            barActive={barActive}
            setBarActive={setBarActive}
            handleRimChange={handleRimChange}
          />
        </div>

        {/* Sidebar - Improved positioning for mobile/desktop */}
        <div
          className={`
      fixed md:relative 
      bottom-0 md:bottom-auto 
      left-0 md:left-auto 
      right-0 md:right-auto
      w-full md:w-1/4
      h-[70vh] md:h-full
      max-h-screen
      z-20
      bg-white md:bg-transparent
      shadow-lg md:shadow-none
      rounded-t-2xl md:rounded-none
      transition-all duration-300 ease-in-out
      transform md:translate-y-0 translate-y-[calc(100%-8rem)]
      pb-14 md:pb-0 ${showDetails ? "translate-y-0" : ""} z-10
  `}
        >
          <div
            className="h-2 w-16 bg-gray-300 rounded-full mx-auto my-2 md:hidden"
            onClick={() => setShowDetails(!showDetails)}
          ></div>
          <ConfigSidebar
            Options={Options}
            onOptionSelect={handleOptionSelect}
            handleExport={handleExport}
            setBarActive={setBarActive}
            barActive={barActive}
            selectedOption={selectedOption}
            showDetails={showDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveModelViewer;
