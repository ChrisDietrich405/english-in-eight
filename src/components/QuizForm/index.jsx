"use client";
import { useState, useEffect } from "react";

import Quiz from "@/src/components/Quiz";

export default function QuizForm({ questionsArray }) {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const questionsVar = questionsArray.splice(0, 10);
    setQuiz(questionsVar);
  }, []);

  const secondSetQuestions = () => {
    const questionsVar = questionsArray.splice(10);
    return questionsVar;
  };

  return (
    <Quiz
      setQuiz={setQuiz}
      title="Take a Quiz!"
      questions={quiz}
      secondSetQuestions={secondSetQuestions}
      shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
    ></Quiz>
  );
}