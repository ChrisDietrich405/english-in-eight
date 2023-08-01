import styles from "../styles/content-page.module.css";

//find three new verbs

export default function VerbsDef() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Verbs Definition</h2>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          A verb is a word used to describe an action (for example hear), state
          (for example become), or occurrence (for example happen)
        </p>
      </div>
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <img src="../../../images/action-verbs-definition.png" alt="" />
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
