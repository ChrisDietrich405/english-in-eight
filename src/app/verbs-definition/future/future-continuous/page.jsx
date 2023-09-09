import Quiz from "@/src/components/Quiz";
import Head from "next/head";

import styles from "../../../styles/content-page.module.css";

//Done
// const baseUrl = "https://english-in-eight-next.vercel.app"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// Replace with your actual base URL
const endpoint = "/api/future-continuous"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

const getData = async () => {
  const res = await fetch(fullUrl);
  const results = await res.json();
  return results;
};

export default async function FutureContinuous() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Head>
        <title>Future Continuous | English in Eight Minutes</title>
        <meta
          name="description"
          content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Learn about the future continuous verb tense in English grammar. Understand its usage, structure, and examples. Enhance your language skills with English in Eight Minutes."
        />
        <meta
          property="og:image"
          content="https://dietrichlandcare.com/images/logo.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <div className={styles.page_title}>
        <h2>Future Continuous</h2>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future continuous refers to an ongoing action in the future.
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
          {data.map((verb) => {
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
        <p>Examples</p>
        <ul className="page-examples">
          <li>By Christmas I will be skating like a pro.</li>
          <li>
            It's very exciting! This time next Monday you will be working at
            your new job.
          </li>
          <li>This time next week she will be relaxing at the beach.</li>
        </ul>
      </div>
      <div className="page-body"></div>

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "In an hour she _______________ (clean) the bathrooms.",
            possibleAnswers: [
              { title: "a. will be cleaning", correctAnswer: true },
              { title: "b. will be clean" },
            ],
            userAnswer: "",
          },
          {
            title: "Next month they _______________ (complain) about this.",
            possibleAnswers: [
              { title: "a. will be complain" },
              { title: "b. will be complaining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Unfortunately, sea levels will ____________ (rise) in the next 30 years.",
            possibleAnswers: [
              { title: "a. will still be rise" },
              { title: "b. will still be rising", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (see) Marcus at the conference next week.",
            possibleAnswers: [
              { title: "a. will be see" },
              { title: "b. will be seeing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "When he's in Morocco he _____________ with friends.",
            possibleAnswers: [
              { title: "a. will be stay" },
              { title: "b. will be staying", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Miguel _____________ (compete) in a marathon next month.",
            possibleAnswers: [
              { title: "a. will be competing", correctAnswer: true },
              { title: "b. will be compete" },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________  with Nia this evening so I can talk to her.",
            possibleAnswers: [
              { title: "a. will be eat" },
              { title: "b. will be eating", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Demarcus _______________ (run) in the race.",
            possibleAnswers: [
              { title: "a. will also be running", correctAnswer: true },
              { title: "b. will also be run" },
            ],
            userAnswer: "",
          },
          {
            title: "He _____________ (sleep) when you telephone him.",
            possibleAnswers: [
              { title: "a. will be sleep" },
              { title: "b. will be sleeping", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I _____________ (play) hockey in the afternoon tomorrow.",
            possibleAnswers: [
              { title: "a. will be play" },
              { title: "b. will be playing", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
