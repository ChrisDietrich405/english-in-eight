import { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../../../components/Quiz";

//DONE

export default function PresentPerfect() {
  const [verbs, setVerbs] = useState([]);

  // const handleGetVerbs = async () => {
  //   const response = await axios.get("http://localhost:5000/present-perfect");
  //   console.log(response.data);
  //   setVerbs(response.data);
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     await handleGetVerbs();
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className={styles.page_body}>
      <div className={styles.page_title}>
        <h2>Present Perfect </h2>
      </div>
      <div>
        <p className={styles.grammar_explanation_paragraph}>
          The present perfect is used to connect the past with the present. It
          is often used to talk about actions or experiences that started in the
          past but have a connection to the current moment.
        </p>
      </div>
      <div className="table-container">
        {/* <table className="table-body">
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
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
        </table> */}
      </div>
      <h4>Actions began in the past and continuing into the present</h4>
      <ul className="page-examples">
        <li>He has worked as a bartender for five years.</li>
        <li>We have had the same house for thirty years.</li>
        <li>They haven't worked here for years.</li>
      </ul>
      <h4>
        When the exact time of the action is unknown or isn't important,
        including actions which are finished (not continuing into the present)
      </h4>
      <ul className="page-examples">
        <li>Have you seen 'Black Panther'?</li>
        <li>Someone has stolen my phone!</li>
        <li>I have been to Acra.</li>
      </ul>
      <h4>When the time period mentioned hasn't ended</h4>
      <ul className="page-examples">
        <li>It has snowed a lot this winter.</li>
        <li>I have worked very hard tody.</li>
        <li>They haven't seen him today.</li>
      </ul>
      <h4>Actions completed in the very recent past (+just)</h4>
      <ul className="page-examples">
        <li>Has she just finished the project?</li>
        <li>I have just woken up.</li>
        <li>Has she just left?</li>
        <li>They have just seen him.</li>
      </ul>
      <h4>
        Actions repeated in an unspecified period between the past and now
      </h4>
      <ul className="page-examples">
        <li>He has gone to visit them frequently.</li>
        <li>It has thundered several times already.</li>
        <li>We have complained about that restaurant many times.</li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "She ___________ (eat) tofu.",
            possibleAnswers: [
              { title: "a. has eaten", correctAnswer: true },
              { title: "b. have eaten" },
            ],
            userAnswer: "",
          },
          {
            title: "They ______________ (miss) their flight.",
            possibleAnswers: [
              { title: "a. have missed", correctAnswer: true },
              { title: "b. has drunk" },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (go) to Tanzania.",
            possibleAnswers: [
              { title: "a. have gone" },
              { title: "b. has gone", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ___________ (read) that magazine.",
            possibleAnswers: [
              { title: "a. has read" },
              { title: "b. have read", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ____________ (live) here for thirteen years.",
            possibleAnswers: [
              { title: "a. has lived", correctAnswer: true },
              { title: "b. have lived" },
            ],
            userAnswer: "",
          },
          {
            title: "You ______________ Marcus for five years.",
            possibleAnswers: [
              { title: "a. have known", correctAnswer: true },
              { title: "b. has known" },
            ],
            userAnswer: "",
          },
          {
            title: "We ______________ (be) here for three weeks.",
            possibleAnswers: [
              { title: "a. have been", correctAnswer: true },
              { title: "b. has been" },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________ (study) Arabic.",
            possibleAnswers: [
              { title: "a. has studied" },
              { title: "b. have studied", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (lose) my phone.",
            possibleAnswers: [
              { title: "a. have lost", correctAnswer: true },
              { title: "b. has lost" },
            ],
            userAnswer: "",
          },
          {
            title: "He ______________ (drink) too much soda.",
            possibleAnswers: [
              { title: "a. have drunk" },
              { title: "b. has drunk", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
