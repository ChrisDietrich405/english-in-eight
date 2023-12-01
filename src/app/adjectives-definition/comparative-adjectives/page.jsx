import QuizForm from "@/src/components/QuizForm";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Comparative Adjectives | English in Eight Minutes",
  description:
    "Learn about comparative adjectives in English with English in Eight Minutes. Understand the rules for forming comparative adjectives and test your knowledge with a quiz.",
  keywords:
    "English, Comparative Adjectives, Test, English grammar, English in Eight Minutes",
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
    title: "Comparative Adjectives | English in Eight Minutes",
    description:
      "Learn about comparative adjectives in English with English in Eight Minutes. Understand the rules for forming comparative adjectives and test your knowledge with a quiz.",
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

export default function ComparativeAdjectives() {
  const questionsArray = [
    {
      id: 1,
      title:
        "My Latin class is ______________ (interesting) than my English class. ",
      possibleAnswers: [
        { title: "more interesting", correctAnswer: true },
        { title: "interestinger" },
      ],
      userAnswer: "",
      explanation: "Interesting is three syllables so you must use more.",
    },

    {
      id: 2,
      title: "Marcus is ______________ (old) than Nia.",
      possibleAnswers: [
        { title: "older", correctAnswer: true },
        { title: "more old" },
      ],
      userAnswer: "",
      explanation:
        "Old is one syllable so you can add er to form the comparative.",
    },
    {
      id: 3,
      title: "She is ______________(quiet) than her brother.",
      possibleAnswers: [
        { title: "quietter" },
        { title: "quieter", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Quiet doesn't have any spelling changes.",
    },

    {
      id: 4,
      title: "Buses are ________________ (large) than cars.",
      possibleAnswers: [
        { title: "largger" },
        { title: "larger", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Large doesn't have any spelling changes.",
    },

    {
      id: 5,
      title: "The roads here are  _______________ (narrow) than in Baltimore.",
      possibleAnswers: [
        { title: "narrower", correctAnswer: true },
        { title: "narroest" },
      ],
      userAnswer: "",
      explanation:
        "Narrow is a two syllable adjective that you can add er for the comparative form.",
    },
    {
      id: 6,
      title: "Dogs are _______________ (social) than cats",
      possibleAnswers: [
        { title: "more social", correctAnswer: true },
        { title: "socialer" },
      ],
      userAnswer: "",
      explanation:
        "Social is a two syllable adjective that you can add er for the comparative form.",
    },
    {
      id: 7,
      title: "Malcolm is _______________ (busy) than his brother.",
      possibleAnswers: [
        { title: "busier", correctAnswer: true },
        { title: "busyer" },
      ],
      userAnswer: "",
      explanation:
        "Busy is a two syllable adjective that you can add er for the comparative form and has a spelling change.",
    },
    {
      id: 8,
      title: "Demetrius is ________________ (ambitious) than his friends.",
      possibleAnswers: [
        { title: "ambitiouser" },
        { title: "more ambitious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Ambitious is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 9,
      title:
        "My studio is  ________________  (colorful) than my art teacher's studio.",
      possibleAnswers: [
        { title: "colorfuler" },
        { title: "more colorful", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Colorful is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 10,
      title: "Her car is _______________ (comfortable) than my car.",
      possibleAnswers: [
        { title: "more comfortable", correctAnswer: true },
        { title: "comfortabler" },
      ],
      userAnswer: "",
      explanation:
        "Comfortable is a three syllable adjective so you can't use more er the comparative form.",
    },
    {
      id: 11,
      title: "The movie was ______________ (exciting) than I expected.",
      possibleAnswers: [
        { title: "more exciting", correctAnswer: true },
        { title: "excitinger" },
      ],
      userAnswer: "",
      explanation: "Exciting is three syllables, so you must use 'more.'",
    },

    {
      id: 12,
      title: "Sophia is ______________ (short) than her sister.",
      possibleAnswers: [
        { title: "shorter", correctAnswer: true },
        { title: "more short" },
      ],
      userAnswer: "",
      explanation:
        "Short is one syllable, so you can add er. More short isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 13,
      title: "He is eating _________ (little) food.",
      possibleAnswers: [
        { title: "less", correctAnswer: true },
        { title: "littler" },
      ],
      userAnswer: "",
      explanation:
        "Little is an irregular adjective. Less is the comparative form and you can't say more good.",
    },

    {
      id: 14,
      title:
        "This book is ______________ (interesting) than the one I read last week.",
      possibleAnswers: [
        { title: "more interesting", correctAnswer: true },
        { title: "interestinger" },
      ],
      userAnswer: "",
      explanation: "Interesting is three syllables, so you must use 'more.'",
    },

    {
      id: 15,
      title: "Macs are ______________ (good) than Lenovo.",
      possibleAnswers: [
        { title: "better", correctAnswer: true },
        { title: "more good" },
      ],
      userAnswer: "",
      explanation:
        "Good is an irregular adjective. Better is the comparative form and you can't say more good.",
    },

    {
      id: 16,
      title: "Julia is ______________ (tall) than her brother.",
      possibleAnswers: [
        { title: "taller", correctAnswer: true },
        { title: "more tall" },
      ],
      userAnswer: "",
      explanation:
        "Tall is one syllable, so you can add er. More tall isn't technically incorrect, but it sounds strange.",
    },

    {
      id: 17,
      title: "The city is ______________ (crowded) during rush hour.",
      possibleAnswers: [
        { title: "more crowded", correctAnswer: true },
        { title: "crowdeder" },
      ],
      userAnswer: "",
      explanation:
        "Crowded is a two syllable adjective that can't use er at the end in the comparative.",
    },

    {
      id: 18,
      title: "The test was ______________ (difficult) than I expected.",
      possibleAnswers: [
        { title: "more difficult", correctAnswer: true },
        { title: "difficulter" },
      ],
      userAnswer: "",
      explanation: "Difficult is three syllables, so you must use 'more.'",
    },

    {
      id: 19,
      title: "Jazz music is ______________ (relaxing) than rock.",
      possibleAnswers: [
        { title: "more relaxing", correctAnswer: true },
        { title: "relaxinger" },
      ],
      userAnswer: "",
      explanation: "Relaxing is three syllables, so you must use 'more.'",
    },

    {
      id: 20,
      title:
        "The new restaurant is ______________ (cheap) than the one we used to go to.",
      possibleAnswers: [
        { title: "cheaper", correctAnswer: true },
        { title: "more cheap" },
      ],
      userAnswer: "",
      explanation:
        "Cheap is one syllable, so you can add er. More cheap isn't technically incorrect, but it sounds strange.",
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
          Comparative Adjectives
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
          To make the comparative form ('stronger' or 'more delicious'), the
          first thing we need to know is the number of syllables in the
          adjective.
        </Typography>
      </Stack>
      <Box>
        <Typography variant="h5">Adjectives with only one syllable</Typography>
        <Typography>
          Normally if an adjective has one syllable, we add 'er' to make the
          comparative form.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> smart → smarter</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> fast → faster</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> tall → taller</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> old → older</ListItemText>
          </ListItem>
        </List>
        <Typography>
          There are some spelling changes. If the adjective ends in 'e', we
          don't add another 'e', just 'r'.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> brave → braver</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> safe → safer</ListItemText>
          </ListItem>
        </List>

        <Typography>
          If there is one vowel followed by one consonant at the end of the
          adjective, we often double the consonant.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> sad → sadder</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>hot → hotter</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> big → bigger</ListItemText>
          </ListItem>
        </List>

        <Typography>
          There are some adjectives that we need to use 'more' with, even though
          they only have one syllable. Adding -er is incorrect for these verbs.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>real → more real (NOT realer)</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>fun → more fun (NOT funner)</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText> big → bigger</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h5">Adjectives with two syllables</Typography>
        <Typography>Some adjectives with two syllables use 'more'.</Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>thoughtful → more thoughtful</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>peaceful → more peaceful</ListItemText>
          </ListItem>
        </List>

        <Typography>
          However, some two syllable adjectives can use 'er'.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>quiet → quieter</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>cruel → crueler</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>simple → simpler</ListItemText>
          </ListItem>
        </List>

        <Typography>
          For adjectives with two syllables that end in 'y' we normally add 'er'
          (y generally changes to i).
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>funny → funnier</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>happy → happier</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>ugly → uglier</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>silly → sillier</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h5">
          Adjectives that have more than two syllables
        </Typography>
        <Typography>
          Adjectives that have more than two syllables need to use 'more' to
          form their comparative.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>delicious → more delicious</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>interesting → more interesting</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>exotic → more exotic</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>intelligent → more intelligent</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h5">Irregular adjectives</Typography>
        <Typography>
          There are also some irregular adjectives. We simply need to memorize
          them.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>good → better</ListItemText>
          </ListItem>

          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>bad → worse</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>far → further</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>little → less</ListItemText>
          </ListItem>
          <ListItem
            className={styles.page_examples}
            sx={{ display: "list-item" }}
          >
            <ListItemText>much → more</ListItemText>
          </ListItem>
        </List>
      </Box>

      <QuizForm questionsArray={questionsArray} />
    </Container>
  );
}
