import React from "react";

interface ContentProps {
  children: JSX.Element | JSX.Element[];
}
export function Content({ children }: ContentProps) {
  return <div className="bg-white shadow-lg p-10">{children}</div>;
}
