import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export default function ForVersusTo() {
  const questionsArray = [
    {
      id: 1,
      title: "I bought this ________ you.",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 2,
      title: "She loves _____ sing.",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by a verb",
    },
    {
      id: 3,
      title: "They want to speak _______ you.",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 4,
      title: "I admitted my mistake _____ my boss.",
      possibleAnswers: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 5,
      title: "My brother would be happy to do that _______ you.",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 6,
      title: "I really like cooking ______ my girlfriend",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },

    {
      id: 7,
      title: "We are going ______ Vietnam.",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Destination",
    },
    {
      id: 8,
      title: "He needs to report that _____ his boss?",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 9,
      title: "Do you want me to make a reservation _____ us?",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 10,
      title: "I went there ______ a conference",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 11,
      title: "I work ___ a big company.",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 12,
      title: "Don't donate ____ that charity. It's corrupt",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 13,
      title: "I am going ______ Kenya this summer.",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "This is an example of destination.",
    },
    {
      id: 14,
      title: "I made the appointment _____ Friday.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of scheduling something.",
    },
    {
      id: 15,
      title: "I wanted _____ do it",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb.",
    },
    {
      id: 16,
      title: "She did it _______ love",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a noun",
    },
    {
      id: 17,
      title: "Can you deliver this letter _____ me.",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of doing something for someone.",
    },
    {
      id: 18,
      title: "They tried ______ resolve the problem .",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb",
    },
    {
      id: 19,
      title: "We gave a lot of clothes ______ them",
      possibleAnswers: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 20,
      title: "He wanted _____ talk to you",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb",
    },
  ];

  return (
    <main>
      <div>
        <div className={styles.page_title}>
          <h1>For versus To</h1>
        </div>
        <h4>Use TO in the following situations:</h4>
        <p>Giving</p>
        <ul className="page-examples">
          <li>
            She gave it <b> to </b>me.
          </li>
          <li>
            I donated <b>to</b> to Farm Santuary.
          </li>
        </ul>
        <p>Destination</p>
        <ul className="page-examples">
          <li>
            I'm travelling <b>to</b> Lima.”
          </li>
          <li>
            I'm going <b>to</b> the store.”
          </li>
        </ul>
        <p>Distance</p>
        <ul className="page-examples">
          <li>
            It’s 20 minutes from my job <b>to</b> my house.
          </li>
          <li>
            It's 3 hours <b>to</b> the Washington.”
          </li>
        </ul>
        <h4>Use FOR in the following situations:</h4>
        <p>Benefits</p>
        <ul className="page-examples">
          <li>
            Exercising is great <b>for</b> your health.
          </li>
          <li>
            I eat a lot of vegetables <b>for</b> the fiber.”
          </li>
        </ul>
        <p>Purpose (with -ing verb)</p>
        <ul className="page-examples">
          <li>
            A helmet is used <b>for</b> protecting your head.
          </li>
          <li>
            This tool is used <b>for</b> cutting metal.”
          </li>
        </ul>
        <p>Assisting someone</p>
        <ul className="page-examples">
          <li>
            Could you carry these books <b>for</b> me?
          </li>
          <li>
            I can cook <b>for</b> you if you're tired.”
          </li>
        </ul>
        <p>Length of time</p>
        <ul className="page-examples">
          <li>
            <p>
              We’ve lived here <b>for</b> 2 years.
            </p>
          </li>
          <li>
            I can cook <b>for</b> you if you're tired.”
          </li>
        </ul>
        <h5>
          When referring to motive/purpose/reason it get's a little complicated.{" "}
        </h5>
        <p>
          {" "}
          If you follow the preposition with a noun you use <b>for</b>.
        </p>
        <ul className="page-examples">
          <li>
            I'm going out <b>for</b> food
          </li>
          <li>
            I work hard <b>for</b> you if you're tired.
          </li>
        </ul>
        <p>
          If you follow the preposition with a verb you use <b>to</b>.
        </p>
        <ul className="page-examples">
          <li>
            I'm going out <b>to</b> eat.
          </li>
          <li>
            I volunteer a lot <b>to</b> help others.
          </li>
        </ul>
      </div>
      <QuizForm questionsArray={questionsArray} />
    </main>
  );
}
