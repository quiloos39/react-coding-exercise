import React, { useState } from "react";
import { toggleTheme } from "../utils";
import Rick from "../images/pickle-rick.png";
export function PickleRick() {
  // Used for monitoring user clicks on "Pickle Rick", user can only click once
  const [clicked, setClicked] = useState<boolean>(false);
  function onClick() {
    if (!clicked) {
      setClicked(true);
    }
    toggleTheme();
  }
  return (
    <img
      alt=""
      src={Rick}
      className={
        "fixed right-10 bottom-5 cursor-pointer h-24 w-24 " +
        (!clicked ? "animate-bounce" : "")
      }
      onClick={onClick}
    />
  );
}
