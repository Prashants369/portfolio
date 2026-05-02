in my game dev resume add this email prashantsagathiya818@gmail.com


add this in gdd portfolio with professional thing don't need to add whole stuff just from this context 
then add## 🎬 **Full Storyline**

**Setting:**

- Remote Indian rainforest — possibly North-East India (Assam/Meghalaya rainforests) or South India (Western Ghats).
- Lush green jungle, dense fog, massive ancient trees, ruins of forgotten temples, dangerous wildlife.

**Background:**

- Reports emerge of tribal villagers mysteriously disappearing deep inside the restricted rainforest.
- Rumors suggest an international drug cartel has set up secret operations within the jungle, exploiting the area's remoteness.
- Indian authorities suspect the villagers are kidnapped for labor or experiments related to drug production.
- Due to international links, India requests assistance from the US Military's covert special operations unit.

---

## 🎖️ **Main Characters**

| Character | Details |
| --- | --- |
| **Captain Arjun Mehta** | Indian Army Special Forces, jungle warfare expert, stoic, grounded in local culture, deeply cares about the missing tribes. |
| **Sgt. Alex Carter** | US Special Forces operative, experienced in South American jungle missions, skeptical outsider, develops respect for Arjun and the land over time. |

---

## 🛠️ **Story Progression**

**Act 1 — The Arrival**

- Helicopter drop-off at the cliff (Player Spawn Cliff).
- Mission Brief: Locate missing villagers, scout the jungle, assess cartel presence.
- Initial cinematic establishing trust issues — cultural and strategic clashes between Alex and Arjun.

**Act 2 — The Search**

- Navigate Dense Jungle Maze.
- Discover water streams, wildlife, signs of abandoned camps.
- Small clues: Blood trails, broken tools, tribal markings.
- Optional Ancient Ruins exploration — adds Indian mythology, hinting at forgotten history intertwined with the jungle.

**Act 3 — The Truth Revealed**

- Swamp zone — danger escalates, wildlife threats intensify.
- Find the Hidden Enemy Camp: Confirm cartel's presence, villagers imprisoned, drug lab setup.
- Emotional moment: Arjun recognizes a missing elder among the captives — personal stakes rise.

**Act 4 — The Infiltration**

- Plan stealth approach: zipline, fallen tree bridge, jungle cover.
- Mix of silent takedowns, distractions, and strategic choices.
- Player choice: Maintain stealth or trigger violent combat (dopamine hit moment).

**Act 5 — The Unfinished Ending**

- Villagers rescued, but leader of cartel escapes deeper into the jungle.
- Emotional conflict: Mission incomplete, tribal future uncertain.
- Alex and Arjun walk into fog — unresolved, heavy ending with seeds for sequel.

---

## ⚙️ **Plan to Build Inside Unreal Engine**

### **Environment Development**

| Task | Unreal Implementation |
| --- | --- |
| **Terrain** | Use *Landscape* system; heightmaps for cliffs, valleys. |
| **Foliage** | Use *PCG (Procedural Content Generation)* for dynamic jungle — adjust density noise for natural randomness. Optimize foliage LODs for performance. |
| **Lighting** | Dynamic lighting with fog volumes; heavy shadows for dark rainforest look. Use directional light for sunshafts through canopy. |
| **Water Streams** | Niagara system for flowing water; decals for wetness and reflections. |
| **Wildlife** | Ambient sounds via audio volumes; optional AI for wildlife threats (snakes, crocodiles). |
| **Ruins & Camps** | Modular asset placement; decals for moss, dirt. |

---

### **Character & Animation**

| Task | Unreal Implementation |
| --- | --- |
| **Motion Matching** | Integrate *GASP* or similar system for player characters — smooth traversal, idle, combat transitions. |
| **Enemy AI** | Basic patrol, vision/hearing cones, stealth detection — AI Behavior Trees. |
| **Dialogue System** | Use simple widget-based subtitle system or voice-acted lines. |
| **Companion AI (Indian Soldier)** | Follows player, contextual voice lines, assists in stealth or combat based on player choice. |
| **Combat System** | Simple firearm logic — limited ammo, silenced weapons. Melee takedowns for stealth. |

