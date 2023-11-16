"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const dropdownProps = [
  {
    title: "Noun Definition",
    link: "/nouns-definition",
  },
  {
    title: " Uncountable & Countable Nouns",
    link: "/nouns-definition/uncountable-countable-nouns",
  },
  {
    title: " Collective Nouns",
    link: "/nouns-definition/collective-nouns",
  },
  {
    title: "Noun Modifiers",
    link: "/nouns-definition/noun-modifiers",
  },
  {
    title: " Possessive Pronouns",
    link: "/nouns-definition/possessive-pronouns",
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
