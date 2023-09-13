import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function Expressions() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Idiomatic Expressions List One</h1>
      </div>
      <div className={styles.page_body}>
        <ul>
          <li>
            <b>Time is money</b> - time is a valuable resource, therefore it is
            better to do things as quickly as possible
            <br />
            <p>
              Example: Come on hurry up! <b>Time is money.</b>
            </p>
          </li>

          <li>
            <b>Foolproof</b> - incapable of going wrong or being misused
            <br />
            <p>
              Example: I have a <b>foolproof</b> security system. As dumb as I
              am even I'm able to use it.
            </p>
          </li>

          <li>
            <b>Out of nowhere</b> - appearing or happening suddenly and
            unexpectedly
            <br />
            <p>
              Example: The car came <b>out of nowhere</b> and hit our van.
            </p>
          </li>

          <li>
            <b>To one up someone</b> - to make a point of outdoing,
            outperforming, outclassing, etc., someone
            <br />
            <p>
              Example: I hate telling stories around Jack because he always
              tries <b>to one up</b> you with some amazing story of his own.
            </p>
          </li>
          <li>
            <b>It's better to be safe than sorry</b> - it’s better to be careful
            now so that problems do not occur later on
            <br />
            <p>
              Example: It's probably not necessary to check the figures again,
              but <b>it's better to be safe than sorry.</b>
            </p>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "She started yelling at me and honestly it scared me. It came _______________.",
            possibleAnswersAndExplanation: [
              { title: "a. to one up someone" },
              { title: "b. out of nowhere ", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Let's go! Hurry up! ____________.",
            possibleAnswersAndExplanation: [
              { title: "a. To one up someone" },
              { title: "b. Time is money", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I bought a face shield and a mask because I don't want to take any chances. _____________.",
            possibleAnswersAndExplanation: [
              { title: "a. Foolproof" },
              {
                title: "b. It's better to be safe than sorry",
                correctAnswer: true,
              },
            ],
            userAnswer: "",
          },
          {
            title:
              "He tried to devise a _________ plan for getting rid of termites.",
            possibleAnswersAndExplanation: [
              { title: "a. out of nowhere" },
              { title: "b. foolproof", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I can tell he's insecure. He's always explaining how much better his life is compared to mine and trying ____________.",
            possibleAnswersAndExplanation: [
              { title: "a.  to one up me" },
              { title: "b. time is money", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
