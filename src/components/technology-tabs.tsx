import Link from "next/link";
import { FC } from "react";

type Props = FC<{
  activeTab: string;
  tabs: string[];
}>;
const TechnologyTabs: Props = ({ activeTab, tabs }) => {
  return (
    <div className="flex lg:flex-col gap-space-500 items-center">
      {tabs.map((tab, index) => {
        const active = tab.toLowerCase() === activeTab.toLowerCase();
        return (
          <Link
            key={`technology-tab-item-${tab}-${index}`}
            href={`/technology?tech=${tab.toLowerCase()}`}
          >
            <span
              className={`text-level-4 w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center border-[1px] hover:border-white ${
                active
                  ? "bg-white border-transparent text-blue-900"
                  : "bg-transparent border-white/25"
              } transition-all duration-300 ease-in-out`}
            >
              {index + 1}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default TechnologyTabs;
