import Quiz from "@/src/components/Quiz";

//DONE

export default function FutureSimple() {
  return (
    <main>
      <div className="page-title">
        <h2>Future Simple</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        {" "}
        The simple future is a verb tense that's used to talk about things that
        haven't happened yet. For example, next year she <b>will change</b>{" "}
        careers. The simple future is used to talk about an action or condition
        that will begin and end in the future. There are two ways to express the
        future. You can use <b>will</b> or <b>going to</b> depending on the
        situation.
      </p>

      <div className="table-container">
        <table className="table-body">
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will walk</td>
              <td>I will not walk</td>
              <td>I won't walk</td>
            </tr>
            <tr>
              <td>You will kiss</td>
              <td>You will not kiss</td>
              <td>You won't kiss</td>
            </tr>
            <tr>
              <td>She, he, it will work</td>
              <td>She, he, it will not work</td>
              <td>She, he, it won't work</td>
            </tr>
            <tr>
              <td>We will talk</td>
              <td>We will not talk</td>
              <td>We won't talk</td>
            </tr>
            <tr>
              <td>They will greet</td>
              <td>They will not greet</td>
              <td>They won't greet</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="page-body">
        <p>The second way to express the simple future</p>
        <div className="table-container">
          <table className="table-body">
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I am going to walk</td>
              <td>I'm going to walk</td>
              <td>I'm not going to walk</td>
            </tr>
            <tr>
              <td>You are going to kiss</td>
              <td>You're going to kiss</td>
              <td>You're not going to kiss</td>
            </tr>
            <tr>
              <td>She, he, it is going to work</td>
              <td>She, he, it's going to work</td>
              <td>She, he, it's not going to work</td>
            </tr>
            <tr>
              <td>We are going to talk</td>
              <td>We're going to talk</td>
              <td>We're not going to talk</td>
            </tr>
            <tr>
              <td>They are going to greet</td>
              <td>They're going to greet</td>
              <td>They're not going to greet</td>
            </tr>
          </table>
        </div>

        <p>
          {" "}
          We use <b>going</b> to for prior plans and in situations where
          something is probably going to happen.
        </p>
        <ul className="page-examples">
          <li>We're going to go to the movies this weekend. (previous plan)</li>
          <li>
            Our team is leading 65-23. They are going to win. (likely to happen)
          </li>
        </ul>
        <p>
          {" "}
          We use <b>will</b> with offers, refusals, promises,.
        </p>
        <ul className="page-examples">
          <li>She won't listen to me. (refusal)</li>
          <li>You look tired. I will help you with your homework. (offer)</li>
          <li>I love you very much. I will never leave you. (promise)</li>
        </ul>
      </div>

      <Quiz
        title="Quiz"
        questions={[
          {
            title:
              "It's Nia's birthday next week, so we _____________ buy her a microwave.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Could you lend me $40? I promise  _______________ pay you back Thursday.",
            possibleAnswers: [
              { title: "a. am going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "Look! The coach __________________! Run or we'll miss her.",
            possibleAnswers: [
              { title: "a. are going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ get a new computer.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title: "Antonio's sister ____________________ have a baby.",
            possibleAnswers: [
              { title: "a. is going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I don't have anything to wear. That's ok. I _______ give you one of my dresses.",
            possibleAnswers: [
              { title: "a. will", correctAnswer: true },
              { title: "b. am going to" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Just a moment. I __________________ help you bring in the groceries.",
            possibleAnswers: [
              { title: "a. am going to" },
              { title: "b. will", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ____________________ take a trip to Accra in June.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Look at those gray clouds over there! It _________________  rain soon. ",
            possibleAnswers: [
              { title: "a. is going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
          {
            title:
              "They ______________ have the meeting outside tomorrow. It's all planned, so I hope it won't rain.",
            possibleAnswers: [
              { title: "a. are going to", correctAnswer: true },
              { title: "b. will" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </main>
  );
}
