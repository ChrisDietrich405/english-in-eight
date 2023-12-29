import QuizForm from "@/src/components/QuizForm";

import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Future Perfect Continuous Tense Quiz | English in Eight Minutes",
  description:
    "Test your knowledge of the future perfect continuous tense in English with this quiz. Practice forming sentences using the future perfect continuous tense.",
  keywords:
    "future perfect continuous tense, English grammar, English quiz, phrasal verbs, idiomatic expressions, United States",
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
    title: "Future Perfect Continuous Tense Quiz | English in Eight Minutes",
    description:
      "Test your knowledge of the future perfect continuous tense in English with this quiz. Practice forming sentences using the future perfect continuous tense. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
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

export default function FuturePerfectContinuous() {
  const questionsArray = [
    {
      id: 1,
      title:
        " By next month, she will ______________ in that city for five years.",
      possibleAnswers: [
        { title: "a. have lived" },
        { title: "b. have been living", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been living is the correct present perfect continuous.",
    },
    {
      id: 2,
      title:
        "By the time the project is completed, they will ___________________ on it for six months.",
      possibleAnswers: [
        { title: "a. have worked" },
        { title: "b. have been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been working is the correct present perfect continuous.",
    },
    {
      id: 3,
      title:
        "By this time next year, they will ___________________ around the world for six months.",
      possibleAnswers: [
        { title: "a. have been traveling", correctAnswer: true },
        { title: "b. have traveled" },
      ],
      userAnswer: "",
      explanation:
        "Have been traveling is the correct present perfect continuous.",
    },
    {
      id: 4,
      title:
        "By the time the fair starts, we will ___________ the decorations for two days.",
      possibleAnswers: [
        { title: "a. have worked on" },
        { title: "b. have been working on", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been working on is the correct present perfect continuous.",
    },
    {
      id: 5,
      title:
        "By the time you get here, I will ____________ for you at the airport for two hours.",
      possibleAnswers: [
        { title: "a. have been waiting", correctAnswer: true },
        { title: "b. have waited" },
      ],
      userAnswer: "",
      explanation:
        "Have been waiting is the correct present perfect continuous.",
    },
    {
      id: 6,
      title:
        "By the end of the week, she will ______________ the piano for five years.",
      possibleAnswers: [
        { title: "a. have practiced" },
        { title: "b. have been practicing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been practicing is the correct present perfect continuous.",
    },
    {
      id: 7,
      title:
        "By the concert date, the band will ____________ the new songs for weeks.",
      possibleAnswers: [
        { title: "a. have rehearsed" },
        { title: "b. have been rehearsing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been rehearsing is the correct present perfect continuous.",
    },
    {
      id: 8,
      title: "By wedding day, they will ______________ it for a whole year.",
      possibleAnswers: [
        { title: "a. have been planning", correctAnswer: true },
        { title: "b. have planned" },
      ],
      userAnswer: "",
      explanation:
        "Have been planning is the correct present perfect continuous.",
    },
    {
      id: 9,
      title:
        "By the deadline, he will _______________ on the report for three days straight.",
      possibleAnswers: [
        { title: "a. have been working", correctAnswer: true },
        { title: "b. have worked" },
      ],
      userAnswer: "",
      explanation:
        "'Have been working' suggests continuous work on the report without interruption for three days up to the deadline.",
    },
    {
      id: 10,
      title:
        "By next month, she will ___________________ with her friend for a year.",
      possibleAnswers: [
        { title: "a. have stayed" },
        { title: "b. have been staying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been staying is the correct present perfect continuous.",
    },
    {
      id: 11,
      title:
        "By the time I finish eating, they will ___________________ for three hours.",
      possibleAnswers: [
        { title: "a. have talked" },
        { title: "b. have been talking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been talking is the correct present perfect continuous.",
    },
    {
      id: 12,
      title:
        "By this time next year, they will ___________________ throughout Asia for six months.",
      possibleAnswers: [
        { title: "a. have been traveling", correctAnswer: true },
        { title: "b. have traveled" },
      ],
      userAnswer: "",
      explanation:
        "Have been traveling is the correct present perfect continuous.",
    },
    {
      id: 13,
      title:
        "By the time the you get here, we will ___________________ the house for three hours.",
      possibleAnswers: [
        { title: "a. have decorated" },
        { title: "b. have been decorating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been living is the correct present perfect continuous.",
    },
    {
      id: 14,
      title:
        "By the time you get here, I will ___________________ for you at the bus stop for an hour.",
      possibleAnswers: [
        { title: "a. have been waiting", correctAnswer: true },
        { title: "b. have waited" },
      ],
      userAnswer: "",
      explanation:
        "Have been waiting is the correct present perfect continuous.",
    },
    {
      id: 15,
      title:
        "By the end of the week, I will ___________________ the guitar for five years.",
      possibleAnswers: [
        { title: "a. have practiced" },
        { title: "b. have been practicing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been living is the correct present perfect continuous.",
    },
    {
      id: 16,
      title:
        "By the date of the concert, the rap group will ___________________ their new raps for weeks.",
      possibleAnswers: [
        { title: "a. have rehearsed" },
        { title: "b. have been rehearsing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been rehearsing is the correct present perfect continuous.",
    },
    {
      id: 17,
      title:
        "By the start of the conference, they will ___________________ it for a whole year.",
      possibleAnswers: [
        { title: "a. have been organizing", correctAnswer: true },
        { title: "b. have organized" },
      ],
      userAnswer: "",
      explanation:
        "Have been organizing is the correct present perfect continuous.",
    },
    {
      id: 18,
      title:
        "By the deadline, we will ___________________ on the project for three days straight.",
      possibleAnswers: [
        { title: "a. have been working ", correctAnswer: true },
        { title: "b. have worked" },
      ],
      userAnswer: "",
      explanation:
        "Have been working is the correct present perfect continuous.",
    },
    {
      id: 19,
      title:
        "By the time the concert starts, the band will ___________________ their instruments for an hour.",
      possibleAnswers: [
        { title: "a. have practiced" },
        { title: "b. have been practicing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been practicing is the correct present perfect continuous.",
    },
    {
      id: 20,
      title:
        "By the end of the semester, the students will ___________________ on their final projects for weeks.",
      possibleAnswers: [
        { title: "a. have worked" },
        { title: "b. have been working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Have been working is the correct present perfect continuous.",
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
          Future Perfect Continuous
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          The future perfect continuous tense is a verb form used to talk about
          actions or events that will have been happening continuously until a
          specific point in the future. Realistically it's not used very much.
        </Typography>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will have been finishing</td>
              <td>I'll have been finishing</td>
              <td>I will not have been finishing</td>
              <td>I'll not have been finishing</td>
            </tr>
            <tr>
              <td>You will have been swimming</td>
              <td>You'll have been swimming</td>
              <td>You will not have been swimming</td>
              <td>You'll not have been swimming</td>
            </tr>
            <tr>
              <td>She, he, it will have been working</td>
              <td>She, he, it'll have been working</td>
              <td>She, he, it will not have been working</td>
              <td>She, he, it'll not have been working</td>
            </tr>
            <tr>
              <td>We will have been running</td>
              <td>We'll have been running</td>
              <td>We will not have been running</td>
              <td>We'll not have been running</td>
            </tr>
            <tr>
              <td>They will have been ending</td>
              <td>They'll have been ending</td>
              <td>They wTheyll not have been ending</td>
              <td>They'll not have been ending</td>
            </tr>
          </tbody>
        </table>
      </Stack>
      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3GY1pPj-Yuw?si=M8-SuxzAzPVJnY7b"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
