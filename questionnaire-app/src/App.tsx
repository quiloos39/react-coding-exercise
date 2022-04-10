import React, { useEffect, useState } from "react";
import { loadTheme } from "./utils";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Content } from "./components/Content";
import QUESTIONS from "./data/questions";
import { FormProvider, useForm } from "react-hook-form";
import { Question } from "./components/Question";
import { Review } from "./components/Review";

export default function App() {
  const [questionIndex, setQuestionIndex] = useState<number>(1); // Keeps track of question number
  const [showReview, setShowReview] = useState<boolean>(false); // Displays review component depending on value
  const form = useForm();

  // Next and review button handlers
  function onClick() {
    // If we didn't react to end we will increase question number
    if (questionIndex < QUESTIONS.length) {
      setQuestionIndex(questionIndex + 1);
      // If we reached to end will show review
    } else {
      setShowReview(true);
    }
  }

  // Loads dark or light theme
  useEffect(() => {
    loadTheme();
  }, []);

  // Form answers
  const answers = Object.values(form.getValues());

  // Depending on showReview will display either form or review component
  const formOrReview = showReview ? (
    <Review
      data={QUESTIONS.map((question, index) => ({
        question: question.question,
        answer: answers[index],
      }))}
    />
  ) : (
    <form>
      {QUESTIONS.map((question) => {
        return (
          <Question
            key={question.questionNo}
            question={question}
            onClick={onClick}
            hidden={questionIndex !== question.questionNo}
            noQuestions={QUESTIONS.length}
          />
        );
      })}
    </form>
  );

  return (
    <Layout>
      <Header />
      <Content>
        <FormProvider {...form}>{formOrReview}</FormProvider>
      </Content>
    </Layout>
  );
}
