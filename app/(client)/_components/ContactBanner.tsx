import React from "react";
import Button from "@/components/Button/Button";
// import WaveLinesDesktop4 from "@/components/svg/WaveLinesDesktop4";

const ContactBanner = () => {
  return (
    <div className="container h-full flex items-center">
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Legacy no longer
        </h2>
        <p className="text-base lg:text-lg mb-6">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <Button
          variant="primary"
          size="lg"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ContactBanner;
