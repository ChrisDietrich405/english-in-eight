//DONE
import Image from "next/image";
import styles from "../styles/content-page.module.css";

export default function NounDefinition() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Noun Definition</h2>
      </div>
      <div className={styles.page_body}>
        <p
          style={{ textAlign: "center" }}
          className={styles.grammar_explanation_paragraph}
        >
          A noun is a word that describes an object or set of objects, such as
          people, places or things{" "}
        </p>
      </div>
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={100}
              width={100}
              src="/../../../person-nouns-definition.png"
              alt=""
            />

            {/* <img src="../../../images/action-verbs-definition.png" alt="" /> */}
          </div>
          <p className={styles.picture_subtitle}>Hear</p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <img src="../../../images/state-verbs-definition.png" alt="" />
          </div>
          <p className={styles.picture_subtitle}>Become</p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <img src="../../../images/occurence-verbs-definition.png" alt="" />
          </div>
          <p className={styles.picture_subtitle}>Happen</p>
        </div>
      </div>
    </>
  );
}
