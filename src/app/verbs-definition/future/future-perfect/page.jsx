import Quiz from "@/src/components/Quiz";
//DONE

import styles from "../../../styles/content-page.module.css";

export default function FuturePerfect() {
  return (
    <main className="page-body">
      <div className={styles.page_title}>
        <h2>Future Perfect</h2>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future perfect tense is used to demonstrate a future event that has
        a definitive end date.{" "}
      </p>
      <div className="table-container">
        <table className="table-body">
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will have swum</td>
              <td>I will have not swum</td>
              <td>I won't have swum</td>
            </tr>
            <tr>
              <td>You will have fought</td>
              <td>You will have not fought</td>
              <td>You won't have fought</td>
            </tr>
            <tr>
              <td>She, he, it will have worked</td>
              <td>She, he, it will not have worked</td>
              <td>She, he, it won't have worked</td>
            </tr>
            <tr>
              <td>We will have talked</td>
              <td>We will not have talked</td>
              <td>We won't have talked</td>
            </tr>
            <tr>
              <td>They will have danced</td>
              <td>They will have not danced</td>
              <td>They won't danced</td>
            </tr>
          </tbody>
        </table>
      </div>
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
            possibleAnswers: [
              { title: "a. will have grown", correctAnswer: true },
              { title: "b. will have grew" },
            ],
            userAnswer: "",
          },
          {
            title: "She ______________ (sleep) eight hours.",
            possibleAnswers: [
              { title: "a. will have slept", correctAnswer: true },
              { title: "b. will have sleep" },
            ],
            userAnswer: "",
          },
          {
            title: "Timmy ______________ by eleven.",
            possibleAnswers: [
              { title: "a. will have come back", correctAnswer: true },
              { title: "b. will have came back" },
            ],
            userAnswer: "",
          },

          {
            title: "At 5, she ______________ in this office for 24 hours.",
            possibleAnswers: [
              { title: "a. will have been", correctAnswer: true },
              { title: "b. will have be" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Dad ______________ our favorite dinner by the time you get home.",
            possibleAnswers: [
              { title: "a. will have cooked" },
              { title: "b. will have cook", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It _______________ raining by then.",
            possibleAnswers: [
              { title: "a. will have stopped", correctAnswer: true },
              { title: "b. will have stop" },
            ],
            userAnswer: "",
          },
          {
            title:
              "When we get married, I ______________ Jerome for four years.",
            possibleAnswers: [
              { title: "a. will have known", correctAnswer: true },
              { title: "b. will have knew" },
            ],
            userAnswer: "",
          },
          {
            title: "They _______________ Syria by the minister retires.",
            possibleAnswers: [
              { title: "a. will have gone" },
              { title: "b. will have go", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "I _________________ for work by then .",
            possibleAnswers: [
              { title: "a. will have left", correctAnswer: true },
              { title: "b. will have leave" },
            ],
            userAnswer: "",
          },
          {
            title: "By Thursday they _____________ 56 hours.",
            possibleAnswers: [
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
