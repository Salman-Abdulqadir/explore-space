import Link from "next/link";
import { FC } from "react";

type Props = FC<{
  activeTab: string;
  tabs: string[];
}>;
const CrewTabs: Props = ({ activeTab, tabs }) => {
  return (
    <div className="flex gap-space-500 items-center">
      {tabs.map((tab, index) => {
        const active = tab.toLowerCase() === activeTab.toLowerCase();
        return (
          <Link
            key={`crew-tab-item-${tab}-${index}`}
            href={`/crew?name=${tab.toLowerCase()}`}
          >
            <span
              className={`block w-[15px] h-[15px] rounded-full  transition-all duration-300 ${
                active ? "bg-white" : "bg-grey/[17%] hover:bg-grey"
              }`}
            ></span>
          </Link>
        );
      })}
    </div>
  );
};

export default CrewTabs;
