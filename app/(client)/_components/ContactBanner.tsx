import React from "react";
import Button from "@/components/Button/Button";
import WaveLinesDesktop4 from "@/components/svg/WaveLinesDesktop4";

const ContactBanner = () => {
  return (
    <section className="bg-gradient-to-l from-cyan-500 to-blue-500 cta-clip-mobile sm:cta-clip-tablet xl:cta-clip-desktop h-[60vh] lg:h-[530px] text-white relative">
      <div className="container h-full flex items-center">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Legacy no longer
          </h2>
          <p className="text-base lg:text-lg mb-6">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <Button
            variant="primary"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0">
        <WaveLinesDesktop4 />
      </div>
    </section>
  );
};

export default ContactBanner;
