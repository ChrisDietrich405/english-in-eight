import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function Expressions3() {
  return (
    <>
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
              my English classes.
            </p>
          </li>

          <li>
            <b>Measure twice cut once</b> - to double check your work before
            making a final decision
            <br />
            <p>
              Example: I have to go back to the store because I cut the wrong
              size. I forgot to <b>"measure twice, cut once"</b>.
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
            title:
              "Check your final numbers before you submit them to the boss. Remember ______________.",
            possibleAnswersAndExplanation: [
              { title: "a. spread the word" },
              { title: "b. measure twice, cut once", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Would you please help me to ________________ about my new restaurant.",
            possibleAnswersAndExplanation: [
              { title: "a. spread the word", correctAnswer: true },
              { title: "b. binge watch" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I told my wife I wanted Italian food for dinner. She responded 'you ________________! I want Italian food too'.",
            possibleAnswersAndExplanation: [
              { title: "a. read my mind", correctAnswer: true },
              { title: "b. if it's not broke don't fix it" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I don't like watching series, because sometimes I get addicted to one and ________________ watch it.",
            possibleAnswersAndExplanation: [
              { title: "a. spread the word" },
              { title: "b. binge watch", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My wife wanted to change her resume, but it was perfect the way it was so I told her _______________.",
            possibleAnswersAndExplanation: [
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
    </>
  );
}
