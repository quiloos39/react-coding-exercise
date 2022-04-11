import React from "react";
import { render, screen } from "@testing-library/react";
import Question from "../components/Question";

test("question number being equal to total number of questions", () => {
  render(
    <Question
      question={{
        type: "text",
        questionNo: 1,
      }}
      noQuestions={1}
    />
  );
  expect(screen.getByText("Review")).toBeInTheDocument();
});

test("question number being not equal to total number of questions", () => {
  render(
    <Question
      question={{
        type: "text",
        questionNo: 1,
      }}
      noQuestions={2}
    />
  );
  expect(screen.getByText("Next")).toBeInTheDocument();
});

test("question if type is text shows text", () => {
  render(
    <Question
      question={{
        type: "text",
        questionNo: 1,
      }}
      noQuestions={2}
    />
  );
  expect(screen.getByTestId("text-input")).toBeInTheDocument();
});

test("question if type is checkbox shows checkbox", () => {
  render(
    <Question
      question={{
        type: "checkbox",
        questionNo: 1,
        answers: [],
      }}
      noQuestions={2}
    />
  );
  expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
});

test("question if type is multivalue shows multivalue", () => {
  render(
    <Question
      question={{
        type: "multiplechooice",
        questionNo: 1,
        answers: [],
      }}
      noQuestions={2}
    />
  );
  expect(screen.getByTestId("multiple-input")).toBeInTheDocument();
});
