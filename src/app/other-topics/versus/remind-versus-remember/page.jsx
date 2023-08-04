//DONE

import Quiz from "@/src/components/Quiz";

export default function RememberVersusRemind() {
  //whatever
  return (
    <div className="page-body">
      <div className="page-title">
        <h2>Remind versus Remember</h2>
      </div>

      <h3>Remind</h3>
      <p>
        To remind means to cause someone to remember something or to bring a
        memory or a specific piece of information back to their attention. It
        involves prompting or recalling an event, task, or piece of knowledge
        that has previously been discussed or encountered.
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
        If we remind another person about something or to do something, we help
        them remember it or help them not to forget it:
      </p>
      <ul className="page-examples">
        <li>Remind me to take out the trash tonight. If you don't I’ll probably forget.</li>
        <li>
          She’s probably forgotten she was supposed to be at the meeting. Someone should text her.
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
        <li>I’ll always my trip to Jamaica.</li>
        <li>Suddenly I remembered I needed to pay that bill.</li>
      </ul>
     
      <p>
        Remember + the -ing form of a verb describes having a memory of something that happened in the past or of something we experienced 
      </p>
      <ul className="page-examples">
        <li>They said they didn't remember going to the parking lot.</li>
        <li>
          I remember talking to him. I think it was Friday.
        </li>
      </ul>
      <p>Remember + infinitive describes a command, telling someone not to forget something</p>
      <ul className="page-examples">
        <li>
          Remember to go to bed very early tonight. Tomorrow is going to be a long day. 
        </li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "I don't ______________ where I left my hat.",
            possibleAnswers: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "She can't ___________________ anything about her childhood.",
            possibleAnswers: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "She had to ______________________ him that they had agreed on the child custody. He acted like he had forgotten",
            possibleAnswers: [
              { title: "remember" },
              { title: "remind", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Please ____________________ not to smoke near the church.",
            possibleAnswers: [
              { title: "remind" },
              { title: "remember", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My new boss ____________________ me of my best friend's sister.",
            possibleAnswers: [
              { title: "reminds", correctAnswer: true },
              { title: "remembers" },
            ],
            userAnswer: "",
          },
          {
            title:
              " ____________________ to turn off the computer when you leave the office.",
            possibleAnswers: [
              { title: "Remember" },
              { title: "Remind", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I've read that post but I don't __________________ the who wrote it.",
            possibleAnswers: [
              { title: "remember", correctAnswer: true },
              { title: "remind" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Did you  ____________________ Malcolm to bring his umbrella?",
            possibleAnswers: [
              { title: "remind", correctAnswer: true },
              { title: "remember" },
            ],
            userAnswer: "",
          },
          {
            title:
              "That dress _______________ me of my cousin. She wore the same kind.",
            possibleAnswers: [
              { title: "reminds", correctAnswer: true },
              { title: "remembers" },
            ],
            userAnswer: "",
          },
          {
            title:
              "_______________ me to buy some trash bags.",
            possibleAnswers: [
              { title: "remind", correctAnswer: true },
              { title: "remember" },
            ],
            userAnswer: "",
          },
         
        ]}
      ></Quiz>
    </div>
  );
}
