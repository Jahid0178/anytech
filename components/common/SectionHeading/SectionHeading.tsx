import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center space-y-6">
      {subtitle && (
        <h6 className="text-xs md:text-base leading-6 tracking-widest text-blue-500 font-semibold uppercase">
          {subtitle}
        </h6>
      )}
      {title && (
        <h2 className="text-3xl md:text-3xl lg:text-5xl text-blue-950 font-semibold">
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionHeading;
