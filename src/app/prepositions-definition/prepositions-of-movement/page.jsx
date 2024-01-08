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
  title: "Prepositions of Movement: A Comprehensive Guide",
  description:
    "Learn how to use prepositions of movement correctly with this comprehensive guide. Test your knowledge with a quiz and enhance your English grammar skills. Explore examples of 'to', 'through', 'across', and 'into' prepositions.",
  keywords:
    "Prepositions of Movement, English Grammar, Quiz, Learn English, Grammar Skills, To, Through, Across, Into",
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
    title: "Mastering Prepositions of Movement: A Comprehensive Guide",
    description:
      "Learn how to use prepositions of movement correctly with this comprehensive guide. Test your knowledge with a quiz and enhance your English grammar skills. Explore examples of 'to', 'through', 'across', and 'into' prepositions.",
    images: [
      {
        alt: "Prepositions of Movement Guide",
        url: "/images/prepositions-of-movement.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function PrepositionsOfMovement() {
  const questionsArray = [
    {
      id: 1,
      title: "She walked _______ the store.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 2,
      title: "He walked ________ the door.",
      possibleAnswers: [
        { title: "through", correctAnswer: true },
        { title: "across" },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 3,
      title: "They ran _________ the street.",
      possibleAnswers: [
        { title: "through" },
        { title: "across", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 4,
      title: "They walked ______ a trap.",
      possibleAnswers: [
        { title: "across" },
        { title: "into", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 5,
      title: "We drove ______ the mall.",
      possibleAnswers: [
        { title: "through" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 6,
      title: "He is going ______ the store.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 7,
      title: "The cat walked ______ the table.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 8,
      title: "If I walk ______ that door I'm not coming back.",
      possibleAnswers: [
        { title: "into" },
        { title: "through", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 9,
      title: "We are travelling ______ China.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 10,
      title: "He walked _________ the bar.",
      possibleAnswers: [
        { title: "into", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 11,
      title: "Don't go ______ that bridge. It's dangerous.",
      possibleAnswers: [
        { title: "into" },
        { title: "across", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 12,
      title: "They are biking ______ the park.",
      possibleAnswers: [
        { title: "to", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 13,
      title: "We flew ________ the clouds.",
      possibleAnswers: [
        { title: "across" },
        { title: "through", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 14,
      title: "He drove _________ the desert",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 15,
      title: "The baby crawled _______ his mother.",
      possibleAnswers: [
        { title: "to", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 16,
      title: "The dog ran ______ the car.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination. ",
    },
    {
      id: 17,
      title: "She ran _______ the cave.",
      possibleAnswers: [
        { title: "into", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 18,
      title: "The security guards pushed their way ________ the crowd.",
      possibleAnswers: [
        { title: "through", correctAnswer: true },
        { title: "across" },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 19,
      title: "We took a boat _________ the river.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 20,
      title: "The dog ran __________ the house.",
      possibleAnswers: [
        { title: "across" },
        { title: "into", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
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
          Prepositions of Movement
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          Prepositions of movement describe how something or someone moves from
          one space to another. The most commonly used preposition of movement
          is <b>to</b>, which demonstrates that there is movement towards a
          specific destination.
        </Typography>
      </Stack>
      <Typography>
        <b>To</b> is used to indicate motion towards a location.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              You went <b>to</b> bed early.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              I went <b>to</b> the library every Friday last summer.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        <b>Across</b> demonstrates movement from one side to another.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Demetrius travelled across America on his motorcycle.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Rebecca and Nia are swimming across the lake.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        <b>Through</b> demonstrates movement directly inside something and out
        the other end.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>Come in through the front door.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              The bullet train passed through the tunnel.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        <b>Into</b> demonstrates entering or looking inside something.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>She went into the house.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>They looked into the darkness.</ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qpNRmbi-L9E?si=lqGnh3B6O1eMfg3b"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
