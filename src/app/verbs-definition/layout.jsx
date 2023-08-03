import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={styles.link} href="/verbs-definition">
            verbs definition
          </Link>
          <Link className={styles.link} href="/verbs-definition/present-tense">
            present
          </Link>
          <Link className={styles.link} href="/verbs-definition/past-tense">
            past
          </Link>
          <Link className={styles.link} href="/verbs-definition/future">
            future
          </Link>
        </nav>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
