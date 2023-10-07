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
              <Link className={styles.link} href="/other-topics/versus">
                Versus
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/remind-versus-remember"
              >
                Remind vs Remember
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/every-versus-all"
              >
                Every vs All
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/talk-versus-speak"
              >
                Talk vs Speak
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/tell-versus-say"
              >
                Tell vs Say
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/make-versus-do"
              >
                Make vs Do
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/listen-versus-hear"
              >
                Listen vs Hear
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/versus/for-versus-to"
              >
                For vs To
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
