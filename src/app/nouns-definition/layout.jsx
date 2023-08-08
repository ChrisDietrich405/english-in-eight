import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link className={styles.link} href="/nouns-definition">
                Noun definition
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/nouns-definition/uncountable-countable-nouns"
              >
                Uncountable & Countable
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/nouns-definition/possessive-pronouns"
              >
                Possessive Pronouns
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/nouns-definition/noun-modifiers"
              >
                Noun Modifiers
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/nouns-definition/collective-nouns"
              >
                Collective Nouns
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
