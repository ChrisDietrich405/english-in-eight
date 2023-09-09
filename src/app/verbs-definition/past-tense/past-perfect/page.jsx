import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/past-perfect"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;
//DONE

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/future-continuous");
  return res.json();
};

export default async function PastPerfect() {
  const data = await getData();
  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Past Perfect</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past perfect is used to explain that one action in the past happened
        before another action in the past.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Positive</th>
            <th>Negative</th>
            <th>Negative short form</th>
          </tr>
        </thead>
        <tbody>
          {data.map((verb) => {
            return (
              <tr>
                <td>{verb.positive}</td>
                <td>{verb.negative}</td>
                <td>{verb.negativeShortForm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

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
