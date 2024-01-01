import QuizForm from "@/src/components/QuizForm";

import {
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Past Perfect Tense | English in Eight Minutes",
  description:
    "Learn about the past perfect tense in English. This page provides explanations, examples, and a quiz",
  keywords:
    "past perfect tense, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Past Perfect Tense | English in Eight Minutes",
    description:
      "Learn about the past perfect tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function PastPerfect() {
  const questionsArray = [
    {
      id: 1,
      title: "The train ____________ by the time I got to the station.",
      possibleAnswers: [
        { title: "a. had leave" },
        { title: "b. had left", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Left is the past participle for leave.",
    },
    {
      id: 2,
      title: "I wished I ______________.",
      possibleAnswers: [
        { title: "a. had lied", correctAnswer: true },
        { title: "b. has lied" },
      ],
      userAnswer: "",
      explanation: "Lied is the past participle for lie.",
    },
    {
      id: 3,
      title:
        "She _____________________ the message before her brother apologized.",
      possibleAnswers: [
        { title: "a. had send" },
        { title: "b. had sent", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Sent is the past participle for send.",
    },

    {
      id: 4,
      title: "He _____________ football until last week.",
      possibleAnswers: [
        { title: "a. had never play" },
        { title: "b. had never played", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Played is the past participle for play.",
    },
    {
      id: 5,
      title:
        "After the storm _______________ we went outside to assess the damage.",
      possibleAnswers: [
        { title: "a. had pass" },
        { title: "b. had passed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Passed is the past participle for pass.",
    },

    {
      id: 6,
      title: "They ___________ engaged before last year.",
      possibleAnswers: [
        { title: "a. had get" },
        { title: "b. had gotten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Gotten is the past participle for get.",
    },
    {
      id: 7,
      title: "We ___________ them before the party.",
      possibleAnswers: [
        { title: "a. had met", correctAnswer: true },
        { title: "b. has meet" },
      ],
      userAnswer: "",
      explanation: "Left is the past participle for leave.",
    },
    {
      id: 8,
      title: "I __________ asleep before 8pm last night.",
      possibleAnswers: [
        { title: "a. had fall" },
        { title: "b. had fallen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Fallen is the past participle for fall.",
    },
    {
      id: 9,
      title: "We wished we ____________ the winning ticket.",
      possibleAnswers: [
        { title: "a. had purchased", correctAnswer: true },
        { title: "b. had purchase" },
      ],
      userAnswer: "",
      explanation: "Purchased is the past participle for purchase.",
    },
    {
      id: 10,
      title: "By the time we arrived, they _________ all the spaghetti.",
      possibleAnswers: [
        { title: "a. had eat" },
        { title: "b. had eaten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Eaten is the past participle for eat.",
    },
    {
      id: 11,
      title: "She regretted that she ________ the meeting.",
      possibleAnswers: [
        { title: "a. had miss" },
        { title: "b. had missed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Missed is the past participle for miss.",
    },
    {
      id: 12,
      title: "Before he realized, the thief _________ from the scene.",
      possibleAnswers: [
        { title: "a. had escape" },
        { title: "b. had escaped", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Escaped is the past participle for escape.",
    },
    {
      id: 13,
      title:
        "They were surprised that she ________ the entire book in one day.",
      possibleAnswers: [
        { title: "a. had read", correctAnswer: true },
        { title: "b. had reading" },
      ],
      userAnswer: "",
      explanation: "Read is the past participle for read.",
    },
    {
      id: 14,
      title:
        "The company announced that they ________ record profits last year.",
      possibleAnswers: [
        { title: "a. had achieve" },
        { title: "b. had achieved", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Achieved is the past participle for achieve.",
    },
    {
      id: 15,
      title: "Before the movie started, I ________ some popcorn.",
      possibleAnswers: [
        { title: "a. had buy" },
        { title: "b. had bought", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Bought is the past participle for buy.",
    },
    {
      id: 16,
      title: "He couldn't believe that he ________ his wallet at the airport.",
      possibleAnswers: [
        { title: "a. had lose" },
        { title: "b. had lost", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Lost is the past participle for lose.",
    },
    {
      id: 17,
      title: "Before the guests arrived, she ________  a delicious meal.",
      possibleAnswers: [
        { title: "a. had prepare" },
        { title: "b. had prepared", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Prepared is the past participle for prepare.",
    },
    {
      id: 18,
      title: "They realized that they ________ to lock the front door.",
      possibleAnswers: [
        { title: "a. had forget" },
        { title: "b. had forgotten", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Forgotten is the past participle for forget.",
    },
    {
      id: 19,
      title: "She found out that her flight ________ by several hours.",
      possibleAnswers: [
        { title: "a. had delay" },
        { title: "b. had been delayed", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Delayed is the past participle for delay in passive voice.",
    },
    {
      id: 20,
      title: "Before the concert, the musicians ________ for weeks.",
      possibleAnswers: [
        { title: "a. had practice" },
        { title: "b. had practiced", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Practiced is the past participle for practice.",
    },
  ];

  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Past Perfect
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          The past perfect is used to explain that one action in the past
          happened before another action in the past. We form it by using had +
          past participle.
        </Typography>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I had eaten</td>
              <td>I'd eaten</td>
              <td>I had not eaten</td>
              <td>I hadn't eaten</td>
            </tr>
            <tr>
              <td>You had left</td>
              <td>You'd left</td>
              <td>You had not left</td>
              <td>You hadn't left</td>
            </tr>
            <tr>
              <td>She, he, it had worked</td>
              <td>She, he, it'd worked</td>
              <td>She, he, it had not worked</td>
              <td>She, he, it hadn't worked</td>
            </tr>
            <tr>
              <td>We had talked</td>
              <td>We'd talked</td>
              <td>We had not talked</td>
              <td>We hadn't talked</td>
            </tr>
            <tr>
              <td>They had thought</td>
              <td>They'd thought</td>
              <td>They had not thought</td>
              <td>They hadn't thought</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              We <b>had already eaten</b> before you ordered lunch.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              We had told her to get ready, but she <b>had already prepared</b>{" "}
              her bags.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              They <b>had started</b> the project before their boss told them
              to.{" "}
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I <b>had finished</b> eating dinner by the time my wife came home.
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/llIOxwc57L0?si=unN51uHBBfP-x6M1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
