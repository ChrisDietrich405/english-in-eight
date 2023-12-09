import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Card,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

import styles from "../../../styles/blogs.module.css";

export const metadata = {
  title: "How to Prepare for Your International Job Interview",
  description:
    "Explore strategies to succeed in international job interviews, particularly for positions in U.S. or European countries. Learn about pre-interview preparation, language considerations, interview tips, and post-interview actions.",
  keywords:
    "International Job Interview, Pre-Interview Preparation, English Language Skills, Interview Tips, Post-Interview Follow-up",
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
    title: "How to Prepare for Your International Job Interview",
    description:
      "Explore strategies to succeed in international job interviews, particularly for positions in U.S. or European countries. Learn about pre-interview preparation, language considerations, interview tips, and post-interview actions.",
    images: [
      {
        alt: "International Job Interview Image 1",
        url: "/images/interview2.jpg",
        width: 550,
        height: 350,
      },
      {
        alt: "International Job Interview Image 2",
        url: "/images/interview.jpg",
        width: 550,
        height: 350,
      },
    ],
  },
};

const Blog1 = () => {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          How to prepare for your international job interview
        </Typography>
      </Stack>
      <Stack mb={2}>
        <Image
          style={{ margin: "0 auto" }}
          className={styles.blog_image}
          height={350}
          width={550}
          src="/images/interview2.jpg"
          alt="interview"
        />
      </Stack>

      <Typography mb={2}>
        People outside of the U.S. and Europe are very curious about getting
        international jobs, more specifically jobs with U.S. or European
        countries where salaries are much higher. Let's talk about strategies
        that will help you in this process.
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b> Pre interview</b>
      </Typography>

      <Typography mb={2}>
        First of all, start now! Everyone feels the same, unprepared. But if you
        are waiting to feel 100% confident with your English you'll be waiting
        another 10 years.
      </Typography>
      <Typography mb={2}>
        Before starting the process of looking you should ensure that all your
        information has been translated well into English, specifically your
        resume, LinkedIn account and your portfolio. Google translator is not
        perfect. I would suggest working with a native English speaker on this.
      </Typography>
      <Typography mb={2}>
        Remember that during these interviews, they know that your spoken
        English won't be perfect. The interviewer isn't going to disqualify you
        because you used an incorrect preposition or verb tense. They aren't
        hiring English teachers. The best thing you can do is to go to the
        interview knowing ahead of time that YOU WILL MAKE MISTAKES. The more
        you worry about it the more mistakes you will make.
      </Typography>

      <Typography mb={2}>
        It's much more important to focus on your listening skills which leads
        me to the next suggestion. Watch interview videos on YouTube.
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.youtube.com/@DonGeorgevich"
        >
          &nbsp;Don Georgevich has an excellent channel for that.&nbsp;
        </Link>
        His channel is for general interview preparation. You should also look
        for more specific videos, for example if you are a product manager look
        for product manager interview preparation videos.{" "}
      </Typography>
      <Typography component="h5" mt={2} mb={0.5}>
        <b> During the interview</b>
      </Typography>

      <Typography mb={2}>
        Remember that it's very normal to be nervous especially in another
        language! Accept it. Speak just a little slower than you normally do.
        When we are nervous we start to speak faster and you definitely don't
        want to do that. Remember also, to smile and for the first question to
        include in your response a thank you for the interviewer for their time.
      </Typography>
      <Typography mb={2}>
        <b>Do not</b> and I repeat do not ever apologize for your English. You
        are there to demonstrate confidence and the fact that you are
        interviewing in English is something you should be extremely proud of.
        You make mistakes and so does everyone else. There's no reason to
        apologize.
      </Typography>
      <Typography mb={2}>
        If a couple of the questions are challenging repeat the question back to
        the interviewer to give you more time to think. For example if they ask
        you what your biggest weakness is, your response could be: "mmmm, what
        is my biggest weakness?", then proceed to respond. You gave yourself a
        little extra time to process the question.
      </Typography>
      <Stack>
        <Image
          style={{ margin: "0 auto" }}
          className={styles.blog_image}
          height={350}
          width={550}
          src="/images/interview.jpg"
          alt="interview"
        />
      </Stack>
      <Typography component="h5" mt={2} mb={0.5}>
        <b> After the interview</b>
      </Typography>

      <Typography mb={2}>
        Immediately write down what you did well and more importantly what you
        did badly in a notebook. Use that notebook for all future interviews to
        study from.
      </Typography>
      <Typography mb={2}>
        Also, send an email thanking the company and interviewer for their time.
        If you really do want the job, but haven't heard from the company after
        a week, email or even call them. Human Resources people aren't perfect
        and sometimes forget things. Maybe they do really want you.{" "}
      </Typography>
      <Card sx={{ padding: "20px" }}>
      <Typography component="h4">
          <b>Summary</b>
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              First of all, I suggest you start interviewing as soon as
              possible. You will only get better with practice.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              During the interview make sure to take your time and breathe.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              After the interview it's time to reflect on what you did well and
              badly and how you can improve the next time.{" "}
            </ListItemText>
          </ListItem>
        </List>
      </Card>
    </Container>
  );
};

export default Blog1;
