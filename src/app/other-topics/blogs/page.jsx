import React from "react";
import Link from "next/link";
import { Container, Button } from "@mui/material";

import styles from "../../styles/blogs.module.css";

const page = () => {
  return (
    <Container>
      <div className={styles.link_container}>
        <h5>How to prepare for your international job interview</h5>
        <p>
          People outside of the U.S. and Europe are very curious about getting
          international jobs, more specifically jobs with U.S. or European
          countries where salaries are much higher. Let's talk about strategies
          that will help you in this process.
        </p>
      </div>
      <Button variant="outlined" className={styles.blog_link}>
        <Link href="/other-topics/blogs/blog-1" className={styles.blog_link}>
          Continue reading
        </Link>
      </Button>
    </Container>
  );
};

export default page;
