import Image from "next/image";

import styles from "../../styles/content-page.module.css";

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
      <div className="container">
        <div className="row">
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                className={styles.verb_image}
                src="/images/hear.jpg"
                alt="picture of action verb hear"
                width={250}
                height={250}
              />
            </div>
            <p className={styles.picture_subtitle}>Hear</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                src="/images/love.jpg"
                alt="picture of state verb love"
                width={250}
                height={250}
              />
            </div>
            <p className={styles.picture_subtitle}>Love</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                src="/images/happen.jpg"
                alt="picture of action verb happen"
                width={250}
                height={250}
              />
            </div>
            <p className={styles.picture_subtitle}>Happen</p>
          </div>
        </div>
      </div>
    </>
  );
}
