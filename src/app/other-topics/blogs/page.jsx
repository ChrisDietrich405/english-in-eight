import React from "react";
import Image from "next/image";
import { Container, Typography, Stack, Grid } from "@mui/material";

import styles from "../../styles/blogs.module.css";

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
        alt: "International Job Interview Image",
        url: "/images/interview2.jpg",
        width: 550,
        height: 350,
      },
    ],
  },
};

const page = () => {
  return (
    <Container>
      <Typography
        mb={2}
        component="h1"
        variant="h1"
        sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
      >
        How blogs can help you
      </Typography>

      <Typography mb={3}>
        Blogs are an incredible way to learn. Reading blogs give you the ability
        to improve your English while at the same time learning a second skill,
        for example interviewing. My recommendation is to read each blog at
        least three times. The first time you can investigate any unfamiliar
        vocabulary, phrasal verbs, expressions. Next, read it again slowly. When
        you read it a third time again read it slowly, but read it out loud.
        After a third time you will be more confident in the content and will
        have at the same time improved your English.
      </Typography>
      <Stack>
        <Image
          style={{
            margin: "0 auto",
            objectFit: "contain",
            width: "100%",
            maxWidth: "550px",
            height: "auto",
          }}
          height={350}
          width={550}
          src="/images/blog.jpg"
          alt="interview"
        />
      </Stack>
    </Container>
  );
};

export default page;
