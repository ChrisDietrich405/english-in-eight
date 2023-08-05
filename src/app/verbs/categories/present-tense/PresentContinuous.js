import { useState, useEffect } from "react";
import Quiz from "../../../components/Quiz";
import "../../../styles/components/tables.scss";
import axios from "axios";

//DONE

export default function PresentContinuous() {
  const [verbs, setVerbs] = useState([]);

  const handleGetVerbs = async () => {
    const response = await axios.get(
      "http://localhost:5000/present-progressive"
    );
    console.log(response.data.message);
    setVerbs(response.data.message);
  };

  useEffect(() => {
    async function fetchData() {
      await handleGetVerbs();
    }
    fetchData();
  }, []);

  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h2>Present Continuous</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          The present progressive tense is a verb form used to describe an
          ongoing action or event that is happening at the current moment. It is
          formed by using the auxiliary verb "to be" in the present tense,
          followed by the main verb with "-ing" added to the end. For example,
          in the sentence "She is reading a book," the present progressive tense
          is "is reading," indicating that the action of reading is happening
          right now.
        </p>
        <div className="table-container">
          <table className="table-body">
            <thead>
              <tr>
                <th>Positive</th>
                <th>Positive Short Form</th>
                <th>Negative</th>
                <th>Negative Short Form</th>
              </tr>
            </thead>
            <tbody>
              {verbs.map((verb) => {
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
        </div>
        {/* <div className="table-container">
          <table className="table-body">
            <tr>
              <th>Negative</th>
              <th>Negative Short Form</th>
            </tr>
            <tr>
              <td>I am not swimming</td>
              <td>I'm not swimming</td>
            </tr>
            <tr>
              <td>You are not working</td>
              <td>You're not working</td>
            </tr>
            <tr>
              <td>She, he's it's fighting</td>
              <td>She's he's it's not fighting</td>
            </tr>
            <tr>
              <td>We are talking</td>
              <td>We're talking</td>
            </tr>
            <tr>
              <td>They are dancing</td>
              <td>They're dancing</td>
            </tr>
          </table>
        </div> */}
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
