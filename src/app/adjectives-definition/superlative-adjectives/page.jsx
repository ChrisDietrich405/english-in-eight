import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

import {
  Container,
  Stack,
  ListItem,
  ListItemText,
  List,
  Box,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "Superlative Adjectives | English in Eight Minutes",
  description:
    "Learn about superlative adjectives in English with English in Eight Minutes. Understand how to form superlatives and take a quiz to test your knowledge.",
  keywords:
    "English, Superlative Adjectives, English grammar, English in Eight Minutes, adjectives comparison",
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
    title: "Superlative Adjectives | English in Eight Minutes",
    description:
      "Learn about superlative adjectives in English with English in Eight Minutes. Understand how to form superlatives and take a quiz to test your knowledge.",
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

export default function Superlatives() {
  const questionsArray = [
    {
      id: 1,
      title: "Nia is the ___________________ (old) daughter.",
      possibleAnswers: [
        { title: "oldest", correctAnswer: true },
        { title: "most old" },
      ],
      userAnswer: "",
      explanation:
        "Old has one syllable so you can add est for the superlative form.",
    },
    {
      id: 2,
      title:
        "His car is the _______________ (comfortable) car I’ve ever driven.",
      possibleAnswers: [
        { title: "most comfortable", correctAnswer: true },
        { title: "comfortableist" },
      ],
      userAnswer: "",
      explanation:
        "Comfortable has three syllables so you can't add est for the superlative form.",
    },
    {
      id: 3,
      title: "Bia is the _______________ (quiet) person I've ever met.",
      possibleAnswers: [
        { title: "quietest", correctAnswer: true },
        { title: "quitest" },
      ],
      userAnswer: "",
      explanation:
        "Quiet is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      id: 4,
      title: "This restaurant has the ________________ food",
      possibleAnswers: [
        { title: "deliciouser" },
        { title: "most delicious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Delicious has three syllables so you can't add est for the superlative form.",
    },
    {
      id: 5,
      title: "My math class is my ______________ (hard) class. ",
      possibleAnswers: [
        { title: "hardest", correctAnswer: true },
        { title: "most hardest" },
      ],
      userAnswer: "",
      explanation:
        "Hard has one syllable so you can add est for the superlative form.",
    },
    {
      id: 6,
      title:
        "The roads in this neighborhood are the _______________ (narrow) in the city.",
      possibleAnswers: [
        { title: "narroest" },
        { title: "narrowest", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Narrow is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      id: 7,
      title: "Malcolm is the _______________ (busy) man in his office.",
      possibleAnswers: [
        { title: "busiest", correctAnswer: true },
        { title: "busyest" },
      ],
      userAnswer: "",
      explanation:
        "Busy is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      id: 8,
      title: "Pigs are the ________________________(intelligent) farm animals.",
      possibleAnswers: [
        { title: "most intelligent", correctAnswer: true },
        { title: "intelligentest" },
      ],
      userAnswer: "",
      explanation:
        "Intelligent has three syllables so you can't add est for the superlative form.",
    },
    {
      id: 9,
      title:
        "Demetrius is the ________________ (ambitious) director at his production company.",
      possibleAnswers: [
        { title: "ambitiousest" },
        { title: "most ambitious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Ambitious has three syllables so you can't add est for the superlative form.",
    },
    {
      id: 10,
      title: "My dog is the  ________________  (cute) in my neighborhood.",
      possibleAnswers: [
        { title: "most cutest" },
        { title: "cutest", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Cute has one syllable so you can add est for the superlative form.",
    },
    {
      id: 11,
      title: "The movie was the ______________ (exciting) I've seen.",
      possibleAnswers: [
        { title: "most exciting", correctAnswer: true },
        { title: "excitingest" },
      ],
      userAnswer: "",
      explanation: "Exciting is three syllables, so you must use 'most.'",
    },

    {
      id: 12,
      title: "Sophia is the ______________ (short) girl in the class.",
      possibleAnswers: [
        { title: "shortest", correctAnswer: true },
        { title: "most short" },
      ],
      userAnswer: "",
      explanation:
        "Short is one syllable, so you can add est. Most short isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 13,
      title: "He is the _________ player on the team.",
      possibleAnswers: [
        { title: "worst", correctAnswer: true },
        { title: "most bad" },
      ],
      userAnswer: "",
      explanation:
        "Bad is an irregular adjective. Worst is the superlative form and you can't say most bad.",
    },

    {
      id: 14,
      title:
        "This book is the ______________ (interesting) I've read.",
      possibleAnswers: [
        { title: "most interesting", correctAnswer: true },
        { title: "interestingest" },
      ],
      userAnswer: "",
      explanation: "Interesting is three syllables, so you must use 'most.'",
    },

    {
      id: 15,
      title: "Macs are the  ______________ (good).",
      possibleAnswers: [
        { title: "best", correctAnswer: true },
        { title: "most good" },
      ],
      userAnswer: "",
      explanation:
        "Good is an irregular adjective. Best is the superlattive form and you can't say most good.",
    },

    {
      id: 16,
      title: "Julia is the ______________ (tall) woman in the office.",
      possibleAnswers: [
        { title: "tallest", correctAnswer: true },
        { title: "most tall" },
      ],
      userAnswer: "",
      explanation:
        "Tall is one syllable, so you can add est. Most tall isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 17,
      title: "That city is the ______________ (crowded) in the country.",
      possibleAnswers: [
        { title: "most crowded", correctAnswer: true },
        { title: "crowdedest" },
      ],
      userAnswer: "",
      explanation:
        "Crowded is a two syllable adjective that can't use est at the end in the superlative.",
    },

    {
      id: 18,
      title: "The test was the ______________ (difficult) I've taken.",
      possibleAnswers: [
        { title: "most difficult", correctAnswer: true },
        { title: "difficultest" },
      ],
      userAnswer: "",
      explanation: "Difficult is three syllables, so you must use 'most.'",
    },

    {
      id: 19,
      title: "Jazz music is the ______________ (relaxing) type of music.",
      possibleAnswers: [
        { title: "most relaxing", correctAnswer: true },
        { title: "relaxingest" },
      ],
      userAnswer: "",
      explanation: "Relaxing is three syllables, so you must use 'most.'",
    },

    {
      id: 20,
      title:
        "The new restaurant is the ______________ (cheap) one in the neighborhood.",
      possibleAnswers: [
        { title: "cheapest", correctAnswer: true },
        { title: "most cheap" },
      ],
      userAnswer: "",
      explanation:
        "Cheap is one syllable, so you can add est. Most cheap isn't technically incorrect, but it sounds strange.",
    },
  ];

  return (
    <Container>
      <Stack mb={2}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Superlative Adjectives
        </Typography>
      </Stack>
      <Stack mb={2}>
        <Typography>
          Superlative adjectives are used to describe an object or person which is at the
          upper or lower limit of a quality (the tallest, the smallest, the
          fastest, the highest). They are used in sentences where a subject is
          compared to other objects or people.
        </Typography>
      </Stack>
      <Box component="section">
        <Typography mb={2} variant="h5">
          Adjectives with only one syllable
        </Typography>
        <Typography>
          If an adjective has one syllable, we usually add 'est' to make the
          superlative form.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> smart → smartest</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> fast → fastest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> tall → tallest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> old → oldest</ListItemText>
          </ListItem>
        </List>
        <Typography>
          There are some spelling changes. If the adjective ends in 'e', we
          don't add another 'e', just 'st'.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> brave → bravest</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> safe → safest</ListItemText>
          </ListItem>
        </List>

        <Typography>
          If there is one vowel followed by one consonant at the end of the
          adjective, we often double the consonant.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> sad → saddest</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>hot → hottest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> big → biggest</ListItemText>
          </ListItem>
        </List>

        <Typography>
          There are some adjectives that we need to use 'most' with, even though
          they only have one syllable. Adding -est is incorrect for these verbs.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>real → most real (NOT realer)</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>fun → most fun (NOT funner)</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography mb={2} variant="h5">
          Adjectives with two syllables
        </Typography>
        <Typography>Some adjectives with two syllables use 'most'.</Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>thoughtful → most thoughtful</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>peaceful → most peaceful</ListItemText>
          </ListItem>
        </List>

        <Typography>
          However, some two syllable adjectives can use 'est'.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>quiet → quietest</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>cruel → cruelest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>simple → simplest</ListItemText>
          </ListItem>
        </List>

        <Typography>
          For adjectives with two syllables that end in 'y' we normally add 'est'
          (y generally changes to i).
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>funny → funniest</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>happy → happiest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>ugly → ugliest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>silly → silliest</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography mb={2} variant="h5">
          Adjectives that have more than two syllables
        </Typography>
        <Typography>
          Adjectives that have more than two syllables need to use 'most' to
          form their superlative.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>delicious → most delicious</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>interesting → most interesting</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>exotic → most exotic</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>intelligent → most intelligent</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography mb={2} variant="h5">
          Irregular adjectives
        </Typography>
        <Typography>
          There are also some irregular adjectives. We simply need to memorize
          them.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>good → best</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>bad → worst</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>far → furthest</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>little → least</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>much → most</ListItemText>
          </ListItem>
        </List>
      </Box>

      <QuizForm questionsArray={questionsArray} />
    </Container>
  );
}
