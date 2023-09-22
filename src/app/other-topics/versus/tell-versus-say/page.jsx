"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function TellVersusSay() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "Martin  _____________ that he would love to do it.",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 2,
      title: "She ______________ him a lie. ",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 3,
      title: "They  _____________ her that they were going to leave Friday.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 4,
      title: "Demarcus  ___________ us that he didn't want to go out.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },

    {
      id: 5,
      title: "Maria _________ that she's not feeling well. ",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 6,
      title: "She  __________ her mother that she wanted to quit.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },

    {
      id: 7,
      title: "Maria  _____________ that she would join us after work.",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 8,
      title:
        "Maria  _____________ that she's going to talk with her friend about it.",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 9,
      title: "Dan ____________ the best stories.",
      possibleAnswersAndExplanation: [
        { title: "tells", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 10,
      title: "Najha _____________ that she was going to stop helping us.",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 11,
      title: "They _________ that they didn't want to have the meeting Friday.",
      possibleAnswersAndExplanation: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object:",
    },
    {
      id: 12,
      title: "Paul _____________ that he'll be late for the party.",
      possibleAnswersAndExplanation: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 13,
      title: "She _______________ me to meet her at the park.",
      possibleAnswersAndExplanation: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 14,
      title:
        "The teacher ________________ the students to complete their homework.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 15,
      title: "Javier _____________ a funny joke at the dinner table.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 16,
      title: "They _______________ us not to go swimming in the deep water.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 17,
      title:
        "I can't _______________ the difference between Portuguese and Spanish.",
      possibleAnswersAndExplanation: [
        { title: "tell", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 18,
      title: "He _____________ his friends about the exciting trip.",
      possibleAnswersAndExplanation: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 19,
      title: "The manager _____________ the team about the upcoming project.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 20,
      title: "Excuse me, could you ________ the time",
      possibleAnswersAndExplanation: [
        { title: "tell", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 21,
      title:
        "They _______________ their parents about their decision to get married.",
      possibleAnswersAndExplanation: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
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
      <div>
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
            <h1>Tell versus Say</h1>
          </div>
          <p className={styles.grammar_explanation_paragraph}>
            The verbs tell and say have similar meanings, but are not exactly
            the same. Both of them mean "to communicate verbally with someone",
            but depending on context we use one or the other.
          </p>
        </div>
        <p>
          Tell is normally followed by a <b>personal object</b>. We usually use
          say without a personal object:
        </p>
        <ul className="page-examples">
          <li>
            We told <b>everybody</b> that we wanted to eat.
          </li>
          <li>We said that we wanted to eat.</li>
          <li>
            He told <b>me</b> that he loved Dionte.
          </li>
          <li>He said that he loved Dionte.</li>
        </ul>

        <p>
          Tell has to be used in certain situations. In these situations tell
          can't be replaced with say.
        </p>
        <ul className="page-examples">
          <li>tell the difference between.....</li>
          <li>tell (somebody) lies</li>
          <li>tell (somebody) the truth</li>
          <li>tell the time </li>
          <li>tell (somebody) a story</li>
        </ul>
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
