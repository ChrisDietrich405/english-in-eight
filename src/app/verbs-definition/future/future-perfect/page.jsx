import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Future Perfect Tense Quiz | English in Eight Minutes",
  description:
    "Test your knowledge of the future perfect tense in English with this quiz. Practice forming sentences using the future perfect tense.",
  keywords:
    "future perfect tense, English grammar, English quiz, phrasal verbs, idiomatic expressions, United States",
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
    title: "Future Perfect Tense Quiz | English in Eight Minutes",
    description:
      "Test your knowledge of the future perfect tense in English with this quiz. Practice forming sentences using the future perfect tense. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
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

export default function FuturePerfect() {
  const questionsArray = [
    {
      id: 1,
      title: "The tree _________________ by then.",
      possibleAnswers: [
        { title: "a. will have grown", correctAnswer: true },
        { title: "b. will have grew" },
      ],
      userAnswer: "",
      explanation: "Grown is the past participle of grow.",
    },
    {
      id: 2,
      title: "She ______________ (sleep) eight hours.",
      possibleAnswers: [
        { title: "a. will have slept", correctAnswer: true },
        { title: "b. will have sleep" },
      ],
      userAnswer: "",
      explanation: "Slept is the past participle of sleep.",
    },
    {
      id: 3,
      title:
        "Jerome ______________ (finish) his LinkedIn profile by this afternoon.",
      possibleAnswers: [
        { title: "a. will have finished", correctAnswer: true },
        { title: "b. will have finish" },
      ],
      userAnswer: "",
      explanation: "Finished is the past participle of finish .",
    },

    {
      id: 4,
      title: "At 5, she ______________ in this office for 24 hours.",
      possibleAnswers: [
        { title: "a. will have been", correctAnswer: true },
        { title: "b. will have be" },
      ],
      userAnswer: "",
      explanation: "Been is the past participle of be.",
    },
    {
      id: 5,
      title: "Dad ______________ our favorite dinner by the time you get home.",
      possibleAnswers: [
        { title: "a. will have cooked" },
        { title: "b. will have cook", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cooked is the past participle of cook.",
    },
    {
      id: 6,
      title: "It _______________ raining by then.",
      possibleAnswers: [
        { title: "a. will have stopped", correctAnswer: true },
        { title: "b. will have stop" },
      ],
      userAnswer: "",
      explanation: "Stopped is the past participle of stop.",
    },
    {
      id: 7,
      title: "When we get married, I ______________ Jerome for four years.",
      possibleAnswers: [
        { title: "a. will have known", correctAnswer: true },
        { title: "b. will have knew" },
      ],
      userAnswer: "",
      explanation: "Known is the past participle of know.",
    },
    {
      id: 8,
      title: "They _______________ to Syria by the time the minister retires.",
      possibleAnswers: [
        { title: "a. will have gone" },
        { title: "b. will have go", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Gone is the past participle of go.",
    },

    {
      id: 9,

      title: "I _________________ for work by then .",
      possibleAnswers: [
        { title: "a. will have left", correctAnswer: true },
        { title: "b. will have leave" },
      ],
      userAnswer: "",
      explanation: "Left is the past participle of leave.",
    },
    {
      id: 10,
      title: "By Thursday they _____________ 56 hours.",
      possibleAnswers: [
        { title: "a. will have worked", correctAnswer: true },
        { title: "b. will have work" },
      ],
      userAnswer: "",
      explanation: "Worked is the past participle of work.",
    },

    {
      id: 11,
      title:
        "The old tree _______________ by a new one in the park next month.",
      possibleAnswers: [
        { title: "a. will have been replaced", correctAnswer: true },
        { title: "b. will have replace" },
      ],
      userAnswer: "",
      explanation: "Replaced is the past participle of replace.",
    },
    {
      id: 12,
      title:
        "The river _______________ by the time we reach the bridge tomorrow.",
      possibleAnswers: [
        { title: "a. will have flooded", correctAnswer: true },
        { title: "b. will have flood" },
      ],
      userAnswer: "",
      explanation: "Flooded is the past participle of flood.",
    },
    {
      id: 13,
      title: "Mary _______________ her project by the end of the week.",
      possibleAnswers: [
        { title: "a. will have completed", correctAnswer: true },
        { title: "b. will have complete" },
      ],
      userAnswer: "",
      explanation: "Completed is the past participle of complete.",
    },
    {
      id: 14,
      title: "The cake _______________ by the time the party starts.",
      possibleAnswers: [
        { title: "a. will have been eaten", correctAnswer: true },
        { title: "b. will have eat" },
      ],
      userAnswer: "",
      explanation: "Eaten is the past participle of eat.",
    },
    {
      id: 15,
      title:
        "The athletes _______________ their training for the upcoming competition.",
      possibleAnswers: [
        { title: "a. will have intensified", correctAnswer: true },
        { title: "b. will have intensify" },
      ],
      userAnswer: "",
      explanation: "Intensified is the past participle of intensify.",
    },
    {
      id: 16,
      title: "The snow _______________ by the time we go skiing next weekend.",
      possibleAnswers: [
        { title: "a. will have melted", correctAnswer: true },
        { title: "b. will have melt" },
      ],
      userAnswer: "",
      explanation: "Melted is the past participle of melt.",
    },
    {
      id: 17,
      title: "The museum _______________ a new exhibit by the end of the year.",
      possibleAnswers: [
        { title: "a. will have unveiled", correctAnswer: true },
        { title: "b. will have unveil" },
      ],
      userAnswer: "",
      explanation: "Unveiled is the past participle of unveil.",
    },
    {
      id: 18,
      title: "By next summer, I _______________ Spanish for two years.",
      possibleAnswers: [
        { title: "a. will have studied", correctAnswer: true },
        { title: "b. will have study" },
      ],
      userAnswer: "",
      explanation: "Studied is the past participle of study.",
    },
    {
      id: 19,
      title: "The house _______________ by the time we move in next month.",
      possibleAnswers: [
        { title: "a. will have been painted", correctAnswer: true },
        { title: "b. will have paint" },
      ],
      userAnswer: "",
      explanation: "Painted is the past participle of paint.",
    },
  ];

  return (
    <main className="page-body">
      <div className={styles.page_title}>
        <h1>Future Perfect</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future perfect tense is used to demonstrate a future event that has
        a definitive end date.{" "}
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
            <td>I will have eaten</td>
            <td>I'll have eaten</td>
            <td>I will not have eaten</td>
            <td>I won't have eaten</td>
          </tr>
          <tr>
            <td>You will have finished</td>
            <td>You'll have finished</td>
            <td>You will not have finished</td>
            <td>You won't have finished</td>
          </tr>
          <tr>
            <td>She, he, it will have worked</td>
            <td>She, he, it'll have worked</td>
            <td>She, he, it will not have worked</td>
            <td>She, he, it won't have worked</td>
          </tr>
          <tr>
            <td>We will have started</td>
            <td>We'll have started</td>
            <td>We will not have started</td>
            <td>We won't have started</td>
          </tr>
          <tr>
            <td>They will have left</td>
            <td>They'll have left</td>
            <td>They will not have left</td>
            <td>They won't have left</td>
          </tr>
          {/* <tbody>
          {data.map((verb) => {
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
      <p>
        The future perfect is used with a future time word, (and often with
        'by') to talk about an action that will finish before a specific time in
        the future, but we're not sure exactly when.
      </p>
      <ul className="page-examples">
        <li>By the time I'm seventy, I will have retired.</li>
        <li>By 10, he will have finished the housework.</li>
      </ul>
      <p>
        The future perfect is used to indicate 'how long' an action will have
        lasted compared to another action.{" "}
      </p>
      <ul className="page-examples">
        <li>The storm will have finished by the time they arrive.</li>
        <li>Nia will have married Demarcus by then.</li>
      </ul>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RRCGlFNWbpk?si=A6obcA5EHcO71XHU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
