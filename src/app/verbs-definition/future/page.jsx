import Link from "next/link";

import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

import styles from "../../styles/content-page.module.css";

const Future = () => {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Future Tense Verbs
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          There are many ways to describe the future in English. Any 'future'
          tense will always describe a time 'later than now', but it may also
          express our attitude to the future event.
        </Typography>
        <div
          className={`${styles.links_container} btn-container btn-flex`}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-simple"
          >
            <Button className={styles.link_button} variant="outlined">
              Future Simple
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-continuous"
          >
            <Button className={styles.link_button} variant="outlined">
              Future Continuous
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-perfect"
          >
            <Button className={styles.link_button} variant="outlined">
              Future Perfect
            </Button>
          </Link>
          <Link
            className={styles.link}
            href="/verbs-definition/future/future-perfect-continuous"
          >
            <Button className={styles.link_button} variant="outlined">
              Future Perfect Continuous
            </Button>
          </Link>
        </div>
      </Stack>
    </Container>
  );
};

export default Future;
