import Link from "next/link";
import { FC } from "react";

type Props = FC<{
  activeTab: string;
  tabs: string[];
}>;
const DestinationTabs: Props = ({ activeTab, tabs }) => {
  return (
    <div className="flex gap-space-400 items-center">
      {tabs.map((tab, index) => {
        const active = tab.toLowerCase() === activeTab.toLowerCase();
        return (
          <Link
            key={`destination-tab-item-${tab}-${index}`}
            href={`/destination?tab=${tab.toLowerCase()}`}
          >
            <span
              className={`text-level-8 pb-space-150 border-b-[3px] transition-all duration-300 ${
                active
                  ? "border-white"
                  : "text-blue-300 border-transparent hover:text-white hover:border-white/50"
              }`}
            >
              {tab}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default DestinationTabs;
