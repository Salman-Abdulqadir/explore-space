import React from "react";
import AppLayout from "../common/AppLayout";

//sections
import HeroSection from "./widgets/HeroSection";
const Home: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
    </AppLayout>
  );
};

export default Home;
