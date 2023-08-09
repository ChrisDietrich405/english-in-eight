import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

//DONE

export default function AllVersusEvery() {
  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h1>Every versus All</h1>
      </div>

      <p className={styles.grammar_explanation_paragraph}>
        We use both all and every to describe a total number of something. Every
        describes each member of a complete group. All describes a complete
        group.
      </p>
      <ul className="page-examples">
        <li>The food was sent to all students</li>
        <li>The food was sent to every student</li>
      </ul>
      <p>
        In some situations we use <b>all </b>on its own. We can also use
        everyone/everybody/everything.
      </p>
      <ul className="page-examples">
        <li>
          The bingo event is at Camden Yards. It starts at 4 and all are
          welcome.
        </li>
        <li>
          The bingo event is at Camden Yards. It starts at 4 and everyone is
          welcome.
        </li>
      </ul>
      <p>We can use every to focus on each individual member.</p>
      <p>Compare:</p>
      <ul className="page-examples">
        <li>
          All attendees need to silence their phones. (describes the entire
          group)
        </li>
        <li>
          Every attendee needs to silence their phones. (describes the
          individuals )
        </li>
      </ul>

      <p>
        We use <b>every </b> with singular entitites and <b>all</b> with
        uncountable and plural nouns
      </p>
      <ul className="page-examples">
        <li>Every payment is due today.</li>
        <li>All payments are due today.</li>
      </ul>
      {/* <p>
        We use all day, all week, all month to mean ‘one entire day/week/month’:
      </p>
      <ul className="page-examples">
        <li>We spent all day at the beach yesterday.</li>
      </ul>
      <p>Every day (week/month) focuses on each individual day (week/month):</p>
      <ul className="page-examples">
        <li>We spent every day at the beach when we were on vacation .</li>
      </ul> */}

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "I emailed ______________ my colleagues.",
            possibleAnswers: [
              { title: "every" },
              { title: "all", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "_________ the cars in the parking lot are empty.",
            possibleAnswers: [
              { title: "every" },
              { title: "all", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I see them ______________ couple of days.",
            possibleAnswers: [
              { title: "all" },
              { title: "every", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "_________________ children need love.",
            possibleAnswers: [
              { title: "all", correctAnswer: true },
              { title: "every" },
            ],
            userAnswer: "",
          },
          {
            title: " You don’t see deer __________ day.",
            possibleAnswers: [
              { title: "all" },
              { title: "every", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She has invited ____________ her friends.",
            possibleAnswers: [
              { title: "all", correctAnswer: true },
              { title: "every" },
            ],
            userAnswer: "",
          },
          {
            title: "People should go to their doctor ______________ year.",
            possibleAnswers: [
              { title: "every", correctAnswer: true },
              { title: "all" },
            ],
            userAnswer: "",
          },
          {
            title: " I talk to my wife ____________ day.",
            possibleAnswers: [
              { title: "every", correctAnswer: true },
              { title: "all" },
            ],
            userAnswer: "",
          },
          {
            title: "She has worked for this company ___________ my life.",
            possibleAnswers: [
              { title: "every" },
              { title: "all", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: " I have washed _______________ the clothes except yours.",
            possibleAnswers: [
              { title: "all", correctAnswer: true },
              { title: "every" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
