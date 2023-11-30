import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";
export const metadata = {
  title: "Past Continuous Tense | English in Eight Minutes",
  description:
    "Learn about the past continuous tense in English. This page provides explanations, examples, and a quiz",
  keywords:
    "past continuous tense, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Past Continuous Tense | English in Eight Minutes",
    description:
      "Learn about the past continuous tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function PastContinuous() {
  const questionsArray = [
    {
      id: 1,
      title:
        "I ___________ about a solution when Nia came up with a great idea.",
      possibleAnswers: [
        { title: "a. was thinking", correctAnswer: true },
        { title: "b. were thinking" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 2,
      title: "You ___________  loudly when the fight started.",
      possibleAnswers: [
        { title: "a. were talking", correctAnswer: true },
        { title: "b. was talking" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for you",
    },
    {
      id: 3,
      title: "It __________ a lot when I noticed my car door was broken.",
      possibleAnswers: [
        { title: "a. were raining" },
        { title: "b. was raining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
    },
    {
      id: 4,
      title: "They _____________  on the computer all day.",
      possibleAnswers: [
        { title: "a. was working" },
        { title: "b. were working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 5,
      title: "He __________ when his boss called him.",
      possibleAnswers: [
        { title: "a. were leaving" },
        { title: "b. was leaving", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 6,
      title:
        "I __________ some vegetables when he told me he had already ordered our lunch.",
      possibleAnswers: [
        { title: "a. were cutting" },
        { title: "b. was cutting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 7,
      title: "We _________ to our colleagues during the meeting.",
      possibleAnswers: [
        { title: "a. was talking" },
        { title: "b. were talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for we",
    },
    {
      id: 8,
      title: "He ___________  dinner when the phone rang.",
      possibleAnswers: [
        { title: "a. was making", correctAnswer: true },
        { title: "b. were making" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 9,
      title: "They ___________ clothes when they heard a noise.",
      possibleAnswers: [
        { title: "a. were washing", correctAnswer: true },
        { title: "b. was washing" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 10,
      title: "It ____________ .",
      possibleAnswers: [
        { title: "a. were frustrating" },
        { title: "b. was frustrating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for it",
    },
    {
      id: 11,
      title: "I ___________ the solution when you made that great suggestion.",
      possibleAnswers: [
        { title: "a. was considering", correctAnswer: true },
        { title: "b. were considering" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for I",
    },
    {
      id: 12,
      title: "You ___________ for the documents this morning.",
      possibleAnswers: [
        { title: "a. were looking", correctAnswer: true },
        { title: "b. was looking" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for you",
    },
    {
      id: 13,
      title: "She ___________ to the concert when she heard the news.",
      possibleAnswers: [
        { title: "a. was going", correctAnswer: true },
        { title: "b. were going" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for she",
    },
    {
      id: 14,
      title: "They ___________ the problem before the meeting started.",
      possibleAnswers: [
        { title: "a. were discussing", correctAnswer: true },
        { title: "b. was discussing" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
    {
      id: 15,
      title:
        "He ___________ his keys on the kitchen counter when his wife came in the room.",
      possibleAnswers: [
        { title: "a. were leaving" },
        { title: "b. was leaving", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for he",
    },
    {
      id: 16,
      title: "We ___________ to the beach.",
      possibleAnswers: [
        { title: "a. were going", correctAnswer: true },
        { title: "b. was going" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for we",
    },
    {
      id: 17,
      title: "You ___________ very tired yesterday.",
      possibleAnswers: [
        { title: "a. was looking" },
        { title: "b. were looking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for you",
    },
    {
      id: 18,
      title: "She ___________ her best to help him.",
      possibleAnswers: [
        { title: "a. was trying", correctAnswer: true },
        { title: "b. were trying" },
      ],
      userAnswer: "",
      explanation: "Was is the correct form for she",
    },
    {
      id: 19,
      title: "I ___________ to the gym every morning.",
      possibleAnswers: [
        { title: "a. was going", correctAnswer: true },
        { title: "b. were going" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for I",
    },
    {
      id: 20,
      title: "They ___________ their homework last night.",
      possibleAnswers: [
        { title: "a. were doing", correctAnswer: true },
        { title: "b. was doing" },
      ],
      userAnswer: "",
      explanation: "Were is the correct form for they",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Past Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past continuous tense is a way to talk about actions or events that
        were happening in the past. It is formed by using the past tense of the
        verb "to be" (was/were) and adding the present participle (-ing form) of
        the main verb.
      </p>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I was crying</td>
              <td>I was not crying</td>
              <td>I wasn't crying</td>
            </tr>
            <tr>
              <td>You were explaining</td>
              <td>You were explaining</td>
              <td>You were explaining</td>
            </tr>
            <tr>
              <td>She, he, it was working</td>
              <td>She, he, it was not working</td>
              <td>She, he, it wasn't working</td>
            </tr>
            <tr>
              <td>We were thinking</td>
              <td>We were not thinking</td>
              <td>We weren't thinking</td>
            </tr>
            <tr>
              <td>They were talking</td>
              <td>They were not talking</td>
              <td>They weren't talking</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          We use the past continuous to describe something that was happening in
          the past when another other event interrupted it or a repetitive
          action that no is no longer happening.
        </p>

        <ul className="page-examples">
          <li>
            I <b>was dancing</b> when the fight started.
          </li>
          <li>
            She <b>was watching </b> a movie when her friend told her the news.
          </li>
          <li>
            He <b>was talking</b> to his sister when his daughter came home.
          </li>
          <li>
            I <b>was working</b> in the garden when the delivery guy came to the
            door.
          </li>
          <li>
            They were <b>studying</b> in October.
          </li>
        </ul>
      </div>
      <div className="page-body"></div>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6Y5bbgo8-HE?si=dRoP6EPBmmNKay-O"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
