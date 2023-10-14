import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Idiomatic Expressions | English in Eight Minutes",
  description:
    "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
  keywords:
    "English, Idiomatic Expressions, English idioms, English in Eight Minutes",
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
    title: "Idiomatic Expressions | English in Eight Minutes",
    description:
      "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
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

export default function Expressions3() {
  return (
    <main>
      <div className={styles.page_title}>
        <h1>Idiomatic Expressions List Three</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>If it’s not broke don’t fix it</b> - when a situation is going
            well it's a bad idea to interfere with it
            <br />
            <p>
              Example: My refrigerator was making a very small noise, but it was
              working. I was about to investigate with a screwdriver when my
              wife said leave it alone. <b>If it’s not broke don’t fix it</b>.
            </p>
          </li>

          <li>
            <b>Read someone’s mind</b> - to guess correctly what someone is
            thinking
            <br />
            <p>
              Example: When I told my wife that we should order Chinese she said
              “Wow! <b>You read my mind</b>. That’s exactly what I wanted to
              have for dinner.
            </p>
          </li>

          <li>
            <b>Spread the word</b> - to help a business by telling other people
            about it
            <br />
            <p>
              Example: I ask my students to please <b>spread the word</b> about
              my English grammar website.
            </p>
          </li>

          <li>
            <b>Measure twice cut once</b> - to double check your work before
            making a final decision
            <br />
            <p>
              Example: I have to go back to Lowe's because I cut the wrong size.{" "}
              <b>"Measure twice, cut once" </b>should be my new motto!
            </p>
          </li>

          <li>
            <b>Binge watch</b> - watching a lot of episodes of a series in a
            short period of time
            <br />
            <p>
              Example: Over the weekend I <b>binge watched</b> Breaking Bad. I
              watched the first three seasons.
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            id: 1,
            title:
              "Check your final numbers before you submit them to the boss. Remember the saying ______________.",
            possibleAnswers: [
              { title: "a. spread the word" },
              { title: "b. measure twice, cut once", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title:
              "Would you please help me to ________________ about my new restaurant.",
            possibleAnswers: [
              { title: "a. spread the word", correctAnswer: true },
              { title: "b. binge watch" },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I told my wife that we should watch the movie Love and Basketball. She responded 'you ________________! I wanted to watch that tonight too'.",
            possibleAnswers: [
              { title: "a. read my mind", correctAnswer: true },
              { title: "b. if it's not broke don't fix it" },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "I don't like watching series, because sometimes I get addicted to one and ________________ it.",
            possibleAnswers: [
              { title: "a. spread the word" },
              { title: "b. binge watch", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title:
              "My wife wanted to change her resume, but I thought it was perfect the way it was so I told her _______________.",
            possibleAnswers: [
              { title: "a. read my mind" },
              {
                title: "b. if it's not broke don't fix it",
                correctAnswer: true,
              },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </main>
  );
}
