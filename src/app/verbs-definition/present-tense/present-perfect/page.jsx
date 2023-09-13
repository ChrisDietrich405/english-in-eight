import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/present-progressive"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

export default async function PresentPerfect() {
  // const data = await getData();

  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Present Perfect </h1>
      </div>
      <div>
        <p className={styles.grammar_explanation_paragraph}>
          The present perfect is used to connect the past with the present. It
          is often used to talk about actions or experiences that started in the
          past but have a connection to the current moment.
        </p>
      </div>
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
          <tr>
            <td>I have thought</td>
            <td>I've thought</td>
            <td>I have not thought</td>
            <td>I haven't thought</td>
          </tr>
          <tr>
            <td>You have spoken</td>
            <td>You've spoken</td>
            <td>You have not spoken</td>
            <td>You haven't spoken</td>
          </tr>
          <tr>
            <td>She, he, it has worked</td>
            <td>She, he, it's worked</td>
            <td>She, he, it has not worked</td>
            <td>She, he, it hasn't worked</td>
          </tr>
          <tr>
            <td>We have begun</td>
            <td>We've begun</td>
            <td>We have not begun</td>
            <td>We haven't begun</td>
          </tr>
          <tr>
            <td>They have eaten</td>
            <td>They've eaten</td>
            <td>They have not eaten</td>
            <td>They haven't eaten</td>
          </tr>
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

      <h4>Actions began in the past and continuing into the present</h4>
      <ul className="page-examples">
        <li>He has worked as a bartender for five years.</li>
        <li>We have had the same house for thirty years.</li>
        <li>They haven't worked here for years.</li>
      </ul>
      <h4>
        When the exact time of the action is unknown or isn't important,
        including actions which are finished (not continuing into the present)
      </h4>
      <ul className="page-examples">
        <li>Have you seen 'Black Panther'?</li>
        <li>Someone has stolen my phone!</li>
        <li>I have been to Acra.</li>
      </ul>
      <h4>When the time period mentioned hasn't ended</h4>
      <ul className="page-examples">
        <li>It has snowed a lot this winter.</li>
        <li>I have worked very hard tody.</li>
        <li>They haven't seen him today.</li>
      </ul>
      <h4>Actions completed in the very recent past (+just)</h4>
      <ul className="page-examples">
        <li>Has she just finished the project?</li>
        <li>I have just woken up.</li>
        <li>Has she just left?</li>
        <li>They have just seen him.</li>
      </ul>
      <h4>
        Actions repeated in an unspecified period between the past and now
      </h4>
      <ul className="page-examples">
        <li>He has gone to visit them frequently.</li>
        <li>It has thundered several times already.</li>
        <li>We have complained about that restaurant many times.</li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "She ___________ (eat) tofu.",
            possibleAnswersAndExplanation: [
              { title: "a. has eaten", correctAnswer: true },
              { title: "b. have eaten" },
            ],
            userAnswer: "",
          },
          {
            title: "They ______________ (miss) their flight.",
            possibleAnswersAndExplanation: [
              { title: "a. have missed", correctAnswer: true },
              { title: "b. has drunk" },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (go) to Tanzania.",
            possibleAnswersAndExplanation: [
              { title: "a. have gone" },
              { title: "b. has gone", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ___________ (read) that magazine.",
            possibleAnswersAndExplanation: [
              { title: "a. has read" },
              { title: "b. have read", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ____________ (live) here for thirteen years.",
            possibleAnswersAndExplanation: [
              { title: "a. has lived", correctAnswer: true },
              { title: "b. have lived" },
            ],
            userAnswer: "",
          },
          {
            title: "You ______________ Marcus for five years.",
            possibleAnswersAndExplanation: [
              { title: "a. have known", correctAnswer: true },
              { title: "b. has known" },
            ],
            userAnswer: "",
          },
          {
            title: "We ______________ (be) here for three weeks.",
            possibleAnswersAndExplanation: [
              { title: "a. have been", correctAnswer: true },
              { title: "b. has been" },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________ (study) Arabic.",
            possibleAnswersAndExplanation: [
              { title: "a. has studied" },
              { title: "b. have studied", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (lose) my phone.",
            possibleAnswersAndExplanation: [
              { title: "a. have lost", correctAnswer: true },
              { title: "b. has lost" },
            ],
            userAnswer: "",
          },
          {
            title: "He ______________ (drink) too much soda.",
            possibleAnswersAndExplanation: [
              { title: "a. have drunk" },
              { title: "b. has drunk", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
