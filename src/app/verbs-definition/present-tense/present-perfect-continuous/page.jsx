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
      title: "She ____________________________ (study) all morning.",
      possibleAnswersAndExplanation: [
        { title: "a. has been studying", correctAnswer: true },
        { title: "b. has studied" },
      ],
      userAnswer: "",
      explanation: "Has been studying is the present perfect continuous form."
    },
    {
      id: 2, 
      title: "I _____________________ (wait) for you since three.",
      possibleAnswersAndExplanation: [
        { title: "a. has waited" },
        { title: "b. have been waiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been waiting is the present perfect continuous form."
    },
    {
      id: 3, 
      title: "Nia ____________________(live) in Nairobi since 2002.",
      possibleAnswersAndExplanation: [
        { title: "a. have lived" },
        { title: "b. has been living", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been living is the present perfect continuous form."
    },
    {
      id: 4, 
      title: "They _____________________ all week.",
      possibleAnswersAndExplanation: [
        { title: "a. have fought" },
        { title: "b. have been fighting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been living is the present perfect continuous form."
    },
    {
      id: 5, 
      title:
        "He ______________________ (play) basketball for five hours.",
      possibleAnswersAndExplanation: [
        { title: "a. have played" },
        { title: "b. has been playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been playing is the present perfect continuous form."
    },
    {
      id: 6, 
      title: "He ___________________ (work) for this library since 2002.",
      possibleAnswersAndExplanation: [
        { title: "a. have worked" },
        { title: "b. has been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been working is the present perfect continuous form."
    },
    {
      id: 7, 
      title: "How long ___________________ (learn / you) Spanish?",
      possibleAnswersAndExplanation: [
        { title: "a. has you learned" },
        { title: "b. have you been learning", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been learning is the present perfect continuous form."
    },
    {
      id: 8, 
      title:
        "We ______________________ (look) for your house for more than an .",
      possibleAnswersAndExplanation: [
        { title: "a. have been looking", correctAnswer: true },
        { title: "b. has looked" },
      ],
      userAnswer: "",
      explanation: "Has been looking is the present perfect continuous form."
    },
    {
      id: 9, 
      title:
        "She ________________________ (live) without electricity for five days.",
      possibleAnswersAndExplanation: [
        { title: "a. has been living", correctAnswer: true },
        { title: "b. has lived" },
      ],
      userAnswer: "",
      explanation: "Has been living is the present perfect continuous form."
    },
    {
      id: 10, 
      title:
        "How long _______________________ (work / he) in the garage?",
      possibleAnswersAndExplanation: [
        { title: "a. have he worked" },
        { title: "b. has he been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has been working is the present perfect continuous form."
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
        <h1>Present Perfect Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The present perfect continuous expresses an action or situation that
        started in the past and is still continuing or has just recently stopped
        at the present moment. It is used to emphasize the length of time.
        {/* The
        present perfect continuous is formed using the construction has/have
        been + the present participle (root + -ing). */}
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
            <td>I have been eating</td>
            <td>I've been eating</td>
            <td>I have not been eating</td>
            <td>I haven't been eating</td>
          </tr>
          <tr>
            <td>You have been talking</td>
            <td>You've been talking</td>
            <td>You have not been talking</td>
            <td>You haven't been talking</td>
          </tr>
          <tr>
            <td>She, he, it has been working</td>
            <td>She, he, it's been working</td>
            <td>She, he, it has not been working</td>
            <td>She, he, it hasn't been working</td>
          </tr>
          <tr>
            <td>We have been dancing</td>
            <td>We've been dancing</td>
            <td>We have not been dancing</td>
            <td>We haven't been dancing</td>
          </tr>
          <tr>
            <td>They have been sitting</td>
            <td>They've been sitting</td>
            <td>They have not been sitting</td>
            <td>They haven't been sitting</td>
          </tr>
          {/* {verbs.map((verb) => {
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

      <h4>For temporary habits or situations </h4>
      <ul className="page-examples">
        <li>
          She's been living with her sister while she looks for an apartment.
        </li>
        <li>We've been studying a lot recently.</li>
        <li>I've been eating a lot less sugar recently.</li>
      </ul>
      <h4>Ongoing actions</h4>

      <ul className="page-examples">
        <li>I've been living in Rabat for five years.</li>
        <li>They've been waiting for the doctor for hours.</li>
        <li>She's been going to this same restaurant since 2014.</li>
      </ul>
      <h4>Actions which have very recently stopped</h4>
      <ul className="page-examples">
        <li>He's been running, so he's really hot.</li>
        <li>It's been raining so now it's a little cooler.</li>
        <li>I'm so tired, I've been working on this project for hours.</li>
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
