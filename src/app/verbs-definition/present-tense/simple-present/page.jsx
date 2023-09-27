"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";
import styles from "../../../styles/content-page.module.css";

export default function PresentPerfectContinuous() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "He ________ (love) tea.",
      possibleAnswersAndExplanation: [
        { title: "a. loves", correctAnswer: true },
        { title: "b. love" },
      ],
      userAnswer: "",
      explanation: "Loves is the correct positive form for she, he, it.",
    },
    {
      id: 2,
      title: "I _________ (like) dancing.",
      possibleAnswersAndExplanation: [
        { title: "a. don't like", correctAnswer: true },
        { title: "b. doesn't like" },
      ],
      userAnswer: "",
      explanation: "Like is the correct form for I.",
    },
    {
      id: 3,
      title: "She ____________ (play) badminton.",
      possibleAnswersAndExplanation: [
        { title: "a. plays", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
      explanation: "Plays is the correct positive form for she, he, it.",
    },
    {
      id: 4,
      title: "The class (it) __________ (begin) at 11am.",
      possibleAnswersAndExplanation: [
        { title: "a. begin" },
        { title: "b. begins", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Begins is the correct positive form for she, he, it.",
    },
    {
      id: 5,
      title: "He ________ (cry) when he watches sad movies.",
      possibleAnswersAndExplanation: [
        { title: "a. cry" },
        { title: "b. cries", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cries the correct positive form for she, he, it.",
    },
    {
      id: 6,
      title: "They ________ (wash) the dishes.",
      possibleAnswersAndExplanation: [
        { title: "a. washes" },
        { title: "b. wash", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Wash is the correct positive form for they.",
    },

    {
      id: 7,
      title: "I ________ (study) Arabic.",
      possibleAnswersAndExplanation: [
        { title: "a. study", correctAnswer: true },
        { title: "b. studies" },
      ],
      userAnswer: "",
      explanation: "Study is the correct positive form for I.",
    },
    {
      id: 8,
      title: "They _________ (live) in Tunisia.",
      possibleAnswersAndExplanation: [
        { title: "a. live", correctAnswer: true },
        { title: "b. lives" },
      ],
      userAnswer: "",
      explanation: "Live is the correct positive form for They.",
    },
    {
      id: 9,
      title: "She _______ (work) at a mall.",
      possibleAnswersAndExplanation: [
        { title: "a. works", correctAnswer: true },
        { title: "b. work" },
      ],
      userAnswer: "",
      explanation: "Works is the correct positive form for she, he, it.",
    },
    {
      id: 10,
      title: "Nia _______ (play) the piano very well.",
      possibleAnswersAndExplanation: [
        { title: "a. don't play" },
        { title: "b. doesn't play", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Plays is the correct positive form for she, he, it.",
    },
    {
      id: 11,
      title: "He ________________ (enjoy) hiking.",
      possibleAnswersAndExplanation: [
        { title: "a. enjoys", correctAnswer: true },
        { title: "b. enjoy" },
      ],
      userAnswer: "",
      explanation: "Enjoys is the correct positive form for he.",
    },

    {
      id: 12,
      title: "They ________________ (play) chess every weekend.",
      possibleAnswersAndExplanation: [
        { title: "a. play", correctAnswer: true },
        { title: "b. plays" },
      ],
      userAnswer: "",
      explanation: "Play is the correct positive form for they.",
    },

    {
      id: 13,
      title: "She ________________ (read) a book every night before bed.",
      possibleAnswersAndExplanation: [
        { title: "a. reads", correctAnswer: true },
        { title: "b. read" },
      ],
      userAnswer: "",
      explanation: "Reads is the correct positive form for she.",
    },

    {
      id: 14,
      title: "The cat ________________ (sleep) in the sun every afternoon.",
      possibleAnswersAndExplanation: [
        { title: "a. sleeps", correctAnswer: true },
        { title: "b. sleep" },
      ],
      userAnswer: "",
      explanation: "Sleeps is the correct positive form for she, he, it.",
    },

    {
      id: 15,
      title: "I ________________ (write) a lot of emails every day.",
      possibleAnswersAndExplanation: [
        { title: "a. write", correctAnswer: true },
        { title: "b. writes" },
      ],
      userAnswer: "",
      explanation: "Write is the correct positive form for I.",
    },

    {
      id: 16,
      title: "We ________________ (watch) a movie every Friday night.",
      possibleAnswersAndExplanation: [
        { title: "a. watch", correctAnswer: true },
        { title: "b. watches" },
      ],
      userAnswer: "",
      explanation: "Watch is the correct positive form for we.",
    },

    {
      id: 17,
      title: "He ________________ (paint) in his studio.",
      possibleAnswersAndExplanation: [
        { title: "a. paints", correctAnswer: true },
        { title: "b. paint" },
      ],
      userAnswer: "",
      explanation: "Paints is the correct positive form for he.",
    },

    {
      id: 18,
      title: "They ________________ (dance) professionally.",
      possibleAnswersAndExplanation: [
        { title: "a. dance", correctAnswer: true },
        { title: "b. dances" },
      ],
      userAnswer: "",
      explanation: "Dance is the correct positive form for they.",
    },

    {
      id: 19,
      title: "He ________________ (cook) delicious meals for her family.",
      possibleAnswersAndExplanation: [
        { title: "a. cooks", correctAnswer: true },
        { title: "b. cook" },
      ],
      userAnswer: "",
      explanation: "Cooks is the correct positive form for she, he, it.",
    },

    {
      id: 20,
      title: "I ________________ (play) the guitar in a band.",
      possibleAnswersAndExplanation: [
        { title: "a. play", correctAnswer: true },
        { title: "b. plays" },
      ],
      userAnswer: "",
      explanation: "Play is the correct positive form for I.",
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
          <p>Example: She boxes on Friday nights.</p>{" "}
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
          <p>Example: He cries a lot.</p>{" "}
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
          <p>Example: He buys a lot of clothes.</p>{" "}
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
        src="https://www.youtube.com/embed/47LEelX7nhg?si=8-fSboWd7KD3Fawh"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

// {
//   /* import Quiz from "@/src/components/Quiz";
// import styles from "../../../styles/content-page.module.css"; */
// }

// import Quiz from "@/src/components/Quiz";

// import styles from "../../../styles/content-page.module.css";
// //DONE
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
// const endpoint = "/api/past-perfect-continuous"; // Replace with the correct endpoint

// const fullUrl = baseUrl + endpoint;
// //DONE

// // const getData = async () => {
// //   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
// //   return res.json();
// // };

// export default async function PresentPerfectContinuous() {
//   // const verbs = await getData();

//   return (
//     <div className="page-body">

//     </div>
//   );
// }

// //DONE
