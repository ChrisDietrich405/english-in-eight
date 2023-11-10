import QuizForm from "@/src/components/QuizForm";
import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Present Simple Tense | English in Eight Minutes",
  description:
    "Learn the present simple tense in English with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of this important grammar concept.",
  keywords:
    "English, Present Simple Tense, English grammar, English in Eight Minutes",
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
    title: "Present Simple Tense | English in Eight Minutes",
    description:
      "Learn the present simple tense in English with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of this important grammar concept.",
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

export default function SimplePresent() {
  const questionsArray = [
    {
      id: 1,
      title: "He ________ (love) tea.",
      possibleAnswers: [
        { title: "a. loves", correctAnswer: true },
        { title: "b. love" },
      ],
      userAnswer: "",
      explanation: "loves is the correct positive form for she, he, it.",
    },
    {
      id: 2,
      title: "I _________ (like) dancing.",
      possibleAnswers: [
        { title: "a. don't like", correctAnswer: true },
        { title: "b. doesn't like" },
      ],
      userAnswer: "",
      explanation: "don't like is the correct negative form for I.",
    },
    {
      id: 3,
      title: "She ____________ (fly) to Canada twice a year.",
      possibleAnswers: [
        { title: "a. flies", correctAnswer: true },
        { title: "b. fly" },
      ],
      userAnswer: "",
      explanation: "flies is the correct positive form for she, he, it.",
    },
    {
      id: 4,
      title: "The class (it) __________ (begin) at 11am.",
      possibleAnswers: [
        { title: "a. begin" },
        { title: "b. begins", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "begins is the correct positive form for she, he, it.",
    },
    {
      id: 5,
      title: "He ________ (cry) when he watches sad movies.",
      possibleAnswers: [
        { title: "a. cry" },
        { title: "b. cries", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "cries is the correct positive form for she, he, it.",
    },
    {
      id: 6,
      title: "They ________ (wash) the dishes.",
      possibleAnswers: [
        { title: "a. don't washes" },
        { title: "b. don't wash", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "don't wash is the correct negative form for they.",
    },

    {
      id: 7,
      title: "I ________ (study) Arabic.",
      possibleAnswers: [
        { title: "a. study", correctAnswer: true },
        { title: "b. studies" },
      ],
      userAnswer: "",
      explanation: "study is the correct positive form for I.",
    },
    {
      id: 8,
      title: "They _________ (live) in Tunisia.",
      possibleAnswers: [
        { title: "a. live", correctAnswer: true },
        { title: "b. lives" },
      ],
      userAnswer: "",
      explanation: "live is the correct positive form for They.",
    },
    {
      id: 9,
      title: "She _______ (work) at a mall.",
      possibleAnswers: [
        { title: "a. works", correctAnswer: true },
        { title: "b. work" },
      ],
      userAnswer: "",
      explanation: "works is the correct positive form for she, he, it.",
    },
    {
      id: 10,
      title: "Nia _______ (play) the piano very well.",
      possibleAnswers: [
        { title: "a. don't play" },
        { title: "b. doesn't play", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "doesn't play is the negative positive form for she, he, it.",
    },
    {
      id: 11,
      title: "He ________________ (enjoy) hiking.",
      possibleAnswers: [
        { title: "a. doesn't enjoy", correctAnswer: true },
        { title: "b. don't enjoy" },
      ],
      userAnswer: "",
      explanation: "doesn't enjoy is the correct negative form for he.",
    },

    {
      id: 12,
      title: "They ________________ (play) chess every weekend.",
      possibleAnswers: [
        { title: "a. play", correctAnswer: true },
        { title: "b. plays" },
      ],
      userAnswer: "",
      explanation: "play is the correct positive form for they.",
    },

    {
      id: 13,
      title: "She ________________ (read) a book every night before bed.",
      possibleAnswers: [
        { title: "a. reads", correctAnswer: true },
        { title: "b. read" },
      ],
      userAnswer: "",
      explanation: "reads is the correct positive form for she.",
    },

    {
      id: 14,
      title: "He ________________ (sleep) late.",
      possibleAnswers: [
        { title: "a. doesn't sleep", correctAnswer: true },
        { title: "b. don't sleep" },
      ],
      userAnswer: "",
      explanation:
        "doesn't sleep is the correct negative form for she, he, it.",
    },

    {
      id: 15,
      title: "I ________________ (write) a lot of emails every day.",
      possibleAnswers: [
        { title: "a. write", correctAnswer: true },
        { title: "b. writes" },
      ],
      userAnswer: "",
      explanation: "write is the correct positive form for I.",
    },

    {
      id: 16,
      title: "We ________________ (watch) a movie every Friday night.",
      possibleAnswers: [
        { title: "a. watch", correctAnswer: true },
        { title: "b. watches" },
      ],
      userAnswer: "",
      explanation: "watch is the correct positive form for we.",
    },

    {
      id: 17,
      title: "He ________________ (paint) in his studio.",
      possibleAnswers: [
        { title: "a. paints", correctAnswer: true },
        { title: "b. paint" },
      ],
      userAnswer: "",
      explanation: "paints is the correct positive form for he.",
    },

    {
      id: 18,
      title: "They ________________ (dance) professionally.",
      possibleAnswers: [
        { title: "a. dance", correctAnswer: true },
        { title: "b. dances" },
      ],
      userAnswer: "",
      explanation: "dance is the correct positive form for they.",
    },

    {
      id: 19,
      title: "He ________________ (cook) very well.",
      possibleAnswers: [
        { title: "a. doesn't cook", correctAnswer: true },
        { title: "b. don't cook" },
      ],
      userAnswer: "",
      explanation: "doesn't cook is the correct negative form for she, he, it.",
    },

    {
      id: 20,
      title: "She __________ a lot of TV",
      possibleAnswers: [
        { title: "a. watch", correctAnswer: true },
        { title: "b. watches" },
      ],
      userAnswer: "",
      explanation: "watches is the correct positive form for she.",
    },
  ];

  return (
    <main>
      <div className="page-body">
        <div className={styles.page_title}>
          <h1>Present Simple</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The simple present is used to describe actions, events, or states that
          are habitual, repeated, or generally true. It is used when the action
          is happening in the present time or when something is a permanent
          fact. The positive form for regular verbs is really easy. It's just
          the verb with an extra 's' if the subject is 'he', 'she', or 'it'.
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I eat</td>
              <td>I do not eat</td>
              <td>I don't eat</td>
            </tr>
            <tr>
              <td>You walk</td>
              <td>You do not walk</td>
              <td>You don't walk</td>
            </tr>
            <tr>
              <td>She, he, it works</td>
              <td>She, he, it does not work</td>
              <td>She, he, it, doesn't work</td>
            </tr>
            <tr>
              <td>We fight</td>
              <td>We do not fight</td>
              <td>We don't fight </td>
            </tr>
            <tr>
              <td>They laugh</td>
              <td>They do not laugh</td>
              <td>They don't laugh</td>
            </tr>{" "}
          </tbody>
        </table>{" "}
        <div className="page-body">
          <h4>Present simple tense with irregular verbs</h4>
          <p>Some verbs have spelling changes with 'he', 'she' or 'it':</p>{" "}
          <p>
            Verbs that end in 's', 'sh', 'ch' or 'x' usually add <b>'e'</b>{" "}
            before <b>'s'</b>:{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>watch becomes watches</li>
            <li>pass becomes passes</li>
            <li>crash becomes crashes</li>{" "}
          </ul>
          <p>Example: She boxes on Friday nights.</p>{" "}
          <p>
            Verbs that end in <b>'y'</b> often change to <b>'ie'</b> before 's':{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>cry becomes cries</li>
            <li>study becomes studies</li>
            <li>fry becomes fries</li>
            <li>marry becomes marries</li>
            <li>fly becomes flies</li>{" "}
          </ul>
          <p>Example: He cries a lot.</p>{" "}
          <p>
            Be careful! <b>'y'</b> doesn't change to <b>'ie'</b> if the ending
            is 'ay', 'ey', 'oy', 'uy'.{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>display becomes displays</li>
            <li>say becomes says</li>
            <li>buy becomes buys</li>
            <li>enjoy becomes enjoys</li>{" "}
          </ul>
          <p>Example: He buys a lot of clothes.</p>{" "}
        </div>
      </div>
      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/47LEelX7nhg?si=8-fSboWd7KD3Fawh"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
