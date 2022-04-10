import React from "react";
import { ReactLogo } from "./ReactLogo";

export function Header() {
  return (
    <h1 className="text-center text-7xl mb-10 font-bold dark:text-white text-black">
      <ReactLogo className="inline-block animate-spin-slow" /> React Coding Exercise
    </h1>
  );
}