---

### **Gameplay Flow**

- **Linear-branching hybrid**: Core path with optional ruins exploration.
- **Cinematic Moments**: Camera triggers for overlooks, key discoveries.
- **Dopamine Hits**: Carefully paced stealth > tension > sudden combat burst.
- **Environment Storytelling**: Blood stains, broken cages, tribal symbols.

---

## 🎯 **Task Breakdown for Development**

1. **Prototype Blockout** — Terrain, cliffs, jungle maze paths.
2. **Basic Jungle Assets** — Import foliage packs, optimize shader complexity.
3. **PCG Setup** — Jungle density, random vegetation variation.
4. **Character Setup** — Import soldier models, apply motion matching.
5. **Enemy AI Prototype** — Patrols, detection logic, alert behavior.
6. **Core Mechanics** — Stealth, melee takedowns, limited firearm use.
7. **Story Events** — Trigger areas, cinematics, dialogues.
8. **Final Polish** — Lighting pass, fog tuning, soundscape integration.

---

## 🎥 **Visual & Mood References**

- *Green Hell* — Jungle density, survival atmosphere.
- *Far Cry 3* — Jungle exploration, enemy camps, cartel vibe.
- *Spec Ops: The Line* — Emotional soldier dynamic, moral ambiguity.
- *Sacred Indian Culture* — Hidden ruins, ancient symbols, tribal respect.

---

**Optional Add-ons:**

✅ Co-op mode for both players (long-term).

✅ Wildlife AI for extra survival layers.

✅ Complex dialogue choices to shift trust between the characters.

---

## 💡 **Want Next?**

- Full Level Design Flowchart?
- Unreal Blueprint Flow for Jungle PCG + Triggers?
- Emotional Dialogue Samples?

# 🎯 **Level Design Flowchart – Silent Echo: Rainforest Rescue**

```
mathematica
CopyEdit
[START - Helicopter Cliff Drop Zone (A)]
        |
        V
[Cinematic Overlook of Jungle Valley]
        |
        V
[Descent Path - Safe Climb/Drop to Jungle Floor]
        |
        V
==== EXPLORATION PHASE START ====
        |
[Dense Jungle Maze (B) Entry Point]
        |
   -> Environmental Obstacle Choices:
      ├─ [Thick Vegetation Path] (Slow, hidden route)
      ├─ [Fallen Tree Crawl Space] (Requires prone movement)
      └─ [Small Climbable Rock Ledge] (Exposes player briefly)
        |
        V
[Animal Encounter] - Optional Wildlife Threat
        |
        V
[Water Stream & Rocks Area (C)]
        |
   -> Optional Exploration:
      ├─ [Search upstream for hidden clue]
      └─ [Cross stepping stones to main path]
        |
        V
[First Signs of Conflict - Broken Tools, Tribal Markings]
        |
        V
==== TENSION BUILDUP PHASE ====
        |
[Ancient Ruins (E) - Optional Lore Zone]
        |
   -> Player Choice:
      ├─ [Investigate Ruins for Story/Loot]
      └─ [Skip, Follow Main Jungle Path]
        |
        V
[Swamp Patch (F) - Dangerous Wildlife Zone]
        |
        V
[Companion Dialogue - Build Relationship Between Soldiers]
        |
        V
[Visual Reveal: Hidden Enemy Camp (D) - Far Distance]
        |
        V
==== INFILTRATION PHASE START ====
        |
[Zipline Cliff (G) - Optional Fast Approach]
        |
[Big Fallen Tree Bridge (H) - Alternate Crossing Route]
        |
   -> Approach Choice:
      ├─ [Stealth Zipline Entry]
      └─ [Bridge Traverse with Risk of Detection]
        |
        V
[Enemy Camp Perimeter - Stealth or Combat Initiation]
        |
        V
==== FINAL RESCUE PHASE ====
        |
[Free the Captives - Optional Silent Takedowns or Loud Assault]
        |
[Combat Escalation - Dopamine Combat Hit Moment]
        |
[Cartel Leader Escape - Unfinished Resolution]
        |
        V
[Emotional Ending - Soldiers in Fog, Unanswered Questions]
        |
        V
[END - Credits Teaser for Full Game]

```

