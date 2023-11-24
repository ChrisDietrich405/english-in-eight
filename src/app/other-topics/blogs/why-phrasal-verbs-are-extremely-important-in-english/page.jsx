import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import styles from "../../../styles/blogs.module.css";

export const metadata = {
  title: "Why Phrasal Verbs are Extremely Important in English",
  description:
    "Discover the significance of phrasal verbs in the English language. Learn about their importance in natural conversation, vocabulary enrichment, and cultural awareness. Explore tips on how to learn and use phrasal verbs effectively.",
  keywords:
    "Phrasal Verbs, English Language, Vocabulary, Cultural Awareness, Language Learning",
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
    title: "Why Phrasal Verbs are Extremely Important in English",
    description:
      "Discover the significance of phrasal verbs in the English language. Learn about their importance in natural conversation, vocabulary enrichment, and cultural awareness. Explore tips on how to learn and use phrasal verbs effectively.",
    images: [
      {
        alt: "Phrasal Verbs Image",
        url: "/images/fall.jpg",
        width: 550,
        height: 350,
      },
    ],
  },
};

const Blog2 = () => {
  return (
    <main className={styles.blog_container}>
      <div className={styles.page_title}>
        <h1>Why phrasal verbs are extremely important in English</h1>
      </div>
      <div className={styles.image_container}>
        <Image
          className={styles.blog_image}
          height={350}
          width={550}
          src="/images/fall.jpg"
          alt="interview"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Fall in love
        </h3>
        <FavoriteIcon />
      </div>
      <p>
        <b>Fall in</b> , <b>look forward to</b>, <b>break down </b>are all
        examples of phrasal verbs. Phrasal verbs are an essential aspect of the
        English language, but they can be very difficult for non-native speakers
        to understand. A phrasal verb includes a verb followed by a preposition
        (or sometimes an adverb).
      </p>{" "}
      <p>
        Many times phrasal verbs create a meaning that often changes the sense
        of the verb a lot. For example <b>look forward to</b> means to be
        excited about a future event. I'm really looking forward to the weekend.
        I'm so ready to relax. This meaning really has nothing to do with the
        verb to look.
      </p>
      <h5 className={styles.section_title}>
        <b>Why phrasal verbs are important</b>
      </h5>
      <ul className={styles.list_container}>
        <li>
          Natural conversation: Phrasal verbs are a common feature of everyday
          English. Using them helps your speech sound more natural and
          conversational. For example instead of saying: I'm returning to the
          office you could say I'm coming back to the office. Come back is a
          phrasal verb that means return and sounds much more natural and
          native.
        </li>
        <li>
          Richer Vocabulary: Learning phrasal verbs expands your vocabulary.
          Instead of relying on basic verbs, you can express yourself more
          precisely, adding nuance and depth to your language.
        </li>
        <li>
          Listening Comprehension Skills: While watching, for example Netflix if
          someone uses an unfamiliar phrasal verb you will immediately be
          confused. If you progress with learning more and more phrasal verbs
          your listening comprehension skills will definitely improve.
        </li>
      </ul>
      <h5 className={styles.section_title}>
        <b> How to Learn and Use Phrasal Verbs</b>
      </h5>
      <ul className={styles.list_container}>
        <li>
          Start Small: Begin with common, everyday phrasal verbs. For instance,
          "turn on," "take off," "give up." Learn their meanings, and try to use
          them in context.
        </li>
        <li>
          Keep a Phrasal Verb Diary: Challenge yourself to practice 5 phrasal
          verbs a week. You don't want to do too many because it's easy to
          forget or confuse them. Immediately after having learned them, teach
          them. The best way to learn is to teach.
        </li>
        <li>
          Use Mnemonics: Create associations or images in your mind to remember
          phrasal verbs. For example, for the phrasal verb call off, (which
          means to cancel) imagine someone canceling a meeting by making a phone
          call.
        </li>
        <li>
          Practice and Consistency: You need to practice your 5 phrasal verbs
          every day for the entire week. Write down examples using them, say
          them and teach them to 3 or 4 people. Also, make the learning
          personal. For example think about the year you fell in love with your
          husband or wife.
        </li>

        <li>
          <Link
            href="/other-topics/phrasal-verbs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to the phrasal verbs section of English in Eight Minutes.
          </Link>
          &nbsp;There you will find a video and phrasal verbs with accompanying
          exercises.
        </li>
      </ul>
      <h5 className={styles.section_title}>
        <b>
          {" "}
          Below is your starter list. Start with these 5 verbs. Work hard and
          good luck.
        </b>
      </h5>
      <ul className={styles.list_container}>
        <li>
          <b>Take off:</b> To remove something (e.g., "She took off her coat.")
        </li>
        <li>
          <b>Turn on:</b> To activate or start something (e.g., "Turn on the
          lights.").
        </li>
        <li>
          <b>Give up: </b>To quit or stop doing something (e.g., "Don't give up
          on your dreams.").
        </li>
        <li>
          <b>Look up:</b> To search for information (e.g., "I'll look up that
          word in the dictionary.").
        </li>
        <li>
          <b>Get along:</b> To have a good relationship with someone (e.g., "I
          get along well with my colleagues.").
        </li>
      </ul>
      <Card sx={{ padding: "20px", marginTop: "20px" }}>
        <h4>
          <b>Summary</b>
        </h4>
        <ul>
          <li>
            Create a routine of learning 5 phrasal verbs a week and practice
            them every day.
          </li>

          <li>Teach the phrasal verbs you learn to several people.</li>
          <li>
            <Link
              href="/other-topics/phrasal-verbs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Use English in Eight Minutes to practice and be more successful.
            </Link>
          </li>
        </ul>
      </Card>
    </main>
  );
};

export default Blog2;
