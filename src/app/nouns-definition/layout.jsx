import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={styles.sidebar_title} href="/verbs-definition">
            noun definition
          </Link>
          <Link
            className={styles.sidebar_title}
            href="/verbs-definition/present-tense"
          >
            Uncountable & countable nouns
          </Link>
          <Link
            className={styles.sidebar_title}
            href="/verbs-definition/past-tense"
          >
            Noun modifiers
          </Link>
          <Link
            className={styles.sidebar_title}
            href="/verbs-definition/future"
          >
            Possessive Pronouns
          </Link>
          <Link
            className={styles.sidebar_title}
            href="/verbs-definition/future"
          >
            Collective Nouns
          </Link>
        </nav>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
