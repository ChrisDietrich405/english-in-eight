import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function Expressions() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Idiomatic Expressions List Four</h2>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Cold calling</b> - make an unsolicited call to (someone), by
            phone or in person, in an attempt to sell goods or services
            <br />
            <p>
              Example: I hate <b>cold calling</b>. I never get any sales from
              it.{" "}
            </p>
          </li>

          <li>
            <b>B movie</b> - a low-budget commercial movie
            <br />
            <p>
              Example: My friends and I like to watch <b>B movies</b>. We like
              making fun of them.
            </p>
          </li>

          <li>
            <b>You had to be there</b> - when retelling a funny story that isn’t
            as funny when being told
            <br />
            <p>
              Example: After I told my mom what happened, she didn’t laugh at
              all and so I said <b>“you had to be there".</b>
            </p>
          </li>

          <li>
            <b>(period of time) tops</b> - the longest time something will take
            to finish
            <br />
            <p>
              Example: I’ll finish this website in <b>one week tops.</b>
            </p>
          </li>
          <li>
            <b>Ahead of schedule</b> - earlier than planned or expected
            <br />
            <p>
              Example: They finished the project 2 weeks{" "}
              <b>ahead of schedule.</b>
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1,
            title: "Why didn't you laugh at my story? ____________________.",
            possibleAnswers: [
              { title: "a. I guess it was ahead of schedule" },
              { title: "b. I guess you had to be there", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "__________ is a very ineffective way to get sales.",
            possibleAnswers: [
              { title: "a. B movie" },
              { title: "b. Cold calling", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I actually like ___________. They are so bad they make me laugh.",
            possibleAnswers: [
              { title: "a. Cold calling" },
              { title: "b. B movies", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title: "The project will be finished in 3 weeks ________.",
            possibleAnswers: [
              { title: "a. you had to be there" },
              { title: "b. tops", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "Hopefully we can finish the project ________________.",
            possibleAnswers: [
              { title: "a. tops" },
              { title: "b. ahead of schedule", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
