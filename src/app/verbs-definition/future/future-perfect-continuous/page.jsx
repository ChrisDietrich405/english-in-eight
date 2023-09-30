"use client";
import { useState, useEffect } from "react";

import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function FuturePerfectContinuous() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title:
        " By next month, she will ______________ in that city for five years.",
      possibleAnswersAndExplanation: [
        { title: "a. have lived" },
        { title: "b. have been living", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      id: 2,
      title:
        "By the time the project is completed, they will ___________ on it for six months.",
      possibleAnswersAndExplanation: [
        { title: "a. have worked" },
        { title: "b. have been working", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      id: 3,
      title:
        "By this time next year, they will __________________ around the world for six months.",
      possibleAnswersAndExplanation: [
        { title: "a. have been traveling", correctAnswer: true },
        { title: "b. have traveled" },
      ],
      userAnswer: "",
    },
    {
      id: 4,
      title:
        "By the party's start, we will ___________ the decorations for two days.",
      possibleAnswersAndExplanation: [
        { title: "a. have worked on" },
        { title: "b. have been working on", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      id: 5,
      title:
        "By the time you get here, I will ____________ for you at the airport for two hours..",
      possibleAnswersAndExplanation: [
        { title: "a. have been waiting", correctAnswer: true },
        { title: "b. have waited" },
      ],
      userAnswer: "",
    },

    {
      id: 6,
      title:
        "By the end of the week, she will ______________ the piano for five years.",
      possibleAnswersAndExplanation: [
        { title: "a. have practiced" },
        { title: "b. have been practicing", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      id: 7,
      title:
        "By the concert date, the band will ____________ the new songs for weeks.",
      possibleAnswersAndExplanation: [
        { title: "a. have rehearsed" },
        { title: "b. have been rehearsing", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      id: 8,
      title:
        "By the wedding day, they will ______________ it for a whole year.",
      possibleAnswersAndExplanation: [
        { title: "a. have been planning", correctAnswer: true },
        { title: "b. have planned" },
      ],
      userAnswer: "",
    },
    {
      id: 9,
      title:
        "By the deadline, he will _______________ on the report for three days straight..",
      possibleAnswersAndExplanation: [
        { title: "a. have been working", correctAnswer: true },
        { title: "b. have worked" },
      ],
      userAnswer: "",
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
      <main className="page-body">
        <div>
          <div className={styles.page_title}>
            <h1>Future Perfect Continuous</h1>
          </div>
          <p className={styles.grammar_explanation_paragraph}>
            The future perfect continuous tense is a verb form used to talk
            about actions or events that will have been happening continuously
            until a specific point in the future. Realistically it's not used
            very much.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Positive</th>
                <th>Positive short form</th>
                <th>Negative</th>
                <th>Negative short form</th>
              </tr>
            </thead>
            <tr>
              <td>I will have been finishing</td>
              <td>I'll have been finishing</td>
              <td>I will not have been finishing</td>
              <td>I'll not have been finishing</td>
            </tr>
            <tr>
              <td>You will have been swimming</td>
              <td>You'll have been swimming</td>
              <td>You will not have been swimming</td>
              <td>You'll not have been swimming</td>
            </tr>
            <tr>
              <td>She, he, it will have been working</td>
              <td>She, he, it'll have been working</td>
              <td>She, he, it will not have been working</td>
              <td>She, he, it'll not have been working</td>
            </tr>
            <tr>
              <td>We will have been running</td>
              <td>We'll have been running</td>
              <td>We will not have been running</td>
              <td>We'll not have been running</td>
            </tr>
            <tr>
              <td>They will have been ending</td>
              <td>They'll have been ending</td>
              <td>They wTheyll not have been ending</td>
              <td>They'll not have been ending</td>
            </tr>
            <tbody>
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
          src="https://www.youtube.com/embed/3GY1pPj-Yuw?si=M8-SuxzAzPVJnY7b"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </main>
    </>
  );
}
