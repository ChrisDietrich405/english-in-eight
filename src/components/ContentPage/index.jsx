"use client";
// import { Link, Switch, Route } from "react-router-dom";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import parser from "html-react-parser";

import styles from "./styles.module.css";
// import "../styles/pages/images.scss";
import { Style } from "@mui/icons-material";

export default function ContentPage({ links }) {
  const pathname = usePathname();
  return (
    <div className={styles.main_container}>
      <div className={styles.sidebar}>
        <div></div>
        <ul>
          {links.map((link, i) => (
            <li key={i} className={styles.sidebar_left_links}>
              <div></div>
              {/* <Link
                // className={styles.link}
                className={
                  pathname == link.path
                    ? `${styles.sidebar_left_subtitle} ${styles.active}`
                    : styles.sidebar_left_subtitle
                }
                href={link.path}

                // className={classnames("sidebar-left-subtitle", {
                //   active: window.location.pathname === link.path,
                // })}
              >
                {parser(link.title)} pooooooooooooooooooooooo
              </Link> */}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className={styles.content}>
        <Switch>
          {links.map((link, i) => {
            return (
              <Route key={i} path={link.path} component={link.component} />
            );
          })}
        </Switch>
      </div> */}
    </div>
  );
}
