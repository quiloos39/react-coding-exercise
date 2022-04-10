import React from "react";
import { Button, CustomButtonProps } from "./Button";

export function NextButton({ onClick, disabled, extraClass = "" }: CustomButtonProps) {
  return (
    <Button extraClass={"bg-blue-600 disabled:bg-blue-400 hover:bg-blue-700 text-white " + extraClass} onClick={onClick} disabled={disabled}>
      Next
    </Button>
  );
}
