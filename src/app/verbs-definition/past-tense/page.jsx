import Link from "next/link";
import Button from "@mui/material/Button";

import styles from "../../styles/content-page.module.css";

const Future = () => {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Past Tense Verbs</h2>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          We have four past tenses in English. All four tenses describe events
          that have happened in the past. The <b>simple past</b> describes
          events that have started and finished in the past. The{" "}
          <b>past continuous</b> describes an event that was in progress at some
          point in the past. The <b>past perfect</b> is used to make it clear
          that one event happened before another in the past. The{" "}
          <b>past perfect continuous</b> shows that an action that started in
          the past continued up until another time in the past.
        </p>
        <div className="btn-container btn-flex">
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-simple"
            className=" btn btn-primary"
          >
            <Button variant="text">Past Simple</Button>
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-continuous"
          >
            <Button variant="text">Past Continuous</Button>
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-perfect"
          >
            <Button variant="text">Past Perfect</Button>
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-perfect-continuous"
          >
            <Button variant="text">Past Perfect Continuous</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Future;
