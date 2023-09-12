"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../styles/content-page.module.css";

export default function UncountableAndCountable() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "We don't drink ____ coffee.",
      possibleAnswers: [
        { title: " many" },
        { title: " much", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "I ate _____ soup for lunch.",
      possibleAnswers: [
        { title: " a few" },
        { title: " a little", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "How _________ rice do we need.",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
    },
    {
      title: "Eating _____ chocolate is unhealthy.",
      possibleAnswers: [
        { title: " a lot of", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
    },

    {
      title: "How ________ soy milk do you want?",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
    },

    {
      title: "There _______ many beans in the soup.",
      possibleAnswers: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      userAnswer: "",
    },

    {
      title: "______ there tofu in the salad?",
      possibleAnswers: [
        { title: " Are" },
        { title: " Is", correctAnswer: true },
      ],
      userAnswer: "",
    },

    {
      title: "How ___________ cups of tea do you drink in the morning?",
      possibleAnswers: [
        { title: " much" },
        { title: " many", correctAnswer: true },
      ],
      userAnswer: "",
    },

    {
      title: "There ______ orange juice on the table.",
      possibleAnswers: [
        { title: " is", correctAnswer: true },
        { title: " are" },
      ],
      userAnswer: "",
    },

    {
      title: "I have ________ friends in Kenya.",
      possibleAnswers: [
        { title: " a few", correctAnswer: true },
        { title: " a little" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "She bought _____ apples for the pie.",
        possibleAnswers: [
          { title: "a few" },
          { title: "a little", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "How ________ water do you need for the recipe?",
        possibleAnswers: [
          { title: "much", correctAnswer: true },
          { title: "many" },
        ],
        userAnswer: "",
      },

      {
        title: "There _______ much sugar in that cake.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },

      {
        title: "_____ there any milk left in the fridge?",
        possibleAnswers: [
          { title: "Are" },
          { title: "Is", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "I need to buy _______ flour for baking.",
        possibleAnswers: [
          { title: "a lot of", correctAnswer: true },
          { title: "many" },
        ],
        userAnswer: "",
      },

      {
        title: "How ________ cheese is in the sandwich?",
        possibleAnswers: [
          { title: "much" },
          { title: "many", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "There _______ much traffic on the road this morning.",
        possibleAnswers: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },

      {
        title: "_____ there any time left before the meeting?",
        possibleAnswers: [
          { title: "Are" },
          { title: "Is", correctAnswer: true },
        ],
        userAnswer: "",
      },

      {
        title: "I enjoy having ________ free time on weekends.",
        possibleAnswers: [
          { title: "a few", correctAnswer: true },
          { title: "a little" },
        ],
        userAnswer: "",
      },

      {
        title: "How ________ hours of sleep did you get last night?",
        possibleAnswers: [
          { title: "much" },
          { title: "many", correctAnswer: true },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Countable & Uncountable Nouns | English Grammar</title>
        <meta
          content="Learn about countable and uncountable nouns in English grammar. Understand the differences and usage of both types of nouns with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Countable Nouns, Uncountable Nouns, Usage, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/countable-uncountable-nouns"
        />
        <meta
          property="og:title"
          content="Countable & Uncountable Nouns | English Grammar"
        />
        <meta
          property="og:description"
          content="Learn about countable and uncountable nouns in English grammar. Understand the differences and usage of both types of nouns with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/countable-uncountable-nouns.jpg"
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
        <div className={styles.page_title}>
          <h1>Countable & Uncountable Nouns </h1>
        </div>
        <div>
          <h4>Uncountable Nouns</h4>
          <p className={styles.grammar_explanation_paragraph}>
            Uncountable nouns are for nouns we don’t count. These nouns might be
            used to describe abstract ideas , e.g., anger. They can be used for
            physical objects that are too small , e.g., rice. Uncountable nouns
            can be used for things that don't have shape (powders, liquids,
            gases, etc.). Uncountable nouns usually are used as singular nouns
            with singular verbs , e.g., The <b>rice is</b> delicious
          </p>
        </div>
        <div>
          <p>Examples</p>
          <ul className="page-examples">
            <li>tea</li>
            <li>information</li>
            <li>rice</li>
            <li>water</li>
            <li>happiness</li>
            <li>knowledge</li>
            <li>advice</li>
            <li>air</li>
            <li>sugar</li>
          </ul>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          We can’t use a/an with uncountable nouns. To explain a quantity of an
          uncountable noun, use an expression or word like <b>some</b>,{" "}
          <b>a lot of</b>, <b>much</b>, or else use an exact measurement like{" "}
          <b>a cup of</b>, <b>a bag of</b>,<b> a slice of</b> e.g., a cup of
          coffee. In order to ask about the quantity of an uncountable noun, you
          say <b>"How much?"</b> e.g., How much water do you have?
        </p>

        <p>Example</p>
        <ul className="page-examples">
          <li>
            There isn't a lot of <b>sugar</b> in these cookies.
          </li>
          <li>
            I need some <b>information</b> about that.
          </li>
          <li>
            He didn't have much <b>money</b>.
          </li>
          <li>
            How much <b>tea </b>do you want?
          </li>
        </ul>
        <p>
          <b>Careful!!!</b>
        </p>

        <p className={styles.grammar_explanation_paragraph}>
          There are some uncountable nouns that are countable in other languages
          but uncountable in English. Obviously they must follow the rules for
          uncountable nouns. Some common ones are: <b>advice</b>,{" "}
          <b>behavior</b>, <b>bread</b>, <b>furniture</b>, <b>information</b>,{" "}
          <b>news</b>, <b>progress</b>, <b>stuff</b>, <b>traffic</b>,{" "}
          <b>travel</b>, <b>trouble</b>, <b>weather</b>, <b>work</b>.
        </p>

        <p>Examples</p>

        <ul className="page-examples">
          <li>
            The <b>furniture</b> in this store is very expensive.
          </li>
          <li>
            How much<b> bread </b> should I bring?
          </li>
          <li>
            I didn't make much <b>progress</b> today.
          </li>
          <li>
            She gave me some very good <b>advice</b>
          </li>
        </ul>

        <div>
          <h4>Countable Nouns</h4>
          <p className={styles.grammar_explanation_paragraph}>
            Countable nouns are nouns we can count, e.g., 1 cat, 2 dogs. They
            have a singular and a plural form. The singular form can use "a" or
            "an". If you need to ask about the quantity of a countable noun, you
            ask "How many?" along with the plural countable noun, e.g., How many
            dogs?
          </p>
        </div>
        <div>
          <p>Examples</p>
          <ul className="page-examples">
            <li>
              I own <b>a</b> house.
            </li>
            <li>
              There were <b>a few</b> fights.
            </li>
            <li>
              They need <b>two</b> t-shirts please.
            </li>
            <li>
              <b>How many</b> people are at the party?
            </li>
            <li>
              She has <b>six</b> cats.
            </li>
          </ul>
        </div>

        <br />
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={quiz}
        callback={handleRandomQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
