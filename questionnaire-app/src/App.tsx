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
  const [showReview, setShowReview] = useState<boolean>(false);
  const form = useForm();

  function onClick() {
    if (questionIndex < QUESTIONS.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowReview(true);
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  const formOrReview = showReview ? (
    <Review />
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
