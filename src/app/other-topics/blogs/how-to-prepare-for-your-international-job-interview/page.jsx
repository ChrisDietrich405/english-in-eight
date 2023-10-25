import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@mui/material";

import styles from "../../../styles/blogs.module.css";

const Blog1 = () => {
  return (
    <main className={styles.blog_container}>
      <div className={styles.page_title}>
        <h1>How to prepare for your international job interview</h1>
      </div>
      <div className={styles.image_container}>
        <Image
          height={350}
          width={550}
          src="/images/interview2.jpg"
          alt="interview"
        />
      </div>
      <p>
        People outside of the U.S. and Europe are very curious about getting
        international jobs, more specifically jobs with U.S. or European
        countries where salaries are much higher. Let's talk about strategies
        that will help you in this process.
      </p>
      <h5 className={styles.section_title}>
        <b> Pre interview</b>
      </h5>
      <p>
        First of all, start now! Everyone feels the same, unprepared. But if you
        are waiting to feel 100% confident with your English you'll be waiting
        another 10 years.
      </p>
      <p>
        Before starting the process of looking you should ensure that all your
        information has been translated well into English, specifically your
        resume, LinkedIn account and your portfolio. Google translator is not
        perfect. I would suggest working with a native English speaker on this.
      </p>
      <p>
        Remember that during these interviews, they know that your spoken
        English won't be perfect. The interviewer isn't going to disqualify you
        because you used an incorrect preposition or verb tense. They aren't
        hiring English teachers. The best thing you can do is to go to the
        interview knowing ahead of time that YOU WILL MAKE MISTAKES. The more
        you worry about it the more mistakes you will make.
      </p>
      <p>
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
      </p>
      <h5 className={styles.section_title}>
        <b> During the interview</b>
      </h5>
      <p>
        Remember that it's very normal to be nervous especially in another
        language! Accept it. Speak just a little slower than you normally do.
        When we are nervous we start to speak faster and you definitely don't
        want to do that. Remember also, to smile and for the first question to
        include in your response a thank you for the interviewer for their time.
      </p>
      <p>
        If a couple of the questions are challenging repeat the question back to
        the interviewer to give you more time to think. For example if they ask
        you what your biggest weakness is, your response could be: "mmmm, what
        is my biggest weakness?", then proceed to respond. You gave yourself a
        little extra time to process the question.
      </p>
      <div className={styles.image_container}>
        <Image
          height={350}
          width={550}
          src="/images/interview.jpg"
          alt="interview"
        />
      </div>
      <h5 className={styles.section_title}>
        <b> After the interview</b>
      </h5>
      <p>
        Immediately write down what you did well and more importantly what you
        did badly in a notebook. Use that notebook for all future interviews to
        study from.
      </p>
      <p>
        Also, send an email thanking the company and interviewer for their time.
        If you really do want the job, but haven't heard from the company after
        a week, email or even call them. Human Resources people aren't perfect
        and sometimes forget things. Maybe they do really want you.{" "}
      </p>
      <Card sx={{ padding: "20px" }}>
        <h4>
          <b>Summary</b>
        </h4>
        <ul>
          <li>
            First of all, I suggest you start interviewing as soon as possible.
            You will only get better with practice.
          </li>

          <li>During the interview make sure to take your time and breathe.</li>
          <li>
            {" "}
            After the interview it's time to reflect on what you did well and
            badly and how you can improve the next time.{" "}
          </li>
        </ul>
      </Card>
    </main>
  );
};

export default Blog1;
