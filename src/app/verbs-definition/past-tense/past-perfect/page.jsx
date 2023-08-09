import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

export default function PastPerfect() {
  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Past Perfect</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past perfect is used to explain that one action in the past happened
        before another action in the past.
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
              <td>I had swum</td>
              <td>I had not swum</td>
              <td>I hadn't swum</td>
            </tr>
            <tr>
              <td>You had fought</td>
              <td>You had not fought</td>
              <td>You hadn't fought</td>
            </tr>
            <tr>
              <td>She, he, it had worked</td>
              <td>She, he, it had not worked</td>
              <td>She, he, it had not worked</td>
            </tr>
            <tr>
              <td>We had talked</td>
              <td>We had not talked</td>
              <td>We hadn't talked</td>
            </tr>
            <tr>
              <td>They had danced</td>
              <td>They had not danced</td>
              <td>They hadn't danced</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="page-examples">
        <li>
          We <b>had already eaten</b> before you ordered lunch.
        </li>
        <li>
          We had told her to get ready, but she <b>had already prepared</b> her
          bags
        </li>
        <li>
          They <b>had started</b> the project before their boss told them to{" "}
        </li>
        <li>
          I <b>had finished</b> eating dinner by the time my wife came home.
        </li>
      </ul>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "The train ____________ (leave) by the time I got to the station.",
            possibleAnswers: [
              { title: "a. had leave" },
              { title: "b. had left", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I wished I ______________.",
            possibleAnswers: [
              { title: "a. had lied", correctAnswer: true },
              { title: "b. has lied" },
            ],
            userAnswer: "",
          },
          {
            title:
              "She _____________________ (send) the message before her brother apologized.",
            possibleAnswers: [
              { title: "a. had send" },
              { title: "b. had sent", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "He _____________ (play) football until last week.",
            possibleAnswers: [
              { title: "a. had never play" },
              { title: "b. had never played", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "After the storm _______________ (pass) we went outside to assess the damage.",
            possibleAnswers: [
              { title: "a. had pass" },
              { title: "b. had passed", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "They ___________ (get) engaged before last year.",
            possibleAnswers: [
              { title: "a. had get" },
              { title: "b. had gotten", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ___________ (meet) them before the party.",
            possibleAnswers: [
              { title: "a. had met", correctAnswer: true },
              { title: "b. has meet" },
            ],
            userAnswer: "",
          },
          {
            title: "I __________ (fall) asleep before 8pm last night.",
            possibleAnswers: [
              { title: "a. had fall" },
              { title: "b. had fallen", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We wished we ____________ (purchase) the winning ticket.",
            possibleAnswers: [
              { title: "a. has purchased", correctAnswer: true },
              { title: "b. had purchased" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
