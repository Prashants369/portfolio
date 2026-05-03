import { Project, Experience, Skill } from "./types";

// --- HOW TO ADD PROJECTS ---
// To add a new project: 
// 1. Add an object to the 'projects' array below.
// 2. Give it a unique 'id' (e.g., "my-new-world").
// 3. Fill in the 'thumbnail' and 'gallery' with image URLs.
// 4. Update 'tools' and 'longDescription' with your project details.

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/prashant-sagathiya-a67b54203/",
  github: "https://github.com/prashantsagathiya",
  twitter: "#",
  email: "prashantsagathiya818@gmail.com"
};

export const projects: Project[] = [
  {
    id: "silent-echo",
    title: "Silent Echo: Operation Rainforest",
    category: "Game Design & Technical Art",
    thumbnail: "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
    description: "A technical showcase of environment art and tactical level design set in a dense rainforest setting.",
    longDescription: "Silent Echo is a comprehensive project demonstrating the integration of high-fidelity environment art with tactical gameplay systems. It covers the technical art workflow for a rainforest environment, including procedural ecosystems and modular building kits, while documenting the level design metrics and mission flow for a stealth-focused tactical experience.",
    tools: ["Unreal Engine 5", "PCG Framework", "Lumen", "C++", "Motion Matching"],
    year: "2025",
    role: "Technical Artist & Game Designer",
    persona: "3D",
    variants: [
      {
        id: "environment",
        label: "Environment Art",
        title: "Silent Echo: Technical Environment",
        category: "Technical Environment Art",
        description: "Advanced environment art showcase featuring PCG ecosystems and modular building kits.",
        longDescription: "Developed a high-fidelity rainforest environment using Unreal Engine 5. The project focuses on a complete technical art workflow, from mood studies and references to complex procedural ecosystems using the PCG framework. It demonstrates optimization techniques for large-scale foliage and modular architecture integration.",
        gallery: [
          "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00001 (2).png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00002.png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00003 (2).png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00004.png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00005.png",
          "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
          "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00006.png",
          "/projects/druglordsbase/final-renders/HighresScreenshot00007.png",
          "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
          "/projects/druglordsbase/optimizations/HighresScreenshot00003.png",
          "/projects/druglordsbase/extra-buildings/HighresScreenshot00006.png",
          "/projects/druglordsbase/extra-buildings/HighresScreenshot00007.png",
          "/projects/druglordsbase/extra-buildings/HighresScreenshot00008.png",
          "/projects/druglordsbase/extra-buildings/HighresScreenshot00009.png",
          "/projects/druglordsbase/extra-buildings/HighresScreenshot00010.png"
        ],
        sections: [
          {
            title: "01. Environment Renders",
            description: "High-fidelity cinematic renders utilizing Lumen global illumination. Focused on realistic light scattering through dense foliage and atmospheric depth.",
            images: [
              "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00001 (2).png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00002.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00003 (2).png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00004.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00005.png"
            ]
          },
          {
            title: "02. Technical Art & PCG Systems",
            description: "Procedural Content Generation (PCG) graphs used to distribute organic foliage and micro-debris across the landscape efficiently.",
            images: [
              "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
              "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00006.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00007.png"
            ]
          },
          {
            title: "03. Optimization & Modular Kits",
            description: "Implementing geometry density management, LOD transitions, and modular building kits to ensure consistent performance.",
            images: [
              "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
              "/projects/druglordsbase/optimizations/HighresScreenshot00003.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00006.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00007.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00008.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00009.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00010.png"
            ]
          }
        ],
        tools: ["Unreal Engine 5", "PCG Framework", "Lumen"]
      },
      {
        id: "gdd",
        label: "Game Design Document",
        title: "Silent Echo: Design Documentation",
        category: "Game Design & Level Documentation",
        description: "Technical level design documentation focusing on tactical flow, mission structure, and core gameplay mechanics.",
        longDescription: "Authored comprehensive design documentation for a tactical rescue mission. The GDD details the mission progression, character dynamics (Capt. Arjun Mehta and Sgt. Alex Carter), and tactical sightlines. It defines the core gameplay loop of stealth vs. combat, environmental storytelling, and AI behavior patterns within a rainforest setting.",
        gallery: [
          "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00002.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00002 (2).png",
          "/projects/druglordsbase/greyboxing/ScreenShot00003.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00004.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00006.png",
          "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png",
          "/projects/druglordsbase/references/81826ff4-8eb3-49d9-89d2-6db33208e178.png"
        ],
        sections: [
          {
            title: "01. Level Flow & Structure",
            description: "Designing a linear-branching progression that guides the player through distinct phases: insertion, exploration, infiltration, and resolution. Focus on pacing and tactical decision-making.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00000.png"
            ]
          },
          {
            title: "02. Characters & Narrative Hooks",
            description: "Defining character archetypes and their dynamic relationship. Using environmental cues to ground the narrative in the local culture, increasing stakes as the mission evolves into a rescue operation.",
            images: [
              "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png"
            ]
          },
          {
            title: "03. Mechanics & AI Systems",
            description: "Documenting stealth systems including AI vision/hearing cones and behavior trees. Defining traversal mechanics to enhance tactical options.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00005.png"
            ]
          }
        ],
        tools: ["Technical Writing", "Level Design", "Greyboxing"]
      }
    ],
    sections: [],
    gallery: [
      "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00000 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00001 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00002.png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00002 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00003 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00004.png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00004 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00005.png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00005 (2).png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00006.png",
      "/projects/druglordsbase/final-renders/HighresScreenshot00007.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00002.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00002 (2).png",
      "/projects/druglordsbase/greyboxing/ScreenShot00003.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00004.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
      "/projects/druglordsbase/greyboxing/ScreenShot00006.png",
      "/projects/druglordsbase/mid-renders/HighresScreenshot00008.png",
      "/projects/druglordsbase/mid-renders/HighresScreenshot00009.png",
      "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
      "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
      "/projects/druglordsbase/mid-renders/ScreenShot00007.png",
      "/projects/druglordsbase/extra-buildings/HighresScreenshot00006.png",
      "/projects/druglordsbase/extra-buildings/HighresScreenshot00007.png",
      "/projects/druglordsbase/extra-buildings/HighresScreenshot00008.png",
      "/projects/druglordsbase/extra-buildings/HighresScreenshot00009.png",
      "/projects/druglordsbase/extra-buildings/HighresScreenshot00010.png",
      "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
      "/projects/druglordsbase/optimizations/HighresScreenshot00003.png",
      "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png",
      "/projects/druglordsbase/references/81826ff4-8eb3-49d9-89d2-6db33208e178.png",
      "/projects/druglordsbase/references/ba469b5b-65d9-4c04-9b8a-9e67bc539d94.png",
      "/projects/druglordsbase/references/Rustic Jungle Watchtower at Night.png"
    ]
  },
  {
    id: "navamdisha",
    title: "Navam Disha: The 9th Direction",
    category: "World Building & Game Design",
    thumbnail: "/projects/navam disha envirnment/HighresScreenshot00027.png",
    description: "A metaphysical exploration of 15th-century India, combining technical environment art with deep narrative systems.",
    longDescription: "Navamdisha is a project focused on bridging technical environment art with narrative-driven game design. Set in 15th-century India, it features modular palace architecture in Unreal Engine 5 alongside a Game Design Document detailing the '9th Direction'—a hidden layer of reality accessible through celestial rituals.",
    tools: ["Unreal Engine 5", "Lumen", "Blueprints", "Gaea", "Modeling Tools"],
    year: "2025",
    role: "Environment Artist & Game Designer",
    persona: "3D",
    variants: [
      {
        id: "environment",
        label: "Technical Environment",
        title: "Navam Disha: Environment Art",
        category: "Technical Environment Art",
        description: "Technical environment art focusing on modular palace architecture and optimized exterior lighting.",
        longDescription: "Created a desert palace environment using modular building kits in Unreal Engine 5. Focused on architectural silhouette, Lumen-based lighting, and performance optimization for expansive exterior vistas.",
        gallery: [
          "/projects/navam disha envirnment/HighresScreenshot00027.png",
          "/projects/navam disha envirnment/HighresScreenshot00028.png",
          "/projects/navam disha envirnment/HighresScreenshot00030.png",
          "/projects/navam disha envirnment/HighresScreenshot00031.png",
          "/projects/navam disha envirnment/HighresScreenshot00033.png",
          "/projects/navam disha envirnment/HighresScreenshot00034.png",
          "/projects/navam disha envirnment/HighresScreenshot00000.png",
          "/projects/navam disha envirnment/HighresScreenshot00015.png",
          "/projects/navam disha envirnment/HighresScreenshot00022.png",
          "/projects/navam disha envirnment/HighresScreenshot00024.png",
          "/projects/navam disha envirnment/HighresScreenshot00026.png",
          "/projects/navam disha envirnment/HighresScreenshot00023.png",
          "/projects/navam disha envirnment/HighresScreenshot00008.png"
        ],
        sections: [
          {
            title: "01. Architectural Vistas",
            description: "Renders showcasing the integration of modular palace structures into Gaea-generated terrain with a focus on scale and atmosphere.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00027.png",
              "/projects/navam disha envirnment/HighresScreenshot00028.png",
              "/projects/navam disha envirnment/HighresScreenshot00030.png",
              "/projects/navam disha envirnment/HighresScreenshot00031.png"
            ]
          },
          {
            title: "02. Atmospheric Lighting",
            description: "Utilizing Lumen and volumetric effects to create a cohesive mood across the environment.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00033.png",
              "/projects/navam disha envirnment/HighresScreenshot00034.png",
              "/projects/navam disha envirnment/HighresScreenshot00000.png",
              "/projects/navam disha envirnment/HighresScreenshot00015.png"
            ]
          }
        ],
        tools: ["Unreal Engine 5", "Lumen", "Gaea"]
      },
      {
        id: "gdd",
        label: "Game Design Document",
        title: "Navam Disha: Design Documentation",
        category: "Game Design & Documentation",
        description: "Technical documentation for the world-building and metaphysical mechanics of Navam Disha.",
        longDescription: "Detailed the core logic of the '9th Direction' world-building. The GDD covers a 5-Act narrative progression, ritual-based mechanics, and navigation of parallel reality layers.",
        gallery: [
          "/projects/navam disha envirnment/HighresScreenshot00008.png",
          "/projects/navam disha envirnment/HighresScreenshot00009.png",
          "/projects/navam disha envirnment/HighresScreenshot00010.png",
          "/projects/navam disha envirnment/HighresScreenshot00011.png",
          "/projects/navam disha envirnment/HighresScreenshot00012.png",
          "/projects/navam disha envirnment/HighresScreenshot00013.png",
          "/projects/navam disha envirnment/HighresScreenshot00014.png"
        ],
        sections: [
          {
            title: "01. Narrative Structure",
            description: "Defining a multi-act progression through 15th-century India, focusing on discovery, awakening, and the final moral choice.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00008.png"
            ]
          },
          {
            title: "02. Core Mechanics",
            description: "Detailing the 'Compass' mechanics and how players interact across simultaneous time-states and parallel layers of reality.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00013.png"
            ]
          }
        ],
        tools: ["Technical Writing", "Level Design", "World Building"]
      }
    ],
    sections: [],
    gallery: [
      "/projects/navam disha envirnment/HighresScreenshot00027.png",
      "/projects/navam disha envirnment/HighresScreenshot00028.png",
      "/projects/navam disha envirnment/HighresScreenshot00030.png",
      "/projects/navam disha envirnment/HighresScreenshot00031.png",
      "/projects/navam disha envirnment/HighresScreenshot00033.png",
      "/projects/navam disha envirnment/HighresScreenshot00034.png",
      "/projects/navam disha envirnment/HighresScreenshot00000.png",
      "/projects/navam disha envirnment/HighresScreenshot00001.png",
      "/projects/navam disha envirnment/HighresScreenshot00006.png",
      "/projects/navam disha envirnment/HighresScreenshot00015.png",
      "/projects/navam disha envirnment/HighresScreenshot00022.png",
      "/projects/navam disha envirnment/HighresScreenshot00024.png",
      "/projects/navam disha envirnment/HighresScreenshot00026.png",
      "/projects/navam disha envirnment/HighresScreenshot00023.png",
      "/projects/navam disha envirnment/HighresScreenshot00013.png",
      "/projects/navam disha envirnment/HighresScreenshot00029.png",
      "/projects/navam disha envirnment/HighresScreenshot00008.png",
      "/projects/navam disha envirnment/HighresScreenshot00002.png",
      "/projects/navam disha envirnment/HighresScreenshot00003.png",
      "/projects/navam disha envirnment/HighresScreenshot00004.png",
      "/projects/navam disha envirnment/HighresScreenshot00005.png"
    ]
  },
  {
    id: "ai-factory",
    title: "AI Factory",
    category: "AI Automation / Full Stack",
    thumbnail: "/projects/ai-factory/factory_dashboard_v2.png",
    description: "Dashboard for automating content research, trend analysis, and AI-powered image generation.",
    longDescription: "The AI Factory is a Next.js dashboard with a FastAPI backend that automates content research workflows. It connects to ComfyUI for GPU-accelerated image generation, tracks trends, and manages scheduling — reducing manual research from hours to minutes.",
    tools: ["Next.js", "FastAPI", "Python", "ComfyUI / Flux", "SQLite", "Redis"],
    year: "2025",
    role: "Full Stack Developer",
    persona: "AI",
    gallery: [
      "/projects/ai-factory/factory_dashboard_v2.png",
      "/projects/ai-factory/factory_api_vault.png",
      "/projects/ai-factory/factory_influencer_library.png",
      "/projects/ai-factory/factory_image_vault.png",
      "/projects/ai-factory/factory_dna_studio.png",
      "/projects/ai-factory/factory_cinema_studio.png",
      "/projects/ai-factory/factory_trend_radar.png",
      "/projects/ai-factory/factory_brand_hub.png",
      "/projects/ai-factory/factory_analytics.png",
      "/projects/ai-factory/factory_platform_hub.png",
      "/projects/ai-factory/factory_canvas.png",
      "/projects/ai-factory/factory_workflows.png",
      "/projects/ai-factory/factory_cloud_sync.png",
      "/projects/ai-factory/factory_queue.png",
      "/projects/ai-factory/factory_model_training.png",
      "/projects/ai-factory/factory_radar.png"
    ],
    sections: [
      {
        title: "01. Automation Dashboard",
        description: "Monitoring hub for autonomous research tasks, tracking system health, API connection states, and process telemetry.",
        images: ["/projects/ai-factory/factory_dashboard_v2.png", "/projects/ai-factory/factory_dashboard.png"]
      },
      {
        title: "02. Data Infrastructure",
        description: "Infrastructure for managing API vaults and distributed data synchronization between research nodes.",
        images: ["/projects/ai-factory/factory_api_vault.png", "/projects/ai-factory/factory_cloud_sync.png"]
      }
    ]
  },
  {
    id: "design-flow",
    title: "Design Flow",
    category: "Frontend / UI Design",
    thumbnail: "/projects/design-flow/dashboard_premium.png",
    description: "CRM and project management dashboard with Kanban boards, invoicing, and analytics.",
    longDescription: "Design Flow is a SaaS dashboard UI built with React and Framer Motion. Features include a Kanban project board, invoice management, financial tracking charts, and a polished login flow.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Zustand"],
    year: "2025",
    role: "Frontend Developer",
    persona: "AI",
    gallery: [
      "/projects/design-flow/dashboard_premium.png",
      "/projects/design-flow/invoices_premium.png",
      "/projects/design-flow/kanban_premium.png",
      "/projects/design-flow/login_premium.png",
      "/projects/design-flow/dashboard.png",
      "/projects/design-flow/login.png"
    ],
    sections: [
      {
        title: "01. Dashboard Interface",
        description: "Central overview for agency operations, providing insights into revenue, active projects, and team performance.",
        images: ["/projects/design-flow/dashboard_premium.png"]
      },
      {
        title: "02. Financial & Invoicing",
        description: "Integrated financial management system for tracking billables and generating professional invoices.",
        images: ["/projects/design-flow/invoices_premium.png"]
      }
    ]
  },
  {
    id: "texgen-ai",
    title: "TexGen AI",
    category: "AI + 3D Workflows",
    thumbnail: "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
    description: "Text-to-texture tool that generates PBR maps with real-time 3D preview.",
    longDescription: "TexGen AI generates PBR texture sets (Albedo, Normal, Roughness, Displacement) from text descriptions. Includes a Three.js viewer with Parallax Occlusion Mapping for instant material preview, plus a FastAPI backend for batch processing.",
    gallery: [
      "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193506.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193545.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193557.png"
    ],
    sections: [
      {
        title: "01. Material Generation",
        description: "Generates coordinated PBR maps from text prompts using Stable Diffusion with automatic tiling and seam removal.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193320.png"]
      },
      {
        title: "02. Real-time 3D Preview",
        description: "Three.js previewer with Parallax Occlusion Mapping for testing materials under dynamic lighting before export.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193506.png"]
      }
    ],
    tools: ["React", "Python", "Three.js", "FastAPI"],
    year: "2026",
    role: "Developer",
    persona: "AI"
  },
];

