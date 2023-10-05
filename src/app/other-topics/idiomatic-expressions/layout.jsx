import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link
                className={`${styles.link}`}
                href="/other-topics/idiomatic-expressions"
              >
                Idiomatic Expressions
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/idiomatic-expressions/expressions-list-1"
              >
                Expressions List 1
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                //
                href="/other-topics/idiomatic-expressions/expressions-list-2"
              >
                Expressions List 2
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                //
                href="/other-topics/idiomatic-expressions/expressions-list-3"
              >
                Expressions List 3
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                //
                href="/other-topics/idiomatic-expressions/expressions-list-4"
              >
                Expressions List 4
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
