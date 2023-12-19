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
    <div style={{ backgroundColor: "#f3f0f0", marginBottom: "20px" }} >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} className={styles.sidebar_wrapper}>
            <Stack
              mt={3.75}
              sx={{
                borderRadius: "9px",
                backgroundColor: "#fff",
              }}
            >
              <List>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link className={styles.link} href="/other-topics/versus">
                      Versus
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/remind-versus-remember"
                    >
                      Remind vs Remember
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/every-versus-all"
                    >
                      Every vs All
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/talk-versus-speak"
                    >
                      Talk vs Speak
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/tell-versus-say"
                    >
                      Tell vs Say
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/tell-versus-say"
                    >
                      Tell vs Say
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/make-versus-do"
                    >
                      Make vs Do
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/listen-versus-hear"
                    >
                      Listen vs Hear
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/versus/for-versus-to"
                    >
                      For vs To
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
