import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@mui/material";

import styles from "../../../styles/blogs.module.css";

const Blog2 = () => {
  return (
    <main className={styles.blog_container}>
      <div className={styles.page_title}>
        <h1>Why phrasal verbs are extremely important in English</h1>
      </div>
      <div className={styles.image_container}>
        <Image height={350} width={550} src="/interview2.jpg" alt="interview" />
      </div>
      <p>
        Phrasal verbs are an essential aspect of the English language, but they
        can be very difficult for non-native speakers to understand. A phrasal
        verb includes a verb followed by a preposition (or sometimes an adverb),
        creating a meaning that often changes the sense of the verb a lot. For
        example speak up means to speak louder. "The audience wasn't able to
        hear me so I needed to speak up." Understanding and using phrasal verbs
        correctly can greatly enhance your fluency and communication skills in
        English.
      </p>
      <h5 className={styles.section_title}>
        <b>Why phrasal verbs are important</b>
      </h5>
      <ol>
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
          Cultural Awareness: Phrasal verbs often carry cultural and idiomatic
          nuances. By understanding and using them, you gain insight into the
          culture and customs of English-speaking countries.
        </li>
      </ol>
      <h5 className={styles.section_title}>
        <b> How to Learn and Use Phrasal Verbs</b>
      </h5>

      <li>
        Start Small: Begin with common, everyday phrasal verbs. For instance,
        "turn on," "take off," "give up." Learn their meanings, and try to use
        them in context.
      </li>
      <li>
        Keep a Phrasal Verb Diary: Challenge yourself to practice 5 phrasal
        verbs a week. You don't want to do too many because it's easy to forget
        or confuse them. Immediately after having learned them, teach them. The
        best way to learn is to teach.
      </li>

      <li>
        Use Mnemonics: Create associations or images in your mind to remember
        phrasal verbs. For example, for the phrasal verb call off, (which means
        to cancel) imagine someone canceling a meeting by making a phone call.
      </li>
      <li>
        Practice and Consistency: You need to practice your 5 phrasal verbs
        every day for the entire week. Write down examples using them, say them
        and teach them to 3 or 4 people.
      </li>

      <li>
        <Link href="">
          {" "}
          Go to the phrasal verbs section of English in Eight Minutes.
        </Link>
        There you will find a video and phrasal verbs with accompanying
        exercises.
      </li>

      <li>
        Below is your starter list. Start with these 5 verbs. Work hard and good
        luck.
      </li>

      <li>
        Take off: To remove something (e.g., "She took off her coat.") or for a
        plane to become airborne.
      </li>
      <li>
        Turn on: To activate or start something (e.g., "Turn on the lights.").
      </li>
      <li>
        Give up: To quit or stop doing something (e.g., "Don't give up on your
        dreams.").
      </li>
      <li>
        Look up: To search for information or to improve (e.g., "I'll look up
        that word in the dictionary.").
      </li>
      <li>
        Get along: To have a good relationship with someone (e.g., "I get along
        with my colleagues.").
      </li>

      <h2>Summary</h2>

      <Card sx={{ padding: "20px" }}>
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
            Use English in Eight Minutes to practice and be more successful.
          </li>
        </ul>
      </Card>
    </main>
  );
};

export default Blog2;