---

# 🛠️ **Unreal Engine Task Notes Per Segment**

### 1️⃣ **Cliff Spawn & Overlook**

- Use cinematic cameras, fog layers for distant jungle.
- Trigger dialogue exchange introducing characters.

### 2️⃣ **Jungle Maze Paths**

- PCG foliage system with density variations.
- Prone/crouch triggers for tight spaces.
- Wildlife AI near random zones.

### 3️⃣ **Water Stream Area**

- Niagara FX for flowing water, reflective material.
- Optional side path with clues (collectibles or lore).

### 4️⃣ **Ancient Ruins (Optional)**

- Modular overgrown ruins.
- Lore triggers (visual carvings, environmental storytelling).

### 5️⃣ **Swamp & Wildlife Danger**

- Fog volumes, slowed movement material.
- Crocodile/snakes AI with ambush behavior.

### 6️⃣ **Enemy Camp Reveal**

- Camera trigger for distant camp view.
- Lighting contrast: dark jungle vs. camp fires/torches.

### 7️⃣ **Infiltration Paths**

- Zipline Blueprint with spline-based movement.
- Fallen Tree bridge with narrow walk trigger + wobble effect.

### 8️⃣ **Enemy Camp Combat**

- Simple AI patrols, hearing/vision detection.
- Melee stealth takedowns, optional silenced firearms.

### 9️⃣ **Emotional Resolution**

- Trigger cutscene post-rescue.
- Fog volume obscures horizon — unresolved mood.






# 🌌 The Compass of the 9 Directions

*Navdisha Yantra* (नवदिशा यन्त्र)

---

## 🧭 Concept Summary

- The boys find a **mysterious compass-like artifact**, but it points in a direction that doesn’t exist on maps.
- The **compass points to the "9th direction" (Navam Disha)** — a secret layer of reality that overlays the normal world.
- Ancient yogis, astronomers, and mystics believed that **beyond the 8 cardinal/intercardinal directions, there lies a hidden dimension** → only accessible through certain rituals or states of mind.
- The compass is a key to traverse into this layer — but movement through it is strange:
    
    → space loops
    
    → time behaves differently
    
    → reality folds
    
- The boys use it to explore **secret versions of familiar places**, **lost zones**, **forgotten temples**, and maybe even other people's dreams or memories.

---

## 🌌 World Logic / Lore

- Indian ancient texts speak of:
    - 4 cardinal directions
    - 4 intercardinal (NE, SE, SW, NW)
    - **9th direction: the inward / upward / hidden / fold of space**
- Certain sages mastered travel through the 9th direction → found **knowledge, strange beings, and risks**.
- The compass is a **combination of yantra + astrological mechanism + psycho-reactive device** → responds to mental state & external rituals.

---

## 🎮 Gameplay Loop Ideas

**1️⃣ Discover the Compass**

- Found after helping an old astrologer repair an ancient water clock.
- Requires assembling with **old metals + sacred wood + gemstones** → gameplay crafting moment.

**2️⃣ Learning to Use It**

- Not just hold & walk → must:
    - Perform **ritual gestures** (use controller gestures / patterns)
    - Time movements to **celestial alignments**
    - Solve auditory or visual puzzles to **"tune into the 9th direction"**.

**3️⃣ Entering the Navam Disha Layer**

- When tuned:
    - World "shimmers" → small shift happens → now in **overlay layer**:
        - Jungle path loops infinitely unless exited correctly
        - Temple has **rooms from different centuries** coexisting
        - Certain people appear or vanish → their past/future echoes
        - Hidden **geometry puzzles** only visible in this layer

