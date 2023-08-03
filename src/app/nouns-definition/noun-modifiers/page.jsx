import Quiz from "../../../components/Quiz";

//Done

export default function NounModifiers() {
  return (
    <>
      <div className="page-title">
        <h2>Noun Modifiers</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          We sometimes have two nouns together to demonstrate that one thing is
          a part of something else. In the following examples, the first noun is
          called a noun modifier.
        </p>

        <ul className="page-examples">
          <li>
            <b>Baltimore</b> residents
          </li>
          <li>
            The <b>dog</b> bowl
          </li>
          <li>
            The <b>chair</b> leg
          </li>
          <li>
            My <b>gold</b> watch
          </li>
          <li>
            The <b>shopping</b> list
          </li>
        </ul>
        <p></p>
        <p>
          <b>Pay attention!</b>
        </p>
        <p>
          We don’t use a possessive form for these things. We do NOT talk about:
        </p>

        <p>Noun modifiers can be used to show what something is made of:</p>
        <ul className="page-examples">
          <li>a metal chair</li>
          <li>a gold watch</li>
          <li>a wood table</li>
        </ul>

        <p>Noun modifiers can be used for values or measurements:</p>
        <ul className="page-examples">
          <li>an hour drive</li>
          <li>a thousand mile trip</li>
          <li>a twenty pound bag</li>
        </ul>
        <p>Noun modifiers also can be used with nouns ending in ing:</p>
        <ul className="page-examples">
          <li>a time machine</li>
          <li>a waiting list</li>
          <li>a guitar lesson</li>
        </ul>
        <p>Noun modifiers can be used with nouns ending in –er:</p>
        <ul className="page-examples">
          <li>a dress maker</li>
          <li>a club manager</li>
          <li>a factory worker</li>
        </ul>
      </div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "It's a door made of metal. It's a _____________.",
            possibleAnswers: [
              { title: "door's metal" },
              { title: "metal door", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "It's a cloth that you put on a table. It's a _____________.",
            possibleAnswers: [
              { title: "table cloth", correctAnswer: true },
              { title: "cloth table" },
            ],
            userAnswer: "",
          },
          {
            title: "It's a bat used for baseballs. It's a _____________.",
            possibleAnswers: [
              { title: "batball" },
              { title: "baseball bat", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It's a key for my house. It's a _____________.",
            possibleAnswers: [
              { title: "key car" },
              { title: "car key", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We need a house for a dog. We need a ______________.",
            possibleAnswers: [
              { title: "housedog" },
              { title: "doghouse", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They have a house in the trees. They have a ______________.",
            possibleAnswers: [
              { title: "tree house", correctAnswer: true },
              { title: "house tree" },
            ],
            userAnswer: "",
          },
          {
            title: "We bought a bone for our dog. We gave her a _____________.",
            possibleAnswers: [
              { title: "bone dog" },
              { title: "dog bone", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Meet me where there is a station for a train. It's a ________________",
            possibleAnswers: [
              { title: "train station", correctAnswer: true },
              { title: "station train" },
            ],
            userAnswer: "",
          },
          {
            title: "This is a ladder with steps.   It’s a ___________.",
            possibleAnswers: [
              { title: "step ladder", correctAnswer: true },
              { title: "ladder step" },
            ],
            userAnswer: "",
          },
          {
            title: "I paid for lessons for swimming. They are _____________.",
            possibleAnswers: [
              { title: "swimming lessons", correctAnswer: true },
              { title: "swimmings lesson" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
