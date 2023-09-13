import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/past-progressive"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

export default async function PastContinuous() {
  //   const data = await getData();

  return (
    <>
      <div className={styles.page_title}>
        <h1>Past Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The past continuous tense is a way to talk about actions or events that
        were happening in the past and were ongoing or in progress at a specific
        moment. It is formed by using the past tense of the verb "to be"
        (was/were) and adding the present participle (-ing form) of the main
        verb.
      </p>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I was crying</td>
              <td>I was not crying</td>
              <td>I wasn't crying</td>
            </tr>
            <tr>
              <td>You were explaining</td>
              <td>You were explaining</td>
              <td>You were explaining</td>
            </tr>
            <tr>
              <td>She, he, it was working</td>
              <td>She, he, it was not working</td>
              <td>She, he, it wasn't working</td>
            </tr>
            <tr>
              <td>We were thinking</td>
              <td>We were not thinking</td>
              <td>We weren't thinking</td>
            </tr>
            <tr>
              <td>They were talking</td>
              <td>They were not talking</td>
              <td>They weren't talking</td>
            </tr>
            {/* {data.map((verb) => {
              return (
                <tr>
                  <td>{verb.positive}</td>
                  <td>{verb.negative}</td>
                  <td>{verb.negativeShortForm}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>

      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          We use the past continuous to describe something that was happening in
          the past when another other event interrupted it.
        </p>

        <ul className="page-examples">
          <li>
            I <b>was dancing</b> when the fight started.
          </li>
          <li>
            She <b>was watching </b> a movie when her friend told her the news.
          </li>
          <li>
            He <b>was talking</b> to his sister when his daughter came home.
          </li>
          <li>
            I <b>was working</b> in the garden when the delivery guy came to the
            door.
          </li>
        </ul>
        <p className={styles.grammar_explanation_paragraph}>
          When you talk about an exact time in the past, use the past continuous
          tense if the action started before that specific time and then
          continued afterward.
        </p>
        <ul className="page-examples">
          <li>
            She <b>was working</b> in Morocco in November.
          </li>
          <li>
            At the end of the meeting, everyone at the meeting{" "}
            <b>was still arguing</b>.
          </li>
        </ul>
      </div>
      <div className="page-body"></div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "I ___________ (think) about a solution when Nia came up with a great idea.",
            possibleAnswersAndExplanation: [
              { title: "a. was thinking" },
              { title: "b. were thinking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (talk) loudly when the fight started.",
            possibleAnswersAndExplanation: [
              { title: "a. were talking", correctAnswer: true },
              { title: "b. was talking" },
            ],
            userAnswer: "",
          },
          {
            title:
              "It __________ (rain) a lot when I noticed my car door was broken",
            possibleAnswersAndExplanation: [
              { title: "a. were raining" },
              { title: "b. was raining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They _____________ (work) on the computer when the teacher came into the room.",
            possibleAnswersAndExplanation: [
              { title: "a. was working" },
              { title: "b. were working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He __________ (leave) when his boss called him.",
            possibleAnswersAndExplanation: [
              { title: "a. were leaving" },
              { title: "b. was leaving", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I __________ (cut) some vegetables when he told me he had already ordered our lunch.",
            possibleAnswersAndExplanation: [
              { title: "a. were cutting" },
              { title: "b. was cutting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We _________ (talk) to our colleagues when they came in.",
            possibleAnswersAndExplanation: [
              { title: "a. was talking" },
              { title: "b. were talking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (make) dinner when the phone rang.",
            possibleAnswersAndExplanation: [
              { title: "a. was making", correctAnswer: true },
              { title: "b. were making" },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ (wash) clothes when they heard a noise.",
            possibleAnswersAndExplanation: [
              { title: "a. were washing", correctAnswer: true },
              { title: "b. was washing" },
            ],
            userAnswer: "",
          },
          {
            title: "It ____________ (frustrate).",
            possibleAnswersAndExplanation: [
              { title: "a. were frustrating" },
              { title: "b. was frustrating", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
