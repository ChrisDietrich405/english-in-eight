import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

const Future = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Future Tense Verbs</h2>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          There are many ways to describe the future in English. Any 'future'
          tense will always describe a time 'later than now', but it may also
          express our attitude to the future event.
        </p>
        <div className="btn-container btn-flex">
          <Link
            href="/future-verb-tenses/future-simple"
            className=" btn btn-primary"
          >
            <Button variant="text">Future Simple</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-continuous"
            className="btn btn-primary"
          >
            <Button variant="text">Future Continuous</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-perfect"
            className="btn btn-primary"
          >
            <Button variant="text">Future Perfect</Button>
          </Link>
          <Link
            href="/future-verb-tenses/future-perfect-continuous"
            className="btn btn-primary"
          >
            <Button variant="text">Future Perfect Continuous</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Future;
