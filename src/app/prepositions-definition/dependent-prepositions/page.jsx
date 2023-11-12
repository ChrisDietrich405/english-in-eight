import QuizForm from "@/src/components/QuizForm";
import styles from "../../styles/content-page.module.css";

export default function DependentPrepositions() {
  const questionsArray = [
    {
      id: 1,
      title: "You should believe ______ yourself.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with believe is in.",
    },
    {
      id: 2,
      title: "I wish you would agree _______ me about this.",
      possibleAnswers: [
        { title: "with", correctAnswer: true },
        { title: "at" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with agree is with.",
    },
    {
      id: 3,
      title: "I'm worried _______ my children.",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with worry is about.",
    },
    {
      id: 4,
      title: "She lives _______ a great neighborhood.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with live is in.",
    },
    {
      id: 5,
      title: "I've been waiting _______ you an hour.",
      possibleAnswers: [{ title: "on" }, { title: "for", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with wait is for.",
    },
    {
      id: 6,
      title: "Did you know _______ that?",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with know is about.",
    },
    {
      id: 7,
      title: "We need to depend _______ each other.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with depend is on.",
    },
    {
      id: 8,
      title: "He asked ______ more money.",
      possibleAnswers: [{ title: "in" }, { title: "for", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with ask is for.",
    },
    {
      id: 9,
      title: "We love to listen _______ reggae.",
      possibleAnswers: [{ title: "to", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "The correct preposition used with listen is to.",
    },
    {
      id: 10,
      title: "Don't forget _______ my birthday.",
      possibleAnswers: [
        { title: "about", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with forget is about.",
    },
    {
      id: 11,
      title: "I would love to live _______ Hawaii",
      possibleAnswers: [{ title: "to" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with live is in.",
    },
    {
      id: 12,
      title: "He doesn't believe _____ mysticism.",
      possibleAnswers: [
        { title: "in", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with believe is in.",
    },
    {
      id: 13,
      title: "You can ask ______ something to eat.",
      possibleAnswers: [
        { title: "in" },
        { title: "for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with ask is for.",
    },
    {
      id: 14,
      title: "I hate waiting ______ this bus.",
      possibleAnswers: [{ title: "for", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with wait is for.",
    },
    {
      id: 15,
      title: "I don't depend ______ anyone.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with depend is on.",
    },
    {
      id: 16,
      title: "He forgot _________ the meeting.",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with forget is about.",
    },
    {
      id: 17,
      title: "I listen _________ a lot of music.",
      possibleAnswers: [{ title: "to", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "The correct preposition used with listen is to.",
    },
    {
      id: 18,
      title: "She never agrees _______ me.",
      possibleAnswers: [
        { title: "with", correctAnswer: true },
        { title: "to" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with agree is with.",
    },
    {
      id: 19,
      title: "I didn't know _______ that.",
      possibleAnswers: [
        { title: "about", correctAnswer: true },
        { title: "in" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with know is about.",
    },
    {
      id: 20,
      title: "You shouldn't vote ______ her. She's extremely corrupt",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with corrupt is for.",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Dependent Prepositions</h1>
      </div>
      <div className="page-body">
        <p className="{styles.grammar_explanation_paragraph}">
          Dependent prepositions are prepositions that depend on or must follow
          a specific verb. For example <b>depend on</b>. You can only use the
          preposition <b>on</b> after depend. No other preposition can be used.
        </p>
      </div>
      <div className="page-examples">
        <p className="{styles.grammar_explanation_paragraph}">
          Here's a list of some common dependent prepositions.
        </p>
        <ul>
          <li>Depend on - She depends on her mother for everything.</li>
          <li>Wait for - I need to wait for the bus.</li>
          <li>Listen to - I love to listen to podcasts.</li>
          <li>Believe in - Do you believe in ghosts?</li>
          <li>Forget about- You forgot about his birthday.</li>
          <li>Know about - I don't know about that.</li>
          <li>Worry about - My mother worries about everything.</li>
          <li>Agree with - I don't agree with you.</li>
          <li>Vote for - He is going to vote for the wrong candidate.</li>
          <li>Live in - We don't live in Baltimore anymore. </li>
          <li>Ask for - I need to ask you for a favor. </li>
        </ul>
      </div>

      <QuizForm questionsArray={questionsArray} />
    </main>
  );
}
