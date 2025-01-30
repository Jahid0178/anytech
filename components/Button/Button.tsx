import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button = ({
  children,
  asLink = false,
  href = "#",
  size = "md",
  variant = "primary",
  className,
}: Props) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded font-medium transition-colors group";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border-2 border-white text-white hover:text-blue-500 hover:bg-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-3 py-2.5 lg:px-6 lg:py-3 text-lg",
  };

  const styles = [
    className,
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
  ].join(" ");
  return (
    <>
      {asLink ? (
        <Link
          href={href}
          className={styles}
        >
          {children}{" "}
          <ChevronRightIcon className="translate-x-0 group-hover:translate-x-2 transition-all" />
        </Link>
      ) : (
        <button className={styles}>{children}</button>
      )}
    </>
  );
};

export default Button;
