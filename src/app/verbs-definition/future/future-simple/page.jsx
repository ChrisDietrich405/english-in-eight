import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/future-simple-go"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

const getDataGo = async () => {
  const res = await fetch(fullUrl);
  const results = await res.json();
  return results;
};

const baseUrl2 = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint2 = "/api/future-simple-will"; // Replace with the correct endpoint

const fullUrl2 = baseUrl2 + endpoint2;

const getDataWill = async () => {
  const res = await fetch(fullUrl2);
  const results = await res.json();
  return results;
};

export default async function FutureSimple() {
  const dataGo = await getDataGo();
  const dataWill = await getDataWill();

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Future Simple</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        {" "}
        The simple future is a verb tense that's used to talk about things that
        haven't happened yet. For example, next year she <b>will change</b>{" "}
        careers. The simple future is used to talk about an action or condition
        that will begin and end in the future. There are two ways to express the
        future. You can use <b>will</b> or <b>going to</b> depending on the
        situation.
      </p>
      <p>The first way to express the simple future</p>
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
          {dataGo.map((verb) => {
            return (
              <tr>
                <td>{verb.positive}</td>
                <td>{verb.positiveShortForm}</td>
                <td>{verb.negative}</td>
                <td>{verb.negativeShortForm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="page-body">
        <p>The second way to express the simple future</p>
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
            {dataWill.map((verb) => {
              return (
                <tr>
                  <td>{verb.positive}</td>
                  <td>{verb.positiveShortForm}</td>
                  <td>{verb.negative}</td>
                  <td>{verb.negativeShortForm}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p>
          {" "}
          We use <b>going</b> to for prior plans and in situations where
          something is probably going to happen.
        </p>
        <ul className="page-examples">
          <li>We're going to go to the movies this weekend. (previous plan)</li>
          <li>
            The Orioles are winning 8-2. They're going to win. (likely to
            happen)
          </li>
        </ul>
        <p>
          {" "}
          We use <b>will</b> with offers, refusals, promises,.
        </p>
        <ul className="page-examples">
          <li>She won't listen to me. (refusal)</li>
          <li>You look tired. I will help you with your homework. (offer)</li>
          <li>I love you very much. I will never leave you. (promise)</li>
        </ul>
      </div>

      <Quiz
        title="Quiz"
        questions={[
          {
            title:
              "It's Nia's birthday next week, so we _____________ buy her a microwave.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Could you lend me $40? I promise  _______________ pay you back Thursday.",
            possibleAnswers: [
              { title: "a. am going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "Look! The coach __________________! Run or we'll miss her.",
            possibleAnswers: [
              { title: "a. are going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ get a new computer.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title: "Antonio's sister ____________________ have a baby.",
            possibleAnswers: [
              { title: "a. is going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I don't have anything to wear. That's ok. I _______ give you one of my dresses.",
            possibleAnswers: [
              { title: "a. will", correctAnswer: true },
              { title: "b. am going to" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Just a moment. I __________________ help you bring in the groceries.",
            possibleAnswers: [
              { title: "a. am going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ____________________ take a trip to Accra in June.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Look at those gray clouds over there! It _________________  rain soon. ",
            possibleAnswers: [
              { title: "a. is going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "They ______________ have the meeting outside tomorrow. It's all planned, so I hope it won't rain.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </main>
  );
}
