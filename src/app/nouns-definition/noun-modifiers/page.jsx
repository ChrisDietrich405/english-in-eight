"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";

import styles from "../../styles/content-page.module.css";

export default function NounModifiers() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "It's a door made of metal. It's a _____________.",
      possibleAnswers: [
        { title: "door's metal" },
        { title: "metal door", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "It's a cloth that you put on a table. It's a _____________.",
      possibleAnswers: [
        { title: "table cloth", correctAnswer: true },
        { title: "cloth table" },
      ],
      userAnswer: "",
    },
    {
      title: "It's a bat used for baseballs. It's a _____________.",
      possibleAnswers: [
        { title: "batball" },
        { title: "baseball bat", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "It's a key for my house. It's a _____________.",
      possibleAnswers: [
        { title: "key house" },
        { title: "house key", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "The park is in the city. It's a ______________.",
      possibleAnswers: [
        { title: "park city" },
        { title: "city park", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "They have a house in the trees. They have a ______________.",
      possibleAnswers: [
        { title: "tree house", correctAnswer: true },
        { title: "house tree" },
      ],
      userAnswer: "",
    },
    {
      title: "We bought a bone for our dog. We gave her a _____________.",
      possibleAnswers: [
        { title: "bone dog" },
        { title: "dog bone", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title:
        "Meet me where there is a station for a train. It's a ________________.",
      possibleAnswers: [
        { title: "train station", correctAnswer: true },
        { title: "station train" },
      ],
      userAnswer: "",
    },
    {
      title: "This is a ladder with steps.   It’s a ___________.",
      possibleAnswers: [
        { title: "step ladder", correctAnswer: true },
        { title: "ladder step" },
      ],
      userAnswer: "",
    },
    {
      title: "I paid for lessons for swimming. They are _____________.",
      possibleAnswers: [
        { title: "swimming lessons", correctAnswer: true },
        { title: "swimmings lesson" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "It's a vehicle with two wheels. It's a _____________.",
        possibleAnswers: [
          { title: "two-wheel vehicle" },
          { title: "bicycle", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "She wears it on her finger. It's a _____________.",
        possibleAnswers: [
          { title: "ring", correctAnswer: true },
          { title: "finger accessory" },
        ],
        userAnswer: "",
      },
      {
        title: "It's a container for liquids. It's a _____________.",
        possibleAnswers: [
          { title: "liquid container" },
          { title: "bottle", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "He uses it to cut paper. It's a _____________.",
        possibleAnswers: [
          { title: "paper cutter" },
          { title: "scissors", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "You sit on it in the park. It's a _____________.",
        possibleAnswers: [
          { title: "park bench", correctAnswer: true },
          { title: "bench park" },
        ],
        userAnswer: "",
      },
      {
        title: "It's a piece of furniture for sleeping. It's a _____________.",
        possibleAnswers: [
          { title: "sleeping furniture" },
          { title: "bed", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title:
          "She wears it to protect her eyes from the sun. It's a _____________.",
        possibleAnswers: [
          { title: "sun protection" },
          { title: "sunglasses", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title:
          "It's a document that proves your identity. It's a _____________.",
        possibleAnswers: [
          { title: "identity document" },
          { title: "passport", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "It's a device for listening to music. It's a _____________.",
        possibleAnswers: [
          { title: "music player" },
          { title: "headphones", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "It's a piece of equipment for cooking. It's a _____________.",
        possibleAnswers: [
          { title: "cooking equipment" },
          { title: "stove", correctAnswer: true },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Noun Modifiers | English Grammar</title>
        <meta
          content="Learn about noun modifiers in English grammar. Understand how they provide additional information about nouns, describe materials, values, measurements, and more with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Noun Modifiers, Descriptions, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/noun-modifiers" />
        <meta property="og:title" content="Noun Modifiers | English Grammar" />
        <meta
          property="og:description"
          content="Learn about noun modifiers in English grammar. Understand how they provide additional information about nouns, describe materials, values, measurements, and more with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/noun-modifiers.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

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
        // explanation={explanation}
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
