import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import styles from "./styles.module.css";

const SelectAnswer = ({
  submitted,
  onClick,
  possibleAnswer,
  answers,
  i,
  selectedAnswerTexts,
  isAnsweredCorrectly,
  index,
  isAnswered,
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

  const getEmoji = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (isAnsweredCorrectly && possibleAnswer.correctAnswer) {
        return <AiFillCheckCircle color="green" />;
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return <AiFillCloseCircle color="red" />;
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
    </li>
  );
};

export default SelectAnswer;
