import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

const Future = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Future Tense Verbs</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          There are many ways to describe the future in English. Any 'future'
          tense will always describe a time 'later than now', but it may also
          express our attitude to the future event.
        </p>
        <div
          className="btn-container btn-flex"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link
            className={styles.link} 
            href="/verbs-definition/future/future-simple"
          >
            <Button variant="text">Future Simple</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-continuous"
          >
            <Button variant="text">Future Continuous</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-perfect"
          >
            <Button variant="text">Future Perfect</Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-perfect-continuous"
          >
            <Button variant="text">Future Perfect Continuous</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Future;
