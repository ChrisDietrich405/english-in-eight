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
  title: "Every versus All | English in Eight Minutes",
  description:
    "Learn about the differences between 'every' and 'all' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
  keywords:
    "English, Every versus All, English grammar, Countable Nouns, Uncountable Nouns, English in Eight Minutes",
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
    title: "Every versus All | English in Eight Minutes",
    description:
      "Learn about the differences between 'every' and 'all' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
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

export default function EveryVersusAll() {
  const questionsArray = [
    {
      id: 1,
      title: "I emailed ___________ my colleagues.",
      possibleAnswers: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      explanation: "All describes the complete group of colleagues.",
      userAnswer: "",
    },
    {
      id: 2,
      title: "_________ the cars on the street have been vandalized.",
      possibleAnswers: [
        { title: "Every" },
        { title: "All", correctAnswer: true },
      ],
      explanation: "All describes the complete group of cars.",
      userAnswer: "",
    },
    {
      id: 3,
      title: "I see them ______________ Monday.",
      possibleAnswers: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      explanation: "Every describes the individual day.",
      userAnswer: "",
    },

    {
      id: 4,
      title: "___________ children need love.",
      possibleAnswers: [
        { title: "All", correctAnswer: true },
        { title: "Every" },
      ],
      explanation: "All describes the complete group of colleagues",
      userAnswer: "",
    },
    {
      id: 5,
      title: "I go to the gym __________ day.",
      possibleAnswers: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      explanation: "Every describes the individual day.",
      userAnswer: "",
    },
    {
      id: 6,
      title: "She has invited ____________ her friends.",
      possibleAnswers: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      explanation: "All describes the complete group of friends",
      userAnswer: "",
    },
    {
      id: 7,
      title: "People should go to their doctor ______________ year.",
      possibleAnswers: [
        { title: "every", correctAnswer: true },
        { title: "all" },
      ],
      explanation: "Every describes the individual year.",
      userAnswer: "",
    },
    {
      id: 8,
      title: " I talk to my wife ____________ day.",
      possibleAnswers: [
        { title: "every", correctAnswer: true },
        { title: "all" },
      ],
      explanation: "Every describes the individual days.",
      userAnswer: "",
    },
    {
      id: 9,
      title: "She has worked for this company ___________ her life.",
      possibleAnswers: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      explanation: "All describes her entire, complete life.",
      userAnswer: "",
    },
    {
      id: 10,
      title: " I have washed ___________ the clothes except yours.",
      possibleAnswers: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      explanation: "All describes the complete amount of clothes",
      userAnswer: "",
    },
    {
      id: 11,
      title: "She baked cookies for _______________ her classmates.",
      possibleAnswers: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      explanation: "All describes the complete group of classmates.",
      userAnswer: "",
    },
    {
      id: 12,
      title: "___________ students must pass the final exam.",
      possibleAnswers: [
        { title: "All", correctAnswer: true },
        { title: "Every" },
      ],
      explanation: "All describes the complete group of students.",
      userAnswer: "",
    },
    {
      id: 13,
      title: "I visit my grandparents ____________ Sunday.",
      possibleAnswers: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      explanation: "Every describes the individual day.",
      userAnswer: "",
    },
    {
      id: 14,
      title:
        "She knows _____________ the capitals of all the African countries.",
      possibleAnswers: [
        { title: "every" },
        { title: "all", correctAnswer: true },
      ],
      explanation: "All describes the complete set of capitals.",
      userAnswer: "",
    },
    {
      id: 15,
      title: "_____________ the trees in the park have colorful leaves.",
      possibleAnswers: [
        { title: "All", correctAnswer: true },
        { title: "Every" },
      ],
      explanation: "All describes the complete group of trees.",
      userAnswer: "",
    },
    {
      id: 16,
      title: "I exercise _____________ morning.",
      possibleAnswers: [
        { title: "every", correctAnswer: true },
        { title: "all" },
      ],
      explanation: "Every describes the individual morning.",
      userAnswer: "",
    },
    {
      id: 17,
      title: "They attend church ____________ Sunday.",
      possibleAnswers: [
        { title: "all" },
        { title: "every", correctAnswer: true },
      ],
      explanation: "Every describes the individual Sunday.",
      userAnswer: "",
    },
    {
      id: 18,
      title: "I've read _______________ the books on that shelf.",
      possibleAnswers: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      explanation: "All describes the complete set of books.",
      userAnswer: "",
    },
    {
      id: 19,
      title: "_____________ employees need to complete the training.",
      possibleAnswers: [
        { title: "All", correctAnswer: true },
        { title: "Every" },
      ],
      explanation: "All describes the complete group of employees.",
      userAnswer: "",
    },
    {
      id: 20,
      title:
        "I have traveled to _______________ the continents except Antarctica.",
      possibleAnswers: [
        { title: "all", correctAnswer: true },
        { title: "every" },
      ],
      explanation: "All describes the complete continents except Antarctica.",
      userAnswer: "",
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
          Every versus All
        </Typography>
      </Stack>
      <Stack>
        <Typography>
          We use both <b>every</b> and <b>all</b> to describe a total number of
          something. Every describes each member of a complete group. All
          describes a complete group.
        </Typography>
      </Stack>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> The food was sent to all students.</ListItemText>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> The food was sent to every student.</ListItemText>
          </ListItem>
        </List>
        <Typography>
          {" "}
          In some situations we use <b>all </b>on its own. We can also use
          everyone/everybody/everything.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              The bingo event is at the park. It starts at 4 and all are
              welcome.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              The bingo event is at the park. It starts at 4 and everyone is
              welcome.
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          {" "}
          We can use <b>every</b> to focus on each individual member.
        </Typography>
        <Typography>Compare:</Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              All attendees need to silence their phones. (describes the entire
              group)
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Every attendee needs to silence their phones. (describes the
              individuals )
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          We use <b>every </b> with singular entitites and <b>all</b> with
          uncountable and plural nouns
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> Every payment is due today.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>All payments are due today.</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography component="h4">
        {" "}
        Hint! Remember that <b>all</b> is usually used with plural nouns (all
        students) and <b>every</b> is usually used with singular nouns (every
        car).
      </Typography>

      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JKBUvNihqoQ?si=mwysdj3EsPO9pT-4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