**4️⃣ Types of Adventures Inside Navam Disha**

- **Echo Quests** → interact with shadows of past villagers to uncover hidden history.
- **Chrono-puzzles** → perform actions across **three time states** of same location to open paths.
- **Shifting physics zones** → gravity bends, water flows upward.
- **Portal network** → use the compass to **find secret portals** in village, jungle, river caves.
- **Dream walking** → enter sleeping people’s dream-world through special Navam ritual.

**5️⃣ Danger & Challenge**

- Stay too long → **mental disorientation** mechanic → vision blurs, wrong sounds heard.
- Certain beings exist **only in the 9th direction** — guardians / parasites → light & sound-based puzzles to deal with them.
- Compass must be periodically **"recharged"** through rituals → keeps players grounded.

**6️⃣ Final Progression**

- The compass slowly reveals its full capability:
    - At first → access hidden paths
    - Later → time-based interaction (restore ruins to ancient state temporarily)
    - Advanced → influence NPCs’ fates by interacting in their past shadows.

---

## 🎨 Visual & Mood

- When tuned → subtle world shift:
    - Slight lens distortion
    - Floating particles of light
    - Geometric patterns overlay surfaces faintly
    - Sound → layered tones (deep, mystical drone + hints of music)
- Inside Navam Disha:
    - Skies subtly wrong → stars in odd patterns
    - Reflections behave differently → wrong people / wrong time reflected
    - Certain flora only visible here → glow or hum

---

## Dopamine Hits / Why It Feels Amazing

✅ Every time you use the compass → "Whoa, new layer of reality!"

✅ Solving puzzles across time → extreme satisfaction

✅ Real-world locations become **multi-dimensional** → constant surprise

✅ Encounters with "echoes" of past people → deep emotional moments

✅ Using ancient Indian knowledge & myth as game mechanic → unique feel

✅ Ritual + tuning interaction → player learns mastery → powerful feel

---

## Expansion Possibilities

- Compass can point to **multiple secret "9th paths"** → modular quest design
- Final advanced use: **escape death once** → temporary time-rewind → extreme dopamine moment
- Potential to even **fight enemies only visible in Navam Disha**
- Secret ending: enter fully into 9th realm → transcendence ending

## What is the *9th Direction*?

That’s the beauty of it — **it is not a physical direction** like North or East.

In Indian mysticism, sometimes it refers to:

- The **inner direction** (toward the Self, toward the mind)
- The **upward direction** (toward the heavens)
- The **hidden / unseen dimension** that overlays reality → "**avyakta**" → the unmanifest

In your game’s lore → the **9th Direction** is:

👉 A fold in space-time that exists **parallel to the normal world**, accessible only through tuning your consciousness & space.

👉 It is a forgotten layer where:

- Lost memories exist
- Shadows of the past walk
- Time runs strange
- Ancient paths are preserved that no longer exist in normal world
- Beings of forgotten realms live

👉 The compass doesn’t point North/South — it points to where the **9th layer is currently thinnest** — so the boys chase the needle to strange places.

---

## What Happens After First Adventure?

👉 Boys discover compass → learn to enter Navam Disha → have first big adventure 

Now what?

Here are creative options for **what they can do next** and **what adventures can open up:**

---

### 1️⃣ **The Compass Starts Behaving Strangely**

- After the first use → compass starts spinning on its own sometimes.
- Indicates that **bigger rift is opening** — meaning the 9th layer is leaking into normal world.
- NPCs start having strange dreams.
- **New adventure:** boys must find why → leads to discovering a secret brotherhood of yogis trying to keep the 9th direction sealed.

---

### 2️⃣ **Unlocking New Compass Modes**

- They discover that the compass can be "attuned" using ancient yantras / mantras → giving different powers:
    - **Time Echo mode** → see past events happen in current world
    - **Dreamwalker mode** → enter people’s dreams to change their fate
    - **Starlight mode** → allows travel to certain hidden sky realms (floating islands, sky temples)
- Each new mode → entire new kind of adventure.

---

