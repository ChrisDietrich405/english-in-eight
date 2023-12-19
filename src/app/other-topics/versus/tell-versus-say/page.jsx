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
  title: "Tell versus Say | English in Eight Minutes",
  description:
    "Learn when to use 'tell' and 'say' in English with English in Eight Minutes. Understand the differences between these words and test your knowledge with a quiz.",
  keywords:
    "English, Tell versus Say, English grammar, Vocabulary, English in Eight Minutes",
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
    title: "Tell versus Say | English in Eight Minutes",
    description:
      "Learn when to use 'tell' and 'say' in English with English in Eight Minutes. Understand the differences between these words and test your knowledge with a quiz.",
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

export default function TellVersusSay() {
  const questionsArray = [
    {
      id: 1,
      title: "Martin  _____________ that he would love to do it.",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 2,
      title: "She ______________ him a lie. ",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 3,
      title: "They  _____________ her that they were going to leave Friday.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 4,
      title: "Demarcus  ___________ us that he didn't want to go out.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },

    {
      id: 5,
      title: "Maria _________ that she's not feeling well. ",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 6,
      title: "She  __________ her mother that she wanted to quit.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },

    {
      id: 7,
      title: "Maria  _____________ that she would join us after work.",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 8,
      title:
        "Maria  _____________ that she's going to talk with her friend about it.",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 9,
      title: "Dan ____________ the best stories.",
      possibleAnswers: [
        { title: "tells", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 10,
      title: "Najha _____________ that she was going to stop helping us.",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 11,
      title: "They _________ that they didn't want to have the meeting Friday.",
      possibleAnswers: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 12,
      title: "Paul _____________ that he'll be late for the party.",
      possibleAnswers: [
        { title: "said", correctAnswer: true },
        { title: "told" },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 13,
      title: "She _______________ me to meet her at the park.",
      possibleAnswers: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 14,
      title:
        "The teacher ________________ the students to complete their homework.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 15,
      title: "Javier _____________ a funny joke at the dinner table.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 16,
      title: "They _______________ us not to go swimming in the deep water.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 17,
      title:
        "I can't _______________ the difference between Portuguese and Spanish.",
      possibleAnswers: [
        { title: "tell", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 18,
      title: "He _____________ his friends about the exciting trip.",
      possibleAnswers: [
        { title: "told" },
        { title: "said", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We usually use say without a personal object.",
    },
    {
      id: 19,
      title: "The manager _____________ the team about the upcoming project.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 20,
      title: "Excuse me, could you ________ the time",
      possibleAnswers: [
        { title: "tell", correctAnswer: true },
        { title: "say" },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
    },
    {
      id: 21,
      title:
        "They _______________ their parents about their decision to get married.",
      possibleAnswers: [
        { title: "said" },
        { title: "told", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "We use tell with a personal object.",
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
          Tell versus Say
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="h6" mb={2}>
          The verbs tell and say have similar meanings, but are not exactly the
          same. Both of them mean "to communicate verbally with someone", but
          depending on context we use one or the other.
        </Typography>
      </Stack>
      <Box component="section">
        <Typography>
          {" "}
          Tell is normally followed by a <b>personal object</b>. We usually use
          say without a personal object:
        </Typography>

        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              We told <b>everybody</b> that we wanted to eat.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>We said that we wanted to eat.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              He told <b>me</b> that he loved Dionte.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>He said that he loved Dionte.</ListItemText>
          </ListItem>
        </List>
        <Typography>
          Tell has to be used in certain situations. In these situations tell
          can't be replaced with say.
        </Typography>

        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>tell the difference between.....</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>tell (somebody) lies</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>tell (somebody) the truth</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>tell the time</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>tell (somebody) a story</ListItemText>
          </ListItem>
        </List>
        <Typography>When we refer to languages, we use speak:</Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I don't speak Swahili, but I want to learn.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>How many languages does Ahmad speak?</ListItemText>
          </ListItem>
        </List>
        <Typography>
          Some phrasal verbs require either talk or speak. Talk and speak in
          these contexts are not interchangeable.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              His students talk back to him, because he accepts it. (talk back
              means to be disrespectful)
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              My hearing is terrible. I always need to ask people to speak up.
              (speak up means to speak louder)
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              I know we are fighting a lot now, but I want to talk it out (talk
              it out means to resolve problems by talking calmly)
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          Talk can be a noun or a verb. Speak is always only a verb.{" "}
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>He gave a great talk about diet.</ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vh3Pu61uCuM?si=jI6pXdfmJS7_smtj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
