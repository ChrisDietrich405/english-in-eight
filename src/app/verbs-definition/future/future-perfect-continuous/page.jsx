import Quiz from "@/src/components/Quiz";

//DONE

export default function FuturePerfectContinuous() {
  return (
    <div>
      <div className={styles.page_title}>
        <h2>Future Perfect Continuous</h2>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future perfect continuous tense is a verb form used to talk about
        actions or events that will have been happening continuously until a
        specific point in the future.
      </p>

      <div className="table-container">
        {/* <table className="table-body">
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will have been swimming</td>
              <td>I will not have been swimming</td>
              <td>I won't have been swimming</td>
            </tr>
            <tr>
              <td>You will have been fighting</td>
              <td>You will not have been fighting</td>
              <td>You won't have been fighting</td>
            </tr>
            <tr>
              <td>She, he, it will have been working</td>
              <td>She, he, it will not have been working</td>
              <td>She, he, it won't have been working</td>
            </tr>
            <tr>
              <td>We have been talking</td>
              <td>We have not been talking</td>
              <td>We haven't been talking</td>
            </tr>
            <tr>
              <td>They have been dancing</td>
              <td>They have not been dancing</td>
              <td>They haven't been dancing</td>
            </tr>
          </tbody>
        </table> */}
      </div>

      <Quiz
        title="Quiz"
        questions={[
          {
            title:
              " By next month, she will ______________ in that city for five years.",
            possibleAnswers: [
              { title: "a. have lived" },
              { title: "b. have been living", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the time the project is completed, they will ___________ on it for six months.",
            possibleAnswers: [
              { title: "a. have worked" },
              { title: "b. have been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By this time next year, they will __________________ around the world for six months.",
            possibleAnswers: [
              { title: "a. have been traveling", correctAnswer: true },
              { title: "b. have traveled" },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the party's start, we will ___________ the decorations for two days.",
            possibleAnswers: [
              { title: "a. have worked on" },
              { title: "b. have been working on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the time you get here, I will ____________ for you at the airport for two hours..",
            possibleAnswers: [
              { title: "a. have been waiting", correctAnswer: true },
              { title: "b. have waited" },
            ],
            userAnswer: "",
          },

          {
            title:
              "By the end of the week, she will ______________ the piano for five years.",
            possibleAnswers: [
              { title: "a. have practiced" },
              { title: "b. have been practicing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the concert date, the band will ____________ the new songs for weeks.",
            possibleAnswers: [
              { title: "a. have rehearsed" },
              { title: "b. have been rehearsing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the wedding day, they will have been planning it for a whole year.",
            possibleAnswers: [
              { title: "a. have been planning", correctAnswer: true },
              { title: "b. have planned" },
            ],
            userAnswer: "",
          },
          {
            title:
              "By the deadline, he will _______________ on the report for three days straight..",
            possibleAnswers: [
              { title: "a. have been working", correctAnswer: true },
              { title: "b. have worked" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
