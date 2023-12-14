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

export default function PhrasalVerbs1() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Phrasal Verbs List One
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Take up</b> - occupy time, space, or attention
              <Typography>
                Example: Sorry for asking so many questions. I didn't want to{" "}
                <b>take up</b> so much of your time.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Fed up with</b> - annoyed or upset at a situation or treatment
              <Typography>
                Example: He was <b>fed up with</b> doing all the work.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Talk it out</b> - to resolve a fight, disagreement,
              misunderstanding through talking
              <Typography>
                Example: The day after the fight my wife and I{" "}
                <b>talked it out</b> and now we are fine.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Hit it off</b> - to immediately have a good relationship when
              meeting someone new
              <Typography>
                Example: I met my new boss today and we <b>hit it off</b> from
                the start. I’m so happy.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Cheat on</b> - to be unfaithful to your romantic partner, or
              when being dishonest when taking tests
              <Typography>
                Example: Skylar <b>cheated on</b> Walter (she had sex with her
                boss).
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
              "My daughter really ___________ with her new roommate. She's very excited.",
            possibleAnswers: [
              { title: "a. cheat on" },
              { title: "b. hit it off", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "After _________________ they went on a romantic date.",
            possibleAnswers: [
              { title: "a. cheating on" },
              { title: "b. talking it out", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title: "My shoes ________________ a lot of space in my closet.",
            possibleAnswers: [
              { title: "a. take up", correctAnswer: true },
              { title: "b. fed up with" },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "He ____________ his math test and got caught by the teacher.",
            possibleAnswers: [
              { title: "a. hit it off" },
              { title: "b. cheated on", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "I'm ________________ my boss. She's such a jerk.",
            possibleAnswers: [
              { title: "a. fed up with", correctAnswer: true },
              { title: "b. talking it out" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
