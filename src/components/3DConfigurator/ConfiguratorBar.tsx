import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { SofaOptions, Caroptions, RefrigeratorOptions } from "./config";

export const ConfiguratorBar = ({
  selectedOption,
  handleStandChange,
  handleColorChange,
  handleZoom,
  barActive,
  setBarActive,
  handleRimChange,
}) => {
   const [selectedBar, setSelectedBar] = useState(null);

  const subOptionHandlers = {
    Wooden: () => {
      handleStandChange("Wood");
    },
    Gold: () => {
      handleStandChange("Gold");
    },
    Sliver: () => {
      handleStandChange("Sliver");
    },
    Rim1: () => {
      handleRimChange(true);
    },
    Rim2: () => {
      handleRimChange(false);
    },

    Alpine: (label, bg) => {
      handleColorChange(label, "#FFFFFF", bg);
    },
    Brown: (label, bg) => {
      handleColorChange(label, "#E0B778", bg);
    },
    Blue: (label, bg) => {
      handleColorChange(label, "#7C9AAE", bg);
    },
    Manhattan_Green: (label, bg) => {
      handleColorChange(label, "#4A4F42", bg);
    },
    Gray: (label, bg) => {
      handleColorChange(label, "gray", bg);
    },
    Green: (label, bg) => {
      handleColorChange(label, "green", bg);
    },
    White_leather: (label) => {
      handleColorChange(label, "#BCBCBC");
    },
    Skin_leather: (label) => {
      handleColorChange(label, "#BF9972");
    },
    Red_leather: (label) => {
      handleColorChange(label, "#950606");
    },
    Black_leather: (label) => {
      handleColorChange(label, "#1a1a1a");
    },
    Dark_Vanilla: (label, bg) => {
      handleColorChange("Fridge", "#DBBB9D", bg);
    },
    Brownish_Maroon: (label, bg) => {
      handleColorChange("Fridge", "#562222", bg);
    },
    Charcoal_Blue: (label, bg) => {
      handleColorChange("Fridge", "#334A53", "10171A");
    },
    Dim_Gray: (label, bg) => {
      handleColorChange("Fridge", "#555555", bg);
    },
  };

  useEffect(() => {
    selectedOption.label === "Sofa"
      ? setSelectedBar(SofaOptions)
      : selectedOption.label === "Fridge"
      ? setSelectedBar(RefrigeratorOptions)
      : setSelectedBar(Caroptions);
  }, [selectedOption]);

  return (
    <>
      {/* Toggle Button - Always visible */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => setBarActive(!barActive)}
          className={`
                        flex items-center justify-center
                        p-2 rounded-r-lg shadow-lg
                        transition-all duration-300
                        bg-white bg-opacity-80
                        hover:bg-gray-50
                        ${
                          barActive
                            ? "translate-x-[250px] md:translate-x-[280px]"
                            : "translate-x-0"
                        }
                    `}
          title={barActive ? "Hide Customize" : "Customize"}
        >
          <FaChevronRight
            className={`w-5 h-5 text-primary transition-transform duration-300 ${
              barActive ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Configurator Panel */}
      {barActive && (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30">
          <div
            className={`
                        transition-all duration-300 ease-in-out
                        bg-white bg-opacity-95 backdrop-filter backdrop-blur-md
                        shadow-lg rounded-r-lg
                        max-h-[70vh] overflow-y-auto
                        w-[250px] md:w-[280px]
                        flex flex-col
                    `}
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-primary">Customize</h2>
              </div>
            </div>

            <div className="p-4 overflow-y-auto">
              {selectedBar && (
                <div className="space-y-5">
                  {selectedBar.map((option, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-gray-100 last:border-b-0"
                    >
                      <h3 className="font-medium text-primary mb-3 flex items-center gap-2">
                        {option.iconUrl ? (
                          <img
                            src={option.iconUrl}
                            alt=""
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <span>{option.icon}</span>
                        )}
                        {option.label}
                      </h3>

                      <div className="grid grid-cols-4 gap-3">
                        {option.subOptions?.map((subOption, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => {
                              if (subOption.label === "754M") {
                                const subHandler = subOptionHandlers["Rim1"];
                                if (subHandler) {
                                  subHandler();
                                }
                              }
                              if (subOption.label === "863M") {
                                const subHandler = subOptionHandlers["Rim2"];
                                if (subHandler) {
                                  subHandler();
                                }
                              }
                              const subHandler =
                                subOptionHandlers[subOption.label];
                              if (subHandler) {
                                subHandler(option.label, subOption.bg);
                                subHandler();
                              }
                            }}
                            className="flex flex-col items-center p-1"
                            title={subOption.label}
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md flex items-center justify-center bg-gray-50 hover:scale-110 transition-transform">
                              {subOption.iconUrl ? (
                                <img
                                  src={subOption.iconUrl}
                                  alt={subOption.label}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="text-base">
                                  {subOption.icon}
                                </div>
                              )}
                            </div>
                            <span className="text-xs mt-1 text-center max-w-[60px] truncate text-muted-foreground">
                              {subOption.label.replace("_", " ")}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
