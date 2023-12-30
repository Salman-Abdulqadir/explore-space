import React from "react";
import AppLayout from "../common/AppLayout";

//sections
import HeroSection from "./widgets/HeroSection";
import ExploreSection from "./widgets/ExploreSection";
const Home: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <ExploreSection />
    </AppLayout>
  );
};

export default Home;
