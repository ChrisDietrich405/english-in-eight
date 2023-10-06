import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Past Perfect Continuous Tense | English in Eight Minutes",
  description:
    "Learn about the past perfect continuous tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
  keywords:
    "past perfect continuous tense, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States, grammar lessons, English language",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Learn Past Perfect Continuous Tense | English in 8 Minutes",
    description:
      "Master the past perfect continuous tense in English with explanations, examples, and a quiz. English in Eight Minutes offers concise language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions in the United States.",
    images: [
      {
        url: "images/logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "images/logo.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

export default function PastPerfectContinuous() {
  const questionsArray = [
    {
      id: 1,
      title:
        "She ________________ (work) at the company for three years when she got the promotion.",
      possibleAnswers: [
        { title: "a. had worked" },
        { title: "b. had been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been working is the correct past perfect continuous form.",
    },
    {
      id: 2,
      title:
        "Alisha _______________ (go) to that store since 2013 when it moved.",
      possibleAnswers: [
        { title: "a. had been going", correctAnswer: true },
        { title: "b. had gone" },
      ],
      userAnswer: "",
      explanation:
        "Had been going is the correct past perfect continuous form.",
    },
    {
      id: 3,
      title:
        "The mechanic knew exactly what the problem was because he ____________  (examine) the car for a long time.",
      possibleAnswers: [
        { title: "a. had examined" },
        { title: "b. had been examining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been examining is the correct past perfect continuous form.",
    },
    {
      id: 4,
      title:
        "He ______________ (drink) apple juice directly out of the carton when his dad walked into the kitchen.",
      possibleAnswers: [
        { title: "a. had been drinking", correctAnswer: true },
        { title: "b. has drunk" },
      ],
      userAnswer: "",
      explanation:
        "Had been drinking is the correct past perfect continuous form.",
    },

    {
      id: 5,
      title:
        "I _________________ (study) for hours when I fell asleep on the couch.",
      possibleAnswers: [
        { title: "a. had studied" },
        { title: "b. had been studying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been studying is the correct past perfect continuous form.",
    },

    {
      id: 6,
      title:
        "She was angry because she ________________ (wait) for me for hours.",
      possibleAnswers: [
        { title: "a. had waited" },
        { title: "b. had been waiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been waiting is the correct past perfect continuous form.",
    },
    {
      id: 7,
      title: "Demetrius ____________ (teach) at the university since May.",
      possibleAnswers: [
        { title: "a. had been teaching", correctAnswer: true },
        { title: "b. had taught" },
      ],
      userAnswer: "",
      explanation:
        "Had been teaching is the correct past perfect continuous form.",
    },
    {
      id: 8,
      title: "I ______________ (feel) a little sad.",
      possibleAnswers: [
        { title: "a. had been feeling", correctAnswer: true },
        { title: "b. have felt" },
      ],
      userAnswer: "",
      explanation:
        "Had been feeling is the correct past perfect continuous form.",
    },
    {
      id: 9,
      title:
        "He ______________ (eat) too much and that's why they think he got sick.",
      possibleAnswers: [
        { title: "a. had been eating", correctAnswer: true },
        { title: "b. have eat" },
      ],
      userAnswer: "",
      explanation:
        "Had been eating is the correct past perfect continuous form.",
    },
    {
      id: 10,
      title:
        "They ________________ (argue) for days when Bia came up with a solution.",
      possibleAnswers: [
        { title: "a. had argued" },
        { title: "b. had been arguing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been arguing is the correct past perfect continuous form.",
    },
    {
      id: 11,
      title:
        "She felt tired because she ________________ (run) for hours in the marathon.",
      possibleAnswers: [
        { title: "a. had run" },
        { title: "b. had been running", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been running is the correct past perfect continuous form.",
    },
    {
      id: 12,
      title:
        "The garden looked beautiful because they _______________ (work) on it all summer.",
      possibleAnswers: [
        { title: "a. had worked" },
        { title: "b. had been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been working is the correct past perfect continuous form.",
    },
    {
      id: 13,
      title:
        "He was exhausted because he ____________ (dance) at the party all night.",
      possibleAnswers: [
        { title: "a. had danced" },
        { title: "b. had been dancing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been dancing is the correct past perfect continuous form.",
    },
    {
      id: 14,
      title:
        "She had a sunburn because she ______________ (sunbathe) on the beach for hours.",
      possibleAnswers: [
        { title: "a. had sunbathed" },
        { title: "b. had been sunbathing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been sunbathing is the correct past perfect continuous form.",
    },
    {
      id: 15,
      title:
        "The kitchen smelled delicious because she ______________ (bake) cookies all afternoon.",
      possibleAnswers: [
        { title: "a. had baked" },
        { title: "b. had been baking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been baking is the correct past perfect continuous form.",
    },
    {
      id: 16,
      title:
        "He had a sore throat because he _______________ (sing) for hours in the choir.",
      possibleAnswers: [
        { title: "a. had sung" },
        { title: "b. had been singing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been singing is the correct past perfect continuous form.",
    },
    {
      id: 17,
      title: "The field was muddy because it _______________ (rain) all night.",
      possibleAnswers: [
        { title: "a. had rained" },
        { title: "b. had been raining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been raining is the correct past perfect continuous form.",
    },
    {
      id: 18,
      title:
        "She had a headache because she _______________ (read) for hours without a break.",
      possibleAnswers: [
        { title: "a. had read" },
        { title: "b. had been reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been reading is the correct past perfect continuous form.",
    },
    {
      id: 19,
      title:
        "The children were exhausted because they ______________ (play) in the park all day.",
      possibleAnswers: [
        { title: "a. had played" },
        { title: "b. had been playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been playing is the correct past perfect continuous form.",
    },
    {
      id: 20,
      title:
        "The room was disorganized because they ________________ (paint) it all weekend.",
      possibleAnswers: [
        { title: "a. had painted" },
        { title: "b. had been painting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Had been painting is the correct past perfect continuous form.",
    },
  ];

  return (
    <>
      <div>
        <div className={styles.page_title}>
          <h1>Past Perfect Continuous</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The past perfect continuous tense, also known as the past perfect
          progressive, refers to an action that was ongoing in the past and that
          was completed before another past action or point in time.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I have been singing</td>
              <td>I've been singing</td>
              <td>I have not been singing</td>
              <td>I haven't been singing</td>
            </tr>
            <tr>
              <td>You have been arguing</td>
              <td>You've been arguing</td>
              <td>You have not been arguing</td>
              <td>You haven't been arguing</td>
            </tr>
            <tr>
              <td>She, he, it has been working</td>
              <td>She, he, it's been working</td>
              <td>She, he, it has not been working</td>
              <td>She, he, it hasn't been working</td>
            </tr>
            <tr>
              <td>We have been fighting</td>
              <td>We've been fighting</td>
              <td>We have not been fighting</td>
              <td>We haven't been fighting</td>
            </tr>
            <tr>
              <td>They have been laughing</td>
              <td>They've been laughing</td>
              <td>They have not been laughing</td>
              <td>They haven't been laughing</td>
            </tr>
          </thead>
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

        <ul className="page-examples">
          <li>
            Marcus <b>had been working </b> on the project all day before he
            realized he forgot his laptop at home.
          </li>
          <li>
            The children <b>had been playing</b> outside in the rain and were
            very happy when they came inside.
          </li>
          <li>
            Before the concert began, the musicians <b>had been practicing</b>{" "}
            hard for weeks.
          </li>
          <li>
            I could smell cigarettes. My mom <b>had been smoking</b>.
          </li>
        </ul>
      </div>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/49PKNkZPrTg?si=OtzXewm1eRocksMB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
