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

export default function PhrasalVerbs3() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Phrasal Verbs List Three
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Think over</b> - to think deeply about a decision before you
              make it
              <Typography>
                Example: Can I <b>think it over</b> and tell you my answer
                tomorrow?{" "}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Put up with</b> - tolerate
              <Typography>
                Example: He couldn’t <b>put up with</b> his boss anymore so he
                quit.{" "}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Fall for</b> - To either become infatuated with or fall in love
              with someone
              <Typography>
                Example: I <b>fell for</b> her pretty quickly.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Take apart</b> - to disassemble
              <Typography>
                Example: We needed to <b>take apart</b> the desk in order to
                take it out of the room.{" "}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Build up</b> - to increase in intensity.
              <Typography>
                Example: They had a big fight after the tension between them{" "}
                <b>built up</b>.{" "}
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
            title: "I need to _______________ our bed before we move.",
            possibleAnswers: [
              { title: "a. take apart", correctAnswer: true },
              { title: "b. build up" },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title: "He ________________ her during their first date.",
            possibleAnswers: [
              { title: "a. put up with" },
              { title: "b. fell for", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "It's a great job offer, but because it means moving I need to __________.",
            possibleAnswers: [
              { title: "a. build up" },
              { title: "b. think it over", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "I'm going to tell her how I feel today. It's better than letting things _______________.",
            possibleAnswers: [
              { title: "a. take apart" },
              { title: "b. build up", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title: "She couldn't _____________ her job anymore so she quit.",
            possibleAnswers: [
              { title: "a. think over" },
              { title: "b. put up with", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
