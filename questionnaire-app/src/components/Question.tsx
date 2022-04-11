import { useState } from "react";
import { QuestionType } from "../data/questions";
import { NextButton } from "./NextButton";
import { ReviewButton } from "./ReviewButton";

interface DefaultInputProps {
  onChange: (value: string) => void;
}

interface MultipleQuestionProps extends DefaultInputProps {
  answers: string[];
}

function MultipleInput({ answers, onChange }: MultipleQuestionProps) {
  const [selected, setSelected] = useState<string>("Select");

  function handleChange(value: string) {
    setSelected(value);
    onChange(value);
  }

  return (
    <select onChange={(e) => handleChange(e.target.value)} value={selected} data-testid="multiple-input">
      <option disabled>Select</option>
      {answers.map((answer) => (
        <option key={answer}>{answer}</option>
      ))}
    </select>
  );
}

interface TextQuestionProps extends DefaultInputProps {}

function TextInput({ onChange }: TextQuestionProps) {
  return <input className="border px-2 py-2" onChange={(e) => onChange(e.target.value)} data-testid="text-input" />;
}

interface CheckboxQuestionProps extends DefaultInputProps {
  answers: string[];
}

function CheckboxInput({ answers, onChange }: CheckboxQuestionProps) {
  const [selected, setSelected] = useState<string>("");

  function handleChange(value: string) {
    setSelected(value);
    onChange(value);
  }

  return (
    <div data-testid="checkbox-input">
      {answers.map((answer) => (
        <div key={answer} className="space-x-2">
          <label>{answer}</label>
          <input type="checkbox" onChange={() => handleChange(answer)} checked={selected === answer} />
        </div>
      ))}
    </div>
  );
}

interface QuestionProps extends DefaultInputProps {
  question: QuestionType;
  noQuestions: number;
  disabled: boolean;
  onNext: () => void;
  onReview: () => void;
}

export default function Question({ question, noQuestions, onChange, disabled, onNext, onReview }: QuestionProps) {
  let answer;

  if (question.type === "checkbox") {
    answer = <CheckboxInput answers={question.answers} onChange={onChange} />;
  } else if (question.type === "text") {
    answer = <TextInput onChange={onChange} />;
  } else if (question.type === "multiplechooice") {
    answer = <MultipleInput onChange={onChange} answers={question.answers} />;
  }

  const nextOrReviewBtn =
    question.questionNo === noQuestions ? (
      <ReviewButton onClick={onReview} disabled={disabled} />
    ) : (
      <NextButton onClick={onNext} disabled={disabled} />
    );

  return (
    <div>
      <p className="font-bold">{`Question: ${question.questionNo}/${noQuestions}`}</p>
      <hr className="my-5" />
      <p className="font-bold">{question.question}</p>
      <div className="mb-5">{answer}</div>
      {nextOrReviewBtn}
    </div>
  );
}
