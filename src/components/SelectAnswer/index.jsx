import React from "react";

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
        return "😄";
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return "😭";
      } else {
        return "";
      }
    }
  };

  return (
    <li className="answer-option">
      <input
        disabled={submitted}
        onClick={onClick}
        name={"twoPossibleAnswers" + i}
        type="radio"
        className="radio"
      />
      <p className={getTextColor()}>{possibleAnswer.title} {getEmoji()}</p>
    </li>
  );
};

export default SelectAnswer;
