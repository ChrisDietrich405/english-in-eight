"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

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
  const [disable, setDisable] = useState(false);
  const [answers, setAnswers] = useState({});
  const [selectedAnswerTexts, setSelectedAnswerTexts] = useState({});
  const [cssProperties, setCssProperties] = useState({
    backgroundColor: "#1976d2;",
  });

  const [numberOfQuestionsCorrect, setNumberOfQuestionsCorrect] =
    useState(null);

  const topOfQuizRef = useRef(null);

  const select = (answer, i) => {
    setAnswers({
      ...answers,
      [i]: "correctAnswer" in answer && answer.correctAnswer,
    });
    setSelectedAnswerTexts({ ...selectedAnswerTexts, [i]: answer });
  };

  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const newEvent = Array.from(event.target);
    console.log(newEvent);

    const checkedAnswers = newEvent.filter((item) => item.checked);
    const allQuestions = checkedAnswers.filter((entireQuestionObject) => {
      const elementId = entireQuestionObject.id.match(/\d*$/g);
      const question = props.questions.find(
        (item) => item.id.toString() === elementId[0]
      );

      let rightAnswer = "";

      question.possibleAnswers.forEach((answer) => {
        if (answer.correctAnswer) {
          rightAnswer = answer.title;
        }
      });

      return rightAnswer === entireQuestionObject.value;
    });

    setNumberOfQuestionsCorrect(allQuestions.length);

    toast(
      `You got ${allQuestions.length} out of ${props.questions.length} correct.`,
      {
        autoClose: 5000,
        type: "success",
      }
    );

    setSubmitted(true);
  };

  const reset = (e) => {
    setAnswers({});
    setSubmitted(false);
  };

  const scrollToTop = () => {
    if (topOfQuizRef.current) {
      const yPosition = document.getElementById("scrollTo");
      const position = yPosition.offsetTop;
      window.scrollTo(0, position - 64);
    }
    setDisable(true);
  };

  const loadNextSetOfQuestions = () => {
    props.setQuiz(props.questionsArray);
    scrollToTop();
    setCssProperties({
      backgroundColor: "#F0F0F0",
    });
  };

  return (
    <div id="scrollTo" ref={topOfQuizRef}>
      <div className={styles.quiz_container}>
        <form onSubmit={submit} onReset={reset}>
          <div className={styles.quiz_title}>
            <h4>{props.title}</h4>
            {props.subtitle ? <p>{props.subtitle} </p> : ""}
            <h1>{props.explanation}</h1>
          </div>
          <ol className={styles.questions_and_answers}>
            {props.questions.map((question, i) => {
              return (
                <li key={i} className={styles.question}>
                  {`${question.id}. ${question.title}`}

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
                          show={
                            index === 1 &&
                            //this is only to show it after the second answer
                            //we are mapping through the two answers
                            //if it's the first answer then it will return false and if it's the second it will return true. We need two true answers
                            question.possibleAnswers.filter(
                              (question) => question?.correctAnswer
                            ).length === 2
                            // if we have two correct answers
                          }
                          questionId={question.id}
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
                    })}
                  </ul>
                </li>
              );
            })}
          </ol>
          <div className={styles.quiz_buttons}>
            <Button
              className={styles.quiz_button}
              variant="contained"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Check your answers
            </Button>

            <Button
              className={styles.quiz_button}
              variant="contained"
              type="reset"
              style={{ marginRight: "20px" }}
            >
              Reset
            </Button>
            {props.shouldShowNewQuestionsBtn && (
              <Button
                style={cssProperties}
                className={styles.quiz_button}
                type="reset"
                // style={{ marginLeft: "20px" }}
                variant="contained"
                onClick={loadNextSetOfQuestions}
              >
                Try More Questions
              </Button>
            )}
          </div>
        </form>
        {/* {numberOfQuestionsCorrect !== null ? (
          <div>
            {`You got ${numberOfQuestionsCorrect} out of ${props.questions.length} correct.`}{" "}
          </div>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}
