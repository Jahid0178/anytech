"use client";

import animateCounter from "@/utils/animate-counter";
import React, { useEffect, useRef } from "react";

interface Props {
  data: {
    id: string;
    title: string;
    subtitle: string;
  };
}

const CounterCard = ({ data }: Props) => {
  const counterRef = useRef<HTMLDivElement>(null);

  const { title, subtitle } = data;

  useEffect(() => {
    const counterElement = counterRef.current;
    animateCounter(counterElement);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2
        className="text-8xl font-semibold bg-gradient-to-b from-[#1F80F0] to-[#0057BB] bg-clip-text text-transparent"
        data-target={title}
        ref={counterRef}
      >
        0
      </h2>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default CounterCard;
