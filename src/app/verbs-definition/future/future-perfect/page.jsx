import Quiz from "@/src/components/Quiz";
//DONE

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/future-perfect"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

export default async function FuturePerfect() {
  // const data = await getData();
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

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "The tree _________________ by then.",
            possibleAnswersAndExplanation: [
              { title: "a. will have grown", correctAnswer: true },
              { title: "b. will have grew" },
            ],
            userAnswer: "",
          },
          {
            title: "She ______________ (sleep) eight hours.",
            possibleAnswersAndExplanation: [
              { title: "a. will have slept", correctAnswer: true },
              { title: "b. will have sleep" },
            ],
            userAnswer: "",
          },
          {
            title: "Timmy ______________ by eleven.",
            possibleAnswersAndExplanation: [
              { title: "a. will have come back", correctAnswer: true },
              { title: "b. will have came back" },
            ],
            userAnswer: "",
          },

          {
            title: "At 5, she ______________ in this office for 24 hours.",
            possibleAnswersAndExplanation: [
              { title: "a. will have been", correctAnswer: true },
              { title: "b. will have be" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Dad ______________ our favorite dinner by the time you get home.",
            possibleAnswersAndExplanation: [
              { title: "a. will have cooked" },
              { title: "b. will have cook", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It _______________ raining by then.",
            possibleAnswersAndExplanation: [
              { title: "a. will have stopped", correctAnswer: true },
              { title: "b. will have stop" },
            ],
            userAnswer: "",
          },
          {
            title:
              "When we get married, I ______________ Jerome for four years.",
            possibleAnswersAndExplanation: [
              { title: "a. will have known", correctAnswer: true },
              { title: "b. will have knew" },
            ],
            userAnswer: "",
          },
          {
            title: "They _______________ Syria by the minister retires.",
            possibleAnswersAndExplanation: [
              { title: "a. will have gone" },
              { title: "b. will have go", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "I _________________ for work by then .",
            possibleAnswersAndExplanation: [
              { title: "a. will have left", correctAnswer: true },
              { title: "b. will have leave" },
            ],
            userAnswer: "",
          },
          {
            title: "By Thursday they _____________ 56 hours.",
            possibleAnswersAndExplanation: [
              { title: "a. will have worked", correctAnswer: true },
              { title: "b. will have work" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </main>
  );
}
