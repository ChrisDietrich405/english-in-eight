import { useState, useRef } from "react";
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
  const [scrollTarget, setScrollTarget] = useState(0); // Initialize scrollTarget to 0

  const topOfQuizRef = useRef(null);

  const select = (answer, i) => {
    setAnswers({
      ...answers,
      [i]: "correctAnswer" in answer && answer.correctAnswer,
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

  const scrollToTop = () => {
    if (topOfQuizRef.current) {
      topOfQuizRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const loadNextSetOfQuestions = () => {
    const nextSetOfQuestions = props.secondSetQuestions();

    props.setQuiz([...nextSetOfQuestions]);

    scrollToTop(); // Scroll to the top of the quiz
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className={styles.quiz_container}>
      <h1 ref={topOfQuizRef}></h1>
      <form onSubmit={submit} onReset={reset}>
        <div className={styles.quiz_title}>
          <h4>{props.title}</h4>
          {props.subtitle ? <p>{props.subtitle} </p> : ""}
          <h1>{props.explanation}</h1>
        </div>
        <ol className={styles.questions_and_answers}>
          {props.questions.map((question, i) => (
            <li key={i}>
              {`${question.id}. ${question.title}`}

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
                  }
                )}
              </ul>
            </li>
          ))}
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
          >
            Reset
          </Button>
          {props.shouldShowNewQuestionsBtn && (
            <Button
              className={styles.quiz_button}
              type="reset"
              style={{ marginLeft: "20px" }}
              variant="contained"
              onClick={loadNextSetOfQuestions}
            >
              Try More Questions
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
