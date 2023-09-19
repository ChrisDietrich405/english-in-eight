import Quiz from "../../../components/Quiz";
import Head from "next/head";

import styles from "../../styles/content-page.module.css";

//DONE

export default function PossessiveAdjectives() {
  return (
    <>
      <Head>
        <title>Possessive Adjectives | English in Eight Minutes</title>
        <meta
          content="Learn about possessive adjectives in English grammar. Understand how they indicate ownership and their usage with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Possessive Adjectives, Ownership, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/possessive-adjectives"
        />
        <meta
          property="og:title"
          content="Possessive Adjectives | English in Eight Minutes"
        />
        <meta
          property="og:description"
          content="Learn about possessive adjectives in English grammar. Understand how they indicate ownership and their usage with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/possessive-adjectives.jpg"
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

      <div className={styles.page_body}>
        <div className="possessive-adjectives">
          <div className={styles.page_title}>
            <h1>Possessive Adjectives</h1>
          </div>
          <div className={styles.page_body}>
            <p className={styles.grammar_explanation_paragraph}>
              Possessive adjectives are words used to show ownership or
              possession. They are placed before a noun to indicate that the
              noun belongs to someone or something. Examples of possessive
              adjectives include "my," "your," "his," "her," "its," "our," and
              "their."
            </p>
          </div>

          <ul className="page-examples">
            <li>
              I have a car. This is <b>my</b> car.
            </li>
            <li>
              You have a dog. That is <b>your</b> dog
            </li>
            <li>
              He has a car. It is <b>his</b> car
            </li>
            <li>
              She has a laptop. It is <b>her</b>laptop.
            </li>
            <li>
              The car has new tires. <b>Its</b> tires are new.
            </li>
            <li>
              We have a motorcycle. It is <b>our</b> motorcycle.
            </li>
            <li>
              They have a boat. That is <b>their</b> boat.
            </li>
          </ul>
        </div>

        <p>
          Replace the personal pronouns with the correct possessive adjective:
        </p>
        <Quiz
          title="Take a Quiz!"
          questions={[
            {
              title: "Bia loves (she) _____________ clothes!",
              possibleAnswersAndExplanation: [
                { title: "her", correctAnswer: true },
                { title: "their" },
              ],
              userAnswer: "",
              explanation: "Her is the possessive adjective for she",
            },
            {
              title: "Where is (they) ________________  professor?",
              possibleAnswersAndExplanation: [
                { title: "my" },
                { title: "their", correctAnswer: true },
              ],
              userAnswer: "",
              explanation: "Their is the possessive adjective for they.",
            },
            {
              title: "He goes to school with (he) _____________ cousin.",
              possibleAnswersAndExplanation: [
                { title: "your" },
                { title: "his", correctAnswer: true },
              ],
              userAnswer: "",
              explanation: "His is the possessive adjective for he.",
            },

            {
              title: "(You) ______________ car is very old.",
              possibleAnswersAndExplanation: [
                { title: "Your", correctAnswer: true },
                { title: "My" },
              ],
              userAnswer: "",
              explanation: "Your is the possessive adjective for you.",
            },
            {
              title: "(He)  ________________favorite hobby is running.",
              possibleAnswersAndExplanation: [
                { title: "Your" },
                { title: "His", correctAnswer: true },
              ],
              userAnswer: "",
              explanation: "His is the possessive adjective for he.",
            },
            {
              title: "Where is (I) _______________ phone?",
              possibleAnswersAndExplanation: [
                { title: "my", correctAnswer: true },
                { title: "your" },
              ],
              userAnswer: "",
              explanation: "Me is the possessive adjective for I.",
            },
            {
              title: "(I) _____________ husband is not feeling well.",
              possibleAnswersAndExplanation: [
                { title: "My", correctAnswer: true },
                { title: "Her" },
              ],
              userAnswer: "",
              explanation: "My is the possessive adjective for I.",
            },
            {
              title:
                "They want to go to Egypt. They want to see (it) ________________ tourist attractions.",
              possibleAnswersAndExplanation: [
                { title: "its", correctAnswer: true },
                { title: "their" },
              ],
              userAnswer: "",
              explanation: "Their is the possessive adjective for they.",
            },
            {
              title: "(They) ________________ mother works in a restaurant.",
              possibleAnswersAndExplanation: [
                { title: "His" },
                { title: "Their", correctAnswer: true },
              ],
              userAnswer: "",
              explanation: "Their is the possessive adjective for they.",
            },

            {
              title: "(He) _____________ name is Tyrese.",
              possibleAnswersAndExplanation: [
                { title: "Her" },
                { title: "His", correctAnswer: true },
              ],
              userAnswer: "",
              explanation: "Their is the possessive adjective for they.",
            },
          ]}
        ></Quiz>
      </div>
    </>
  );
}
