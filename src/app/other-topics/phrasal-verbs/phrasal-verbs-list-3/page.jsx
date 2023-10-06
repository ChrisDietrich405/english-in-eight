import Quiz from "@/src/components/Quiz";
import styles from "../../../styles/content-page.module.css";

export default function PhrasalVerbs3() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Phrasal Verbs List Three</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Think over</b> - to think deeply about a decision before you make
            it
            <p>
              Example: Can I <b>think it over</b> and tell you my answer
              tomorrow?{" "}
            </p>
          </li>

          <li>
            <b>Put up with</b> - tolerate
            <p>
              Example: He couldn’t <b>put up with</b> his boss anymore so he
              quit.{" "}
            </p>
          </li>

          <li>
            <b>Fall for</b> - To either become infatuated with or fall in love
            with someone
            <p>
              Example: I <b>fell for</b> her pretty quickly.
            </p>
          </li>

          <li>
            <b>Take apart</b> - to disassemble
            <p>
              Example: We needed to <b>take apart</b> the desk in order to take
              it out of the room.{" "}
            </p>
          </li>

          <li>
            <b>Build up</b> - to increase in intensity.
            <p>
              Example: They had a big fight after the tension between them{" "}
              <b>built up</b>.{" "}
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1,
            title: "I need to _______________ our bed before we move.",
            possibleAnswers: [
              { title: "a. take apart", correctAnswer: true },
              { title: "b. build up" },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "He ________________ her during their first date.",
            possibleAnswers: [
              { title: "a. put up with" },
              { title: "b. fell for", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "It's a great job offer, but because it means moving I need to __________.",
            possibleAnswers: [
              { title: "a. build up" },
              { title: "b. think it over", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "I'm going to tell her how I feel today. It's better than letting things _______________.",
            possibleAnswers: [
              { title: "a. take apart" },
              { title: "b. build up", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "She couldn't _____________ her job anymore so she quit.",
            possibleAnswers: [
              { title: "a. think over" },
              { title: "b. put up with", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
