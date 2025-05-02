export const Options = [
  {
    label: "Car",
    value: "Car",
    image:
      "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566977/R2_tpzee2.png", // Your car category image
    currentModel: {
      id: "car-1",
      label: "BMW X7",
      price: "$50,499",
      image:
        "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566977/R2_tpzee2.png",
      details: {
        description:
          "Luxury SUV with premium features and powerful performance",
        exterior: 'Laserlight headlights • 22" alloys • Panoramic roof',
        interior: "Leather seats • Wood trim • Ambient lighting",
        performance: "3.0L Turbo • 335HP • 0-60 in 5.3s",
      },
      controls: [
        { label: "Doors", action: "Doors" },
        { label: "Hood", action: "Hood" },
        { label: "Trunk", action: "Trunk" },
      ],
    },
  },
  {
    label: "Sofa",
    value: "Sofa",
    image:
      "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567037/R4_q19kgv.png", // Your sofa category image
    currentModel: {
      id: "sofa-1",
      label: "Modern Leather Sofa",
      price: "$1,299",
      image:
        "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567037/R4_q19kgv.png",
      details: {
        description: "Premium comfort with elegant contemporary design",
        material: "Italian full-grain aniline leather",
        dimensions: '84" W × 38" D × 32" H',
        features: "Hand-tufted • Reclining • Modular design",
      },
    },
  },
  {
    label: "Fridge",
    value: "Fridge",
    image:
      "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032544/1_wgl02f.png",
    currentModel: {
      id: "fridge-1",
      label: "Smart French Door",
      price: "$2,499",
      image:
        "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032544/1_wgl02f.png",
      details: {
        description: "Advanced cooling technology with smart features",
        capacity: "25 cu. ft. total (15.5 fridge / 9.5 freezer)",
        features: "Touch screen • Smart cooling • Ice maker",
        energy: "Energy Star certified • 650 kWh/year",
      },
    },
  },
];
export const SofaOptions = [
  {
    label: "Frame",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567037/R4_q19kgv.png"
        className="w-20 h-10"
        alt="sofa"
      />
    ),
    subOptions: [
      {
        label: "Brown",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567037/R4_q19kgv.png",
        color: "#E0B778",
        bg: "#E0B778", // dark contrast for white car
      },
      {
        label: "Blue",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567032/R3_oeebat.png",
        color: "#4B6A91", // Stormy Blue
        bg: "#2A4B70", // Deep Slate Blue for contrast
      },
      {
        label: "Manhattan_Green",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567030/R2_o6o6t9.png",
        color: "#212121", // Charcoal Black
        bg: "#D1D1D1", // Pale Light Gray to contrast black
      },
      {
        label: "Gray",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567033/R1_jvgizf.png",
        color: "#B0B0B0", // Silver Gray
        bg: "#F2F2F2",
      },
    ],
  },
  {
    label: "Legs",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567036/Wood_f55qvg.png"
        alt="legs"
        className="w-7 h-7"
      />
    ),
    subOptions: [
      {
        label: "Wooden",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567036/Wood_f55qvg.png",
        color: "#6B3F2E", // Rich Walnut Brown
      },
      {
        label: "Gold",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567025/Gold_vslak6.png",
        color: "#A4A4A4", // Steel Gray
      },
      {
        label: "Sliver",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745567039/Silver_tov0pt.png",
        color: "#A4A4A4", // Steel Gray
      },
    ],
  },
];

export const Caroptions = [
  {
    label: "Body",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566977/R2_tpzee2.png"
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "Alpine",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566977/R2_tpzee2.png",
        color: "#FFFFFF",
        bg: "#1A1A1A",
      },
      {
        label: "Blue",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566972/R1_jw9bu0.png",
        color: "#7C9AAE",
        bg: "#1C1F24",
      },
      {
        label: "Manhattan_Green",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566975/R3_pkkwmn.png",
        color: "#4A4F42",
        bg: "#E0E0E0",
      },
      {
        label: "Gray",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566979/R4_lqpejq.png",
        color: "gray",
        bg: "#DCDCDC",
      },
    ],
  },
  {
    label: "Wheels",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566986/Rim2_gexxf1.png"
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "754M",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566986/Rim2_gexxf1.png",
      },
      {
        label: "863M",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566986/Rim_klgcrt.png",
      },
    ],
  },
  {
    label: "Seats",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566993/Seat_pizuor.png"
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "Red_leather",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566985/Red_leather_d2bm31.png",
        color: "#950606",
      },
      {
        label: "Skin_leather",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566992/Skin_leather_ckml3r.png",
        color: "#BF9972",
      },
      {
        label: "White_leather",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566990/White_seat_rk9b9m.png",
        color: "#BCBCBC",
      },
      {
        label: "Black_leather",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1745566993/Seat_pizuor.png",
        color: "#1a1a1a",
      },
    ],
  },
];
export const RefrigeratorOptions = [
  {
    label: "Body",
    icon: (
      <img
        src="https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032544/1_wgl02f.png"
        className="w-auto h-10"
        alt="Fridge"
      />
    ),
    subOptions: [
      {
        label: "Dim_Gray",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032544/1_wgl02f.png",
        color: "#696969",
        bg: "#696969",
      },
      {
        label: "Charcoal_Blue",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032561/3_iqhp8b.png",
        color: "#334A53",
        bg: "#334A53",
      },
      {
        label: "Brownish_Maroon",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032578/4_ode8wb.png",
        color: "#562222",
        bg: "#562222",
      },
      {
        label: "Dark_Vanilla",
        iconUrl:
          "https://res.cloudinary.com/duzgdiwwb/image/upload/v1746032518/2_gluoun.png",
        color: "#DBBB9D",
        bg: "#DBBB9D",
      },
    ],
  },
  // {
  //   label: "Legs",
  //   icon: <img src={wood} alt="legs" className="w-7 h-7" />,
  //   subOptions: [
  //     {
  //       label: "Wooden",
  //       iconUrl: wood,
  //       color: "#6B3F2E", // Rich Walnut Brown
  //     },
  //     {
  //       label: "Gold",
  //       iconUrl: metal,
  //       color: "#A4A4A4", // Steel Gray
  //     },
  //     {
  //       label: "Sliver",
  //       iconUrl: sliver,
  //       color: "#A4A4A4", // Steel Gray
  //     },
  //   ],
  // },
];