export const experiences: Experience[] = [
  {
    id: "texgen-ai-exp",
    role: "Developer — TexGen AI",
    company: "Personal Project",
    period: "2026 - Present",
    description: [
      "Built a text-to-texture pipeline that generates coordinated PBR maps (Albedo, Normal, Roughness, Displacement) from natural language prompts.",
      "Integrated Three.js with Parallax Occlusion Mapping (POM) for real-time 3D material preview directly in the browser.",
      "Connected Stable Diffusion API with a FastAPI backend to handle batch texture generation with automatic seam removal.",
      "Designed a React-based material library UI with search, tagging, and one-click export for Unreal Engine and Blender."
    ],
    persona: "AI"
  },
  {
    id: "navamdisha-exp",
    role: "Environment Artist & Game Designer",
    company: "Personal Project — Navam Disha",
    period: "2025 - Present",
    description: [
      "Designed a desert palace environment in Unreal Engine 5 using custom modular building kits and Lumen global illumination.",
      "Built a terrain pipeline with Gaea, generating procedural erosion and heightmaps integrated into UE5 landscapes.",
      "Authored a 20+ page Game Design Document covering 5-Act narrative structure, compass mechanics, and chrono-puzzles.",
      "Optimized large-scale desert scenes with custom LOD configurations to maintain 60fps on mid-range hardware."
    ],
    persona: "3D"
  },
  {
    id: "rescue-mission-exp",
    role: "Game Designer & Gameplay Programmer",
    company: "Personal Project — Silent Echo",
    period: "2025",
    description: [
      "Designed a tactical stealth mission set in a rainforest, defining level flow across a 5-Act linear-branching structure.",
      "Wrote a comprehensive GDD covering AI behavior trees, stealth detection systems, and environmental storytelling.",
      "Prototyped player movement in C++ using Motion Matching for smooth traversal, idle, and combat transitions in UE5.",
      "Built a dense jungle environment using PCG framework, populating 10,000+ foliage instances with procedural distribution."
    ],
    persona: "3D"
  },
  {
    id: "technical-art-exp",
    role: "Environment Artist",
    company: "Personal Project — Drug Lord's Base",
    period: "2025",
    description: [
      "Created a high-fidelity rainforest environment from greybox to final render using UE5's PCG framework and Lumen lighting.",
      "Built modular building kits with optimized materials, keeping draw calls low while maintaining visual quality.",
      "Completed the full pipeline: mood studies → blockout → foliage painting → lighting → cinematic renders."
    ],
    persona: "3D"
  },
  {
    id: "ai-factory-exp",
    role: "Full Stack Developer — AI Factory",
    company: "Personal Project",
    period: "2025 - Present",
    description: [
      "Built a Next.js dashboard with FastAPI backend for automating content research, cutting manual analysis time from hours to minutes.",
      "Integrated ComfyUI and Flux models into a unified interface for GPU-accelerated image generation with queue management.",
      "Designed a workflow orchestration system connecting trend analysis, content generation, and scheduling into automated chains."
    ],
    persona: "AI"
  }
];

export const skills: Skill[] = [
  {
    category: "Game Engines",
    items: ["Unreal Engine 5", "Material Editor", "PCG Framework", "Landscape & Foliage Tools", "Blueprints"],
    persona: "3D"
  },
  {
    category: "3D Art & Tools",
    items: ["Gaea", "Blender", "Quixel Megascans", "UE Modeling Tools", "Lumen / Nanite"],
    persona: "3D"
  },
  {
    category: "Programming",
    items: ["C++", "Blueprint Scripting", "Behavior Trees", "Motion Matching", "Level Scripting"],
    persona: "3D"
  },
  {
    category: "AI & Automation",
    items: ["LLM Integration", "ComfyUI / Stable Diffusion", "Prompt Engineering", "Workflow Automation", "n8n"],
    persona: "AI"
  },
  {
    category: "Full Stack Web",
    items: ["React / Next.js", "TypeScript", "Python / FastAPI", "Three.js", "SQLite / MongoDB"],
    persona: "AI"
  }
];
