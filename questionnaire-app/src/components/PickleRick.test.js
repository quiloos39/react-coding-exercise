import React from "react";
import { PickleRick } from "../components/PickleRick";
import { render, screen } from "@testing-library/react";

beforeAll(() => {
  localStorage.clear();
});

test("pickle rick renders and test theme switching", () => {
  render(<PickleRick />);
  const pickleRick = screen.getByTestId("pickle-rick");
  expect(pickleRick).toBeInTheDocument();
  pickleRick.click();
  expect(localStorage.getItem("theme")).toEqual("dark");
  pickleRick.click();
  expect(localStorage.getItem("theme")).toEqual("light");
});
