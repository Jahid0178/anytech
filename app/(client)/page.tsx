import React from "react";
import PhilosophySection from "./_components/PhilosophySection";
import CustomerSolutionsSection from "./_components/CustomerSolutionsSection";
import WaveDivider from "@/components/svg/WaveDivider";

const HomePage = () => {
  return (
    <>
      <WaveDivider />
      <PhilosophySection />
      <CustomerSolutionsSection />
    </>
  );
};

export default HomePage;
