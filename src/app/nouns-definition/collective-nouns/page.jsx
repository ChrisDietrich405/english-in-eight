"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../styles/content-page.module.css";

export default function Collective() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "The students __________ fighting in the cafeteria.",
      possibleAnswers: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      userAnswer: "",
      // explanation:
      //   "Students are considered individuals, not a collective group",
    },
    {
      title: "The group __________ decided together to file the petition.",
      possibleAnswers: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      userAnswer: "",
    },
    {
      title:
        "The United States army _____________ a budget much larger than any other countries.",
      possibleAnswers: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "My sisters ____________ to go to the beach this weekend.",
      possibleAnswers: [
        { title: "want", correctAnswer: true },
        { title: "wants" },
      ],
      userAnswer: "",
    },
    {
      title: "___________ the parents' committee made a decision.",
      possibleAnswers: [
        { title: "Has", correctAnswer: true },
        { title: "Have" },
      ],
      userAnswer: "",
    },
    {
      title: "___________ any of the soldiers hurt?",
      possibleAnswers: [
        { title: "Was" },
        { title: "Were", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "That team __________ every game.",
      possibleAnswers: [
        { title: "wins", correctAnswer: true },
        { title: "win" },
      ],
      userAnswer: "",
    },
    {
      title:
        "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
      possibleAnswers: [
        { title: "was" },
        { title: "were", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "The school choir ______________ won many competitions.",
      possibleAnswers: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title:
        "His family ______________ very big. He has 10 uncles and 11 aunts.",
      possibleAnswers: [{ title: "are" }, { title: "is", correctAnswer: true }],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "The team __________ celebrating their victory.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The committee __________ discussing the new proposal.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The herd of cattle __________ grazing in the field.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The jury __________ reached a unanimous decision.",
        possibleAnswers: [
          { title: "has", correctAnswer: true },
          { title: "have" },
        ],
        userAnswer: "",
      },
      {
        title: "The swarm of bees __________ buzzing around the flowers.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The orchestra __________ performing at the concert.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The family __________ planning a reunion.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The staff __________ working diligently on the project.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The audience __________ clapping after the performance.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The school of fish __________ swimming in the ocean.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
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

      <div className={styles.page_title}>
        <h1>Collective Nouns</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          Collective nouns are nouns which represent a group or collection of
          people or things. They include words such as <b>audience</b>,{" "}
          <b>family</b>, <b>government</b>, <b>group</b>, and <b>team</b>. Most
          collective nouns are treated as a singular entity, using the singular
          verb form. Because collective nouns include multiple "members" inside
          of it you may think you would use the "they" form of the verb, but you
          don't. For example, you don't say the group are happy, you say the
          group is happy.
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            The U.S. <b>government</b> is made up of 3 branches.
          </li>
          <li>
            This hockey <b>team</b> includes three players from Canada.
          </li>

          <li>
            Our <b>class</b> takes a field trip to the natural history museum
            every year.
          </li>
          <li>
            My <b>family</b> is important to me.
          </li>

          <li>
            The city <b>council</b> is rejecting the proposal.
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
