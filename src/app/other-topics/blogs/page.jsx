import React from "react";
import Image from "next/image";
import { Container, Button, Grid } from "@mui/material";

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
      <div className={styles.page_title}>
        <h1>How blogs can help you</h1>
      </div>
      <Grid container className={styles.link_container}>
        <Grid item xs={8}>
          <p className={styles.paragraph}>
            Blogs are an incredible way to learn. Reading blogs give you the
            ability to improve your English while at the same time learning a
            second skill for example interviewing. My recommendation is to read
            each blog at least three times. The first time you can investigate
            any unfamiliar vocabulary, phrasal verbs, expressions. Next, read it
            again slowly. When you read it a third time again read it slowly,
            but read it out loud. After a third time you will be more confident
            in the content and will have at the same time improved your English.
          </p>
          <div className={styles.image_container}>
            <Image
              style={{ display: "flex", justifyContent: "center" }}
              height={350}
              width={550}
              src="/images/blog.jpg"
              alt="interview"
            />
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {/* <div className={styles.link_container}></div> */}
    </Container>
  );
};

export default page;
