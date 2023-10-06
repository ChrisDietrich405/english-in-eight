import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Past Simple | English in Eight Minutes",
  description:
    "Learn about the past simple tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
  keywords:
    "past simple, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States, grammar lessons, English language",
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
    title: "Learn Past Simple | English in 8 Minutes",
    description:
      "Master the past simple tense in English with explanations, examples, and a quiz. English in Eight Minutes offers concise language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions in the United States.",
    images: [
      {
        url: "images/logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "images/logo.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

export default function PastPerfectContinuous() {
  const questionsArray = [
    {
      id: 1,
      title: "I _____________ to the store.",
      possibleAnswers: [
        { title: "a. go" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },

    {
      id: 2,
      title: "They _____________ house very well.",
      possibleAnswers: [
        { title: "a. builded" },
        { title: "b. built", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Built is the past simple form for build.",
    },
    {
      id: 3,
      title: "I _________ to her.",
      possibleAnswers: [
        { title: "a. didn't talked" },
        { title: "b. didn't talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talked is the past simple form for talk.",
    },
    {
      id: 4,
      title: "She ___________ that movie yesterday.",
      possibleAnswers: [
        { title: "a. saw", correctAnswer: true },
        { title: "b. sawed" },
      ],
      userAnswer: "",
      explanation: "Saw is the past simple form for see.",
    },
    {
      id: 5,
      title: "He ____________ his hand with a knife .",
      possibleAnswers: [
        { title: "a. cuted" },
        { title: "b. cut", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cut is the past simple form for cut.",
    },
    {
      id: 6,
      title: "We ________ too much this morning.",
      possibleAnswers: [
        { title: "a. ate", correctAnswer: true },
        { title: "b. eated" },
      ],
      userAnswer: "",
      explanation: "Ate is the past simple form for eat.",
    },
    {
      id: 7,
      title: "I _________ her on the cheek.",
      possibleAnswers: [
        { title: "a. kissed", correctAnswer: true },
        { title: "b. kiss" },
      ],
      userAnswer: "",
      explanation: "Kissed is the past simple form for kiss.",
    },
    {
      id: 8,
      title: "It ____________ a lot of money.",
      possibleAnswers: [
        { title: "a. costed" },
        { title: "b. cost", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cost is the past simple form for cost.",
    },
    {
      id: 9,
      title: "They ___________ to the store.",
      possibleAnswers: [
        { title: "a. wented" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },
    {
      id: 10,
      title: "The car ___________ the tree.",
      possibleAnswers: [
        { title: "a. hit", correctAnswer: true },
        { title: "b. hited" },
      ],
      userAnswer: "",
      explanation: "Hit is the past simple form for hit.",
    },
    {
      id: 11,
      title: "She ____________ her friend last night.",
      possibleAnswers: [
        { title: "a. meet" },
        { title: "b. met", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Met is the past simple form for meet.",
    },
    {
      id: 12,
      title: "He ____________ a great book last weekend.",
      possibleAnswers: [
        { title: "a. read", correctAnswer: true },
        { title: "b. red" },
      ],
      userAnswer: "",
      explanation: "Read is the past simple form for read.",
    },
    {
      id: 13,
      title: "They ____________ a delicious meal yesterday.",
      possibleAnswers: [
        { title: "a. cook" },
        { title: "b. cooked", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cooked is the past simple form for cook.",
    },
    {
      id: 14,
      title: "The children ____________ in the park this morning.",
      possibleAnswers: [
        { title: "a. play" },
        { title: "b. played", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Played is the past simple form for play.",
    },
    {
      id: 15,
      title: "She ____________ a beautiful song at the concert.",
      possibleAnswers: [
        { title: "a. sing" },
        { title: "b. sang", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Sang is the past simple form for sing.",
    },
    {
      id: 16,
      title: "They ____________ to the beach last summer.",
      possibleAnswers: [
        { title: "a. go" },
        { title: "b. went", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Went is the past simple form for go.",
    },
    {
      id: 17,
      title: "I ____________ my keys in the car yesterday.",
      possibleAnswers: [
        { title: "a. leave" },
        { title: "b. left", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Left is the past simple form for leave.",
    },
    {
      id: 18,
      title: "They ____________ a great time at the party last night.",
      possibleAnswers: [
        { title: "a. have" },
        { title: "b. had", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Had is the past simple form for have.",
    },
    {
      id: 19,
      title: "She ____________ a fantastic painting last week.",
      possibleAnswers: [
        { title: "a. paint" },
        { title: "b. painted", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Painted is the past simple form for paint.",
    },
    {
      id: 20,
      title: "They ____________ their grandparents yesterday.",
      possibleAnswers: [
        { title: "a. visit" },
        { title: "b. visited", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Visited is the past simple form for visit.",
    },
    {
      id: 21,
      title: "He ____________ a new bicycle for his birthday.",
      possibleAnswers: [
        { title: "a. get" },
        { title: "b. got", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Got is the past simple form for get.",
    },
  ];

  return (
    <>
      <div className={styles.page_title}>
        <h1>Past Simple</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        {" "}
        The simple past, also known as the past simple, is a verb tense used to
        describe actions, events, or states that occurred and were completed in
        the past. It is one of the basic verb tenses in English and is generally
        used to express actions that happened at a specific time in the past, or
        to narrate a sequence of events in the past.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_title}>Positive</th>
            <th>Negative</th>
            <th>Negative short form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I walked</td>
            <td>I did not walk</td>
            <td>I didn't walk</td>
          </tr>
          <tr>
            <td>You ate</td>
            <td>You did not eat</td>
            <td>You didn't eat</td>
          </tr>
          <tr>
            <td>She, he, it worked</td>
            <td>She, he, it did not work</td>
            <td>She, he, it didn't work</td>
          </tr>
          <tr>
            <td>We talked</td>
            <td>We did not talk</td>
            <td>We didn't talk</td>
          </tr>
          <tr>
            <td>They danced</td>
            <td>They did not dance</td>
            <td>They didn't dance</td>
          </tr>
          {/* {data.map((item) => {
            return (
              <tr>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{item.negativeShortForm}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>

      <div className="page-body">
        <p>
          For irregular verbs, things are more challenging. For example the
          simple past tense of some irregular verbs look exactly like the root
          form:
        </p>
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
              <td>I put</td>
              <td>I did not put</td>
              <td>I didn't put</td>
            </tr>
            <tr>
              <td>They hit</td>
              <td>They did not hit</td>
              <td>They didn't hit</td>
            </tr>
            <tr>
              <td>You set</td>
              <td>You did not set</td>
              <td>You didn't set</td>
            </tr>
            <tr>
              <td>She, he, it cost</td>
              <td>She, he, it did not cost</td>
              <td>She, he, it didn't cost</td>
            </tr>
            <tr>
              <td>We cut</td>
              <td>We did not cut</td>
              <td>We didn't cut</td>
            </tr>
          </tbody>
        </table>

        <p>
          {" "}
          For other irregular verbs, the simple past forms are much different
          than their infinitive forms:
        </p>
        <ul className="page-examples">
          <li>buy changes to bought</li>
          <li>eat changes to ate</li>
          <li>build changes to built</li>
          <li>see changes to saw</li>
          <li>go changes to went</li>
        </ul>
      </div>
      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dmJrYbDjxQY?si=QSFfZAy14-ZcyzBU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
