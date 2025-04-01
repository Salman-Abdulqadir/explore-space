"use client";

import Link from "next/link";

const ExploreButton: React.FC<{
  text?: string;
}> = ({ text = "EXPLORE" }) => {
  return (
    <Link href={"/destination"}>
      <button
        className={`text-blue-900 text-level-4 w-[144px] h-[144px] md:w-[272px] md:h-[272px] rounded-full bg-white outline-[88px] cursor-pointer transition-all duration-300 ease-in-out outline-transparent hover:outline-white/10`}
      >
        {text}
      </button>
    </Link>
  );
};

export default ExploreButton;
