import Quiz from "@/src/components/Quiz";

import {
  Container,
  Box,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "Idiomatic Expressions | English in Eight Minutes",
  description:
    "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
  keywords:
    "English, Idiomatic Expressions, English idioms, English in Eight Minutes",
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
    title: "Idiomatic Expressions | English in Eight Minutes",
    description:
      "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
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

export default function Expressions1() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Idiomatic Expressions List One
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Time is money</b> - time is a valuable resource, therefore it
              is better to do things as quickly as possible
              <br />
              <Typography>
                Example: Come on hurry up! <b>Time is money.</b>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Foolproof</b> - incapable of going wrong or being misused
              <br />
              <Typography>
                Example: I have a <b>foolproof</b> security system. As dumb as I
                am even I'm able to use it.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Out of nowhere</b> - appearing or happening suddenly and
              unexpectedly
              <br />
              <Typography>
                Example: The car came <b>out of nowhere</b> and hit our van.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>To one up someone</b> - to make a point of outdoing,
              outperforming, outclassing, etc., someone
              <br />
              <Typography>
                Example: I hate telling stories around Marcus because he always
                tries <b>to one up</b> you with some amazing story of his own.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>It's better to be safe than sorry</b> - it’s better to be
              careful now so that problems do not occur later on
              <br />
              <Typography>
                Example: It's probably not necessary to check the numbers again,
                but <b>it's better to be safe than sorry.</b>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            id: 1,
            title:
              "She started yelling at me and honestly it scared me. It came _______________.",
            possibleAnswers: [
              { title: "a. to one up someone" },
              { title: "b. out of nowhere ", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "Let's go! Hurry up! ____________.",
            possibleAnswers: [
              { title: "a. To one up someone" },
              { title: "b. Time is money", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I bought a face shield and a mask because I don't want to take any chances. _____________.",
            possibleAnswers: [
              { title: "a. Foolproof" },
              {
                title: "b. It's better to be safe than sorry",
                correctAnswer: true,
              },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title: "He tried to invent a _________ piece of software.",
            possibleAnswers: [
              { title: "a. out of nowhere" },
              { title: "b. foolproof", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title:
              "I can tell he's insecure. He's always explaining how much better his life is compared to mine and trying ____________.",
            possibleAnswers: [
              { title: "a.  to one up me", correctAnswer: true },
              { title: "b. time is money" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
