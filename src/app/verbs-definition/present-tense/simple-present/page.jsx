// //DONE

"use client";

import { useState } from "react";
import Quiz from "@/src/components/Quiz";
import Head from "next/head";
//DONE))

// import styles from "../../styles/content-page.module.css";

import styles from "../../../styles/content-page.module.css";

export default function SimplePresent() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "He ________ (love) tea.",
      possibleAnswers: [
        { title: "a. loves", correctAnswer: true },
        { title: "b. love" },
      ],
      userAnswer: "",
    },
    {
      title: "I _________ (like) dancing.",
      possibleAnswers: [
        { title: "a. don't like", correctAnswer: true },
        { title: "b. doesn't like" },
      ],
      userAnswer: "",
    },
    {
      title: "She ____________ (play) badminton.",
      possibleAnswers: [
        { title: "a. plays", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
    },
    {
      title: "The class (it) __________ (begin) at 11am.",
      possibleAnswers: [
        { title: "a. begin" },
        { title: "b. begins", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "He ________ (cry) when he watches sad movies.",
      possibleAnswers: [
        { title: "a. don't cry" },
        { title: "b. doesn't cry", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "They ________ (wash) the dishes.",
      possibleAnswers: [
        { title: "a. washes" },
        { title: "b. wash", correctAnswer: true },
      ],
      userAnswer: "",
    },

    {
      title: "I ________ (study) Arabic.",
      possibleAnswers: [
        { title: "a. study", correctAnswer: true },
        { title: "b. studies" },
      ],
      userAnswer: "",
    },
    {
      title: "They _________ (live) in Tunisia.",
      possibleAnswers: [
        { title: "a. live", correctAnswer: true },
        { title: "b. lives" },
      ],
      userAnswer: "",
    },
    {
      title: "She _______ (work) at a mall.",
      possibleAnswers: [
        { title: "a. works", correctAnswer: true },
        { title: "b. work" },
      ],
      userAnswer: "",
    },
    {
      title: "Nia _______ (play) the piano very well.",
      possibleAnswers: [
        { title: "a. don't play" },
        { title: "b. doesn't play", correctAnswer: true },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "They ________ (read) books every night.",
        possibleAnswers: [
          { title: "a. reads" },
          { title: "b. read", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "I _________ (enjoy) listening to jazz music.",
        possibleAnswers: [
          { title: "a. enjoys" },
          { title: "b. enjoy", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "He ____________ (drive) his brother's car to work.",
        possibleAnswers: [
          { title: "a. drives", correctAnswer: true },
          { title: "b. drive" },
        ],
        userAnswer: "",
      },

      {
        title: "The cat (she) __________ (sleep) on the couch.",
        possibleAnswers: [
          { title: "a. sleeps", correctAnswer: true },
          { title: "b. sleep" },
        ],
        userAnswer: "",
      },

      {
        title: "He ________ (cook) dinner for his family every night.",
        possibleAnswers: [
          { title: "a. cooks", correctAnswer: true },
          { title: "b. cook" },
        ],
        userAnswer: "",
      },

      {
        title: "We ________ (watch) movies Friday nights.",
        possibleAnswers: [
          { title: "a. watches" },
          { title: "b. watch", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "He ________ (paint).",
        possibleAnswers: [
          { title: "a. paints", correctAnswer: true },
          { title: "b. paint" },
        ],
        userAnswer: "",
      },

      {
        title: "They _________ (travel) to Gabon every summer.",
        possibleAnswers: [
          { title: "a. travels" },
          { title: "b. travel", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "My dog _______ (bark) a lot.",
        possibleAnswers: [
          { title: "a. barks", correctAnswer: true },
          { title: "b. bark" },
        ],
        userAnswer: "",
      },

      {
        title: "She _______ (teach) English.",
        possibleAnswers: [
          { title: "a. teaches", correctAnswer: true },
          { title: "b. teach" },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Simple Present | English Grammar</title>
        <meta
          content="Learn about collective nouns in English grammar. Understand how they represent groups or collections of people or things and how they are used with singular verb forms."
          name="description"
        />
        <meta
          content="English, Grammar, Collective Nouns, Singular Verbs, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/collective-nouns"
        />
        <meta
          property="og:title"
          content="Collective Nouns | English Grammar"
        />
        <meta
          property="og:description"
          content="Learn about collective nouns in English grammar. Understand how they represent groups or collections of people or things and how they are used with singular verb forms."
        />
        <meta
          property="og:image"
          content="https://example.com/images/collective-nouns.jpg"
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
          <h1>Simple Present</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The simple present is used to describe actions, events, or states that
          are habitual, repeated, or generally true. It is used when the action
          is happening in the present time or when something is a permanent
          fact. The positive form for regular verbs is really easy. It's just
          the verb with an extra 's' if the subject is 'he', 'she', or 'it'.
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I eat</td>
              <td>I do not eat</td>
              <td>I don't eat</td>
            </tr>
            <tr>
              <td>You walk</td>
              <td>You do not walk</td>
              <td>You don't walk</td>
            </tr>
            <tr>
              <td>She, he, it works</td>
              <td>She, he, it does not work</td>
              <td>She, he, it, doesn't work</td>
            </tr>
            <tr>
              <td>We fight</td>
              <td>We do not fight</td>
              <td>We don't fight </td>
            </tr>
            <tr>
              <td>They laugh</td>
              <td>They do not laugh</td>
              <td>They don't laugh</td>
            </tr>{" "}
          </tbody>
        </table>{" "}
        {/* {data.map((verb) => {
//           return (
//             <tr>
//               <td>{verb.positive}</td>
//               <td>{verb.negative}</td>
//               <td>{verb.negativeShortForm}</td>
//             </tr>
//           );
//         })} */}{" "}
        <div className="page-body">
          <h4>Present simple tense with irregular verbs</h4>
          <p>Some verbs have spelling changes with 'he', 'she' or 'it':</p>{" "}
          <p>
            Verbs that end in 's', 'sh', 'ch' or 'x' usually add <b>'e'</b>{" "}
            before <b>'s'</b>:{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>watch becomes watches</li>
            <li>pass becomes passes</li>
            <li>crash becomes crashes</li>{" "}
          </ul>
          <p>She boxes on Friday nights</p>{" "}
          <p>
            Verbs that end in <b>'y'</b> often change to <b>'ie'</b> before 's':{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>cry becomes cries</li>
            <li>study becomes studies</li>
            <li>fry becomes fries</li>
            <li>marry becomes marries</li>
            <li>fly becomes flies</li>{" "}
          </ul>
          <p>He cries a lot</p>{" "}
          <p>
            Be careful! <b>'y'</b> doesn't change to <b>'ie'</b> if the ending
            is 'ay', 'ey', 'oy', 'uy'.{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>display becomes displays</li>
            <li>say becomes says</li>
            <li>buy becomes buys</li>
            <li>enjoy becomes enjoys</li>{" "}
          </ul>
          <p>He buys a lot of clothes</p>{" "}
        </div>
        <br />{" "}
        <Quiz
          title="Take a Quiz!"
          questions={quiz}
          callback={handleRandomQuestions}
          shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
        ></Quiz>
      </div>
    </>
  );
}
