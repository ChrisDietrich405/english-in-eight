import Image from "next/image";
import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Verb Definition | English in Eight Minutes",
  description:
    "Explore the definition of verbs in English with English in Eight Minutes. Learn how verbs describe actions, states, or occurrences. View examples and illustrations of action verbs like 'hear,' state verbs like 'love,' and occurrence verbs like 'happen.'",
  keywords:
    "English, Verb Definition, English grammar, English in Eight Minutes, action verbs, state verbs, occurrence verbs, grammar rules",
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
    title: "Verb Definition | English in Eight Minutes",
    description:
      "Explore the definition of verbs in English with English in Eight Minutes. Learn how verbs describe actions, states, or occurrences, providing details about various aspects of language. View examples and illustrations of action verbs like 'hear,' state verbs like 'love,' and occurrence verbs like 'happen.'",
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

export default function VerbsDef() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Verb Definition</h1>
      </div>
      <div className={styles.page_body}>
        <h5 className={styles.grammar_explanation_paragraph}>
          A verb is a word used to describe an action (e.g., hear), state (e.g., love), or occurrence (e.g., happen).
        </h5>
      </div>
      <div className="container">
        <div className="row">
          {/* Your image and text components remain unchanged */}
        </div>
      </div>
    </>
  );
}
