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

export default function Expressions4() {
  return (
    <main>
      <Container>
        <Stack>
          <Typography
            mb={2}
            component="h1"
            variant="h1"
            sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
          >
            Idiomatic Expressions List Four
          </Typography>
        </Stack>

        <Stack>
          <List sx={{ marginLeft: "20px" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Cold calling</b> - make an unsolicited call to (someone), by
                phone or in person, in an attempt to sell goods or services
                <br />
                <Typography>
                  Example: I hate <b>cold calling</b>. I never get any sales
                  from it.{" "}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>B movie</b> - a low-budget commercial movie
                <br />
                <Typography>
                  Example: My friends and I like to watch <b>B movies</b>. We
                  like making fun of them.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>You had to be there</b> - when retelling a funny story that
                isn’t as funny when being told
                <br />
                <Typography>
                  Example: After I told my mom what happened, she didn’t laugh
                  at all and so I said <b>“you had to be there".</b>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>(Period of time) tops</b> - the longest time something will
                take to finish
                <br />
                <Typography>
                  Example: I’ll finish this website in <b>one week tops.</b>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <b>Ahead of schedule</b> - earlier than planned or expected
                <br />
                <Typography>
                  Example: They finished the project 2 weeks{" "}
                  <b>ahead of schedule.</b>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Container>

      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1,
            title: "Why didn't you laugh at my story? ____________________.",
            possibleAnswers: [
              { title: "a. I guess it was ahead of schedule" },
              { title: "b. I guess you had to be there", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "__________ is a very ineffective way to get sales.",
            possibleAnswers: [
              { title: "a. B movie" },
              { title: "b. Cold calling", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "I actually like ___________. They are so bad they make me laugh.",
            possibleAnswers: [
              { title: "a. Cold calling" },
              { title: "b. B movies", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title: "The project will be finished in 3 weeks ________.",
            possibleAnswers: [
              { title: "a. you had to be there" },
              { title: "b. tops", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "Hopefully we can finish the project ________________.",
            possibleAnswers: [
              { title: "a. tops" },
              { title: "b. ahead of schedule", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </main>
  );
}
