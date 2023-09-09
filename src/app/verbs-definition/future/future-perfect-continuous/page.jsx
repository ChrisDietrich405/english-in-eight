import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual base URL
const endpoint = "/api/future-perfect-continuous"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

// const getData = async () => {
//   const res = await fetch("http://127.0.0.1:3000/api/future-continuous");
//   return res.json();
// };

//DONE

export default async function FuturePerfectContinuous() {
  // const data = await getData();

  return (
    <div>
      <div className={styles.page_title}>
        <h1>Future Perfect Continuous</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future perfect continuous tense is a verb form used to talk about
        actions or events that will have been happening continuously until a
        specific point in the future.
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
        <tr>
          <td>I will have been finishing</td>
          <td>I'll have been finishing</td>
          <td>I will not have been finishing</td>
          <td>I'll not have been finishing</td>
        </tr>
        <tr>
          <td>You will have been swimming</td>
          <td>You'll have been swimming</td>
          <td>You will not have been swimming</td>
          <td>You'll not have been swimming</td>
        </tr>
        <tr>
          <td>She, he, it will have been working</td>
          <td>She, he, it'll have been working</td>
          <td>She, he, it will not have been working</td>
          <td>She, he, it'll not have been working</td>
        </tr>
        <tr>
          <td>We will have been running</td>
          <td>We'll have been running</td>
          <td>We will not have been running</td>
          <td>We'll not have been running</td>
        </tr>
        <tr>
          <td>They will have been ending</td>
          <td>They'll have been ending</td>
          <td>They wTheyll not have been ending</td>
          <td>They'll not have been ending</td>
        </tr>
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

      <Quiz
        title="Quiz"
        questions={[
          {
            title:
              " By next month, she will ______________ in that city for five years.",
            possibleAnswers: [
              { title: "a. have lived" },
              { title: "b. have been living", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the time the project is completed, they will ___________ on it for six months.",
            possibleAnswers: [
              { title: "a. have worked" },
              { title: "b. have been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By this time next year, they will __________________ around the world for six months.",
            possibleAnswers: [
              { title: "a. have been traveling", correctAnswer: true },
              { title: "b. have traveled" },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the party's start, we will ___________ the decorations for two days.",
            possibleAnswers: [
              { title: "a. have worked on" },
              { title: "b. have been working on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the time you get here, I will ____________ for you at the airport for two hours..",
            possibleAnswers: [
              { title: "a. have been waiting", correctAnswer: true },
              { title: "b. have waited" },
            ],
            userAnswer: "",
          },

          {
            title:
              "By the end of the week, she will ______________ the piano for five years.",
            possibleAnswers: [
              { title: "a. have practiced" },
              { title: "b. have been practicing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the concert date, the band will ____________ the new songs for weeks.",
            possibleAnswers: [
              { title: "a. have rehearsed" },
              { title: "b. have been rehearsing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the wedding day, they will ______________ it for a whole year.",
            possibleAnswers: [
              { title: "a. have been planning", correctAnswer: true },
              { title: "b. have planned" },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the deadline, he will _______________ on the report for three days straight..",
            possibleAnswers: [
              { title: "a. have been working", correctAnswer: true },
              { title: "b. have worked" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
