import React from "react";
import { Button, CustomButtonProps } from "./Button";

export function ReviewButton({ onClick, disabled, extraClass = "" }: CustomButtonProps) {
  return (
    <Button extraClass={"bg-green-600 disabled:bg-green-400 hover:bg-green-700 text-white " + extraClass} onClick={onClick} disabled={disabled}>
      Review
    </Button>
  );
}
