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
              <Link className={styles.link} href="/other-topics/blogs/blog-1">
                How to prepare for your international job interview
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