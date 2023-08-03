"use client";
import { useState } from "react";
import SelectAnswer from "../SelectAnswer";

import styles from "./styles.module.css";

function AnswerIcon({ isAnswered }) {
  if (!isAnswered) {
    return (
      <>
        <span
          style={{ marginLeft: "10px", color: "green" }}
          role="img"
          aria-label="dog"
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

  return (
    <div className="quiz-container">
      <form onSubmit={submit} onReset={reset}>
        <div className="quiz-title">
          <h4>{props.title}</h4>
        </div>
        <ol className="questions-and-answers">
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
                {question.possibleAnswers.map((possibleAnswer, index) => {
                  return (
                    <SelectAnswer
                      key={`answer${index}`}
                      submitted={submitted}
                      onClick={() => select(possibleAnswer, i)}
                      possibleAnswer={possibleAnswer}
                      answers={answers}
                      i={i}
                      selectedAnswerTexts={selectedAnswerTexts}
                      isAnsweredCorrectly={i in answers && answers[i] === true}
                      index={index}
                    />
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
        <div className="quiz-buttons">
          <button>Check your answers</button>
          <button className="btn btn-secondary" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
