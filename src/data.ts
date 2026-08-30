import { Project, Experience, Skill } from "./types";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/prashant-sagathiya-19bb59323",
  github: "https://github.com/Prashants369",
  twitter: "https://x.com/prashantsagathiya",
  email: "prashantsagathiya818@gmail.com",
  portfolio: "https://github.com/Prashants369/portfolio"
};

export const projects: Project[] = [
  {
    id: "silent-echo",
    title: "Silent Echo: Operation Rainforest",
    category: "Game Design & Technical Art",
    thumbnail: "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
    description: "Tactical stealth mission and rainforest environment in Unreal Engine 5 — from greybox and GDD through PCG foliage, modular camps, and cinematic lighting.",
    longDescription: "Silent Echo is a combined environment-art and game-design project set in a remote North-East Indian rainforest. The environment side covers a full technical-art pipeline: mood studies, greyboxing, PCG ecosystems, modular cartel-camp kits, Lumen lighting, and an optimization pass for mid-range hardware. The design side documents a 5-act stealth rescue — insertion, jungle exploration, swamp tension, camp infiltration, and an unresolved ending — with companion dynamics between Capt. Arjun Mehta and Sgt. Alex Carter.",
    tools: ["Unreal Engine 5", "PCG Framework", "Lumen", "C++", "Motion Matching"],
    year: "2025",
    role: "Environment Artist & Game Designer",
    persona: "3D",
    highlights: [
      "End-to-end rainforest: greybox → PCG foliage → modular kits → Lumen lighting → cinematic renders",
      "5-act stealth GDD with AI detection, companion friction, and environmental storytelling",
      "LOD, instancing, and modular architecture pass aimed at stable performance on mid-range hardware"
    ],
    variants: [
      {
        id: "environment",
        label: "Environment Art",
        title: "Silent Echo: Technical Environment",
        category: "Technical Environment Art",
        description: "High-fidelity rainforest built in UE5 with PCG ecosystems, modular camp kits, and Lumen GI.",
        longDescription: "A complete technical-art workflow for a dense rainforest. Work started from mood studies and reference boards, moved through greybox and mid-renders, then into PCG foliage distribution, modular building kits for the cartel camp, Lumen lighting, and a final optimization pass covering LODs and geometry density.",
        highlights: [
          "PCG graphs for organic foliage and micro-debris across the landscape",
          "Modular camp architecture with instanced meshes and PBR materials",
          "Lumen GI with canopy light scattering, fog volumes, and cinematic camera work"
        ],
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
            description: "Cinematic stills using Lumen global illumination. Focus on light scattering through dense canopy, atmospheric depth, and readable tactical space inside the jungle.",
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
            description: "Procedural Content Generation graphs distribute foliage and micro-debris with density noise so the jungle reads as organic rather than stamped. Mid-renders document graph iteration before the final lighting pass.",
            images: [
              "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
              "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00006.png",
              "/projects/druglordsbase/final-renders/HighresScreenshot00007.png"
            ]
          },
          {
            title: "03. Optimization & Modular Kits",
            description: "Geometry density, LOD transitions, and modular building kits for the cartel camp. Instanced meshes and shared PBR materials keep draw calls down while the silhouette of watchtowers, shacks, and walkways stays readable from infiltration sightlines.",
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
        tools: ["Unreal Engine 5", "PCG Framework", "Lumen", "Nanite"]
      },
      {
        id: "gdd",
        label: "Game Design Document",
        title: "Silent Echo: Design Documentation",
        category: "Game Design & Level Documentation",
        description: "Level design GDD for a rainforest rescue: 5-act flow, companion dynamics, stealth AI, and environmental storytelling.",
        longDescription: "The GDD documents Rainforest Rescue, where Captain Arjun Mehta (Indian Army Special Forces) and Sgt. Alex Carter (US special operations) infiltrate a remote jungle cartel after tribal villagers disappear. It covers a linear-branching 5-act structure — helicopter cliff drop, jungle maze, swamp, camp infiltration, unresolved fog ending — plus stealth-vs-combat pacing, AI vision/hearing cones, and environmental clues (blood trails, broken tools, tribal markings) that turn recon into a personal rescue.",
        highlights: [
          "5-act linear-branching mission: insertion → exploration → swamp → infiltration → unresolved ending",
          "Companion friction between Arjun Mehta and Alex Carter as a narrative system",
          "Stealth-first AI: vision/hearing cones, patrol trees, melee takedowns, limited silenced firearms"
        ],
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
            description: "The mission is a linear-branching hybrid across five acts. Act 1 (The Arrival) opens on a cliff-side helicopter drop and a cinematic overlook of the valley. Acts 2–3 send the player through a jungle maze where thick vegetation, fallen-tree crawls, and climbable ledges control pace and exposure. Acts 4–5 cover camp infiltration and an emotional, unfinished resolution in fog.\n\nPacing is built around tension spikes: long stealth stretches that break into short combat bursts so the player never settles into one mode.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00002.png"
            ]
          },
          {
            title: "02. Characters & Narrative Stakeholders",
            description: "Two archetypes share the mission: Captain Arjun Mehta, a stoic Indian Army jungle-warfare specialist grounded in local culture, and Sgt. Alex Carter, a US operative used to South American jungle work and initially skeptical of the land and the partnership.\n\nStakes personalize through the environment. Blood trails, abandoned camps, and tribal markings shift the brief from recon to rescue. Arjun recognizing a missing elder among the captives is the beat that makes the cartel camp more than a tactical objective.",
            images: [
              "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00003.png"
            ]
          },
          {
            title: "03. Mechanics & AI Behavior Systems",
            description: "Stealth-first: enemies use vision and hearing cones, so foliage, prone crawls, and context-sensitive traversal matter. Combat is limited-ammo with silenced weapons; melee takedowns are the intended infiltration tool.\n\nIn Unreal, patrol and alert states live in Behavior Trees. Niagara handles water streams and wetness decals so the rainforest is both atmosphere and cover.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00004.png"
            ]
          },
          {
            title: "04. Technical Implementation & Tasks",
            description: "Pipeline: prototype blockout for terrain and maze paths → PCG density setup → GASP / motion matching for traversal, idle, and combat → foliage packs and custom shaders → Niagara water and fog volumes → cinematic camera triggers, audio volumes, and a lighting pass that keeps the jungle dark without killing tactical readability.",
            images: [
              "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00006.png"
            ]
          },
          {
            title: "05. Cinematic & Environmental Storytelling",
            description: "Camera triggers hit overlooks and key discoveries. Story is told with blood stains, broken cages, and ancient symbols rather than long cutscenes. References: Green Hell for jungle density, Far Cry 3 for camp infiltration, Spec Ops: The Line for moral weight between soldiers, and overgrown Indian ruins for local myth layered onto a modern tactical brief.",
            images: [
              "/projects/druglordsbase/references/ba469b5b-65d9-4c04-9b8a-9e67bc539d94.png",
              "/projects/druglordsbase/references/81826ff4-8eb3-49d9-89d2-6db33208e178.png"
            ]
          }
        ],
        tools: ["Technical Writing", "Level Design", "Greyboxing", "Behavior Trees"]
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
    description: "15th-century Indian world: modular desert palace in UE5 plus a GDD for the 9th Direction — a hidden layer of reality reached through a ritual compass.",
    longDescription: "Navam Disha pairs a modular desert-palace environment in Unreal Engine 5 with original world-building. The GDD describes a 9-spoked compass that points to where a parallel layer of reality is thinnest. Players — Aarav and Veer — tune the device with ritual gestures and celestial timing, then move through echo quests, chrono-puzzles, and village NPCs whose crafts and lore are the skill tree. Terrain is authored in Gaea and lit with Lumen across long exterior vistas.",
    tools: ["Unreal Engine 5", "Lumen", "Blueprints", "Gaea", "Modeling Tools"],
    year: "2025",
    role: "Environment Artist & Game Designer",
    persona: "3D",
    highlights: [
      "Modular desert palace in UE5 with Lumen lighting and Gaea terrain",
      "Original 9th Direction system: compass tuning, chrono-puzzles, parallel layers",
      "Village plot-families as mentors — farming, craft, spirit, and martial progression"
    ],
    variants: [
      {
        id: "environment",
        label: "Technical Environment",
        title: "Navam Disha: Environment Art",
        category: "Technical Environment Art",
        description: "Desert palace built from modular kits, Gaea terrain, and Lumen lighting for long exterior shots.",
        longDescription: "A desert palace environment using modular building kits in Unreal Engine 5. Focus on architectural silhouette against Gaea-generated terrain, Lumen-based lighting with volumetric atmosphere, and LOD work so expansive vistas stay usable.",
        highlights: [
          "Modular palace kit with readable silhouette at vista scale",
          "Gaea erosion / heightmaps integrated into UE5 landscapes",
          "Lumen and volumetric fog for heat, dusk, and interior-exterior contrast"
        ],
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
            description: "Modular palace structures set into Gaea terrain. Scale, silhouette, and approach paths are designed so the building reads as a destination from the desert floor.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00027.png",
              "/projects/navam disha envirnment/HighresScreenshot00028.png",
              "/projects/navam disha envirnment/HighresScreenshot00030.png",
              "/projects/navam disha envirnment/HighresScreenshot00031.png"
            ]
          },
          {
            title: "02. Atmospheric Lighting",
            description: "Lumen and volumetric effects for heat haze, dusk, and interior spill. Lighting is used to sell both the grounded village world and the slightly-wrong 9th Direction overlay.",
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
        description: "World bible for the 9th Direction: 5-act story, compass mechanics, plot families, and chrono-puzzles.",
        longDescription: "The GDD defines Navam Disha as a fold in space-time overlaying 15th-century India. A 9-spoked compass points to where that layer is thinnest. Structure: Discovery (village mystery and the compass), Awakening (first overlay), Artifact Retrieval (nine lost tools of the Vishwakarma sages), Corruption (the layer leaking into the village), and Final Choice (seal, control, or balance). Mechanics include ritual tuning, echo quests, three-state chrono-puzzles, dream walking, and a disorientation meter that forces return to village life.",
        highlights: [
          "5-act structure from village discovery to a moral endgame",
          "Compass as both key and seal — power with a cost",
          "Plot families teach farming, craft, spirit, and combat as the skill system"
        ],
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
            description: "Act 1 — Discovery: Aarav and Veer help an astrologer repair a water clock and find the compass; a lost jungle shrine proves the 9th Direction is real. Act 2 — Awakening: the compass points at unstable places; villagers see past echoes. Act 3 — Artifact Retrieval: nine tools (Compass, Mirror of Reversal, Bell of Time, Seed of Dreaming, and others) open sunken cities, desert ruins, snow temples, and mirror palaces. Act 4 — Corruption: night skies change, NPCs vanish into the layer, geometry folds. Act 5 — Final Choice: seal the 9th forever, control it, or walk the harder balance path.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00008.png",
              "/projects/navam disha envirnment/HighresScreenshot00009.png"
            ]
          },
          {
            title: "02. Compass Mechanics & World Logic",
            description: "The Compass of the 9 Directions is a yantra plus astrological mechanism. It does not point north — it points to where the overlay is thinnest. Players tune it with ritual gestures and celestial timing. Once attuned, the world shimmers: looping paths, rooms from different centuries, geometry only visible in the layer.\n\nStay too long and vision and sound lie (mental disorientation). The compass must be recharged through village rituals, so high-concept exploration always returns to grounded life.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00013.png",
              "/projects/navam disha envirnment/HighresScreenshot00012.png"
            ]
          },
          {
            title: "03. Plot Families & NPC Integration",
            description: "NPCs are mentors, not bulletin boards. Ramdas and Bhola teach land, water, and stamina. Dinesh, Ramu, and Girdhar supply pots, tools, and stealth cloth. Pandit Harinarayan and Vaidya Raghuvansh teach mantras, herbs, and how to stabilize the layer. Captain Rudra Singh trains combat for Brotherhood fights; Arya opens castle infiltration. Village crafts are the skill tree.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00011.png",
              "/projects/navam disha envirnment/HighresScreenshot00014.png"
            ]
          },
          {
            title: "04. Gameplay Loops & Chrono-Puzzles",
            description: "Echo Quests: talk to shadows of past villagers to change the present. Chrono-puzzles: act in three time-states of one place to open a path. Physics zones bend gravity and send water upward. Dream walking lets players enter sleep and alter a fate — with ethical cost. Later compass modes add time-echo, dreamwalker, and starlight travel.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00000.png"
            ]
          },
          {
            title: "05. Visual Identity & Mood Design",
            description: "The overlay is a slight wrongness: lens distortion, floating light, faint yantra geometry, drones under village sound. Stars sit in the wrong pattern. Reflections show the wrong person or century. Mood draws on maya (illusion) and kalachakra (time wheel) — Indian myth as a playable layer, not a texture pass.",
            images: [
              "/projects/navam disha envirnment/HighresScreenshot00010.png"
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
    description: "Next.js + FastAPI dashboard that automates content research, trend analysis, and GPU image generation.",
    longDescription: "AI Factory is a research-automation stack: a Next.js operations dashboard on a FastAPI backend. It stores API keys, tracks trends, queues ComfyUI / Flux jobs, and chains those steps into reusable workflows so research that used to take hours can run as a pipeline — dashboard, vaults, studios, and a node canvas in one place.",
    tools: ["Next.js", "FastAPI", "Python", "ComfyUI / Flux", "SQLite", "Redis"],
    year: "2025",
    role: "Full Stack Developer",
    persona: "AI",
    highlights: [
      "Next.js dashboard + FastAPI backend for research automation",
      "ComfyUI / Flux generation with queue, vault, and job scheduling",
      "Node canvas to chain trend analysis → generation → scheduling"
    ],
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
        description: "Operations home: system health, API connection state, and live process telemetry. Built for a glanceable view of what the pipeline is doing right now.",
        images: ["/projects/ai-factory/factory_dashboard_v2.png", "/projects/ai-factory/factory_dashboard.png"]
      },
      {
        title: "02. API & Data Infrastructure",
        description: "API vault and cloud sync between research nodes. Keys, endpoints, and datasets live in one place so workflows do not hard-code secrets.",
        images: ["/projects/ai-factory/factory_api_vault.png", "/projects/ai-factory/factory_cloud_sync.png"]
      },
      {
        title: "03. Research Studio & Analysis",
        description: "DNA studio, trend radar, and influencer library. Semantic tags and visual previews sit next to engagement signals so generation is driven by research, not guesswork.",
        images: ["/projects/ai-factory/factory_dna_studio.png", "/projects/ai-factory/factory_trend_radar.png", "/projects/ai-factory/factory_radar.png", "/projects/ai-factory/factory_influencer_library.png"]
      },
      {
        title: "04. Cinema & Asset Production",
        description: "Cinema studio, image vault, and GPU queue. Jobs are scheduled, tagged, and stored so large generation runs stay searchable instead of dumping files on disk.",
        images: ["/projects/ai-factory/factory_cinema_studio.png", "/projects/ai-factory/factory_image_vault.png", "/projects/ai-factory/factory_queue.png"]
      },
      {
        title: "05. Workflow Orchestration",
        description: "Node canvas for chaining research, generation, and scheduling. Workflows are modular so a new platform or model is a node, not a rewrite.",
        images: ["/projects/ai-factory/factory_workflows.png", "/projects/ai-factory/factory_canvas.png", "/projects/ai-factory/factory_brand_hub.png"]
      }
    ]
  },
  {
    id: "design-flow",
    title: "Design Flow",
    category: "Frontend / UI Design",
    thumbnail: "/projects/design-flow/dashboard_premium.png",
    description: "Agency CRM UI — dashboard, Kanban, invoicing, and a polished auth flow in React.",
    longDescription: "Design Flow is a SaaS-style CRM interface for a creative studio: revenue and project overview, Kanban board, invoice management, and login. Built in React, TypeScript, Tailwind, and Framer Motion, with Zustand for client state. The work is UI/UX and frontend architecture — glassmorphic layout, motion, and information density for agency ops.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Zustand"],
    year: "2025",
    role: "Frontend Developer",
    persona: "AI",
    highlights: [
      "Dashboard with revenue, projects, and team overview",
      "Kanban board with motion-based drag interactions",
      "Invoice suite and auth screens as a complete product surface"
    ],
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
        description: "Home view for agency operations: revenue, active projects, and team load. Glassmorphic layout with tight type and charts so the screen reads as a product, not a mock.",
        images: ["/projects/design-flow/dashboard_premium.png", "/projects/design-flow/dashboard.png"]
      },
      {
        title: "02. Financial & Invoicing",
        description: "Invoice list, status, and billable tracking in the same visual language as the dashboard — from project done to payment without leaving the app.",
        images: ["/projects/design-flow/invoices_premium.png"]
      },
      {
        title: "03. Kanban & Auth",
        description: "Project board with Framer Motion transitions, plus a login flow that matches the rest of the suite instead of a generic form.",
        images: ["/projects/design-flow/kanban_premium.png", "/projects/design-flow/login_premium.png"]
      }
    ]
  },
  {
    id: "texgen-ai",
    title: "TexGen AI",
    category: "AI + 3D Workflows",
    thumbnail: "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
    description: "Text-to-PBR tool: albedo, normal, roughness, displacement, with a Three.js preview and FastAPI batch backend.",
    longDescription: "TexGen AI turns a text prompt into a coordinated PBR set (albedo, normal, roughness, displacement). A Three.js viewer with parallax occlusion mapping lets you check the material under light before export. FastAPI handles batch jobs, tiling, and seam cleanup. The UI is a material library with search, tags, and one-click export toward Unreal and Blender.",
    gallery: [
      "/projects/texgen ai/Screenshot 2026-04-26 193320.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193506.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193545.png",
      "/projects/texgen ai/Screenshot 2026-04-26 193557.png"
    ],
    sections: [
      {
        title: "01. Material Generation",
        description: "Prompt in, coordinated PBR maps out. Stable Diffusion with tiling and seam removal so the set is usable on a mesh, not just a pretty square.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193320.png"]
      },
      {
        title: "02. Real-time 3D Preview",
        description: "Three.js previewer with parallax occlusion mapping and adjustable lighting. Catch tiling and scale issues before the maps hit the engine.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193506.png"]
      },
      {
        title: "03. Semantic Material Reasoning",
        description: "Visible pass over how the system coordinates maps — tiling, seam cleanup, and which semantic channels get generated together.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193545.png"]
      },
      {
        title: "04. Material Library & Export",
        description: "Library with tags and search, plus export paths aimed at Unreal Engine and Blender so generated work leaves the tool as an asset, not a screenshot.",
        images: ["/projects/texgen ai/Screenshot 2026-04-26 193557.png"]
      }
    ],
    tools: ["React", "Python", "Three.js", "FastAPI", "Stable Diffusion"],
    year: "2026",
    role: "Developer",
    persona: "AI",
    highlights: [
      "Text-to-PBR pipeline: albedo, normal, roughness, displacement",
      "Three.js viewer with parallax occlusion mapping",
      "FastAPI batch jobs with tiling, seam cleanup, and engine export"
    ]
  },
];

