import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function Expressions2() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Idiomatic Expressions List Two</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Hand me downs</b> - clothes that are received that were worn by
            older relatives.
            <br />
            <p>
              Example: I wore a lot of my older brother’s <b>hand me downs.</b>
            </p>
          </li>

          <li>
            <b>Second wind</b> - a new strength or energy to continue something
            that is difficult.
            <br />
            <p>
              Example: I was tired around 11pm, but got a <b>second wind</b> and
              finished the project.
            </p>
          </li>

          <li>
            <b>To wing it</b> - to not plan for something
            <br />
            <p>
              Example: Malcolm didn’t have time to prepare for his interview so he
              needed <b>to wing it.</b>
            </p>
          </li>
          <li>
            <b>Out of one's hands</b> - not being able to be controlled or
            managed
            <br />
            <p>
              Example: The decision is <b>out of my hands.</b> I have no control
              in this situation.
            </p>
          </li>

          <li>
            <b>To backfire</b> - (of a plan or action) to have an opposite and
            undesirable effect to what was intended.
            <br />
            <p>
              Example: Her plans to make him jealous <b>backfired</b> on her
              when he started dating her best friend.
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title:
              "The decision is _________________. The boss will decide now.",
            possibleAnswersAndExplanation: [
              { title: "a. backfired" },
              { title: "b. out of her hands", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I completely forgot about my presentation today. I needed _____________.",
            possibleAnswersAndExplanation: [
              { title: "a. to wing it", correctAnswer: true },
              { title: "b. second wind" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Working extra _____________ on me. They thought I was crazy and fired me.",
            possibleAnswersAndExplanation: [
              { title: "a. winged" },
              { title: "b. backfired", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "It's better for the environment for children to wear _________________.",
            possibleAnswersAndExplanation: [
              { title: "a. hand me downs", correctAnswer: true },
              { title: "b. second winds" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Many marathon runners get a _____________ at about the 18km mark.",
            possibleAnswersAndExplanation: [
              { title: "a. backfire" },
              { title: "b. second wind", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
