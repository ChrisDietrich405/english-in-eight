import Quiz from "@/src/components/Quiz";

export default function PhrasalVerbs1() {
  return (
    <>
      <div className="page-title">
        <h2>Phrasal Verbs List One</h2>
      </div>
      <div className="page-body">
        <ul>
          <li>
            <b>Take up</b> - occupy time, space, or attention.
            <p>
              I don't want to <b>take up</b> any more of your time.
            </p>
          </li>

          <li>
            <b>Fed up with</b> - annoyed or upset at a situation or treatment.
            <p>
              He was <b>fed up with</b> doing all the work.
            </p>
          </li>

          <li>
            <b>Talk it out</b> - to resolve a fight, disagreement,
            misunderstanding through talking.
            <p>
              After my wife and I <b>talked it out</b> we were fine.
            </p>
          </li>

          <li>
            <b>Hit it off</b> - to immediately have a good relationship when
            meeting someone new.
            <p>
              I met my new boss today and we <b>hit it off</b> from the start.
              I’m so happy.
            </p>
          </li>

          <li>
            <b>Cheat on</b> - to be unfaithful to your romantic partner, or when
            being dishonest when taking tests.
            <p>
              Skylar <b>cheated on</b> Walter (she had sex with her boss).
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title:
              "My daughter really ___________ with her new roommate. She's very excited.",
            possibleAnswers: [
              { title: "a. cheat on" },
              { title: "b. hit it off", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "After _________________ they went on a romantic date.",
            possibleAnswers: [
              { title: "a. cheating on" },
              { title: "b. talking it out", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My shoes ________________ a lot of space in my closet.",
            possibleAnswers: [
              { title: "a. take up", correctAnswer: true },
              { title: "b. fed up with" },
            ],
            userAnswer: "",
          },
          {
            title:
              "He ____________ his math test and got caught by the teacher.",
            possibleAnswers: [
              { title: "a. hit it off" },
              { title: "b. cheated on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I'm ________________ my boss. He's such a jerk.",
            possibleAnswers: [
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
