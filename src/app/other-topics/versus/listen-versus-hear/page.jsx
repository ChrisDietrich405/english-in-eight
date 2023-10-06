import QuizForm from "@/src/components/QuizForm";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Listen versus Hear | English in Eight Minutes",
  description:
    "Learn about the differences between 'listen' and 'hear' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
  keywords:
    "English, Listen versus Hear, English grammar, Vocabulary, English in Eight Minutes",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Listen versus Hear | English in Eight Minutes",
    description:
      "Learn about the differences between 'listen' and 'hear' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
    images: [
      {
        url: "images/logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "images/logo.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

export default function ListenVersusHear() {
  const questionsArray = [
    {
      id: 1,
      title: "I can ________ the baby crying.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 2,
      title: "Hey! _____ It's that spooky sound again.",
      possibleAnswers: [
        { title: "a. Listen", correctAnswer: true },
        { title: "b. Hear" },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 3,
      title: "I can't _____ you. My dad's vacuuming.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 4,
      title: "We _____ the car crash and ran outside to help.",
      possibleAnswers: [
        { title: "a. listened to" },
        { title: "b. heard", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 5,
      title: "Be quiet, please. I'm _____ the news.",
      possibleAnswers: [
        { title: "a. hearing" },
        { title: "b. listening to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 6,
      title: "Hey Malcolm! Can you _________ that sound?",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },

    {
      id: 7,
      title: "I called out to grandma but she couldn't _____ me.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 8,
      title: "Are you allowed to _____ music at work?",
      possibleAnswers: [
        { title: "a. listen to", correctAnswer: true },
        { title: "b. hear" },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 9,
      title: "I haven't seen any lightning but I just _____ some thunder.",
      possibleAnswers: [
        { title: "a. heard", correctAnswer: true },
        { title: "b. listened to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 10,
      title: "Do you like to __________ Bacchata?",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 11,
      title: "I always ________ the birds singing in the morning.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 12,
      title: "She couldn't _____ the teacher because of the noisy classroom.",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 13,
      title: "I can _____ the ocean waves from my bedroom window.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 14,
      title: "Please, _____ to what I'm saying carefully.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 15,
      title:
        "They were so engrossed in their conversation that they didn't even _____ the thunderstorm outside.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 16,
      title: "Can you _____ the difference between those two sounds?",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 17,
      title: "I always _____ music while I work.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 18,
      title: "I _____ a strange noise coming from the basement last night.",
      possibleAnswers: [
        { title: "a. heard", correctAnswer: true },
        { title: "b. listened to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 19,
      title: "My mom loves to _____ classical music in the evening.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 20,
      title: "Could you please _____ what the teacher just said?",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
  ];

  return (
    <>
      <div className={styles.page_body}>
        <div className={styles.page_title}>
          <h1>Listen versus Hear</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          <b>Hear</b> is the act of naturally perceiving sounds with your ears,
          while <b>listen</b> involves actively paying attention and processing
          the sounds or words you hear. Listening goes beyond only hearing; it
          involves an active engagement.
        </p>

        <p>
          <b>Listen</b> is something you focus on doing:
        </p>
        <ul className="page-examples">
          <li>
            I listened very carefully to what she said and wrote it all down.
          </li>
          <li>Do you listen to music in bed?</li>
        </ul>

        <p className={styles.grammar_explanation_paragraph}>
          We <b>always</b> use <b>to</b> after listen before an object:{" "}
        </p>
        <ul>
          <li>
            Every morning I <b> listen to</b> my Mozart CD while I’m having
            breakfast. It prepares me mentally for the day
          </li>
        </ul>

        <p>
          <b>Hear</b> is something you don't focus on doing:
        </p>
        <ul className="page-examples">
          <li> Suddenly I heard a noise. Someone was in the garden.</li>
          <li>Did you hear the thunder last night?</li>
          <li>The connection is very bad. I can’t hear you.</li>
        </ul>
        <h4 style={{ fontWeight: "bold" }}>
          This lesson is not easy, so don't worry if you make a lot of mistakes
          with the quiz. Remember practice makes perfect. Do the quiz as many
          time as you need.{" "}
        </h4>
      </div>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ohaD-sDeLmE?si=DbBn1E7HRvVDmZfZ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
