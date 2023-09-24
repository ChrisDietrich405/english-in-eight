"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "../../../components/Quiz";

import styles from "../../styles/content-page.module.css";

export default function PossessiveAdjectives() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "Bia loves (she) _____________ clothes!",
      possibleAnswersAndExplanation: [
        { title: "her", correctAnswer: true },
        { title: "their" },
      ],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she",
    },
    {
      id: 2,
      title: "Where is (they) ________________  professor?",
      possibleAnswersAndExplanation: [
        { title: "my" },
        { title: "their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 3,
      title: "He goes to school with (he) _____________ cousin.",
      possibleAnswersAndExplanation: [
        { title: "your" },
        { title: "his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },

    {
      id: 4,
      title: "(You) ______________ car is very old.",
      possibleAnswersAndExplanation: [
        { title: "Your", correctAnswer: true },
        { title: "My" },
      ],
      userAnswer: "",
      explanation: "Your is the possessive adjective for you.",
    },
    {
      id: 5,
      title: "(He)  ________________favorite hobby is running.",
      possibleAnswersAndExplanation: [
        { title: "Your" },
        { title: "His", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 6,
      title: "Where is (I) _______________ phone?",
      possibleAnswersAndExplanation: [
        { title: "my", correctAnswer: true },
        { title: "your" },
      ],
      userAnswer: "",
      explanation: "Me is the possessive adjective for I.",
    },
    {
      id: 7,
      title: "(I) _____________ husband is not feeling well.",
      possibleAnswersAndExplanation: [
        { title: "My", correctAnswer: true },
        { title: "Her" },
      ],
      userAnswer: "",
      explanation: "My is the possessive adjective for I.",
    },
    {
      id: 8,
      title:
        "They want to go to Egypt. They want to see (it) ________________ tourist attractions.",
      possibleAnswersAndExplanation: [
        { title: "its", correctAnswer: true },
        { title: "their" },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 9,
      title: "(They) ________________ mother works in a restaurant.",
      possibleAnswersAndExplanation: [
        { title: "His" },
        { title: "Their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },

    {
      id: 10,
      title: "(He) _____________ name is Tyrese.",
      possibleAnswersAndExplanation: [
        { title: "Their" },
        { title: "His", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 10,
      title: "She shares (they) ________________ passion for cooking.",
      possibleAnswersAndExplanation: [
        { title: "my" },
        { title: "their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 11,
      title: "(We) _______________ cat is very playful.",
      possibleAnswersAndExplanation: [
        { title: "His" },
        { title: "Our", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
    {
      id: 12,
      title: "Lisa and Mark enjoy (she) _____________ company.",
      possibleAnswersAndExplanation: [
        { title: "our" },
        { title: "her", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she.",
    },
    {
      id: 13,
      title: "The children found (he) _____________ lost toy.",
      possibleAnswersAndExplanation: [
        { title: "my" },
        { title: "his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 14,
      title: "(You) _______________ friends are very kind.",
      possibleAnswersAndExplanation: [
        { title: "Their", correctAnswer: true },
        { title: "My" },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for you.",
    },
    {
      id: 15,
      title: "We often visit (I) _______________ grandparents.",
      possibleAnswersAndExplanation: [
        { title: "our", correctAnswer: true },
        { title: "her" },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
    {
      id: 16,
      title: "(She) _______________ sister is a talented musician.",
      possibleAnswersAndExplanation: [
        { title: "My" },
        { title: "Her", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she.",
    },
    {
      id: 17,
      title:
        "The students admired (he) _____________ dedication to their education.",
      possibleAnswersAndExplanation: [
        { title: "their" },
        { title: "his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 18,
      title: "(You) _______________ book is on the table.",
      possibleAnswersAndExplanation: [
        { title: "Her" },
        { title: "Your", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Your is the possessive adjective for you.",
    },
    {
      id: 19,
      title: "David mentioned (we) _____________ favorite movie.",
      possibleAnswersAndExplanation: [
        { title: "his" },
        { title: "our", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
  ];

  useEffect(() => {
    console.log(questionsArray);
    const questionsVar = questionsArray.splice(0, 10);
    setQuiz(questionsVar);
  }, []);

  const secondSetQuestions = () => {
    const questionsVar = questionsArray.splice(11);
    return questionsVar;
  };

  return (
    <>
      <Head>
        <title>Possessive Adjectives | English in Eight Minutes</title>
        <meta
          content="Learn about possessive adjectives in English grammar. Understand how they indicate ownership and their usage with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Possessive Adjectives, Ownership, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/possessive-adjectives"
        />
        <meta
          property="og:title"
          content="Possessive Adjectives | English in Eight Minutes"
        />
        <meta
          property="og:description"
          content="Learn about possessive adjectives in English grammar. Understand how they indicate ownership and their usage with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/possessive-adjectives.jpg"
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
      <div className={styles.page_body}>
        <div className="possessive-adjectives">
          <div className={styles.page_title}>
            <h1>Possessive Adjectives</h1>
          </div>
          <div className={styles.page_body}>
            <p className={styles.grammar_explanation_paragraph}>
              Possessive adjectives are words used to show ownership or
              possession. They are placed before a noun to indicate that the
              noun belongs to someone or something. Examples of possessive
              adjectives include "my," "your," "his," "her," "its," "our," and
              "their."
            </p>
          </div>

          <ul className="page-examples">
            <li>
              I have a car. This is <b>my</b> car.
            </li>
            <li>
              You have a dog. That is <b>your</b> dog
            </li>
            <li>
              He has a car. It is <b>his</b> car
            </li>
            <li>
              She has a laptop. It is <b>her</b>laptop.
            </li>
            <li>
              The car has new tires. <b>Its</b> tires are new.
            </li>
            <li>
              We have a motorcycle. It is <b>our</b> motorcycle.
            </li>
            <li>
              They have a boat. That is <b>their</b> boat.
            </li>
          </ul>
        </div>

        <p>
          Replace the personal pronouns with the correct possessive adjective:
        </p>
      </div>
      <Quiz
        setQuiz={setQuiz}
        title="Take a Quiz!"
        questions={quiz}
        secondSetQuestions={secondSetQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
