import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className="main-container" style={{ display: "flex" }}>
        <nav className="sidebar" style={{ marginTop: "340px" }}>
          <Link className="sidebar-title" href="/verbs-definition">verbs definition</Link>
          <Link href="/verbs-definition/present-tense">present</Link>
          <Link href="/verbs-definition/past">past</Link>
          <Link href="/verbs-definition/future">future</Link>
        </nav>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
