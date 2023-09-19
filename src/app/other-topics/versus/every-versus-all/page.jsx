"use client";
import { useState } from "react";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";
//DONE

export default function EveryVersusAll() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "I emailed ______________ my colleagues.",
      possibleAnswersAndExplanation: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "_________ the cars on the street have been vandalized.",
      possibleAnswersAndExplanation: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "I see them ______________ couple of days.",
      possibleAnswersAndExplanation: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      userAnswer: "",
    },

    {
      title: "_________________ children need love.",
      possibleAnswersAndExplanation: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      userAnswer: "",
    },
    {
      title: " You don’t see deer __________ day.",
      possibleAnswersAndExplanation: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "She has invited ____________ her friends.",
      possibleAnswersAndExplanation: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      userAnswer: "",
    },
    {
      title: "People should go to their doctor ______________ year.",
      possibleAnswersAndExplanation: [
        { title: "every", correctAnswer: true },
        { title: "all" },
      ],
      userAnswer: "",
    },
    {
      title: " I talk to my wife ____________ day.",
      possibleAnswersAndExplanation: [
        { title: "every", correctAnswer: true },
        { title: "all" },
      ],
      userAnswer: "",
    },
    {
      title: "She has worked for this company ___________ her life.",
      possibleAnswersAndExplanation: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: " I have washed _______________ the clothes except yours.",
      possibleAnswersAndExplanation: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "The team __________ celebrating their victory.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Team is considered a collective noun.",
      },
      {
        title: "The committee __________ discussing the new proposal.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Committee is considered a collective noun.",
      },
      {
        title: "The people at the store __________ very angry.",
        possibleAnswersAndExplanation: [
          { title: "are", correctAnswer: true },
          { title: "is" },
        ],
        userAnswer: "",
        explanation: "People is not considered a collective noun.",
      },
      {
        title: "The jury __________ reached a unanimous decision.",
        possibleAnswersAndExplanation: [
          { title: "has", correctAnswer: true },
          { title: "have" },
        ],
        userAnswer: "",
        explanation: "Jury is considered a collective noun.",
      },
      {
        title: "The swarm of bees __________ buzzing around the flowers.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Swarm is considered a collective noun.",
      },
      {
        title: "The orchestra __________ performing at the concert.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Orchestra is considered a collective noun.",
      },
      {
        title: "The students ___________ not in the class.",
        possibleAnswersAndExplanation: [
          { title: "were", correctAnswer: true },
          { title: "was" },
        ],
        userAnswer: "",
        explanation: "Students is not considered a collective noun.",
      },
      {
        title: "His family __________ planning a reunion.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Family is considered a collective noun.",
      },
      {
        title: "Her staff __________ working hard this week.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Staff is considered a collective noun.",
      },
      {
        title: "The audience __________ clapping.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "Audience is considered a collective noun.",
      },
      {
        title: "The school of fish __________ swimming in the ocean.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
        explanation: "School is considered a collective noun.",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>Every versus All</h1>
        </div>

        <p className={styles.grammar_explanation_paragraph}>
          We use both all and every to describe a total number of something.
          Every describes each member of a complete group. All describes a
          complete group.
        </p>
        <ul className="page-examples">
          <li>The food was sent to all students.</li>
          <li>The food was sent to every student.</li>
        </ul>
        <p>
          In some situations we use <b>all </b>on its own. We can also use
          everyone/everybody/everything.
        </p>
        <ul className="page-examples">
          <li>
            The bingo event is at Camden Yards. It starts at 4 and all are
            welcome.
          </li>
          <li>
            The bingo event is at Camden Yards. It starts at 4 and everyone is
            welcome.
          </li>
        </ul>
        <p>We can use every to focus on each individual member.</p>
        <p>Compare:</p>
        <ul className="page-examples">
          <li>
            All attendees need to silence their phones. (describes the entire
            group)
          </li>
          <li>
            Every attendee needs to silence their phones. (describes the
            individuals )
          </li>
        </ul>

        <p>
          We use <b>every </b> with singular entitites and <b>all</b> with
          uncountable and plural nouns
        </p>
        <ul className="page-examples">
          <li>Every payment is due today.</li>
          <li>All payments are due today.</li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={quiz}
        callback={handleRandomQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
