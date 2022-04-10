import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CheckboxQuestionInterface, MultipleQuestionInterface, QuestionType, TextQuestionInterface } from "../data/questions";
import { NextButton } from "./NextButton";
import { ReviewButton } from "./ReviewButton";

interface MultipleQuestionProps {
  question: MultipleQuestionInterface;
}

function MultipleQuestion({ question }: MultipleQuestionProps) {
  const { control } = useFormContext();
  return (
    <div>
      <p>{question.question}</p>
      <Controller
        control={control}
        name={question.name}
        render={({ field: { onChange, value } }) => (
          <select defaultValue="Select" onChange={onChange} value={value}>
            <option disabled>Select</option>
            {question.answers.map((answer) => (
              <option key={answer}>{answer}</option>
            ))}
          </select>
        )}
      />
    </div>
  );
}

interface TextQuestionProps {
  question: TextQuestionInterface;
}

function TextQuestion({ question }: TextQuestionProps) {
  const { register } = useFormContext();
  return (
    <div>
      <p>{question.question}</p>
      <input {...register(question.name, { value: "Age of Empires 2" })} className="border px-2 py-2" />
    </div>
  );
}

interface CheckboxQuestionProps {
  question: CheckboxQuestionInterface;
}

function CheckboxQuestion({ question }: CheckboxQuestionProps) {
  const { control } = useFormContext();

  return (
    <div>
      <p>{question.question}</p>
      <Controller
        name={question.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div>
            {question.answers.map((answer) => (
              <div key={answer} className="space-x-2">
                <label>{answer}</label>
                <input type="checkbox" onChange={() => onChange(answer)} checked={answer === value} />
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
}

interface QuestionProps {
  question: QuestionType;
  hidden: boolean;
  onClick: () => void;
  noQuestions: number;
}

export function Question({ question, hidden, onClick, noQuestions }: QuestionProps) {
  const { watch } = useFormContext();

  const btnDisabled = watch(question.name) === undefined;

  const nextOrReviewBtn =
    noQuestions === question.questionNo ? (
      <ReviewButton onClick={onClick} disabled={btnDisabled} />
    ) : (
      <NextButton onClick={onClick} disabled={btnDisabled} />
    );

  let questionComponent;

  if (question.type === "checkbox") {
    questionComponent = <CheckboxQuestion question={question} />;
  } else if (question.type === "text") {
    questionComponent = <TextQuestion question={question} />;
  } else if (question.type === "multiplechooice") {
    questionComponent = <MultipleQuestion question={question} />;
  }

  return (
    <div className={hidden ? "hidden" : "block"}>
      <div className="mb-5">{questionComponent}</div>
      {nextOrReviewBtn}
    </div>
  );
}
