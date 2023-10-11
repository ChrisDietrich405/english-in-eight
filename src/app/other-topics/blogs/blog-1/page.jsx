import React from "react";
import Image from "next/image";

import styles from "../../../styles/blogs.module.css";

const Hello = () => {
  return (
    <main>
      <div className={styles.page_title}>
        <h1>How to prepare for your international job interview</h1>
      </div>
      <p>
      People outside of the U.S. and Europe are very curious about getting
          international jobs, more specifically jobs with U.S. or European
          countries where salaries are much higher. Let's talk about strategies
          that will help you in this process.
      </p>
      <h5>Pre interview</h5>
      <p>
        Before starting the process of looking you should ensure that all your
        information has been translated well into English, specifically your
        resume, LinkedIn account and your portfolio. Google translator is not perfect. I would suggest working with a native English speaker on this. 
        
         Remember that during these interviews, they know that your
        English won't be perfect, so it's not something you should worry so much
        about.
      </p>
      <p>
        It's much more important to focus on your listening skills which leads
        me to the next suggestion. Watch interview videos on YouTube. Don
        Georgevich has an excellent channel for that. His channel is for general
        interview preparation. You should also look for more specific videos,
        for example if you are a product manager look for product manager
        interview preparation videos.{" "}
      </p>
      <h5>During the interview</h5>
      <p>
        Remember that it's very normal to be nervous especially in another
        language! Accept it. Speak just a little slower than you normally do.
        When we are nervous we start to speak faster and you want to counteract
        that. Remember also, to smile and for the first question to thank the
        interviewer for their time.
      </p>
      <p>
        If a couple of the questions are challenging repeat the question back to
        the interviewer to give you more time to think. For example they ask you
        what your biggest weakness is. You respond: "mmmm, what is my biggest
        weakness?", then proceed to answer. You gave yourself a little extra
        time to process the question.
      </p>
      <div className={styles.image_container}>
        <Image height={350} width={550} src="/interview.jpg" alt="interview" />
      </div>
      <h5>After the interview</h5>
      <p>
        Immediately write down what you did well and more importantly what you
        did badly in a notebook. Use that notebook for all future interviews to
        study from. Also, send an email thanking the company and interviewer for
        their time. If you really do want the job, but haven't heard from the
        company after a week, email or even call them. Human Resources people
        aren't perfect and sometimes forget things. Maybe they do really want
        you.{" "}
      </p>
      <h5>Summary</h5>
      <p>
        First of all, I suggest you start interviewing as soon as possible. You
        will only get better with practice. During the interview make sure to
        take your time and breathe. After the interview it's time to reflect on
        what you did well and badly and how you can improve the next time
      </p>
    </main>
  );
};

export default Hello;
