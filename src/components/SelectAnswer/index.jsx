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
        return (
          <span style={{  }}>
            {explanation}
          </span>
        );
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
        }
      } else {
        return "";
      }
    }
  };

  return (
    <li className={styles.answer_option}>
      <input
        id={"input_field" + questionId + index}
        disabled={submitted}
        onClick={onClick}
        name={"twoPossibleAnswers" + questionId}
        type="radio"
        className={styles.radio_button}
      />
      <label htmlFor={"input_field" + questionId + index}>
        <span style={{marginRight: "3px"}} className={getTextColor()}>
          {possibleAnswer.title} {getEmoji()}
        </span>
        <span>{getExplanation()}</span>
      </label>
    </li>
  );
};

export default SelectAnswer;
