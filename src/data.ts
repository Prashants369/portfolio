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
    category: "Tactical Stealth & Environment Art",
    thumbnail: "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
    description: "A comprehensive tactical mission and environment showcase set in the dense rainforests of North-East India.",
    longDescription: "Silent Echo is a multi-disciplinary project featuring both high-fidelity environment art and deep gameplay system design. This combined showcase covers the tactical narrative, level design metrics, and the technical art workflow behind the 'Drug Lord's Base' jungle environment. It demonstrates a holistic approach to world-building, where environment art directly supports tactical gameplay loops.",
    tools: ["Unreal Engine 5.7", "PCG Framework", "Lumen", "C++", "Motion Matching"],
    year: "2025",
    role: "Lead Game Designer & Technical Artist",
    persona: "3D",
    variants: [
      {
        id: "environment",
        label: "Environment Art",
        title: "Silent Echo: Technical Environment",
        category: "Technical Environment Art",
        description: "Advanced environment art showcase featuring PCG ecosystems and modular building kits.",
        longDescription: "A comprehensive look into the development of a high-fidelity rainforest environment. This project highlights a full technical art workflow, from mood studies to complex procedural ecosystems using the UE5 PCG framework. It showcases the integration of custom modular assets and optimized lighting for mid-range hardware performance.",
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
            title: "01. Final Environment Renders",
            description: "High-fidelity cinematic renders utilizing Lumen global illumination. Focus on natural light scattering through dense foliage.",
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
            description: "Procedural Content Generation (PCG) graphs used to distribute organic foliage and micro-debris across the landscape.",
            images: [
              "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
              "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00006.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00007.png"
            ]
          },
          {
            title: "03. Optimization & Modular Kits",
            description: "Showcasing geometry density, LOD transitions, and the modular building kits used for efficient hardware performance.",
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
        label: "Level Design / GDD",
        title: "Silent Echo: Design Documentation",
        category: "Game Design & Level Documentation",
        description: "Technical level design documentation focusing on tactical flow, character dynamics, and mission metrics.",
        longDescription: "This GDD documents the 'Rainforest Rescue' mission, where Captain Arjun Mehta and Sgt. Alex Carter infiltrate a remote jungle cartel. The documentation details a multi-phased tactical mission: from the initial 'Helicopter Cliff Drop' and 'Jungle Maze' exploration to the 'Swamp Zone' infiltration and the emotional resolution in the fog. It defines the core loop of Stealth vs. Combat, tactical sightlines, and environmental storytelling used to locate kidnapped villagers and disrupt illegal drug operations in the North-East Indian rainforest.",
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
            title: "01. Tactical Infiltration & Level Flow",
            description: "The 'Rainforest Rescue' mission is architected as a linear-branching hybrid, guiding the player through a structured 5-Act progression. Act 1 (The Arrival) establishes the atmosphere with a cliff-side drop-off and a cinematic overlook of the valley. Acts 2 and 3 focus on navigating a dense jungle maze where environmental obstacles like thick vegetation paths, fallen tree crawls, and climbable rock ledges dictate player movement. The level culminates in Acts 4 and 5, focusing on the infiltration of a high-security cartel camp and the subsequent emotional resolution. The design prioritizes 'Dopamine Hit' moments—specifically paced transitions where high-tension stealth eventually breaks into intense combat bursts, ensuring a constant sense of engagement and risk.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00000.png"
            ]
          },
          {
            title: "02. Characters & Narrative Stakeholders",
            description: "The project explores the friction between two distinct archetypes: Captain Arjun Mehta, a stoic Indian Army Special Forces expert, and Sgt. Alex Carter, a US operative with experience in South American theaters. Their dynamic is built on cultural and strategic clashes that evolve over the mission's duration. The stakes are personalized through the environment; as the player discovers blood trails and abandoned tribal markings, the mission shifts from a tactical reconnaissance into a personal rescue. This is grounded in Acts where Arjun identifies kidnapped elders from his own culture, transforming the 'cartel disruption' objective into a narrative-heavy rescue operation.",
            images: [
              "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png"
            ]
          },
          {
            title: "03. Mechanics & AI Behavior Systems",
            description: "Gameplay is defined by a stealth-first system featuring advanced AI behavior trees. Enemies utilize vision and hearing cones for detection, requiring players to utilize the 'Jungle Maze' foliage and context-sensitive traversal for takedowns. The combat system features limited firearm logic with silenced weaponry, emphasizing melee stealth takedowns for Act 4 infiltration. The technical implementation in Unreal Engine utilizes Behavior Trees for patrol logic and alert states, paired with a Niagara-based environmental system for water streams and wetness decals to enhance the tactical realism of the rainforest setting.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00005.png"
            ]
          },
          {
            title: "04. Technical Implementation & Tasks",
            description: "The development workflow for 'Silent Echo' followed a rigorous 8-stage pipeline. It began with a Prototype Blockout to validate terrain and jungle maze paths, followed by a PCG setup to managevegetation density and randomness. Character systems integrated 'GASP' (Motion Matching) for smooth traversal, idle, and combat transitions. Environment art tasks included importing optimized foliage packs and creating custom shaders, while Niagara systems were deployed for flowing water and dynamic fog volumes. The final polish pass involved cinematic camera triggers, soundscape integration via audio volumes, and a lighting pass to balance the dark rainforest mood with tactical visibility.",
            images: [
              "/projects/druglordsbase/optimizations/HighresScreenshot00001.png"
            ]
          },
          {
            title: "05. Cinematic & Environmental Storytelling",
            description: "To enhance player immersion, the project leverages cinematic triggers for overlooks and key story discoveries. Environmental storytelling is a core pillar, utilizing blood stains, broken tribal cages, and ancient symbols to communicate the cartel's impact without explicit dialogue. The project draws inspiration from titles like 'Green Hell' for jungle density and 'Spec Ops: The Line' for its exploration of moral ambiguity in military settings. This is paired with 'Sacred Indian Culture' references, where hidden ruins and ancient carvings add a layer of mythological depth to the modern tactical mission.",
            images: [
              "/projects/druglordsbase/references/ba469b5b-65d9-4c04-9b8a-9e67bc539d94.png"
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
    description: "A metaphysical exploration of 15th-century India, combining high-fidelity technical environment art with deep narrative systems and metaphysical mechanics.",
    longDescription: "Navamdisha is a multi-disciplinary project that bridges the gap between high-end technical art and narrative-driven game design. It features a massive desert palace environment built with modular workflows in Unreal Engine 5, alongside a comprehensive Game Design Document detailing the '9th Direction'—a hidden layer of reality accessible through celestial rituals and non-Euclidean navigation.",
    tools: ["Unreal Engine 5", "Lumen", "Blueprints", "Gaea", "Modeling Tools"],
    year: "2025-2026",
    role: "Lead Game Designer & Environment Artist",
    persona: "3D",
    variants: [
      {
        id: "environment",
        label: "Technical Environment",
        title: "Navam Disha: Environment Art",
        category: "Technical Environment Art",
        description: "Technical environment art focusing on modular palace architecture and optimized exterior lighting.",
        longDescription: "A technical showcase of high-end environment architecture. It focuses on the creation of a massive desert palace using custom modular building kits. The final scene utilizes Lumen for cinematic lighting, paired with custom LOD configurations to maintain performance across expansive desert vistas.",
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
            title: "01. High-Fidelity Exterior Vistas",
            description: "Master renders showcasing the architectural silhouette and technical integration of modular structures into cliff faces.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00027.png",
              "/projects/navam disha envirnment/HighresScreenshot00028.png",
              "/projects/navam disha envirnment/HighresScreenshot00030.png",
              "/projects/navam disha envirnment/HighresScreenshot00031.png"
            ]
          },
          {
            title: "02. Atmospheric Lighting & God Rays",
            description: "Utilizing Lumen for real-time global illumination and cinematic volumetric effects.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00033.png",
              "/projects/navam disha envirnment/HighresScreenshot00034.png",
              "/projects/navam disha envirnment/HighresScreenshot00000.png",
              "/projects/navam disha envirnment/HighresScreenshot00015.png"
            ]
          }
        ],
        tools: ["Unreal Engine 5", "Lumen", "Modular Workflow"]
      },
      {
        id: "gdd",
        label: "Game Design Document",
        title: "Navam Disha: Design Documentation",
        category: "Game Design & Documentation",
        description: "Comprehensive technical documentation for the Navam Disha (9th Direction) world-building and celestial mechanics.",
        longDescription: "This documentation outlines the metaphysical logic of 'Navam Disha' and details a 5-Act progression through the world: Discovery (Village Mystery), Awakening (The 9th Direction), Artifact Retrieval (The 9 Lost Artifacts), Corruption (The Folding Reality), and the Final Choice. The GDD covers ritual-based gameplay, the exploration of 'Echo Quests' across three time states, and the retrieval of ancient artifacts like the 'Mirror of Reversal' and 'Bell of Time' to stabilize a collapsing reality in 15th-century India.",
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
            title: "01. The 5-Act Structural Narrative",
            description: "Navam Disha follows a rigorous 5-Act progression through a multi-dimensional 15th-century India. Act 1 (Discovery) introduces Aarav and Veer as they find the mysterious compass; Act 2 (Awakening) initiates the 9th Direction layer exploration; Act 3 (Artifact Retrieval) sends the boys on quests across time-states to recover the 9 lost artifacts; Act 4 (Corruption) showcases the folding of reality as the Navam Disha leaks into the village; and Act 5 (Final Choice) presents a climactic moral decision regarding the transcendence or sealing of the dimensions. This structure allows for a constant escalation of both narrative stakes and mechanical complexity as the player masters the hidden layers of reality.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00008.png"
            ]
          },
          {
            title: "02. Compass Mechanics & World Logic",
            description: "The core gameplay loop revolves around the 'Compass of the 9 Directions'—a yantra-based artifact that points toward where the parallel 9th layer is thinnest. Players must perform ritual gestures and time their movements to celestial alignments to 'tune' the device. Once attuned, the world shimmers into an overlay layer featuring shifting physics, Chrono-puzzles (interact across three time states), and hidden geometry visible only in the 9th direction. A 'mental disorientation' mechanic prevents players from staying in the Navam Disha too long, requiring periodic 'recharging' through village-based rituals, ensuring a balance between high-concept exploration and grounded village life.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00013.png"
            ]
          },
          {
            title: "03. Plot Families & NPC Integration",
            description: "The social system is built on 'Plot Families'—specialized NPCs like Ramdas (Elder Farmer) and Vaidya Raghuvansh (Healer) who provide the knowledge and resources needed to traverse the 9th direction. These NPCs aren't just quest-givers but essential mentors for the player's progression in farming, crafting, and spiritual skills. For example, Captain Rudra Singh (Royal Guard) provides the martial training necessary for the boss fights against the corrupted Guardians of the 9th layer. This system grounds the metaphysical adventure in the day-to-day survival and culture of the 15th-century village.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00011.png"
            ]
          },
          {
            title: "04. Gameplay Loops & Chrono-Puzzles",
            description: "Adventures inside the Navam Disha are categorized into specialized quest types. 'Echo Quests' involve interacting with shadows of past villagers to uncover hidden history, while 'Chrono-puzzles' require performing actions across three simultaneous time-states of the same location to open new paths. Shifting physics zones—where gravity bends and water flows upward—challenge the player's traversal skills. The game also features 'Dream Walking,' allowing players to enter NPC dream-worlds through specialized Navam rituals to influence their fates in the waking world, adding a layer of ethical complexity to the exploration.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00000.png"
            ]
          },
          {
            title: "05. Visual Identity & Mood Design",
            description: "The visual language of the 9th Direction is defined by a subtle 'world shift' effect, including lens distortion, floating particles of light, and faint geometric overlays on surfaces. The soundscape features layered deep, mystical drones paired with ethereal music. Inside Navam Disha, the skies appear subtly incorrect with star patterns out of alignment, and reflections behave unexpectedly, showing 'echoes' of different times. This aesthetic, inspired by Indian ideas of 'Maya' (illusion) and 'Kalachakra' (time wheel), creates a unique 'proto-steampunk' Indian atmosphere that bridges ancient engineering with cosmic mystery.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00010.png"
            ]
          }
        ],
        tools: ["Gaea", "Technical Writing", "Level Design"]
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
    title: "AI Factory: Automation & Research Engine",
    category: "AI Automation / Full Stack",
    thumbnail: "/projects/ai-factory/factory_dashboard_v2.png",
    description: "A production-grade research automation engine for high-velocity content analysis and generation.",
    longDescription: "The AI Factory is a comprehensive automation ecosystem designed for systematic digital research and content orchestration. It integrates a high-performance Next.js dashboard with a distributed FastAPI backend. The system coordinates complex automation chains—tracking viral trends, analyzing engagement metrics, and generating visual documentation—leveraging GPU-accelerated pipelines for professional-grade research outputs.",
    tools: ["Next.js", "FastAPI", "Python", "ComfyUI / Flux", "SQLite", "Redis"],
    year: "2025",
    role: "Lead AI Engineer & Architect",
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
        description: "The central monitoring hub for autonomous research tasks. Tracks live system health, API connection states, and distributed process telemetry.\n\nDesigned for real-time operational awareness, featuring data-dense visualizations and modular system controls.",
        images: ["/projects/ai-factory/factory_dashboard_v2.png", "/projects/ai-factory/factory_dashboard.png"]
      },
      {
        title: "02. API & Data Infrastructure",
        description: "Robust infrastructure for managing mission-critical API vaults and distributed data synchronization.\n\nEnsures secure, high-throughput communication between local research nodes and global distribution layers, featuring automated failover and encryption.",
        images: ["/projects/ai-factory/factory_api_vault.png", "/projects/ai-factory/factory_cloud_sync.png"]
      },
      {
        title: "03. Research Studio & Analysis",
        description: "Integrated studio environment for character fine-tuning and trend analysis. Combines high-fidelity visual preview with semantic metadata management.\n\nEnables the systematic analysis of viral hooks and stylistic trends to drive informed content orchestration.",
        images: ["/projects/ai-factory/factory_dna_studio.png", "/projects/ai-factory/factory_trend_radar.png", "/projects/ai-factory/factory_radar.png"]
      },
      {
        title: "04. Cinema & Asset Production",
        description: "Technical production suite for high-resolution visual and cinematic generation. Features automated queue management and GPU-accelerated processing.\n\nSynchronizes visual assets with semantic tagging to maintain long-term aesthetic consistency across massive datasets.",
        images: ["/projects/ai-factory/factory_cinema_studio.png", "/projects/ai-factory/factory_image_vault.png", "/projects/ai-factory/factory_queue.png"]
      },
      {
        title: "05. Workflow Orchestration",
        description: "Node-based logic designer for complex automation chains. Enables the mapping of systemic behaviors across multiple social and technical threads.\n\nWorkflows are designed for maximum modularity, allowing for rapid iteration as research goals and platform metrics evolve.",
        images: ["/projects/ai-factory/factory_workflows.png", "/projects/ai-factory/factory_canvas.png"]
      }
    ]
  },
  {
    id: "design-flow",
    title: "Design Flow: Professional CRM Suite",
    category: "Full Stack / SaaS Design",
    thumbnail: "/projects/design-flow/dashboard_premium.png",
    description: "A high-end, glassmorphic CRM and project management suite designed for creative agencies.",
    longDescription: "Design Flow is a comprehensive SaaS dashboard designed to streamline creative workflows. It features a high-fidelity glassmorphic interface built with React and Framer Motion, integrating complex Kanban systems, financial tracking, and real-time project analytics. The project showcases a focus on premium UI/UX aesthetics paired with robust functional logic for professional agency management.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Zustand"],
    year: "2025",
    role: "Lead Frontend Engineer",
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
        title: "01. Premium Dashboard Interface",
        description: "The core overview for agency operations. Features a data-dense, glassmorphic UI that provides immediate insights into revenue, active projects, and team performance.\n\nDesigned for maximum visual clarity and professional appeal, utilizing custom micro-interactions to enhance the user experience.",
        images: ["/projects/design-flow/dashboard_premium.png"]
      },
      {
        title: "02. Financial & Invoicing Suite",
        description: "Integrated financial management system for tracking billables and generating professional invoices. Features automated tax calculation and status tracking.\n\nProvides a seamless transition from project completion to payment processing within a unified interface.",
        images: ["/projects/design-flow/invoices_premium.png"]
      },
      {
        title: "03. Advanced Kanban Systems",
        description: "A highly interactive project board for managing task flows across multiple departments. Supports drag-and-drop orchestration and real-time team synchronization.\n\nUtilizes Framer Motion for smooth, physics-based transitions that make task management feel fluid and responsive.",
        images: ["/projects/design-flow/kanban_premium.png"]
      }
    ]
  },
  {
    id: "texgen-ai",
    title: "TexGen AI: Material Automation Engine",
    category: "AI Automation / 3D Workflows",
    thumbnail: "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
    description: "Automated PBR texture generation system featuring real-time 3D visualization and POM integration.",
    longDescription: "TexGen AI is a technical automation engine designed to streamline 3D material workflows. It utilizes a text-to-texture pipeline to generate high-fidelity PBR maps (Albedo, Normal, Roughness, Displacement) with integrated Parallax Occlusion Mapping (POM) for realistic surface depth. The project features a custom Three.js previewer for immediate material validation and a distributed processing backend for batch generation.",
    gallery: [
      "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193506.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193545.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193557.png"
    ],
    sections: [
      {
        title: "01. Material Generation Interface",
        description: "The primary workspace for generating high-fidelity textures. Users can define complex material properties through natural language, which are then processed by generative models to generate coordinated PBR maps.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193320.png"]
      },
      {
        title: "02. Real-time 3D PBR Preview",
        description: "Integrated Three.js powered previewer that allows for immediate validation of generated textures. Supports dynamic lighting adjustment, Parallax Occlusion Mapping (POM) for surface elevation, and material parameter fine-tuning to ensure engine-ready results.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193506.png"]
      },
      {
        title: "03. Semantic Material Reasoning",
        description: "Transparent view of the generative reasoning process. Shows how the system coordinates to handle texture tiling, seam removal, and semantic map generation.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193545.png"]
      },
      {
        title: "04. Material Library & Export",
        description: "A centralized hub for managing generated assets. Features automated meta-tagging and semantic search, with one-click export options for Unreal Engine and Blender.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193557.png"]
      }
    ],
    tools: ["React", "Python", "Stable Diffusion API", "Three.js (POM)", "FastAPI"],
    year: "2026",
    role: "Lead Developer",
    persona: "AI"
  },
];

