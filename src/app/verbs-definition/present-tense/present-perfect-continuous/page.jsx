import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";
//DONE
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/past-perfect-continuous"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;
//DONE

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

export default async function PresentPerfectContinuous() {
  // const verbs = await getData();

  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Present Perfect Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The present perfect continuous expresses an action or situation that
        started in the past and is still continuing or has just recently stopped
        at the present moment. It is used to emphasize the length of time.
        {/* The
        present perfect continuous is formed using the construction has/have
        been + the present participle (root + -ing). */}
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Positive</th>
            <th>Positive Short Form</th>
            <th>Negative</th>
            <th>Negative Short Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I have been eating</td>
            <td>I've been eating</td>
            <td>I have not been eating</td>
            <td>I haven't been eating</td>
          </tr>
          <tr>
            <td>You have been talking</td>
            <td>You've been talking</td>
            <td>You have not been talking</td>
            <td>You haven't been talking</td>
          </tr>
          <tr>
            <td>She, he, it has been working</td>
            <td>She, he, it's been working</td>
            <td>She, he, it has not been working</td>
            <td>She, he, it hasn't been working</td>
          </tr>
          <tr>
            <td>We have been dancing</td>
            <td>We've been dancing</td>
            <td>We have not been dancing</td>
            <td>We haven't been dancing</td>
          </tr>
          <tr>
            <td>They have been sitting</td>
            <td>They've been sitting</td>
            <td>They have not been sitting</td>
            <td>They haven't been sitting</td>
          </tr>
          {/* {verbs.map((verb) => {
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

      <h4>For temporary habits or situations </h4>
      <ul className="page-examples">
        <li>
          She's been living with her sister while she looks for an apartment.
        </li>
        <li>We've been studying a lot recently.</li>
        <li>I've been eating a lot less sugar recently.</li>
      </ul>
      <h4>Ongoing actions</h4>

      <ul className="page-examples">
        <li>I've been living in Rabat for five years.</li>
        <li>They've been waiting for the doctor for hours.</li>
        <li>She's been going to this same restaurant since 2014.</li>
      </ul>
      <h4>Actions which have very recently stopped</h4>
      <ul className="page-examples">
        <li>He's been running, so he's really hot.</li>
        <li>It's been raining so now it's a little cooler.</li>
        <li>I'm so tired, I've been working on this project for hours.</li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "She ____________________________ (study) all morning.",
            possibleAnswersAndExplanation: [
              { title: "a. has been studying", correctAnswer: true },
              { title: "b. has studied" },
            ],
            userAnswer: "",
          },
          {
            title: "I _____________________ (wait) for you since three.",
            possibleAnswersAndExplanation: [
              { title: "a. has waited" },
              { title: "b. have been waiting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Nia ____________________(live) in Nairobi since 2002.",
            possibleAnswersAndExplanation: [
              { title: "a. have lived" },
              { title: "b. has been living", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They _____________________ all week.",
            possibleAnswersAndExplanation: [
              { title: "a. have fought" },
              { title: "b. have been fighting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "He ______________________ (play) basketball for five hours.",
            possibleAnswersAndExplanation: [
              { title: "a. have played" },
              { title: "b. has been playing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________________ (work) for this library since 2002.",
            possibleAnswersAndExplanation: [
              { title: "a. have worked" },
              { title: "b. has been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "How long ___________________ (learn / you) Spanish?",
            possibleAnswersAndExplanation: [
              { title: "a. has you learned" },
              { title: "b. have you been learning", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "We ______________________ (look for) your house for more than an .",
            possibleAnswersAndExplanation: [
              { title: "a. have been looking", correctAnswer: true },
              { title: "b. has looked" },
            ],
            userAnswer: "",
          },
          {
            title:
              "She ________________________ (live) without electricity for five days.",
            possibleAnswersAndExplanation: [
              { title: "a. has been living", correctAnswer: true },
              { title: "b. has lived" },
            ],
            userAnswer: "",
          },
          {
            title:
              "How long _______________________ (work / he) in the garage?",
            possibleAnswersAndExplanation: [
              { title: "a. have he worked" },
              { title: "b. has he been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
