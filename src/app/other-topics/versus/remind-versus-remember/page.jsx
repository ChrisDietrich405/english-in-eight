//DONE

import Quiz from "@/src/components/Quiz";

import styles from "../../../styles/content-page.module.css";

export default function RememberVersusRemind() {
  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h1>Remind versus Remember</h1>
      </div>

      <h3>Remind</h3>
      <p>
        If a person reminds you of someone, they have you think of that person
        or they resemble that person. If a thing reminds you of something, they
        have you think of that thing or they resemble that thing:
      </p>
      <ul className="page-examples">
        <li>
          My boss reminds me of my father. They have the same way of telling
          jokes.
        </li>
        <li>
          That song always reminds me of when I fell in love with a Nigerian
          girl.
        </li>
      </ul>
      <p>
        If we remind someone to do something or about something, we help them
        remember it or help them not to forget it:
      </p>

      <ul className="page-examples">
        <li>
          Remind me to take out the trash tonight. If you don't I’ll probably
          forget.
        </li>
        <li>
          She’s probably forgotten she was supposed to be at the meeting.
          Someone should text her.
        </li>
      </ul>
      <h3>Remember</h3>
      <p>
        The term "remember" refers to the mental process of recalling or
        retaining information, experiences, or events from the past. It involves
        the ability to retrieve things that have been previously learned,
        encountered, or perceived.
      </p>
      <ul className="page-examples">
        <li>I’ll always remember my trip to Jamaica.</li>
        <li>Suddenly I remembered I needed to pay that bill.</li>
      </ul>

      <p>
        Remember + the -ing form of a verb describes having a memory of
        something that happened in the past or of something we experienced
      </p>
      <ul className="page-examples">
        <li>They said they didn't remember going to the parking lot.</li>
        <li>I remember talking to him. I think it was Friday.</li>
      </ul>
      <p>
        Remember + infinitive describes a command. It tells someone not to
        forget something:
      </p>
      <ul className="page-examples">
        <li>
          Remember to go to bed very early tonight. Tomorrow is going to be a
          long day.
        </li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "I don't ______________ where I left my hat.",
            possibleAnswersAndExplanation: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "She can't ___________________ anything about her childhood.",
            possibleAnswersAndExplanation: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "She had to ______________________ him that they had agreed on the child custody. He acted like he had forgotten.",
            possibleAnswersAndExplanation: [
              { title: "remember" },
              { title: "remind", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Please ____________________ not to smoke near the church.",
            possibleAnswersAndExplanation: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My new boss ____________________ me of my best friend's sister.",
            possibleAnswersAndExplanation: [
              { title: "reminds", correctAnswer: true },
              { title: "remembers" },
            ],
            userAnswer: "",
          },
          {
            title:
              " ____________________ to turn off the computer when you leave the office.",
            possibleAnswersAndExplanation: [
              { title: "Remember", correctAnswer: true },
              { title: "Remind" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I've read that post but I don't __________________ who wrote it.",
            possibleAnswersAndExplanation: [
              { title: "remember", correctAnswer: true },
              { title: "remind" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Did you  ____________________ Malcolm to bring his umbrella?",
            possibleAnswersAndExplanation: [
              { title: "remind", correctAnswer: true },
              { title: "remember" },
            ],
            userAnswer: "",
          },
          {
            title:
              "That dress _______________ me of my cousin. She wore the same kind.",
            possibleAnswersAndExplanation: [
              { title: "reminds", correctAnswer: true },
              { title: "remembers" },
            ],
            userAnswer: "",
          },
          {
            title: "_______________ me to buy some trash bags.",
            possibleAnswersAndExplanation: [
              { title: "Remind", correctAnswer: true },
              { title: "Remember" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
