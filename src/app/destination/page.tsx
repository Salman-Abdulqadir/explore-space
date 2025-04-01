import { FC } from "react";
import { getDestinationData } from "./utils";
import Image from "next/image";
import DestinationTabs from "@/components/destination-tabs";

interface PageProps {
  searchParams: Promise<{ tab?: string }>;
}
const Destination: FC<PageProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const { destination, allDestinationNames } = getDestinationData(params.tab);
  return (
    <div className="h-full flex flex-col gap-space-800 pt-space-300 md:pt-space-500 px-space-300 max-w-[1110px] m-auto">
      <h5 className="text-level-5 m-auto md:m-0 md:text-level-5 flex items-center gap-space-300 justify-self-start">
        <span className="text-white/25">01</span>PICK YOUR DESTINATION
      </h5>
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center lg:flex-row gap-space-400">
          <div className="flex-1">
            <Image
              src={destination.images.png}
              alt={destination.name}
              className="w-[150px] md:w-[300px] lg:w-[480px]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-space-500 items-center lg:items-start">
            <DestinationTabs
              tabs={allDestinationNames}
              activeTab={destination.name.toUpperCase()}
            />
            <h2 className="text-level-2">{destination.name.toUpperCase()}</h2>
            <p className="text-level-9 text-blue-300 text-center lg:text-left">
              {destination.description}
            </p>
            <div className="h-[1px] w-full bg-grey"></div>
            <div className="flex items-center gap-space-300 w-full flex-col md:flex-row">
              <div className="flex-1 flex flex-col gap-space-150 items-center lg:items-start">
                <p className="text-level-7 text-blue-300">AVG. DISTANCE</p>
                <p className="text-level-6">{destination.distance}</p>
              </div>
              <div className="flex-1 flex flex-col gap-space-150 items-center lg:items-start">
                <p className="text-level-7 text-blue-300">Est. travel time</p>
                <p className="text-level-6">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
