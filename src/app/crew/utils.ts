import douglasPng from "@/assets/crew/image-douglas-hurley.png";
import douglasWebp from "@/assets/crew/image-douglas-hurley.webp";
import markPng from "@/assets/crew/image-mark-shuttleworth.png";
import markWebp from "@/assets/crew/image-mark-shuttleworth.webp";
import victorPng from "@/assets/crew/image-victor-glover.png";
import victorWebp from "@/assets/crew/image-victor-glover.webp";
import anoushehPng from "@/assets/crew/image-anousheh-ansari.png";
import anoushehWebp from "@/assets/crew/image-anousheh-ansari.webp";

export type Crew = {
  id: string;
  name: string;
  images: Record<string, string>;
  role: string;
  bio: string;
};

const crew = [
  {
    id: "douglas-hurley",
    name: "Douglas Hurley",
    images: {
      png: douglasPng,
      webp: douglasWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: "mark-shuttleworth",
    name: "Mark Shuttleworth",
    images: {
      png: markPng,
      webp: markWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: "victor-glover",
    name: "Victor Glover",
    images: {
      png: victorPng,
      webp: victorWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: "anousheh-ansari",
    name: "Anousheh Ansari",
    images: {
      png: anoushehPng,
      webp: anoushehWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const getCrewData = (name: string | undefined) => {
  const allCrewIds = crew.map((member) => member.id);
  const crewMember =
    (name &&
      crew.find((member) => member.id.toLowerCase() === name.toLowerCase())) ||
    crew[0];

  return { crewMember, allCrewIds };
};
