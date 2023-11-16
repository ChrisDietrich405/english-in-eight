"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const dropdownProps = [
  {
    title: "Prepositions Definition",
    link: "/prepositions-definition",
  },
  {
    title: "Prepositions of Time",
    link: "/prepositions-definition/prepositions-of-time",
  },

  {
    title: "Prepositions of Place",
    link: "/prepositions-definition/prepositions-of-place",
  },
  {
    title: "Prepositions of Movement",
    link: "/prepositions-definition/prepositions-of-movement",
  },
  {
    title: "Dependent Prepositions",
    link: "/prepositions-definition/dependent-prepositions",
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
