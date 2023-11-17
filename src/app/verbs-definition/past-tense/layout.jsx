"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const dropdownProps = [
  {
    title: "Past Simple",
    link: "/verbs-definition/past-tense/past-simple",
  },
  {
    title: "Past Continuous",
    link: "/verbs-definition/past-tense/past-continuous",
  },
  {
    title: "Past Perfect",
    link: "/verbs-definition/past-tense/past-perfect",
  },
  {
    title: "Past Perfect Continuous",
    link: "/verbs-definition/past-tense/past-perfect-continuous",
  },
];
const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            {dropdownProps.map((item) => {
              return (
                <li>
                  <Link
                    href={item.link}
                    className={
                      pathname === item.link ? styles.selected : styles.link
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </>
  );
};

export default Layout;
