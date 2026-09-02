import { Project, Experience, Skill } from "./types";

const navamShot = (n: number) =>
  `/projects/navam disha envirnment/HighresScreenshot${String(n).padStart(5, "0")}.png`;

const navamRange = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => navamShot(from + i));

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/prashant-sagathiya-19bb59323/",
  github: "https://github.com/Prashants369",
  twitter: "",
  email: "prashantsagathiya818@gmail.com",
  portfolio: "https://github.com/Prashants369/portfolio"
};

export const linkedinHandle = SOCIAL_LINKS.linkedin
  .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, "")
  .replace(/\/$/, "");

export const projects: Project[] = [
  {
    id: "silent-echo",
    title: "Silent Echo: Operation Rainforest",
    category: "Game Design & Technical Art",
    thumbnail: "/projects/druglordsbase/final-renders/HighresScreenshot00000.png",
    description: "A stealth rescue in a North-East Indian rainforest — environment built in UE5, mission written as a full GDD.",
    longDescription: "I built this as two things at once: a jungle you can walk, and a mission you can play on paper. The world is a restricted rainforest (I kept bouncing between Assam/Meghalaya and the Western Ghats) with fog, huge trees, old temple ruins, and a cartel camp hidden inside it. The art side is greybox → PCG foliage → modular shacks → Lumen. The design side is a five-act rescue where two soldiers who don't trust each other have to find missing villagers before the jungle swallows the trail.",
    tools: ["Unreal Engine 5", "PCG Framework", "Lumen", "C++", "Motion Matching"],
    year: "2025",
    role: "Environment Artist & Game Designer",
    persona: "3D",
    highlights: [
      "Full jungle pipeline in UE5: greybox, PCG, modular camp kits, Lumen, then an optimization pass",
      "Wrote the mission myself — five acts, two soldiers, stealth that can break into a loud fight",
      "Every folder of stills is on the Environment page: finals, mids, extra buildings, opts, greybox"
    ],
    variants: [
      {
        id: "environment",
        label: "Environment Art",
        title: "Silent Echo: Technical Environment",
        category: "Technical Environment Art",
        description: "Rainforest camp in UE5. Every still from the folders is here — finals, mids, extra buildings, opts, greybox.",
        longDescription: "I treated the jungle like a production, not a screenshot hunt. First greybox the cliff, maze, and camp so paths made sense. Then PCG for the plants so it didn't look stamped. Then the wooden shacks and walkways as a small modular kit. Lumen + fog last, because lighting lies if the layout is still wrong. The folders on disk are the same folders on this page.",
        highlights: [
          "Greybox first so the maze, cliff drop, and camp actually play",
          "PCG foliage with density noise — I was tired of copy-paste bushes",
          "Modular camp pieces (watchtower, shacks, walkways) reused across the compound"
        ],
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
          "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00002.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00002 (2).png",
          "/projects/druglordsbase/greyboxing/ScreenShot00003.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00004.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
          "/projects/druglordsbase/greyboxing/ScreenShot00006.png"
        ],
        sections: [
          {
            title: "01. Final Renders",
            description: "These are the hero shots. Lumen through the canopy, fog in the valleys, the camp sitting in the trees instead of on a flat pad. I kept taking extras from slightly different angles (the files with (2) in the name) because one camera never sold the space.",
            images: [
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
              "/projects/druglordsbase/final-renders/HighresScreenshot00007.png"
            ]
          },
          {
            title: "02. Mid Renders",
            description: "In-between pass. Foliage is in, lighting isn't finished, some meshes still look raw. I kept these because the jump from greybox to final looks fake if you hide the messy middle.",
            images: [
              "/projects/druglordsbase/mid-renders/HighresScreenshot00008.png",
              "/projects/druglordsbase/mid-renders/HighresScreenshot00009.png",
              "/projects/druglordsbase/mid-renders/ScreenShot00000 (2).png",
              "/projects/druglordsbase/mid-renders/ScreenShot00001 (2).png",
              "/projects/druglordsbase/mid-renders/ScreenShot00007.png"
            ]
          },
          {
            title: "03. Extra Buildings",
            description: "The camp kit — watchtower, shacks, walkways. Same pieces, different clusters, so the compound feels built by people who dumped lumber in a jungle, not by a unique-mesh artist.",
            images: [
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00006.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00007.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00008.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00009.png",
              "/projects/druglordsbase/extra-buildings/HighresScreenshot00010.png"
            ]
          },
          {
            title: "04. Optimizations",
            description: "LOD and density checks. Nanite helps, but the foliage still needed rules or the frame rate died the second you looked into the trees. This pass was 'does it still look like a jungle on mid-range hardware'.",
            images: [
              "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
              "/projects/druglordsbase/optimizations/HighresScreenshot00003.png"
            ]
          },
          {
            title: "05. Greyboxing",
            description: "Blockout of the cliff spawn, jungle maze, stream, and camp footprint. I locked paths here before dressing anything. If the greybox is boring, plants won't save it.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00002.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00002 (2).png",
              "/projects/druglordsbase/greyboxing/ScreenShot00003.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00004.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00006.png"
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
        description: "My notes for a rainforest rescue — two soldiers, a missing village, and a camp you can ghost or burn.",
        longDescription: "I didn't want a generic jungle shooter. The setting is a restricted Indian rainforest — I kept going back and forth between Assam/Meghalaya and the Western Ghats — fog, old trees, temple ruins, wildlife you hear more than you see. Tribal people start vanishing. Rumour is a cartel set up a lab in the middle of nowhere and is using villagers as labour. India asks a US covert unit for help, which is how you end up with an Indian captain and an American sergeant who don't like each other yet.\n\nThe mission is called Rainforest Rescue on paper. You drop on a cliff, get lost in the maze, find the camp in a swamp, and the ending is unfinished on purpose — villagers out, cartel boss gone, both men walking into fog.",
        highlights: [
          "Five acts: cliff drop, jungle search, swamp reveal, infiltration, unfinished ending",
          "Arjun Mehta and Alex Carter — trust issues first, respect later",
          "Stealth is the default. Going loud is a choice, not the loop"
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
          "/projects/druglordsbase/references/81826ff4-8eb3-49d9-89d2-6db33208e178.png",
          "/projects/druglordsbase/references/ba469b5b-65d9-4c04-9b8a-9e67bc539d94.png",
          "/projects/druglordsbase/references/Rustic Jungle Watchtower at Night.png"
        ],
        sections: [
          {
            title: "01. Story & Level Flow",
            description: "Act 1 — Arrival. Helicopter dumps you on a cliff. First view is the whole valley under fog. Brief is simple: find the missing people, scout, don't start a war. Opening cinematic is just Arjun and Alex talking past each other — culture, tactics, ego.\n\nAct 2 — Search. Jungle maze. Three ways through: thick plants (slow, hidden), a fallen-tree crawl, or a rock ledge that leaves you open. Water, wildlife, abandoned camps. Clues are small on purpose — blood, a broken tool, a tribal mark — so you piece it together instead of getting a cutscene.\n\nAct 3 — The camp. Swamp, worse animals, then you see the compound. Villagers in cages, a lab. Arjun recognises an elder. That's when it stops being recon.\n\nAct 4 — In. Zipline or the big fallen-tree bridge. Silent takedowns if you're patient. Or you trip something and the whole camp wakes up — that's the dopamine hit I wanted, not a scripted set-piece.\n\nAct 5 — Unfinished. People get out. The leader runs deeper into the trees. Alex and Arjun walk into fog. Sequel bait, but also the honest ending: you didn't actually win.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00000.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00001.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00002.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00002 (2).png"
            ]
          },
          {
            title: "02. Arjun & Alex",
            description: "Captain Arjun Mehta is Indian Army Special Forces. Jungle guy. Quiet. He cares about the tribes more than the geopolitics. Sgt. Alex Carter is US special ops, used to South American jungles, treats this like another deployment until he doesn't.\n\nI wanted them to clash first — how to move, who to trust, whether the ruins even matter — and then earn the partnership. The beat that does it: Arjun seeing someone he knows in a cage. After that Alex has to take the land seriously or the player feels it.",
            images: [
              "/projects/druglordsbase/references/35387a9f-2ad2-47c6-8db8-2197d71f7082.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00003.png"
            ]
          },
          {
            title: "03. How it plays",
            description: "Stealth first. Guards have vision and hearing, so bushes and prone crawls aren't flavour, they're the kit. Limited ammo, silenced guns if you have to. Melee takedowns are how you're supposed to clear the camp.\n\nOptional ruins off the main path — Indian temple stuff, not a collectible checklist. Core path is linear; the maze and the two camp approaches are the branches. I wrote it as stealth → tension → a sudden fight if you blow it, then back down. If every encounter is a firefight the jungle stops being scary.",
            images: [
              "/projects/druglordsbase/greyboxing/ScreenShot00005.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00004.png"
            ]
          },
          {
            title: "04. What I'd build in Unreal",
            description: "Landscape for the cliffs and valleys. PCG for the plants so density can be noisy instead of stamped. Fog volumes and sunshafts through the canopy. Niagara for the streams. Audio volumes for animals you rarely see. Modular kits for ruins and the camp, moss decals on everything.\n\nCharacters: GASP / motion matching so traversal doesn't pop. Behaviour trees for patrol and alert. Simple subtitle widgets for the talky bits. Arjun as companion AI — he follows, he talks, he helps if you go loud. Build order I actually use: blockout → foliage → PCG → soldiers → AI → stealth/guns → triggers → lighting and sound last.",
            images: [
              "/projects/druglordsbase/optimizations/HighresScreenshot00001.png",
              "/projects/druglordsbase/greyboxing/ScreenShot00006.png"
            ]
          },
          {
            title: "05. Mood & references",
            description: "Green Hell for how thick a jungle should feel. Far Cry 3 for camps and that cartel smell. Spec Ops: The Line for two soldiers going wrong together. And actual Indian ruins — moss, carvings, respect — so it doesn't look like a South American map with a rename.\n\nStory in the dirt: blood, cages, marks on trees. Camera triggers on the overlook and when you first see the camp. I don't want a ten-minute cutscene if a broken tool on the path does the job.\n\nLater, if I continue it: co-op for both soldiers, real wildlife AI, dialogue that actually moves the trust meter.",
            images: [
              "/projects/druglordsbase/references/ba469b5b-65d9-4c04-9b8a-9e67bc539d94.png",
              "/projects/druglordsbase/references/81826ff4-8eb3-49d9-89d2-6db33208e178.png",
              "/projects/druglordsbase/references/Rustic Jungle Watchtower at Night.png"
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
    description: "A 15th-century Indian palace in UE5, and a game about a compass that points somewhere maps don't have.",
    longDescription: "The environment is a desert palace I blocked out, kitbashed, and lit in Unreal — Gaea for the land, Lumen for the heat. The design doc is the other half: two village boys find a 9-spoked compass that doesn't point north. It points at the 9th direction — Navam Disha — a fold over the real world. I took that from the old idea that after the eight compass points there's an inward / hidden one. The palace shots are the world. The GDD is what happens when you walk into it.",
    tools: ["Unreal Engine 5", "Lumen", "Blueprints", "Gaea", "Modeling Tools"],
    year: "2025",
    role: "Environment Artist & Game Designer",
    persona: "3D",
    highlights: [
      "All 35 environment stills on the Environment page — blockout through final light",
      "Compass of the 9 Directions: not north, the thin spot in reality",
      "Village families teach you. The 9th layer tries to keep you"
    ],
    variants: [
      {
        id: "environment",
        label: "Technical Environment",
        title: "Navam Disha: Environment Art",
        category: "Technical Environment Art",
        description: "Desert palace in UE5. Every screenshot from the folder is here — massing, lighting, courtyards, final vistas.",
        longDescription: "I wanted a palace you could read from a kilometre away. Modular walls and domes on a Gaea landscape, then Lumen so dusk actually felt hot. Some shots still have the volume debug lines — I left them. That's the work, not just the postcard.",
        highlights: [
          "Massing first so the silhouette works against the mountains",
          "Gaea terrain, then the kit dropped onto cliffs and courtyards",
          "Lighting pass last — heat, dusk, interior spill"
        ],
        gallery: navamRange(0, 34),
        sections: [
          {
            title: "01. Blockout & Massing",
            description: "Big shapes first. Palace on the cliff, walls running the ridge, mountains behind. If this read as a toy from the air I wasn't going to dress it.",
            images: navamRange(7, 14)
          },
          {
            title: "02. Lighting Pass",
            description: "Lumen, sun, a bit of fog. Rooftop shots, dusk, the debug volumes I was using to shape light. This is where it stopped looking like clay.",
            images: [navamShot(0), navamShot(1), navamShot(15), navamShot(16), navamShot(33), navamShot(34)]
          },
          {
            title: "03. Courtyards & Details",
            description: "Walking the kit at human height — arches, walls, floors, the bits you actually bump into. Not the hero vista. The place.",
            images: [...navamRange(2, 6), ...navamRange(17, 21)]
          },
          {
            title: "04. Final Vistas",
            description: "The shots I'd put on a reel. Scale, silhouette, sky. This is the palace as a destination, which is what the compass is supposed to drag you toward.",
            images: navamRange(22, 32)
          }
        ],
        tools: ["Unreal Engine 5", "Lumen", "Gaea"]
      },
      {
        id: "gdd",
        label: "Game Design Document",
        title: "Navam Disha: Design Documentation",
        category: "Game Design & Documentation",
        description: "The 9th direction isn't on a map. Two boys, a broken water clock, and a compass that starts spinning on its own.",
        longDescription: "I got stuck on this idea from Indian stuff I grew up around: four cardinals, four in-betweens, and then a 9th that isn't a direction at all — inward, upward, the unmanifest, avyakta. In the game it's a fold sitting on top of a 15th-century village. The compass (Navdisha Yantra) doesn't point north. It points at where that fold is thinnest right now, so the boys chase the needle into places that shouldn't exist.\n\nAarav lives with his grandmother. Veer has a huge family. They help an old astrologer fix a water clock and find the thing in his junk. First use: a jungle shrine nobody in the village remembers. After that the compass misbehaves, people dream wrong, and you have to decide if this is a gift or a leak.",
        highlights: [
          "Compass points at the thin spot, not north",
          "Village life is the tutorial — farming, pots, mantras, not a skill menu",
          "Stay in the 9th too long and your eyes start lying"
        ],
        gallery: navamRange(7, 14),
        sections: [
          {
            title: "01. What the 9th direction even is",
            description: "It's not east of east. In the lore, sages used it and then sealed it because things in there eat time and memory. The compass is both a key and a lock. Use it too much and you open the floodgates.\n\nWhen it tunes, the world doesn't explode into a loading screen. It shimmers. Paths loop. A temple has rooms from three centuries at once. Someone's grandmother is standing in the courtyard but she's twenty. Geometry you couldn't see is suddenly a staircase. That's the 9th. I wanted the 'whoa' every time you use it, and then a price so you don't spam it.",
            images: [navamShot(8), navamShot(9), navamShot(10)]
          },
          {
            title: "02. How the compass works",
            description: "You don't just hold it and walk. Gestures, timing with the sky, sometimes a sound puzzle to tune in. Once you're in: echo quests (talk to shadows of people who already died), chrono-puzzles (do something in the past, present, and a third state of the same room), water that runs uphill, portals in the village if you can find them, and dream-walking if you do the ritual on a sleeper.\n\nStay too long and vision smears, you hear the wrong voices. That's the disorientation meter. You go home, do a village ritual, recharge the thing. I didn't want a magic flashlight. I wanted something you have to respect.\n\nLater it unlocks modes: Time Echo (see the past on top of now), Dreamwalker, Starlight (sky temples). And it's only 1 of 9 artifacts — Mirror of Reversal, Bell of Time, Seed of Dreaming, Lantern of True Sight, Key of Forgotten Paths, Blade of Unmaking, Book of the Silent Voice, Heart of the 9th Sky. Each one is a different kind of trouble.",
            images: [navamShot(12), navamShot(13)]
          },
          {
            title: "03. The village is the skill tree",
            description: "I got bored of NPCs with yellow markers. Families have jobs, and the jobs teach you.\n\nFarming: Ramdas (old, rituals, moon), Bhola (water, stamina), Shivnath (cows, land). Craft: Dinesh the potter, Ramu the carpenter, Girdhar who weaves light clothes for stealth, Shyam who runs the cart. Spirit: Pandit Harinarayan for mantras and the sky, his daughter Kavya for rhythm puzzles, Vaidya Raghuvansh the healer who lives alone and knows how to calm the 9th. Combat: Captain Rudra Singh at the fort. Arya, the king's daughter, is how you get into the castle without being stupid.\n\nYou plough because Veer needs stamina. You make a pot because a puzzle needs one. The village isn't flavour. It's the upgrade path.",
            images: [navamShot(11), navamShot(14)]
          },
          {
            title: "04. Story, then it goes wrong",
            description: "Act 1 is chores and weird dreams. Fix the water clock, find the compass, a shrine that isn't on anyone's map. Act 2 the needle starts twitching at broken places, villagers see people who died, you go into the overlay for real. Act 3 you're hunting the other eight artifacts — river city, desert where the stars are wrong, snow temple, a palace that's all mirrors. Act 4 the 9th leaks: night sky changes, people vanish and come back wrong, stairs that don't end. The old brotherhood that was supposed to guard this is serving whatever lives in there.\n\nEnd: seal it and lose the power, keep it and risk becoming them, or try to hold both — which I made the hard path on purpose. I don't want a clean win. Same as Silent Echo. If you understood the compass, the last beat should flip the rules one more time.",
            images: [navamShot(0), navamShot(7)]
          },
          {
            title: "05. How it should feel",
            description: "When you tune: a little lens warp, dust in the light, faint yantra on walls, a drone under the village noise. Inside: stars in the wrong pattern, reflections of the wrong year, plants that only exist here. Maya and kalachakra, not a purple dimension shader.\n\nSide bits I like: a sadhu walking backwards through time, a boatman whose river now goes up, a bell that calls people who aren't alive, an observatory where you line up constellations that aren't ours.\n\nRule I wrote at the bottom of the doc: every time they use the compass, show them something they haven't seen. Every time they think they get it, change the rule.",
            images: [navamShot(10), navamShot(1)]
          }
        ],
        tools: ["Technical Writing", "Level Design", "World Building"]
      }
    ],
    sections: [],
    gallery: navamRange(0, 34)
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
      "/projects/ai-factory/factory_radar.png",
      "/projects/ai-factory/factory_studio.png",
      "/projects/ai-factory/factory_dashboard.png"
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
        images: ["/projects/ai-factory/factory_cinema_studio.png", "/projects/ai-factory/factory_image_vault.png", "/projects/ai-factory/factory_queue.png", "/projects/ai-factory/factory_studio.png"]
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
