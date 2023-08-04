import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={`${styles.link}`} href="/versus">
            Versus
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/versus/remind-versus-remember"
          >
            Remind versus Remember
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/versus/every-versus-all"
          >
            Every versus All
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/phrasal-verbs/phrasal-verbs-list-3"
          >
            Phrasal Verbs List 3
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/phrasal-verbs/phrasal-verbs-list-4"
          >
            Phrasal Verbs List 4
          </Link>
        </nav>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