### 3️⃣ **Finding Other Artifacts of the 9th Direction**

- Lore reveal: compass is just 1 of **9 lost artifacts** made by ancient Vishwakarma sages to **map the Navam Disha**.
- The boys can now go on epic quests to recover the others:
    - The Mirror of Reversal
    - The Bell of Time
    - The Key of Forgotten Paths
    - The Seed of Dreaming
    - etc.
- Each item allows new ways to interact with the world.

---

### 4️⃣ **Navam Disha Invasion / Corruption**

- Over time → parts of 9th layer start affecting the normal village:
    - Certain villagers disappear temporarily → found wandering in strange state
    - Buildings gain **impossible geometry** → folded stairs, endless corridors
    - **Night sky changes** → unfamiliar stars appear
- Boys now must:
    - Close unstable rifts
    - Solve strange logic puzzles to restore normal space
    - Enter twisted versions of familiar places → fight/solve their way through

---

### 5️⃣ **Global Map Expansion**

- The compass can now point beyond the local village → to:
    - Abandoned royal cities
    - Deep desert ruins
    - Mountain-top ancient observatories
    - Vast underground palaces
- The world **grows wider** → player feels big sense of adventure escalation.

---

### 6️⃣ **Learning the Truth of the 9th Direction**

- Lore questline → the boys discover:
    - The 9th direction was once known and used by ancient kings & sages
    - It was sealed because beings from that layer **fed on human time & memories**
    - The compass is both a key and a seal → using it too much **risks opening the floodgates**.
- This leads to big choice moments:
    - Do the boys close the 9th forever?
    - Or use it to gain great knowledge but risk the world?

---

### Summary of Post-Adventure Loop

| Stage | What They Do |
| --- | --- |
| First Adventure Done | Discover compass has more potential |
| Compass misbehaves | Chase new anomalies |
| Unlock new modes | Gain new powers, enter new kinds of layers |
| Find other artifacts | Big adventures → map grows |
| 9th Direction leaks | Fight to restore balance → twisted world |
| Lore discovery | Emotional climax → big choice storylines |

---

### Final Dopamine Hit Design Principle:

👉 **Each new use of the compass should reveal something players haven’t seen before.**

👉 **Each time they think they understand it → flip the rules.**

👉 **Give them power → but show consequences → deeper engagement.**

## 🌌 Full Story Concept: *Navam Disha: The Hidden Path*

### Premise

In a remote Indian village in the 15th century, two boys — **Aarav** (lives with grandmother) & **Veer** (lives with large family) — stumble upon a strange **9-spoked compass** hidden in an old astrologer’s belongings.

Legends speak of a forgotten **9th Direction**, where the **unseen world overlaps the real one**.

But entering it will awaken old forces that were never meant to return.

---

## 🗺️ Story Structure / Flow

### ACT 1 — Discovery (Village Life + Mystery)

- Players do normal village life → helping family, exploring jungle, working on small tasks.
- Strange **dreams** start happening to villagers.
- Boys help the old astrologer repair a broken water clock → discover the **compass**.
- Initial use of compass → small shift happens → find a lost shrine in jungle that no one remembers.
- First big adventure: Solve puzzles in lost shrine → discover history of the 9th direction → awaken first rift.

---

### ACT 2 — Awakening the 9th Direction (Adventure Begins)

- Compass now starts pointing to unstable places around village.
- Village starts seeing "echoes" of the past → NPCs trapped in old loops.
- First true **Navam Disha layer exploration** → twisted versions of normal places.
- Learn about **the 9 artifacts** that once controlled Navam Disha:
    1. Compass of the Hidden Path
    2. Mirror of Reversal
    3. Bell of Time
    4. Seed of Dreaming
    5. Lantern of True Sight
    6. Key of Forgotten Paths
    7. Blade of Unmaking
    8. Book of the Silent Voice
    9. The Heart of the 9th Sky
