"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function RemindVersusRemember() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "I don't ______________ where I left my hat.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information.",
    },
    {
      id: 2,
      title: "She can't ___________________ anything about her childhood.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information.",
    },
    {
      id: 3,
      title:
        "She had to ______________________ him that they had agreed on the child custody. He acted like he had forgotten.",
      possibleAnswersAndExplanation: [
        { title: "remember" },
        { title: "remind", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 4,
      title: "Please ____________________ not to smoke near the church.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a command, telling someone else to not forget something.",
    },
    {
      id: 5,
      title: "My new boss ____________________ me of my best friend's sister.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of having you think of a person that resembles another person.",
    },
    {
      id: 6,
      title:
        " ____________________ to turn off the computer when you leave the office.",
      possibleAnswersAndExplanation: [
        { title: "Remember", correctAnswer: true },
        { title: "Remind" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a command telling someone else to not forget something.",
    },
    {
      id: 7,
      title: "I've read that post but I don't __________________ who wrote it.",
      possibleAnswersAndExplanation: [
        { title: "remember", correctAnswer: true },
        { title: "remind" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information",
    },
    {
      id: 8,
      title: "Did you  ____________________ Malcolm to bring his umbrella?",
      possibleAnswersAndExplanation: [
        { title: "remind", correctAnswer: true },
        { title: "remember" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 9,
      title:
        "That dress _______________ me of my cousin. She wore the same kind.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of having you think of someone because you connect a past experience or object with them",
    },
    {
      id: 10,
      title: "_______________ me to buy some trash bags.",
      possibleAnswersAndExplanation: [
        { title: "Remind", correctAnswer: true },
        { title: "Remember" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 11,
      title: "I can't ______________ where I parked my car.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information",
    },
    {
      id: 12,
      title: "He couldn't ___________________ his own phone number.",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information",
    },
    {
      id: 13,
      title:
        "She needed to ______________________ her friend about their upcoming vacation.",
      possibleAnswersAndExplanation: [
        { title: "remember" },
        { title: "remind", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 14,
      title: "Could you ____________________ me to bring my ID to the airport?",
      possibleAnswersAndExplanation: [
        { title: "remind" },
        { title: "remember", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 15,
      title: "This photo ____________________ me of our family vacation.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of having you think of something because you connect a past experience or object with them",
    },
    {
      id: 16,
      title:
        "Always ____________________ to lock the front door before leaving the house.",
      possibleAnswersAndExplanation: [
        { title: "Remember", correctAnswer: true },
        { title: "Remind" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a command telling someone else to not forget something.",
    },
    {
      id: 17,
      title:
        "I can't ____________________ the name of that movie we watched last week.",
      possibleAnswersAndExplanation: [
        { title: "remember", correctAnswer: true },
        { title: "remind" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of the mental process of recalling information",
    },
    {
      id: 18,
      title:
        "Did you  ____________________ Mia to bring the presentation slides?",
      possibleAnswersAndExplanation: [
        { title: "remind", correctAnswer: true },
        { title: "remember" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
    },
    {
      id: 19,
      title:
        "That song _______________ me of my high school days. We used to dance to it.",
      possibleAnswersAndExplanation: [
        { title: "reminds", correctAnswer: true },
        { title: "remembers" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of having you think of something because you connect a past experience or object with them",
    },
    {
      id: 20,
      title: "_______________ me to pick up some groceries on the way home.",
      possibleAnswersAndExplanation: [
        { title: "Remind", correctAnswer: true },
        { title: "Remember" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of helping someone not to forget something",
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
          retaining information, experiences, or events from the past:
        </p>
        <ul className="page-examples">
          <li>I’ll always remember my trip to Jamaica.</li>
          <li>Suddenly I remembered I needed to pay that bill.</li>
        </ul>

        <p>
          Remember + the -ing form of a verb describes having a memory of
          something that happened in the past or of something we experienced:
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
        <h4 style={{ color: "#1976d2" }}>
          CAUTION! This lesson is extremely hard. Read the explanations two
          times and don't worry if you are not successful the first two or three
          times with the exercise. Practice Makes Perfect. 
        </h4>
      </div>
      <Quiz
        setQuiz={setQuiz}
        title="Take a Quiz!"
        subtitle="HELPFUL HINT! You very rarely say remember me. Remind me is very common."
        questions={quiz}
        secondSetQuestions={secondSetQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JlaQTu8UQ-I?si=aT2jAqdTCsfZ7yms"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

