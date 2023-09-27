"use client";

import { useState, useEffect } from "react";
import Quiz from "../../../components/Quiz";

import Link from "next/link";
import { Button } from "@mui/material";

import styles from "../../styles/content-page.module.css";

export default function Collective() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      id: 1,
      title: "The students __________ fighting in the cafeteria.",
      possibleAnswersAndExplanation: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      explanation:
        "Students are considered individuals, not a collective group",
      userAnswer: "",
    },
    {
      id: 2,
      title: "The group __________ decided together to file the petition.",
      possibleAnswersAndExplanation: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      explanation:
        "Students are considered individuals, not a collective group. ",
      userAnswer: "",
    },
    {
      id: 3,
      title:
        "The United States army _____________ a budget much larger than any other countries.",
      possibleAnswersAndExplanation: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      explanation: "Group is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 4,
      title: "My sisters ____________ to go to the beach this weekend.",
      possibleAnswersAndExplanation: [
        { title: "want", correctAnswer: true },
        { title: "wants" },
      ],
      explanation: "Sisters are considered individuals, not a collective group",
      userAnswer: "",
    },
    {
      id: 5,
      title: "___________ the parents' committee made a decision?",
      possibleAnswersAndExplanation: [
        { title: "Has", correctAnswer: true },
        { title: "Have" },
      ],
      explanation: "Committee is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 7,
      title: "___________ any of the soldiers hurt?",
      possibleAnswersAndExplanation: [
        { title: "Was" },
        { title: "Were", correctAnswer: true },
      ],
      explanation:
        "Soldiers are considered individuals, not a collective group",
      userAnswer: "",
    },
    {
      id: 8,
      title: "That team __________ every game.",
      possibleAnswersAndExplanation: [
        { title: "wins", correctAnswer: true },
        { title: "win" },
      ],
      explanation: "Team is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 9,
      title:
        "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
      possibleAnswersAndExplanation: [
        { title: "was" },
        { title: "were", correctAnswer: true },
      ],
      explanation: "Members are considered individuals, not a collective group",
      userAnswer: "",
    },
    {
      id: 10,
      title: "The school choir ______________ won many competitions.",
      possibleAnswersAndExplanation: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      explanation: "Choir is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 11,
      title:
        "His family ______________ very big. He has 10 uncles and 11 aunts.",
      possibleAnswersAndExplanation: [
        { title: "are" },
        { title: "is", correctAnswer: true },
      ],
      explanation: "Family is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 12,
      title: "The team __________ celebrating their victory.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Team is considered a collective noun.",
    },
    {
      id: 13,
      title: "The committee __________ discussing the new proposal.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Committee is considered a collective noun.",
    },
    {
      id: 14,
      title: "The people at the store __________ very angry.",
      possibleAnswersAndExplanation: [
        { title: "are", correctAnswer: true },
        { title: "is" },
      ],
      userAnswer: "",
      explanation: "People is not considered a collective noun.",
    },
    {
      id: 15,
      title: "The jury __________ reached a unanimous decision.",
      possibleAnswersAndExplanation: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      userAnswer: "",
      explanation: "Jury is considered a collective noun.",
    },
    {
      id: 16,
      title: "The swarm of bees __________ buzzing around the flowers.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Swarm is considered a collective noun.",
    },
    {
      id: 17,
      title: "The orchestra __________ performing at the concert.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Orchestra is considered a collective noun.",
    },
    {
      id: 18,
      title: "The students ___________ not in the class.",
      possibleAnswersAndExplanation: [
        { title: "were", correctAnswer: true },
        { title: "was" },
      ],
      userAnswer: "",
      explanation: "Students is not considered a collective noun.",
    },
    {
      id: 19,
      title: "His family __________ planning a reunion.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Family is considered a collective noun.",
    },
    {
      id: 20,
      title: "Her staff __________ working hard this week.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Staff is considered a collective noun.",
    },
    {
      id: 21,
      title: "The audience __________ clapping.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "Audience is considered a collective noun.",
    },
    {
      id: 22,
      title: "The school of fish __________ swimming in the ocean.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation: "School is considered a collective noun.",
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
          of them you may think you would use the "they" form of the verb, but
          you don't. For example, you don't say the group are happy, you say the
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
        setQuiz={setQuiz}
        title="Take a Quiz!"
        subtitle="Caution! Some of these aren't collective nouns"
        questions={quiz}
        secondSetQuestions={secondSetQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
      <iframe
       className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BPPsqCGrYWw?si=of1j_EmmyDulr696"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
