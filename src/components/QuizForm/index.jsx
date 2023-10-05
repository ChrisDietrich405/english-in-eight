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

  return (
    <Quiz
      questionsArray={questionsArray}
      setQuiz={setQuiz}
      title="Take a Quiz!"
      questions={quiz}
      shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
    ></Quiz>
  );
}
