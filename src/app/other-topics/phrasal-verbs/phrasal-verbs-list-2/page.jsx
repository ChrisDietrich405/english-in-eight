import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PhrasalVerbs2() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Phrasal Verbs List Two</h2>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Put together</b> - to assemble, construct something using several
            pieces
            <p>
              I bought a desk from the store and now I need to{" "}
              <b>put it together.</b>
            </p>
          </li>

          <li>
            <b>Drive around</b> - to drive with no real purpose
            <p>
              I love to drive so much that sometimes I just <b>drive around.</b>
            </p>
          </li>

          <li>
            <b>To go off (alarm)</b> - when an alarm starts
            <p>When my alarm goes off in the morning I’m miserable.</p>
          </li>

          <li>
            <b>Live off of</b> - to be able to survive with a minimum amount of
            something
            <p>
              She <b>lives off of </b>$2,000 a month. I don’t know how she does
              it.
            </p>
          </li>

          <li>
            <b>Talk into</b> -to persuade someone to do something .
            <p>
              Gabriela <b>talked Caio into </b>going to Bahia for their
              vacation.
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title:
              "I think he could _______________ peanut butter and jelly sandwiches. I always see him eating them.",
            possibleAnswers: [
              { title: "a. live off of", correctAnswer: true },
              { title: "b. talk into" },
            ],
            userAnswer: "",
          },
          {
            title: "After their fight, she ___________ to clear her head.",
            possibleAnswers: [
              { title: "a. put together" },
              { title: "b. drove around", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I can't believe I let my wife ______________ adopting another cat.",
            possibleAnswers: [
              { title: "a. to go off" },
              { title: "b. talk me into", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My car's alarm is very sensitive. It ___________ if you walk past it.",
            possibleAnswers: [
              { title: "a. puts together" },
              { title: "b. goes off", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She has to __________________ her new dining room table.",
            possibleAnswers: [
              { title: "a. put together", correctAnswer: true },
              { title: "b. drive around" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
