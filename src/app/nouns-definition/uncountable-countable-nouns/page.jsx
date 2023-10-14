import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Countable and Uncountable Nouns | English in Eight Minutes",
  description:
    "Learn about countable and uncountable nouns in English with English in Eight Minutes. Understand the differences between them and test your knowledge with a quiz.",
  keywords:
    "English, Countable Nouns, Uncountable Nouns, English grammar, English in Eight Minutes",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Countable and Uncountable Nouns | English in Eight Minutes",
    description:
      "Learn about countable and uncountable nouns in English with English in Eight Minutes. Understand the differences between them and test your knowledge with a quiz.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function UncountableAndCountable() {
  const questionsArray = [
    {
      id: 1,
      title: "There _______ many beans in the soup.",
      possibleAnswers: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      userAnswer: "",
      explanation:
        "You can count beans so they are considered a countable noun.",
    },
    {
      id: 2,
      title: "We don't drink ____ coffee.",
      possibleAnswers: [
        { title: " many" },
        { title: " much", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Coffee is a liquid so it's considered an uncountable noun.",
    },
    {
      id: 3,
      title: "I ate _____ soup for lunch.",
      possibleAnswers: [
        { title: " a few" },
        { title: " a little", correctAnswer: true },
      ],
      userAnswer: "",

      explanation:
        "Soup doesn't have a shape so it's considered an uncountable noun.",
    },
    {
      id: 4,
      title: "How _________ rice do we need.",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation: "Rice is very small so it's considered an uncountable noun.",
    },
    {
      id: 5,
      title: "I have ________ friends in Kenya.",
      possibleAnswers: [
        { title: " a few", correctAnswer: true },
        { title: " a little" },
      ],
      userAnswer: "",
      explanation:
        "You can count friends so they are considered a countable noun.",
    },
    {
      id: 6,
      title: "Eating _____ chocolate is unhealthy.",
      possibleAnswers: [
        { title: " a lot of", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation:
        "Chocolate doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 7,
      title: "How ________ soy milk do you want?",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation:
        "Soy milk is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 8,
      title: "______ there tofu in the salad?",
      possibleAnswers: [
        { title: " Are" },
        { title: " Is", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Tofu doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 9,
      title: "How ___________ cups of tea do you drink in the morning?",
      possibleAnswers: [
        { title: " much" },
        { title: " many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count cups so they are considered a countable noun.",
    },

    {
      id: 10,
      title: "There ______ orange juice on the table.",
      possibleAnswers: [
        { title: " is", correctAnswer: true },
        { title: " are" },
      ],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun.",
    },
    {
      id: 11,
      title: "She bought _____ apples for the pie.",
      possibleAnswers: [
        { title: "a few" },
        { title: "a little", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count apples so they are considered a countable noun.",
    },
    {
      id: 12,
      title: "There _________ three cats behind the house",
      possibleAnswers: [{ title: "are", correctAnswer: true }, { title: "is" }],
      userAnswer: "",
      explanation:
        "You can count cats so they are considered a countable noun.",
    },

    {
      id: 13,
      title: "How ________ water do you need for the recipe?",
      possibleAnswers: [
        { title: "much", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation: "Water is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 14,
      title: "There _______ a lot of sugar in that cake.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation:
        "Sugar doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 15,
      title: "_____ there any apple juice left in the fridge?",
      possibleAnswers: [{ title: "Are" }, { title: "Is", correctAnswer: true }],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 16,
      title: "I need to buy _______ flour.",
      possibleAnswers: [
        { title: "a lot of", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation:
        "Flour doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 16,
      title: "How ________ tomatoes did you put in the soup?",
      possibleAnswers: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count tomatoes so they are considered a countable noun.",
    },

    {
      id: 17,
      title: "There _______ a lot traffic on the road this morning.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation:
        "Traffic doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 18,
      title: "_____ there any time left before the meeting?",
      possibleAnswers: [{ title: "Are" }, { title: "Is", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "Time is an abstract idea so it's considered an uncountable noun.",
    },

    {
      id: 19,
      title: "How ________ hours of sleep did you get last night?",
      possibleAnswers: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count hours so they are considered a countable noun.",
    },
  ];

  return (
    <main>
      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>Countable & Uncountable Nouns </h1>
        </div>
        <section>
          <h4>Uncountable Nouns</h4>
          <p className={styles.grammar_explanation_paragraph}>
            Uncountable nouns are for nouns we don’t count. These nouns might be
            used to describe abstract ideas , e.g., anger. They can be used for
            physical objects that are too small , e.g., rice. Uncountable nouns
            can be used for things that don't have shape (powders, liquids,
            gases, etc.). Uncountable nouns usually are used as singular nouns
            with singular verbs , e.g., The <b>rice is</b> delicious
          </p>
        </section>
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

        <section>
          <h4>Countable Nouns</h4>
          <p className={styles.grammar_explanation_paragraph}>
            Countable nouns are nouns we can count, e.g., 1 cat, 2 dogs. They
            have a singular and a plural form. The singular form can use "a" or
            "an". If you need to ask about the quantity of a countable noun, you
            ask "How many?" along with the plural countable noun, e.g., How many
            dogs?
          </p>
        </section>
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
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bhgzqbv9Rxk?si=88fwhbkbJoDjm85j"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
