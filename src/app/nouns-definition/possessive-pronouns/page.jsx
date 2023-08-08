import Quiz from "@/src/components/Quiz";

//DONE

export default function PossessivePronouns() {
  return (
    <>
      <div className="page-title">
        <h2>Possessive Pronouns</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          Possessive pronouns are pronouns that are used to indicate ownership
          (possession) and replace a noun. The English possessive pronouns are
          mine, ours, yours, his, hers, theirs,
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            I have a house - It's <b>mine.</b>
          </li>
          <li>
            You have a boat - That boat is <b>yours.</b>
          </li>
          <li>
            He has a car - It is <b>his.</b>
          </li>
          <li>
            She has a tattoo - It is <b>hers.</b>
          </li>
          <li>
            We have an apartment - It is <b>ours.</b>
          </li>
          <li>
            They have a son - He is <b>theirs.</b>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          //because we are in react we need to start the array with a curly bracket (because it's inside of a component)

          {
            title:
              " My headset needs to be fixed, but (you) _____________ is working.",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My computer is a Lenovo, but (he) _______________ is a PC.",
            possibleAnswers: [
              { title: " his", correctAnswer: true },
              { title: " he" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Nisha has already eaten her dinner , but I'm saving (I) _____________  until later.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title:
              "We gave them our number, and they gave us (they) __________________.",
            possibleAnswers: [
              { title: " theirs" },
              { title: " they", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "My motorcycle is new, but (he)  __________ is old.",
            possibleAnswers: [
              { title: " he" },
              { title: " his", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She can't have any cake! It's all (I)______________ !",
            possibleAnswers: [
              { title: " my" },
              { title: " mine", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My pen is broken. Can I use (you) ____________ ?",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "That money is (I) ____________.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title: "The desk is (we) ______________.",
            possibleAnswers: [
              { title: " ours", correctAnswer: true },
              { title: " we" },
            ],
            userAnswer: "",
          },
          {
            title: "The dress is (she)_____________. ",
            possibleAnswers: [
              { title: " hers", correctAnswer: true },
              { title: " she" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
