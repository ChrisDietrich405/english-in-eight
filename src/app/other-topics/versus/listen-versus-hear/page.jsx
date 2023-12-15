import QuizForm from "@/src/components/QuizForm";

import {
  Container,
  Box,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Listen versus Hear | English in Eight Minutes",
  description:
    "Learn about the differences between 'listen' and 'hear' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
  keywords:
    "English, Listen versus Hear, English grammar, Vocabulary, English in Eight Minutes",
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
    title: "Listen versus Hear | English in Eight Minutes",
    description:
      "Learn about the differences between 'listen' and 'hear' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
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

export default function ListenVersusHear() {
  const questionsArray = [
    {
      id: 1,
      title: "I can ________ the baby crying.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 2,
      title: "Hey! _____ It's that scary sound again.",
      possibleAnswers: [
        { title: "a. Listen", correctAnswer: true },
        { title: "b. Hear" },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 3,
      title: "I can't _____ you. My dad's vacuuming.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 4,
      title: "We _____ the car crash and ran outside to help.",
      possibleAnswers: [
        { title: "a. listened to" },
        { title: "b. heard", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 5,
      title: "Be quiet, please. I'm _____ the news.",
      possibleAnswers: [
        { title: "a. hearing" },
        { title: "b. listening to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 6,
      title: "Hey Malcolm! Can you _________ that sound?",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },

    {
      id: 7,
      title: "I called out to grandma but she couldn't _____ me.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 8,
      title: "Are you allowed to _____ music at work?",
      possibleAnswers: [
        { title: "a. listen to", correctAnswer: true },
        { title: "b. hear" },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 9,
      title: "I haven't seen any lightning but I just _____ some thunder.",
      possibleAnswers: [
        { title: "a. heard", correctAnswer: true },
        { title: "b. listened to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 10,
      title: "Do you like to __________ jazz music?",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 11,
      title:
        "I always try to have time to ________ the birds singing in the morning.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 12,
      title: "She couldn't _____ the teacher because of the noisy classroom.",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 13,
      title: "I can _____ the ocean waves from my bedroom window.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 14,
      title: "Please, _____ to what I'm saying carefully.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 15,
      title:
        "They were so focused on their conversation that they didn't even _____ the thunderstorm outside.",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 16,
      title: "Can you _____ the difference between those two sounds?",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 17,
      title: "I always _____ music while I work.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 18,
      title: "I _____ a strange noise coming from the basement last night.",
      possibleAnswers: [
        { title: "a. heard", correctAnswer: true },
        { title: "b. listened to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
    {
      id: 19,
      title: "My mom loves to _____ classical music in the evening.",
      possibleAnswers: [
        { title: "a. hear" },
        { title: "b. listen to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Listen is an action you focus on doing.",
    },
    {
      id: 20,
      title: "Did you _____ what the teacher just said?",
      possibleAnswers: [
        { title: "a. hear", correctAnswer: true },
        { title: "b. listen to" },
      ],
      userAnswer: "",
      explanation: "Hear is more of an involuntary action.",
    },
  ];

  return (
    <>
      <Container>
        <Stack>
          <Typography
            mb={2}
            component="h1"
            variant="h1"
            sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
          >
            Listen versus Hear
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" mb={2}>
            <b>Hear</b> is the act of naturally perceiving sounds with your
            ears, while <b>listen</b> involves actively paying attention and
            processing the sounds or words you hear.
          </Typography>
        </Stack>
        <Box component="section">
          <Typography>
            {" "}
            <b>Listen</b> is something you focus on doing:
          </Typography>
          <List sx={{ marginLeft: "20px" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText> Do you listen to music in bed?</ListItemText>
            </ListItem>
          </List>
          <List>
            <Typography>
              {" "}
              We <b>always</b> use <b>to</b> after listen before an object:{" "}
            </Typography>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                Every morning I <b> listen to</b> my Mozart CD while I’m having
                breakfast. It prepares me mentally for the day.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            {" "}
            <b>Hear</b> is something you don't focus on doing:
          </Typography>

          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                Suddenly I heard a noise. Someone was in the garden.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>Did you hear the thunder last night?</ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                The connection is very bad. I can’t hear you.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h5">
            {" "}
            This lesson is not easy, so don't worry if you make a lot of
            mistakes with the quiz. Remember practice makes perfect. Do the quiz
            as many time as you need.{" "}
          </Typography>
        </Box>

        <QuizForm questionsArray={questionsArray} />
      </Container>

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ohaD-sDeLmE?si=DbBn1E7HRvVDmZfZ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
