import Quiz from "../../../components/Quiz";

//DONE

export default function PossessiveAdjectives() {
  return (
    <div className={styles.page_body}>
      <div className="possessive-adjectives">
        <div className={styles.page_title}>
          <h2>Possessive Adjectives</h2>
        </div>
        <div className={styles.page_body}>
          <p className="grammar-explanation-paragraph">
            Possessive adjectives are words used to show ownership or
            possession. They are placed before a noun to indicate that the noun
            belongs to someone or something. Examples of possessive adjectives
            include "my," "your," "his," "her," "its," "our," and "their."
          </p>
        </div>

        <ul className="page-examples">
          <li>
            I have a car. This is <b>my</b> car.
          </li>
          <li>
            You have a dog. That is <b>your</b>dog
          </li>
          <li>
            He has a car. It is <b>his</b> car
          </li>
          <li>
            She has a laptop. It is <b>her</b>laptop.
          </li>
          <li>
            The car has new tires. <b>Its</b> tires are new.
          </li>
          <li>
            We have a motorcycle. It is <b>our</b> motorcycle.
          </li>
          <li>
            They have a boat. That is <b>their</b> boat.
          </li>
        </ul>
      </div>

      <p>
        Replace the personal pronouns with the correct possessive adjective:
      </p>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "Bia loves (she) _____________ clothes!",
            possibleAnswers: [
              { title: "her", correctAnswer: true },
              { title: "their" },
            ],
            userAnswer: "",
          },
          {
            title: "Where is (they) ________________  professor?",
            possibleAnswers: [
              { title: "my" },
              { title: "their", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He goes to school with (he) _____________ cousin.",
            possibleAnswers: [
              { title: "your" },
              { title: "his", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "(You) ______________ car is very old.",
            possibleAnswers: [
              { title: "Your", correctAnswer: true },
              { title: "My" },
            ],
            userAnswer: "",
          },
          {
            title: "(He)  ________________favorite hobby is running.",
            possibleAnswers: [
              { title: "Your" },
              { title: "His", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Where is (I) _______________ phone?",
            possibleAnswers: [
              { title: "my", correctAnswer: true },
              { title: "your" },
            ],
            userAnswer: "",
          },
          {
            title: "(I) _____________ husband is not feeling well.",
            possibleAnswers: [
              { title: "My", correctAnswer: true },
              { title: "Her" },
            ],
            userAnswer: "",
          },
          {
            title:
              "They want to go to Egypt. They want to see (it) ________________ tourist attractions.",
            possibleAnswers: [
              { title: "its", correctAnswer: true },
              { title: "their" },
            ],
            userAnswer: "",
          },
          {
            title: "(They) ________________ mother works in a restaurant.",
            possibleAnswers: [
              { title: "His" },
              { title: "Their", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "(He) _____________ name is Tyrese.",
            possibleAnswers: [
              { title: "Her" },
              { title: "His", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
