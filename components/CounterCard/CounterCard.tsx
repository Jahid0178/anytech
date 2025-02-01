"use client";

import React, { RefObject, useRef } from "react";
import { useCountUp } from "react-countup";

interface Props {
  data: {
    id: string;
    count: number;
    title: string;
    prefix?: string;
    suffix?: string;
  };
}

const CounterCard = ({ data }: Props) => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const { title, count, prefix, suffix } = data;

  useCountUp({
    ref: counterRef as RefObject<HTMLHeadingElement>,
    start: 0,
    end: count,
    duration: 1.5,
    prefix,
    suffix,
    enableScrollSpy: true,
  });

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2
        className="text-8xl font-semibold bg-gradient-to-b from-[#1F80F0] to-[#0057BB] bg-clip-text text-transparent"
        ref={counterRef}
      >
        0
      </h2>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default CounterCard;
