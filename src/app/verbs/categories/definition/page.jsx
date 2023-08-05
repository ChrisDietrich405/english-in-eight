import Grid from "@mui/material/Grid";
import Image from "next/image";

import styles from "../../../styles/parts-of-speech.module.css";

export default function VerbDefinition() {
  return (
    <>
      <main>
        <div className={styles.page_title}>
          <h2>Verb Definition</h2>
        </div>
        <div className={styles.page_body}>
          <p
            style={{ textAlign: "center" }}
            className={styles.grammar_explanation_paragraph}
          >
            A verb is a word that expresses an action, state or occurrence of
            being. It's one of the essential parts of speech in grammar. Verbs
            are used to describe what someone or something does, what happens to
            them, or what they are like.
          </p>
        </div>
        <Grid container>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div>
              <Image
                src="/action-verbs-definition.png"
                alt="picture of action verb hear"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>Action Verb</strong> <em>hear</em>
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/state-verbs-definition.png"
                alt="Picture of a state verb become"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>State Verb</strong> <em>become</em>
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/occurence-verbs-definition.png"
                alt="Picture of occurrence verb happen"
                width={200}
                height={200}
              />
            </div>

            <p aria-hidden="true" className={styles.picture_subtitle}>
              <strong>Occurrence Verb</strong> <em>happen</em>
            </p>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
