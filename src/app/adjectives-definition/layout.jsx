import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {

  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link className={styles.link} href="/adjectives-definition">
                Adjective definition
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/adjectives-definition/possessive-adjectives"
              >
                Possessive Adjectives
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/adjectives-definition/comparative-adjectives"
              >
                Comparative Adjectives
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/adjectives-definition/superlative-adjectives"
              >
                Superlative Adjectives
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
