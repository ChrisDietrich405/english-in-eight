import React from "react";
import Link from "next/link";
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
      <Grid container className={styles.link_container}>
        <Grid item xs={8}>
          <h5>How to prepare for your international job interview</h5>
          <p className={styles.paragraph}>
            People outside of the U.S. and Europe are very curious about getting
            international jobs, more specifically jobs with U.S. or European
            countries where salaries are much higher. Let's talk about
            strategies that will help you in this process.
          </p>
          <Button variant="outlined" className={styles.blog_link}>
            <Link
              href="/other-topics/blogs/how-to-prepare-for-your-international-job-interview"
              className={styles.blog_link}
            >
              Continue reading
            </Link>
          </Button>
        </Grid>
        <Grid item xs={4}>
   
        </Grid>
      </Grid>
      {/* <div className={styles.link_container}></div> */}
    </Container>
  );
};

export default page;
