// All copy in this file is sourced directly from material the organisation provided.
// Nothing here is invented. Where information hasn't been supplied yet, the section
// is left structured but empty (see `comingSoon` flags) rather than filled with
// placeholder claims.

export const org = {
  name: "India Chapter of The Mars Society",
  shortName: "Mars Society India",
  affiliation:
    "The India Chapter of The Mars Society is a national platform for advancing Mars exploration, research, education, and public engagement in India.",
  heroLine: "India's contribution to humanity's journey to Mars.",
  vision: `As the India Chapter of The Mars Society, our goal is to build a national ecosystem for research, field simulation, education, collaboration, and public engagement around Mars exploration. We want to encourage the next generation of Indian scientists, engineers, researchers, entrepreneurs, and explorers to work toward humanity's future on Mars.

This is not simply a website about Mars. It is a platform through which people in India can actively contribute to the future of Mars exploration.`,
  emails: {
    primary: "antriksh.astronaut@gmail.com",
    secondary: "bhartilove1994@gmail.com",
  },
};

export const pillars = [
  {
    slug: "research",
    name: "Research",
    intro:
      "India's contribution to Mars exploration and planetary science.",
    objective:
      "To create a platform where students, researchers, engineers, scientists, and space enthusiasts across India can contribute to research related to Mars exploration and future human missions.",
    areas: [
      "Mars exploration and future human Mars missions",
      "Space science and planetary research",
      "Human factors and astronaut psychology",
      "Space medicine and bioastronautics",
      "Mars habitat and life-support concepts",
      "Robotics and rover technologies",
      "Mars analog research",
      "ISRU (In-Situ Resource Utilization)",
      "Space agriculture and closed-loop systems",
      "Student-led and independent research",
      "Research papers, projects, publications, and collaborations",
    ],
    video: "astronaut-rover-tablet",
    secondaryImage: "landed-craft-habitat-pods",
  },
  {
    slug: "analog-missions",
    name: "Analog Missions",
    intro:
      "Practical field activities and Mars-analog simulations conducted in India.",
    objective:
      "To provide hands-on experience in realistic mission environments and develop the skills, technologies, protocols, and research required for future human exploration of Mars.",
    areas: [
      "Mars analog missions in India",
      "Simulated Mars habitats",
      "EVA simulations",
      "Rover and robotic exploration",
      "Crew psychology and human-factor studies",
      "Habitat design and life-support experiments",
      "Mars soil and geology studies",
      "Food production and space-agriculture experiments",
      "Mission operations and crew protocols",
      "Student participation in analog missions",
      "Future long-duration analog missions",
    ],
    video: "astronaut-walking-away",
    secondaryImage: "habitat-construction",
  },
  {
    slug: "community",
    name: "Community",
    intro:
      "Building a national network of people interested in Mars exploration.",
    objective:
      "To build a strong Indian Mars community connecting students, researchers, engineers, educators, professionals, and space enthusiasts, while creating opportunities for them to actively participate in India's journey toward Mars.",
    areas: [
      "Student and university chapters across India",
      "Research collaborations",
      "Public outreach and science communication",
      "Workshops, lectures, and seminars",
      "Mars and space exploration events",
      "Student projects and competitions",
      "Volunteer opportunities",
      "Mentorship and networking",
      "Collaboration with universities, companies, research organisations, and space communities",
      "National and international partnerships",
    ],
    video: "astronaut-ridge-overlook",
    secondaryImage: "mars-sunrise-dunes",
  },
];

// Areas of interest offered on the join form — drawn directly from the three pillars above.
export const interestOptions = pillars.map((p) => p.name);

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pillars", label: "Pillars" },
  { href: "/projects", label: "Projects & Publications" },
  { href: "/contact", label: "Contact" },
];
