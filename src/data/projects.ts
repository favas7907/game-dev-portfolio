export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  mechanics: string[];
  process: string;
  techStack: string[];
  screenshots: string[];
  videoUrl?: string;
  conceptArt?: string[];
  playUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "stellar-odyssey",
    title: "Stellar Odyssey",
    tagline: "A fast-paced space combat simulator built in Unity.",
    description: "Stellar Odyssey is a high-octane space combat simulator where players pilot advanced starfighters through asteroid fields and engage in large-scale fleet battles. The project focuses on fluid flight mechanics and immersive cockpit experiences.",
    features: [
      "Six-degrees-of-freedom (6DOF) flight model",
      "Dynamic damage system for capital ships",
      "Procedural asteroid field generation",
      "Advanced AI wingmen and enemy squadrons"
    ],
    mechanics: [
      "Physics-based propulsion and inertia",
      "Target locking and missile tracking",
      "Energy management (Shields vs. Engines vs. Weapons)",
      "Customizable weapon loadouts"
    ],
    process: "Developed over 6 months, starting with a prototype of the flight model. I spent significant time refining the 'feel' of the ship handling, using PID controllers for smooth stabilization. Level design involved balancing open space with dense obstacles to create tactical depth.",
    techStack: ["Unity", "C#", "Shader Graph", "Universal Render Pipeline (URP)", "Cinemachine"],
    screenshots: [
      "https://picsum.photos/seed/space1/1200/800",
      "https://picsum.photos/seed/space2/1200/800",
      "https://picsum.photos/seed/space3/1200/800"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    playUrl: "https://itch.io",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: "neon-runner",
    title: "Neon Runner",
    tagline: "Cyberpunk endless runner with rhythm-based mechanics.",
    description: "Navigate a neon-drenched cityscape in this fast-paced runner. The game syncs obstacles and power-ups to a synthwave soundtrack, requiring players to move in time with the beat.",
    features: [
      "Rhythm-synced level generation",
      "Dynamic neon lighting and post-processing",
      "Global leaderboards",
      "Unlockable character skins"
    ],
    mechanics: [
      "Lane-based movement with dash and slide",
      "Beat-detection system for obstacle spawning",
      "Combo multiplier based on timing",
      "Power-up stacking"
    ],
    process: "The core challenge was the rhythm synchronization. I implemented a custom audio manager that calculates the current beat based on the track's BPM and time samples. This ensures that even with frame rate fluctuations, the visuals remain perfectly in sync.",
    techStack: ["Unity", "C#", "FMOD", "Post-Processing Stack v2", "Unity UI"],
    screenshots: [
      "https://picsum.photos/seed/neon1/1200/800",
      "https://picsum.photos/seed/neon2/1200/800"
    ],
    playUrl: "https://itch.io",
    codeUrl: "https://github.com"
  },
  {
    id: "shadow-realm",
    title: "Shadow Realm",
    tagline: "Atmospheric 2D puzzle platformer.",
    description: "A dark, atmospheric puzzle platformer where you manipulate light and shadow to navigate a haunted castle. The game features hand-drawn art and a haunting original score.",
    features: [
      "Light-based puzzle mechanics",
      "Hand-drawn 2D assets",
      "Atmospheric particle effects",
      "Branching narrative paths"
    ],
    mechanics: [
      "Shadow-casting light sources",
      "Object manipulation with physics",
      "Stealth elements in dark areas",
      "Environmental storytelling"
    ],
    process: "I focused heavily on the 2D lighting system. Using Unity's 2D Light system, I created puzzles that require the player to move light sources to reveal hidden paths or block enemy vision. The art style was achieved through custom shaders that blend hand-drawn textures with dynamic lighting.",
    techStack: ["Unity", "C#", "2D Lights", "Spine 2D", "Tilemap"],
    screenshots: [
      "https://picsum.photos/seed/shadow1/1200/800",
      "https://picsum.photos/seed/shadow2/1200/800"
    ],
    playUrl: "https://itch.io",
    codeUrl: "https://github.com"
  }
];
