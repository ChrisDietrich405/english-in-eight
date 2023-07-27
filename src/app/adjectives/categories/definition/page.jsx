import Grid from "@mui/material/Grid";
import Image from "next/image";

import styles from "../../../styles/parts-of-speech.module.css";

export default function AdjectiveDefinition() {
  return (
    <>
      <main>
        <div className={styles.page_title}>
          <h2>Adjective Definition</h2>
        </div>
        <div className="page-body">
          <p
            style={{ textAlign: "center" }}
            className={styles.grammar_explanation_paragraph}
          >
            An adjective is a word that tells us more about a noun. It
            "describes" a noun. In these examples, the adjectives are in bold
            and the nouns are in italics.
          </p>
        </div>
        <Grid container>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div>
              <Image
                src="/strong-man-adjectives-definition.jpg"
                alt="Picture of a strong man"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>Strong</strong> <em>man</em>
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/happy-child-adjectives-definition.jpg"
                alt="Picture of a happy child"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>Happy</strong> <em>child</em>
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/small-dog-adjectives-definition.jpg"
                alt="Picture of a small dog"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>Small</strong> <em>dog</em>
            </p>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
