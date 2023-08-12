import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

export default function SayVersusTell() {
  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h1>Tell versus Say</h1>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The verbs tell and say have similar meanings, but are not exactly the
        same. Both of them mean "to communicate verbally with someone", but
        depending on context we use one or the other.
      </p>
      <p>A easy explanation can start with:</p>
      <ul className="page-examples">
        <li>You tell somebody something</li>
        <li>You say something</li>
      </ul>
      <div className="table-container">
        {/* <table className="table-body">
          <tr>
            <th>You tell somebody something</th>
            <th>You say something</th>
          </tr>
          <tr>
            <td>I told my wife that I was busy</td>
            <td>I said I was tired</td>
          </tr>
          <tr>
            <td>They told me that you had left.</td>
            <td>They said that you had left.</td>
          </tr>
          <tr>
            <td>She told her brother.</td>
            <td>She said something to her brother</td>
          </tr>
        </table> */}
      </div>
      <p>
        Tell is normally followed by a <b>personal object</b>. We usually use
        say without a personal object:
      </p>
      <ul className="page-examples">
        <li>
          We told <b>everybody</b> that we wanted to eat.
        </li>
        <li>We said that we wanted to eat.</li>
        <li>
          He told <b>me</b> that he loved Dionte.
        </li>
        <li>He said that he loved Dionte.</li>
      </ul>

      <p>
        Tell has to be used in certain situations. In these situations tell
        can't be replaced with say.
      </p>
      <ul className="page-examples">
        <li>tell the difference between.....</li>
        <li>tell (somebody) lies</li>
        <li>tell (somebody) the truth</li>
        <li>tell the time </li>
        <li>tell (somebody) a story</li>
      </ul>

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "Martin  _____________ that he would love to do it.",
            possibleAnswers: [
              { title: "said", correctAnswer: true },
              { title: "told" },
            ],
            userAnswer: "",
          },
          {
            title: "She ______________ him a lie. ",
            possibleAnswers: [
              { title: "told" },
              { title: "said", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They  _____________ her that they were going to leave Friday.",
            possibleAnswers: [
              { title: "said" },
              { title: "told", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Demarcus  ___________ us that he didn't want to go out.",
            possibleAnswers: [
              { title: "said" },
              { title: "told", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Maria _________ that she's not feeling well. ",
            possibleAnswers: [
              { title: "said", correctAnswer: true },
              { title: "told" },
            ],
            userAnswer: "",
          },
          {
            title: "She  __________ her mother that she wanted to quit.",
            possibleAnswers: [
              { title: "said" },
              { title: "told", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "Maria  _____________ that she would join us after work.",
            possibleAnswers: [
              { title: "said", correctAnswer: true },
              { title: "told" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Maria  _____________ that she's going to talk with her friend about it.",
            possibleAnswers: [
              { title: "said", correctAnswer: true },
              { title: "told" },
            ],
            userAnswer: "",
          },
          {
            title: "Dan ____________ the best stories.",
            possibleAnswers: [
              { title: "tells", correctAnswer: true },
              { title: "say" },
            ],
            userAnswer: "",
          },
          {
            title: "Najha _____________ that she was going to stop helping us.",
            possibleAnswers: [
              { title: "said", correctAnswer: true },
              { title: "told" },
            ],
            userAnswer: "",
          },
          {
            title:
              "They _________ that they didn't want to have the meeting Friday.",
            possibleAnswers: [
              { title: "said" },
              { title: "told", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
