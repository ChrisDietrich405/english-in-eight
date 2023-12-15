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
  title: "For versus To | English in Eight Minutes",
  description:
    "Explore the distinctions between 'for' and 'to' in English with English in Eight Minutes. Enhance your understanding through examples and test your knowledge with a quiz.",
  keywords:
    "English, For versus To, English grammar, Prepositions, Quiz, English in Eight Minutes",
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
    title: "For versus To | English in Eight Minutes",
    description:
      "Explore the distinctions between 'for' and 'to' in English with English in Eight Minutes. Enhance your understanding through examples and test your knowledge with a quiz.",
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

export default function ForVersusTo() {
  const questionsArray = [
    {
      id: 1,
      title: "I bought this ________ you. (assisting)",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 2,
      title: "She loves _____ sing.(preposition followed by verb)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by a verb",
    },
    {
      id: 3,
      title: "They want to speak _______ you. (direction of communication)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 4,
      title:
        "I admitted my mistake _____ my boss. (direction of communication)",
      possibleAnswers: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 5,
      title:
        "My brother would be happy to do that _______ you. (helping someone)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 6,
      title: "I really like cooking ______ my girlfriend (helping someone)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },

    {
      id: 7,
      title: "We are going ______ Vietnam. (destination)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "Destination",
    },
    {
      id: 8,
      title:
        "He needs to report that _____ his boss. (direction of communication)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "To is used to indicate the direction of communication or the target of the speech",
    },
    {
      id: 9,
      title: "Do you want me to make a reservation _____ us? (helping someone)",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Assisting someone",
    },
    {
      id: 10,
      title: "I went there ______ a conference. (preposition followed by noun)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 11,
      title: "I work ___ a big company. (preposition followed by a noun)",
      possibleAnswers: [
        { title: "a. for", correctAnswer: true },
        { title: "b. to" },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 12,
      title: "Don't donate ____ that charity. It's corrupt.(giving)",
      possibleAnswers: [
        { title: "a. listen to" },
        { title: "b. hear", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 13,
      title: "I am going ______ Kenya this summer. (destination)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation: "This is an example of destination.",
    },
    {
      id: 14,
      title:
        "I made the appointment _____ Friday.(preposition followed by noun)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 15,
      title: "I wanted _____ do it. (reason followed by a verb)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb.",
    },
    {
      id: 16,
      title: "She did it _______ love. (preposition followed by noun)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Preposition followed by noun",
    },
    {
      id: 17,
      title: "Can you deliver this letter _____ me. (helping someone)",
      possibleAnswers: [
        { title: "a. to" },
        { title: "b. for", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of doing something for someone.",
    },
    {
      id: 18,
      title:
        "They tried ______ resolve the problem. (purpose followed by verb)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb",
    },
    {
      id: 19,
      title: "We gave a lot of clothes ______ them. (giving)",
      possibleAnswers: [
        { title: "a. for" },
        { title: "b. to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an example of giving.",
    },
    {
      id: 20,
      title: "He wanted _____ talk to you. (purpose followed by verb)",
      possibleAnswers: [
        { title: "a. to", correctAnswer: true },
        { title: "b. for" },
      ],
      userAnswer: "",
      explanation:
        "This is an example of a motive/purpose/reason followed by a verb",
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
            For versus To
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" mb={2}>
            Use To in the following situations:
          </Typography>
        </Stack>
        <Box component="section">
          <Typography> Giving</Typography>
          <List sx={{ marginLeft: "20px" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                She gave it <b> to </b>me.
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                I donated <b>to</b> Farm Santuary.
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <Typography> Direction of communication</Typography>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                She talked <b> to </b>me.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I said it <b>to</b> him.
              </ListItemText>
            </ListItem>
          </List>
          <Typography> Destination</Typography>

          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I'm travelling <b>to</b> Lima.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I'm going <b>to</b> the store.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>Distance</Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                It’s 20 minutes from my job <b>to</b> my house.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                It's 3 hours <b>to</b> the Washington.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" mb={2}>
            Use For in the following situations:
          </Typography>
          <Typography>Benefits</Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                Exercising is great <b>for</b> your health.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I eat a lot of vegetables <b>for</b> the fiber.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>Purpose (with -ing verb)</Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                A helmet is used <b>for</b> protecting your head.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                This tool is used <b>for</b> cutting metal.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>Assisting someone</Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                Could you carry these books <b>for</b> me?
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I can cook <b>for</b> you if you're tired.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>Length of time</Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                We’ve lived here <b>for</b> 2 years.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I can cook <b>for</b> you if you're tired.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" mb={1}>
            {" "}
            When referring to motive/purpose/reason it get's a little
            complicated.
          </Typography>
          <Typography>
            {" "}
            If you follow the preposition with a noun you use <b>for</b>.
          </Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I'm going out <b>for</b> food.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I work hard <b>for</b> you if you're tired.
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            {" "}
            If you follow the preposition with a verb you use <b>to</b>.
          </Typography>
          <List>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                {" "}
                I'm going out <b>to</b> eat.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                I volunteer a lot <b>to</b> help others.
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <QuizForm questionsArray={questionsArray} />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uGkcTdrKjto?si=pV9cqQ09PSeNIdc-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
   
    </>
  );
}
