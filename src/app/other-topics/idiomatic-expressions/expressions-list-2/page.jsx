import Quiz from "@/src/components/Quiz";

export default function Expressions2() {
  return (
    <>
      <div className="page-title">
        <h2>Idiomatic Expressions List Two</h2>
      </div>
      <div className="page-body">
        <ul>
          <li>
            <p>
              <b>Hand me downs</b> - clothes that are received that were worn by
              older relatives.
            </p>
            <br />
            <p>
              I wore a lot of my older brother’s <b>hand me downs.</b>
            </p>
          </li>

          <li>
            <p>
              <b>Second wind</b> - a new strength or energy to continue
              something that is difficult.
            </p>
            <br />
            <p>
              I was tired around 11pm, but got a <b>second wind</b> and finished
              the project.
            </p>
          </li>

          <li>
            <p>
              <b>To wing it</b> - to not plan
            </p>
            <br />
            <p>
              John didn’t have time to prepare for his interview so he needed{" "}
              <b>to wing it.</b>
            </p>
          </li>
          <li>
            <p>
              <b>Out of one's hands</b> - not being able to be controlled or
              managed
            </p>
            <br />
            <p>
              The decision is <b>out of my hands.</b> I have no control in this
              situation.
            </p>
          </li>

          <li>
            <p>
              <b>To backfire</b> - (of a plan or action) to have an opposite and
              undesirable effect to what was intended.
            </p>
            <br />
            <p>
              Her plans to make him jealous <b>backfired</b> on her when he
              started dating her best friend.
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
            possibleAnswers: [
              { title: "a. backfired" },
              { title: "b. out of his hands", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I completely forgot about my presentation today. I needed _____________.",
            possibleAnswers: [
              { title: "a. to wing it", correctAnswer: true },
              { title: "b. second wind" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Working extra _____________ on me. They thought I was crazy and fired me.",
            possibleAnswers: [
              { title: "a. winged" },
              { title: "b. backfired", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "It's better for the environment for children to wear _________________.",
            possibleAnswers: [
              { title: "a. hand me downs", correctAnswer: true },
              { title: "b. second winds" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Many marathon runners get a _____________ at about the 18km mark.",
            possibleAnswers: [
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
