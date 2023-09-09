import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/past-perfect-progressive"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

//DONE

export default async function PastPerfectContinuous() {
  // const data = await getData();

  return (
    <div>
      <div className={styles.page_title}>
        <h1>Past Perfect Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past perfect continuous tense, also known as the past perfect
        progressive, refers to an action that was ongoing in the past and that
        was completed before another past action or point in time.
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
        <tbody>
          {/* {data.map((verb) => {
            return (
              <tr>
                <td>{verb.positive}</td>
                <td>{verb.positiveShortForm}</td>
                <td>{verb.negative}</td>
                <td>{verb.negativeShortForm}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>

      <ul className="page-examples">
        <li>
          Marcus <b>had been working </b> on the project all day before he
          realized he forgot his laptop at home.
        </li>
        <li>
          The children <b>had been playing</b> outside in the rain and were very
          happy when they came inside.
        </li>
        <li>
          Before the concert began, the musicians <b>had been practicing</b>{" "}
          hard for weeks.
        </li>
        <li>
          I could smell cigarettes. My mom <b>had been smoking</b>.
        </li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "She ________________ (work) at the company for three years when she got the promotion.",
            possibleAnswers: [
              { title: "a. had worked" },
              { title: "b. had been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Alisha _______________ (go) to that store since 2013 when it moved.",
            possibleAnswers: [
              { title: "a. had been going", correctAnswer: true },
              { title: "b. had gone" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The mechanic knew exactly what the problem was because he ____________  (examine) the car for a long time.",
            possibleAnswers: [
              { title: "a. had examined" },
              { title: "b. had been examining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "He ______________ (drink) apple juice directly out of the carton when his dad walked into the kitchen.",
            possibleAnswers: [
              { title: "a. had been drinking", correctAnswer: true },
              { title: "b. has drunk" },
            ],
            userAnswer: "",
          },

          {
            title:
              "I _________________ (study) for hours when I fell asleep on the couch.",
            possibleAnswers: [
              { title: "a. had studied" },
              { title: "b. had been studying", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title:
              "She was angry because she ________________ (wait) for me for hours.",
            possibleAnswers: [
              { title: "a. had waited" },
              { title: "b. had been waiting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Demetrius ____________ (teach) at the university since May.",
            possibleAnswers: [
              { title: "a. had been teaching", correctAnswer: true },
              { title: "b. had taught" },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (feel) a little sad.",
            possibleAnswers: [
              { title: "a. had been feeling", correctAnswer: true },
              { title: "b. have felt" },
            ],
            userAnswer: "",
          },
          {
            title:
              "He ______________ (eat) too much and that's why they think he got sick.",
            possibleAnswers: [
              { title: "a. had been eating", correctAnswer: true },
              { title: "b. have eat" },
            ],
            userAnswer: "",
          },
          {
            title:
              "They ________________ (argue) for days when Bia came up with a solution.",
            possibleAnswers: [
              { title: "a. had argued" },
              { title: "b. had been arguing", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
