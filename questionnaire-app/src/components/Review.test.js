import React from "react";
import { Review } from "./Review";
import { screen, render } from "@testing-library/react";

test("loads and displays reviewed correctly", () => {
  const mockData = [
    {
      question: "Do you want to be part of QAValue",
      answer: "Yes",
    },
  ];

  render(<Review data={mockData} />);

  expect(screen.getByText("Do you want to be part of QAValue")).toBeVisible();
  expect(screen.getByText("Yes")).toBeVisible();
});
