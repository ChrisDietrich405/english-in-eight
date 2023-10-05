import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Noun Modifiers | English in Eight Minutes",
  description:
    "Learn about noun modifiers in English with English in Eight Minutes. Understand how noun modifiers work and test your knowledge with a quiz.",
  keywords:
    "English, Noun Modifiers, English grammar, English in Eight Minutes",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Noun Modifiers | English in Eight Minutes",
    description:
      "Learn about noun modifiers in English with English in Eight Minutes. Understand how noun modifiers work and test your knowledge with a quiz.",
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

export default function NounModifiers() {
  const questionsArray = [
    {
      id: 1,
      title: "It's a door made of metal. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "door's metal" },
        { title: "metal door", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Metal is a noun modifier here.",
    },
    {
      id: 2,
      title: "It's a cloth that you put on a table. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "table cloth", correctAnswer: true },
        { title: "cloth table" },
      ],
      userAnswer: "",
      explanation: "Table is a noun modifier here.",
    },
    {
      id: 3,
      title: "It's a bat used for baseballs. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "batball" },
        { title: "baseball bat", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Baseball is a noun modifier here.",
    },
    {
      id: 4,
      title: "It's a key for my house. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "key house" },
        { title: "house key", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "House is a noun modifier here.",
    },
    {
      id: 5,
      title: "The park is in the city. It's a ______________.",
      possibleAnswersAndExplanation: [
        { title: "park city" },
        { title: "city park", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "City is a noun modifier here.",
    },
    {
      id: 6,
      title: "They have a house in the trees. They have a ______________.",
      possibleAnswersAndExplanation: [
        { title: "tree house", correctAnswer: true },
        { title: "house tree" },
      ],
      userAnswer: "",
      explanation: "Tree is a noun modifier here.",
    },
    {
      id: 7,
      title: "We bought a bone for our dog. We gave her a _____________.",
      possibleAnswersAndExplanation: [
        { title: "bone dog" },
        { title: "dog bone", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Dog is a noun modifier here.",
    },
    {
      id: 8,
      title:
        "Meet me where there is a station for a train. It's a ________________.",
      possibleAnswersAndExplanation: [
        { title: "train station", correctAnswer: true },
        { title: "station train" },
      ],
      userAnswer: "",
      explanation: "Train is a noun modifier here.",
    },
    {
      id: 9,
      title: "This is a ladder with steps.   It’s a ___________.",
      possibleAnswersAndExplanation: [
        { title: "step ladder", correctAnswer: true },
        { title: "ladder step" },
      ],
      userAnswer: "",
      explanation: "Step is a noun modifier",
    },
    {
      id: 10,
      title: "I paid for lessons for swimming. They are _____________.",
      possibleAnswersAndExplanation: [
        { title: "swimming lessons", correctAnswer: true },
        { title: "swimmings lesson" },
      ],
      userAnswer: "",
      explanation: "Swimming is a noun modifier",
    },
    {
      id: 11,
      title: "He uses it to cut paper. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "paper cutter", correctAnswer: true },
        { title: "cut paper" },
      ],
      userAnswer: "",
      explanation: "Paper is a noun modifier",
    },
    {
      id: 12,
      title: "You sit on it in the park. It's a _____________.",
      possibleAnswersAndExplanation: [
        { title: "park bench", correctAnswer: true },
        { title: "bench park" },
      ],
      userAnswer: "",
      explanation: "Park is a noun modifier",
    },
  ];

  return (
    <>
      <div className={styles.page_title}>
        <h1>Noun Modifiers</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          Noun modifiers are words or phrases that provide additional
          information about a noun, helping to describe, specify, or quantify
          it. We sometimes have two nouns together to demonstrate that one thing
          is a part of something else. In the following examples, the first noun
          is called a noun modifier.
        </p>

        <ul className="page-examples">
          <li>
            <b>Baltimore</b> residents
          </li>
          <li>
            The <b>dog</b> bowl
          </li>
          <li>
            The <b>chair</b> leg
          </li>
          <li>
            My <b>gold</b> watch
          </li>
          <li>
            The <b>shopping</b> list
          </li>
        </ul>

        <p>Noun modifiers can be used to show what something is made of:</p>
        <ul className="page-examples">
          <li>a metal chair</li>
          <li>a gold watch</li>
          <li>a wood table</li>
        </ul>

        <p>Noun modifiers can be used for values or measurements:</p>
        <ul className="page-examples">
          <li>an hour drive</li>
          <li>a thousand mile trip</li>
          <li>a twenty pound bag</li>
        </ul>

        <p>Noun modifiers can be used with nouns ending in –er:</p>
        <ul className="page-examples">
          <li>a dress maker</li>
          <li>a club manager</li>
          <li>a factory worker</li>
        </ul>
      </div>
      <p>Noun modifiers are always singular</p>
      <ul className="page-examples">
        <li>
          a basketball player{" "}
          <span style={{ color: "red" }}>NOT a basketballs player</span>
        </li>
      </ul>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fXVyba_KrCI?si=ml0n-c8e_fF1CJ85"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
