import moonPng from "@/assets/destination/image-moon.png";
import moonWebp from "@/assets/destination/image-moon.webp";
import marsPng from "@/assets/destination/image-mars.png";
import marsWebp from "@/assets/destination/image-mars.webp";
import europaPng from "@/assets/destination/image-europa.png";
import europaWebp from "@/assets/destination/image-europa.webp";
import titanPng from "@/assets/destination/image-titan.png";
import titanWebp from "@/assets/destination/image-titan.webp";

export type Destination = {
  name: string;
  images: Record<string, string>;
  description: string;
  distance: string;
  travel: string;
};

const destinations = [
  {
    name: "Moon",
    images: {
      png: moonPng,
      webp: moonWebp,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: marsPng,
      webp: marsWebp,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: europaPng,
      webp: europaWebp,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: titanPng,
      webp: titanWebp,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
export const getDestinationData = (tab: string | undefined) => {
  return {
    destination:
      destinations.find(
        (des) => des.name.toLowerCase() === tab?.toLowerCase()
      ) || destinations[0],
    allDestinationNames: destinations.map((dest) => dest.name.toUpperCase()),
  };
};
