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
              <Link className={styles.link} href="/verbs-definition">
                Verbs definition
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/present-tense"
              >
                Present verbs
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/verbs-definition/past-tense">
                Past verbs
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/verbs-definition/future">
                Future verbs
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
