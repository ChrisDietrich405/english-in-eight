// import { getServerSideProps } from "@/src/app/api/simple-past";

import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/simple-past"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

export default async function PastSimple() {
  // const data = await getData();

  return (
    <>
      <div className={styles.page_title}>
        <h1>Past Simple</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        {" "}
        The simple past, also known as the past simple, is a verb tense used to
        describe actions, events, or states that occurred and were completed in
        the past. It is one of the basic verb tenses in English and is generally
        used to express actions that happened at a specific time in the past, or
        to narrate a sequence of events in the past.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_title}>Positive</th>
            <th>Negative</th>
            <th>Negative short form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I walked</td>
            <td>I did not walk</td>
            <td>I didn't walk</td>
          </tr>
          <tr>
            <td>You ate</td>
            <td>You did not eat</td>
            <td>You didn't eat</td>
          </tr>
          <tr>
            <td>She, he, it worked</td>
            <td>She, he, it did not work</td>
            <td>She, he, it didn't work</td>
          </tr>
          <tr>
            <td>We talked</td>
            <td>We did not talk</td>
            <td>We didn't talk</td>
          </tr>
          <tr>
            <td>They danced</td>
            <td>They did not dance</td>
            <td>They didn't dance</td>
          </tr>
          {/* {data.map((item) => {
            return (
              <tr>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{item.negativeShortForm}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>

      <div className="page-body">
        <p>
          For irregular verbs, things are more challenging. For example the
          simple past tense of some irregular verbs look exactly like the root
          form:
        </p>
        <table className={styles.table}>
          <tr>
            <th>Positive</th>
            <th>Negative</th>
            <th>Negative short form</th>
          </tr>
          <tr>
            <td>I put</td>
            <td>I did not put</td>
            <td>I didn't put</td>
          </tr>
          <tr>
            <td>They hit</td>
            <td>They did not hit</td>
            <td>They didn't hit</td>
          </tr>
          <tr>
            <td>You set</td>
            <td>You did not set</td>
            <td>You didn't set</td>
          </tr>
          <tr>
            <td>She, he, it cost</td>
            <td>She, he, it did not cost</td>
            <td>She, he, it didn't cost</td>
          </tr>
          <tr>
            <td>We cut</td>
            <td>We did not cut</td>
            <td>We didn't cut</td>
          </tr>
        </table>

        <p>
          {" "}
          For other irregular verbs, the simple past forms are much different
          than their infinitive forms:
        </p>
        <ul className="page-examples">
          <li>buy changes to bought</li>
          <li>eat changes to ate</li>
          <li>build changes to built</li>
          <li>see changes to saw</li>
          <li>go changes to went</li>
        </ul>
      </div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "I _____________ to the store.",
            possibleAnswersAndExplanation: [
              { title: "a. go" },
              { title: "b. went", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "They _____________ house very well.",
            possibleAnswersAndExplanation: [
              { title: "a. builded" },
              { title: "b. built", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I _________ to her.",
            possibleAnswersAndExplanation: [
              { title: "a. didn't talked" },
              { title: "b. didn't talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She ___________ that movie yesterday.",
            possibleAnswersAndExplanation: [
              { title: "a. saw", correctAnswer: true },
              { title: "b. sawed" },
            ],
            userAnswer: "",
          },
          {
            title: "He ____________ his hand with a knife .",
            possibleAnswersAndExplanation: [
              { title: "a. cuted" },
              { title: "b. cut", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ________ too much this morning.",
            possibleAnswersAndExplanation: [
              { title: "a. ate", correctAnswer: true },
              { title: "b. eated" },
            ],
            userAnswer: "",
          },
          {
            title: "I _________ her on the cheek.",
            possibleAnswersAndExplanation: [
              { title: "a. kissed", correctAnswer: true },
              { title: "b. kiss" },
            ],
            userAnswer: "",
          },
          {
            title: "It ____________ a lot of money.",
            possibleAnswersAndExplanation: [
              { title: "a. costed" },
              { title: "b. cost", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ to the store.",
            possibleAnswersAndExplanation: [
              { title: "a. wented" },
              { title: "b. went", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "The car ___________ the tree.",
            possibleAnswersAndExplanation: [
              { title: "a. hit", correctAnswer: true },
              { title: "b. hited" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
