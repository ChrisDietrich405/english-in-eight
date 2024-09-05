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
  title: "Talk versus Speak | English in Eight Minutes",
  description:
    "Learn when to use 'talk' and 'speak' in English with English in Eight Minutes. Understand the differences between these words and test your knowledge with a quiz.",
  keywords:
    "English, Talk versus Speak, English grammar, Vocabulary, English in Eight Minutes",
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
    title: "Talk versus Speak | English in Eight Minutes",
    description:
      "Learn when to use 'talk' and 'speak' in English with English in Eight Minutes. Understand the differences between these words and test your knowledge with a quiz.",
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

export default function TalkVersusSpeaking() {
  const questionsArray = [
    {
      id: 1,
      title: "It was a fascinating __________.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is a noun here.",
    },
    {
      id: 2,
      title: "We tried to  ___________ it out, but after we fought more.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Talk is used in the phrasal verb talk it out meaning to resolve a problem by talking about it.",
    },
    {
      id: 3,
      title: "Well Bia, I’ll  ___________ to you tomorrow.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
    },
    {
      id: 4,
      title: "It's only __________. They'll never fire us.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is a noun here.",
    },
    {
      id: 5,
      title: "________ up! Nobody can hear you.",
      possibleAnswers: [
        { title: "Speak", correctAnswer: true },
        { title: "Talk" },
      ],
      userAnswer: "",
      explanation:
        "Speak is used in the phrasal verb speak up meaning to speak louder.",
    },
    {
      id: 6,
      title: "They only ever  ________ about basketball.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
    },
    {
      id: 7,
      title: "We ________ today with Denzel St. Clair and Robert Smith.",
      possibleAnswers: [
        { title: "spoke", correctAnswer: true },
        { title: "talked" },
      ],
      userAnswer: "",
      explanation: "Speak is used in more formal situations.",
    },
    {
      id: 8,
      title: "After breakfast we always go for a walk and ________ .",
      possibleAnswers: [
        { title: "talk", correctAnswer: true },
        { title: "speak" },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
    },
    {
      id: 9,
      title: "Hello, could I ________ with Mrs. Jones?",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation: "Speak is used in more formal situations.",
    },
    {
      id: 10,
      title: "She ____ four languages.",
      possibleAnswers: [
        { title: "speaks", correctAnswer: true },
        { title: "talks" },
      ],
      userAnswer: "",
      explanation: "Speak is used when referring to languages.",
    },
    {
      id: 11,
      title: "I need to ________ to the manager about this issue.",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation:
        "In formal situations, 'speak' is often preferred when addressing higher authorities.",
    },
    {
      id: 12,
      title: "Let's sit down and  ________ over a cup of coffee.",
      possibleAnswers: [
        { title: "speak" },
        { title: "talk", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "In casual contexts, 'talk' is commonly used.",
    },
    {
      id: 13,
      title: "I don't really want to _______ about it with my mom.",
      possibleAnswers: [
        { title: "talk", correctAnswer: true },
        { title: "speak" },
      ],
      userAnswer: "",
      explanation: "Talk is used in more informal situations.",
    },
    {
      id: 14,
      title:
        "We should ________ to the professor after class for clarification.",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation: "In a formal business context, 'speak' is used.",
    },
    {
      id: 15,
      title: "Can you ________ a foreign language fluently?",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation:
        "To indicate language proficiency, 'speak' is typically used.",
    },
    {
      id: 16,
      title: "He sometimes ________ too much when he's nervous.",
      possibleAnswers: [
        { title: "speaks" },
        { title: "talks", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Talk is used in informal settings.",
    },
    {
      id: 17,
      title:
        "During the meeting, the CEO will ________ about the company's future plans.",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation: "In a formal business context, 'speak' is used.",
    },
    {
      id: 18,
      title: "She can ________ three languages fluently.",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation:
        "When discussing language skills, 'speak' is the appropriate choice.",
    },
    {
      id: 19,
      title: "Please ________ up if you have any questions during the lecture.",
      possibleAnswers: [
        { title: "speak", correctAnswer: true },
        { title: "talk" },
      ],
      userAnswer: "",
      explanation:
        "Speak is used in the phrasal verb speak up meaning to speak louder.",
    },
    {
      id: 20,
      title: "They can ________ for hours about politics.",
      possibleAnswers: [
        { title: "talk", correctAnswer: true },
        { title: "speak" },
      ],
      userAnswer: "",
      explanation: "In casual conversations, 'talk' is used.",
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
          Talk versus Speak
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="h6" mb={2}>
          The verbs talk and speak both have the meaning ‘say words’, but they
          are used differently depending on context. For example speak is more
          formal than talk. Talk, on the other hand focuses on a speaker and at
          least one listener, and can mean 'have a conversation'.
        </Typography>
      </Stack>
      <Box component="section">
        <Typography>
          {" "}
          We use talk for more informal situations and speak for more formal
          situations:
        </Typography>

        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Dante will talk to the group about the benefits of meditation.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              The president will speak shortly to her advisors.
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          We normally use <b>to</b> after talk and speak. We can also use{" "}
          <b>with</b>:
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>Could I talk to you for a moment?</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>The director needs to speak to you.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              She spoke with the general for an hour.{" "}
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>I talked with her about it.</ListItemText>
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
            <ListItemText>He gave a great talk (noun) about diet.</ListItemText>
          </ListItem>
        </List>
      </Box>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6XluP9xKHEc?si=U5eIJAu3WozD0HVY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
