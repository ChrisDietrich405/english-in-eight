"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const dropdownProps = [
  {
    title: "Future Continuous",
    link: "/verbs-definition/future/future-continuous",
  },
  {
    title: "Future Perfect",
    link: "/verbs-definition/future/future-perfect",
  },

  {
    title: "Future Perfect Continuous",
    link: "/verbs-definition/future/future-perfect-continuous",
  },
  {
    title: "Future Simple",
    link: "/verbs-definition/future/future-simple",
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
