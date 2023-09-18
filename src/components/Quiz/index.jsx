"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import SelectAnswer from "../SelectAnswer";

import styles from "./styles.module.css";

function AnswerIcon({ isAnswered }) {
  if (!isAnswered) {
    return (
      <>
        <span
          style={{ marginLeft: "10px", color: "green" }}
          role="img"
          aria-label="sad face"
        >
          Not answered 😓
        </span>
      </>
    );
  }
  return <></>;
}

export default function Quiz(props) {
  const [answers, setAnswers] = useState({});
  const [selectedAnswerTexts, setSelectedAnswerTexts] = useState({});

  const select = (answer, i) => {
    setAnswers({
      ...answers,
      ...{ [i]: "correctAnswer" in answer && answer.correctAnswer },
    });
    setSelectedAnswerTexts({ ...selectedAnswerTexts, [i]: answer });
  };

  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = (e) => {
    setAnswers({});
    setSubmitted(false);
  };

  const getRandomQuestions = () => {
    reset();
    return props.callback;
  };

  return (
    <div className={styles.quiz_container}>
      <form onSubmit={submit} onReset={reset}>
        <div className={styles.quiz_title}>
          <h4>{props.title}</h4>
          <h1>{props.explanation}</h1>
        </div>
        <ol className={styles.questions_and_answers}>
          {props.questions.map((question, i) => (
            <li key={i}>
              {`${i + 1}. ${question.title}`}

              {submitted === true && (
                <AnswerIcon
                  className="answer-icon"
                  isAnswered={i in answers}
                  isAnsweredCorrectly={i in answers && answers[i] === true}
                />
              )}
              <ul>
                {question.possibleAnswersAndExplanation.map(
                  (possibleAnswer, index) => {
                    return (
                      <SelectAnswer
                        explanation={question.explanation}
                        key={`answer${index}`}
                        submitted={submitted}
                        onClick={() => select(possibleAnswer, i)}
                        possibleAnswer={possibleAnswer}
                        answers={answers}
                        i={i}
                        selectedAnswerTexts={selectedAnswerTexts}
                        isAnsweredCorrectly={
                          i in answers && answers[i] === true
                        }
                        index={index}
                      />
                    );
                  }
                )}
              </ul>
            </li>
          ))}
        </ol>
        <div className={styles.quiz_buttons}>
          <Button
            variant="contained"
            type="submit"
            style={{ marginRight: "20px" }}
          >
            Check your answers
          </Button>
          <Button variant="contained" type="reset">
            Reset
          </Button>
          {props.shouldShowNewQuestionsBtn && (
            <Button
              type="reset"
              style={{ marginLeft: "20px" }}
              variant="contained"
              onClick={props.callback}
            >
              Try More Questions
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
