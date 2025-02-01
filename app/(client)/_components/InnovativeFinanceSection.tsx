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
            <figure className="block md:hidden w-[76%] mx-auto !my-12 shadow-[0_23px_30px_0_#16437763] relative">
              <Image
                src="/images/customer.png"
                alt="Customer"
                width={600}
                height={600}
              />
              <figure className="absolute top-[20%] left-[5%] animate-move-up-down">
                <Image
                  src={"/svg/card.svg"}
                  alt="Card"
                  width={50}
                  height={50}
                />
              </figure>
              <figure className="absolute top-[40%] left-[20%] animate-move-up-down">
                <Image
                  src={"/svg/analytics.svg"}
                  alt="Analytics"
                  width={60}
                  height={60}
                />
              </figure>
              <figure className="absolute top-[10%] right-[5%] animate-move-up-down">
                <Image
                  src={"/svg/bank.svg"}
                  alt="Bank"
                  width={70}
                  height={70}
                />
              </figure>
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
          <div className="hidden md:block relative">
            <figure className="absolute top-0 left-0 right-0 bottom-0 z-0">
              <Image
                src={"/svg/WaveLinesMobile2.svg"}
                alt="Wave line mobile"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </figure>
            <figure className="relative w-[76%] mx-auto my-auto shadow-[0_23px_30px_0_#16437763] z-10">
              <Image
                src="/images/customer.png"
                alt="Customer"
                width={800}
                height={800}
                className="w-full h-full"
              />
            </figure>
            <figure className="absolute top-[20%] left-[5%] animate-move-up-down z-30">
              <Image
                src={"/svg/card.svg"}
                alt="Card"
                width={80}
                height={80}
              />
            </figure>
            <figure className="absolute top-[40%] left-[20%] animate-move-up-down z-30">
              <Image
                src={"/svg/analytics.svg"}
                alt="Analytics"
                width={100}
                height={100}
              />
            </figure>
            <figure className="absolute top-[10%] right-[5%] animate-move-up-down z-30">
              <Image
                src={"/svg/bank.svg"}
                alt="Bank"
                width={95}
                height={95}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFinanceSection;
