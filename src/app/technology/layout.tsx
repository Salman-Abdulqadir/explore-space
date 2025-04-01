import { ReactNode } from "react";
import technologyMobileBg from "@/assets/technology/background-technology-mobile.jpg";
import technologyTabletBg from "@/assets/technology/background-technology-tablet.jpg";
import technologyDesktopBg from "@/assets/technology/background-technology-desktop.jpg";

const TechnologyLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex-1 overflow-hidden">
      <div className="absolute top-0 min-h-screen w-full -z-10">
        <div
          className="sm:block md:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${technologyMobileBg.src})` }}
        ></div>
        <div
          className="hidden md:block lg:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${technologyTabletBg.src})` }}
        ></div>
        <div
          className="hidden lg:block min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${technologyDesktopBg.src})` }}
        ></div>
      </div>
      {children}
    </section>
  );
};

export default TechnologyLayout;
