"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PastPerfectContinuous() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "I _____________ to the store.",
      possibleAnswersAndExplanation: [
        { title: "a. go" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },

    {
      id: 2,
      title: "They _____________ house very well.",
      possibleAnswersAndExplanation: [
        { title: "a. builded" },
        { title: "b. built", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Built is the past simple form for build.",
    },
    {
      id: 3,
      title: "I _________ to her.",
      possibleAnswersAndExplanation: [
        { title: "a. didn't talked" },
        { title: "b. didn't talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talked is the past simple form for talk.",
    },
    {
      id: 4,
      title: "She ___________ that movie yesterday.",
      possibleAnswersAndExplanation: [
        { title: "a. saw", correctAnswer: true },
        { title: "b. sawed" },
      ],
      userAnswer: "",
      explanation: "Saw is the past simple form for see.",
    },
    {
      title: "He ____________ his hand with a knife .",
      possibleAnswersAndExplanation: [
        { title: "a. cuted" },
        { title: "b. cut", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cut is the past simple form for cut.",
    },
    {
      id: 5,
      title: "We ________ too much this morning.",
      possibleAnswersAndExplanation: [
        { title: "a. ate", correctAnswer: true },
        { title: "b. eated" },
      ],
      userAnswer: "",
      explanation: "Ate is the past simple form for eat.",
    },
    {
      id: 6,
      title: "I _________ her on the cheek.",
      possibleAnswersAndExplanation: [
        { title: "a. kissed", correctAnswer: true },
        { title: "b. kiss" },
      ],
      userAnswer: "",
      explanation: "Kissed is the past simple form for kiss.",
    },
    {
      id: 7,
      title: "It ____________ a lot of money.",
      possibleAnswersAndExplanation: [
        { title: "a. costed" },
        { title: "b. cost", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cost is the past simple form for cost.",
    },
    {
      id: 8,
      title: "They ___________ to the store.",
      possibleAnswersAndExplanation: [
        { title: "a. wented" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },
    {
      id: 9,
      title: "The car ___________ the tree.",
      possibleAnswersAndExplanation: [
        { title: "a. hit", correctAnswer: true },
        { title: "b. hited" },
      ],
      userAnswer: "",
      explanation: "Hit is the past simple form for hit.",
    },
    {
      id: 10,
      title: "She ____________ her friend last night.",
      possibleAnswersAndExplanation: [
        { title: "a. meet" },
        { title: "b. met", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Met is the past simple form for meet.",
    },
    {
      id: 11,
      title: "He ____________ a great book last weekend.",
      possibleAnswersAndExplanation: [
        { title: "a. read", correctAnswer: true },
        { title: "b. red" },
      ],
      userAnswer: "",
      explanation: "Read is the past simple form for read.",
    },
    {
      id: 12,
      title: "They ____________ a delicious meal yesterday.",
      possibleAnswersAndExplanation: [
        { title: "a. cook" },
        { title: "b. cooked", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cooked is the past simple form for cook.",
    },
    {
      id: 13,
      title: "The children ____________ in the park this morning.",
      possibleAnswersAndExplanation: [
        { title: "a. play" },
        { title: "b. played", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Played is the past simple form for play.",
    },
    {
      id: 14,
      title: "She ____________ a beautiful song at the concert.",
      possibleAnswersAndExplanation: [
        { title: "a. sing" },
        { title: "b. sang", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Sang is the past simple form for sing.",
    },
    {
      id: 15,
      title: "They ____________ to the beach last summer.",
      possibleAnswersAndExplanation: [
        { title: "a. go" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },
    {
      id: 16,
      title: "I ____________ my keys in the car yesterday.",
      possibleAnswersAndExplanation: [
        { title: "a. leave" },
        { title: "b. left", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Left is the past simple form for leave.",
    },
    {
      id: 17,
      title: "They ____________ a great time at the party last night.",
      possibleAnswersAndExplanation: [
        { title: "a. have" },
        { title: "b. had", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Had is the past simple form for have.",
    },
    {
      id: 18,
      title: "She ____________ a fantastic painting last week.",
      possibleAnswersAndExplanation: [
        { title: "a. paint" },
        { title: "b. painted", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Painted is the past simple form for paint.",
    },
    {
      id: 19,
      title: "They ____________ their grandparents yesterday.",
      possibleAnswersAndExplanation: [
        { title: "a. visit" },
        { title: "b. visited", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Visited is the past simple form for visit.",
    },
    {
      id: 20,
      title: "He ____________ a new bicycle for his birthday.",
      possibleAnswersAndExplanation: [
        { title: "a. get" },
        { title: "b. got", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Got is the past simple form for get.",
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
        <h1>Past Simple</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        {" "}
        The simple past, also known as the past simple, is a verb tense used to
        describe actions, events, or states that occurred and were completed in
        the past. It is one of the basic verb tenses in English and is generally
        used to express actions that happened at a specific time in the past, or
        to narrate a sequence of events in the past.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_title}>Positive</th>
            <th>Negative</th>
            <th>Negative short form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I walked</td>
            <td>I did not walk</td>
            <td>I didn't walk</td>
          </tr>
          <tr>
            <td>You ate</td>
            <td>You did not eat</td>
            <td>You didn't eat</td>
          </tr>
          <tr>
            <td>She, he, it worked</td>
            <td>She, he, it did not work</td>
            <td>She, he, it didn't work</td>
          </tr>
          <tr>
            <td>We talked</td>
            <td>We did not talk</td>
            <td>We didn't talk</td>
          </tr>
          <tr>
            <td>They danced</td>
            <td>They did not dance</td>
            <td>They didn't dance</td>
          </tr>
          {/* {data.map((item) => {
            return (
              <tr>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{item.negativeShortForm}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>

      <div className="page-body">
        <p>
          For irregular verbs, things are more challenging. For example the
          simple past tense of some irregular verbs look exactly like the root
          form:
        </p>
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
              <td>I put</td>
              <td>I did not put</td>
              <td>I didn't put</td>
            </tr>
            <tr>
              <td>They hit</td>
              <td>They did not hit</td>
              <td>They didn't hit</td>
            </tr>
            <tr>
              <td>You set</td>
              <td>You did not set</td>
              <td>You didn't set</td>
            </tr>
            <tr>
              <td>She, he, it cost</td>
              <td>She, he, it did not cost</td>
              <td>She, he, it didn't cost</td>
            </tr>
            <tr>
              <td>We cut</td>
              <td>We did not cut</td>
              <td>We didn't cut</td>
            </tr>
          </tbody>
        </table>

        <p>
          {" "}
          For other irregular verbs, the simple past forms are much different
          than their infinitive forms:
        </p>
        <ul className="page-examples">
          <li>buy changes to bought</li>
          <li>eat changes to ate</li>
          <li>build changes to built</li>
          <li>see changes to saw</li>
          <li>go changes to went</li>
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
        src="https://www.youtube.com/embed/dmJrYbDjxQY?si=QSFfZAy14-ZcyzBU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
