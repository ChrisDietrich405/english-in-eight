import React from "react";
import { Container, Typography } from "@mui/material";

import styles from "./styles.module.css";

const Suggestions = () => {
  return (
    <>
      <Head>
        <title>Talk versus Speak | English in Eight Minutes</title>
        <meta
          content="Learn about the differences between 'talk' and 'speak' in English grammar. Understand how they are used in different contexts."
          name="description"
        />
        <meta
          content="English, Grammar, Talk, Speak, Language, Usage"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/talk-versus-speak"
        />
        <meta
          property="og:title"
          content="Talk versus Speak | English in Eight Minutes"
        />
        <meta
          property="og:description"
          content="Learn about the differences between 'talk' and 'speak' in English grammar. Understand how they are used in different contexts."
        />
        <meta
          property="og:image"
          content="https://example.com/images/talk-versus-speak.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          How can you be successful using this website and successful learning
          English?
        </Typography>

        <ul className={styles.list_container}>
          <li>
            Don't focus too much on the explanations, read them once and then go
            on to the examples. I guarantee after reading the examples the
            explanation will make more sense (be easier to understand)
          </li>
          <li>
            Every time and I repeat every time you do a lesson, you need to
            teach someone what you learned. The best way to learn is to teach.
            If you don't know someone who is learning English, talk to a family
            member. They love you so they will give you ten minutes. They won't
            understand, but that doesn't matter. What matters is that you
            explained the information
          </li>
          <li>
            You're busy right? Of course! Find moments when you can review. In
            the bathroom while brushing your teeth you can explain to yourself a
            few phrasal verbs you learned from the website. At the grocery store
            waiting in line (waiting to buy the food) get the notes that are in
            your jacket.
          </li>
          <li>
            PERSONAL CONNECTION! When you review connect the material to YOUR
            family, job, hobbies. For example while studing the verb "to be" you
            would say "my wife <b>is</b> smart" and my children <b>are</b>{" "}
            energetic.
          </li>
          <li>
            Repeat and repeat. Learning another language isn't easy. It's hard
            work, but if you repeat the exercises again and again after after
            create some sentences connecting your personal life to the material
            you will see improvement, guaranteed.
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Suggestions;
