import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link className={styles.link} href="/prepositions-definition">
                Preposition definition
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/prepositions-definition/prepositions-of-time"
              >
                Prepositions of time
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/prepositions-definition/prepositions-of-place"
              >
                Prepositions of place
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
