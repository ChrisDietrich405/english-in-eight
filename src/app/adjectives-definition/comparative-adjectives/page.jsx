import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Comparative Adjectives | English in Eight Minutes",
  description:
    "Learn about comparative adjectives in English with English in Eight Minutes. Understand the rules for forming comparative adjectives and test your knowledge with a quiz.",
  keywords:
    "English, Comparative Adjectives, Test, English grammar, English in Eight Minutes",
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
    title: "Comparative Adjectives | English in Eight Minutes",
    description:
      "Learn about comparative adjectives in English with English in Eight Minutes. Understand the rules for forming comparative adjectives and test your knowledge with a quiz.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function ComparativeAdjectives() {
  const questionsArray = [
    {
      id: 1,
      title:
        "My Latin class is ______________ (interesting) than my English class. ",
      possibleAnswers: [
        { title: "more interesting", correctAnswer: true },
        { title: "interestinger" },
      ],
      userAnswer: "",
      explanation: "Interesting is three syllables so you must use more.",
    },

    {
      id: 2,
      title: "Marcus is ______________ (old) than Nia.",
      possibleAnswers: [
        { title: "older", correctAnswer: true },
        { title: "more old" },
      ],
      userAnswer: "",
      explanation:
        "Old is one syllable so you can add er to form the comparative.",
    },
    {
      id: 3,
      title: "She is ______________(quiet) than her brother.",
      possibleAnswers: [
        { title: "quietter" },
        { title: "quieter", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Quiet doesn't have any spelling changes.",
    },

    {
      id: 4,
      title: "Buses are ________________ (large) than cars.",
      possibleAnswers: [
        { title: "largger" },
        { title: "larger", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Large doesn't have any spelling changes.",
    },

    {
      id: 5,
      title: "The roads here are  _______________ (narrow) than in Baltimore.",
      possibleAnswers: [
        { title: "narrower", correctAnswer: true },
        { title: "narroest" },
      ],
      userAnswer: "",
      explanation:
        "Narrow is a two syllable adjective that you can add er for the comparative form.",
    },
    {
      id: 6,
      title: "Dogs are _______________ (social) than cats",
      possibleAnswers: [
        { title: "more social", correctAnswer: true },
        { title: "socialer" },
      ],
      userAnswer: "",
      explanation:
        "Social is a two syllable adjective that you can add er for the comparative form.",
    },
    {
      id: 7,
      title: "Malcolm is _______________ (busy) than his brother.",
      possibleAnswers: [
        { title: "busier", correctAnswer: true },
        { title: "busyer" },
      ],
      userAnswer: "",
      explanation:
        "Busy is a two syllable adjective that you can add er for the comparative form and has a spelling change.",
    },
    {
      id: 8,
      title: "Demetrius is ________________ (ambitious) than his friends.",
      possibleAnswers: [
        { title: "ambitiouser" },
        { title: "more ambitious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Ambitious is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 9,
      title:
        "My studio is  ________________  (colorful) than my art teacher's studio.",
      possibleAnswers: [
        { title: "colorfuler" },
        { title: "more colorful", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Colorful is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 10,
      title: "Her car is _______________ (comfortable) than my car.",
      possibleAnswers: [
        { title: "more comfortable", correctAnswer: true },
        { title: "comfortabler" },
      ],
      userAnswer: "",
      explanation:
        "Comfortable is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 11,
      title: "The movie was ______________ (exciting) than I expected.",
      possibleAnswers: [
        { title: "more exciting", correctAnswer: true },
        { title: "excitinger" },
      ],
      userAnswer: "",
      explanation: "Exciting is three syllables, so you must use 'more.'",
    },

    {
      id: 12,
      title: "Sophia is ______________ (short) than her sister.",
      possibleAnswers: [
        { title: "shorter", correctAnswer: true },
        { title: "more short" },
      ],
      userAnswer: "",
      explanation:
        "Short is one syllable, so you can add er. More short isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 13,
      title: "He is eating _________ (little) food.",
      possibleAnswers: [
        { title: "less", correctAnswer: true },
        { title: "littler" },
      ],
      userAnswer: "",
      explanation:
        "Little is an irregular adjective. Less is the comparative form and you can't say more good.",
    },

    {
      id: 14,
      title:
        "This book is ______________ (interesting) than the one I read last week.",
      possibleAnswers: [
        { title: "more interesting", correctAnswer: true },
        { title: "interestinger" },
      ],
      userAnswer: "",
      explanation: "Interesting is three syllables, so you must use 'more.'",
    },

    {
      id: 15,
      title: "Macs are ______________ (good) than Lenovo.",
      possibleAnswers: [
        { title: "better", correctAnswer: true },
        { title: "more good" },
      ],
      userAnswer: "",
      explanation:
        "Good is an irregular adjective. Better is the comparative form and you can't say more good.",
    },

    {
      id: 16,
      title: "Julia is ______________ (tall) than her brother.",
      possibleAnswers: [
        { title: "taller", correctAnswer: true },
        { title: "more tall" },
      ],
      userAnswer: "",
      explanation:
        "Tall is one syllable, so you can add er. More tall isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 17,
      title: "The city is ______________ (crowded) during rush hour.",
      possibleAnswers: [
        { title: "more crowded", correctAnswer: true },
        { title: "crowdeder" },
      ],
      userAnswer: "",
      explanation:
        "Crowded is a two syllable adjective that can't use er at the end in the comparative.",
    },

    {
      id: 18,
      title: "The test was ______________ (difficult) than I expected.",
      possibleAnswers: [
        { title: "more difficult", correctAnswer: true },
        { title: "difficulter" },
      ],
      userAnswer: "",
      explanation: "Difficult is three syllables, so you must use 'more.'",
    },

    {
      id: 19,
      title: "Jazz music is ______________ (relaxing) than rock.",
      possibleAnswers: [
        { title: "more relaxing", correctAnswer: true },
        { title: "relaxinger" },
      ],
      userAnswer: "",
      explanation: "Relaxing is three syllables, so you must use 'more.'",
    },

    {
      id: 20,
      title:
        "The new restaurant is ______________ (cheap) than the one we used to go to.",
      possibleAnswers: [
        { title: "cheaper", correctAnswer: true },
        { title: "more cheap" },
      ],
      userAnswer: "",
      explanation:
        "Cheap is one syllable, so you can add er. More cheap isn't technically incorrect, but it sounds strange.",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Comparative Adjectives</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          To make the comparative form ('stronger' or 'more delicious'), the
          first thing we need to know is the number of syllables in the
          adjective.
        </p>
      </div>
      <section className={styles.page_body}>
        <h4>Adjectives with only one syllable</h4>
        <p>
          Normally if an adjective has one syllable, we add 'er' to make the
          comparative form.
        </p>
        <ul className="page-examples">
          <li>smart → smarter</li>
          <li>fast → faster</li>
          <li>tall → taller</li>
          <li>old → older</li>
        </ul>
        <p>
          There are some spelling changes. If the adjective ends in 'e', we
          don't add another 'e', just 'r'.
        </p>
        <ul className="page-examples">
          <li>brave → braver</li>
          <li>safe → safer</li>
        </ul>
        <p>
          If there is one vowel followed by one consonant at the end of the
          adjective, we often double the consonant.
        </p>
        <ul className="page-examples">
          <li>sad → sadder</li>
          <li>hot → hotter</li>
          <li>big → bigger</li>
        </ul>

        <p>
          There are some adjectives that we need to use 'more' with, even though
          they only have one syllable. Adding -er is incorrect for these verbs.
        </p>
        <ul className="page-examples">
          <li>real → more real (NOT realer)</li>
          <li>fun → more fun (NOT funner)</li>
        </ul>
      </section>
      <section>
        <h4>Adjectives with two syllables</h4>
        <p>Some adjectives with two syllables use 'more'.</p>
        <ul className="page-examples">
          <li>thoughtful → more thoughtful</li>
          <li>peaceful → more peaceful</li>
        </ul>
        <p>However, some two syllable adjectives can use 'er'.</p>
        <ul className="page-examples">
          <li>quiet → quieter</li>
          <li>cruel → crueler</li>
          <li>simple → simpler</li>
          <li>quiet → quieter</li>
        </ul>
        <p>
          For adjectives with two syllables that end in 'y' we normally add 'er'
          (y generally changes to i).
        </p>
        <ul className="page-examples">
          <li>funny → funnier</li>
          <li>happy → happier</li>
          <li>ugly → uglier</li>
          <li>silly → sillier</li>
        </ul>
      </section>
      <section>
        <h4>Adjectives that have more than two syllables</h4>
        <p>
          Adjectives that have more than two syllables need to use 'most' to
          form their comparative.
        </p>
        <ul className="page-examples">
          <li>delicious → more delicious</li>
          <li>interesting → more more interesting</li>
          <li>exotic → more exotic</li>
          <li>intelligent → more intelligent</li>
        </ul>
      </section>
      <section>
        <h4>Irregular adjectives</h4>
        <p>
          There are also some irregular adjectives. We simply need to memorize
          them.
        </p>
        <ul className="page-examples">
          <li>good → better</li>
          <li>bad → worse</li>
          <li>far → further</li>
          <li>little → less</li>
          <li>much → more</li>
        </ul>
      </section>

      <QuizForm questionsArray={questionsArray} />
    </main>
  );
}
