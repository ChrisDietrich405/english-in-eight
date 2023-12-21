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

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Dependent Prepositions: A Comprehensive Guide",
  description:
    "Learn how to use dependent prepositions correctly with this comprehensive guide. Test your knowledge with a quiz at the end. Improve your English grammar skills today!",
  keywords:
    "Dependent Prepositions, English Grammar, Quiz, Learn English, Grammar Skills",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mastering Dependent Prepositions: A Comprehensive Guide",
    description:
      "Learn how to use dependent prepositions correctly with this comprehensive guide. Test your knowledge with a quiz at the end. Improve your English grammar skills today!",
    images: [
      {
        alt: "Dependent Prepositions Guide",
        url: "/images/dependent-prepositions.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function DependentPrepositions() {
  const questionsArray = [
    {
      id: 1,
      title: "You should believe ______ yourself.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with believe is in.",
    },
    {
      id: 2,
      title: "I wish you would agree _______ me about this.",
      possibleAnswers: [
        { title: "with", correctAnswer: true },
        { title: "at" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with agree is with.",
    },
    {
      id: 3,
      title: "I'm worried _______ my children.",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with worry is about.",
    },
    {
      id: 4,
      title: "She lives _______ a great neighborhood.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with live is in.",
    },
    {
      id: 5,
      title: "I've been waiting _______ you an hour.",
      possibleAnswers: [{ title: "on" }, { title: "for", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with wait is for.",
    },
    {
      id: 6,
      title: "Did you know _______ that?",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with know is about.",
    },
    {
      id: 7,
      title: "We need to depend _______ each other.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with depend is on.",
    },
    {
      id: 8,
      title: "He asked ______ more money.",
      possibleAnswers: [{ title: "in" }, { title: "for", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with ask is for.",
    },
    {
      id: 9,
      title: "We love to listen _______ reggae.",
      possibleAnswers: [{ title: "to", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "The correct preposition used with listen is to.",
    },
    {
      id: 10,
      title: "Don't forget _______ my birthday.",
      possibleAnswers: [
        { title: "about", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with forget is about.",
    },
    {
      id: 11,
      title: "I would love to live _______ Hawaii",
      possibleAnswers: [{ title: "to" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with live is in.",
    },
    {
      id: 12,
      title: "He doesn't believe _____ mysticism.",
      possibleAnswers: [
        { title: "in", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with believe is in.",
    },
    {
      id: 13,
      title: "You can ask ______ something to eat.",
      possibleAnswers: [{ title: "in" }, { title: "for", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with ask is for.",
    },
    {
      id: 14,
      title: "I hate waiting ______ this bus.",
      possibleAnswers: [{ title: "for", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with wait is for.",
    },
    {
      id: 15,
      title: "I don't depend ______ anyone.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "The correct preposition used with depend is on.",
    },
    {
      id: 16,
      title: "He forgot _________ the meeting.",
      possibleAnswers: [
        { title: "on" },
        { title: "about", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with forget is about.",
    },
    {
      id: 17,
      title: "I listen _________ a lot of music.",
      possibleAnswers: [{ title: "to", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "The correct preposition used with listen is to.",
    },
    {
      id: 18,
      title: "She never agrees _______ me.",
      possibleAnswers: [
        { title: "with", correctAnswer: true },
        { title: "to" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with agree is with.",
    },
    {
      id: 19,
      title: "I didn't know _______ that.",
      possibleAnswers: [
        { title: "about", correctAnswer: true },
        { title: "in" },
      ],
      userAnswer: "",
      explanation: "The correct preposition used with know is about.",
    },
    {
      id: 20,
      title: "You shouldn't vote ______ her. She's extremely corrupt",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "The correct preposition used with corrupt is for.",
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
          Dependent Prepositions
        </Typography>
      </Stack>
      <Stack>
        <Typography>
          Dependent prepositions are prepositions that depend on or must follow
          a specific verb. For example <b>depend on</b>. You can only use the
          preposition <b>on</b> after depend. No other preposition can be used.
        </Typography>
      </Stack>
      <Typography>
        Here's a list of some common dependent prepositions.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Depend on - She depends on her mother for everything.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> Wait for - I need to wait for the bus.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Listen to - I love to listen to podcasts.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>Believe in - Do you believe in ghosts?</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Forget about- You forgot about his birthday.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> Know about - I don't know about that.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> Agree with - I don't agree with you.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Vote for - He is going to vote for the wrong candidate.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Live in - We don't live in Baltimore anymore.
            </ListItemText>
          </ListItem>{" "}
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Worry about - My mother worries about everything.
            </ListItemText>
          </ListItem>{" "}
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Ask for - I need to ask you for a favor.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />
    </Container>
  );
}
