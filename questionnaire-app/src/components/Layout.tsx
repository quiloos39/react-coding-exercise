import React from "react";
import { PickleRick } from "./PickleRick";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="dark:bg-gray-800 bg-white">
      <PickleRick />
      <div className="min-h-screen container flex justify-center items-center">
        <div>{children}</div>
      </div>
    </div>
  );
}
