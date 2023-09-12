import Quiz from "@/src/components/Quiz";
import Head from "next/head";

import styles from "../../styles/content-page.module.css";

//DONE

export default function PossessivePronouns() {
  return (
    <>
      <Head>
        <title>Possessive Pronouns | English Grammar</title>
        <meta
          content="Learn about possessive pronouns in English grammar. Discover how they indicate ownership and replace nouns with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Possessive Pronouns, Ownership, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/possessive-pronouns"
        />
        <meta
          property="og:title"
          content="Possessive Pronouns | English Grammar"
        />
        <meta
          property="og:description"
          content="Learn about possessive pronouns in English grammar. Discover how they indicate ownership and replace nouns with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/possessive-pronouns.jpg"
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
        <h1>Possessive Pronouns</h1>
      </div>
      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          Possessive pronouns are pronouns that are used to indicate ownership
          (possession) and replace a noun. The English possessive pronouns are
          mine, ours, yours, his, hers, theirs,
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            I have a house - It's <b>mine.</b>
          </li>
          <li>
            You have a boat - That boat is <b>yours.</b>
          </li>
          <li>
            He has a car - It is <b>his.</b>
          </li>
          <li>
            She has a tattoo - It is <b>hers.</b>
          </li>
          <li>
            We have an apartment - It is <b>ours.</b>
          </li>
          <li>
            They have a son - He is <b>theirs.</b>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          //because we are in react we need to start the array with a curly bracket (because it's inside of a component)

          {
            title:
              " My headset needs to be fixed, but (you) _____________ is working.",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My computer is a Lenovo, but (he) _______________ is a PC.",
            possibleAnswers: [
              { title: " his", correctAnswer: true },
              { title: " he" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title:
              "We gave them our number, and they gave us (they) __________________.",
            possibleAnswers: [
              { title: " theirs" },
              { title: " they", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "My motorcycle is new, but (he)  __________ is old.",
            possibleAnswers: [
              { title: " he" },
              { title: " his", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She can't have any cake! It's all (I)______________ !",
            possibleAnswers: [
              { title: " my" },
              { title: " mine", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My pen is broken. Can I use (you) ____________ ?",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "That money is (I) ____________.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title: "The desk is (we) ______________.",
            possibleAnswers: [
              { title: " ours", correctAnswer: true },
              { title: " we" },
            ],
            userAnswer: "",
          },
          {
            title: "The dress is (she)_____________. ",
            possibleAnswers: [
              { title: " hers", correctAnswer: true },
              { title: " she" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
