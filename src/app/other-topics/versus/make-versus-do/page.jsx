"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function MakeVersusDo() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title:
        "Juan worked hard and __________ his best at his job, but he still wasn't promoted.",
      possibleAnswersAndExplanation: [
        { title: "made" },
        { title: "did", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In English we do our best",
    },
    {
      id: 2,
      title:
        "If you don't speak English, you'll find it hard to ________ business in the UK.",
      possibleAnswersAndExplanation: [
        { title: "make" },
        { title: "do", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In English we do business",
    },
    {
      id: 3,
      title:
        "So many chores to _______! I need to clean the bathroom and the kitchen, vacuum and make all the beds.",
      possibleAnswersAndExplanation: [
        { title: "make" },
        { title: "do", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In English we do chores",
    },

    {
      id: 4,
      title: "It has always been hard for me to ________________ decisions.",
      possibleAnswersAndExplanation: [
        { title: "make", correctAnswer: true },
        { title: "do" },
      ],
      userAnswer: "",
      explanation: "In English we make decisions",
    },
    {
      id: 5,
      title: " My grandmother loves ________ crosswords.",
      possibleAnswersAndExplanation: [
        { title: "to make" },
        { title: "to do", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In English we do crosswords because it's an activity",
    },
    {
      id: 6,
      title:
        "I really need to _______ some shopping this afternoon. We have no food in the house at all.",
      possibleAnswersAndExplanation: [
        { title: "do", correctAnswer: true },
        { title: "make" },
      ],
      userAnswer: "",
      explanation: "In English we do shopping because it's an activity",
    },
    {
      id: 7,
      title:
        " Demarcus  __________ a joke at the start of the meeting, but nobody laughed.",
      possibleAnswersAndExplanation: [
        { title: "made", correctAnswer: true },
        { title: "did" },
      ],
      userAnswer: "",
      explanation: "In English we make jokes",
    },
    {
      id: 8,
      title:
        " The teenagers were _________so much noise that the neighbour called the police.",
      possibleAnswersAndExplanation: [
        { title: "making", correctAnswer: true },
        { title: "doing" },
      ],
      userAnswer: "",
      explanation: "In English we make noise, creating noise in a sense",
    },
    {
      id: 9,
      title: "If you'll _________ the dishes, I'll sweep the floor.",
      possibleAnswersAndExplanation: [
        { title: "make" },
        { title: "do", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In English we do dishes, washing dishes is an activity",
    },
    {
      id: 10,
      title:
        "Could you __________ me a favor and bring dessert to my dinner party tomorrow?",
      possibleAnswersAndExplanation: [
        { title: "do", correctAnswer: true },
        { title: "make" },
      ],
      userAnswer: "",
      explanation: "In English we do favors",
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
        <title>Future Continuous | English in Eight Minutes</title>
        <meta
          name="description"
          content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
        />
        <meta
          property="og:image"
          content="https://dietrichlandcare.com/images/logo.jpg"
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
        <div className={styles.page_title}>
          <h1>Make versus Do</h1>
        </div>

        <p className={styles.grammar_explanation_paragraph}>
          It can be hard to decide when to use 'make' or 'do' in English. Here's
          some help.
        </p>
        <p className={styles.grammar_explanation_paragraph}>
          We use 'make' when we create or construct something.
        </p>
        <ul className="page-examples">
          <li>She made a cake.</li>
          <li>I've made us some coffee.</li>
          <li>Did you really make that scarf?</li>
        </ul>
        <p className={styles.grammar_explanation_paragraph}>
          We use 'do' for general activities. In this case, 'do' is often used
          with 'something', 'nothing', 'anything' or 'everything':
        </p>
        <ul className="page-examples">
          <li>What did you do on the weekend?</li>
          <li>I didn't do anything yesterday.</li>
          <li>
            She's fed up with doing everything herself. She needs some help.
          </li>
        </ul>
        <h4 style={{ color: "#1976d2" }}>
          This exercise is extremely hard. There are many many exceptions to the
          rules. Don't feel bad if you make a lot of mistakes here. Take notes
          and practice the exercise again (and again).
        </h4>
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
