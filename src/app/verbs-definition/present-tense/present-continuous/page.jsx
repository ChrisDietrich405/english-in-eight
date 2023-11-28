import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Present Continuous | English in Eight Minutes",
  description:
    "Learn about the present continuous tense in English. This page provides explanations and examples of using the present continuous tense for ongoing actions and future events.",
  keywords:
    "English, present continuous, grammar, tense, ongoing actions, future events",
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
    title: "Present Continuous | English in Eight Minutes",
    description:
      "Learn about the present continuous tense in English. This page provides explanations and examples of using the present continuous tense for ongoing actions and future events.",
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

export default function PresentContinuous() {
  const questionsArray = [
    {
      id: 1,
      title: "You ___________ tennis tonight right?",
      possibleAnswers: [
        { title: "a. are not playing", correctAnswer: true },
        { title: "b. is play" },
      ],
      userAnswer: "",
      explanation: "For future events you can use the present continuous.",
    },
    {
      id: 2,
      title: "I ___________ now. Please call me later.",
      possibleAnswers: [
        { title: "a. are study" },
        { title: "b. am studying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },
    {
      id: 3,
      title: "She ___________.",
      possibleAnswers: [
        { title: "a. isn't sleeping", correctAnswer: true },
        { title: "b.  doesn't sleeps" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },

    {
      id: 4,
      title: "We ___________ the game.",
      possibleAnswers: [
        { title: "a. are watch" },
        { title: "b. are watching", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 5,
      title: "He ____________ in Baltimore.",
      possibleAnswers: [
        { title: "a. doesn't works" },
        { title: "b. is not working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous",
    },
    {
      id: 6,
      title: "He ___________ for the taxi.",
      possibleAnswers: [
        { title: "a. is waiting", correctAnswer: true },
        { title: "b. is waits" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 7,
      title: "They __________.",
      possibleAnswers: [
        { title: "a. are fighting", correctAnswer: true },
        { title: "b. are fight" },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 8,
      title: "We _______________ to the mall tonight.",
      possibleAnswers: [
        { title: "a. are not going", correctAnswer: true },
        { title: "b. don't go" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous",
    },
    {
      id: 9,
      title: "You ___________ The Shining.",
      possibleAnswers: [
        { title: "a. are read" },
        { title: "b. are reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous",
    },
    {
      id: 10,
      title: "She _________ a Kit Kat bar.",
      possibleAnswers: [
        { title: "a. is eats" },
        { title: "b. is eating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous",
    },
    {
      id: 11,
      title: "They ___________ to Paris next week.",
      possibleAnswers: [
        { title: "a. are not traveling", correctAnswer: true },
        { title: "b. don't travel" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

    {
      id: 12,
      title: "I ___________ a book right now.",
      possibleAnswers: [
        { title: "a. am read" },
        { title: "b. am reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 13,
      title: "He ___________ dinner for us.",
      possibleAnswers: [
        { title: "a. is cooks" },
        { title: "b. is cooking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 14,
      title: "We ___________ for the bus.",
      possibleAnswers: [
        { title: "a. are wait" },
        { title: "b. are waiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 15,
      title: "She ___________ the piano beautifully.",
      possibleAnswers: [
        { title: "a. is plays" },
        { title: "b. is playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 16,
      title: "They ___________ their grandparents tomorrow.",
      possibleAnswers: [
        { title: "a. are not visiting", correctAnswer: true },
        { title: "b. don't visit" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

    {
      id: 17,
      title: "I ___________ to the manager about the issue.",
      possibleAnswers: [
        { title: "a. am talk" },
        { title: "b. am talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 18,
      title: "They ___________ (study) for their exams.",
      possibleAnswers: [
        { title: "a. are study" },
        { title: "b. are studying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For ongoing actions you use the present continuous.",
    },

    {
      id: 19,
      title: "He ___________ the house right now.",
      possibleAnswers: [
        { title: "a. is cleans" },
        { title: "b. is cleaning", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "For current actions you use the present continuous.",
    },

    {
      id: 20,
      title: "We ___________ basketball on Saturday.",
      possibleAnswers: [
        { title: "a. are not playing", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
      explanation: "For future actions you can use the present continuous.",
    },

  ];

  return (
    <main>
      <div className="page-body">
        <div className={styles.page_title}>
          <h1>Present Continuous</h1>
        </div>
        <div className="page-body">
          <p className={styles.grammar_explanation_paragraph}>
            The present continuous is a verb form used to describe an ongoing
            action, event that is happening at the current moment or even a
            future event. It is formed by using the auxiliary verb "to be" in
            the present tense, followed by the main verb with "-ing" added to
            the end.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Positive</th>
                <th>Positive Short Form</th>
                <th>Negative</th>
                <th>Negative Short Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I am eating</td>
                <td>I'm eating</td>
                <td>I am not eating</td>
                <td>I'm not eating</td>
              </tr>
              <tr>
                <td>You are walking</td>
                <td>You're walking</td>
                <td>You are not walking</td>
                <td>You're not walking</td>
              </tr>
              <tr>
                <td>She, he, it is working</td>
                <td>She, he, it's working</td>
                <td>She, he, it is not working</td>
                <td>She, he, it isn't working</td>
              </tr>
              <tr>
                <td>We are thinking</td>
                <td>We're thinking</td>
                <td>We are not thinking</td>
                <td>We aren't thinking</td>
              </tr>
              <tr>
                <td>They are running</td>
                <td>They're running</td>
                <td>They are not running</td>
                <td>They aren't running</td>
              </tr>
            </tbody>
          </table>

          <h4>Actions currently happening</h4>
          <ul className="page-examples">
            <li>He is working at the bar now.</li>
            <li>
              We are having some problems with the software. Call me later.
            </li>
            <li>She is eating lunch so she can't talk now.</li>
          </ul>
          <h4>Future actions</h4>
          <ul className="page-examples">
            <li>I'm having dinner with my son this afternoon.</li>
            <li>You're coming to the party tonight right?</li>
            <li>They are flying to Kenya this weekend.</li>
          </ul>
        </div>
      </div>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/w04YVmJR4w4?si=kJySTWwESHESBsyC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
