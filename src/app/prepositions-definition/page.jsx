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
          relationship between a noun or pronoun 
          and other elements in a sentence. Prepositions are used to indicate
          location, direction, time, and other relationships in space and time.
          Examples of prepositions include "in, at, on, behind, and over"
        </h5>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/happy.jpg"
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
                src="/small.jpg"
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
                src="/strong.jpg"
                alt="strong person"
              />
            </div>
            <p className={styles.picture_subtitle}>Strong</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
