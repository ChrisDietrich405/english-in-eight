import QuizForm from "@/src/components/QuizForm";

import {
  Container,
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Noun Modifiers | English in Eight Minutes",
  description:
    "Learn about noun modifiers in English with English in Eight Minutes. Understand how noun modifiers work and test your knowledge with a quiz.",
  keywords:
    "English, Noun Modifiers, English grammar, English in Eight Minutes",
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
    title: "Noun Modifiers | English in Eight Minutes",
    description:
      "Learn about noun modifiers in English with English in Eight Minutes. Understand how noun modifiers work and test your knowledge with a quiz.",
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

export default function NounModifiers() {
  const questionsArray = [
    {
      id: 1,
      title: "It's a door made of metal. It's a _____________.",
      possibleAnswers: [
        { title: "door's metal" },
        { title: "metal door", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Metal is a noun modifier here.",
    },
    {
      id: 2,
      title: "It's a cloth that you put on a table. It's a _____________.",
      possibleAnswers: [
        { title: "table cloth", correctAnswer: true },
        { title: "cloth table" },
      ],
      userAnswer: "",
      explanation: "Table is a noun modifier here.",
    },
    {
      id: 3,
      title: "It's a bat used for baseballs. It's a _____________.",
      possibleAnswers: [
        { title: "batball" },
        { title: "baseball bat", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Baseball is a noun modifier here.",
    },
    {
      id: 4,
      title: "It's a key for my house. It's a _____________.",
      possibleAnswers: [
        { title: "key house" },
        { title: "house key", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "House is a noun modifier here.",
    },
    {
      id: 5,
      title: "The park is in the city. It's a ______________.",
      possibleAnswers: [
        { title: "park city" },
        { title: "city park", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "City is a noun modifier here.",
    },
    {
      id: 6,
      title: "They have a house in the trees. They have a ______________.",
      possibleAnswers: [
        { title: "tree house", correctAnswer: true },
        { title: "house tree" },
      ],
      userAnswer: "",
      explanation: "Tree is a noun modifier here.",
    },
    {
      id: 7,
      title: "We bought a bone for our dog. We gave her a _____________.",
      possibleAnswers: [
        { title: "bone dog" },
        { title: "dog bone", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Dog is a noun modifier here.",
    },
    {
      id: 8,
      title:
        "Meet me where there is a station for a train. It's a ________________.",
      possibleAnswers: [
        { title: "train station", correctAnswer: true },
        { title: "station train" },
      ],
      userAnswer: "",
      explanation: "Train is a noun modifier here.",
    },
    {
      id: 9,
      title: "This is a ladder with steps.   It’s a ___________.",
      possibleAnswers: [
        { title: "step ladder", correctAnswer: true },
        { title: "ladder step" },
      ],
      userAnswer: "",
      explanation: "Step is a noun modifier here.",
    },
    {
      id: 10,
      title: "I paid for lessons for swimming. They are _____________.",
      possibleAnswers: [
        { title: "swimming lessons", correctAnswer: true },
        { title: "swimmings lesson" },
      ],
      userAnswer: "",
      explanation:
        "Swimming is a noun modifier here and noun modifiers are always singular.",
    },
    {
      id: 11,
      title: "He uses it to cut paper. It's a _____________.",
      possibleAnswers: [
        { title: "paper cutter", correctAnswer: true },
        { title: "cut paper" },
      ],
      userAnswer: "",
      explanation: "Paper is a noun modifier here.",
    },
    {
      id: 12,
      title: "You sit on it in the park. It's a _____________.",
      possibleAnswers: [
        { title: "park bench", correctAnswer: true },
        { title: "bench park" },
      ],
      userAnswer: "",
      explanation: "Park is a noun modifier here.",
    },
  ];

  return (
    <Container>
      <Stack className={styles.page_title}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Noun Modifiers
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
          Noun modifiers are words or phrases that provide additional
          information about a noun, helping to describe, specify, or quantify
          it. We sometimes have two nouns together to demonstrate that one thing
          is a part of something else. In the following examples, the first noun
          is called a noun modifier.
        </Typography>
      </Stack>
      <Box component="section">
        <Typography
          component="h5"
          variant="h5"
          // sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Examples
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              <b>Baltimore</b> residents
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              The <b>dog</b> bowl
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              The <b>chair</b> leg
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              The <b>shopping</b> list
            </ListItemText>
          </ListItem>{" "}
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              My <b>gold</b> watch
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        Noun modifiers can be used to show what something is made of.
      </Typography>
      <List sx={{ marginLeft: "20px" }}>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText> a metal chair</ListItemText>
        </ListItem>

        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a gold watch</ListItemText>
        </ListItem>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a wood table</ListItemText>
        </ListItem>
      </List>
      <Typography>
        Noun modifiers can be used to demonstrate a measurement.
      </Typography>
      <List sx={{ marginLeft: "20px" }}>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText> an hour drive</ListItemText>
        </ListItem>

        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a thousand mile trip</ListItemText>
        </ListItem>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a twenty pound bag</ListItemText>
        </ListItem>
      </List>
      <Typography>
        Noun modifiers can be used with nouns ending in –er.
      </Typography>
      <List sx={{ marginLeft: "20px" }}>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText> a dress maker</ListItemText>
        </ListItem>

        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a club manager</ListItemText>
        </ListItem>
        <ListItem
          className={styles.page_examples}
          sx={{ display: "list-item" }}
        >
          <ListItemText>a factory worker</ListItemText>
        </ListItem>
      </List>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fXVyba_KrCI?si=ml0n-c8e_fF1CJ85"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
