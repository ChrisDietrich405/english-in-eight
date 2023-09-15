"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../styles/content-page.module.css";

export default function PossessivePronouns() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title:
        " My headset needs to be fixed, but (you) _____________ is working.",
      possibleAnswersAndExplanation: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "My computer is a Lenovo, but (he) _______________ is a PC.",
      possibleAnswersAndExplanation: [
        { title: " his", correctAnswer: true },
        { title: " he" },
      ],
      userAnswer: "",
    },
    {
      title:
        "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
      possibleAnswersAndExplanation: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
    },
    {
      title:
        "We gave them our number, and they gave us (they) __________________.",
      possibleAnswersAndExplanation: [
        { title: " theirs" },
        { title: " they", correctAnswer: true },
      ],
      userAnswer: "",
    },

    {
      title: "My motorcycle is new, but (he)  __________ is old.",
      possibleAnswersAndExplanation: [
        { title: " he" },
        { title: " his", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "She can't have any cake! It's all (I)______________ !",
      possibleAnswersAndExplanation: [
        { title: " my" },
        { title: " mine", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "My pen is broken. Can I use (you) ____________ ?",
      possibleAnswersAndExplanation: [
        { title: " you" },
        { title: " yours", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "That money is (I) ____________.",
      possibleAnswersAndExplanation: [
        { title: " mine", correctAnswer: true },
        { title: " my" },
      ],
      userAnswer: "",
    },
    {
      title: "The desk is (we) ______________.",
      possibleAnswersAndExplanation: [
        { title: " ours", correctAnswer: true },
        { title: " we" },
      ],
      userAnswer: "",
    },
    {
      title: "The dress is (she)_____________. ",
      possibleAnswersAndExplanation: [
        { title: " hers", correctAnswer: true },
        { title: " she" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "My car is blue, but (she) _____________ is red.",
        possibleAnswersAndExplanation: [
          { title: " she" },
          { title: " hers", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "I love my phone, but (you) _______________ is better.",
        possibleAnswersAndExplanation: [
          { title: " your" },
          { title: " yours", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "Their dog is so cute, but (ours) _____________ is a cuter.",
        possibleAnswersAndExplanation: [
          { title: " our" },
          { title: " ours", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "The book is on (he) _______________ shelf.",
        possibleAnswersAndExplanation: [
          { title: " his", correctAnswer: true },
          { title: " he" },
        ],
        userAnswer: "",
      },

      {
        title: "My cookies are good, but (they) _______________ are delicious.",
        possibleAnswersAndExplanation: [
          { title: " they" },
          { title: " theirs", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "My friend's cat is friendly. (I) _______________ is shy.",
        possibleAnswersAndExplanation: [
          { title: " my" },
          { title: " mine", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "My TV is big, but (you) ____________ is huge",
        possibleAnswersAndExplanation: [
          { title: " you" },
          { title: " yours", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "Her laptop is new. (We) _______________ is old.",
        possibleAnswersAndExplanation: [
          { title: "Our" },
          { title: "Ours", correctAnswer: true },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Collective Nouns | English in Eight Minutes</title>
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
          content="Collective Nouns | English in Eight Minutes"
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

// import Quiz from "@/src/components/Quiz";
// import Head from "next/head";

// import styles from "../../styles/content-page.module.css";

// //DONE

// export default function PossessivePronouns() {
//   return (
//     <>
//       <Head>
//         <title>Possessive Pronouns | English in Eight Minutes</title>
//         <meta
//           content="Learn about possessive pronouns in English grammar. Discover how they indicate ownership and replace nouns with examples."
//           name="description"
//         />
//         <meta
//           content="English, Grammar, Possessive Pronouns, Ownership, Examples"
//           name="keywords"
//         />

//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://example.com/possessive-pronouns"
//         />
//         <meta
//           property="og:title"
//           content="Possessive Pronouns | English in Eight Minutes"
//         />
//         <meta
//           property="og:description"
//           content="Learn about possessive pronouns in English grammar. Discover how they indicate ownership and replace nouns with examples."
//         />
//         <meta
//           property="og:image"
//           content="https://example.com/images/possessive-pronouns.jpg"
//         />

//         <link rel="icon" href="/favicon.ico" />
//         <link
//           rel="icon"
//           type="image/png"
//           href="/favicon-32x32.png"
//           sizes="32x32"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           href="/favicon-16x16.png"
//           sizes="16x16"
//         />
//       </Head>

//       <div className={styles.page_title}>
//         <h1>Possessive Pronouns</h1>
//       </div>
//       <div className="page-body">
//         <p className={styles.grammar_explanation_paragraph}>
//           Possessive pronouns are pronouns that are used to indicate ownership
//           (possession) and replace a noun. The English possessive pronouns are
//           mine, ours, yours, his, hers, theirs,
//         </p>
//       </div>
//       <div className="page-examples">
//         <p>Examples</p>
//         <ul>
//           <li>
//             I have a house - It's <b>mine.</b>
//           </li>
//           <li>
//             You have a boat - That boat is <b>yours.</b>
//           </li>
//           <li>
//             He has a car - It is <b>his.</b>
//           </li>
//           <li>
//             She has a tattoo - It is <b>hers.</b>
//           </li>
//           <li>
//             We have an apartment - It is <b>ours.</b>
//           </li>
//           <li>
//             They have a son - He is <b>theirs.</b>
//           </li>
//         </ul>
//       </div>
//       <Quiz
//         title="Take a quiz!"
//         questions={[
//           //because we are in react we need to start the array with a curly bracket (because it's inside of a component)

//           {
//             title:
//               " My headset needs to be fixed, but (you) _____________ is working.",
//             possibleAnswersAndExplanation: [
//               { title: " you" },
//               { title: " yours", correctAnswer: true },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "My computer is a Lenovo, but (he) _______________ is a PC.",
//             possibleAnswersAndExplanation: [
//               { title: " his", correctAnswer: true },
//               { title: " he" },
//             ],
//             userAnswer: "",
//           },
//           {
//             title:
//               "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
//             possibleAnswersAndExplanation: [
//               { title: " mine", correctAnswer: true },
//               { title: " my" },
//             ],
//             userAnswer: "",
//           },
//           {
//             title:
//               "We gave them our number, and they gave us (they) __________________.",
//             possibleAnswersAndExplanation: [
//               { title: " theirs" },
//               { title: " they", correctAnswer: true },
//             ],
//             userAnswer: "",
//           },

//           {
//             title: "My motorcycle is new, but (he)  __________ is old.",
//             possibleAnswersAndExplanation: [
//               { title: " he" },
//               { title: " his", correctAnswer: true },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "She can't have any cake! It's all (I)______________ !",
//             possibleAnswersAndExplanation: [
//               { title: " my" },
//               { title: " mine", correctAnswer: true },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "My pen is broken. Can I use (you) ____________ ?",
//             possibleAnswersAndExplanation: [
//               { title: " you" },
//               { title: " yours", correctAnswer: true },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "That money is (I) ____________.",
//             possibleAnswersAndExplanation: [
//               { title: " mine", correctAnswer: true },
//               { title: " my" },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "The desk is (we) ______________.",
//             possibleAnswersAndExplanation: [
//               { title: " ours", correctAnswer: true },
//               { title: " we" },
//             ],
//             userAnswer: "",
//           },
//           {
//             title: "The dress is (she)_____________. ",
//             possibleAnswersAndExplanation: [
//               { title: " hers", correctAnswer: true },
//               { title: " she" },
//             ],
//             userAnswer: "",
//           },
//         ]}
//       ></Quiz>
//     </>
//   );
// }
