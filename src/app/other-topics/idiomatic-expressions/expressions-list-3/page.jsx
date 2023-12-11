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

export default function Expressions3() {
  return (
    <>
      <Container>
        <Stack>
          <Typography
            mb={2}
            component="h1"
            variant="h1"
            sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
          >
            Idiomatic Expressions List Three
          </Typography>
        </Stack>

        <Stack>
          <List sx={{ marginLeft: "20px" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>If it’s not broke don’t fix it</b> - when a situation is
                going well it's a bad idea to interfere with it
                <br />
                <Typography>
                  Example: My refrigerator was making a very small noise, but it
                  was working. I was about to investigate with a screwdriver
                  when my wife said "leave it alone.{" "}
                  <b>If it’s not broke don’t fix it</b>".
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Read someone’s mind</b> - to guess correctly what someone is
                thinking
                <br />
                <Typography>
                  Example: When I told my wife that we should order Chinese she
                  said "Wow! <b>You read my mind</b>. That’s exactly what I
                  wanted to have for dinner."
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Spread the word</b> - to help a business by telling other
                people about it
                <br />
                <Typography>
                  Example: I ask my students to please <b>spread the word</b>{" "}
                  about my English grammar website.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Measure twice cut once</b> - to double check your work before
                making a final decision
                <br />
                <Typography>
                  Example: I have to go back to Lowe's because I cut the wrong
                  size. <b>"Measure twice, cut once" </b>should be my new motto!
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Binge watch</b> - watching a lot of episodes of a series in a
                short period of time
                <br />
                <Typography>
                  Example: Over the weekend I <b>binge watched</b> Breaking Bad.
                  I watched the first three seasons.
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
                "Check your final numbers before you submit them to the boss. Remember the saying ______________.",
              possibleAnswers: [
                { title: "a. spread the word" },
                { title: "b. measure twice, cut once", correctAnswer: true },
              ],
              userAnswer: "",
            },
            {
              id: 2,
              title:
                "Would you please help me to ________________ about my new restaurant.",
              possibleAnswers: [
                { title: "a. spread the word", correctAnswer: true },
                { title: "b. binge watch" },
              ],
              userAnswer: "",
            },
            {
              id: 3,
              title:
                "I told my wife that we should watch the movie Love and Basketball. She responded 'you ________________! I wanted to watch that tonight too'.",
              possibleAnswers: [
                { title: "a. read my mind", correctAnswer: true },
                { title: "b. if it's not broke don't fix it" },
              ],
              userAnswer: "",
            },
            {
              id: 4,
              title:
                "I don't like watching series, because sometimes I get addicted to one and ________________ it.",
              possibleAnswers: [
                { title: "a. spread the word" },
                { title: "b. binge watch", correctAnswer: true },
              ],
              userAnswer: "",
            },
            {
              id: 5,
              title:
                "My wife wanted to change her resume, but I thought it was perfect the way it was so I told her _______________.",
              possibleAnswers: [
                { title: "a. read my mind" },
                {
                  title: "b. if it's not broke don't fix it",
                  correctAnswer: true,
                },
              ],
              userAnswer: "",
            },
          ]}
        ></Quiz>
      </Container>
    </>
  );
}
