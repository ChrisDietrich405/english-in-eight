"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";

import styles from "../../styles/content-page.module.css";

export default function NounModifiers() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "It's a door made of metal. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "door's metal" },
        { title: "metal door", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Metal is a noun modifier",
    },
    {
      title: "It's a cloth that you put on a table. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "table cloth", correctAnswer: true },
        { title: "cloth table" },
      ],
      userAnswer: "",
      explanation: "Table is a noun modifier",
    },
    {
      title: "It's a bat used for baseballs. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "batball" },
        { title: "baseball bat", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Baseball is a noun modifier",
    },
    {
      title: "It's a key for my house. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "key house" },
        { title: "house key", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "House is a noun modifier",
    },
    {
      title: "The park is in the city. It's a ______________.",
      possibleAnswersAndExplanation: [
        { title: "park city" },
        { title: "city park", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "City is a noun modifier",
    },
    {
      title: "They have a house in the trees. They have a ______________.",
      possibleAnswersAndExplanation: [
        { title: "tree house", correctAnswer: true },
        { title: "house tree" },
      ],
      userAnswer: "",
      explanation: "Tree is a noun modifier",
    },
    {
      title: "We bought a bone for our dog. We gave her a _____________.",
      possibleAnswersAndExplanation: [
        { title: "bone dog" },
        { title: "dog bone", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Dog is a noun modifier",
    },
    {
      title:
        "Meet me where there is a station for a train. It's a ________________.",
      possibleAnswersAndExplanation: [
        { title: "train station", correctAnswer: true },
        { title: "station train" },
      ],
      userAnswer: "",
      explanation: "Train is a noun modifier",
    },
    {
      title: "This is a ladder with steps.   It’s a ___________.",
      possibleAnswersAndExplanation: [
        { title: "step ladder", correctAnswer: true },
        { title: "ladder step" },
      ],
      userAnswer: "",
      explanation: "Step is a noun modifier",
    },
    {
      title: "I paid for lessons for swimming. They are _____________.",
      possibleAnswersAndExplanation: [
        { title: "swimming lessons", correctAnswer: true },
        { title: "swimmings lesson" },
      ],
      userAnswer: "",
      explanation: "Swimming is a noun modifier",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "He uses it to cut paper. It's a _____________.",
        possibleAnswersAndExplanation: [
          { title: "paper cutter", correctAnswer: true },
          { title: "cut paper" },
        ],
        userAnswer: "",
        explanation: "Paper is a noun modifier",
      },
      {
        title: "You sit on it in the park. It's a _____________.",
        possibleAnswersAndExplanation: [
          { title: "park bench", correctAnswer: true },
          { title: "bench park" },
        ],
        userAnswer: "",
        explanation: "Park is a noun modifier",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <div className={styles.page_title}>
        <h1>Noun Modifiers</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          Noun modifiers are words or phrases that provide additional
          information about a noun, helping to describe, specify, or quantify
          it. We sometimes have two nouns together to demonstrate that one thing
          is a part of something else. In the following examples, the first noun
          is called a noun modifier.
        </p>

        <ul className="page-examples">
          <li>
            <b>Baltimore</b> residents
          </li>
          <li>
            The <b>dog</b> bowl
          </li>
          <li>
            The <b>chair</b> leg
          </li>
          <li>
            My <b>gold</b> watch
          </li>
          <li>
            The <b>shopping</b> list
          </li>
        </ul>

        <p>Noun modifiers can be used to show what something is made of:</p>
        <ul className="page-examples">
          <li>a metal chair</li>
          <li>a gold watch</li>
          <li>a wood table</li>
        </ul>

        <p>Noun modifiers can be used for values or measurements:</p>
        <ul className="page-examples">
          <li>an hour drive</li>
          <li>a thousand mile trip</li>
          <li>a twenty pound bag</li>
        </ul>

        <p>Noun modifiers can be used with nouns ending in –er:</p>
        <ul className="page-examples">
          <li>a dress maker</li>
          <li>a club manager</li>
          <li>a factory worker</li>
        </ul>
      </div>
      <p>Noun modifiers are always singular</p>
      <ul className="page-examples">
        <li>
          a basketball player{" "}
          <span style={{ color: "red" }}>NOT a basketballs player</span>
        </li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={quiz}
        callback={handleRandomQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}

//////////////////////////////////////////////////////////////////////

// import Quiz from "../../../components/Quiz";
// import styles from "../../styles/content-page.module.css";

// //Done

// export default function NounModifiers() {
//   return (

//   );
// }
