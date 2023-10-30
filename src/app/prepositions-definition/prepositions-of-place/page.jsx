import QuizForm from "@/src/components/QuizForm";
import styles from "../../styles/content-page.module.css";

export default function PrepositionsOfPlace() {
  const questionsArray = [
    {
      id: 1,
      title: "He's _____ the bedroom.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 2,
      title: "It's ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 3,
      title: "She's ______ the airport.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 4,
      title: "They are ______ the restaurant.",
      possibleAnswers: [{ title: "on" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 5,
      title: "The clothes are ________ the floor.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 6,
      title: "He is ______ the store.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 7,
      title: "The cat is ______ the roof.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 8,
      title: "The book is ______ the shelf.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 9,
      title: "She is ______ the car.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 10,
      title: "The book is ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 11,
      title: "The painting is ______ the wall.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 12,
      title: "They are ______ the park.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 13,
      title: "The pen is ______ the desk.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 14,
      title: "The clock is ______ the wall.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 15,
      title: "The bats are ______ the cave.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "In is used when referring to something that is in something else.",
    },
    {
      id: 16,
      title: "The dog is ______ the yard.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "In is used when referring to something that is in something else. ",
    },
    {
      id: 17,
      title: "The keys are ______ the counter.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 18,
      title: "The cup is ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 19,
      title: "They are ______ the museum.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 20,
      title: "The necklace is ______ the jewelry box.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Prepositions of Place</h1>
      </div>
      <div className="page-body">
        <p className="{styles.grammar_explanation_paragraph}">
          Examples of place prepositions include: at, on, in.
        </p>
      </div>
      <div className="page-examples">
        <p className="{styles.grammar_explanation_paragraph}">
          We use <b>on</b> to refer to something on a surface.
        </p>
        <ul>
          <li>
            I dropped something <b>on</b> the document.
          </li>
          <li>
            I hung the picture <b>on</b> the wall.
          </li>
          <li>
            The drinks are <b>on</b> the menu.
          </li>
        </ul>
        <p className="{styles.grammar_explanation_paragraph}">
          We use <b>in</b> to refer to something that is inside.
        </p>
        <ul>
          <li>
            The veggie burgers are <b>in</b> the fridge.
          </li>
          <li>
            She's <b>in</b> the hospital.
          </li>
          <li>
            Marcus is <b>in</b> Kenya, visiting his friend <b>in</b> the
            hospital.
          </li>
        </ul>
        <p className="{styles.grammar_explanation_paragraph}">
          We use <b>at</b> to refer to something at a specific point.
        </p>
        <ul>
          <li>
            He waited <b>at</b> the bus stop for 2 hours.
          </li>
          <li>
            They’ll meet <b>at</b> the airport.
          </li>
          <li>
            They are <b>at</b> the movies.
          </li>
        </ul>
      </div>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className="{styles.iframe_wrapper}"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/moynYBNHarg?si=IKrGnd6dJWz8qMpS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
