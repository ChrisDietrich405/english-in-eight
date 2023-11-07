//DONE
import Image from "next/image";
import styles from "../styles/content-page.module.css";

export default function NounDefinition() {
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
