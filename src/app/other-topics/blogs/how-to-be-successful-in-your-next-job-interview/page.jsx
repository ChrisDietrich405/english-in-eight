import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@mui/material";

import styles from "../../../styles/blogs.module.css";

const Blog3 = () => {
  return (
    <main className={styles.blog_container}>
      <div className={styles.page_title}>
        <h1>How to be successful in your next job interview</h1>
      </div>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          height={350}
          width={550}
          src="/images/interview3.jpg"
          alt="interview"
        />
      </div>
      <p>
        Many people unfortunately don't consider job interviewing a skill, but
        it most certainly is. And there are many strategies you can implement to
        ensure that you have the best chance of getting that next dream job.
      </p>
      <h5 className={styles.section_title}>
        <b>Confidence</b>
      </h5>
      <p>
        Many people are concerned about seeming arrogant in job interviews. Keep
        in mind that the person interviewing you wants you to impress them. You
        can be both proud of your successes and also demonstrate that you are a
        team player. So when they ask you what your greatest professional
        accomplishment is, it's time to use <b>I</b> not <b>We</b>. There will
        be other times during the interview where you can demonstrate that you
        work well on a team and are easy to work with.
      </p>
      <h5 className={styles.section_title}>
        <b>Details</b>
      </h5>
      <p>
        They are going to interview 5 people. How are you different from the
        rest? Make sure to use as many details as possible. "When I was working
        for Beyond Meat in 2019 I suggested a new feature. We implemented it and
        as a direct result our profits rose by 5%". In this scenario you
        mentioned the name of the company, the year and the exact percentage of
        the increase in profit. The more details the better.
      </p>
      <h5 className={styles.section_title}>
        <b>Study the job description</b>
      </h5>
      <p>
        Study the job description and the company's website carefully. Look for
        keywords and the company's mission statement. When you're in the
        interview repeat those keywords as much as possible. It will show that
        you really did your homework and that you are really interested in the
        job. A very good idea is to refer to how your personal values align with
        the company's values, mentioning those values from the website or job
        description.
      </p>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          height={350}
          width={550}
          src="/images/interview4.jpg"
          alt="interview"
        />
      </div>
      <h5 className={styles.section_title}>
        <b>Your physical presence</b>
      </h5>
      <p>
        Make sure you smile throughout the interview. Also, keep eye contact and
        have good posture. If you are physically in the office for the interview
        make sure to shake their hand at the beginning of the interview and at
        the end.
      </p>
      <h5 className={styles.section_title}>
        <b>Your questions</b>
      </h5>
      <p>
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
      </p>
      <h5 className={styles.section_title}>
        <b>Practice Practice Practice</b>
      </h5>
      <p>
        In English we have an expression. Practice makes perfect. It's certainly
        true. Have a friend or family member interview you and then do it again
        and again. Maybe they can give you feedback.
      </p>{" "}
      <p>
        Also, time your answers. Interview answers should be 30 seconds to four
        minutes, depending on the question. Your response may be short (30
        seconds to two minutes) if the question is simple. For example, if the
        hiring manager asks you to describe your strengths, you might speak for
        90 seconds to explain your biggest strength. You definitely need to be
        careful about talking too much because when we're nervous it's very
        normal to do that.&nbsp;
      </p>
      <Card sx={{ padding: "20px" }}>
        <h4>
          <b>Summary</b>
        </h4>
        <ul>
          <li>
            First of all, I suggest you start considering job interviewing a
            skill and start to study and practice like you would any other
            skill.
          </li>

          <li>
            If you really want the job study the job description and the website
            very carefully.
          </li>
          <li>
            {" "}
            Make sure to be positive during the interview, smiling, engaged and
            with good posture.
          </li>
        </ul>
      </Card>
    </main>
  );
};

export default Blog3;
