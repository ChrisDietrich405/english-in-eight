"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { Button } from "@mui/material";

import Quiz from "../../../components/Quiz";

import styles from "../../styles/content-page.module.css";

export default function PossessivePronouns() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title:
        " My headset needs to be fixed, but (you) _____________ is working.",
      possibleAnswersAndExplanation: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },
    {
      id: 2,
      title: "My computer is a Lenovo, but (he) _______________ is a PC.",
      possibleAnswersAndExplanation: [
        { title: " his", correctAnswer: true },
        { title: " he" },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },
    {
      id: 3,
      title:
        "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
      possibleAnswersAndExplanation: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 4,
      title:
        "We gave them our number, and they gave us (they) __________________.",
      possibleAnswersAndExplanation: [
        { title: " theirs" },
        { title: " they", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "They is the possessive pronoun for they.",
    },

    {
      id: 5,
      title: "My motorcycle is new, but (he)  __________ is old.",
      possibleAnswersAndExplanation: [
        { title: " he" },
        { title: " his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },
    {
      id: 6,
      title: "She can't have any cake! It's all (I)______________ !",
      possibleAnswersAndExplanation: [
        { title: " my" },
        { title: " mine", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 7,
      title: "My pen is broken. Can I use (you) ____________ ?",
      possibleAnswersAndExplanation: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },
    {
      id: 8,
      title: "That money is (I) ____________.",
      possibleAnswersAndExplanation: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 9,
      title: "The desk is (we) ______________.",
      possibleAnswersAndExplanation: [
        { title: " ours", correctAnswer: true },
        { title: " we" },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },
    {
      id: 10,
      title: "The dress is (she)_____________. ",
      possibleAnswersAndExplanation: [
        { title: " hers", correctAnswer: true },
        { title: " she" },
      ],
      userAnswer: "",
      explanation: "Hers is the possessive pronoun for she.",
    },
    {
      id: 11,
      title: "My car is blue, but (she) _____________ is red.",
      possibleAnswersAndExplanation: [
        { title: " she" },
        { title: " hers", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hers is the possessive pronoun for she.",
    },

    {
      id: 12,
      title: "I love my phone, but (you) _______________ is better.",
      possibleAnswersAndExplanation: [
        { title: " your" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },

    {
      id: 13,
      title: "Their dog is so cute, but (ours) _____________ is a cuter.",
      possibleAnswersAndExplanation: [
        { title: " our" },
        { title: " ours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },

    {
      id: 14,
      title: "The book is on (he) _______________ shelf.",
      possibleAnswersAndExplanation: [
        { title: " his", correctAnswer: true },
        { title: " he" },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },

    {
      id: 15,
      title: "My cookies are good, but (they) _______________ are delicious.",
      possibleAnswersAndExplanation: [
        { title: " they" },
        { title: " theirs", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Theirs is the possessive pronoun for they.",
    },

    {
      id: 16,
      title: "My friend's cat is friendly. (I) _______________ is shy.",
      possibleAnswersAndExplanation: [
        { title: " my" },
        { title: " mine", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },

    {
      id: 17,
      title: "My TV is big, but (you) ____________ is huge",
      possibleAnswersAndExplanation: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },

    {
      id: 18,
      title: "Her laptop is new. (We) _______________ is old.",
      possibleAnswersAndExplanation: [
        { title: "Our" },
        { title: "Ours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },
  ];

  useEffect(() => {
    console.log(questionsArray);
    const questionsVar = questionsArray.splice(0, 10);
    setQuiz(questionsVar);
  }, []);

  const secondSetQuestions = () => {
    const questionsVar = questionsArray.splice(10);
    return questionsVar;
  };

  return (
    <>
      <Head>
        <title>Collective Nouns | English in Eight Minutes</title>
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
          content="Collective Nouns | English in Eight Minutes"
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
      <div className={styles.page_title}>
        <h1>Possessive Pronouns</h1>
      </div>
      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          Possessive pronouns are pronouns that are used to indicate ownership
          (possession) and replace a noun. The English possessive pronouns are
          mine, ours, yours, his, hers, theirs,
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            I have a house - It's <b>mine.</b>
          </li>
          <li>
            You have a boat - That boat is <b>yours.</b>
          </li>
          <li>
            He has a car - It is <b>his.</b>
          </li>
          <li>
            She has a tattoo - It is <b>hers.</b>
          </li>
          <li>
            We have an apartment - It is <b>ours.</b>
          </li>
          <li>
            They have a son - He is <b>theirs.</b>
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
        src="https://www.youtube.com/embed/bhzh8VDykc4?si=oBDWfOw4d_XEMmfi"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
