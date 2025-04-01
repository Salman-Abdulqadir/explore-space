import { ReactNode } from "react";
import crewMobileBg from "@/assets/crew/background-crew-mobile.jpg";
import crewTabletBg from "@/assets/crew/background-crew-tablet.jpg";
import crewDesktopBg from "@/assets/crew/background-crew-desktop.jpg";

const CrewLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex-1 overflow-hidden">
      <div className="absolute top-0 min-h-screen w-full -z-10">
        <div
          className="xs:block md:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${crewMobileBg.src})` }}
        ></div>
        <div
          className="hidden md:block lg:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${crewTabletBg.src})` }}
        ></div>
        <div
          className="hidden lg:block min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${crewDesktopBg.src})` }}
        ></div>
      </div>
      {children}
    </section>
  );
};

export default CrewLayout;
