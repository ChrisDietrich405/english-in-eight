import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

const SimplePresent = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Present Tense Verbs</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          The present tense verbs are the most widely used verbs in the English
          language. Think about all the times you talk to friends and family
          about what's happening today. Have you ever thought about how much you
          do this? Personally, I've been thinking a lot about this recently. By
          the way I included all four tenses in this paragraph. Challenge
          yourself and try to identify them.
        </p>
        <div
          className="btn-container btn-flex"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/simple-present"
          >
            <Button variant="text">Present Simple</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-continuous"
          >
            <Button variant="text">Present Continuous</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-perfect"
          >
            <Button variant="text">Present Perfect</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/present-tense/present-perfect-continuous"
          >
            <Button variant="text">Present Perfect Continuous</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SimplePresent;
