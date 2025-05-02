import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, MutableRefObject } from "react";

type OptionType = {
  value: string;
  image: string;
  label: string;
  price: string;
  currentModel: {
    image: string;
    label: string;
    price: string;
    details: Record<string, string>;
  };
};

type ConfigSidebarProps = {
  Options: OptionType[];
  onOptionSelect: (option: OptionType) => void;
  handleExport: () => void;
  setBarActive: (active: boolean) => void;
  barActive: boolean;
  selectedOption: OptionType & { value: string; currentModel: OptionType["currentModel"] };
  showDetails: boolean;
};

const ConfigSidebar = ({
  Options,
  onOptionSelect,
  handleExport,
  setBarActive,
  barActive,
  selectedOption,
  showDetails
}: ConfigSidebarProps) => {
    const isExpanded = true;
    const sliderRef = useRef(null);

    const renderModelDetails = () => (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-1">
                <img
                    src={selectedOption.currentModel.image}
                    alt={selectedOption.currentModel.label}
                    className="w-auto h-16 object-cover rounded-lg mr-3"
                />
                <div>
                    <h3 className="text-lg font-semibold text-[#4a4a4a]">{selectedOption.currentModel.label}</h3>
                    {/* Price directly below model name */}
                    <span className="text-sm font-semibold text-[#359dad] block">
                        {selectedOption.currentModel.price}
                    </span>
                </div>
            </div>

            <p className="text-sm text-[#4a4a4a] mt-4 mb-3">
                {selectedOption.currentModel.details.description}
            </p>
            <ul className="space-y-4 mt-2">
                {Object.entries(selectedOption.currentModel.details)
                    .filter(([key]) => key !== 'description')
                    .map(([key, value]) => (
                        <li key={key} className="flex flex-col">
                            <h4 className="text-sm font-bold text-[#359dad] capitalize mb-1">
                                {key.replace(/([A-Z])/g, ' $1')}:
                            </h4>

                            <ul className="list-disc pl-5 space-y-1">
                                {value.split('•').filter(item => item.trim()).map((item, i) => (
                                    <li key={i} className="text-sm text-gray-600">
                                        {item.trim()}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );

    // Functions to navigate through slider
    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    // Find current index safely
    const currentIndex = Array.isArray(Options) && Options.length > 0 && selectedOption ?
        Options.findIndex(option => option.value === selectedOption.value) : 0;

    return (
        <div className={`
            flex flex-col 
            bg-white w-full 
            p-4 sm:p-5 lg:p-6 
            shadow-xl rounded-2xl 
            border border-gray-100 
            max-w-sm mx-auto md:mx-0 
            overflow-x-hidden
            ${isExpanded ? 'h-auto max-h-full overflow-auto' : 'h-auto max-h-[75vh] md:max-h-full'}
            transition-all duration-300
        `}>
            {/* Model selector with navigation arrows */}
            <div className="relative bg-white pb-3">
                {/* Left navigation arrow */}
                <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-100 rounded-full p-2 shadow-md"
                    aria-label="Previous model"
                    disabled={currentIndex === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <Slider
                    ref={sliderRef}
                    dots={false}
                    infinite={false}
                    centerMode={true}
                    centerPadding="0"
                    slidesToShow={1}  // Show only one slide at a time
                    speed={300}
                    focusOnSelect={false}
                    className="px-12 w-auto" // Increased padding for arrow space
                    initialSlide={currentIndex} // Start with current model
                    afterChange={(index) => {
                        // This triggers after a slide change
                        if (Array.isArray(Options) && Options.length > 0) {
                            onOptionSelect(Options[index]);
                        }
                    }}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: "0",
                            },
                        },
                    ]}
                >
                    {Array.isArray(Options) && Options.map((option) => (
                        <div
                            key={option.value}
                            className="flex flex-col items-center cursor-pointer px-3"
                        >
                            <div
                                className={`p-3 sm:p-4 rounded-lg transition-all `
                                }
                            >
                                <img
                                    src={option.image}
                                    alt={option.label}
                                    className="h-20 sm:h-24 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Right navigation arrow */}
                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-100 rounded-full p-2 shadow-md"
                    aria-label="Next model"
                    disabled={!Array.isArray(Options) || currentIndex === Options.length - 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Optional: Indicator dots */}
                <div className="flex justify-center mt-3 space-x-1">
                    {Array.isArray(Options) && Options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                sliderRef.current?.slickGoTo(index);
                            }}
                            className={`h-1.5 rounded-full transition-all ${selectedOption?.value === option.value
                                ? "w-4 bg-[#359dad]"
                                : "w-1.5 bg-gray-300"
                                }`}
                            aria-label={`Go to ${option.label}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content area with details */}
            <div className="overflow-y-auto scrollbar-hide">
                {selectedOption && renderModelDetails()}
            </div>

            {/* Replace the jsx attribute with className to fix the warning */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
};

export default ConfigSidebar;