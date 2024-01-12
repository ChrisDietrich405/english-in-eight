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
  title: "Countable and Uncountable Nouns | English in Eight Minutes",
  description:
    "Learn about countable and uncountable nouns in English with English in Eight Minutes. Understand the differences between them and test your knowledge with a quiz.",
  keywords:
    "English, Countable Nouns, Uncountable Nouns, English grammar, English in Eight Minutes",
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
    title: "Countable and Uncountable Nouns | English in Eight Minutes",
    description:
      "Learn about countable and uncountable nouns in English with English in Eight Minutes. Understand the differences between them and test your knowledge with a quiz.",
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

export default function UncountableAndCountable() {
  const questionsArray = [
    {
      id: 1,
      title: "There _______ many beans in the soup.",
      possibleAnswers: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      userAnswer: "",
      explanation:
        "You can count beans so they are considered a countable noun.",
    },
    {
      id: 2,
      title: "We don't drink ____ coffee.",
      possibleAnswers: [
        { title: " many" },
        { title: " much", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Coffee is a liquid so it's considered an uncountable noun.",
    },
    {
      id: 3,
      title: "I ate _____ soup for lunch.",
      possibleAnswers: [
        { title: " a few" },
        { title: " a little", correctAnswer: true },
      ],
      userAnswer: "",

      explanation:
        "Soup doesn't have a shape so it's considered an uncountable noun.",
    },
    {
      id: 4,
      title: "How _________ rice do we need.",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation: "Rice is very small so it's considered an uncountable noun.",
    },
    {
      id: 5,
      title: "I have ________ friends in Kenya.",
      possibleAnswers: [
        { title: " a few", correctAnswer: true },
        { title: " a little" },
      ],
      userAnswer: "",
      explanation:
        "You can count friends so they are considered a countable noun.",
    },
    {
      id: 6,
      title: "Eating _____ chocolate is unhealthy.",
      possibleAnswers: [
        { title: " a lot of", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation:
        "Chocolate doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 7,
      title: "How ________ soy milk do you want?",
      possibleAnswers: [
        { title: " much", correctAnswer: true },
        { title: " many" },
      ],
      userAnswer: "",
      explanation:
        "Soy milk is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 8,
      title: "______ there tofu in the salad?",
      possibleAnswers: [
        { title: " Are" },
        { title: " Is", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Tofu doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 9,
      title: "How ___________ cups of tea do you drink in the morning?",
      possibleAnswers: [
        { title: " much" },
        { title: " many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count cups so they are considered a countable noun.",
    },

    {
      id: 10,
      title: "There ______ orange juice on the table.",
      possibleAnswers: [
        { title: " is", correctAnswer: true },
        { title: " are" },
      ],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun.",
    },
    {
      id: 11,
      title: "She bought _____ apples for the pie.",
      possibleAnswers: [
        { title: "a few", correctAnswer: true },
        { title: "a little" },
      ],
      userAnswer: "",
      explanation:
        "You can count apples so they are considered a countable noun.",
    },
    {
      id: 12,
      title: "There _________ three cats behind the house.",
      possibleAnswers: [{ title: "are", correctAnswer: true }, { title: "is" }],
      userAnswer: "",
      explanation:
        "You can count cats so they are considered a countable noun.",
    },

    {
      id: 13,
      title: "How ________ water do you need for the recipe?",
      possibleAnswers: [
        { title: "much", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation: "Water is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 14,
      title: "There _______ a lot of sugar in that cake.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation:
        "Sugar doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 15,
      title: "_____ there any apple juice left in the fridge?",
      possibleAnswers: [{ title: "Are" }, { title: "Is", correctAnswer: true }],
      userAnswer: "",
      explanation: "Juice is a liquid so it's considered an uncountable noun.",
    },

    {
      id: 16,
      title: "I need to buy _______ flour.",
      possibleAnswers: [
        { title: "a lot of", correctAnswer: true },
        { title: "many" },
      ],
      userAnswer: "",
      explanation:
        "Flour doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 17,
      title: "How ________ tomatoes did you put in the soup?",
      possibleAnswers: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count tomatoes so they are considered a countable noun.",
    },

    {
      id: 18,
      title: "There _______ a lot traffic on the road this morning.",
      possibleAnswers: [{ title: "is", correctAnswer: true }, { title: "are" }],
      userAnswer: "",
      explanation:
        "Traffic doesn't have a shape so it's considered an uncountable noun.",
    },

    {
      id: 19,
      title: "_____ there any time left before the meeting?",
      possibleAnswers: [{ title: "Are" }, { title: "Is", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "Time is an abstract idea so it's considered an uncountable noun.",
    },

    {
      id: 20,
      title: "How ________ hours of sleep did you get last night?",
      possibleAnswers: [
        { title: "much" },
        { title: "many", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "You can count hours so they are considered a countable noun.",
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
          Countable & Uncountable Nouns
        </Typography>
      </Stack>
      <Stack mb={2}>
        <Typography
          component="h5"
          variant="h5"
        >
          Uncountable Nouns
        </Typography>
        <Typography>
          Uncountable nouns are for nouns we don’t count. These nouns might be
          used to describe abstract ideas , e.g., anger. They can also be used
          for physical objects that are too small , e.g., rice. Uncountable
          nouns can be used for things that don't have shape (powders, liquids,
          gases, etc...).
        </Typography>
      </Stack>
      <Stack>
        <Typography component="h6" variant="h6">
          Examples
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> tea</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> information</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> rice</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> water</ListItemText>
          </ListItem>{" "}
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> happiness</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> knowledge</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> advice</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> air</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText> sugar</ListItemText>
          </ListItem>
        </List>
      </Stack>
      <Stack>
        <Typography sx={{ marginBottom: "15px" }}>
          We can’t use <b>a/an</b> with uncountable nouns. To explain a quantity
          of an uncountable noun, use an expression or word like <b>some</b>,{" "}
          <b>a lot of</b>, <b>much</b>, or else use an exact measurement like{" "}
          <b>a cup of</b>, <b>a bag of</b>,<b> a slice of</b> e.g., a cup of
          coffee. In order to ask about the quantity of an uncountable noun, you
          say <b>"How much?"</b> e.g., How much water do you have?
        </Typography>
      </Stack>
      <Stack>
        <Typography component="h6" variant="h6">
          Examples
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              There isn't a lot of <b>sugar</b> in these cookies.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I need some <b>information</b> about that.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              He didn't have much <b>money</b>.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              How much <b>tea </b>do you want?
            </ListItemText>
          </ListItem>{" "}
        </List>
      </Stack>
      <Typography component="h5" variant="h5">
        Careful!!
      </Typography>
      <Typography sx={{ marginBottom: "15px" }}>
        There are some uncountable nouns that are countable in other languages
        but uncountable in English. Obviously they must follow the rules for
        uncountable nouns. Some common ones are: <b>advice</b>, <b>behavior</b>,{" "}
        <b>bread</b>, <b>furniture</b>, <b>information</b>,<b>time</b>,
        <b>news</b>, <b>stuff</b>, <b>traffic</b>, , <b>trouble</b>,{" "}
        <b>weather</b>, <b>work</b>.
      </Typography>
      <Typography component="h6" variant="h6">
        Examples
      </Typography>
      <List sx={{ marginLeft: "20px" }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            {" "}
            The <b>furniture</b> in this store is very expensive.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            How much<b> bread </b> should I bring?
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            There wasn't a lot of <b>traffic</b> today.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            {" "}
            She gave me some very good <b>advice</b>.
          </ListItemText>
        </ListItem>{" "}
      </List>
      <Typography component="h5" variant="h5">
        Countable Nouns
      </Typography>
      <Typography sx={{ marginBottom: "15px" }}>
        Countable nouns are nouns we can count, e.g., 1 cat, 2 dogs. They have a
        singular and a plural form. The singular form can use "a" or "an". If
        you need to ask about the quantity of a countable noun, you ask "How
        many?" along with the plural countable noun, e.g., How many dogs?
      </Typography>
      <Typography component="h6" variant="h6">
        Examples
      </Typography>
      <List sx={{ marginLeft: "20px" }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            I own <b>a</b> house.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            There were <b>a few</b> fights.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            They need <b>two</b> t-shirts please.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            {" "}
            <b>How many</b> people are at the party?
          </ListItemText>
        </ListItem>{" "}
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            {" "}
            She has <b>six</b> cats. She has <b>six</b> cats.
          </ListItemText>
        </ListItem>{" "}
      </List>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bhgzqbv9Rxk?si=88fwhbkbJoDjm85j"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
