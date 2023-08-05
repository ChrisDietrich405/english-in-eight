import Quiz from "../../../components/Quiz";
//DONE))

export default function Collective() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Collective Nouns</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          Collective nouns are nouns which represent a group or collection of
          people or things. They include words such as <b>audience</b>,{" "}
          <b>family</b>, <b>government</b>, <b>group</b>, and <b>team</b>. Most
          collective nouns are treated as a singular entity, using the singular
          verb form.
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            The U.S.<b>government</b> is made up of 3 branches.
          </li>
          <li>
            This hockey <b>team includes</b> three players from Canada.
          </li>

          <li>
            Our <b>class takes</b> a field trip to the natural history museum
            every year.
          </li>
          <li>
            My <b>family</b> is important to me.
          </li>

          <li>
            The city <b>council</b> is rejecting the proposal.
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "The students __________ fighting in the cafeteria.",
            possibleAnswers: [
              { title: " are", correctAnswer: true },
              { title: " is" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The group __________ decided together to file the petition.",
            possibleAnswers: [
              { title: "has", correctAnswer: true },
              { title: "have" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The United States army _____________ a budget much larger than any other countries.",
            possibleAnswers: [
              { title: "have" },
              { title: "has", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My sisters ____________ to go to the beach this weekend.",
            possibleAnswers: [
              { title: "want", correctAnswer: true },
              { title: "wants" },
            ],
            userAnswer: "",
          },
          {
            title: "___________ the parents' committee made a decision.",
            possibleAnswers: [
              { title: "Has", correctAnswer: true },
              { title: "Have" },
            ],
            userAnswer: "",
          },
          {
            title: "___________ any of the soldiers hurt?",
            possibleAnswers: [
              { title: "Was" },
              { title: "Were", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "That team __________ every game.",
            possibleAnswers: [
              { title: "wins", correctAnswer: true },
              { title: "win" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
            possibleAnswers: [
              { title: "was" },
              { title: "were", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "The school choir ______________ won many competitions.",
            possibleAnswers: [
              { title: "have" },
              { title: "has", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "His family ______________ very big. He has 10 uncles and 11 aunts.",
            possibleAnswers: [
              { title: "are" },
              { title: "is", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
