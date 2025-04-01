import React, { FC } from "react";
import { getCrewData } from "./utils";
import Image from "next/image";
import CrewTabs from "@/components/crew-tabs";

interface PageProps {
  searchParams: Promise<{ name?: string }>;
}

const CrewPage: FC<PageProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const { crewMember, allCrewIds } = getCrewData(params.name);
  return (
    <div className="h-full overflow-hidden flex flex-col gap-space-800 pt-space-300 md:pt-space-500 px-space-300 max-w-[1110px] m-auto">
      <h5 className="text-level-5 mx-auto md:mx-0 md:text-level-5 flex items-center gap-space-300 justify-self-start">
        <span className="text-white/25">02</span>MEET YOUR CREW
      </h5>
      <div className=" flex-1 flex flex-col gap-space-400 lg:flex-row text-center lg:text-left">
        <div className="flex-1 flex flex-col gap-space-500 pb-space-500 items-center lg:items-start">
          <div className="flex-1 flex flex-col justify-center gap-space-300">
            <div className="space-y-space-200">
              <h4 className="text-level-4 text-white/50">
                {crewMember.role.toUpperCase()}
              </h4>
              <h3 className="text-level-3 ">{crewMember.name.toUpperCase()}</h3>
            </div>
            <p className="text-level-9 text-blue-300">{crewMember.bio}</p>
          </div>
          <CrewTabs tabs={allCrewIds} activeTab={crewMember.id} />
        </div>
        <div className="flex-1 mx-auto">
          <Image
            src={crewMember.images.webp}
            alt={crewMember.name}
            // className="w-[271.27px] h-[340px] md:w-[446.74px] md:h-[560px] lg:w-[539.35px] lg:h-[676px]"
            className="h-[340px] md:h-[440px] lg:h-[540px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
