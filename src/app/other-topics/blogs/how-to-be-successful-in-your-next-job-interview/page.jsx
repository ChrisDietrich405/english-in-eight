import React from "react";
import Image from "next/image";

import styles from "../../../styles/blogs.module.css";

import {
  Container,
  Card,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "How to be Successful in Your Next Job Interview",
  description:
    "Discover strategies to enhance your job interview skills and increase your chances of landing your dream job. Learn about confidence, attention to details, studying job descriptions, physical presence, asking questions, and the importance of practice.",
  keywords:
    "Job Interview, Interview Skills, Confidence, Attention to Details, Job Description, Physical Presence, Asking Questions, Practice",
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
    title: "How to be Successful in Your Next Job Interview",
    description:
      "Discover strategies to enhance your job interview skills and increase your chances of landing your dream job. Learn about confidence, attention to details, studying job descriptions, physical presence, asking questions, and the importance of practice.",
    images: [
      {
        alt: "Job Interview Image 1",
        url: "/images/interview3.jpg",
        width: 550,
        height: 350,
      },
      {
        alt: "Job Interview Image 2",
        url: "/images/interview4.jpg",
        width: 550,
        height: 350,
      },
    ],
  },
};

const Blog3 = () => {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          How to be successful in your next job interview
        </Typography>
      </Stack>
      <Stack mb={2} sx={{ margin: "0 auto" }}>
        <Image
          style={{ margin: "20px auto" }}
          className={styles.blog_image}
          height={350}
          width={550}
          src="/images/interview3.jpg"
          alt="interview"
        />
      </Stack>
      <Typography>
        Many people unfortunately don't consider job interviewing a skill, but
        it most certainly is. And there are many strategies you can implement to
        ensure that you have the best chance of getting that next dream job.
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Confidence</b>
      </Typography>
      <Typography>
        Many people are concerned about seeming arrogant in job interviews. Keep
        in mind that the person interviewing you wants you to impress them. You
        can be both proud of your successes and also demonstrate that you are a
        team player. So when they ask you what your greatest professional
        accomplishment is, it's time to use <b>I</b> not <b>We</b>. There will
        be other times during the interview where you can demonstrate that you
        work well on a team and are easy to work with.
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Details</b>
      </Typography>
      <Typography>
        They are going to interview 5 people. How are you different from the
        rest? Make sure to use as many details as possible. "When I was working
        for Beyond Meat in 2019 I suggested a new feature. We implemented it and
        as a direct result our profits increased by 5%". In this scenario you
        mentioned the name of the company, the year and the exact percentage of
        the increase in profit. The more details the better. This helps you to
        be more memorable.
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Study the job description</b>
      </Typography>
      <Typography>
        Study the job description and the company's website carefully. Look for
        keywords and the company's mission statement. When you're in the
        interview repeat those keywords as much as possible. It will show that
        you really did your homework and that you are really interested in the
        job. A very good idea is to refer to how your personal values align with
        the company's values, mentioning those values from the website or job
        description.
      </Typography>
      <Stack>
        <Image
          style={{ margin: "20px auto" }}
          className={styles.blog_image}
          height={350}
          width={550}
          src="/images/interview4.jpg"
          alt="interview"
        />
      </Stack>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Your physical presence</b>
      </Typography>
      <Typography>
        Make sure you smile throughout the interview. Also, keep eye contact and
        have good posture. If you are physically in the office for the interview
        make sure to shake their hand at the beginning of the interview and at
        the end.
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Your questions</b>
      </Typography>
      <Typography>
        Have at least 3 or 4 questions prepared to ask the interviewer at the
        end of the interview. Try to make them as customized as possible for the
        company. But if you are having a hard time you can always rely on a
        number of general questions. Here's a website that provides general
        questions. &nbsp;
        <a
          target="_blank"
          href="https://hbr.org/2022/05/38-smart-questions-to-ask-in-a-job-interview"
        >
          General Questions
        </a>
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b>Practice Practice Practice</b>
      </Typography>
      <Typography>
        In English we have an expression. Practice makes perfect. It's certainly
        true. Have a friend or family member interview you and then do it again
        and again. Maybe they can give you feedback.
      </Typography>{" "}
      <br/>
      <Typography>
        Also, time your answers. Interview answers should be thirty seconds to four
        minutes, depending on the question. Your response may be short (thirty
        seconds to two minutes) if the question is simple. For example, if the
        hiring manager asks you to describe your strengths, you might speak for
        90 seconds to explain your biggest strength. You definitely need to be
        careful about talking too much because when we're nervous it's very
        normal to do that.&nbsp;
      </Typography>
      <br/>
      <Card sx={{ padding: "20px" }}>
        <Typography component="h4">
          <b>Summary</b>
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              First of all, I suggest you start considering job interviewing a
              skill and start to study and practice like you would any other
              skill.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              If you really want the job study the job description and the
              website very carefully.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              Make sure to be positive during the interview, smiling, engaged
              and with good posture.
            </ListItemText>
          </ListItem>
        </List>
      </Card>
    </Container>
  );
};

export default Blog3;