export const experiences: Experience[] = [
  {
    id: "texgen-ai-exp",
    role: "Developer — TexGen AI",
    company: "Personal Project",
    period: "2026 — Present",
    description: [
      "Built a text-to-texture pipeline that outputs coordinated PBR maps (albedo, normal, roughness, displacement) from natural-language prompts.",
      "Implemented a Three.js material preview with parallax occlusion mapping so maps can be judged under light before engine export.",
      "Wrote a FastAPI backend around Stable Diffusion for batch generation, tiling, and seam cleanup.",
      "Shipped a React material library with search, tagging, and export toward Unreal Engine and Blender."
    ],
    persona: "AI"
  },
  {
    id: "ai-factory-exp",
    role: "Full Stack Developer — AI Factory",
    company: "Personal Project",
    period: "2025 — Present",
    description: [
      "Built a Next.js dashboard with a FastAPI backend to automate content research, trend tracking, and generation queues.",
      "Integrated ComfyUI and Flux into a single GPU job interface with queue management and scheduling.",
      "Designed a node-based workflow canvas that chains research, generation, and publishing steps into reusable pipelines."
    ],
    persona: "AI"
  },
  {
    id: "navamdisha-exp",
    role: "Environment Artist & Game Designer",
    company: "Personal Project — Navam Disha",
    period: "2025 — Present",
    description: [
      "Built a modular desert palace in Unreal Engine 5 with Lumen lighting and kit pieces designed for vista-scale silhouettes.",
      "Authored terrain in Gaea (erosion, heightmaps) and brought it into UE5 landscapes.",
      "Wrote a game design document covering 5-act structure, compass mechanics, chrono-puzzles, and village plot-families as the skill system.",
      "Tuned LODs and draw calls for large exterior scenes on mid-range hardware."
    ],
    persona: "3D"
  },
  {
    id: "silent-echo-exp",
    role: "Environment Artist & Game Designer",
    company: "Personal Project — Silent Echo",
    period: "2025",
    description: [
      "Delivered a rainforest environment from greybox to cinematic render using UE5 PCG, Lumen, Nanite, and modular camp kits.",
      "Designed a 5-act stealth rescue (insertion, jungle maze, swamp, infiltration, unresolved ending) with companion dynamics and environmental storytelling.",
      "Documented AI vision/hearing cones, Behavior Tree patrols, and stealth-vs-combat pacing in a full GDD.",
      "Prototyped traversal in C++ with motion matching for idle, move, and combat transitions."
    ],
    persona: "3D"
  }
];

export const skills: Skill[] = [
  {
    category: "Game Engines",
    items: ["Unreal Engine 5", "Material Editor", "PCG Framework", "Landscape & Foliage", "Blueprints"],
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
