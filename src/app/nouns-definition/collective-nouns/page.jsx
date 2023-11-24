import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Collective Nouns | English in Eight Minutes",
  description:
    "Learn about collective nouns in English with English in Eight Minutes. Understand how collective nouns work and test your knowledge with a quiz.",
  keywords:
    "English, Collective Nouns, English grammar, English in Eight Minutes",
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
    title: "Collective Nouns | English in Eight Minutes",
    description:
      "Learn about collective nouns in English with English in Eight Minutes. Understand how collective nouns work and test your knowledge with a quiz.",
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

export default function Collective() {
  const questionsArray = [
    {
      id: 1,
      title: "The students __________ fighting in the cafeteria.",
      possibleAnswers: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      explanation:
        "Students are considered individuals, not a collective group.",
      userAnswer: "",
    },
    {
      id: 2,
      title: "The group __________ decided together to file the petition.",
      possibleAnswers: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      explanation: "Group is considered a collective noun. ",
      userAnswer: "",
    },
    {
      id: 3,
      title:
        "The United States army _____________ a budget much larger than any other countries.",
      possibleAnswers: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      explanation: "Army is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 4,
      title: "My sisters ____________ to go to the beach this weekend.",
      possibleAnswers: [
        { title: "want", correctAnswer: true },
        { title: "wants" },
      ],
      explanation:
        "Sisters are considered individuals, not a collective group.",
      userAnswer: "",
    },
    {
      id: 5,
      title: "___________ the parents' committee made a decision?",
      possibleAnswers: [
        { title: "Has", correctAnswer: true },
        { title: "Have" },
      ],
      explanation: "Committee is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 6,
      title: "___________ any of the soldiers hurt?",
      possibleAnswers: [
        { title: "Was" },
        { title: "Were", correctAnswer: true },
      ],
      explanation:
        "Soldiers are considered individuals, not a collective group.",
      userAnswer: "",
    },
    {
      id: 7,
      title: "That team __________ every game.",
      possibleAnswers: [
        { title: "wins", correctAnswer: true },
        { title: "win" },
      ],
      explanation: "Team is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 8,
      title:
        "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
      possibleAnswers: [
        { title: "was" },
        { title: "were", correctAnswer: true },
      ],
      explanation:
        "Members are considered individuals, not a collective group.",
      userAnswer: "",
    },
    {
      id: 9,
      title: "The school choir ______________ won many competitions.",
      possibleAnswers: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      explanation: "Choir is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 10,
      title:
        "His family ______________ very big. He has 10 uncles and 11 aunts.",
      possibleAnswers: [{ title: "are" }, { title: "is", correctAnswer: true }],
      explanation: "Family is considered a collective noun.",
      userAnswer: "",
    },
    {
      id: 11,
      title: "The team __________ celebrating their victory.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Team is considered a collective noun.",
    },
    {
      id: 12,
      title: "The committee __________ discussing the new proposal.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Committee is considered a collective noun.",
    },
    {
      id: 13,
      title: "The people at the store __________ very angry.",
      possibleAnswers: [{ title: "are", correctAnswer: true }, { title: "is" }],
      userAnswer: "",
      explanation: "People is not considered a collective noun.",
    },
    {
      id: 14,
      title: "The jury __________ reached a unanimous decision.",
      possibleAnswers: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      userAnswer: "",
      explanation: "Jury is considered a collective noun.",
    },
    {
      id: 15,
      title: "The swarm of bees __________ buzzing around the flowers.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Swarm is considered a collective noun.",
    },
    {
      id: 16,
      title: "The orchestra __________ performing at the concert.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Orchestra is considered a collective noun.",
    },
    {
      id: 17,
      title: "The students ___________ not in the class.",
      possibleAnswers: [
        { title: "were", correctAnswer: true },
        { title: "was" },
      ],
      userAnswer: "",
      explanation: "Students is not considered a collective noun.",
    },
    {
      id: 18,
      title: "His family __________ planning a reunion.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Family is considered a collective noun.",
    },
    {
      id: 19,
      title: "Her staff __________ working hard this week.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation: "Staff is considered a collective noun.",
    },
    {
      id: 20,
      title: "The audience __________ clapping.",
      possibleAnswers: [{ title: "are" }, { title: "is", correctAnswer: true }],
      userAnswer: "",
      explanation: "Audience is considered a collective noun.",
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
          Collective Nouns
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
          Collective nouns are nouns which represent a group of people or
          things. They include words such as <b>audience</b>, <b>family</b>,{" "}
          <b>government</b>, <b>group</b>, and <b>team</b>. Most collective
          nouns are treated as a singular entity, using the singular verb form.
          Because collective nouns include multiple "members" inside of them you
          may think you would use the "they" form of the verb, but you don't.
          For example, you don't say the group <b>are</b> happy, you say the
          group <b>is</b> happy.
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
              The U.S. <b>government</b> is made up of 3 branches.
            </ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              This hockey <b>team</b> includes three players from Canada.
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              Our <b>class</b> takes a field trip to the natural history museum
              every year.
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              My <b>family</b> is important to me.
            </ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>
              {" "}
              The city <b>council</b> is rejecting the proposal.
            </ListItemText>
          </ListItem>
        </List>
        <Typography component="h5" variant="h5">
          CAUTION! This lesson is extremely hard. Some questions include
          collective nouns, some don't. Don't worry if you are not successful
          the first two or three times with the exercise. Practice Makes
          Perfect.
        </Typography>
      </Box>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BPPsqCGrYWw?si=of1j_EmmyDulr696"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
