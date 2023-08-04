import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={styles.link} href="/verbs-definition/future">
            future verbs definition
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-simple"
          >
            future simple
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-continuous"
          >
            future continuous
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-perfect"
          >
            future perfect
          </Link>
          <Link
            className={styles.link}
            href="/future-verb-tenses/future-perfect-continuous"
          >
            future perfect continuous
          </Link>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
