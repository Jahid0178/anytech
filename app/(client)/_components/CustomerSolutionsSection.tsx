import React from "react";
import ProductMarketingSlider from "./ProductMarketingSlider";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";

const CustomerSolutionsSection = () => {
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="The future of finance"
          subtitle="TECHNOLOGY BUILT FOR YOU"
        />

        <ProductMarketingSlider />
      </div>
    </section>
  );
};

export default CustomerSolutionsSection;
