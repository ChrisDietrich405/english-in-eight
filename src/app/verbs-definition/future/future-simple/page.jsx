import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/present-progressive"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData1 = async () => {
//   const res = await fetch("http://localhost:3000/api/future-continuous");
//   return res.json();
// };

const baseUrl2 = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint2 = "/api/future-simple-will"; // Replace with the correct endpoint

const fullUrl2 = baseUrl2 + endpoint2;

// const getData2 = async () => {
//   const res = await fetch("http://localhost:3000/api/future-continuous");
//   return res.json();
// };

export default async function FutureSimple() {
  // const dataGo = await getData1();
  // const dataWill = await getData2();

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
          <tr>
            <td>I am going to eat</td>
            <td>I'm going to eat</td>
            <td>I am not going to eat</td>
            <td>I'm not going to eat</td>
          </tr>
          <tr>
            <td>You are going to play</td>
            <td>You're going to play</td>
            <td>You are not going to play</td>
            <td>You're not going to play</td>
          </tr>
          <tr>
            <td>She, he, it is going to work</td>
            <td>She, he, it's going to work</td>
            <td>She, he, it is not going to work</td>
            <td>She, he, it's not going to work</td>
          </tr>
          <tr>
            <td>We are going to swim</td>
            <td>We're going to swim</td>
            <td>We are not going to swim</td>
            <td>We're not going to swim</td>
          </tr>
          <tr>
            <td>They are going to finish</td>
            <td>They're going to finish</td>
            <td>They are not going to finish</td>
            <td>They're not going to finish</td>
          </tr>
          {/* {dataGo.map((verb) => {
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
            <tr>
              <td>I will eat</td>
              <td>I'll eat</td>
              <td>I will not eat</td>
              <td>I won't eat</td>
            </tr>
            <tr>
              <td>You will relax</td>
              <td>You'll relax</td>
              <td>You will not relax</td>
              <td>You won't relax</td>
            </tr>
            <tr>
              <td>She, he, it will work</td>
              <td>She, he, it'll work</td>
              <td>She, he, it will not work</td>
              <td>She, he, it won't work</td>
            </tr>
            <tr>
              <td>We will talk</td>
              <td>We'll talk</td>
              <td>We will not talk</td>
              <td>We won't talk</td>
            </tr>
            <tr>
              <td>They will fight</td>
              <td>They'll fight</td>
              <td>They will not fight</td>
              <td>They won't fight</td>
            </tr>
            {/* {dataWill.map((verb) => {
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
