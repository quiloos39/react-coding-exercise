import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

import { loadTheme } from "./utils";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Content } from "./components/Content";
import { QuestionPage } from "./routes/QuestionPage";
import { ReviewPage } from "./routes/ReviewPage";
import { ErrorPage } from "./routes/ErrorPage";

export default function App() {
  const form = useForm();
  // Loads dark or light theme
  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <FormProvider {...form}>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="question/1" replace />} />
            <Route path="/question/:questionNo" element={<QuestionPage />} />
            <Route path="/review/:result" element={<ReviewPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Content>
      </Layout>
    </FormProvider>
  );
}
