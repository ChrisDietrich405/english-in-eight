"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import {
  Container,
  Stack,
  ListItem,
  ListItemText,
  List,
  Box,
  Typography,
} from "@mui/material";

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
  };

  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const newEvent = Array.from(event.target);

    const checkedAnswers = newEvent.filter((item) => item.checked);

    const allAnsweredQuestions = checkedAnswers.filter(
      (entireQuestionObject) => {
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
      }
    );

    setNumberOfQuestionsCorrect(allAnsweredQuestions.length);

    toast(
      `You got ${allAnsweredQuestions.length} out of ${props.questions.length} correct.`,
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
      window.scrollTo(0, position - 184);
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
    <Container id="scrollTo" ref={topOfQuizRef}>
      <Box sx={{ marginBottom: "100px" }}>
        <form onSubmit={submit} onReset={reset}>
          <Box>
            <Typography variant="h4">{props.title}</Typography>
            {props.subtitle ? <p>{props.subtitle} </p> : ""}
            <Typography variant="h5">{props.explanation}</Typography>
          </Box>
          <List>
            {props.questions.map((question, i) => {
              return (
                <li key={`answer-${question.id}`} className={styles.question}>
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
                            question.possibleAnswers.filter(
                              (question) => question?.correctAnswer
                            ).length === 2
                          }
                          questionId={question.id}
                          explanation={question.explanation}
                          key={`select-answer-${index}`}
                          submitted={submitted}
                          onClick={() => select(possibleAnswer, i)}
                          possibleAnswer={possibleAnswer}
                          answers={answers}
                          i={i}
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
          </List>
          <Box className={styles.quiz_buttons}>
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
                variant="contained"
                onClick={loadNextSetOfQuestions}
              >
                Try More Questions
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </Container>
  );
}
