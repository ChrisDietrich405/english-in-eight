"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Quiz from "@/src/components/Quiz";
//DONE
export default function PastSimple() {
  const [verbs, setVerbs] = useState([]);

  const fetchVerbs = async () => {
    const response = await axios.get("http://localhost:5000/simple-past");
    setVerbs(response.data);
  };

  useEffect(() => {
    fetchVerbs();
  }, []);

  return (
    <>
      <div className="page-title">
        <h2>Past Simple</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        {" "}
        The simple past, also known as the past simple, is a verb tense used to
        describe actions, events, or states that occurred and were completed in
        the past. It is one of the basic verb tenses in English and is generally
        used to express actions that happened at a specific time in the past, or
        to narrate a sequence of events in the past.
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
            {verbs.map((verb) => {
              return (
                <tr>
                  <td>{verb.positive}</td>
                  <td>{verb.negative}</td>
                  <td>{verb.negativeShortForm}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="page-body">
        <p>
          For irregular verbs, things are more challenging. For example the
          simple past tense of some irregular verbs look exactly like the root
          form:
        </p>
        <div className="table-container">
          <table className="table-body">
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I put</td>
              <td>I did not put</td>
              <td>I didn't put</td>
            </tr>
            <tr>
              <td>They hit</td>
              <td>They did not hit</td>
              <td>They didn't hit</td>
            </tr>
            <tr>
              <td>You set</td>
              <td>You did not set</td>
              <td>You didn't set</td>
            </tr>
            <tr>
              <td>She, he, it cost</td>
              <td>She, he, it did not cost</td>
              <td>She, he, it didn't cost</td>
            </tr>
            <tr>
              <td>We cut</td>
              <td>We did not cut</td>
              <td>We didn't cut</td>
            </tr>
          </table>
        </div>
        <p>
          {" "}
          For other irregular verbs, the simple past forms are much different
          than their infinitive forms:
        </p>
        <ul className="page-examples">
          <li>buy changes to bought</li>
          <li>eat changes to ate</li>
          <li>build changes to built</li>
          <li>see changes to saw</li>
          <li>go changes to went</li>
        </ul>
      </div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "I _____________ to the store.",
            possibleAnswers: [
              { title: "a. go" },
              { title: "b. went", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "They _____________ house very well.",
            possibleAnswers: [
              { title: "a. builded" },
              { title: "b. built", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I _________ to her.",
            possibleAnswers: [
              { title: "a. didn't talked" },
              { title: "b. didn't talk", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She ___________ that movie yesterday.",
            possibleAnswers: [
              { title: "a. saw", correctAnswer: true },
              { title: "b. sawed" },
            ],
            userAnswer: "",
          },
          {
            title: "He ____________ his hand with a knife .",
            possibleAnswers: [
              { title: "a. cuted" },
              { title: "b. cut", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We ________ too much this morning.",
            possibleAnswers: [
              { title: "a. ate", correctAnswer: true },
              { title: "b. eated" },
            ],
            userAnswer: "",
          },
          {
            title: "I _________ her on the cheek.",
            possibleAnswers: [
              { title: "a. kissed", correctAnswer: true },
              { title: "b. kiss" },
            ],
            userAnswer: "",
          },
          {
            title: "It ____________ a lot of money.",
            possibleAnswers: [
              { title: "a. costed" },
              { title: "b. cost", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ to the store.",
            possibleAnswers: [
              { title: "a. wented" },
              { title: "b. went", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "The car ___________ the tree.",
            possibleAnswers: [
              { title: "a. hit", correctAnswer: true },
              { title: "b. hited" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}
