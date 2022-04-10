interface QuestionInterface {
  question: string;
  questionNo: number;
  name: string;
}

export interface CheckboxQuestionInterface extends QuestionInterface {
  type: "checkbox";
  answers: string[];
}

export interface TextQuestionInterface extends QuestionInterface {
  type: "text";
  placeholder: string;
}

export interface MultipleQuestionInterface extends QuestionInterface {
  type: "multiplechooice";
  answers: string[];
}

export type QuestionType = CheckboxQuestionInterface | TextQuestionInterface | MultipleQuestionInterface;

const QUESTIONS: QuestionType[] = [
  {
    questionNo: 1,
    type: "checkbox",
    name: "excited",
    question: "Are you excited to be part of QAValue team ?",
    answers: ["Yes definitely", "Yes", "YESS!!"],
  },
  {
    questionNo: 2,
    type: "text",
    name: "aspiration",
    question: "What is your favorite game ?",
    placeholder: "Age of Empires 2",
  },
  {
    questionNo: 3,
    type: "multiplechooice",
    name: "creator",
    question: "Who is your favorite ?",
    answers: ["Eduardo Espinheira", "Mark Zuckerberg", "Jack Dorsey", "Jordan Walke"],
  },
];

export default QUESTIONS;
