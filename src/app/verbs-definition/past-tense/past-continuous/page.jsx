"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PastContinuous() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title:
        "I ___________ (think) about a solution when Nia came up with a great idea.",
      possibleAnswersAndExplanation: [
        { title: "a. was thinking" },
        { title: "b. were thinking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 2,
      title: "You ___________ (talk) loudly when the fight started.",
      possibleAnswersAndExplanation: [
        { title: "a. were talking", correctAnswer: true },
        { title: "b. was talking" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for you",
    },
    {
      id: 3,
      title: "It __________ (rain) a lot when I noticed my car door was broken",
      possibleAnswersAndExplanation: [
        { title: "a. were raining" },
        { title: "b. was raining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
    },
    {
      id: 4,
      title:
        "They _____________ (work) on the computer when the teacher came into the room.",
      possibleAnswersAndExplanation: [
        { title: "a. was working" },
        { title: "b. were working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 5,
      title: "He __________ (leave) when his boss called him.",
      possibleAnswersAndExplanation: [
        { title: "a. were leaving" },
        { title: "b. was leaving", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 6,
      title:
        "I __________ (cut) some vegetables when he told me he had already ordered our lunch.",
      possibleAnswersAndExplanation: [
        { title: "a. were cutting" },
        { title: "b. was cutting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 7,
      title: "We _________ (talk) to our colleagues when they came in.",
      possibleAnswersAndExplanation: [
        { title: "a. was talking" },
        { title: "b. were talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for we",
    },
    {
      id: 8,
      title: "He ___________ (make) dinner when the phone rang.",
      possibleAnswersAndExplanation: [
        { title: "a. was making", correctAnswer: true },
        { title: "b. were making" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 9,
      title: "They ___________ (wash) clothes when they heard a noise.",
      possibleAnswersAndExplanation: [
        { title: "a. were washing", correctAnswer: true },
        { title: "b. was washing" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 10,
      title: "It ____________ (frustrate).",
      possibleAnswersAndExplanation: [
        { title: "a. were frustrating" },
        { title: "b. was frustrating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
    },
    {
      id: 11,
      title:
        "I ___________ (think) about a solution when Nia came up with a great idea.",
      possibleAnswersAndExplanation: [
        { title: "a. was thinking" },
        { title: "b. were thinking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 12,
      title: "You ___________ (talk) loudly when the fight started.",
      possibleAnswersAndExplanation: [
        { title: "a. were talking", correctAnswer: true },
        { title: "b. was talking" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for you",
    },
    {
      id: 13,
      title: "It __________ (rain) a lot when I noticed my car door was broken",
      possibleAnswersAndExplanation: [
        { title: "a. were raining" },
        { title: "b. was raining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
    },
    {
      id: 14,
      title:
        "They _____________ (work) on the computer when the teacher came into the room.",
      possibleAnswersAndExplanation: [
        { title: "a. was working" },
        { title: "b. were working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 15,
      title: "He __________ (leave) when his boss called him.",
      possibleAnswersAndExplanation: [
        { title: "a. were leaving" },
        { title: "b. was leaving", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 16,
      title:
        "I __________ (cut) some vegetables when he told me he had already ordered our lunch.",
      possibleAnswersAndExplanation: [
        { title: "a. were cutting" },
        { title: "b. was cutting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 17,
      title: "We _________ (talk) to our colleagues when they came in.",
      possibleAnswersAndExplanation: [
        { title: "a. was talking" },
        { title: "b. were talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for we",
    },
    {
      id: 18,
      title: "He ___________ (make) dinner when the phone rang.",
      possibleAnswersAndExplanation: [
        { title: "a. was making", correctAnswer: true },
        { title: "b. were making" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 19,
      title: "They ___________ (wash) clothes when they heard a noise.",
      possibleAnswersAndExplanation: [
        { title: "a. were washing", correctAnswer: true },
        { title: "b. was washing" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 20,
      title: "It ____________ (frustrate).",
      possibleAnswersAndExplanation: [
        { title: "a. were frustrating" },
        { title: "b. was frustrating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
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
      <div className={styles.page_title}>
        <h1>Past Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past continuous tense is a way to talk about actions or events that
        were happening in the past and were ongoing or in progress at a specific
        moment. It is formed by using the past tense of the verb "to be"
        (was/were) and adding the present participle (-ing form) of the main
        verb.
      </p>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I was crying</td>
              <td>I was not crying</td>
              <td>I wasn't crying</td>
            </tr>
            <tr>
              <td>You were explaining</td>
              <td>You were explaining</td>
              <td>You were explaining</td>
            </tr>
            <tr>
              <td>She, he, it was working</td>
              <td>She, he, it was not working</td>
              <td>She, he, it wasn't working</td>
            </tr>
            <tr>
              <td>We were thinking</td>
              <td>We were not thinking</td>
              <td>We weren't thinking</td>
            </tr>
            <tr>
              <td>They were talking</td>
              <td>They were not talking</td>
              <td>They weren't talking</td>
            </tr>
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
      </div>

      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          We use the past continuous to describe something that was happening in
          the past when another other event interrupted it.
        </p>

        <ul className="page-examples">
          <li>
            I <b>was dancing</b> when the fight started.
          </li>
          <li>
            She <b>was watching </b> a movie when her friend told her the news.
          </li>
          <li>
            He <b>was talking</b> to his sister when his daughter came home.
          </li>
          <li>
            I <b>was working</b> in the garden when the delivery guy came to the
            door.
          </li>
        </ul>
        <p className={styles.grammar_explanation_paragraph}>
          When you talk about an exact time in the past, use the past continuous
          tense if the action started before that specific time and then
          continued afterward.
        </p>
        <ul className="page-examples">
          <li>
            She <b>was working</b> in Morocco in November.
          </li>
          <li>
            At the end of the meeting, everyone at the meeting{" "}
            <b>was still arguing</b>.
          </li>
        </ul>
      </div>
      <div className="page-body"></div>
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
