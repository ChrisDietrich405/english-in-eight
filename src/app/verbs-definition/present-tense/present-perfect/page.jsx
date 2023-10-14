import QuizForm from "@/src/components/QuizForm";
import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Present Perfect | English in Eight Minutes",
  description:
    "Learn about the present perfect tense in English. This page provides explanations and examples of using the present perfect tense for actions with a connection to the present or past experiences.",
  keywords:
    "English, present perfect, grammar, tense, past experiences, actions with a connection to the present",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Present Perfect | English in Eight Minutes",
    description:
      "Learn about the present perfect tense in English. This page provides explanations and examples of using the present perfect tense for actions with a connection to the present or past experiences.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function PresentPerfect() {
  const questionsArray = [
    {
      id: 1,
      title: "She ___________  tofu.",
      possibleAnswers: [
        { title: "a. has eaten", correctAnswer: true },
        { title: "b. have eaten" },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
    {
      id: 2,
      title: "They ______________ their flight.",
      possibleAnswers: [
        { title: "a. have missed", correctAnswer: true },
        { title: "b. has missed" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for they.",
    },
    {
      id: 3,
      title: "He ___________ to Tanzania.",
      possibleAnswers: [
        { title: "a. have gone" },
        { title: "b. has gone", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
    {
      id: 4,
      title: "We ___________ that magazine.",
      possibleAnswers: [
        { title: "a. has read" },
        { title: "b. have read", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for we.",
    },
    {
      id: 5,
      title: "We ____________ here for thirteen years.",
      possibleAnswers: [
        { title: "a. has lived" },
        { title: "b. have lived", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for we.",
    },
    {
      id: 6,
      title: "You ______________ Marcus for five years.",
      possibleAnswers: [
        { title: "a. have known", correctAnswer: true },
        { title: "b. has known" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for you.",
    },
    {
      id: 7,
      title: "We ______________ here for three weeks.",
      possibleAnswers: [
        { title: "a. have been", correctAnswer: true },
        { title: "b. has been" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for we.",
    },
    {
      id: 8,
      title: "I ___________ Arabic.",
      possibleAnswers: [
        { title: "a. has studied" },
        { title: "b. have studied", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for I.",
    },
    {
      id: 9,
      title: "I ______________ my phone.",
      possibleAnswers: [
        { title: "a. have lost", correctAnswer: true },
        { title: "b. has lost" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for I.",
    },
    {
      id: 10,
      title: "He ______________ too much soda.",
      possibleAnswers: [
        { title: "a. have drunk" },
        { title: "b. has drunk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
    {
      id: 11,
      title: "They ___________ on the project a lot.",
      possibleAnswers: [
        { title: "a. has worked" },
        { title: "b. have worked", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for they.",
    },
    {
      id: 12,
      title: "She ___________ a beautiful song.",
      possibleAnswers: [
        { title: "a. have chosen" },
        { title: "b. has chosen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
    {
      id: 13,
      title: "We ___________ Thailand.",
      possibleAnswers: [
        { title: "a. has visited" },
        { title: "b. have visited", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for we.",
    },
    {
      id: 14,
      title: "He ___________ a sandcastle on the beach.",
      possibleAnswers: [
        { title: "a. have built" },
        { title: "b. has built", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
    {
      id: 15,
      title: "I ___________ that book before.",
      possibleAnswers: [
        { title: "a. has read" },
        { title: "b. have read", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for I.",
    },
    {
      id: 16,
      title: "You ______________ speak to the administrator.",
      possibleAnswers: [
        { title: "a. have spoken", correctAnswer: true },
        { title: "b. has spoken" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for you.",
    },
    {
      id: 17,
      title: "We ______________ here for three weeks.",
      possibleAnswers: [
        { title: "a. have been", correctAnswer: true },
        { title: "b. has been" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for we.",
    },
    {
      id: 18,
      title: "I ___________ (study) microbiology.",
      possibleAnswers: [
        { title: "a. has studied" },
        { title: "b. have studied", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for I.",
    },
    {
      id: 19,
      title: "We ______________ (see) that series.",
      possibleAnswers: [
        { title: "a. have seen", correctAnswer: true },
        { title: "b. has seen" },
      ],
      userAnswer: "",
      explanation: "Have is the correct form for I.",
    },
    {
      id: 20,
      title: "He ______________ (buy) all the soda in the store.",
      possibleAnswers: [
        { title: "a. have bought" },
        { title: "b. has bought", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Has is the correct form for she, he, it.",
    },
  ];

  return (
    <>
      <div className="page-body">
        <div className={styles.page_title}>
          <h1>Present Perfect </h1>
        </div>
        <div>
          <p className={styles.grammar_explanation_paragraph}>
            The present perfect is used to connect the past with the present. It
            is often used to talk about actions or experiences that started in
            the past but have a connection to the current moment. It can also be
            used to describe actions that have finished.
          </p>
        </div>
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
              <td>I have thought</td>
              <td>I've thought</td>
              <td>I have not thought</td>
              <td>I haven't thought</td>
            </tr>
            <tr>
              <td>You have spoken</td>
              <td>You've spoken</td>
              <td>You have not spoken</td>
              <td>You haven't spoken</td>
            </tr>
            <tr>
              <td>She, he, it has worked</td>
              <td>She, he, it's worked</td>
              <td>She, he, it has not worked</td>
              <td>She, he, it hasn't worked</td>
            </tr>
            <tr>
              <td>We have begun</td>
              <td>We've begun</td>
              <td>We have not begun</td>
              <td>We haven't begun</td>
            </tr>
            <tr>
              <td>They have eaten</td>
              <td>They've eaten</td>
              <td>They have not eaten</td>
              <td>They haven't eaten</td>
            </tr>
          </tbody>
        </table>

        <h4>
          When the exact time of the action is unknown or isn't important,
          including actions which are finished (not continuing into the present)
        </h4>
        <ul className="page-examples">
          <li>Have you seen 'Black Panther'?</li>
          <li>Someone has stolen my phone!</li>
          <li>I have been to Acra.</li>
        </ul>
        <h4>When the time period mentioned hasn't ended</h4>
        <ul className="page-examples">
          <li>It has snowed a lot this winter.</li>
          <li>I have worked very hard today.</li>
          <li>They haven't seen him today.</li>
        </ul>
        <h4>Actions began in the past and continuing into the present</h4>
        <ul className="page-examples">
          <li>He has worked as a bartender for five years.</li>
          <li>We have had the same house for thirty years.</li>
          <li>They haven't worked here for years.</li>
        </ul>
        <h4>
          Actions repeated in an unspecified period between the past and now
        </h4>
        <ul className="page-examples">
          <li>He has gone to visit them frequently.</li>
          <li>It has thundered several times already.</li>
          <li>We have complained about that restaurant many times.</li>
        </ul>
      </div>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vd0yESrQMs0?si=P-elY-aDigpSSZTy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

{
  /* import Quiz from "@/src/components/Quiz";
import styles from "../../../styles/content-page.module.css"; */
}
