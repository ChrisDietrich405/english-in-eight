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
    "Learn the phrasal verbs put together, drive around, live off of , talk into, go off with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of these important English language constructs.",
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
      "Learn the phrasal verbs put together, drive around, live off of , talk into, go off with English in Eight Minutes. Explore examples and practice exercises to improve your understanding of these important English language constructs.",
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

export default function PhrasalVerbs2() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Phrasal Verbs List Two
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Put together</b> - to assemble, construct something using
              several pieces
              <Typography>
                Example: I bought a desk from the store and now I need to{" "}
                <b>put it together.</b>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Drive around</b> - to drive with no real purpose
              <Typography>
                I love to drive so much that sometimes I just{" "}
                <b>drive around.</b>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Go off (alarm)</b> - when an alarm starts
              <Typography>
                When my alarm goes off in the morning I’m miserable.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Live off of</b> - to be able to survive with a minimum amount
              of something
              <Typography>
                She <b>lives off of </b>$2,000 a month. I don’t know how she
                does it.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Talk into</b> -to persuade someone to do something .
              <Typography>
                Gabriela <b>talked Caio into </b>going to Bahia for their
                vacation.
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
              "I think he could _______________ peanut butter and jelly sandwiches. I always see him eating them.",
            possibleAnswers: [
              { title: "a. live off of", correctAnswer: true },
              { title: "b. talk into" },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "After their fight, she ___________ to clear her head.",
            possibleAnswers: [
              { title: "a. put together" },
              { title: "b. drove around", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I can't believe I let my wife ______________ adopting another cat.",
            possibleAnswers: [
              { title: "a. to go off" },
              { title: "b. talk me into", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "My car alarm is very sensitive. It ___________ if you walk past it.",
            possibleAnswers: [
              { title: "a. puts together" },
              { title: "b. goes off", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "She has to __________________ her new dining room table.",
            possibleAnswers: [
              { title: "a. put together", correctAnswer: true },
              { title: "b. drive around" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
