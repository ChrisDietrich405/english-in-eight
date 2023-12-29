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
  title: "Future Continuous Tense | English in Eight Minutes",
  description:
    "Discover the Future Continuous Tense in English - English in Eight Minutes. This page offers clear explanations, illustrative examples, and an interactive quiz",
  keywords:
    "Future Continuous Tense, English Grammar, English Lessons, Phrasal Verbs, Idiomatic Expressions, American English",
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
    title: "Future Continuous Tense | English in Eight Minutes",
    description:
      "Learn about the future continuous tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
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

export default function FutureContinuous() {
  const questionsArray = [
    {
      id: 1,
      title: "In an hour she _______________ the bathrooms.",
      possibleAnswers: [
        { title: "a. will be cleaning", correctAnswer: true },
        { title: "b. will be clean" },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 2,
      title: "Next month they _______________ about this.",
      possibleAnswers: [
        { title: "a. will be complain" },
        { title: "b. will be complaining", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 3,
      title:
        "Unfortunately, sea levels will ____________ in the next 30 years.",
      possibleAnswers: [
        { title: "a. will still be rise" },
        { title: "b. will still be rising", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 4,
      title: "I ______________  Marcus at the conference next week.",
      possibleAnswers: [
        { title: "a. will be see" },
        { title: "b. will be seeing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 5,
      title: "When he's in Morocco he _____________ with friends.",
      possibleAnswers: [
        { title: "a. will be stay" },
        { title: "b. will be staying", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 6,
      title: "Miguel _____________ in a marathon next month.",
      possibleAnswers: [
        { title: "a. will be competing", correctAnswer: true },
        { title: "b. will be compete" },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 7,
      title: "I ___________  with Nia this evening so I can talk to her.",
      possibleAnswers: [
        { title: "a. will be eat" },
        { title: "b. will be eating", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 8,
      title: "Demarcus _______________ in the race.",
      possibleAnswers: [
        { title: "a. will also be running", correctAnswer: true },
        { title: "b. will also be run" },
      ],
      userAnswer: "",
    },
    {
      id: 9,
      title: "He _____________ when you telephone him.",
      possibleAnswers: [
        { title: "a. will be sleep" },
        { title: "b. will be sleeping", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 10,
      title: "I _____________ hockey in the afternoon tomorrow.",
      possibleAnswers: [
        { title: "a. will be play" },
        { title: "b. will be playing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form you need an ing ending.",
    },
    {
      id: 11,
      title:
        "At this time tomorrow, she _______________  for her big presentation.",
      possibleAnswers: [
        { title: "a. will be prepare" },
        { title: "b. will be preparing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 12,
      title:
        "By the end of the week, they _______________  to five different cities.",
      possibleAnswers: [
        { title: "a. will be travel" },
        { title: "b. will be traveling", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 13,
      title: "Tomorrow morning, I _______________ Sarah at the coffee shop.",
      possibleAnswers: [
        { title: "a. will be meet" },
        { title: "b. will be meeting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 14,
      title:
        "In a few hours, he _______________ his final exam for the semester.",
      possibleAnswers: [
        { title: "a. will be take" },
        { title: "b. will be taking", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 15,
      title:
        "While on vacation, we _______________  the beautiful beaches of Hawaii.",
      possibleAnswers: [
        { title: "a. will be explore" },
        { title: "b. will be exploring", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 16,
      title:
        "During the summer break, Miguel _______________ on a special project.",
      possibleAnswers: [
        { title: "a. will be work" },
        { title: "b. will be working", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 17,
      title:
        "Later tonight, I _______________  a documentary about space exploration.",
      possibleAnswers: [
        { title: "a. will be watch" },
        { title: "b. will be watching", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 18,
      title:
        "During the holidays, Demarcus _______________ his family in another city.",
      possibleAnswers: [
        { title: "a. will be visit" },
        { title: "b. will be visiting", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 19,
      title: "Tonight, he _______________  a book before going to bed.",
      possibleAnswers: [
        { title: "a. will be read" },
        { title: "b. will be reading", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
    },

    {
      id: 20,
      title: "In the afternoon, I _______________ my guitar for a few hours.",
      possibleAnswers: [
        { title: "a. will be practice" },
        { title: "b. will be practicing", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "With the continuous form, you need an 'ing' ending.",
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
          Future Continuous
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          The future continuous refers to an ongoing action in the future.
          Realistically it isn't a tense we use often.
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
              <td>I will be swimming</td>
              <td>I'll be swimming</td>
              <td>I will not be swimming</td>
              <td>I won't be swimming</td>
            </tr>
            <tr>
              <td>You will be dancing</td>
              <td>You'll be dancing</td>
              <td>You will not be dancing</td>
              <td>You won't be dancing</td>
            </tr>
            <tr>
              <td>She, he, it will be working</td>
              <td>She, he, it'll be working</td>
              <td>She, he, it will not be working</td>
              <td>She, he, it won't be working</td>
            </tr>
            <tr>
              <td>We will be talking</td>
              <td>We'll be talking</td>
              <td>We will not be talking</td>
              <td>We won't be talking</td>
            </tr>
            <tr>
              <td>They will be running</td>
              <td>They'll be running</td>
              <td>They will not be running</td>
              <td>They won't be running</td>
            </tr>
          </tbody>
        </table>
      </Stack>

      <Box component="section">
        <Typography variant="h6">Examples</Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              By Christmas I will be skating like a pro.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              It's very exciting! This time next Monday you will be working at
              your new job.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              This time next week she will be relaxing at the beach.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H5UD03yKfVI?si=PaUbvAXYLCjmE7YT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
