// //DONE
"use client";

import { useState } from "react";
import Quiz from "@/src/components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../../styles/content-page.module.css";

export default function Collective() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "I don't ______________ where I left my hat.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "She can't ___________________ anything about her childhood.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title:
        "She had to ______________________ him that they had agreed on the child custody. He acted like he had forgotten.",
      possibleAnswersAndExplanation: [
        { title: "remember" },
        { title: "remind", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "Please ____________________ not to smoke near the church.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "My new boss ____________________ me of my best friend's sister.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
    },
    {
      title:
        " ____________________ to turn off the computer when you leave the office.",
      possibleAnswersAndExplanation: [
        { title: "Remember", correctAnswer: true },
        { title: "Remind" },
      ],
      userAnswer: "",
    },
    {
      title: "I've read that post but I don't __________________ who wrote it.",
      possibleAnswersAndExplanation: [
        { title: "remember", correctAnswer: true },
        { title: "remind" },
      ],
      userAnswer: "",
    },
    {
      title: "Did you  ____________________ Malcolm to bring his umbrella?",
      possibleAnswersAndExplanation: [
        { title: "remind", correctAnswer: true },
        { title: "remember" },
      ],
      userAnswer: "",
    },
    {
      title:
        "That dress _______________ me of my cousin. She wore the same kind.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
    },
    {
      title: "_______________ me to buy some trash bags.",
      possibleAnswersAndExplanation: [
        { title: "Remind", correctAnswer: true },
        { title: "Remember" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "I can't ______________ where I parked my car.",
        possibleAnswersAndExplanation: [
          { title: "remind" },
          { title: "remember", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "He couldn't ___________________ his own phone number.",
        possibleAnswersAndExplanation: [
          { title: "remind" },
          { title: "remember", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title:
          "She needed to ______________________ her friend about their upcoming vacation.",
        possibleAnswersAndExplanation: [
          { title: "remember" },
          { title: "remind", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title:
          "Could you ____________________ me to bring my ID to the airport?",
        possibleAnswersAndExplanation: [
          { title: "remind" },
          { title: "remember", correctAnswer: true },
        ],
        userAnswer: "",
      },
      {
        title: "The old photo ____________________ me of our family vacation.",
        possibleAnswersAndExplanation: [
          { title: "reminds", correctAnswer: true },
          { title: "remembers" },
        ],
        userAnswer: "",
      },
      {
        title:
          "Always ____________________ to lock the front door before leaving the house.",
        possibleAnswersAndExplanation: [
          { title: "Remember", correctAnswer: true },
          { title: "Remind" },
        ],
        userAnswer: "",
      },
      {
        title:
          "I can't ____________________ the name of that movie we watched last week.",
        possibleAnswersAndExplanation: [
          { title: "remember", correctAnswer: true },
          { title: "remind" },
        ],
        userAnswer: "",
      },
      {
        title:
          "Did you  ____________________ Mia to bring the presentation slides?",
        possibleAnswersAndExplanation: [
          { title: "remind", correctAnswer: true },
          { title: "remember" },
        ],
        userAnswer: "",
      },
      {
        title:
          "That song _______________ me of my high school days. We used to dance to it.",
        possibleAnswersAndExplanation: [
          { title: "reminds", correctAnswer: true },
          { title: "remembers" },
        ],
        userAnswer: "",
      },
      {
        title: "_______________ me to pick up some groceries on the way home.",
        possibleAnswersAndExplanation: [
          { title: "Remind", correctAnswer: true },
          { title: "Remember" },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Collective Nouns | English Grammar</title>
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

      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>Remind versus Remember</h1>
        </div>

        <h3>Remind</h3>
        <p>
          If a person reminds you of someone, they have you think of that person
          or they resemble that person. If a thing reminds you of something,
          they have you think of that thing or they resemble that thing:
        </p>
        <ul className="page-examples">
          <li>
            My boss reminds me of my father. They have the same way of telling
            jokes.
          </li>
          <li>
            That song always reminds me of when I fell in love with a Nigerian
            girl.
          </li>
        </ul>
        <p>
          If we remind someone to do something or about something, we help them
          remember it or help them not to forget it:
        </p>

        <ul className="page-examples">
          <li>
            Remind me to take out the trash tonight. If you don't I’ll probably
            forget.
          </li>
          <li>
            She’s probably forgotten she was supposed to be at the meeting.
            Someone should text her.
          </li>
        </ul>
        <h3>Remember</h3>
        <p>
          The term "remember" refers to the mental process of recalling or
          retaining information, experiences, or events from the past. It
          involves the ability to retrieve things that have been previously
          learned, encountered, or perceived.
        </p>
        <ul className="page-examples">
          <li>I’ll always remember my trip to Jamaica.</li>
          <li>Suddenly I remembered I needed to pay that bill.</li>
        </ul>

        <p>
          Remember + the -ing form of a verb describes having a memory of
          something that happened in the past or of something we experienced
        </p>
        <ul className="page-examples">
          <li>They said they didn't remember going to the parking lot.</li>
          <li>I remember talking to him. I think it was Friday.</li>
        </ul>
        <p>
          Remember + infinitive describes a command. It tells someone not to
          forget something:
        </p>
        <ul className="page-examples">
          <li>
            Remember to go to bed very early tonight. Tomorrow is going to be a
            long day.
          </li>
        </ul>
      </div>
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
