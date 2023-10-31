import QuizForm from "@/src/components/QuizForm";
import styles from "../../styles/content-page.module.css";

export default function PrepositionsOfTime() {
  const questionsArray = [
    {
      id: 1,
      title: "He's coming home _______ 7pm.",
      possibleAnswers: [{ title: "on" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 2,
      title: "My trip starts _______ December 12th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific dates we use the preposition on.",
    },
    {
      id: 3,
      title: "Devin was born ______ 1995",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 4,
      title: "I exercise _______ the morning",
      possibleAnswers: [{ title: "at" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "When speaking about the morning and the afternoon we use the preposition in.",
    },
    {
      id: 5,
      title: "Buddy is going to Australia _______ March.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 6,
      title: "Congo declared independence ______ the 20th century.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 7,
      title: "It's safer if you go with someone _______ night.",
      possibleAnswers: [{ title: "in" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about night we use the preposition at.",
    },
    {
      id: 8,
      title: "She is leaving Canada ________ September 26th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific dates we use the preposition on.",
    },
    {
      id: 9,
      title: "I need to go exactly ______ 4pm.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 10,
      title: "His brother's birthday is _______ July.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "at" }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 11,
      title: "I'm going to take my vacation ________ the spring",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about seasons we use the preposition in.",
    },
    {
      id: 12,
      title: "I love going skiing _____ January.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 13,
      title: "The meeting is going to stop ______ 10am.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 14,
      title: "I finished college _______ 1999.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 15,
      title: "She needs to go to the clinic _______ the afternoon.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "at" }],
      userAnswer: "",
      explanation:
        "When speaking about morning or after we use the preposition in.",
    },
    {
      id: 16,
      title: "Marcus is leaving ______ February",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 17,
      title: "We have a lot of fun ______ Christmas time.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 18,
      title: "They work better ______ night.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about night we use the preposition at.",
    },
    {
      id: 19,
      title: "We are going to meet them _________ October 12th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific date we use the preposition on.",
    },
    {
      id: 20,
      title: "_____ 2012 I was living in Colombia.",
      possibleAnswers: [{ title: "In", correctAnswer: true }, { title: "At" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
  ];
  return (
    <main>
      <div className={styles.page_title}>
        <h1>Prepositions of Time</h1>
      </div>
      <div className="page-body">
        <p className="{styles.grammar_explanation_paragraph}">
          Basic examples of time prepositions include: at, on, in.
        </p>
      </div>
      <div className="page-examples">
        <p className="{styles.grammar_explanation_paragraph}">
          For days, dates and specific holiday days, use the preposition{" "}
          <b>on</b> .
        </p>
        <ul>
          <li>We go to the sanctuary on Sundays.</li>
          <li>Christmas is on December 25th.</li>
        </ul>
        <p className="{styles.grammar_explanation_paragraph}">
          For times, night and holidays, use the preposition <b>at</b>.
        </p>
        <ul>
          <li>Families often argue at Christmas time.</li>
          <li>I work faster at night.</li>
          <li>She is going to stop working at 7pm.</li>
        </ul>

        <p className="{styles.grammar_explanation_paragraph}">
          For years, months, seasons, centuries and times of day, we use the
          preposition <b>in</b>.
        </p>
        <ul>
          <li>I started in 1987.</li>
          <li>He was born in 1995.</li>
          <li>It’s always cold in January.</li>
          <li>Halloween is in the fall.</li>
          <li>I don't eat anything in the morning.</li>
        </ul>
      </div>

      <QuizForm questionsArray={questionsArray} />


      <iframe
        className="{styles.iframe_wrapper}"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fRrVkXG0-v4?si=gBel6hfVXrayjlJ1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
