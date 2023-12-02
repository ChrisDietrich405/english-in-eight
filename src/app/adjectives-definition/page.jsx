import Image from "next/image";
import styles from "../styles/content-page.module.css";

import { Container, Typography, Box, Stack } from "@mui/material";

export const metadata = {
  title: "Adjective Definition | English in Eight Minutes",
  description:
    "Explore the definition of adjectives in English with English in Eight Minutes. Learn how adjectives modify nouns or pronouns",
  keywords:
    "English, Adjective Definition, English grammar, English in Eight Minutes, descriptive words, grammar rules",
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
    title: "Adjective Definition | English in Eight Minutes",
    description:
      "Explore the definition of adjectives in English with English in Eight Minutes. Learn how adjectives modify nouns or pronouns, providing details about qualities, characteristics, or attributes. View examples and illustrations of adjectives in action.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function AdjectiveDefinition() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Adjective Definition</h1>
      </div>
      <div className={styles.page_body}>
        <h5 className={styles.grammar_explanation_paragraph}>
          Adjectives are used to describe or modify nouns or pronouns, providing
          more information about their qualities, characteristics, or
          attributes. In these examples, the adjectives are in bold.
        </h5>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/happy.jpg"
                alt="happy child"
              />
            </div>
            <p className={styles.picture_subtitle}>Happy</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/small.jpg"
                alt="small dog"
              />
            </div>
            <p className={styles.picture_subtitle}>Small</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/strong.jpg"
                alt="strong person"
              />
            </div>
            <p className={styles.picture_subtitle}>Strong</p>
          </div>
        </div>
      </div>
    </>
  );
}
