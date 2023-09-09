//DONE

import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/simple-present"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

const getData = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
  return res.json();
};
export default async function SimplePresent() {
  const data = await getData();

  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Simple Present</h1>
      </div>

      <p className={styles.grammar_explanation_paragraph}>
        The simple present is used to describe actions, events, or states that
        are habitual, repeated, or generally true. It is used when the action is
        happening in the present time or when something is a permanent fact. The
        positive form for regular verbs is really easy. It's just the verb with
        an extra 's' if the subject is 'he', 'she', or 'it'.
      </p>

      <table className={styles.table}>
        <tr>
          <th>Positive</th>
          <th>Negative</th>
          <th>Negative short form</th>
        </tr>
        {data.map((verb) => {
          return (
            <tr>
              <td>{verb.positive}</td>
              <td>{verb.negative}</td>
              <td>{verb.negativeShortForm}</td>
            </tr>
          );
        })}
      </table>

      <div className="page-body">
        <h4>Present simple tense with irregular verbs</h4>
        <p>Some verbs have spelling changes with 'he', 'she' or 'it':</p>

        <p>
          Verbs that end in 's', 'sh', 'ch' or 'x' usually add <b>'e'</b> before{" "}
          <b>'s'</b>:
        </p>
        <ul className="page-examples">
          <li>watch becomes watches</li>
          <li>pass becomes passes</li>
          <li>crash becomes crashes</li>
        </ul>
        <p>She boxes on Friday nights</p>
        <p>
          Verbs that end in <b>'y'</b> often change to <b>'ie'</b> before 's':
        </p>
        <ul className="page-examples">
          <li>cry becomes cries</li>
          <li>study becomes studies</li>
          <li>fry becomes fries</li>
          <li>marry becomes marries</li>
          <li>fly becomes flies</li>
        </ul>
        <p>He cries a lot</p>
        <p>
          Be careful! <b>'y'</b> doesn't change to <b>'ie'</b> if the ending is
          'ay', 'ey', 'oy', 'uy'.
        </p>
        <ul className="page-examples">
          <li>display becomes displays</li>
          <li>say becomes says</li>
          <li>buy becomes buys</li>
          <li>enjoy becomes enjoys</li>
        </ul>
        <p>He buys a lot of clothes</p>
      </div>
      <br />
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "He ________ (love) tea.",
            possibleAnswers: [
              { title: "a. loves", correctAnswer: true },
              { title: "b. love" },
            ],
            userAnswer: "",
          },
          {
            title: "I _________ (like) dancing.",
            possibleAnswers: [
              { title: "a. like", correctAnswer: true },
              { title: "b. likes" },
            ],
            userAnswer: "",
          },
          {
            title: "She ____________ (play) badminton.",
            possibleAnswers: [
              { title: "a. plays", correctAnswer: true },
              { title: "b. play" },
            ],
            userAnswer: "",
          },
          {
            title: "The class (it) __________ (begin) at 11am.",
            possibleAnswers: [
              { title: "a. begin" },
              { title: "b. begins", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He ________ (cry) when he watches sad movies.",
            possibleAnswers: [
              { title: "a. crys" },
              { title: "b. cries", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ________ (wash) the dishes.",
            possibleAnswers: [
              { title: "a. washes" },
              { title: "b. wash", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "I ________ (study) Arabic.",
            possibleAnswers: [
              { title: "a. study", correctAnswer: true },
              { title: "b. studies" },
            ],
            userAnswer: "",
          },
          {
            title: "They _________ (live) in Tunisia.",
            possibleAnswers: [
              { title: "a. live", correctAnswer: true },
              { title: "b. lives" },
            ],
            userAnswer: "",
          },
          {
            title: "She _______ (work) at a mall.",
            possibleAnswers: [
              { title: "a. works", correctAnswer: true },
              { title: "b. work" },
            ],
            userAnswer: "",
          },
          {
            title: "Nia _______ (play) the piano very well.",
            possibleAnswers: [
              { title: "a. play" },
              { title: "b. plays", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
