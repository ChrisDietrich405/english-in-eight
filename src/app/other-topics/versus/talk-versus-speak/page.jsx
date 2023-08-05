import Quiz from "@/src/components/Quiz";

//DONE

import styles from "../../../styles/content-page.module.css";
export default function SpeakVersusTalk() {
  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h2>Talk versus Speak</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        The verbs talk and speak both have the meaning ‘say words’, but they are
        used differently depending on context. For example speak is more formal
        than talk. Talk, on the other hand focuses on a speaker and at least one
        listener, and can mean 'have a conversation
      </p>
      <p>
        We use talk for more informal situations and speak for more formal ones
      </p>
      <ul className="page-examples">
        <li>Dante will talk to the group about the benefits of meditation. </li>
        <li>The president will speak shortly to her advisors</li>
      </ul>
      <p>We normally use to after talk and speak. We can also use with:</p>
      <ul className="page-examples">
        <li>Could I talk to you for a moment?</li>
        <li>The director needs to speak to you.</li>
        <li>She spoke with the general for an hour </li>
        <li>I talked with her about it</li>
      </ul>
      <p>When we refer to languages, we use speak:</p>
      <ul className="page-examples">
        <li>I don't speak Swahili, but I want to learn.</li>
        <li>How many languages does Ahmad speak?</li>
      </ul>

      <p className="grammar-explanation-paragraph">
        Some phrasal verbs require either talk and speak. Talk and speak in
        these contexts are not interchangeable.
      </p>
      <ul className="page-examples">
        <li>
          His students talk back to him, because he accepts it. (talk back means
          to be disrespectful)
        </li>

        <li>
          My hearing is terrible. I always need to ask people to speak up.
          (speak up means to speak louder)
        </li>
        <li>
          I know we are fighting a lot now, but I want to talk it out (talk it
          out means to resolve problems by talking calmly)
        </li>
      </ul>
      <p>Talk can be a noun or a verb. Speak is always only a verb. </p>
      <ul className="page-examples">
        <li>He gave a great talk about diet</li>
      </ul>

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "It was an fascinating ____.",
            possibleAnswers: [
              { title: "speak" },
              { title: "talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "We tried to  ____ things over, but decided we needed to end the relationship.",
            possibleAnswers: [
              { title: "spoke" },
              { title: "talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Well Bia, I’ll  ________ to you tomorrow.",
            possibleAnswers: [
              { title: "speak" },
              { title: "talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It's only _______. They'll never fire us.",
            possibleAnswers: [
              { title: "speak" },
              { title: "talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "________ up! Nobody can hear you.",
            possibleAnswers: [
              { title: "Speak", correctAnswer: true },
              { title: "Talk" },
            ],
            userAnswer: "",
          },
          {
            title: "They only ever  ________ about basketball.",
            possibleAnswers: [
              { title: "speak" },
              { title: "talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ________ today with Denzel St. Clair and Robert Smith.",
            possibleAnswers: [
              { title: "spoke", correctAnswer: true },
              { title: "talk" },
            ],
            userAnswer: "",
          },
          {
            title: "After breakfast we always go for a walk and ________ .",
            possibleAnswers: [
              { title: "talk", correctAnswer: true },
              { title: "speak" },
            ],
            userAnswer: "",
          },
          {
            title: "Hello, could I ________ with Mrs. Jones?",
            possibleAnswers: [
              { title: "speak", correctAnswer: true },
              { title: "talk" },
            ],
            userAnswer: "",
          },
          {
            title: "She ____ four languages.",
            possibleAnswers: [
              { title: "speaks", correctAnswer: true },
              { title: "talks" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
