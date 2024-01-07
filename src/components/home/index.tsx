import React from "react";
import AppLayout from "../common/AppLayout";

//sections
import HeroSection from "./widgets/HeroSection";
import ExploreSection from "./widgets/ExploreSection/index";
import RecommendationSection from "./widgets/RecommendationSection";
const Home: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <ExploreSection />
      <RecommendationSection />
    </AppLayout>
  );
};

export default Home;
