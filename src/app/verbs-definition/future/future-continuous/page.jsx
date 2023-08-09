import Quiz from "@/src/components/Quiz";

//Done

export default function FutureContinuous() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Future Continuous</h2>
      </div>
      <p className={styles.grammar_explanation_paragraph}>
        The future continuous refers to an ongoing action in the future.
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
              <td>I will be swimming</td>
              <td>I will not be swimming</td>
              <td>I won't be swimming</td>
            </tr>
            <tr>
              <td>You will be fighting</td>
              <td>You will not be fighting</td>
              <td>You won't be fighting</td>
            </tr>
            <tr>
              <td>She, he, it will be working</td>
              <td>She, he, it will not be working</td>
              <td>She, he, it won't be working</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>

      <div className="page-body">
        <p>Examples</p>
        <ul className="page-examples">
          <li>By Christmas I will be skating like a pro.</li>
          <li>
            It's very exciting! This time next Monday you will be working at
            your new job.
          </li>
          <li>This time next week she will be relaxing at the beach.</li>
        </ul>
      </div>
      <div className="page-body"></div>

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "In an hour she _______________ (clean) the bathrooms.",
            possibleAnswers: [
              { title: "a. will be cleaning", correctAnswer: true },
              { title: "b. will be clean" },
            ],
            userAnswer: "",
          },
          {
            title: "Next month they _______________ (complain) about this.",
            possibleAnswers: [
              { title: "a. will be complain" },
              { title: "b. will be complaining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "Unfortunately, sea levels will ____________ (rise) in the next 30 years.",
            possibleAnswers: [
              { title: "a. will still be rise" },
              { title: "b. will still be rising", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (see) Marcus at the conference next week.",
            possibleAnswers: [
              { title: "a. will be see" },
              { title: "b. will be seeing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "When he's in Morocco he _____________ with friends.",
            possibleAnswers: [
              { title: "a. will be stay" },
              { title: "b. will be staying", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Miguel _____________ (compete) in a marathon next month.",
            possibleAnswers: [
              { title: "a. will be competing", correctAnswer: true },
              { title: "b. will be compete" },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________  with Nia this evening so I can talk to her.",
            possibleAnswers: [
              { title: "a. will be eat" },
              { title: "b. will be eating", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Demarcus _______________ (run) in the race.",
            possibleAnswers: [
              { title: "a. will also be running", correctAnswer: true },
              { title: "b. will also be run" },
            ],
            userAnswer: "",
          },
          {
            title: "He _____________ (sleep) when you telephone him.",
            possibleAnswers: [
              { title: "a. will be sleep" },
              { title: "b. will be sleeping", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I _____________ (play) hockey in the afternoon tomorrow.",
            possibleAnswers: [
              { title: "a. will be play" },
              { title: "b. will be playing", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
