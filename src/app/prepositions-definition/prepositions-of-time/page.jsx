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
  title: "Prepositions of Time: A Comprehensive Guide",
  description:
    "Enhance your understanding of prepositions of time with this comprehensive guide. Test your knowledge with a quiz covering 'at', 'on', and 'in' prepositions. Explore examples for days, dates, times, months, seasons, years, and more.",
  keywords:
    "Prepositions of Time, English Grammar, Quiz, Learn English, Grammar Skills, At, On, In, Days, Dates, Months, Seasons, Years",
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
    title: "Prepositions of Time: A Comprehensive Guide",
    description:
      "Enhance your understanding of prepositions of time at, in, on.",
    images: [
      {
        alt: "Prepositions of Time Guide",
        url: "/images/prepositions-of-time.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function PrepositionsOfTime() {
  const questionsArray = [
    {
      id: 1,
      title: "He's coming home _______ 7pm.",
      possibleAnswers: [{ title: "on" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 2,
      title: "My trip starts _______ December 12th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific dates we use the preposition on.",
    },
    {
      id: 3,
      title: "Devin was born ______ 1995",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 4,
      title: "I exercise _______ the morning",
      possibleAnswers: [{ title: "at" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "When speaking about the morning and the afternoon we use the preposition in.",
    },
    {
      id: 5,
      title: "Buddy is going to Australia _______ March.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 6,
      title: "Congo declared independence ______ the 20th century.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 7,
      title: "It's safer if you go with someone _______ night.",
      possibleAnswers: [{ title: "in" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about night we use the preposition at.",
    },
    {
      id: 8,
      title: "She is leaving Canada ________ September 26th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific dates we use the preposition on.",
    },
    {
      id: 9,
      title: "I need to go exactly ______ 4pm.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 10,
      title: "His brother's birthday is _______ July.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "at" }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 11,
      title: "I'm going to take my vacation ________ the spring",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about seasons we use the preposition in.",
    },
    {
      id: 12,
      title: "I love going skiing _____ January.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 13,
      title: "The meeting is going to stop ______ 10am.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 14,
      title: "I finished college _______ 1999.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
    },
    {
      id: 15,
      title: "She needs to go to the clinic _______ the afternoon.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "at" }],
      userAnswer: "",
      explanation:
        "When speaking about morning or afternoon we use the preposition in.",
    },
    {
      id: 16,
      title: "Marcus is leaving ______ February",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "When speaking about months we use the preposition in.",
    },
    {
      id: 17,
      title: "We have a lot of fun ______ Christmas time.",
      possibleAnswers: [{ title: "in" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation: "When speaking about time we use the preposition at.",
    },
    {
      id: 18,
      title: "They work better ______ night.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation: "When speaking about night we use the preposition at.",
    },
    {
      id: 19,
      title: "We are going to meet them _________ October 12th.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "When speaking about specific date we use the preposition on.",
    },
    {
      id: 20,
      title: "_____ 2012 I was living in Colombia.",
      possibleAnswers: [{ title: "In", correctAnswer: true }, { title: "At" }],
      userAnswer: "",
      explanation: "When speaking about years we use the preposition in.",
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
          Prepositions of Time
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          Basic examples of prepositions of time include: at, on, in.
        </Typography>
      </Stack>
      <Typography>
        For days and dates we use the preposition <b>on</b>.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              We go to the sanctuary <b>on </b>Sundays.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Christmas is <b>on </b> December 25th.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        For times, night and holidays, use the preposition <b>at</b>.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Families often argue <b>at </b> Christmas time.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I work faster <b>at </b> night.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              She is going to stop working <b>at </b> 7pm.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        For times of day, months, seasons, years and centuries we use the
        preposition <b>in</b>.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>I don't eat anything <b>in</b> the morning.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>It’s always cold <b>in</b> January.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>Halloween is <b>in</b> the fall.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>I started <b>in</b> 1987.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>It happened <b>in</b> the 18th century.</ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fRrVkXG0-v4?si=gBel6hfVXrayjlJ1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
