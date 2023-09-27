"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PastPerfect() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "The train ____________ (leave) by the time I got to the station.",
      possibleAnswersAndExplanation: [
        { title: "a. had leave" },
        { title: "b. had left", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Left is the past participle for leave.",
    },
    {
      id: 2,
      title: "I wished I ______________.",
      possibleAnswersAndExplanation: [
        { title: "a. had lied", correctAnswer: true },
        { title: "b. has lied" },
      ],
      userAnswer: "",
      explanation: "Lied is the past participle for lie.",
    },
    {
      id: 3,
      title:
        "She _____________________ (send) the message before her brother apologized.",
      possibleAnswersAndExplanation: [
        { title: "a. had send" },
        { title: "b. had sent", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Sent is the past participle for send.",
    },

    {
      id: 4,
      title: "He _____________ (play) football until last week.",
      possibleAnswersAndExplanation: [
        { title: "a. had never play" },
        { title: "b. had never played", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Played is the past participle for play.",
    },
    {
      id: 5,
      title:
        "After the storm _______________ (pass) we went outside to assess the damage.",
      possibleAnswersAndExplanation: [
        { title: "a. had pass" },
        { title: "b. had passed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Passed is the past participle for pass.",
    },

    {
      id: 6,
      title: "They ___________ (get) engaged before last year.",
      possibleAnswersAndExplanation: [
        { title: "a. had get" },
        { title: "b. had gotten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Gotten is the past participle for get.",
    },
    {
      id: 7,
      title: "We ___________ (meet) them before the party.",
      possibleAnswersAndExplanation: [
        { title: "a. had met", correctAnswer: true },
        { title: "b. has meet" },
      ],
      userAnswer: "",
      explanation: "Left is the past participle for leave.",
    },
    {
      id: 8,
      title: "I __________ (fall) asleep before 8pm last night.",
      possibleAnswersAndExplanation: [
        { title: "a. had fall" },
        { title: "b. had fallen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Fallen is the past participle for fall.",
    },
    {
      id: 9,
      title: "We wished we ____________ (purchase) the winning ticket.",
      possibleAnswersAndExplanation: [
        { title: "a. had purchased", correctAnswer: true },
        { title: "b. had purchase" },
      ],
      userAnswer: "",
      explanation: "Purchased is the past participle for purchase.",
    },
    {
      id: 10,
      title: "By the time we arrived, they _________ (eat) all the spaghetti.",
      possibleAnswersAndExplanation: [
        { title: "a. had eat" },
        { title: "b. had eaten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Eaten is the past participle for eat.",
    },
    {
      id: 11,
      title: "She regretted that she ________ (miss) the meeting.",
      possibleAnswersAndExplanation: [
        { title: "a. had miss" },
        { title: "b. had missed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Missed is the past participle for miss.",
    },
    {
      id: 12,
      title: "Before he realized, the thief _________ (escape) from the scene.",
      possibleAnswersAndExplanation: [
        { title: "a. had escape" },
        { title: "b. had escaped", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Escaped is the past participle for escape.",
    },
    {
      id: 13,
      title:
        "They were surprised that she ________ (read) the entire book in one day.",
      possibleAnswersAndExplanation: [
        { title: "a. had read", correctAnswer: true },
        { title: "b. had reading" },
      ],
      userAnswer: "",
      explanation: "Read is the past participle for read.",
    },
    {
      id: 14,
      title:
        "The company announced that they ________ (achieve) record profits last year.",
      possibleAnswersAndExplanation: [
        { title: "a. had achieve" },
        { title: "b. had achieved", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Achieved is the past participle for achieve.",
    },
    {
      id: 15,
      title: "Before the movie started, I ________ (buy) some popcorn.",
      possibleAnswersAndExplanation: [
        { title: "a. had buy" },
        { title: "b. had bought", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Bought is the past participle for buy.",
    },
    {
      id: 16,
      title:
        "He couldn't believe that he ________ (lose) his wallet at the airport.",
      possibleAnswersAndExplanation: [
        { title: "a. had lose" },
        { title: "b. had lost", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Lost is the past participle for lose.",
    },
    {
      id: 17,
      title:
        "Before the guests arrived, she ________ (prepare) a delicious meal.",
      possibleAnswersAndExplanation: [
        { title: "a. had prepare" },
        { title: "b. had prepared", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Prepared is the past participle for prepare.",
    },
    {
      id: 18,
      title:
        "They realized that they ________ (forget) to lock the front door.",
      possibleAnswersAndExplanation: [
        { title: "a. had forget" },
        { title: "b. had forgotten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Forgotten is the past participle for forget.",
    },
    {
      id: 19,
      title: "She found out that her flight ________ (delay) by several hours.",
      possibleAnswersAndExplanation: [
        { title: "a. had delay" },
        { title: "b. had been delayed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Delayed is the past participle for delay in passive voice.",
    },
    {
      id: 20,
      title: "Before the concert, the musicians ________ (practice) for weeks.",
      possibleAnswersAndExplanation: [
        { title: "a. had practice" },
        { title: "b. had practiced", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Practiced is the past participle for practice.",
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
      <div className="page-body">
        <div className={styles.page_title}>
          <h1>Past Perfect</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The past perfect is used to explain that one action in the past
          happened before another action in the past.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I had eaten</td>
              <td>I'd eaten</td>
              <td>I had not eaten</td>
              <td>I hadn't eaten</td>
            </tr>
            <tr>
              <td>You had left</td>
              <td>You'd left</td>
              <td>You had not left</td>
              <td>You hadn't left</td>
            </tr>
            <tr>
              <td>She, he, it had worked</td>
              <td>She, he, it'd worked</td>
              <td>She, he, it had not worked</td>
              <td>She, he, it hadn't worked</td>
            </tr>
            <tr>
              <td>We had talked</td>
              <td>We'd talked</td>
              <td>We had not talked</td>
              <td>We hadn't talked</td>
            </tr>
            <tr>
              <td>They had thought</td>
              <td>They'd thought</td>
              <td>They had not thought</td>
              <td>They hadn't thought</td>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((verb) => {
            return (
              <tr>
                <td>{verb.positive}</td>
                <td>{verb.negative}</td>
                <td>{verb.negativeShortForm}</td>
              </tr>
            );
          })} */}
          </tbody>
        </table>

        <ul className="page-examples">
          <li>
            We <b>had already eaten</b> before you ordered lunch.
          </li>
          <li>
            We had told her to get ready, but she <b>had already prepared</b>{" "}
            her bags
          </li>
          <li>
            They <b>had started</b> the project before their boss told them to{" "}
          </li>
          <li>
            I <b>had finished</b> eating dinner by the time my wife came home.
          </li>
        </ul>
      </div>
      <Quiz
        setQuiz={setQuiz}
        title="Take a Quiz!"
        questions={quiz}
        secondSetQuestions={secondSetQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/llIOxwc57L0?si=unN51uHBBfP-x6M1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
