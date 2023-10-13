import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Present Tense Verbs | English in Eight Minutes",
  description:
    "Learn about present tense verbs in English. This page provides explanations and examples of present tense verbs, including the present simple, present continuous, present perfect, and present perfect continuous tenses.",
  keywords:
    "present tense verbs, English, grammar, present simple, present continuous, present perfect, present perfect continuous",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Present Tense Verbs | English in Eight Minutes",
    description:
      "Learn about present tense verbs in English. This page provides explanations and examples of present tense verbs",
    images: [
      {
        url: "images/logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "images/logo.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

const Present = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Present Tense Verbs</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          The present tense verbs are the most widely used verbs in the English
          language. Think about all the times you talk to friends and family
          about what's happening today. Have you ever thought about how much you
          do this? Personally, I've been thinking a lot about this recently. By
          the way I included all four tenses in this paragraph. Challenge
          yourself and try to identify them.
        </p>
        <div
          className={`${styles.links_container} btn-container btn-flex`}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/simple-present"
          >
            <Button className={styles.link_button} variant="outlined">
              Present Simple
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-continuous"
          >
            <Button className={styles.link_button} variant="outlined">
              Present Continuous
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-perfect"
          >
            <Button className={styles.link_button} variant="outlined">
              Present Perfect
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-perfect-continuous"
          >
            <Button className={styles.link_button} variant="outlined">
              Present Perfect Continuous
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Present;
