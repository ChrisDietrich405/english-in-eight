import styles from "../styles/content-page.module.css";

export const metadata = {
  title: "Prepositions_ A Comprehensive Guide",
  description:
    "Enhance your understanding of prepositions with this comprehensive guide. Test your knowledge with a quiz",
  keywords:
    "Prepositions, English Grammar, Quiz, Learn English, Grammar Skills, At, On, In",
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
    title: "Prepositions: A Comprehensive Guide",
    description:
      "Enhance your understanding of prepositions.",
    images: [
      {
        alt: "Prepositions Guide",
        url: "/images/prepositions-of-time.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function PrepositionsDefinition() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Preposition Definition</h1>
      </div>
      <div className={styles.page_body}>
        <h5 className={styles.grammar_explanation_paragraph}>
          Prepositions are a class of words in grammar that typically show the
          relationship between a noun or pronoun and other elements in a
          sentence. Prepositions are used to indicate location, direction, time,
          and other relationships in space and time. Examples of prepositions
          include "in, at, on, behind, and over"
        </h5>
      </div>
    </>
  );
}
