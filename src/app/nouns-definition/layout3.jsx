import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link
            className={`${styles.link}`}
         
            href="/nouns-definition"
          >
            noun definition
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/uncountable-countable-nouns"
          >
            Uncountable & countable nouns
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/noun-modifiers"
          >
            Noun modifiers
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/possessive-pronouns"
          >
            Possessive Pronouns
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/collective-nouns"
          >
            Collective Nouns
          </Link>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
