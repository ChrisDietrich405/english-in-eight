import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Future Continuous Tense | English in Eight Minutes",
  description:
    "Learn about the future continuous tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
  keywords:
    "future continuous tense, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States",
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
    title: "Future Continuous Tense | English in Eight Minutes",
    description:
      "Learn about the future continuous tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
    images: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
    ],
  },
};

export default function FutureContinuous() {
  const questionsArray = [
    {
      id: 1,
      title: "In an hour she _______________ (clean) the bathrooms.",
      possibleAnswersAndExplanation: [
        { title: "a. will be cleaning", correctAnswer: true },
        { title: "b. will be clean" },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 2,
      title: "Next month they _______________ (complain) about this.",
      possibleAnswersAndExplanation: [
        { title: "a. will be complain" },
        { title: "b. will be complaining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 3,
      title:
        "Unfortunately, sea levels will ____________ (rise) in the next 30 years.",
      possibleAnswersAndExplanation: [
        { title: "a. will still be rise" },
        { title: "b. will still be rising", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 4,
      title: "I ______________ (see) Marcus at the conference next week.",
      possibleAnswersAndExplanation: [
        { title: "a. will be see" },
        { title: "b. will be seeing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 5,
      title: "When he's in Morocco he _____________ with friends.",
      possibleAnswersAndExplanation: [
        { title: "a. will be stay" },
        { title: "b. will be staying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 6,
      title: "Miguel _____________ (compete) in a marathon next month.",
      possibleAnswersAndExplanation: [
        { title: "a. will be competing", correctAnswer: true },
        { title: "b. will be compete" },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 7,
      title: "I ___________  with Nia this evening so I can talk to her.",
      possibleAnswersAndExplanation: [
        { title: "a. will be eat" },
        { title: "b. will be eating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 8,
      title: "Demarcus _______________ (run) in the race.",
      possibleAnswersAndExplanation: [
        { title: "a. will also be running", correctAnswer: true },
        { title: "b. will also be run" },
      ],
      userAnswer: "",
    },
    {
      id: 9,
      title: "He _____________ (sleep) when you telephone him.",
      possibleAnswersAndExplanation: [
        { title: "a. will be sleep" },
        { title: "b. will be sleeping", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 10,
      title: "I _____________ (play) hockey in the afternoon tomorrow.",
      possibleAnswersAndExplanation: [
        { title: "a. will be play" },
        { title: "b. will be playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 11,
      title:
        "At this time tomorrow, she _______________ (prepare) for her big presentation.",
      possibleAnswersAndExplanation: [
        { title: "a. will be prepare" },
        { title: "b. will be preparing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 12,
      title:
        "By the end of the week, they _______________ (travel) to five different cities.",
      possibleAnswersAndExplanation: [
        { title: "a. will be travel" },
        { title: "b. will be traveling", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 13,
      title:
        "Tomorrow morning, I _______________ (meet) Sarah at the coffee shop.",
      possibleAnswersAndExplanation: [
        { title: "a. will be meet" },
        { title: "b. will be meeting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 14,
      title:
        "In a few hours, he _______________ (take) his final exam for the semester.",
      possibleAnswersAndExplanation: [
        { title: "a. will be take" },
        { title: "b. will be taking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 15,
      title:
        "While on vacation, we _______________ (explore) the beautiful beaches of Hawaii.",
      possibleAnswersAndExplanation: [
        { title: "a. will be explore" },
        { title: "b. will be exploring", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 16,
      title:
        "During the summer break, Miguel _______________ (work) on a special project.",
      possibleAnswersAndExplanation: [
        { title: "a. will be work" },
        { title: "b. will be working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 17,
      title:
        "Later tonight, I _______________ (watch) a documentary about space exploration.",
      possibleAnswersAndExplanation: [
        { title: "a. will be watch" },
        { title: "b. will be watching", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 18,
      title:
        "During the holidays, Demarcus _______________ (visit) his family in another city.",
      possibleAnswersAndExplanation: [
        { title: "a. will be visit" },
        { title: "b. will be visiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 19,
      title: "Tonight, he _______________ (read) a book before going to bed.",
      possibleAnswersAndExplanation: [
        { title: "a. will be read" },
        { title: "b. will be reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 20,
      title:
        "In the afternoon, I _______________ (practice) my guitar for a few hours.",
      possibleAnswersAndExplanation: [
        { title: "a. will be practice" },
        { title: "b. will be practicing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },
  ];

  return (
    <>
      <div className={styles.page_title}>
        <h1>Future Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future continuous refers to an ongoing action in the future.
        Realistically it isn't a tense we use often.
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
            <td>I will be swimming</td>
            <td>I'll be swimming</td>
            <td>I will not be swimming</td>
            <td>I won't be swimming</td>
          </tr>
          <tr>
            <td>You will be dancing</td>
            <td>You'll be dancing</td>
            <td>You will not be dancing</td>
            <td>You won't be dancing</td>
          </tr>
          <tr>
            <td>She, he, it will be working</td>
            <td>She, he, it'll be working</td>
            <td>She, he, it will not be working</td>
            <td>She, he, it won't be working</td>
          </tr>
          <tr>
            <td>We will be talking</td>
            <td>We'll be talking</td>
            <td>We will not be talking</td>
            <td>We won't be talking</td>
          </tr>
          <tr>
            <td>They will be running</td>
            <td>They'll be running</td>
            <td>They will not be running</td>
            <td>They won't be running</td>
          </tr>
          {/* <tbody>
          {verbs.map((verb) => {
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

      <div className="page-body">
        <p>Examples</p>
        <ul className="page-examples">
          <li>By Christmas I will be skating like a pro.</li>
          <li>
            It's very exciting! This time next Monday you will be working at
            your new job.
          </li>
          <li>This time next week she will be relaxing at the beach.</li>
        </ul>
      </div>
      <div className="page-body"></div>

      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H5UD03yKfVI?si=PaUbvAXYLCjmE7YT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import Head from "next/head";
// import Quiz from "@/src/components/Quiz";

// import styles from "../../../styles/content-page.module.css";

// export default function FutureContinuous() {
//   const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
//     useState(true);
//   const [quiz, setQuiz] = useState([]);

//   const questionsArray = [
//     {
//       id: 1,
//       title: "In an hour she _______________ (clean) the bathrooms.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be cleaning", correctAnswer: true },
//         { title: "b. will be clean" },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 2,
//       title: "Next month they _______________ (complain) about this.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be complain" },
//         { title: "b. will be complaining", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 3,
//       title:
//         "Unfortunately, sea levels will ____________ (rise) in the next 30 years.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will still be rise" },
//         { title: "b. will still be rising", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 4,
//       title: "I ______________ (see) Marcus at the conference next week.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be see" },
//         { title: "b. will be seeing", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 5,
//       title: "When he's in Morocco he _____________ with friends.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be stay" },
//         { title: "b. will be staying", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 6,
//       title: "Miguel _____________ (compete) in a marathon next month.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be competing", correctAnswer: true },
//         { title: "b. will be compete" },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 7,
//       title: "I ___________  with Nia this evening so I can talk to her.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be eat" },
//         { title: "b. will be eating", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 8,
//       title: "Demarcus _______________ (run) in the race.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will also be running", correctAnswer: true },
//         { title: "b. will also be run" },
//       ],
//       userAnswer: "",
//     },
//     {
//       id: 9,
//       title: "He _____________ (sleep) when you telephone him.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be sleep" },
//         { title: "b. will be sleeping", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 10,
//       title: "I _____________ (play) hockey in the afternoon tomorrow.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be play" },
//         { title: "b. will be playing", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form you need an ing ending.",
//     },
//     {
//       id: 11,
//       title:
//         "At this time tomorrow, she _______________ (prepare) for her big presentation.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be prepare" },
//         { title: "b. will be preparing", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 12,
//       title:
//         "By the end of the week, they _______________ (travel) to five different cities.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be travel" },
//         { title: "b. will be traveling", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 12,
//       title:
//         "Tomorrow morning, I _______________ (meet) Sarah at the coffee shop.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be meet" },
//         { title: "b. will be meeting", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 13,
//       title:
//         "In a few hours, he _______________ (take) his final exam for the semester.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be take" },
//         { title: "b. will be taking", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 14,
//       title:
//         "While on vacation, we _______________ (explore) the beautiful beaches of Hawaii.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be explore" },
//         { title: "b. will be exploring", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 16,
//       title:
//         "During the summer break, Miguel _______________ (work) on a special project.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be work" },
//         { title: "b. will be working", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 17,
//       title:
//         "Later tonight, I _______________ (watch) a documentary about space exploration.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be watch" },
//         { title: "b. will be watching", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 18,
//       title:
//         "During the holidays, Demarcus _______________ (visit) his family in another city.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be visit" },
//         { title: "b. will be visiting", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 19,
//       title: "Tonight, he _______________ (read) a book before going to bed.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be read" },
//         { title: "b. will be reading", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },

//     {
//       id: 20,
//       title:
//         "In the afternoon, I _______________ (practice) my guitar for a few hours.",
//       possibleAnswersAndExplanation: [
//         { title: "a. will be practice" },
//         { title: "b. will be practicing", correctAnswer: true },
//       ],
//       userAnswer: "",
//       explanation: "With the continuous form, you need an 'ing' ending.",
//     },
//   ];

//   useEffect(() => {
//     console.log(questionsArray);
//     const questionsVar = questionsArray.splice(0, 10);
//     setQuiz(questionsVar);
//   }, []);

//   const secondSetQuestions = () => {
//     const questionsVar = questionsArray.splice(10);
//     return questionsVar;
//   };

//   return (
//     <>
//       <Head>
//         <title>Future Continuous | English in Eight Minutes</title>
//         <meta
//           name="description"
//           content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://dietrichlandcare.com" />
//         <meta property="og:title" content="Dietrich Land Care" />
//         <meta
//           property="og:description"
//           content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
//         />
//         <meta
//           property="og:image"
//           content="https://dietrichlandcare.com/images/logo.jpg"
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
//         <h1>Future Continuous</h1>
//       </div>
//       <p className={styles.grammar_explanation_paragraph}>
//         The future continuous refers to an ongoing action in the future.
//         Realistically it isn't a tense we use often.
//       </p>

//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Positive</th>
//             <th>Positive short form</th>
//             <th>Negative</th>
//             <th>Negative short form</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>I will be swimming</td>
//             <td>I'll be swimming</td>
//             <td>I will not be swimming</td>
//             <td>I won't be swimming</td>
//           </tr>
//           <tr>
//             <td>You will be dancing</td>
//             <td>You'll be dancing</td>
//             <td>You will not be dancing</td>
//             <td>You won't be dancing</td>
//           </tr>
//           <tr>
//             <td>She, he, it will be working</td>
//             <td>She, he, it'll be working</td>
//             <td>She, he, it will not be working</td>
//             <td>She, he, it won't be working</td>
//           </tr>
//           <tr>
//             <td>We will be talking</td>
//             <td>We'll be talking</td>
//             <td>We will not be talking</td>
//             <td>We won't be talking</td>
//           </tr>
//           <tr>
//             <td>They will be running</td>
//             <td>They'll be running</td>
//             <td>They will not be running</td>
//             <td>They won't be running</td>
//           </tr>
//           {/* <tbody>
//           {verbs.map((verb) => {
//             return (
//               <tr>
//               <td>{verb.positive}</td>
//               <td>{verb.positiveShortForm}</td>
//               <td>{verb.negative}</td>
//               <td>{verb.negativeShortForm}</td>
//               </tr>
//               );
//             })}
//           </tbody> */}
//         </tbody>
//       </table>

//       <div className="page-body">
//         <p>Examples</p>
//         <ul className="page-examples">
//           <li>By Christmas I will be skating like a pro.</li>
//           <li>
//             It's very exciting! This time next Monday you will be working at
//             your new job.
//           </li>
//           <li>This time next week she will be relaxing at the beach.</li>
//         </ul>
//       </div>
//       <div className="page-body"></div>
//       <Quiz
//         setQuiz={setQuiz}
//         title="Take a Quiz!"
//         questions={quiz}
//         secondSetQuestions={secondSetQuestions}
//         shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
//       ></Quiz>
//       <iframe
//         className={styles.iframe_wrapper}
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/H5UD03yKfVI?si=PaUbvAXYLCjmE7YT"
//         title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen
//       ></iframe>
//     </>
//   );
// }
