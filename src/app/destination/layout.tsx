import { ReactNode } from "react";
import destinationMobileBg from "@/assets/destination/background-destination-mobile.jpg";
import destinationTabletBg from "@/assets/destination/background-destination-tablet.jpg";
import destinationDesktopBg from "@/assets/destination/background-destination-desktop.jpg";

const DestinationLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="h-full">
      <div className="absolute top-0 min-h-screen w-full -z-10">
        <div
          className="sm:block md:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${destinationMobileBg.src})` }}
        ></div>
        <div
          className="hidden md:block lg:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${destinationTabletBg.src})` }}
        ></div>
        <div
          className="hidden lg:block min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${destinationDesktopBg.src})` }}
        ></div>
      </div>
      {children}
    </section>
  );
};

export default DestinationLayout;
