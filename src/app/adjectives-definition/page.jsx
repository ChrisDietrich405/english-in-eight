//DONE
import Image from "next/image";

import {
  Container,
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../styles/content-page.module.css";

export default function AdjectiveDefinition() {
  return (
    <Container>
       <Stack className={styles.page_title}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Adjective Definition
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
        Adjectives are used to describe or modify nouns or pronouns, providing
          more information about their qualities, characteristics, or
          attributes. In these examples, the adjectives are in bold.
        </Typography>
      </Stack>
  
      <div className="container">
        <div className="row">
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/happy.jpg"
                alt="happy child"
              />
            </div>
            <p className={styles.picture_subtitle}>Happy</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/small.jpg"
                alt="small dog"
              />
            </div>
            <p className={styles.picture_subtitle}>Small</p>
          </div>
          <div className={`col-md-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/strong.jpg"
                alt="strong person"
              />
            </div>
            <p className={styles.picture_subtitle}>Strong</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
