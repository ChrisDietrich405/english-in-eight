import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Possessive Pronouns | English in Eight Minutes",
  description:
    "Learn about possessive pronouns in English with English in Eight Minutes. Understand how possessive pronouns work and test your knowledge with a quiz.",
  keywords:
    "English, Possessive Pronouns, English grammar, English in Eight Minutes",
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
    title: "Possessive Pronouns | English in Eight Minutes",
    description:
      "Learn about possessive pronouns in English with English in Eight Minutes. Understand how possessive pronouns work and test your knowledge with a quiz.",
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

export default function PossessivePronouns() {
  const questionsArray = [
    {
      id: 1,
      title:
        " My headset needs to be fixed, but (you) _____________ is working.",
      possibleAnswers: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },
    {
      id: 2,
      title: "My computer is a Lenovo, but (he) _______________ is a PC.",
      possibleAnswers: [
        { title: " his", correctAnswer: true },
        { title: " he" },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },
    {
      id: 3,
      title:
        "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
      possibleAnswers: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 4,
      title:
        "We gave them our number, and they gave us (they) __________________.",
      possibleAnswers: [
        { title: " theirs" },
        { title: " they", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "They is the possessive pronoun for they.",
    },

    {
      id: 5,
      title: "My motorcycle is new, but (he)  __________ is old.",
      possibleAnswers: [
        { title: " he" },
        { title: " his", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },
    {
      id: 6,
      title: "She can't have any cake! It's all (I)______________ !",
      possibleAnswers: [
        { title: " my" },
        { title: " mine", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 7,
      title: "My pen is broken. Can I use (you) ____________ ?",
      possibleAnswers: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },
    {
      id: 8,
      title: "That money is (I) ____________.",
      possibleAnswers: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },
    {
      id: 9,
      title: "The desk is (we) ______________.",
      possibleAnswers: [
        { title: " ours", correctAnswer: true },
        { title: " we" },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },
    {
      id: 10,
      title: "The dress is (she)_____________. ",
      possibleAnswers: [
        { title: " hers", correctAnswer: true },
        { title: " she" },
      ],
      userAnswer: "",
      explanation: "Hers is the possessive pronoun for she.",
    },
    {
      id: 11,
      title: "My car is blue, but (she) _____________ is red.",
      possibleAnswers: [
        { title: " she" },
        { title: " hers", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hers is the possessive pronoun for she.",
    },

    {
      id: 12,
      title: "I love my phone, but (you) _______________ is better.",
      possibleAnswers: [
        { title: " your" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },

    {
      id: 13,
      title: "Their dog is so cute, but (ours) _____________ is a cuter.",
      possibleAnswers: [
        { title: " our" },
        { title: " ours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },

    {
      id: 14,
      title: "The book is on (he) _______________ shelf.",
      possibleAnswers: [
        { title: " his", correctAnswer: true },
        { title: " he" },
      ],
      userAnswer: "",
      explanation: "His is the possessive pronoun for he.",
    },

    {
      id: 15,
      title: "My cookies are good, but (they) _______________ are delicious.",
      possibleAnswers: [
        { title: " they" },
        { title: " theirs", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Theirs is the possessive pronoun for they.",
    },

    {
      id: 16,
      title: "My friend's cat is friendly. (I) _______________ is shy.",
      possibleAnswers: [
        { title: " my" },
        { title: " mine", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Mine is the possessive pronoun for I.",
    },

    {
      id: 17,
      title: "My TV is big, but (you) ____________ is huge",
      possibleAnswers: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Yours is the possessive pronoun for you.",
    },

    {
      id: 18,
      title: "Her laptop is new. (We) _______________ is old.",
      possibleAnswers: [
        { title: "Our" },
        { title: "Ours", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Ours is the possessive pronoun for we.",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Possessive Pronouns</h1>
      </div>
      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          Possessive pronouns are pronouns that are used to indicate ownership
          (possession) and replace a noun. The English possessive pronouns are
          mine, ours, yours, his, hers, theirs,
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            I have a house - It's <b>mine.</b>
          </li>
          <li>
            You have a boat - That boat is <b>yours.</b>
          </li>
          <li>
            He has a car - It is <b>his.</b>
          </li>
          <li>
            She has a tattoo - It is <b>hers.</b>
          </li>
          <li>
            We have an apartment - It is <b>ours.</b>
          </li>
          <li>
            They have a son - He is <b>theirs.</b>
          </li>
        </ul>
      </div>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bhzh8VDykc4?si=oBDWfOw4d_XEMmfi"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
