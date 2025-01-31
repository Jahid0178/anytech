import React from "react";
import Image from "next/image";

const InnovativeFinanceSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h6 className="text-base text-blue-500 font-semibold">
              Powering The Future Of Finance
            </h6>
            <h2 className="text-3xl lg:text-6xl font-semibold text-blue-950">
              Uncovering new ways to delight customers
            </h2>
            <figure className="block md:hidden w-[76%] mx-auto !my-12 shadow-[0_23px_30px_0_#16437763]">
              <Image
                src="/images/customer.png"
                alt="Customer"
                width={600}
                height={600}
              />
            </figure>
            <p className="text-blue-950">
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>
            <p className="text-blue-950">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
          <div className="hidden md:block">
            <figure className="w-[76%] mx-auto shadow-[0_23px_30px_0_#16437763]">
              <Image
                src="/images/customer.png"
                alt="Customer"
                width={600}
                height={600}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFinanceSection;
