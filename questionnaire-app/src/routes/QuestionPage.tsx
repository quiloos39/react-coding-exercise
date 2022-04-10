import { useNavigate, useParams } from "react-router-dom";
import { Controller, useFormContext } from "react-hook-form";
import QUESTIONS from "../data/questions";
import Question from "../components/Question";

export function QuestionPage() {
  const { control, getValues } = useFormContext();
  const params = useParams();
  const navigate = useNavigate();
  const questionNo = Number(params.questionNo);
  const question = QUESTIONS[questionNo - 1];

  if (!question) {
    return (
      <div>
        <h1 className="font-bold">Question not found</h1>
        <p>Please click here to redirect to homepage</p>
      </div>
    );
  }

  function onNext() {
    navigate(`/question/${questionNo + 1}`);
  }

  function onReview() {
    const formData = getValues();
    navigate("/review/" + JSON.stringify(formData));
  }

  return (
    <Controller
      name={question.name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Question
          question={question}
          onChange={onChange}
          noQuestions={QUESTIONS.length}
          disabled={value === undefined}
          onNext={onNext}
          onReview={onReview}
        />
      )}
    />
  );
}
