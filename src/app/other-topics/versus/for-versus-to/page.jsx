import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export default function ForVersusTo() {
  const questionsArray = [
    {
      id: 1,
      title: "I bought this ________ you.",
      possibleAnswersAndExplanation: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 2,
      title: "She loves _____ sing.",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by a verb",
    },
    {
      id: 3,
      title: "They want to speak _______ you.",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "to is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 4,
      title: "I admitted my mistake _____ my boss.",
      possibleAnswersAndExplanation: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "to is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 5,
      title: "My brother would be happy to do that _______ you.",
      possibleAnswersAndExplanation: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 6,
      title: "I really like cooking ______ my girlfriend",
      possibleAnswersAndExplanation: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },

    {
      id: 7,
      title: "We are going ______ Vietnam.",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Destination",
    },
    {
      id: 8,
      title: "He needs to report that _____ his boss?",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "to is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 9,
      title: "Do you want me to make a reservation _____ us?",
      possibleAnswersAndExplanation: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 10,
      title: "I went there ______ a conference",
      possibleAnswersAndExplanation: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 11,
      title: "I work ___ a big company.",
      possibleAnswersAndExplanation: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 12,
      title: "Don't donate ____ that charity. It's corrupt",
      possibleAnswersAndExplanation: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 13,
      title: "I am going ______ Kenya this summer.",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "This is an example of destination.",
    },
    {
      id: 14,
      title: "I made the appointment _____ Friday.",
      possibleAnswersAndExplanation: [
        { title: "a. hear" },
        { title: "b. listen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of scheduling something.",
    },
    {
      id: 15,
      title: "I wanted _____ do it",
      possibleAnswersAndExplanation: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb",
    },
    {
      id: 16,
      title: "She did it _______ love",
      possibleAnswersAndExplanation: [
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
      possibleAnswersAndExplanation: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of doing something for someone.",
    },
    {
      id: 18,
      title: "They tried ______ resolve the problem .",
      possibleAnswersAndExplanation: [
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
      possibleAnswersAndExplanation: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 20,
      title: "He wanted _____ talk to you",
      possibleAnswersAndExplanation: [
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
      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>For versus To</h1>
        </div>

        <p className={styles.grammar_explanation_paragraph}>
          <h3>Use TO in the following situations:</h3>
        </p>
        <p>Giving</p>
        <p>She gave it to me.</p>
        <p>Destination</p>
        <p>I'm travelling to Lima.”</p>
        <p>Distance</p>
        <p>It’s 20 minutes from my job to my house.</p>

        <p className={styles.grammar_explanation_paragraph}>
          Use FOR in the following situations:
        </p>

        <p>Calendar</p>
        <p>I made an appointment for May 3.”</p>
        <p>Benefits</p>
        <p>Exercising is great for your health.</p>
        <p>Purpose (with -ing verb)</p>
        <p>A helmet is used for protecting your head.</p>
        <p>Agreement</p>
        <p>Are you for or against the development of nuclear weapons?</p>
        <p>Assisting someone</p>
        <p>Could you carry these books for me?</p>
        <p>Length of time</p>
        <p>We’ve lived here for 2 years.</p>

        <p>
          When referring to motive/purpose/reason it get's a little complicated.
          If you follow the preposition with a noun you use for. Example: I'm
          going out for food. However if the follow the preposition with a verb
          you need to use to. Example: She went to find her friend
        </p>
      </div>
      <QuizForm questionsArray={questionsArray} />
    </main>
  );
}
