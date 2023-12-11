import React from "react";
import Link from "next/link";

import {
  Container,
  Box,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <List sx={{ marginLeft: "20px", width: "20%" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs"
              >
                Blogs
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs/how-to-prepare-for-your-international-job-interview"
              >
                How to prepare for your international job interview
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs/how-to-be-successful-in-your-next-job-interview"
              >
                How to be successful in your next job interview
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs/how-to-be-a-successful-english-language-learner"
              >
                How to be a successful English language learner
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs/how-to-be-successful-using-english-while-traveling"
              >
                How to be successful using English language while traveling
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", marginTop: "20px" }}>
            <ListItemText>
              <Link
                className={`${styles.phrasal_verbs_link}`}
                href="/other-topics/blogs/why-phrasal-verbs-are-extremely-important-in-english"
              >
                Why phrasal verbs are extremely important in English
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <Stack className={styles.main_content}>{children}</Stack>
      </Box>
    </Container>
  );
};

export default Layout;
