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
              <Link className={`${styles.link}`} href="/other-topics/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/blogs/how-to-prepare-for-your-international-job-interview"
              >
                How to prepare for your international job interview
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/blogs/how-to-be-successful-in-your-next-job-interview"
              >
                How to be successful in your next job interview
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/blogs/how-to-be-a-successful-english-language-learner"
              >
                How to be a successful English language learner
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/other-topics/blogs/why-phrasal-verbs-are-extremely-important-in-english"
              >
                Why phrasal verbs are extremely important in English
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