export const experiences: Experience[] = [
  {
    id: "texgen-ai-exp",
    role: "Lead Developer",
    company: "TexGen AI (Research Project)",
    period: "2026 - Present",
    description: [
      "Engineered an automated PBR texture generation pipeline using semantic LLM orchestration.",
      "Implemented Parallax Occlusion Mapping (POM) in Three.js for realistic surface elevation in 3D previews.",
      "Integrated Three.js for real-time 3D material preview and validation within the browser.",
      "Developed custom seam-removal algorithms and tiling logic for engine-ready texture assets.",
      "Designed a distributed task queue for high-throughput batch material generation."
    ],
    persona: "AI"
  },
  {
    id: "navamdisha-exp",
    role: "Lead Game Designer & Environment Artist",
    company: "Navamdisha (Technical Research)",
    period: "2025 - Present",
    description: [
      "Designed complex environment architecture and technical art workflows for a 15th-century Indian setting.",
      "Architected a custom terrain pipeline using Gaea, integrating procedural erosion and custom heightmap assets into UE5.",
      "Engineered modular environment kits and technical UV workflows to maintain high visual fidelity in large-scale desert zones.",
      "Established technical level design metrics, balancing sightlines and player navigation for optimized 3D environments."
    ],
    persona: "3D"
  },
  {
    id: "rescue-mission-exp",
    role: "Gameplay Programmer & System Designer",
    company: "Silent Echo: Technical Prototype",
    period: "2025",
    description: [
      "Designed tactical gameplay loops and technical AI metrics for a rainforest-based rescue mission.",
      "Developed a GDD focused on technical level progression, stealth metrics, and environmental storytelling mechanics.",
      "Built a C++ based world-generation prototype, bridging the gap from initial concept to engine-ready implementation.",
      "Iterated on player movement systems, integrating motion-matching and context-sensitive traversal in Unreal Engine."
    ],
    persona: "3D"
  },
  {
    id: "technical-art-exp",
    role: "Technical Environment Artist",
    company: "Drug Lord's Base / Rescue Mission Art",
    period: "2025",
    description: [
      "Implemented Unreal Engine’s Procedural Content Generation (PCG) framework to rapidly populate dense forest environments.",
      "Built high-fidelity environments using modular building kits and custom material optimization for mid-range hardware.",
      "Led the level design process from initial greyboxing through to final lighting, foliage painting, and atmospheric rendering."
    ],
    persona: "3D"
  },
  {
    id: "ai-factory-exp",
    role: "Full Stack AI Developer",
    company: "Research Automation Lab",
    period: "2025 - Present",
    description: [
      "Architected the 'AI Factory' research pipeline using Next.js and Python to automate high-fidelity visual documentation.",
      "Developed a custom automation orchestrator for coordinating complex research tasks and trend analysis workflows.",
      "Integrated ComfyUI, Flux, and LLM-based generation models into a unified dashboard for system-wide orchestration."
    ],
    persona: "AI"
  }
];

export const skills: Skill[] = [
  {
    category: "Game Engines",
    items: ["Unreal Engine 5", "Material Editor", "PCG Framework", "Landscape/Foliage Tools", "Blueprints"],
    persona: "3D"
  },
  {
    category: "Environment & 3D Art",
    items: ["Gaea", "Blender", "e-on PlantFactory", "Quixel Megascans", "UE Modeling Tools"],
    persona: "3D"
  },
  {
    category: "Programming & Logic",
    items: ["C++", "AI-Assisted C++", "Blueprint Visual Scripting", "Inventory Systems", "System Architecture"],
    persona: "3D"
  },
  {
    category: "AI & Automation",
    items: ["AI Automation Systems", "Text Generation AI (LLMs)", "Workflow Orchestration", "Systemic Integration", "Research Automation", "Prompt Engineering"],
    persona: "AI"
  },
  {
    category: "Full Stack Web",
    items: ["C++", "Next.js / React", "TypeScript", "Python / FastAPI", "SQLite / MongoDB", "Docker / Cloud Workers"],
    persona: "AI"
  }
];
