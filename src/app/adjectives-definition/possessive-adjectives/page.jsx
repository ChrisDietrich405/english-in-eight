import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Possessive Adjectives | English in Eight Minutes",
  description:
    "Learn about possessive adjectives in English with English in Eight Minutes. Understand the rules for using possessive adjectives to show ownership and take a quiz to test your knowledge.",
  keywords:
    "English, Possessive Adjectives, English grammar, English in Eight Minutes, possessive pronouns",
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
    title: "Possessive Adjectives | English in Eight Minutes",
    description:
      "Learn about possessive adjectives in English with English in Eight Minutes. Understand the rules for using possessive adjectives to show ownership and take a quiz to test your knowledge.",
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

export default function PossessiveAdjectives() {
  const questionsArray = [
    {
      id: 1,
      title: "Bia loves (she) _____________ clothes!",
      possibleAnswers: [
        { title: "her", correctAnswer: true },
        { title: "their" },
      ],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she.",
    },
    {
      id: 2,
      title: "Where is (they) ________________  professor?",
      possibleAnswers: [
        { title: "my" },
        { title: "their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 3,
      title: "He goes to school with (he) _____________ cousin.",
      possibleAnswers: [
        { title: "your" },
        { title: "his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },

    {
      id: 4,
      title: "(You) ______________ car is very old.",
      possibleAnswers: [
        { title: "Your", correctAnswer: true },
        { title: "My" },
      ],
      userAnswer: "",
      explanation: "Your is the possessive adjective for you.",
    },
    {
      id: 5,
      title: "(He)  ________________ favorite hobby is running.",
      possibleAnswers: [
        { title: "Your" },
        { title: "His", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 6,
      title: "Where is (I) _______________ phone?",
      possibleAnswers: [
        { title: "my", correctAnswer: true },
        { title: "your" },
      ],
      userAnswer: "",
      explanation: "My is the possessive adjective for I.",
    },
    {
      id: 7,
      title: "(I) _____________ husband is not feeling well.",
      possibleAnswers: [{ title: "My", correctAnswer: true }, { title: "Her" }],
      userAnswer: "",
      explanation: "My is the possessive adjective for I.",
    },
    {
      id: 8,
      title:
        "They want to go to Egypt. They want to see (it) ________________ tourist attractions.",
      possibleAnswers: [
        { title: "its", correctAnswer: true },
        { title: "their" },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 9,
      title: "(They) ________________ mother works in a restaurant.",
      possibleAnswers: [
        { title: "His" },
        { title: "Their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },

    {
      id: 10,
      title: "(He) _____________ name is Tyrese.",
      possibleAnswers: [
        { title: "Their" },
        { title: "His", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 11,
      title: "She shares (they) ________________ passion for cooking.",
      possibleAnswers: [
        { title: "my" },
        { title: "their", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Their is the possessive adjective for they.",
    },
    {
      id: 12,
      title: "(We) _______________ cat is very playful.",
      possibleAnswers: [
        { title: "His" },
        { title: "Our", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
    {
      id: 13,
      title: "Lisa and Mark enjoy (she) _____________ company.",
      possibleAnswers: [
        { title: "our" },
        { title: "her", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she.",
    },
    {
      id: 14,
      title: "The children found (he) _____________ lost toy.",
      possibleAnswers: [{ title: "my" }, { title: "his", correctAnswer: true }],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 15,
      title: "(You) _______________ friends are very kind.",
      possibleAnswers: [
        { title: "Your", correctAnswer: true },
        { title: "My" },
      ],
      userAnswer: "",
      explanation: "Your is the possessive adjective for you.",
    },
    {
      id: 16,
      title: "We often visit (I) _______________ grandparents.",
      possibleAnswers: [
        { title: "our", correctAnswer: true },
        { title: "her" },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
    {
      id: 17,
      title: "(She) _______________ sister is a talented musician.",
      possibleAnswers: [{ title: "My" }, { title: "Her", correctAnswer: true }],
      userAnswer: "",
      explanation: "Her is the possessive adjective for she.",
    },
    {
      id: 18,
      title:
        "The students admired (he) _____________ dedication to their education.",
      possibleAnswers: [
        { title: "their" },
        { title: "his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive adjective for he.",
    },
    {
      id: 19,
      title: "(You) _______________ book is on the table.",
      possibleAnswers: [
        { title: "Her" },
        { title: "Your", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Your is the possessive adjective for you.",
    },
    {
      id: 20,
      title: "David mentioned (we) _____________ favorite movie.",
      possibleAnswers: [
        { title: "his" },
        { title: "our", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Our is the possessive adjective for we.",
    },
  ];

  return (
    <main>
      <div className={styles.page_body}>
        <div className="possessive-adjectives">
          <div className={styles.page_title}>
            <h1>Possessive Adjectives</h1>
          </div>
          <div className={styles.page_body}>
            <p className={styles.grammar_explanation_paragraph}>
              Possessive adjectives are words used to show ownership or
              possession. They are placed before a noun to indicate that the
              noun belongs to someone or something. Examples of possessive
              adjectives include "my," "your," "his," "her," "its," "our," and
              "their."
            </p>
          </div>

          <ul className="page-examples">
            <li>
              I have a car. This is <b>my</b> car.
            </li>
            <li>
              You have a dog. That is <b>your</b> dog
            </li>
            <li>
              He has a car. It is <b>his</b> car
            </li>
            <li>
              She has a laptop. It is <b>her</b> laptop.
            </li>
            <li>
              The car has new tires. <b>Its</b> tires are new.
            </li>
            <li>
              We have a motorcycle. It is <b>our</b> motorcycle.
            </li>
            <li>
              They have a boat. That is <b>their</b> boat.
            </li>
          </ul>
        </div>
      </div>
      <QuizForm questionsArray={questionsArray} />
    </main>
  );
}
