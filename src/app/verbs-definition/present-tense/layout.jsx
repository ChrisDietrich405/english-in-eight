import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/present-tense/simple-present"
              >
                Present Simple
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/present-tense/present-continuous"
              >
                Present Continuous
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/present-tense/present-perfect"
              >
                Present Perfect
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/present-tense/present-perfect-continuous"
              >
                Present Perfect Continuous
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
