//DONE
import Image from "next/image";
import styles from "../styles/content-page.module.css";

export default function NounDefinition() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Adjective Definition</h1>
      </div>
      <div className={styles.page_body}>
        <p
          style={{ textAlign: "center" }}
          className={styles.grammar_explanation_paragraph}
        >
          Adjectives are used to describe or modify nouns or pronouns, providing
          more information about their qualities, characteristics, or
          attributes. In these examples, the adjectives are in bold and the
          nouns are in italics.
        </p>
      </div>
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={100}
              width={100}
              src="/happy-child-adjectives.jpg"
              alt=""
            />
          </div>
          <p className={styles.picture_subtitle}>
            <b>Happy</b> child
          </p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={100}
              width={100}
              src="/small-dog-adjectives.jpg"
              alt=""
            />
          </div>
          <p className={styles.picture_subtitle}>
            <b>Small</b> dog
          </p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={100}
              width={100}
              src="/strong-man-adjectives.jpg"
              alt=""
            />
          </div>
          <p className={styles.picture_subtitle}>
            <b>Strong</b> man
          </p>
        </div>
      </div>
    </>
  );
}
