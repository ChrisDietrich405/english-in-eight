import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PhrasalVerbs4() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Phrasal Verbs List Four</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Ask around</b> - to ask a lot of different people in order to get
            information or help
            <p>
              Example: I’m going to <b>ask around</b> to find the best mechanic.
            </p>
          </li>

          <li>
            <b>Sell out</b> - to no longer have a product available in a store
            because every one of that product was purchased.
            <p>
              Example: All the new IPhones were <b>sold out</b> at the Apple
              store.
            </p>
          </li>

          <li>
            <b>Look down on</b> - to feel that others are inferior
            <p>
              Example: Many rich people <b>look down on</b> poor people.
            </p>
          </li>

          <li>
            <b>Come back</b> - to return to the place you are right now
            <p>
              Example: I’m leaving soon, but I’m <b>coming right</b> back.
            </p>
          </li>

          <li>
            <b>Go back</b> - to return to a place where you aren’t right now
            <p>
              Example: I’m <b>going back</b> to Colombia in December.{" "}
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title:
              "She left the office(here), but is __________ in the afternoon.",
            possibleAnswersAndExplanation: [
              { title: "a. selling out" },
              { title: "b. coming back", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Many people from the U.S. ______________ immigrants. It's very sad.",
            possibleAnswersAndExplanation: [
              { title: "a. go back" },
              { title: "b. look down on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I hope they don't _____________ of their burritos today. I really want one for lunch.",
            possibleAnswersAndExplanation: [
              { title: "a. come back" },
              { title: "b. sell out", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "He's not ______________ to Algeria this year. He's staying in the U.S.",
            possibleAnswersAndExplanation: [
              { title: "a. asking around" },
              { title: "b. going back", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "You need a good interior designer for your new house? I can __________ for you.",
            possibleAnswersAndExplanation: [
              { title: "a. sell out" },
              { title: "b. ask around", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
