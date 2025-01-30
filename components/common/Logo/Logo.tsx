import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoBlue, LogoWhite } from "@/constants/constants";

interface Props {
  variant: "white" | "blue";
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({
  variant = "white",
  className,
  width = 150,
  height = 100,
}: Props) => {
  return (
    <Link href="/">
      <Image
        src={variant === "white" ? LogoWhite : LogoBlue}
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

export default Logo;
