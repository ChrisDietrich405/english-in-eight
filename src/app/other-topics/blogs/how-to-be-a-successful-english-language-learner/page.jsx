import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@mui/material";

import styles from "../../../styles/blogs.module.css";

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
// REMEMBER THE METADATA
const Blog4 = () => {
  return (
    <main className={styles.blog_container}>
      <div className={styles.page_title}>
        <h1>How to be a successful English language learner</h1>
      </div>
      <div className={styles.image_container}>
        <Image
          height={350}
          width={550}
          src="/images/successful-english.jpg"
          alt="interview"
        />
      </div>
      <p>
        Learning a second language is a very challenging task and so I would
        like to share with you some ideas on how you can do it the most
        efficient way possible.
      </p>

      <h5 className={styles.section_title}>
        <b>Keep it fun and engaging</b>
      </h5>
      <p>
        Watch funny movies, read interesting books, find an exchange partner. If
        we are bored we don't learn. So let's do the opposite. If you absolutely
        love cooking, look for cooking channels in English. Also, keep it short.
        If you are looking for some grammar, find short videos. They may not
        give every detail, but you also won't start getting distracted after 10
        minutes. Another suggestion is to find an exchange partner, someone who
        can share an hour a week with. For example if you are a Portuguese
        speaker you find someone to teach Portuguese and they can teach you
        English. There are groups on Facebook that offer exchanges for
        English.&nbsp;
        <a
          target="_blank"
          href=" https://www.facebook.com/groups/BrazilianPortugueseAndEnglishLanguage"
        >
          Here's an example
        </a>
      </p>
      <h5 className={styles.section_title}>
        <b>Don't be shy</b>
      </h5>
      <p>
        Being shy and afraid to make mistakes is your worst enemy. There are
        many extremely smart people who will never learn a second language
        because of their pride. People don't like to feel stupid. When you learn
        a second language you have to accept the fact that sometimes you are
        going to feel insecure and nervous. If you want to be successful you
        have to accept the fact that you will make mistakes. It's ok. It's the
        only way you improve. And it won't matter how much you study with a
        website or a book, if you don't experiment with the language you won't
        improve.
      </p>
      <h5 className={styles.section_title}>
        <b>Teach what you learn </b>
      </h5>
      <p>
        Every time and I repeat every time you do a lesson, you need to teach
        someone what you learned. The best way to learn is to teach. If you
        don't know someone who is learning English, talk to a family member.
        They love you so they will give you ten minutes. They won't understand,
        but that doesn't matter. What matters is that you explained the
        information.
      </p>
      <h5 className={styles.section_title}>
        <b>Focus on examples, not confusing explanations</b>
      </h5>
      <p>
        Many times grammar explanations are confusing and frustrating. Don't
        focus too much on them. Focus on examples. I guarantee after reading
        examples explanations will make more sense (be easier to understand).
      </p>
      <div className={styles.image_container}>
        <Image
          height={350}
          width={550}
          src="/images/successful-english2.jpg"
          alt="interview"
        />
      </div>
      <h5 className={styles.section_title}>
        <b>Find time</b>
      </h5>
      <p>
        You're busy right? Of course! Find moments when you can review. In the
        bathroom while brushing your teeth you can explain to yourself a few
        phrasal verbs you learned from the website. At the grocery store waiting
        in line (waiting to buy the food), get the English notes that you put in
        your jacket.
      </p>
      <h5 className={styles.section_title}>
        <b>Personal connection</b>
      </h5>
      <p>
        When you are learning English connect the material to YOUR family, job,
        hobbies. For example while studying the verb "to be" in the present
        tense, you would say "my wife <b>is</b> smart" and my children{" "}
        <b>are</b> energetic. When you think about your wife and children in
        this context the learning is more real and you will remember more.
      </p>
      <h5 className={styles.section_title}>
        <b>Repeat and repeat again</b>
      </h5>
      <p>
        Repeat and repeat. Athetes build muscle memory in order to be more
        successful. It means they make the same motion throwing a ball again and
        again, maybe 50-100 times a day! Your brain is a muscle. Learning
        another language isn't easy. It's hard work, but if you repeat the
        exercises again and again you will feel and be more successful.
      </p>

      <Card sx={{ padding: "20px" }}>
        <h4>
          <b>Summary</b>
        </h4>
        <ul>
          <li>
            First of all, I suggest you create a plan and routine. You don't
            have a lot of time so it's extremely important that you are
            efficient.
          </li>

          <li>
            Make your learning personal. Connect what you are learning to your
            family, job, hobbies (the things you like to do).
          </li>
          <li>
            Repeat and repeat and repeat. Learning a language is not easy. You
            have to practice the same material several times before you will
            feel comfortable with it.
          </li>
        </ul>
      </Card>
    </main>
  );
};

export default Blog4;
