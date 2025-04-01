import desktopBg from "@/assets/home/background-home-desktop.jpg";
import tabletBg from "@/assets/home/background-home-tablet.jpg";
import mobileBg from "@/assets/home/background-home-mobile.jpg";
import ExploreButton from "@/components/explore-button";

export default function Home() {
  return (
    <section className="p-space-1600 h-full flex flex-col items-center justify-center">
      <div className="absolute top-0 min-h-screen w-full -z-10">
        <div
          className="sm:block md:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileBg.src})` }}
        ></div>
        <div
          className="hidden md:block lg:hidden min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${tabletBg.src})` }}
        ></div>
        <div
          className="hidden lg:block min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${desktopBg.src})` }}
        ></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-[1110px]">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h5 className="text-level-5 text-blue-300">
            SO YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-level-1">SPACE</h1>
          <h6 className="text-level-9 text-blue-300 text-center lg:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h6>
        </div>
        <div className="flex-1 mt-space-600 lg:mt-0">
          <div className="justify-self-end">
            <ExploreButton />
          </div>
        </div>
      </div>
    </section>
  );
}
