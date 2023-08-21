import Image from "next/image";

import styles from "../../styles/content-page.module.css";

//find three new verbs

export default function VerbsDef() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Verbs Definition</h1>
      </div>
      <div className={styles.page_body}>
        <h5 className={styles.grammar_explanation_paragraph}>
          A verb is a word used to describe an action (for example hear), state
          (for example love), or occurrence (for example happen)
        </h5>
      </div>
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              src="/hear.jpg"
              alt="picture of action verb hear"
              width={300}
              height={200}
            />
          </div>
          <p className={styles.picture_subtitle}>Hear</p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              src="/state-verbs-definition.jpg"
              alt="picture of state verb love"
              width={300}
              height={200}
            />
          </div>
          <p className={styles.picture_subtitle}>Love</p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              src="/happen.jpg"
              alt="picture of action verb hear"
              width={300}
              height={200}
            />
          </div>
          <p className={styles.picture_subtitle}>Happen</p>
        </div>
      </div>
    </>
  );
}
