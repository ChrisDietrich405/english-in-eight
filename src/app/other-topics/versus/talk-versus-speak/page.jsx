"use client";
import { useState } from "react";
import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function SpeakVersusTalk() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      id: 1,
      title: "It was a fascinating __________.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is a noun here.",
    },
    {
      id: 2,
      title: "We tried to  ___________ it out, but after we fought more.",
      possibleAnswersAndExplanation: [
        { title: "spoke" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Talk is used in the phrasal verb talk it out meaning to resolve a problem by talking about it.",
    },
    {
      id: 3,
      title: "Well Bia, I’ll  ___________ to you tomorrow.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
    },
    {
      id: 4,
      title: "It's only __________. They'll never fire us.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is a noun here.",
    },
    {
      id: 5,
      title: "________ up! Nobody can hear you.",
      possibleAnswersAndExplanation: [
        { title: "Speak", correctAnswer: true },
        { title: "Talk" },
      ],
      userAnswer: "",
      explanation:
        "Speak is used in the phrasal verb speak up meaning to speak louder.",
    },
    {
      title: "They only ever  ________ about basketball.",
      possibleAnswersAndExplanation: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
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
          id: 1,
          title:
            "At the conference, Dr. McGregor will ________ about the nutrition.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
          explanation: "Speak is used in more formal situations.",
        },

        {
          id: 2,
          title:
            "I hope we can ________ things out and find a solution to this problem.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
          explanation:
            "Talk is used in the phrasal verb talk it out meaning to resolve a problem by talking about it.",
        },
        {
          id: 3,
          title:
            "The teacher asked the students to ________ up so everyone could hear their presentations.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
          explanation:
            "Speak is used in the phrasal verb speak up meaning to speak louder.",
        },

        {
          id: 3,
          title:
            "During the meeting, they decided to ________  about the upcoming project in detail.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
          explanation: "Talk is used in more conversational situations.",
        },
        {
          id: 4,
          title:
            "My 6 year old son constantly _______ back to me and I don't know what to do.",
          possibleAnswersAndExplanation: [
            { title: "talks", correctAnswer: true },
            { title: "speaks" },
          ],
          userAnswer: "",
          explanation:
            "Talk is used in the phrasal verb talk back meaning to be disrespectful.",
        },
        {
          id: 5,
          title:
            "After a long day at work, she likes to ________ with her best friend on the phone.",
          possibleAnswersAndExplanation: [
            { title: "speak" },
            { title: "talk", correctAnswer: true },
          ],
          userAnswer: "",
          explanation: "Talk is used in more informal situations.",
        },
        {
          id: 6,
          title:
            "May I ________ to the manager about my concerns regarding the company policies?",
          possibleAnswersAndExplanation: [
            { title: "speak", correctAnswer: true },
            { title: "talk" },
          ],
          userAnswer: "",
          explanation: "Speak is used in more formal situations.",
        },
        {
          id: 7,
          title: "He ________ French, Spanish, German, and English fluently.",
          possibleAnswersAndExplanation: [
            { title: "speaks", correctAnswer: true },
            { title: "talks" },
          ],
          userAnswer: "",
          explanation: "Speak is used with languages.",
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
        <p>
          We normally use <b>to</b> after talk and speak. We can also use{" "}
          <b>with</b>:
        </p>
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
          // explanation={explanation}
          title="Take a Quiz!"
          questions={quiz}
          callback={handleRandomQuestions}
          shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
        ></Quiz>
      </div>
    </>
  );
}