- Game loop: Compass now lets players find hidden doors, time echoes, dream pathways.
- Boys go on big adventures to recover artifacts:
    - Ancient sunken city in river
    - Desert ruins where the stars shine wrong
    - Forgotten snow temple on high peak
    - Subterranean mirror maze palace

---

### ACT 3 — The Corruption Spreads (High Stakes)

- Navam Disha starts **corrupting the real world**.
    - Night sky changes
    - Some NPCs disappear → found trapped in 9th layer
    - Strange plants & geometry appear in normal world
- Final act of the Brotherhood of the 9th Direction revealed:
    - Once guardians of this knowledge → now some corrupted, serving ancient beings.
- Major boss fights:
    - Echo of the Fallen Yogi
    - Guardian of the Bell of Time → controls time field
    - Dream Eater Beast → consumes player memories during fight
- Big choice for players:
    - Seal Navam Disha forever → lose the power
    - Control it → gain forbidden knowledge but risk becoming like the Brotherhood
    - Balance it → difficult path, requires mastery of all 9 artifacts.

---

## 🎮 More Gameplay & Adventure Ideas

### 🌀 Different Navam Disha Layers

1. **Past Echo Layer**
    - See & interact with events from centuries ago → affect present.
    - Example: Save a builder’s family in the past → unlock hidden chamber in present.
2. **Dream Layer**
    - Enter people's dreams → puzzle-heavy, strange physics.
    - Example: Heal a child’s nightmare → their lost memories give clue to artifact.
3. **Geometry Warp Layer**
    - World bends → Escher-like impossible paths.
    - Example: Climb a tower that folds into itself.
4. **Time Fracture Layer**
    - Objects move in loops → solve temporal puzzles.
    - Example: Navigate moving staircases that shift through time phases.
5. **Void Layer**
    - Enter pure Navam Disha → dark space filled with beings of sound & light.

---

### 🧠 Side Adventure Ideas

- **The Man Who Walked Backwards:** Meet an old sadhu who is unstuck in time → guide him to fix his fate.
- **The Boat to the Sky:** Help a boatman whose river now flows upward in Navam Disha layer → surreal sequence.
- **The Song of the Bell:** Recover an ancient bell that can summon lost souls → leads to emotional story quest.
- **The Temple of Stars:** Find a forgotten observatory → align constellations in the 9th layer to unlock a portal.

---

### 🕉️ Thematic Depth

- This concept lets you explore:
    - Indian ideas of **maya** (illusion), **kalachakra** (time wheel), **the subtle body**.
    - Ancient engineering → gears, temples, devices → proto-steampunk Indian feel.
    - Mysticism and cosmic horror → beings that exist in 9th layer → inspired by Indian myth.

---

### Final Dopamine Design

- Always escalate:
    - First just strange objects → then full layers → then reality breaking → then emotional choices.
- Give player a deep **sense of mastery** over the compass + artifacts.
- Let them shape the world in subtle ways → time echo puzzles, dream manipulations, etc.
# 🏡 PLOT FAMILIES → Diverse Professions Supporting Players

---

### FARMING-RELATED FAMILIES (keep 2–3, not all farming)

| Family Head | Profession | How they help players |
| --- | --- | --- |
| Ramdas | Elder Farmer | Farming rituals, crop cycles, wisdom about land and time |
| Bhola | Irrigation Farmer | Teaches Veer stamina → ploughing, water management |
| Shivnath | Mixed Farmer & Cattle | Teaches cow-based rituals, helps in Spirit skill progression |

---

### CRAFT & TRADE FAMILIES

| Family Head | Profession | How they help players |
| --- | --- | --- |
| Dinesh | Potter | Provides clay pots → supports irrigation missions, storage, puzzle items |
| Ramu | Carpenter | Repairs tools → teaches Veer basic crafting → helps with field structures, fences |
| Girdhar | Weaver | Makes stealth clothing → gives Veer light gear for stealth sections in jungle / castle |
| Shyam | Cart Driver / Trader | Helps Veer with delivery side missions across village → trade learning questline |

---

### SPIRITUAL & KNOWLEDGE FAMILIES

