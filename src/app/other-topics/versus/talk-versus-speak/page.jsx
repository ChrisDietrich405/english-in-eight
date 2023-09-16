import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function SpeakVersusTalk() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "It was a fascinating __________.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "We tried to  ___________ it out, but after fought more.",
      possibleAnswersAndExplanation: [
        { title: "spoke" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "Well Bia, I’ll  ___________ to you tomorrow.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "It's only __________. They'll never fire us.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "________ up! Nobody can hear you.",
      possibleAnswersAndExplanation: [
        { title: "Speak", correctAnswer: true },
        { title: "Talk" },
      ],
      userAnswer: "",
    },
    {
      title: "They only ever  ________ about basketball.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "We ________ today with Denzel St. Clair and Robert Smith.",
      possibleAnswersAndExplanation: [
        { title: "spoke", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
    },
    {
      title: "After breakfast we always go for a walk and ________ .",
      possibleAnswersAndExplanation: [
        { title: "talk", correctAnswer: true },
        { title: "speak" },
      ],
      userAnswer: "",
    },
    {
      title: "Hello, could I ________ with Mrs. Jones?",
      possibleAnswersAndExplanation: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
    },
    {
      title: "She ____ four languages.",
      possibleAnswersAndExplanation: [
        { title: "speaks", correctAnswer: true },
        { title: "talks" },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      [
        {
          title:
            "At the conference, Dr. McGregor will ________ about the nutrition.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
        },

        {
          title:
            "I hope we can ________ things out and find a solution to this problem.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
        },
        {
          title:
            "The teacher asked the students to ________ louder so everyone could hear their presentations.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
        },

        {
          title:
            "During the meeting, they decided to ________  about the upcoming project in detail.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
        },
        {
          title:
            "Yesterday, John and Mary ________ with their therapist to address their relationship issues.",
          possibleAnswersAndExplanation: [
            { title: "spoke", correctAnswer: true },
            { title: "talked" },
          ],
          userAnswer: "",
        },
        {
          title:
            "After a long day at work, she likes to ________ with her best friend on the phone.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
        },
        {
          title:
            "May I ________ to the manager about my concerns regarding the company policies?",
          possibleAnswersAndExplanation: [
            { title: "speak", correctAnswer: true },
            { title: "talk" },
          ],
          userAnswer: "",
        },
        {
          title: "He ________ French, Spanish, German, and English fluently.",
          possibleAnswersAndExplanation: [
            { title: "speaks", correctAnswer: true },
            { title: "talks" },
          ],
          userAnswer: "",
        },
      ],
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
     
      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>Talk versus Speak</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The verbs talk and speak both have the meaning ‘say words’, but they
          are used differently depending on context. For example speak is more
          formal than talk. Talk, on the other hand focuses on a speaker and at
          least one listener, and can mean 'have a conversation'
        </p>
        <p>
          We use talk for more informal situations and speak for more formal
          situations:
        </p>
        <ul className="page-examples">
          <li>
            Dante will talk to the group about the benefits of meditation.{" "}
          </li>
          <li>The president will speak shortly to her advisors.</li>
        </ul>
        <p>We normally use to after talk and speak. We can also use with:</p>
        <ul className="page-examples">
          <li>Could I talk to you for a moment?</li>
          <li>The director needs to speak to you.</li>
          <li>She spoke with the general for an hour. </li>
          <li>I talked with her about it</li>
        </ul>
        <p>When we refer to languages, we use speak:</p>
        <ul className="page-examples">
          <li>I don't speak Swahili, but I want to learn.</li>
          <li>How many languages does Ahmad speak?</li>
        </ul>

        <p className={styles.grammar_explanation_paragraph}>
          Some phrasal verbs require either talk and speak. Talk and speak in
          these contexts are not interchangeable.
        </p>
        <ul className="page-examples">
          <li>
            His students talk back to him, because he accepts it. (talk back
            means to be disrespectful)
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
          <li>He gave a great talk about diet.</li>
        </ul>

        <Quiz
          explanation={explanation}
          title="Take a Quiz!"
          questions={quiz}
          callback={handleRandomQuestions}
          shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
        ></Quiz>
      </div>
    </>
  );
}
