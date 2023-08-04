import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={`${styles.link}`} href="/idiomatic-expressions">
            Idiomatic Expressions Definition
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/idiomatic-expressions/expressions-list-1"
          >
            Expressions List 1
          </Link>
          <Link
            className={styles.link}
            //
            href="/other-topics/idiomatic-expressions/expressions-list-2"
          >
            Expressions List 2
          </Link>
          <Link
            className={styles.link}
            //
            href="/other-topics/idiomatic-expressions/expressions-list-3"
          >
            Expressions List 3
          </Link>
          <Link
            className={styles.link}
            //
            href="/other-topics/idiomatic-expressions/expressions-list-4"
          >
            Expressions List 4
          </Link>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
