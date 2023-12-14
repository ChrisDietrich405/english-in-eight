import React from "react";
import Link from "next/link";

import {
  Container,
  Grid,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f3f0f0" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
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
                      href="/other-topics/idiomatic-expressions"
                    >
                      Idiomatic Expressions
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      href="/other-topics/idiomatic-expressions/expressions-list-1"
                    >
                      Expressions List 1
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      //
                      href="/other-topics/idiomatic-expressions/expressions-list-2"
                    >
                      Expressions List 2
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      //
                      href="/other-topics/idiomatic-expressions/expressions-list-3"
                    >
                      Expressions List 3
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    <Link
                      className={styles.link}
                      //
                      href="/other-topics/idiomatic-expressions/expressions-list-4"
                    >
                      Expressions List 4
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid item xs={9} >
            <Stack
              mt={3.75}
              mb={3}
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
