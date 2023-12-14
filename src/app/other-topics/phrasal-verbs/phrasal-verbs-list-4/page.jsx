import Quiz from "@/src/components/Quiz";

import {
  Container,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "Phrasal Verbs List One | English in Eight Minutes",
  description:
    "Learn phrasal verbs with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of these important English language constructs.",
  keywords: "English, Phrasal Verbs, English grammar, English in Eight Minutes",
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
    title: "Phrasal Verbs List One | English in Eight Minutes",
    description:
      "Learn phrasal verbs with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of these important English language constructs.",
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

export default function PhrasalVerbs4() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Phrasal Verbs List Four
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Ask around</b> - to ask a lot of different people in order to
              get information or help
              <Typography>
                Example: I’m going to <b>ask around</b> to find the best
                mechanic.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Sell out</b> - to no longer have a product available in a store
              because every one of that product was purchased.
              <Typography>
                Example: All the new IPhones were <b>sold out</b> at the Apple
                store.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Look down on</b> - to feel that others are inferior
              <Typography>
                Example: Many rich people <b>look down on</b> poor people.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Come back</b> - to return to the place you are right now
              <Typography>
                Example: I’m leaving soon, but I’m <b>coming right</b> back.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Go back</b> - to return to a place where you aren’t right now
              <Typography>
                Example: I’m <b>going back</b> to Colombia in December.{" "}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1,
            title:
              "She left the office(here), but is __________ in the afternoon.",
            possibleAnswers: [
              { title: "a. selling out" },
              { title: "b. coming back", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title:
              "Many people from the U.S. ______________ immigrants. It's very sad.",
            possibleAnswers: [
              { title: "a. go back" },
              { title: "b. look down on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I hope they don't _____________ of their burritos today. I really want one for lunch.",
            possibleAnswers: [
              { title: "a. come back" },
              { title: "b. sell out", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "He's not ______________ to Algeria this year. He's staying in the U.S.",
            possibleAnswers: [
              { title: "a. asking around" },
              { title: "b. going back", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title:
              "You need a good interior designer for your new house? I can __________ for you.",
            possibleAnswers: [
              { title: "a. sell out" },
              { title: "b. ask around", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
