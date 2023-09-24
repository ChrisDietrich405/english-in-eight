import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function PhrasalVerbs1() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Phrasal Verbs List One</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Take up</b> - occupy time, space, or attention
            <p>
              Example: Sorry for asking so many questions. I didn't want to{" "}
              <b>take up</b> so much of your time.
            </p>
          </li>

          <li>
            <b>Fed up with</b> - annoyed or upset at a situation or treatment
            <p>
              Example: He was <b>fed up with</b> doing all the work.
            </p>
          </li>

          <li>
            <b>Talk it out</b> - to resolve a fight, disagreement,
            misunderstanding through talking
            <p>
              Example: The day after the fight my wife and I{" "}
              <b>talked it out</b> and now we are fine.
            </p>
          </li>

          <li>
            <b>Hit it off</b> - to immediately have a good relationship when
            meeting someone new
            <p>
              Example: I met my new boss today and we <b>hit it off</b> from the
              start. I’m so happy.
            </p>
          </li>

          <li>
            <b>Cheat on</b> - to be unfaithful to your romantic partner, or when
            being dishonest when taking tests
            <p>
              Example: Skylar <b>cheated on</b> Walter (she had sex with her
              boss).
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1, 
            title:
              "My daughter really ___________ with her new roommate. She's very excited.",
            possibleAnswersAndExplanation: [
              { title: "a. cheat on" },
              { title: "b. hit it off", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2, 
            title: "After _________________ they went on a romantic date.",
            possibleAnswersAndExplanation: [
              { title: "a. cheating on" },
              { title: "b. talking it out", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3, 
            title: "My shoes ________________ a lot of space in my closet.",
            possibleAnswersAndExplanation: [
              { title: "a. take up", correctAnswer: true },
              { title: "b. fed up with" },
            ],
            userAnswer: "",
          },
          {
            id: 4, 
            title:
              "He ____________ his math test and got caught by the teacher.",
            possibleAnswersAndExplanation: [
              { title: "a. hit it off" },
              { title: "b. cheated on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5, 
            title: "I'm ________________ my boss. She's such a jerk.",
            possibleAnswersAndExplanation: [
              { title: "a. fed up with", correctAnswer: true },
              { title: "b. talking it out" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
