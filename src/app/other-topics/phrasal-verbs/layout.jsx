import React from "react";
import Link from "next/link";

import {
  Container,
  Grid,
  Stack,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f3f0f0" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} className={styles.sidebar_wrapper}>
            <Stack
              mt={3.75}
              sx={{
                height: "100vh",
                borderRadius: "9px",
                backgroundColor: "#fff",
              }}
            >
              <List>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={`${styles.link}`}
                      href="/other-topics/phrasal-verbs"
                    >
                      Phrasal Verbs Definition
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/phrasal-verbs/phrasal-verbs-list-1"
                    >
                      Phrasal Verbs List 1
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/phrasal-verbs/phrasal-verbs-list-2"
                    >
                      Phrasal Verbs List 2
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/phrasal-verbs/phrasal-verbs-list-3"
                    >
                      Phrasal Verbs List 3
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/phrasal-verbs/phrasal-verbs-list-4"
                    >
                      Phrasal Verbs List 4
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid item xs={12} md={9} mb={4}>
            <Stack
              mt={3.75}
              p={4}
              sx={{ backgroundColor: "#fff", borderRadius: "9px" }}
            >
              {children}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;
