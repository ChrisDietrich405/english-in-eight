import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

const Future = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Present Tense Verbs</h2>
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
        <div className="btn-container btn-flex">
          <Link
            href="/future-verb-tenses/future-simple"
            className=" btn btn-primary"
          >
            <Button variant="text">Present Simple</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-continuous"
            className="btn btn-primary"
          >
            <Button variant="text">Present Continuous</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-perfect"
            className="btn btn-primary"
          >
            <Button variant="text">Present Perfect</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-perfect-continuous"
            className="btn btn-primary"
          >
            <Button variant="text">Present Perfect Continuous</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Future;
