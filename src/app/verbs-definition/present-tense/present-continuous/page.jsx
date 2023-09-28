"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PresentContinuous() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "You ___________ (play) tennis tonight right?",
      possibleAnswersAndExplanation: [
        { title: "a. are not playing", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
      explanation: "For future events you can use the present continuous.",
    },
    {
      id: 2,
      title: "I ___________ (study) now. Please call me later.",
      possibleAnswersAndExplanation: [
        { title: "a. study" },
        { title: "b. am studying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },
    {
      id: 3,
      title: "She ___________ (sleep).",
      possibleAnswersAndExplanation: [
        { title: "a. isn't sleeping", correctAnswer: true },
        { title: "b.  doesn't sleeps" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },

    {
      id: 4,
      title: "We ___________ (watch) the game.",
      possibleAnswersAndExplanation: [
        { title: "a. watch" },
        { title: "b. are watching", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 5,
      title: "He ____________ (work) in Baltimore.",
      possibleAnswersAndExplanation: [
        { title: "a. doesn't work" },
        { title: "b. is not working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous",
    },
    {
      id: 6,
      title: "He ___________ (wait) for the taxi.",
      possibleAnswersAndExplanation: [
        { title: "a. is waiting", correctAnswer: true },
        { title: "b. waits" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 7,
      title: "They __________ (fight).",
      possibleAnswersAndExplanation: [
        { title: "a. are fighting", correctAnswer: true },
        { title: "b. fight" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 8,
      title: "We _______________ (go) to the mall tonight.",
      possibleAnswersAndExplanation: [
        { title: "a. are not going", correctAnswer: true },
        { title: "b. don't go" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous",
    },
    {
      id: 9,
      title: "You ___________ (read) The Shining.",
      possibleAnswersAndExplanation: [
        { title: "a. read" },
        { title: "b. are reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous",
    },
    {
      id: 10,
      title: "She _________ (eat) a Kit Kat bar.",
      possibleAnswersAndExplanation: [
        { title: "a. eats" },
        { title: "b. is eating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 11,
      title: "They ___________ (travel) to Paris next week.",
      possibleAnswersAndExplanation: [
        { title: "a. are not traveling", correctAnswer: true },
        { title: "b. don't travel" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

    {
      id: 12,
      title: "I ___________ (read) a book right now.",
      possibleAnswersAndExplanation: [
        { title: "a. read" },
        { title: "b. am reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 13,
      title: "He ___________ (cook) dinner for us.",
      possibleAnswersAndExplanation: [
        { title: "a. cooks" },
        { title: "b. is cooking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 14,
      title: "We ___________ (wait) for the bus.",
      possibleAnswersAndExplanation: [
        { title: "a. wait" },
        { title: "b. are waiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 15,
      title: "She ___________ (play) the piano beautifully.",
      possibleAnswersAndExplanation: [
        { title: "a. plays" },
        { title: "b. is playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 16,
      title: "They ___________ (visit) their grandparents tomorrow.",
      possibleAnswersAndExplanation: [
        { title: "a. are not visiting", correctAnswer: true },
        { title: "b. don't visit" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

    {
      id: 17,
      title: "I ___________ (talk) to the manager about the issue.",
      possibleAnswersAndExplanation: [
        { title: "a. talk" },
        { title: "b. am talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 18,
      title: "They ___________ (study) for their exams all day.",
      possibleAnswersAndExplanation: [
        { title: "a. study" },
        { title: "b. are studying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 19,
      title: "He ___________ (clean) the house right now.",
      possibleAnswersAndExplanation: [
        { title: "a. cleans" },
        { title: "b. is cleaning", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 20,
      title: "We ___________ (play) basketball on Saturday.",
      possibleAnswersAndExplanation: [
        { title: "a. are not playing", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

    {
      id: 21,
      title: "She ___________ (read) a novel in the library.",
      possibleAnswersAndExplanation: [
        { title: "a. readings" },
        { title: "b. is reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
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
          <h1>Present Continuous</h1>
        </div>
        <div className="page-body">
          <p className={styles.grammar_explanation_paragraph}>
            The present progressive or present continuous tense is a verb form
            used to describe an ongoing action, event that is happening at the
            current moment or even a future event. It is formed by using the
            auxiliary verb "to be" in the present tense, followed by the main
            verb with "-ing" added to the end.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Positive</th>
                <th>Positive Short Form</th>
                <th>Negative</th>
                <th>Negative Short Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I am eating</td>
                <td>I'm eating</td>
                <td>I am not eating</td>
                <td>I'm not eating</td>
              </tr>
              <tr>
                <td>You are walking</td>
                <td>You're walking</td>
                <td>You are not walking</td>
                <td>You're not walking</td>
              </tr>
              <tr>
                <td>She, he, it is working</td>
                <td>She, he, it's working</td>
                <td>She, he, it is not working</td>
                <td>She, he, it isn't working</td>
              </tr>
              <tr>
                <td>We are thinking</td>
                <td>We're thinking</td>
                <td>We are not thinking</td>
                <td>We aren't thinking</td>
              </tr>
              <tr>
                <td>They are running</td>
                <td>They're running</td>
                <td>They are not running</td>
                <td>They aren't running</td>
              </tr>
              {/* {data.map((verb) => {
              return (
                <tr>
                  <td>{verb.positive}</td>
                  <td>{verb.positiveShortForm}</td>
                  <td>{verb.negative}</td>
                  <td>{verb.negativeShortForm}</td>
                </tr>
              );
            })} */}
            </tbody>
          </table>

          <h4>Actions currently happening</h4>
          <ul className="page-examples">
            <li>He is working at the bar now.</li>
            <li>
              We are having some problems with the software. Call me later.
            </li>
            <li>She is eating lunch so she can't talk now</li>
          </ul>
          <h4>Future actions</h4>
          <ul className="page-examples">
            <li>I'm having dinner with my son this afternoon</li>
            <li>You're coming to the party tonight right?</li>
            <li>They are flying to Kenya this weekend</li>
          </ul>
        </div>
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
        src="https://www.youtube.com/embed/w04YVmJR4w4?si=kJySTWwESHESBsyC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

{
  /* import Quiz from "@/src/components/Quiz";
import styles from "../../../styles/content-page.module.css"; */
}
