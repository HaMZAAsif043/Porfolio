export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  screenshots?: string[];
  technologies: string[];
  features?: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "DineIn Restaurant Booking Platform",
    description:
      "Comprehensive restaurant booking platform with three user roles — Admin, Restaurant, and User — featuring real-time table booking and management dashboards.",
    longDescription:
      "DineIn is a comprehensive restaurant booking platform built using Next.js, designed to streamline dining reservations and management. It features three user roles — Admin, Restaurant, and User — with dedicated dashboards for Admins and Restaurants. The platform allows real-time table booking, restaurant profile management, and efficient reservation handling for an enhanced dining experience.",
    imageUrl: "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470437/assets/kkonbb0iudrlqhfdgil5.webp",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470437/assets/kkonbb0iudrlqhfdgil5.webp",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Multi-role user system (Admin, Restaurant, User)",
      "Real-time table booking",
      "Restaurant profile management",
      "Admin and Restaurant dashboards",
      "Reservation handling system",
      "Responsive design",
    ],
    liveUrl: "https://dinein.pk/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "Web Development",
  },
  {
    id: "2",
    title: "TravelMultiverse Platform",
    description:
      "Immersive travel experience platform offering curated travel experiences to futuristic cityscapes with destination insights and budget planning.",
    longDescription:
      "TravelMultiverse is a platform offering curated travel experiences to futuristic cityscapes, vibrant cultures, and diverse cuisines. It provides destination insights and estimated budgets to assist travelers in planning their journeys.",
    imageUrl: "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470505/assets/zkywknfthrytkoaokzfl.webp",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470505/assets/zkywknfthrytkoaokzfl.webp",
    ],
    technologies: ["React", "Next.js", "AI Integration", "Tailwind CSS"],
    features: [
      "Curated travel experiences",
      "Destination insights",
      "Budget estimation",
      "Journey planning tools",
      "Interactive UI",
      "Responsive design",
    ],
    liveUrl: "https://travelmultiverse.com/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "Web Development",
  },
  {
    id: "3",
    title: "Dura-Lift 3D Product Configurator",
    description:
      "Interactive 3D product configurator for garage door hardware with VR, AR, and USDZ model support for Apple devices.",
    longDescription:
      "Interactive 3D product configurator enabling users to customize and visualize garage door hardware in real-time, with support for VR, AR, and USDZ models for Apple devices.",
    imageUrl: "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470439/assets/jnupmuuac7p50lcwarvt.webp",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470439/assets/jnupmuuac7p50lcwarvt.webp",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470438/assets/oiamze5ompa06q9oaq3f.webp"
    ],
    technologies: ["React", "Three.js", "WebGL", "AR/VR", "USDZ"],
    features: [
      "Real-time 3D visualization",
      "Product customization",
      "VR/AR support",
      "USDZ models for Apple devices",
      "Interactive controls",
      "High-fidelity rendering",
    ],
    liveUrl: "https://duralifthardware.netlify.app/home/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "3D Development",
  },
  {
    id: "4",
    title: "Blenspark Portfolio Website",
    description:
      "Modern portfolio website featuring 3D configurator integration and AI chatbot for enhanced user interaction and engagement.",
    longDescription:
      "Blenspark is a comprehensive portfolio website that showcases advanced web technologies including 3D product configurators and AI chatbot integration. The platform demonstrates cutting-edge web development capabilities with interactive 3D elements and intelligent conversational interfaces.",
    imageUrl: "/blenspark.png",
    screenshots: [
      "/blenspark.png",
      "/blenspark1.png",
      "/blenspark2.png",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470493/assets/fdiylckjz264ccrbngzo.webp",
    ],
    technologies: ["React", "Three.js", "AI Integration", "Tailwind CSS", "Next.js"],
    features: [
      "3D configurator integration",
      "AI chatbot functionality",
      "Interactive portfolio showcase",
      "Modern responsive design",
      "Advanced animations",
      "User engagement tools",
    ],
    liveUrl: "https://blenspark.com/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "Web Development",
  },
  {
    id: "5",
    title: "Nexuss Advisory Portfolio",
    description:
      "Professional financial advisory portfolio website with integrated chatbot, responsive design, and comprehensive service showcase.",
    longDescription:
      "Nexuss Advisory is a sophisticated financial advisory portfolio website that combines professional presentation with modern web technologies. The platform features intelligent chatbot integration for client inquiries, fully responsive design, and comprehensive showcase of financial services and expertise.",
    imageUrl: "/nexuss.png",
    screenshots: [
      "/nexuss.png",
    ],
    technologies: ["React", "Next.js", "AI Chatbot", "Tailwind CSS", "TypeScript"],
    features: [
      "Professional portfolio design",
      "Integrated AI chatbot",
      "Fully responsive layout",
      "Service showcase",
      "Client inquiry system",
      "Modern UI/UX",
    ],
    liveUrl: "https://www.nexussadvisory.com/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "Web Development",
  },
  {
    id: "6",
    title: "Promptopia",
    description:
      "Full-stack Next.js application for sharing AI prompts with the community. Features user authentication, CRUD operations, and search functionality.",
    longDescription:
      "Promptopia is a full-stack Next.js application that allows users to share, discover, and use AI prompts. The platform features Google authentication, a responsive design, and comprehensive CRUD functionality for managing prompts. Users can search for prompts by content, tag, or username, and copy prompts with a single click.",
    imageUrl: "/promptopia.png",
    screenshots: [
      "/promptopia.png",
    ],
    technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    features: [
      "User authentication with Google OAuth",
      "Create, read, update, and delete prompts",
      "Search functionality by content, tag, or username",
      "User profiles with personalized prompt collections",
      "One-click prompt copying",
      "Responsive design for all devices",
    ],
    liveUrl:
      "https://promtopia-main-l8hyo03va-hamzaasif043s-projects.vercel.app/",
    githubUrl: "https://github.com/HaMZAAsif043/promtopia-main",
    category: "Web Development",
  },
  {
    id: "7",
    title: "Jarvis AI Assistant",
    description:
      "Python-based AI agent for personal tasks, featuring voice recognition, natural language processing, and task automation capabilities.",
    longDescription:
      "Jarvis is a personal AI assistant built with Python that can perform various tasks through voice commands. It features speech recognition, natural language processing, and integration with multiple APIs for weather updates, web searches, and more. The assistant can open applications, play music, tell jokes, and provide information in response to user queries.",
    imageUrl:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    technologies: ["Python", "Speech Recognition", "NLP", "APIs"],
    features: [
      "Voice command recognition",
      "Natural language understanding",
      "Application control (open/close programs)",
      "Web search functionality",
      "Weather updates and forecasts",
      "Task automation for common activities",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/HaMZAAsif043/jarvis_AI_Assistance_usingPython",
    category: "AI/ML",
  },
  {
    id: "8",
    title: "RAG-Based Smart Course Chatbot",
    description:
      "Advanced AI chatbot using Retrieval-Augmented Generation (RAG) for intelligent course Q&A, providing contextual answers from course materials.",
    longDescription:
      "A sophisticated AI-powered chatbot that leverages Retrieval-Augmented Generation (RAG) technology to provide intelligent question-answering capabilities for course materials. The system combines document retrieval with generative AI to deliver accurate, contextual responses based on course content, making learning more interactive and accessible.",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135968-6db3b0025e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442135968-6db3b0025e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    technologies: ["Python", "RAG", "LangChain", "Vector Database", "NLP", "AI"],
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Course material indexing",
      "Contextual Q&A responses",
      "Document similarity search",
      "Natural language understanding",
      "Educational content optimization",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/HaMZAAsif043/RAG-Based-Smart-Course-Chatbot-Q-A",
    category: "AI/ML",
  },
  {
    id: "9",
    title: "3D Sofa Configurator",
    description:
      "Interactive 3D sofa configurator with multiple color options, material customization, and real-time visualization for furniture shopping.",
    longDescription:
      "An advanced 3D sofa configurator that allows customers to customize furniture in real-time. Features multiple color options, material selection, and photorealistic rendering to help customers visualize their perfect sofa before purchase.",
    imageUrl: "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470502/assets/j4bzbtkccjzjftlepvwy.png",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470502/assets/j4bzbtkccjzjftlepvwy.png",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470435/assets/xbxwcaorgewziopdsopo.png",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470441/assets/pannej1krxej0n4svi1q.png",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470495/assets/vfytufvhe9smrsdrgcfn.png",
    ],
    technologies: ["React", "Three.js", "WebGL", "JavaScript", "Tailwind CSS"],
    features: [
      "Real-time 3D visualization",
      "Multiple color options",
      "Material customization",
      "Photorealistic rendering",
      "360° product view",
      "Interactive controls",
    ],
    liveUrl: "https://blenspark.com/3d-configurator",
    githubUrl: "https://github.com/HaMZAAsif043/",
    category: "3D Development",
  },
  {
    id: "10",
    title: "3D Product Configurator",
    description:
      "Advanced 3D product configurator supporting multiple product types including cosmetics, energy drinks, and consumer goods with real-time customization.",
    longDescription:
      "A versatile 3D product configurator that supports various product categories. Features real-time customization, material changes, color variations, and photorealistic rendering for enhanced customer experience in e-commerce applications.",
    imageUrl:
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470499/assets/x1y8agwlvjme4jvlm3bm.webp",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470499/assets/x1y8agwlvjme4jvlm3bm.webp",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470436/assets/lbiyuqfgkerevrnb6tme.webp",
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470442/assets/r3xfwghdgihfcsmyzcze.webp",
    ],
    technologies: [
      "React",
      "Three.js",
      "WebGL",
      "JavaScript",
      "Tailwind CSS",
    ],
    features: [
      "Multi-product support",
      "Real-time customization",
      "Material and color variations",
      "Photorealistic rendering",
      "360° product visualization",
      "E-commerce integration",
    ],
    liveUrl: "https://blenspark.com/3d-configurator",
    githubUrl: "https://github.com/HaMZAAsif043/",
    category: "3D Development",
  },
  {
    id: "11",
    title: "AI Chatbot Integration",
    description:
      "Intelligent conversational interface with natural language processing capabilities for customer support and information retrieval.",
    longDescription:
      "This AI-powered chatbot provides intelligent customer support with natural language processing capabilities. It can understand user queries, provide relevant information, and escalate complex issues to human agents when necessary.",
    imageUrl: "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470434/assets/itpy6n85ikkomriqurrd.webp",
    screenshots: [
      "https://res.cloudinary.com/drpnad4kk/image/upload/v1759470434/assets/itpy6n85ikkomriqurrd.webp",
    ],
    technologies: ["Python", "TensorFlow", "React", "NLP"],
    features: [
      "Natural language processing",
      "Customer support automation",
      "Information retrieval",
      "Human agent escalation",
      "Multi-language support",
      "Analytics dashboard",
    ],
    liveUrl: "https://travelmultiverse.com/",
    githubUrl: "https://github.com/HaMZAAsif043",
    category: "AI/ML",
  },
];