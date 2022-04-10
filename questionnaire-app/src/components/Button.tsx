import React from "react";

export interface ButtonProps {
  children: string;
  onClick?: () => void;
  extraClass?: React.HTMLAttributes<HTMLButtonElement>["className"];
  disabled?: boolean;
}

export interface CustomButtonProps {
  onClick: ButtonProps["onClick"];
  extraClass?: ButtonProps["extraClass"];
  disabled?: ButtonProps["disabled"];
}

export function Button({
  children,
  extraClass = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={"py-2 px-20 " + extraClass}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
