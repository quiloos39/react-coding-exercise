import React from "react";
import { useFormContext } from "react-hook-form";
import { Review } from "../components/Review";
import QUESTIONS from "../data/questions";

export function ReviewPage() {
  const { getValues } = useFormContext();
  const formData = Object.values(getValues());
  const data = QUESTIONS.map((question, index) => ({
    question: question.question,
    answer: formData[index],
  }));

  return <Review data={data} />;
}
