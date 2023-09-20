"use client";

import { useState, useEffect } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../styles/content-page.module.css";

export default function UncountableAndCountable() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([]);

  const questionsArray = [
    {
      title: "There _______ many beans in the soup.",
      possibleAnswersAndExplanation: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      userAnswer: "",
      explanation:
        "You can count beans so they are considered a countable noun",
    },
    {
      title: "We don't drink ____ coffee.",
      possibleAnswersAndExplanation: [
        { title: " many" },
        { title: " much", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Coffee is a liquid so it's considered an uncountable noun",
    },
    {
      title: "I ate _____ soup for lunch.",
      possibleAnswersAndExplanation: [
        { title: " a few" },
        { title: " a little", correctAnswer: true },
      ],
      userAnswer: "",

      explanation:
        "Soup doesn't have a shape so it's considered an uncountable noun",
    },
    {
      title: "How _________ rice do we need.",
      possibleAnswersAndExplanation: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation: "Rice is very small so it's considered an uncountable noun",
    },
    {
      title: "I have ________ friends in Kenya.",
      possibleAnswersAndExplanation: [
        { title: " a few", correctAnswer: true },
        { title: " a little" },
      ],
      userAnswer: "",
      explanation:
        "You can count friends so they are considered a countable noun",
    },
    {
      title: "Eating _____ chocolate is unhealthy.",
      possibleAnswersAndExplanation: [
        { title: " a lot of", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
    },

    {
      title: "How ________ soy milk do you want?",
      possibleAnswersAndExplanation: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation:
        "Chocolate doesn't have a shape so it's considered an uncountable noun",
    },

    {
      title: "______ there tofu in the salad?",
      possibleAnswersAndExplanation: [
        { title: " Are" },
        { title: " Is", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Tofu doesn't have a shape so it's considered an uncountable noun",
    },

    {
      title: "How ___________ cups of tea do you drink in the morning?",
      possibleAnswersAndExplanation: [
        { title: " much" },
        { title: " many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "You can count cups so they are considered a countable noun",
    },

    {
      title: "There ______ orange juice on the table.",
      possibleAnswersAndExplanation: [
        { title: " is", correctAnswer: true },
        { title: " are" },
      ],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun",
    },
    {
      title: "She bought _____ apples for the pie.",
      possibleAnswersAndExplanation: [
        { title: "a few" },
        { title: "a little", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count apples so they are considered a countable noun",
    },
    {
      title: "There _________ three cats behind the house",
      possibleAnswersAndExplanation: [
        { title: "are", correctAnswer: true },
        { title: "is" },
      ],
      userAnswer: "",
      explanation: "You can count cats so they are considered a countable noun",
    },

    {
      title: "How ________ water do you need for the recipe?",
      possibleAnswersAndExplanation: [
        { title: "much", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation: "Water is a liquid so it's considered an uncountable noun",
    },

    {
      title: "There _______ a lot of sugar in that cake.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation:
        "Sugar doesn't have a shape so it's considered an uncountable noun",
    },

    {
      title: "_____ there any apple juice left in the fridge?",
      possibleAnswersAndExplanation: [
        { title: "Are" },
        { title: "Is", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun",
    },

    {
      title: "I need to buy _______ flour.",
      possibleAnswersAndExplanation: [
        { title: "a lot of", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation:
        "Flour doesn't have a shape so it's considered an uncountable noun",
    },

    {
      title: "How ________ tomatoes did you put in the soup?",
      possibleAnswersAndExplanation: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count tomatoes so they are considered a countable noun",
    },

    {
      title: "There _______ a lot traffic on the road this morning.",
      possibleAnswersAndExplanation: [
        { title: "is", correctAnswer: true },
        { title: "are" },
      ],
      userAnswer: "",
      explanation:
        "Traffic doesn't have a shape so it's considered an uncountable noun",
    },

    {
      title: "_____ there any time left before the meeting?",
      possibleAnswersAndExplanation: [
        { title: "Are" },
        { title: "Is", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Time is an abstract idea so it's considered an uncountable noun",
    },

    {
      title: "How ________ hours of sleep did you get last night?",
      possibleAnswersAndExplanation: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
    },
  ];

  const handleRandomQuestions = () => {
    setQuiz([]);
    setShouldShowNewQuestionsBtn(false);
  };

  useEffect(() => {
    console.log(questionsArray);
    const questionsVar = questionsArray.splice(0, 10);
    setQuiz(questionsVar);
  }, []);

  const secondSetQuestions = () => {
    const questionsVar = questionsArray.splice(11);
    return questionsVar;
  };

  return (
    <>
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
        setQuiz={setQuiz}
        title="Take a Quiz!"
        questions={quiz}
        secondSetQuestions={secondSetQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
