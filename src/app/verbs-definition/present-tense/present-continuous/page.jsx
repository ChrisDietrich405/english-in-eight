import Quiz from "@/src/components/Quiz";
import styles from "../../../styles/content-page.module.css";

const baseUrl = "http://localhost:3000"; // Replace with your actual base URL
const endpoint = "/api/present-progressive"; // Replace with the correct endpoint

const fullUrl = baseUrl + endpoint;

const getVerbs = async () => {
  const response = await fetch(fullUrl);
  const results = await response.json();
  return results;
};

//DONE

export default async function PresentContinuous() {
  const data = await getVerbs();

  return (
    <div className="page-body">
      <div className={styles.page_title}>
        <h1>Present Continuous</h1>
      </div>
      <div className="page-body">
        <p className={styles.grammar_explanation_paragraph}>
          The present progressive or present continuous tense is a verb form
          used to describe an ongoing action, event that is happening at the
          current moment or even a future event. It is formed by using the
          auxiliary verb "to be" in the present tense, followed by the main verb
          with "-ing" added to the end.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive Short Form</th>
              <th>Negative</th>
              <th>Negative Short Form</th>
            </tr>
          </thead>
          <tbody>
            {data.map((verb) => {
              return (
                <tr>
                  <td>{verb.positive}</td>
                  <td>{verb.positiveShortForm}</td>
                  <td>{verb.negative}</td>
                  <td>{verb.negativeShortForm}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h4>Actions currently happening</h4>
        <ul className="page-examples">
          <li>He is working at the bar now.</li>
          <li>We are having some problems with the software. Call me later.</li>
          <li>She is eating lunch so she can't talk now</li>
        </ul>
        <h4>Future actions</h4>
        <ul className="page-examples">
          <li>I'm having dinner with my son this afternoon</li>
          <li>You're coming to the party tonight right?</li>
          <li>They are flying to Kenya this weekend</li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz"
        questions={[
          {
            title: "You ___________ (play) tennis tonight right?",
            possibleAnswers: [
              { title: "a. are not playing", correctAnswer: true },
              { title: "b. am not playing" },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________ (study) now. Please call me later",
            possibleAnswers: [
              { title: "a. am study" },
              { title: "b. am studying", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She ___________ (sleep).",
            possibleAnswers: [
              { title: "a. isn't sleeping", correctAnswer: true },
              { title: "b. am not sleeping" },
            ],
            userAnswer: "",
          },

          {
            title: "We ___________ (watch) the game.",
            possibleAnswers: [
              { title: "a. are watch" },
              { title: "b. are watching", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He ____________ (work) in Baltimore.",
            possibleAnswers: [
              { title: "a. are not working", correctAnswer: true },
              { title: "b. is not working" },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (wait) for the taxi.",
            possibleAnswers: [
              { title: "a. is waiting", correctAnswer: true },
              { title: "b. are waiting" },
            ],
            userAnswer: "",
          },
          {
            title: "They __________ (fight).",
            possibleAnswers: [
              { title: "a. are fighting", correctAnswer: true },
              { title: "b. is fighting" },
            ],
            userAnswer: "",
          },
          {
            title: "We _______________ (go) to the mall tonight.",
            possibleAnswers: [
              { title: "a. are not going", correctAnswer: true },
              { title: "b. are not go" },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (read) The Shining.",
            possibleAnswers: [
              { title: "a. are read" },
              { title: "b. are reading", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She _________ (eat) a Kit Kat bar.",
            possibleAnswers: [
              { title: "a. am eating" },
              { title: "b. is eating", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
