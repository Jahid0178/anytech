import React from "react";
import PhilosophySection from "./_components/PhilosophySection";
import CustomerSolutionsSection from "./_components/CustomerSolutionsSection";
import WaveDivider from "@/components/svg/WaveDivider";
import TrustedPartnersSection from "./_components/TrustedPartnersSection";
import ContactBanner from "./_components/ContactBanner";

const HomePage = () => {
  return (
    <>
      <WaveDivider />
      <PhilosophySection />
      <CustomerSolutionsSection />
      <WaveDivider />
      <TrustedPartnersSection />
      <ContactBanner />
    </>
  );
};

export default HomePage;
