import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import styles from "./styles.module.css";

const SelectAnswer = ({
  explanation,
  submitted,
  onClick,
  possibleAnswer,
  answers,
  i,
  isAnsweredCorrectly,
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
        return <p style={{ paddingTop: "3px", paddingLeft: "2px" }}>{explanation}</p>;
      }
    }
  };

  const getEmoji = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (isAnsweredCorrectly && possibleAnswer.correctAnswer) {
        return <AiFillCheckCircle color="green" />;
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return <AiFillCloseCircle color="red" style={{ marginLeft: "15px" }} />;
        {
          /* <span>{explanation}</span> */
        }
      } else {
        return "";
      }
    }
  };

  return (
    <li className={styles.answer_option}>
      <input
        disabled={submitted}
        onClick={onClick}
        name={"twoPossibleAnswers" + i}
        type="radio"
        className={styles.radio_button}
      />
      <p className={getTextColor()}>
        {possibleAnswer.title} {getEmoji()}
      </p>
      <p>{getExplanation()}</p>
    </li>
  );
};

export default SelectAnswer;
