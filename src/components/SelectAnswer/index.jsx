import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import styles from "./styles.module.css";

const SelectAnswer = ({
  show,
  explanation,
  submitted,
  onClick,
  possibleAnswer,
  answers,
  i,
  isAnsweredCorrectly,
  questionId,
  index,
}) => {
  const getTextColor = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (isAnsweredCorrectly && possibleAnswer.correctAnswer) {
        return "right-answer";
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return "wrong-answer";
      } else {
        return "";
      }
    }
  };

  const getExplanation = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return <span className={styles.explanation}>{explanation}</span>;
      } else if (show) {
        return <span className={styles.explanation}>{explanation}</span>;
      }
    }
  };

  const getEmoji = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (isAnsweredCorrectly && possibleAnswer.correctAnswer) {
        return (
          <>
            <AiFillCheckCircle color="green" />
          </>
        );
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return <AiFillCloseCircle color="red" style={{ marginLeft: "15px" }} />;
        {
        }
      } else {
        return "";
      }
    }
  };

  return (
    <>
      <li className={styles.answer_option}>
        <input
          id={"input_field" + questionId}
          disabled={submitted}
          onClick={onClick}
          name={"twoPossibleAnswers" + questionId}
          type="radio"
          className={styles.radio_button}
          value={possibleAnswer.title}
        />
        <label htmlFor={"input_field" + questionId + index}>
          <span style={{ marginRight: "3px" }} className={getTextColor()}>
            {possibleAnswer.title} {getEmoji()}
          </span>
        </label>
      </li>
      <span>{getExplanation()}</span>
    </>
  );
};

export default SelectAnswer;