| Family Head | Profession | How they help players |
| --- | --- | --- |
| Pandit Harinarayan | Temple Priest | Teaches astrology, mantras, cosmic lore → Disha puzzle skills |
| Kavya (Pandit’s daughter) | Dancer & Musician | Teaches rhythm puzzles, sound puzzles → builds emotional arc with Veer |
| Vaidya Raghuvansh | Healer / Herbalist | Lives alone → teaches healing herbs, ritual herbs → Spirit progression & healing items |

---

### MARTIAL / DEFENSE RELATED

| Family Head | Profession | How they help players |
| --- | --- | --- |
| Captain Rudra Singh | Royal Guard | Trains Veer → combat & stamina progression → prepares for Brotherhood fights |

---

### COURTLY / POLITICAL

| Character | Role | How they help players |
| --- | --- | --- |
| Arya (King’s daughter) | Royal Ally | Helps Veer in castle infiltration → gives key info → emotional arc → supports story missions |

# 🏡 FINAL NPC MASTER LIST → What They Do → What They Teach / Know → Gameplay Use

---

## 🌾 Farming / Land NPCs

| NPC Name | Role | What they know / teach | Gameplay Use |
| --- | --- | --- | --- |
| Ramdas (elder) | Farming rituals | Plant cycles, land prayers, moon cycles | Farming quests, Spirit puzzles |
| Sita Tai (Ramdas’s wife) | Seed prep & harvest rituals | Proper seed handling, sacred seed chants | Farming buff missions |
| Bhola | Irrigation farmer | Water management, stamina advice | Stamina growth, irrigation puzzles |
| Shivnath | Cattle farmer | Rituals with cows, land fertility | Spirit skill growth, field bonuses |
| Kallu | Humble farmer | Practical field tips, emotional story | Field revival quest, bonding missions |

---

## ⚒️ Craft & Trade NPCs

| NPC Name | Role | What they know / teach | Gameplay Use |
| --- | --- | --- | --- |
| Dinesh | Potter | Pot crafting, ceremonial pots | Puzzle items, irrigation quest |
| Ramu | Carpenter | Basic tool making, repair | Crafting tools, fixing structures |
| Girdhar | Weaver | Light clothing, stealth gear | Stealth improvement quests |
| Shyam | Cart driver | Trade routes, village roads | Trade/delivery missions, map info |

---

## 🕉️ Spiritual / Knowledge NPCs

| NPC Name | Role | What they know / teach | Gameplay Use |
| --- | --- | --- | --- |
| Pandit Harinarayan | Temple priest | Astrology, mantras, cosmic stories | Disha puzzle skills, lore unlock |
| Kavya | Dancer & musician | Rhythm, music-based puzzle skills | Sound puzzles, Veer’s emotional growth |
| Vaidya Raghuvansh | Healer / herbalist | Healing herbs, ritual herbs, Navam Disha stability | Healing items, Spirit progression |

---

## ⚔️ Martial / Defense NPCs

| NPC Name | Role | What they know / teach | Gameplay Use |
| --- | --- | --- | --- |
| Captain Rudra Singh | Royal Guard Captain | Combat training, stamina growth, Brotherhood combat tips | Combat skill tree progression |
| Arya | King’s daughter | Political intel, stealth skills, castle layouts | Story progression, stealth missions |

---

## 👥 Supportive / World Building NPCs

| NPC Name | Role | What they know / teach | Gameplay Use |
| --- | --- | --- | --- |
| Lakshmi Bai | Grain cleaning & festival prep | Festival rituals, sacred food prep | Festival events, trust-building quests |
| Govind | Elder | Tells old village stories | Background lore, village flavor |
| Paro | Flower picker | Sacred flower lore | Flower gathering side quest |
| Mohan | Background farmer | Ambient life, helps during festivals | Festival crowd, world building |
| Mala | Young girl → temple helper | Child dialogue → playful | Adds life to temple scenes |
| Chotu | Village boy | Plays, leads Veer to secrets | Secret quest trigger NPC |