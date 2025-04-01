import React, { FC } from "react";
import { getTechnology } from "./utils";
import TechnologyTabs from "@/components/technology-tabs";

type PageProps = {
  searchParams: Promise<{ tech?: string }>;
};
const TechnologyPage: FC<PageProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const { technologyData, allTechnologyIds } = getTechnology(params.tech);
  return (
    <div className="h-full overflow-hidden flex flex-col gap-space-800 pt-space-300 pb-space-300 md:pt-space-500 px-space-300 max-w-[1275px] ml-auto ">
      <h5 className="text-level-5 mx-auto md:mx-0 md:text-level-5 flex items-center gap-space-300 justify-self-start">
        <span className="text-white/25">03</span>SPACE LAUNCH 101
      </h5>
      <div
        className={`h-[258px] md:h-[356px] bg-cover bg-center bg-no-repeat lg:hidden`}
        style={{
          backgroundImage: `url(${technologyData.images.landscape.src})`,
        }}
      ></div>
      <div className="flex flex-1 gap-space-400 items-center ">
        <div className="flex-[1.1] flex gap-space-800 items-center h-full flex-col lg:flex-row">
          <TechnologyTabs
            tabs={allTechnologyIds}
            activeTab={technologyData.id}
          />
          <div className="flex-1 space-y-space-300 text-center lg:text-left">
            <div className="space-y-space-200">
              <h4 className="text-level-4 text-white/50">THE TERMINOLOGY...</h4>
              <h3 className="text-level-3 ">
                {technologyData.name.toUpperCase()}
              </h3>
            </div>
            <p className="text-level-9 text-blue-300">
              {technologyData.description}
            </p>
          </div>
        </div>
        <div
          className={`flex-1 h-full bg-cover bg-center bg-no-repeat hidden lg:block`}
          style={{
            backgroundImage: `url(${technologyData.images.portrait.src})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechnologyPage;
