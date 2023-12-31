import React from "react";
import AppLayout from "../common/AppLayout";

//sections
import HeroSection from "./widgets/HeroSection";
import ExploreSection from "./widgets/ExploreSection/index";
import RecommendationSection from "./widgets/RecommendationSection";
import Footer from "./widgets/Footer";
const Home: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <ExploreSection />
      <RecommendationSection />
      <Footer />
    </AppLayout>
  );
};

export default Home;
