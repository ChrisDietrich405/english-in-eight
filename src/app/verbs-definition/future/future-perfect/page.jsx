"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function FuturePerfect() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "The tree _________________ by then.",
      possibleAnswersAndExplanation: [
        { title: "a. will have grown", correctAnswer: true },
        { title: "b. will have grew" },
      ],
      userAnswer: "",
      explanation: "Grown is the past participle of grow.",
    },
    {
      id: 2,
      title: "She ______________ (sleep) eight hours.",
      possibleAnswersAndExplanation: [
        { title: "a. will have slept", correctAnswer: true },
        { title: "b. will have sleep" },
      ],
      userAnswer: "",
      explanation: "Slept is the past participle of sleep.",
    },
    {
      id: 3,
      title:
        "Jerome ______________ (finish) his LinkedIn profile by this afternoon.",
      possibleAnswersAndExplanation: [
        { title: "a. will have finished", correctAnswer: true },
        { title: "b. will have finished" },
      ],
      userAnswer: "",
      explanation: "Come is the past participle of come .",
    },

    {
      id: 4,
      title: "At 5, she ______________ in this office for 24 hours.",
      possibleAnswersAndExplanation: [
        { title: "a. will have been", correctAnswer: true },
        { title: "b. will have be" },
      ],
      userAnswer: "",
      explanation: "Been is the past participle of be.",
    },
    {
      id: 5,
      title: "Dad ______________ our favorite dinner by the time you get home.",
      possibleAnswersAndExplanation: [
        { title: "a. will have cooked" },
        { title: "b. will have cook", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cooked is the past participle of cook.",
    },
    {
      id: 6,
      title: "It _______________ raining by then.",
      possibleAnswersAndExplanation: [
        { title: "a. will have stopped", correctAnswer: true },
        { title: "b. will have stop" },
      ],
      userAnswer: "",
      explanation: "Stopped is the past participle of stop.",
    },
    {
      id: 7,
      title: "When we get married, I ______________ Jerome for four years.",
      possibleAnswersAndExplanation: [
        { title: "a. will have known", correctAnswer: true },
        { title: "b. will have knew" },
      ],
      userAnswer: "",
      explanation: "Known is the past participle of know.",
    },
    {
      id: 8,
      title: "They _______________ Syria by the minister retires.",
      possibleAnswersAndExplanation: [
        { title: "a. will have gone" },
        { title: "b. will have go", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Gone is the past participle of go.",
    },

    {
      id: 9,

      title: "I _________________ for work by then .",
      possibleAnswersAndExplanation: [
        { title: "a. will have left", correctAnswer: true },
        { title: "b. will have leave" },
      ],
      userAnswer: "",
      explanation: "Left is the past participle of leave.",
    },
    {
      id: 10,
      title: "By Thursday they _____________ 56 hours.",
      possibleAnswersAndExplanation: [
        { title: "a. will have worked", correctAnswer: true },
        { title: "b. will have work" },
      ],
      userAnswer: "",
      explanation: "Worked is the past participle of work.",
    },
    {
      id: 11,
      title: "The old bridge _______________ a new one by next year.",
      possibleAnswersAndExplanation: [
        { title: "a. will have been replaced", correctAnswer: true },
        { title: "b. will have replace" },
      ],
      userAnswer: "",
      explanation: "Replaced is the past participle of replace.",
    },

    {
      id: 12,
      title: "The sun _______________ by the time we wake up in the morning.",
      possibleAnswersAndExplanation: [
        { title: "a. will have risen", correctAnswer: true },
        { title: "b. will have rise" },
      ],
      userAnswer: "",
      explanation: "Risen is the past participle of rise.",
    },
    {
      id: 12,
      title: "Timmy ______________ by eleven.",
      possibleAnswersAndExplanation: [
        { title: "a. will have come back", correctAnswer: true },
        { title: "b. will have came back" },
      ],
      userAnswer: "",
      explanation: "Come is the past participle of come .",
    },

    {
      id: 13,
      title:
        "The astronauts _______________ in space for a month by the end of their mission.",
      possibleAnswersAndExplanation: [
        { title: "a. will have been", correctAnswer: true },
        { title: "b. will have been" },
      ],
      userAnswer: "",
      explanation: "Been is the past participle of be.",
    },

    {
      id: 14,
      title: "The construction _______________ by the end of the year.",
      possibleAnswersAndExplanation: [
        { title: "a. will have finished", correctAnswer: true },
        { title: "b. will have finish" },
      ],
      userAnswer: "",
      explanation: "Finished is the past participle of finish.",
    },
    {
      id: 15,
      title: "I think they _______________ their journey by now.",
      possibleAnswersAndExplanation: [
        { title: "a. will have completed", correctAnswer: true },
        { title: "b. will have complete" },
      ],
      userAnswer: "",
      explanation: "Completed is the past participle of complete.",
    },
    {
      id: 16,
      title: "The flowers _______________ by tomorrow morning.",
      possibleAnswersAndExplanation: [
        { title: "a. will have bloomed", correctAnswer: true },
        { title: "b. will have bloom" },
      ],
      userAnswer: "",
      explanation: "Bloomed is the past participle of bloom.",
    },
    {
      id: 17,
      title: "I think the mail _______________ by the time we get home.",
      possibleAnswersAndExplanation: [
        { title: "a. will have arrived", correctAnswer: true },
        { title: "b. will have arrive" },
      ],
      userAnswer: "",
      explanation: "Arrived is the past participle of arrive.",
    },

    {
      id: 18,
      title: "She _______________ English for five years by next summer.",
      possibleAnswersAndExplanation: [
        { title: "a. will have studied", correctAnswer: true },
        { title: "b. will have study" },
      ],
      userAnswer: "",
      explanation: "Studied is the past participle of study.",
    },
    {
      id: 19,
      title: "The movie ______________ by the time we get to the theater.",
      possibleAnswersAndExplanation: [
        { title: "a. will have started", correctAnswer: true },
        { title: "b. will have start" },
      ],
      userAnswer: "",
      explanation: "Started is the past participle of start.",
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
      <main className="page-body">
        <div className={styles.page_title}>
          <h1>Future Perfect</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The future perfect tense is used to demonstrate a future event that
          has a definitive end date.{" "}
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
          <tbody>
            <tr>
              <td>I will have eaten</td>
              <td>I'll have eaten</td>
              <td>I will not have eaten</td>
              <td>I won't have eaten</td>
            </tr>
            <tr>
              <td>You will have finished</td>
              <td>You'll have finished</td>
              <td>You will not have finished</td>
              <td>You won't have finished</td>
            </tr>
            <tr>
              <td>She, he, it will have worked</td>
              <td>She, he, it'll have worked</td>
              <td>She, he, it will not have worked</td>
              <td>She, he, it won't have worked</td>
            </tr>
            <tr>
              <td>We will have started</td>
              <td>We'll have started</td>
              <td>We will not have started</td>
              <td>We won't have started</td>
            </tr>
            <tr>
              <td>They will have left</td>
              <td>They'll have left</td>
              <td>They will not have left</td>
              <td>They won't have left</td>
            </tr>
            {/* <tbody>
          {data.map((verb) => {
            return (
              <tr>
              <td>{verb.positive}</td>
              <td>{verb.positiveShortForm}</td>
              <td>{verb.negative}</td>
              <td>{verb.negativeShortForm}</td>
              </tr>
              );
            })}
          </tbody> */}
          </tbody>
        </table>
        <p>
          The future perfect is used with a future time word, (and often with
          'by') to talk about an action that will finish before a specific time
          in the future, but we're not sure exactly when.
        </p>
        <ul className="page-examples">
          <li>By the time I'm seventy, I will have retired.</li>
          <li>By 10, he will have finished the housework.</li>
        </ul>
        <p>
          The future perfect is used to indicate 'how long' an action will have
          lasted compared to another action.{" "}
        </p>
        <ul className="page-examples">
          <li>The storm will have finished by the time they arrive.</li>
          <li>Nia will have married Demarcus by then.</li>
        </ul>
        <Quiz
          setQuiz={setQuiz}
          title="Take a Quiz!"
          questions={quiz}
          secondSetQuestions={secondSetQuestions}
          shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
        ></Quiz>
      </main>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////
