import React from "react";
import QUESTIONS from "../data/questions";
import { useFormContext } from "react-hook-form";

export function Review() {
  const { getValues } = useFormContext();
  const formData = Object.values(getValues());
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Review</h1>
      {formData.map((data, index) => (
        <p key={index}>
          <span className="font-bold">{QUESTIONS[index].question}</span> {data}
        </p>
      ))}
    </div>
  );
}
