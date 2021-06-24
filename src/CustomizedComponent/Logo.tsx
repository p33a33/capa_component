import React from "react";
import * as Logos from "../assets";

export interface LogoProps {
  width?: number;
  height?: number;
  type?: "client" | "partner";
  color?: "black" | "white" | "primary";
}

const Logo = ({
  width,
  height,
  type = "client",
  color = "primary",
}: LogoProps) => {
  const selectedType = type === "client" ? "Client" : "Partner";
  const selectedColor =
    color === "primary" ? "Primary" : color === "black" ? "Black" : "White";
  const selectedLogo =
    Logos[`${selectedType}${selectedColor}` as keyof typeof Logos] ||
    Logos.ClientPrimary;

  return (
    <img
      src={selectedLogo}
      alt={`${selectedType}${selectedColor}`}
      width={width}
      height={height}
    />
  );
};

export default Logo;
